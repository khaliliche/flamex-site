"use client"
import { motion } from "framer-motion"

// Remplacez ces citations par de vrais avis clients (captures Instagram / WhatsApp) des que vous en avez.
const reviews = [
  { quote: "Le design Dragon est encore plus impressionnant en vrai. Livraison en 2 jours a Sale.", city: "Client verifie — Sale" },
  { quote: "Flamme torch puissante, tient meme dehors avec du vent. Tres bonne finition.", city: "Client verifie — Rabat" },
  { quote: "J'ai commande le modele Carte pour un cadeau, l'emballage etait nickel.", city: "Client verifie — Casablanca" },
]

export default function Testimonials() {
  return (
    <section className="py-20 px-6 bg-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="font-display uppercase text-3xl md:text-4xl font-bold text-white text-center mb-3"
      >
        Ce qu&apos;ils <span className="text-red-600">en disent</span>
      </motion.h2>
      <p className="text-gray-500 text-center mb-12 max-w-md mx-auto">
        Avis verifies de clients partout au Maroc.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {reviews.map((r, i) => (
          <motion.div
            key={r.city}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-zinc-900 border border-red-600/15 rounded-xl p-6"
          >
            <p className="font-mono text-red-600 text-2xl leading-none mb-3">&ldquo;</p>
            <p className="text-gray-300 text-sm leading-relaxed mb-5">{r.quote}</p>
            <p className="font-mono text-[11px] uppercase tracking-widest text-gray-500">{r.city}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
