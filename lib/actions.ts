'use server'
import { sql } from './db'
import { put } from '@vercel/blob'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createAdminSession, destroyAdminSession, requireAdmin } from './auth'

export type LoginState = { error?: string }

export async function loginAdmin(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get('password') as string
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return { error: "Configuration manquante : ADMIN_PASSWORD n'est pas défini sur le serveur." }
  }
  if (!password || password !== adminPassword) {
    return { error: 'Mot de passe incorrect.' }
  }

  await createAdminSession()
  redirect('/admin/dashboard')
}

export async function logoutAdmin() {
  await destroyAdminSession()
  redirect('/admin')
}

function toPgArray(arr: string[]): string {
  return '{' + arr.map(v => '"' + v.replace(/\\/g, '\\\\').replace(/"/g, '\\"') + '"').join(',') + '}'
}

export async function uploadImage(formData: FormData): Promise<{ url: string } | { error: string }> {
  await requireAdmin()
  const file = formData.get('file') as File
  if (!file) return { error: 'Aucun fichier' }

  const cleanName = file.name
    .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-zA-Z0-9.-]/g, '-')
  const fileName = `${Date.now()}-${cleanName}`

  try {
    const blob = await put(fileName, file, { access: 'public' })
    return { url: blob.url }
  } catch (error) {
    console.error('[uploadImage] Blob error:', error)
    return { error: "Erreur lors de l'upload" }
  }
}

export async function addProduct(formData: FormData) {
  await requireAdmin()

  const name = formData.get('name') as string
  const price = Number(formData.get('price'))
  const category = formData.get('category') as string
  const description = formData.get('description') as string
  const imagesRaw = formData.get('images') as string
  const images = imagesRaw.split(',').map(url => url.trim()).filter(Boolean)
  const colorsRaw = formData.get('colors') as string
  const colors = colorsRaw.split(',').map(c => c.trim()).filter(Boolean)

  await sql`
    INSERT INTO products (name, price, category, description, images, colors, stock)
    VALUES (${name}, ${price}, ${category}, ${description}, ${toPgArray(images)}::text[], ${toPgArray(colors)}::text[], true)
  `

  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function deleteProduct(id: string) {
  await requireAdmin()
  await sql`DELETE FROM products WHERE id = ${id}`
  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function toggleStock(id: string, currentStock: boolean) {
  await requireAdmin()
  await sql`UPDATE products SET stock = ${!currentStock} WHERE id = ${id}`
  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function updateProduct(id: string, formData: FormData) {
  await requireAdmin()

  const name = formData.get('name') as string
  const price = Number(formData.get('price'))
  const category = formData.get('category') as string
  const description = formData.get('description') as string
  const imagesRaw = formData.get('images') as string
  const images = imagesRaw.split(',').map(url => url.trim()).filter(Boolean)
  const colorsRaw = formData.get('colors') as string
  const colors = colorsRaw.split(',').map(c => c.trim()).filter(Boolean)

  await sql`
    UPDATE products
    SET name = ${name}, price = ${price}, category = ${category},
        description = ${description}, images = ${toPgArray(images)}::text[], colors = ${toPgArray(colors)}::text[]
    WHERE id = ${id}
  `

  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function addGalleryImage(url: string) {
  await requireAdmin()
  await sql`INSERT INTO gallery (url) VALUES (${url})`
  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function deleteGalleryImage(id: string) {
  await requireAdmin()
  await sql`DELETE FROM gallery WHERE id = ${id}`
  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function addTestimonial(formData: FormData) {
  await requireAdmin()

  const quote = formData.get('quote') as string
  const city = formData.get('city') as string
  const rating = Math.min(5, Math.max(1, Number(formData.get('rating')) || 5))

  await sql`INSERT INTO testimonials (quote, city, rating) VALUES (${quote}, ${city}, ${rating})`
  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function updateTestimonial(id: string, formData: FormData) {
  await requireAdmin()

  const quote = formData.get('quote') as string
  const city = formData.get('city') as string
  const rating = Math.min(5, Math.max(1, Number(formData.get('rating')) || 5))

  await sql`UPDATE testimonials SET quote = ${quote}, city = ${city}, rating = ${rating} WHERE id = ${id}`
  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function deleteTestimonial(id: string) {
  await requireAdmin()
  await sql`DELETE FROM testimonials WHERE id = ${id}`
  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}
