'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function ImageUpload({ onUploaded }: { onUploaded: (urls: string[]) => void }) {
  const [uploading, setUploading] = useState(false)
  const [urls, setUrls] = useState<string[]>([])

  const handleFiles = async (files: FileList | null) => {
    if (!files) return
    setUploading(true)
    const newUrls: string[] = []

    for (const file of Array.from(files)) {
      const cleanName = file.name
  .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
  .replace(/[^a-zA-Z0-9.-]/g, '-')
   const fileName = `${Date.now()}-${cleanName}`
      const { error } = await supabase.storage.from('products').upload(fileName, file)
      if (!error) {
        const { data } = supabase.storage.from('products').getPublicUrl(fileName)
        newUrls.push(data.publicUrl)
      }
    }

    const allUrls = [...urls, ...newUrls]
    setUrls(allUrls)
    onUploaded(allUrls)
    setUploading(false)
  }

  return (
    <div>
      <input
        type="file"
        accept="image/*,video/*"
        multiple
        onChange={(e) => handleFiles(e.target.files)}
        className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white w-full"
      />
      {uploading && <p className="text-orange-500 text-sm mt-2">Upload en cours...</p>}
      {urls.length > 0 && (
        <div className="flex gap-2 mt-2 flex-wrap">
          {urls.map((url, i) => (
            <img key={i} src={url} className="w-16 h-16 object-cover rounded border border-zinc-700" />
          ))}
        </div>
      )}
    </div>
  )
}