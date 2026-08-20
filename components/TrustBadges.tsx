"use client"
import { motion } from "framer-motion"

const badges = [
  { icon: "/badges/livraison.png", title: "Livraison rapide", desc: "Partout au Maroc" },
  { icon: "/badges/paiement.png", title: "Paiement a la livraison", desc: "Payez a reception" },
  { icon: "/badges/qualite.png", title: "Qualite premium", desc: "Briquets torch design" },
  { icon: "/badges/unique.png", title: "Designs uniques", desc: "Dragon, Ange, Carte, Rond" },
]

export default function TrustBadges() {
  return (
    <section className="py-16 px-6 bg-zinc-950 border-y border-red-600/10">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {badges.map((b, i) => (
          <motion.div
            key={b.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="text-center"
          >
            <img src={b.icon} alt={b.title} className="w-14 h-14 object-contain mx-auto mb-3" />
            <p className="text-white font-semibold text-sm mb-1">{b.title}</p>
            <p className="text-gray-500 text-xs">{b.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}