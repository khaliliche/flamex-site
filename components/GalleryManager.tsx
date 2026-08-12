"use client"
import { useState } from "react"
import { supabase } from "@/lib/supabase"
import { addGalleryImage, deleteGalleryImage } from "@/lib/actions"

type GalleryImage = { id: string; url: string }

export default function GalleryManager({ images }: { images: GalleryImage[] }) {
  const [uploading, setUploading] = useState(false)

  const handleUpload = async (files: FileList | null) => {
    if (!files) return
    setUploading(true)
    for (const file of Array.from(files)) {
      const cleanName = file.name.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-zA-Z0-9.-]/g, "-")
      const fileName = `gallery-${Date.now()}-${cleanName}`
      const { error } = await supabase.storage.from("products").upload(fileName, file)
      if (!error) {
        const { data } = supabase.storage.from("products").getPublicUrl(fileName)
        await addGalleryImage(data.publicUrl)
      }
    }
    setUploading(false)
  }

  return (
    <div className="bg-zinc-900 border border-orange-500/30 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-bold text-white mb-2">Galerie accueil (8 photos max)</h2>
      <p className="text-gray-400 text-sm mb-4">{images.length}/8 photos utilisees</p>
      <input
        type="file"
        accept="image/*"
        multiple
        onChange={(e) => handleUpload(e.target.files)}
        disabled={images.length >= 8}
        className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white w-full mb-4 disabled:opacity-50"
      />
      {uploading && <p className="text-orange-500 text-sm mb-4">Upload en cours...</p>}
      <div className="grid grid-cols-4 gap-3">
        {images.map((img) => (
          <div key={img.id} className="relative aspect-square">
            <img src={img.url} className="w-full h-full object-cover rounded-lg border border-zinc-700" />
            <button
              onClick={() => deleteGalleryImage(img.id)}
              className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full w-6 h-6 text-sm"
            >
              &times;
            </button>
          </div>
        ))}
      </div>
    </div>
  )
}
