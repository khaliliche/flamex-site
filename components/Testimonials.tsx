import { Testimonial } from "@/lib/types"

function Stars({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5 mb-3" aria-label={`${rating} sur 5`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <svg key={i} viewBox="0 0 20 20" className={`w-4 h-4 ${i < rating ? "fill-red-600" : "fill-zinc-700"}`}>
          <path d="M10 1.5l2.6 5.4 5.9.7-4.3 4.1 1 5.9-5.2-2.8-5.2 2.8 1-5.9L1.5 7.6l5.9-.7L10 1.5z" />
        </svg>
      ))}
    </div>
  )
}

export default function Testimonials({ testimonials }: { testimonials: Testimonial[] }) {
  if (testimonials.length === 0) return null

  const loop = [...testimonials, ...testimonials]

  return (
    <section className="py-20 bg-black overflow-hidden">
      <h2 className="font-display uppercase text-3xl md:text-4xl font-bold text-white text-center mb-3 px-6">
        Ce qu&apos;ils <span className="text-red-600">en disent</span>
      </h2>
      <p className="text-gray-500 text-center mb-12 max-w-md mx-auto px-6">
        Avis vérifiés de clients partout au Maroc.
      </p>

      <div className="relative">
        <div className="absolute left-0 top-0 bottom-0 w-16 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none" />

        <div className="flex gap-6 testimonial-marquee hover:[animation-play-state:paused]">
          {loop.map((t, i) => (
            <div
              key={`${t.id}-${i}`}
              className="bg-zinc-900 border border-red-900/15 rounded-xl p-6 w-80 shrink-0"
            >
              <Stars rating={t.rating} />
              <p className="text-gray-300 text-sm leading-relaxed mb-5">{t.quote}</p>
              <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500">{t.city}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}