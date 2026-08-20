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
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-3">
          Nos <span className="text-red-600">collections</span>
        </h2>
        <p className="text-gray-500 text-center mb-16 max-w-md mx-auto">
          Quatre designs signature, chacun grave a la main.
        </p>
        <CategoryGrid images={images} />
      </section>

      <HomeGallery images={gallery} />

      <section className="py-16 px-6 bg-zinc-950 border-y border-red-600/10 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
          Suis-nous sur <span className="text-red-600">Instagram</span>
        </h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Nouveautes, coulisses et commandes en story.
        </p>
        <InstagramCTA />
      </section>

      <section className="py-16 px-6 bg-gradient-to-r from-red-700 via-red-600 to-red-700 text-center">
        <div className="max-w-2xl mx-auto">
          <p className="text-white text-xl md:text-2xl font-bold mb-2">Paiement a la livraison</p>
          <p className="text-red-100">Livraison partout au Maroc - Commande simple via WhatsApp</p>
        </div>
      </section>
    </main>
  )
}