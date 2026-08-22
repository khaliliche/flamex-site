"use client"
import { motion } from "framer-motion"

const badges = [
  { icon: "/badges/livraison.png", title: "Livraison rapide", desc: "Partout au Maroc, 24-72h" },
  { icon: "/badges/paiement.png", title: "Paiement a la livraison", desc: "Vous payez a reception" },
  { icon: "/badges/qualite.png", title: "Flamme torch premium", desc: "Windproof, gaz rechargeable" },
  { icon: "/badges/unique.png", title: "Gravure faite main", desc: "Dragon, Ange, Carte, Rond" },
]

export default function TrustBadges() {
  return (
    <section className="relative py-16 px-6 bg-zinc-950 border-y border-red-600/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-red-600/10 max-w-5xl mx-auto rounded-xl overflow-hidden">
        {badges.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-zinc-950 text-center px-4 py-8 hover:bg-black transition-colors"
          >
            <img src={b.icon} alt={b.title} className="w-12 h-12 object-contain mx-auto mb-4" />
            <p className="font-display uppercase tracking-wide text-white font-semibold text-sm mb-1">{b.title}</p>
            <p className="text-gray-500 text-xs">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
