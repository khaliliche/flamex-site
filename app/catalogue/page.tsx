import { getProducts } from '@/lib/products'
import ProductCard from '@/components/ProductCard'

export default async function Catalogue() {
  const products = await getProducts()

  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <h1 className="text-4xl font-bold text-white text-center mb-12">
        Notre <span className="text-orange-500">Catalogue</span>
      </h1>
      {products.length === 0 ? (
        <p className="text-gray-400 text-center">Aucun produit pour le moment.</p>
      ) : (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      )}
    </main>
  )
}