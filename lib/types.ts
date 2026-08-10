export type Product = {
  id: string
  name: string
  price: number
  category: 'dragon' | 'ange' | 'carte' | 'rond'
  images: string[]
  description: string
  stock: boolean
  created_at: string
}