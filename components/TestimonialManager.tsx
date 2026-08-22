'use client'
import { useState } from 'react'
import { Testimonial } from '@/lib/types'
import { addTestimonial, updateTestimonial, deleteTestimonial } from '@/lib/actions'

export default function TestimonialManager({ testimonials }: { testimonials: Testimonial[] }) {
  const [editingId, setEditingId] = useState<string | null>(null)

  return (
    <div className="bg-zinc-900 border border-red-900/30 rounded-xl p-6 mb-8">
      <h2 className="text-xl font-bold text-white mb-4">Avis clients ({testimonials.length})</h2>

      <form
        action={async (formData) => {
          await addTestimonial(formData)
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6"
      >
        <textarea
          name="quote"
          placeholder="Texte de l'avis"
          required
          className="md:col-span-2 bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white"
        />
        <input
          name="city"
          placeholder="Ex: Client vérifié — Rabat"
          required
          className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white"
        />
        <select name="rating" defaultValue="5" className="bg-black border border-zinc-700 rounded-lg px-4 py-2 text-white">
          <option value="5">5 étoiles</option>
          <option value="4">4 étoiles</option>
          <option value="3">3 étoiles</option>
          <option value="2">2 étoiles</option>
          <option value="1">1 étoile</option>
        </select>
        <button
          type="submit"
          className="md:col-span-2 bg-red-600 text-white font-bold py-2 rounded-lg hover:bg-red-500 transition"
        >
          Ajouter l&apos;avis
        </button>
      </form>

      <div className="space-y-3">
        {testimonials.map((t) => (
          <div key={t.id} className="bg-black border border-zinc-800 rounded-lg p-4">
            {editingId === t.id ? (
              <form
                action={async (formData) => {
                  await updateTestimonial(t.id, formData)
                  setEditingId(null)
                }}
                className="space-y-3"
              >
                <textarea
                  name="quote"
                  defaultValue={t.quote}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
                <input
                  name="city"
                  defaultValue={t.city}
                  required
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                />
                <select
                  name="rating"
                  defaultValue={String(t.rating)}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg px-4 py-2 text-white"
                >
                  <option value="5">5 étoiles</option>
                  <option value="4">4 étoiles</option>
                  <option value="3">3 étoiles</option>
                  <option value="2">2 étoiles</option>
                  <option value="1">1 étoile</option>
                </select>
                <div className="flex gap-2">
                  <button type="submit" className="bg-red-600 text-white font-semibold px-4 py-2 rounded-lg hover:bg-red-500 transition">
                    Enregistrer
                  </button>
                  <button
                    type="button"
                    onClick={() => setEditingId(null)}
                    className="bg-zinc-700 text-white font-semibold px-4 py-2 rounded-lg"
                  >
                    Annuler
                  </button>
                </div>
              </form>
            ) : (
              <div className="flex justify-between items-start gap-4">
                <div>
                  <p className="text-white text-sm mb-1">{t.quote}</p>
                  <p className="text-gray-500 text-xs font-mono uppercase tracking-widest">
                    {t.city} · {t.rating}★
                  </p>
                </div>
                <div className="flex gap-2 shrink-0">
                  <button
                    onClick={() => setEditingId(t.id)}
                    className="px-3 py-1 rounded text-sm font-semibold bg-blue-600 text-white"
                  >
                    Modifier
                  </button>
                  <button
                    onClick={() => deleteTestimonial(t.id)}
                    className="px-3 py-1 rounded text-sm font-semibold bg-red-600 text-white"
                  >
                    Supprimer
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}