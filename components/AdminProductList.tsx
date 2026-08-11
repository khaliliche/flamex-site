'use client'
import { useState } from 'react'
import { Product } from '@/lib/types'
import { deleteProduct, toggleStock } from '@/lib/actions'
import EditProductModal from './EditProductModal'

export default function AdminProductList({ products }: { products: Product[] }) {
  const [editing, setEditing] = useState<Product | null>(null)

  return (
    <div className="space-y-3">
      {products.map((p) => (
        <div key={p.id} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex justify-between items-center gap-4">
          <div className="flex items-center gap-3 flex-1">
            {p.images[0] && (
              p.images[0].match(/\.(mp4|mov|webm)$/i) ? (
                <video src={p.images[0]} className="w-12 h-12 object-cover rounded" />
              ) : (
                <img src={p.images[0]} className="w-12 h-12 object-cover rounded" />
              )
            )}
            <div>
              <p className="text-white font-semibold">{p.name}</p>
              <p className="text-orange-500">{p.price} DH - {p.category} - {p.images.length} media</p>
            </div>
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => toggleStock(p.id, p.stock)}
              className={`px-3 py-1 rounded text-sm font-semibold ${p.stock ? 'bg-green-600 text-white' : 'bg-zinc-700 text-gray-300'}`}
            >
              {p.stock ? 'En stock' : 'Rupture'}
            </button>
            <button
              onClick={() => setEditing(p)}
              className="px-3 py-1 rounded text-sm font-semibold bg-blue-600 text-white"
            >
              Modifier
            </button>
            <button
              onClick={() => deleteProduct(p.id)}
              className="px-3 py-1 rounded text-sm font-semibold bg-red-600 text-white"
            >
              Supprimer
            </button>
          </div>
        </div>
      ))}
      {editing && <EditProductModal product={editing} onClose={() => setEditing(null)} />}
    </div>
  )
}