import { Product } from '@/lib/types'

export default function ProductCard({ product }: { product: Product }) {
  return (
    <div className="bg-zinc-900 border border-orange-500/20 rounded-xl overflow-hidden hover:border-orange-500 transition group">
      <div className="aspect-square bg-zinc-800 relative overflow-hidden">
        {product.images[0] && (
          <img
            src={product.images[0]}
            alt={product.name}
            className="w-full h-full object-cover group-hover:scale-105 transition"
          />
        )}
      </div>
      <div className="p-4">
        <h3 className="text-white font-semibold mb-1">{product.name}</h3>
        <p className="text-orange-500 font-bold">{product.price} DH</p>
      </div>
    </div>
  )
}