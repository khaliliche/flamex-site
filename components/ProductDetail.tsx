"use client"
import { Product } from "@/lib/types"
import { useState } from "react"
import { useCart } from "@/lib/cart-context"
import { motion } from "framer-motion"
import Link from "next/link"

export default function ProductDetail({ product }: { product: Product }) {
  const [current, setCurrent] = useState(0)
  const [selectedColor, setSelectedColor] = useState(product.colors?.[0] || "")
  const [added, setAdded] = useState(false)
  const { addItem } = useCart()
  const media = product.images || []
  const isVideo = (url: string) => /\.(mp4|mov|webm)$/i.test(url)

  const handleAdd = () => {
    addItem({ id: product.id, name: product.name, price: product.price, color: selectedColor || undefined, image: media[0] })
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10">
        <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
          <div className="aspect-square bg-zinc-900 rounded-xl overflow-hidden border border-red-600/20 mb-4 shadow-[0_0_40px_rgba(220,38,38,0.1)]">
            {media[current] && (isVideo(media[current]) ? <video src={media[current]} className="w-full h-full object-cover" controls autoPlay muted loop /> : <img src={media[current]} alt={product.name} className="w-full h-full object-cover" />)}
          </div>
          {media.length > 1 && (
            <div className="flex gap-2 flex-wrap">
              {media.map((url, i) => (
                <button key={i} onClick={() => setCurrent(i)} className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition ${i === current ? "border-red-600 shadow-[0_0_10px_rgba(220,38,38,0.5)]" : "border-zinc-700"}`}>
                  {isVideo(url) ? <video src={url} className="w-full h-full object-cover" muted /> : <img src={url} className="w-full h-full object-cover" />}
                </button>
              ))}
            </div>
          )}
        </motion.div>
        <motion.div initial={{ opacity: 0, x: 30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.15 }}>
          <Link href="/catalogue" className="text-red-600 text-sm hover:underline mb-4 inline-block">&larr; Retour au catalogue</Link>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-2">{product.name}</h1>
          <p className="text-red-600 text-2xl font-bold mb-4">{product.price} DH</p>
          {!product.stock && <p className="text-red-500 font-semibold mb-4">Rupture de stock</p>}
          {product.colors?.length > 0 && (
            <div className="mb-6">
              <p className="text-white font-semibold mb-2">Couleur</p>
              <div className="flex gap-2 flex-wrap">
                {product.colors.map((color, i) => (
                  <button key={i} onClick={() => setSelectedColor(color)} className={`px-4 py-2 rounded-full text-sm border transition ${selectedColor === color ? "bg-red-600 text-white border-red-600 shadow-[0_0_15px_rgba(220,38,38,0.4)]" : "bg-zinc-900 text-gray-300 border-zinc-700"}`}>
                    {color}
                  </button>
                ))}
              </div>
            </div>
          )}
          {product.description && (
            <div className="mb-8">
              <p className="text-white font-semibold mb-2">Description</p>
              <p className="text-gray-400 leading-relaxed">{product.description}</p>
            </div>
          )}
          <motion.button whileTap={{ scale: 0.97 }} onClick={handleAdd} disabled={!product.stock} className="w-full bg-red-600 text-white font-bold py-4 rounded-lg hover:bg-red-500 hover:shadow-[0_0_25px_rgba(220,38,38,0.5)] transition-all disabled:bg-zinc-700 disabled:text-gray-400 disabled:cursor-not-allowed disabled:shadow-none">
            {!product.stock ? "Rupture de stock" : added ? "Ajoute au panier !" : "Ajouter au panier"}
          </motion.button>
          <p className="text-gray-500 text-sm text-center mt-4">Paiement a la livraison - Livraison partout au Maroc</p>
        </motion.div>
      </div>
    </main>
  )
}