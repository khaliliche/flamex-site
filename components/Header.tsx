import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-orange-500/30 px-6 py-4 flex justify-between items-center">
      <Link href="/" className="text-2xl font-bold text-white">
        FLAME<span className="text-orange-500">X</span>
      </Link>
      <nav className="flex gap-6 text-white">
        <Link href="/" className="hover:text-orange-500 transition">Accueil</Link>
        <Link href="/catalogue" className="hover:text-orange-500 transition">Catalogue</Link>
        <Link href="/panier" className="hover:text-orange-500 transition">Panier</Link>
      </nav>
    </header>
  )
}