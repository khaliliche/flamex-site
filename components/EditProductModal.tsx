'use client'
import { useState } from 'react'
import { updateProduct } from '@/lib/actions'
import { Product } from '@/lib/types'
import ImageUpload from './ImageUpload'

export default function EditProductModal({ product, onClose }: { product: Product; onClose: () => void }) {
  const [imageUrls, setImageUrls] = useState<string[]>(product.images || [])

  return (
    <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4">
      <div className="bg-zinc-900 border border-orange-500/30 rounded-xl p-6 w-full max-w-lg max-h-[90vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-white">Modifier le produit</h2>
          <button onClick={onClose} className="text-gray-400 hover:text-white text-2xl">&times;</button>
        </div>
        <form
          action={async (formData) => {
            formData.set('images', imageUrls.join(','))
            await updateProduct(product.id, formData)
            onClose()
          }}
        >
          <div className="grid grid-cols-1 gap-4">
            <input name="name" defaultValue={product.name} required className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white" />
            <input name="price" type="number" step="0.01" defaultValue={product.price} required className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white" />
            <select name="category" defaultValue={product.category} required className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white">
              <option value="dragon">Dragon</option>
              <option value="ange">Ange</option>
              <option value="carte">Carte Flamme</option>
              <option value="rond">Rond</option>
            </select>
            <input name="colors" defaultValue={product.colors?.join(', ')} placeholder="Couleurs (ex: Or, Argent, Bronze)" className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white" />
            <ImageUpload onUploaded={(urls) => setImageUrls([...product.images, ...urls])} />
            {imageUrls.length > 0 && (
              <div className="flex gap-2 flex-wrap">
                {imageUrls.map((url, i) => (
                  <div key={i} className="relative">
                    {url.match(/\.(mp4|mov|webm)$/i) ? (
                      <video src={url} className="w-16 h-16 object-cover rounded border border-zinc-700" />
                    ) : (
                      <img src={url} className="w-16 h-16 object-cover rounded border border-zinc-700" />
                    )}
                    <button
                      type="button"
                      onClick={() => setImageUrls(imageUrls.filter((_, idx) => idx !== i))}
                      className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-5 h-5 text-xs"
                    >
                      &times;
                    </button>
                  </div>
                ))}
              </div>
            )}
            <textarea name="description" defaultValue={product.description} className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white" />
          </div>
          <button type="submit" className="mt-4 w-full bg-orange-500 text-black font-bold px-6 py-2 rounded-lg hover:bg-orange-400 transition">
            Enregistrer
          </button>
        </form>
      </div>
    </div>
  )
}