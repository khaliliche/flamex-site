import { getProducts, getGallery } from "@/lib/products"
import HeroSection from "@/components/HeroSection"
import CategoryGrid from "@/components/CategoryGrid"
import TrustBadges from "@/components/TrustBadges"
import InstagramCTA from "@/components/InstagramCTA"
import HomeGallery from "@/components/HomeGallery"

export default async function Home() {
  const products = await getProducts()
  const gallery = await getGallery()

  const findImage = (category: string) =>
    products.find((p) => p.category === category && p.images?.length > 0)?.images[0]

  const images = {
    dragon: findImage("dragon"),
    ange: findImage("ange"),
    carte: findImage("carte"),
    rond: findImage("rond"),
  }

  return (
    <main>
      <HeroSection />
      <TrustBadges />

      <section className="py-20 px-6 bg-black relative">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-16">
          Nos <span className="text-orange-500">collections</span>
        </h2>
        <CategoryGrid images={images} />
      </section>

      <HomeGallery images={gallery} />

      <InstagramCTA />

      <section className="py-16 px-6 bg-gradient-to-b from-black to-zinc-950 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-orange-500 font-semibold mb-2">Paiement a la livraison</p>
          <p className="text-gray-400">Livraison partout au Maroc - Commande simple via WhatsApp</p>
        </div>
      </section>
    </main>
  )
}
