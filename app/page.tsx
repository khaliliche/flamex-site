import Link from 'next/link'

export default function Home() {
  return (
    <main>
      <section className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-gradient-to-b from-black via-zinc-900 to-black">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
          FLAME<span className="text-orange-500">X</span>
        </h1>
        <p className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl">
          Briquets torch premium - Dragon, Ange, Carte, Rond
        </p>
        <Link
          href="/catalogue"
          className="bg-orange-500 text-black font-bold px-8 py-4 rounded-full hover:bg-orange-400 transition"
        >
          Voir le catalogue
        </Link>
      </section>

      <section className="py-16 px-6 bg-black">
        <h2 className="text-3xl font-bold text-white text-center mb-12">
          Nos collections
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
          <Link href="/catalogue?category=dragon" className="group">
            <div className="aspect-square bg-zinc-900 border border-orange-500/20 rounded-xl flex items-center justify-center group-hover:border-orange-500 transition">
              <span className="text-white font-semibold">Dragon</span>
            </div>
          </Link>
          <Link href="/catalogue?category=ange" className="group">
            <div className="aspect-square bg-zinc-900 border border-orange-500/20 rounded-xl flex items-center justify-center group-hover:border-orange-500 transition">
              <span className="text-white font-semibold">Ange</span>
            </div>
          </Link>
          <Link href="/catalogue?category=carte" className="group">
            <div className="aspect-square bg-zinc-900 border border-orange-500/20 rounded-xl flex items-center justify-center group-hover:border-orange-500 transition">
              <span className="text-white font-semibold">Carte Flamme</span>
            </div>
          </Link>
          <Link href="/catalogue?category=rond" className="group">
            <div className="aspect-square bg-zinc-900 border border-orange-500/20 rounded-xl flex items-center justify-center group-hover:border-orange-500 transition">
              <span className="text-white font-semibold">Rond</span>
            </div>
          </Link>
        </div>
      </section>
    </main>
  )
}