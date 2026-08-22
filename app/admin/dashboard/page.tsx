import { redirect } from "next/navigation"
import { getProducts, getGallery } from "@/lib/products"
import { getTestimonials } from "@/lib/testimonials"
import { isAdminSessionValid } from "@/lib/auth"
import { logoutAdmin } from "@/lib/actions"
import AddProductForm from "@/components/AddProductForm"
import AdminProductList from "@/components/AdminProductList"
import GalleryManager from "@/components/GalleryManager"
import TestimonialManager from "@/components/TestimonialManager"

export default async function Dashboard() {
  const authed = await isAdminSessionValid()
  if (!authed) {
    redirect("/admin")
  }

  const products = await getProducts()
  const gallery = await getGallery()
  const testimonials = await getTestimonials()

  return (
    <main className="min-h-screen bg-black px-6 py-12">
      <div className="max-w-4xl mx-auto flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-white">
          Dashboard <span className="text-red-600">Admin</span>
        </h1>
        <form action={logoutAdmin}>
          <button type="submit" className="text-sm text-gray-400 hover:text-red-500 transition">
            Se déconnecter
          </button>
        </form>
      </div>
      <div className="max-w-4xl mx-auto">
        <GalleryManager images={gallery} />
        <TestimonialManager testimonials={testimonials} />
        <AddProductForm />
        <h2 className="text-xl font-bold text-white mb-4">Produits ({products.length})</h2>
        <AdminProductList products={products} />
      </div>
    </main>
  )
}