import { getProducts, getGallery } from "@/lib/products"
import AddProductForm from "@/components/AddProductForm"
import AdminProductList from "@/components/AdminProductList"
import GalleryManager from "@/components/GalleryManager"

export default async function Dashboard() {
  const products = await getProducts()
  const gallery = await getGallery()

  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <h1 className="text-3xl font-bold text-white mb-8">
        Dashboard <span className="text-orange-500">Admin</span>
      </h1>
      <div className="max-w-4xl mx-auto">
        <GalleryManager images={gallery} />
        <AddProductForm />
        <h2 className="text-xl font-bold text-white mb-4">Produits ({products.length})</h2>
        <AdminProductList products={products} />
      </div>
    </main>
  )
}
