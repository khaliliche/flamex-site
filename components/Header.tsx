'use client'
import Link from 'next/link'
import Image from 'next/image'
import { useCart } from '@/lib/cart-context'

export default function Header() {
  const { items } = useCart()
  const count = items.reduce((sum, i) => sum + i.quantity, 0)

  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-red-600/30 px-6 py-3 flex justify-between items-center">
      <Link href="/" className="flex items-center gap-2">
        <Image src="/logo.png" alt="FlameX" width={40} height={40} className="object-contain" />
        <span className="text-2xl font-bold text-white tracking-tight">
          FLAME<span className="text-red-600">X</span>
        </span>
      </Link>

      <nav className="flex items-center gap-6 text-white text-sm font-medium">
        <Link href="/" className="hover:text-red-500 transition-colors">
          Accueil
        </Link>
        <Link href="/catalogue" className="hover:text-red-500 transition-colors">
          Catalogue
        </Link>
        <Link href="/panier" className="flex items-center gap-2 hover:text-red-500 transition-colors">
          <span>Panier</span>
          {count > 0 && (
            <span className="flex items-center justify-center min-w-5 h-5 px-1 rounded-full bg-red-600 text-white text-xs font-bold">
              {count}
            </span>
          )}
        </Link>
      </nav>
    </header>
  )
}
