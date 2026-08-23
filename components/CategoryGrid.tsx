'use client'
import Link from 'next/link'
import { motion } from 'framer-motion'

type CategoryImages = {
  dragon?: string
  ange?: string
  carte?: string
  rond?: string
}

export default function CategoryGrid({ images }: { images: CategoryImages }) {
  const categories = [
    { name: 'Dragon', slug: 'dragon', img: images.dragon },
    { name: 'Angle', slug: 'ange', img: images.ange },
    { name: 'Carte Flamme', slug: 'carte', img: images.carte },
    { name: 'Rond', slug: 'rond', img: images.rond },
  ]

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
      {categories.map((cat, i) => (
        <motion.div
          key={cat.slug}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
        >
          <Link href={`/catalogue?category=${cat.slug}`} className="group block">
            <div className="aspect-square bg-zinc-900 border border-red-600/20 rounded-xl relative overflow-hidden group-hover:border-red-600 group-hover:shadow-[0_0_25px_rgba(220,38,38,0.4)] group-hover:-translate-y-1 transition-all duration-300">
              {cat.img ? (
                <img
                  src={cat.img}
                  alt={cat.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center">
                  <span className="text-gray-600 text-sm">Pas de photo</span>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/10 to-transparent" />
              <span className="absolute bottom-3 left-0 right-0 text-center text-white font-semibold text-lg">
                {cat.name}
              </span>
            </div>
          </Link>
        </motion.div>
      ))}
    </div>
  )
}
