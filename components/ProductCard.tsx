'use client'
import { Product } from '@/lib/types'
import { useState } from 'react'
import { useCart } from '@/lib/cart-context'
import { motion } from 'framer-motion'
import Link from 'next/link'

export default function ProductCard({ product }: { product: Product }) {
  const [current, setCurrent] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || '')
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const media = product.images || []
  const isVideo = (url: string) => /\.(mp4|mov|webm)$/i.test(url)

  const handleAdd = () => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      color: selectedColor || undefined,
      image: media[0],
    })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-50px' }}
      transition={{ duration: 0.5 }}
      whileHover={{ y: -8 }}
      className="bg-zinc-900 border border-red-600/20 rounded-2xl overflow-hidden hover:border-red-600 hover:shadow-[0_8px_40px_rgba(220,38,38,0.3)] transition-all duration-300 group"
    >
      <Link href={`/produit/${product.id}`} className="block aspect-square bg-zinc-800 relative overflow-hidden">
        {media[current] && (
          isVideo(media[current]) ? (
            <video src={media[current]} className="w-full h-full object-cover" muted />
          ) : (
            <img src={media[current]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          )
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        {media.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrent(i) }}
                className={`w-2 h-2 rounded-full transition ${i === current ? 'bg-red-600' : 'bg-white/40'}`}
              />
            ))}
          </div>
        )}
        {!product.stock && (
          <div className="absolute top-3 right-3 bg-red-600 text-white text-[10px] font-display uppercase tracking-wider font-bold px-2.5 py-1 rounded-full shadow-[0_0_15px_rgba(220,38,38,0.5)]">
            Rupture
          </div>
        )}
      </Link>
      <div className="p-5">
        <Link href={`/produit/${product.id}`}>
          <h3 className="font-display uppercase tracking-wide text-white font-semibold text-sm mb-1.5 hover:text-red-600 transition">{product.name}</h3>
        </Link>
        <p className="text-red-600 font-display font-bold text-lg mb-3">{product.price} <span className="text-xs align-top">DH</span></p>
        {product.colors?.length > 0 && (
          <div className="flex gap-1.5 flex-wrap mb-4">
            {product.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`text-[11px] font-medium px-2.5 py-1 rounded-full border transition ${selectedColor === color ? 'bg-red-600 text-white border-red-600' : 'bg-zinc-800 text-gray-300 border-zinc-700 hover:border-red-600/50'}`}
              >
                {color}
              </button>
            ))}
          </div>
        )}
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={handleAdd}
          disabled={!product.stock}
          className="w-full bg-red-600 text-white font-display uppercase tracking-wide text-xs font-bold py-3 rounded-lg hover:bg-red-500 hover:shadow-[0_0_20px_rgba(220,38,38,0.4)] transition-all disabled:bg-zinc-700 disabled:text-gray-400 disabled:shadow-none disabled:cursor-not-allowed"
        >
          {!product.stock ? 'Rupture de stock' : added ? 'Ajoute !' : 'Ajouter au panier'}
        </motion.button>
      </div>
    </motion.div>
  )
}
