'use client'
import { useEffect } from 'react'

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  useEffect(() => {
    console.error('[app/global-error.tsx] Uncaught root error:', error)
  }, [error])

  return (
    <html lang="fr">
      <body className="bg-black min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <h1 className="text-3xl font-bold text-white mb-3">
            FLAME<span style={{ color: '#dc2626' }}>X</span>
          </h1>
          <p className="text-gray-400 mb-6 max-w-sm mx-auto">
            Le site rencontre un problème. Réessayez dans un instant.
          </p>
          <button
            onClick={reset}
            className="bg-red-600 text-white font-bold px-6 py-3 rounded-full hover:bg-red-500 transition"
          >
            Réessayer
          </button>
        </div>
      </body>
    </html>
  )
}