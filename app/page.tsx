import { getProducts, getGallery } from "@/lib/products"
import { getTestimonials } from "@/lib/testimonials"
import HeroSection from "@/components/HeroSection"
import CategoryGrid from "@/components/CategoryGrid"
import TrustBadges from "@/components/TrustBadges"
import InstagramCTA from "@/components/InstagramCTA"
import HomeGallery from "@/components/HomeGallery"
import Testimonials from "@/components/Testimonials"
import StrikeDivider from "@/components/StrikeDivider"

export default async function Home() {
  const products = await getProducts()
  const gallery = await getGallery()
  const testimonials = await getTestimonials()

  const findImage = (category: string) =>
    products.find(
      (p) => p.category === category && p.images?.length > 0
    )?.images[0]

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
        <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-white text-center mb-3">
          Nos <span className="text-red-600">collections</span>
        </h2>

        <p className="text-gray-500 text-center mb-16 max-w-md mx-auto">
          Quatre designs signature, chacun gravé à la main.
        </p>

        <CategoryGrid images={images} />
      </section>

      <StrikeDivider />

      <HomeGallery images={gallery} />

      <Testimonials testimonials={testimonials} />

      <section className="py-16 px-6 bg-zinc-950 border-y border-red-600/10 text-center">
        <h2 className="font-display uppercase text-2xl md:text-3xl font-bold text-white mb-3">
          Suis-nous sur <span className="text-red-600">Instagram</span>
        </h2>

        <p className="text-gray-500 mb-8 max-w-md mx-auto">
          Nouveautés, coulisses et commandes en story.
        </p>

        <InstagramCTA />
      </section>

      <section className="relative py-20 px-6 bg-black overflow-hidden text-center">
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-red-600/15 blur-[120px] pointer-events-none" />

        <div className="relative max-w-2xl mx-auto">
          <p className="font-display uppercase text-white text-2xl md:text-3xl font-bold mb-3">
            Paiement à la livraison
          </p>

          <p className="text-gray-400 mb-8">
            Livraison partout au Maroc — commande simple via WhatsApp.
          </p>

          <a
            href="https://wa.me/212706560249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-red-600 text-white font-display uppercase tracking-wide text-sm font-semibold px-9 py-4 rounded-full hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] transition-all"
          >
            Commander maintenant
          </a>
        </div>
      </section>
    </main>
  )
}