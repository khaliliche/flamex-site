import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-black border-t border-red-600/20 text-gray-400 pt-12 pb-8 px-6">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
        <div>
          <p className="text-white font-bold text-2xl mb-2">
            FLAME<span className="text-red-600">X</span>
          </p>
          <p className="text-sm text-gray-500">
            Briquets torch premium, designs uniques faits pour durer.
          </p>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-white font-semibold mb-1 text-sm uppercase tracking-wide">Navigation</p>
          <Link href="/" className="text-sm hover:text-red-500 transition-colors">Accueil</Link>
          <Link href="/catalogue" className="text-sm hover:text-red-500 transition-colors">Catalogue</Link>
          <Link href="/panier" className="text-sm hover:text-red-500 transition-colors">Panier</Link>
        </div>

        <div className="flex flex-col gap-2 items-center md:items-start">
          <p className="text-white font-semibold mb-1 text-sm uppercase tracking-wide">Contact</p>
          <p className="text-sm">Salé, Maroc</p>
          <p className="text-sm">Livraison partout au Maroc</p>
          <a
            href="https://www.instagram.com/flamex.store1/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm hover:text-red-500 transition-colors"
          >
            Instagram @flamex.store1
          </a>
        </div>
      </div>

      <div className="max-w-5xl mx-auto mt-10 pt-6 border-t border-white/5 text-center text-xs text-gray-600">
        © {new Date().getFullYear()} FlameX. Tous droits réservés.
      </div>
    </footer>
  )
}
