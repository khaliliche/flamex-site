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
    angle: "/categories/angle.jpg",
    carte: findImage("carte"),
    rond: findImage("rond"),
  }

  return (
    <main>
      <HeroSection />

      <TrustBadges />

      <section className="relative bg-black px-6 py-20">
        <h2 className="mb-3 text-center font-display text-3xl font-bold uppercase text-white md:text-4xl">
          Nos <span className="text-red-600">collections</span>
        </h2>

        <p className="mx-auto mb-16 max-w-md text-center text-gray-500">
          Quatre designs signature, chacun gravé à la main.
        </p>

        <CategoryGrid images={images} />
      </section>

      <StrikeDivider />

      <HomeGallery images={gallery} />

      <Testimonials testimonials={testimonials} />

      <section className="border-y border-red-600/10 bg-zinc-950 px-6 py-16 text-center">
        <h2 className="mb-3 font-display text-2xl font-bold uppercase text-white md:text-3xl">
          Suis-nous sur <span className="text-red-600">Instagram</span>
        </h2>

        <p className="mx-auto mb-8 max-w-md text-gray-500">
          Nouveautés, coulisses et commandes en story.
        </p>

        <InstagramCTA />
      </section>

      <section className="relative overflow-hidden bg-black px-6 py-20 text-center">
        <div className="pointer-events-none absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/15 blur-[120px]" />

        <div className="relative mx-auto max-w-2xl">
          <p className="mb-3 font-display text-2xl font-bold uppercase text-white md:text-3xl">
            Paiement à la livraison
          </p>

          <p className="mb-8 text-gray-400">
            Livraison partout au Maroc — commande simple via WhatsApp.
          </p>

          <a
            href="https://wa.me/212706821094"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-red-600 px-9 py-4 font-display text-sm font-semibold uppercase tracking-wide text-white transition-all hover:bg-red-500 hover:shadow-[0_0_35px_rgba(220,38,38,0.6)]"
          >
            Commander maintenant
          </a>
        </div>
      </section>
    </main>
  )
}