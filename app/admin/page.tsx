'use client'
import { useActionState } from 'react'
import { loginAdmin, type LoginState } from '@/lib/actions'

const initialState: LoginState = {}

export default function AdminLoginPage() {
  const [state, formAction, isPending] = useActionState(loginAdmin, initialState)

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6">
      <form action={formAction} className="bg-zinc-900 border border-red-600/30 rounded-xl p-8 w-full max-w-sm">
        <h1 className="text-2xl font-bold text-white mb-1 text-center">
          FLAME<span className="text-red-600">X</span>
        </h1>
        <p className="text-gray-500 text-sm text-center mb-6">Espace administrateur</p>

        <input
          type="password"
          name="password"
          placeholder="Mot de passe"
          required
          autoFocus
          className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white mb-4 focus:border-red-600 outline-none transition"
        />

        {state?.error && (
          <p className="text-red-500 text-sm mb-4 text-center">{state.error}</p>
        )}

        <button
          type="submit"
          disabled={isPending}
          className="w-full bg-red-600 text-white font-bold py-3 rounded-lg hover:bg-red-500 transition disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isPending ? 'Connexion...' : 'Se connecter'}
        </button>
      </form>
    </main>
  )
}