import { cookies } from 'next/headers'
import crypto from 'crypto'

const COOKIE_NAME = 'flamex_admin_session'
const MAX_AGE_MS = 1000 * 60 * 60 * 24 * 7 // 7 days

function getSecret(): string {
  const secret = process.env.ADMIN_SESSION_SECRET
  if (!secret) {
    throw new Error(
      'ADMIN_SESSION_SECRET is not set. Add it to your environment variables (any long random string).'
    )
  }
  return secret
}

function sign(value: string): string {
  return crypto.createHmac('sha256', getSecret()).update(value).digest('hex')
}

export async function createAdminSession(): Promise<void> {
  const issuedAt = Date.now().toString()
  const token = `${issuedAt}.${sign(issuedAt)}`
  const store = await cookies()
  store.set(COOKIE_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    maxAge: MAX_AGE_MS / 1000,
  })
}

export async function destroyAdminSession(): Promise<void> {
  const store = await cookies()
  store.delete(COOKIE_NAME)
}

export async function isAdminSessionValid(): Promise<boolean> {
  const store = await cookies()
  const token = store.get(COOKIE_NAME)?.value
  if (!token) return false

  const [issuedAt, signature] = token.split('.')
  if (!issuedAt || !signature) return false

  const expected = sign(issuedAt)
  const sigBuf = Buffer.from(signature)
  const expBuf = Buffer.from(expected)
  if (sigBuf.length !== expBuf.length) return false
  if (!crypto.timingSafeEqual(sigBuf, expBuf)) return false

  const age = Date.now() - Number(issuedAt)
  if (Number.isNaN(age) || age > MAX_AGE_MS) return false

  return true
}

export async function requireAdmin(): Promise<void> {
  const ok = await isAdminSessionValid()
  if (!ok) {
    throw new Error('Non autorisé — session admin invalide ou expirée.')
  }
}