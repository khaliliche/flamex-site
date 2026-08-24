export type Product = {
  id: string
  name: string
  price: number
  category: 'dragon' | 'angle' | 'carte' | 'rond'
  images: string[]
  colors: string[]
  description: string
  stock: boolean
  created_at: string
}
export type Testimonial = {
  id: string
  quote: string
  city: string
  rating: number
  created_at: string
}