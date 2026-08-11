'use client'
import { createContext, useContext, useState, ReactNode } from 'react'

export type CartItem = {
  id: string
  name: string
  price: number
  color?: string
  quantity: number
  image?: string
}

type CartContextType = {
  items: CartItem[]
  addItem: (item: Omit<CartItem, 'quantity'>) => void
  removeItem: (id: string, color?: string) => void
  updateQuantity: (id: string, color: string | undefined, quantity: number) => void
  clearCart: () => void
  total: number
}

const CartContext = createContext<CartContextType | undefined>(undefined)

export function CartProvider({ children }: { children: ReactNode }) {
  const [items, setItems] = useState<CartItem[]>([])

  const addItem = (item: Omit<CartItem, 'quantity'>) => {
    setItems((prev) => {
      const existing = prev.find(i => i.id === item.id && i.color === item.color)
      if (existing) {
        return prev.map(i => i.id === item.id && i.color === item.color ? { ...i, quantity: i.quantity + 1 } : i)
      }
      return [...prev, { ...item, quantity: 1 }]
    })
  }

  const removeItem = (id: string, color?: string) => {
    setItems((prev) => prev.filter(i => !(i.id === id && i.color === color)))
  }

  const updateQuantity = (id: string, color: string | undefined, quantity: number) => {
    if (quantity < 1) return
    setItems((prev) => prev.map(i => i.id === id && i.color === color ? { ...i, quantity } : i))
  }

  const clearCart = () => setItems([])

  const total = items.reduce((sum, i) => sum + i.price * i.quantity, 0)

  return (
    <CartContext.Provider value={{ items, addItem, removeItem, updateQuantity, clearCart, total }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used within CartProvider')
  return context
}