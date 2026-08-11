'use client'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function AdminLogin() {
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    if (password === 'sohailflame@') {
      sessionStorage.setItem('admin_auth', 'true')
      router.push('/admin/dashboard')
    } else {
      setError('Mot de passe incorrect')
    }
  }

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <form onSubmit={handleLogin} className="bg-zinc-900 border border-orange-500/30 rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-6 text-center">
          Admin FLAME<span className="text-orange-500">X</span>
        </h1>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Mot de passe"
          className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white mb-4 focus:border-orange-500 outline-none"
        />
        {error && <p className="text-red-500 text-sm mb-4">{error}</p>}
        <button
          type="submit"
          className="w-full bg-orange-500 text-black font-bold py-3 rounded-lg hover:bg-orange-400 transition"
        >
          Se connecter
        </button>
      </form>
    </main>
  )
}