'use client'
import { addProduct } from '@/lib/actions'
import { useRef, useState } from 'react'
import ImageUpload from './ImageUpload'

export default function AddProductForm() {
  const formRef = useRef<HTMLFormElement>(null)
  const [imageUrls, setImageUrls] = useState<string[]>([])

  return (
    <form
      ref={formRef}
      action={async (formData) => {
        formData.set('images', imageUrls.join(','))
        await addProduct(formData)
        formRef.current?.reset()
        setImageUrls([])
      }}
      className="bg-zinc-900 border border-orange-500/30 rounded-xl p-6 mb-8"
    >
      <h2 className="text-xl font-bold text-white mb-4">Ajouter un produit</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input name="name" placeholder="Nom du produit" required className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white" />
        <input name="price" type="number" step="0.01" placeholder="Prix (DH)" required className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white" />
        <select name="category" required className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white">
          <option value="dragon">Dragon</option>
          <option value="ange">Ange</option>
          <option value="carte">Carte Flamme</option>
          <option value="rond">Rond</option>
        </select>
        <input name="colors" placeholder="Couleurs (ex: Or, Argent, Bronze)" className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white" />
      </div>
      <div className="mt-4">
        <ImageUpload onUploaded={setImageUrls} />
      </div>
      <textarea name="description" placeholder="Description" className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white mt-4" />
      <button type="submit" className="mt-4 bg-orange-500 text-black font-bold px-6 py-2 rounded-lg hover:bg-orange-400 transition">
        Ajouter
      </button>
    </form>
  )
}