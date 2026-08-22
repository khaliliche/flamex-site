"use client"
import { motion } from "framer-motion"

const badges = [
  {
    title: "Livraison rapide",
    desc: "Partout au Maroc, 24-72h",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M1 7h13v9H1z" />
        <path d="M14 10h4l3 3v3h-7z" />
        <circle cx="6" cy="18" r="1.5" />
        <circle cx="17" cy="18" r="1.5" />
      </svg>
    ),
  },
  {
    title: "Paiement a la livraison",
    desc: "Vous payez a reception",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="6" width="20" height="13" rx="2" />
        <path d="M2 10h20" />
        <path d="M6 15h4" />
      </svg>
    ),
  },
  {
    title: "Flamme torch premium",
    desc: "Windproof, gaz rechargeable",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2c2 3-1 4-1 7a3 3 0 1 0 6 0c0-1-.5-2-1-3 2 1 3 4 3 6a7 7 0 1 1-14 0c0-4 3-6 4-8 .5-1 1.5-1.5 3-2z" />
      </svg>
    ),
  },
  {
    title: "Gravure faite main",
    desc: "Dragon, Ange, Carte, Rond",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2 3 8l9 6 9-6-9-6z" />
        <path d="M3 8v8l9 6 9-6V8" />
        <path d="M12 14v8" />
      </svg>
    ),
  },
]

export default function TrustBadges() {
  return (
    <section className="relative py-16 px-6 bg-zinc-950 border-y border-red-900/20">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-red-900/15 max-w-5xl mx-auto rounded-xl overflow-hidden">
        {badges.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="group bg-zinc-950 text-center px-4 py-8 hover:bg-black transition-colors"
          >
            <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-black/60 ring-1 ring-red-900/40 flex items-center justify-center text-red-700 group-hover:text-red-500 group-hover:ring-red-600/50 transition-colors">
              <span className="w-6 h-6 block">{b.icon}</span>
            </div>
            <p className="font-display uppercase tracking-wide text-white font-semibold text-sm mb-1">{b.title}</p>
            <p className="text-gray-500 text-xs">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}