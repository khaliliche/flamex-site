import { getProducts } from "@/lib/products"
import ProductCard from "@/components/ProductCard"

const categories = [
  { value: "", label: "Tous" },
  { value: "dragon", label: "Dragon" },
  { value: "ange", label: "Ange" },
  { value: "carte", label: "Carte Flamme" },
  { value: "rond", label: "Rond" },
]

export default async function Catalogue({
  searchParams,
}: {
  searchParams: Promise<{ category?: string }>
}) {
  const params = await searchParams
  const selectedCategory = params.category || ""
  const allProducts = await getProducts()
  const products = selectedCategory
    ? allProducts.filter((p) => p.category === selectedCategory)
    : allProducts

  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <h1 className="text-4xl font-bold text-white text-center mb-8">
        Notre <span className="text-orange-500">Catalogue</span>
      </h1>

      <div className="flex justify-center gap-2 flex-wrap mb-12">
        {categories.map((cat) => (
          <a key={cat.value} href={cat.value ? `/catalogue?category=${cat.value}` : "/catalogue"} className={`px-4 py-2 rounded-full text-sm font-semibold transition ${selectedCategory === cat.value ? "bg-orange-500 text-black" : "bg-zinc-900 text-gray-300 border border-zinc-700 hover:border-orange-500"}`}>
            {cat.label}
          </a>
        ))}
      </div>

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
