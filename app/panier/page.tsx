'use client'
import { useCart } from '@/lib/cart-context'
import { generateWhatsAppLink } from '@/lib/whatsapp'
import { useState } from 'react'
import Link from 'next/link'

export default function Panier() {
  const { items, removeItem, updateQuantity, total, clearCart } = useCart()
  const [nom, setNom] = useState('')
  const [telephone, setTelephone] = useState('')
  const [adresse, setAdresse] = useState('')

  const handleCommander = () => {
    const whatsappItems = items.map(i => ({
      name: `${i.name}${i.color ? ' (' + i.color + ')' : ''} x${i.quantity}`,
      price: i.price * i.quantity
    }))
    const link = generateWhatsAppLink(whatsappItems, { nom, telephone, adresse })
    window.open(link, '_blank')
  }

  if (items.length === 0) {
    return (
      <main className="min-h-screen bg-black px-6 py-20 text-center">
        <h1 className="text-3xl font-bold text-white mb-4">Ton panier est vide</h1>
        <Link href="/catalogue" className="text-red-600 hover:underline">
          Voir le catalogue
        </Link>
      </main>
    )
  }

  const canOrder = nom.trim() && telephone.trim() && adresse.trim()

  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Mon <span className="text-red-600">Panier</span>
      </h1>
      <div className="max-w-2xl mx-auto">
        <div className="space-y-3 mb-8">
          {items.map((item) => (
            <div key={`${item.id}-${item.color}`} className="bg-zinc-900 border border-zinc-800 rounded-lg p-4 flex items-center gap-4">
              {item.image && <img src={item.image} className="w-16 h-16 object-cover rounded" />}
              <div className="flex-1">
                <p className="text-white font-semibold">{item.name}</p>
                {item.color && <p className="text-gray-400 text-sm">{item.color}</p>}
                <p className="text-red-600 font-bold">{item.price} DH</p>
              </div>
              <div className="flex items-center gap-2">
                <button onClick={() => updateQuantity(item.id, item.color, item.quantity - 1)} className="w-8 h-8 bg-zinc-800 text-white rounded">-</button>
                <span className="text-white w-6 text-center">{item.quantity}</span>
                <button onClick={() => updateQuantity(item.id, item.color, item.quantity + 1)} className="w-8 h-8 bg-zinc-800 text-white rounded">+</button>
              </div>
              <button onClick={() => removeItem(item.id, item.color)} className="text-red-500 hover:text-red-400">
                &times;
              </button>
            </div>
          ))}
        </div>

        <div className="bg-zinc-900 border border-red-600/30 rounded-xl p-6 mb-8">
          <div className="flex justify-between text-xl font-bold text-white mb-2">
            <span>Total</span>
            <span className="text-red-600">{total} DH</span>
          </div>
          <p className="text-gray-400 text-sm">Paiement a la livraison - Livraison partout au Maroc</p>
        </div>

        <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 space-y-4">
          <h2 className="text-xl font-bold text-white mb-2">Tes informations</h2>
          <input
            value={nom}
            onChange={(e) => setNom(e.target.value)}
            placeholder="Nom complet"
            className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white"
          />
          <input
            value={telephone}
            onChange={(e) => setTelephone(e.target.value)}
            placeholder="Telephone"
            className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white"
          />
          <input
            value={adresse}
            onChange={(e) => setAdresse(e.target.value)}
            placeholder="Adresse de livraison"
            className="w-full bg-black border border-zinc-700 rounded-lg px-4 py-3 text-white"
          />
          <button
            onClick={handleCommander}
            disabled={!canOrder}
            className="w-full bg-[#25D366] text-white font-bold py-4 rounded-lg hover:bg-[#20bd5a] transition disabled:bg-zinc-700 disabled:text-gray-400 disabled:cursor-not-allowed"
          >
            Commander via WhatsApp
          </button>
        </div>
      </div>
    </main>
  )
}