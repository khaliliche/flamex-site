'use client'
import { useEffect } from 'react'

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[app/error.tsx] Uncaught error:', error)
  }, [error])

  return (
    <main className="min-h-screen bg-black flex items-center justify-center px-6 text-center">
      <div>
        <h1 className="text-3xl font-bold text-white mb-3">
          FLAME<span className="text-red-600">X</span>
        </h1>
        <p className="text-gray-400 mb-6 max-w-sm mx-auto">
          Un problème temporaire est survenu. Réessayez dans un instant.
        </p>
        <button
          onClick={reset}
          className="bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-500 transition"
        >
          Réessayer
        </button>
      </div>
    </main>
  )
}