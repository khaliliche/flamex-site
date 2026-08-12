import { getProducts } from '@/lib/products'
import ProductCard from '@/components/ProductCard'
import CategoryFilter from '@/components/CategoryFilter'

export default async function Catalogue({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const selectedCategory = params.category || ''
  const allProducts = await getProducts()
  const products = selectedCategory
    ? allProducts.filter((p) => p.category === selectedCategory)
    : allProducts

  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Notre <span className="text-orange-500">Catalogue</span>
      </h1>

      <CategoryFilter selectedCategory={selectedCategory} />

      {products.length === 0 ? (
        <p className="text-gray-400 text-center">Aucun produit dans cette categorie.</p>
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