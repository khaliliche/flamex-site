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
      whileHover={{ y: -6 }}
      className="bg-zinc-900 border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500 hover:shadow-[0_0_25px_rgba(255,140,0,0.25)] transition-all group"
    >
      <Link href={`/produit/${product.id}`} className="block aspect-square bg-zinc-800 relative overflow-hidden">
        {media[current] && (
          isVideo(media[current]) ? (
            <video src={media[current]} className="w-full h-full object-cover" muted />
          ) : (
            <img src={media[current]} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
          )
        )}
        {media.length > 1 && (
          <div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1">
            {media.map((_, i) => (
              <button
                key={i}
                onClick={(e) => { e.preventDefault(); setCurrent(i) }}
                className={`w-2 h-2 rounded-full transition ${i === current ? 'bg-orange-500' : 'bg-white/40'}`}
              />
            ))}
          </div>
        )}
        {!product.stock && (
          <div className="absolute top-2 right-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded">
            Rupture
          </div>
        )}
      </Link>
      <div className="p-4">
        <Link href={`/produit/${product.id}`}>
          <h3 className="text-white font-semibold mb-1 hover:text-orange-500 transition">{product.name}</h3>
        </Link>
        <p className="text-orange-500 font-bold mb-2">{product.price} DH</p>
        {product.colors?.length > 0 && (
          <div className="flex gap-1 flex-wrap mb-3">
            {product.colors.map((color, i) => (
              <button
                key={i}
                onClick={() => setSelectedColor(color)}
                className={`text-xs px-2 py-1 rounded-full border transition ${selectedColor === color ? 'bg-orange-500 text-black border-orange-500' : 'bg-zinc-800 text-gray-300 border-zinc-700'}`}
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
          className="w-full bg-orange-500 text-black font-bold py-2 rounded-lg hover:bg-orange-400 transition disabled:bg-zinc-700 disabled:text-gray-400 disabled:cursor-not-allowed"
        >
          {!product.stock ? 'Rupture de stock' : added ? 'Ajoute !' : 'Ajouter au panier'}
        </motion.button>
      </div>
    </motion.div>
  )
}