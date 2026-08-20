"use client"
import { motion } from "framer-motion"

type GalleryImage = { id: string; url: string }

export default function HomeGallery({ images }: { images: GalleryImage[] }) {
  if (images.length === 0) return null

  return (
    <section className="py-20 px-6 bg-black">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-3xl md:text-4xl font-bold text-white text-center mb-12"
      >
        Nos <span className="text-red-600">creations</span>
      </motion.h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-5xl mx-auto">
        {images.map((img, i) => (
          <motion.div
            key={img.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.05 }}
            className="aspect-square rounded-xl overflow-hidden border border-red-600/20 hover:border-red-600 hover:shadow-[0_0_20px_rgba(220,38,38,0.3)] transition-all"
          >
            <img src={img.url} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
          </motion.div>
        ))}
      </div>
    </section>
  )
}