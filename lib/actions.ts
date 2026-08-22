'use server'
import { supabase } from './supabase'
import { revalidatePath } from 'next/cache'
import { redirect } from 'next/navigation'
import { createAdminSession, destroyAdminSession, requireAdmin } from './auth'

export type LoginState = { error?: string }

export async function loginAdmin(_prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get('password') as string
  const adminPassword = process.env.ADMIN_PASSWORD

  if (!adminPassword) {
    return { error: "Configuration manquante : ADMIN_PASSWORD n'est pas défini sur le serveur." }
  }
  if (!password || password !== adminPassword) {
    return { error: 'Mot de passe incorrect.' }
  }

  await createAdminSession()
  redirect('/admin/dashboard')
}

export async function logoutAdmin() {
  await destroyAdminSession()
  redirect('/admin')
}

export async function addProduct(formData: FormData) {
  await requireAdmin()

  const name = formData.get('name') as string
  const price = Number(formData.get('price'))
  const category = formData.get('category') as string
  const description = formData.get('description') as string
  const imagesRaw = formData.get('images') as string
  const images = imagesRaw.split(',').map(url => url.trim()).filter(Boolean)
  const colorsRaw = formData.get('colors') as string
  const colors = colorsRaw.split(',').map(c => c.trim()).filter(Boolean)

  const { error } = await supabase.from('products').insert({
    name, price, category, description, images, colors, stock: true
  })

  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function deleteProduct(id: string) {
  await requireAdmin()
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function toggleStock(id: string, currentStock: boolean) {
  await requireAdmin()
  const { error } = await supabase.from('products').update({ stock: !currentStock }).eq('id', id)
  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function updateProduct(id: string, formData: FormData) {
  await requireAdmin()

  const name = formData.get('name') as string
  const price = Number(formData.get('price'))
  const category = formData.get('category') as string
  const description = formData.get('description') as string
  const imagesRaw = formData.get('images') as string
  const images = imagesRaw.split(',').map(url => url.trim()).filter(Boolean)
  const colorsRaw = formData.get('colors') as string
  const colors = colorsRaw.split(',').map(c => c.trim()).filter(Boolean)

  const { error } = await supabase.from('products').update({
    name, price, category, description, images, colors
  }).eq('id', id)

  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function addGalleryImage(url: string) {
  await requireAdmin()
  const { error } = await supabase.from("gallery").insert({ url })
  if (error) throw error
  revalidatePath("/admin/dashboard")
  revalidatePath("/")
}

export async function deleteGalleryImage(id: string) {
  await requireAdmin()
  const { error } = await supabase.from("gallery").delete().eq("id", id)
  if (error) throw error
  revalidatePath("/admin/dashboard")
  revalidatePath("/")
}
export async function addTestimonial(formData: FormData) {
  await requireAdmin()

  const quote = formData.get('quote') as string
  const city = formData.get('city') as string
  const rating = Math.min(5, Math.max(1, Number(formData.get('rating')) || 5))

  const { error } = await supabase.from('testimonials').insert({ quote, city, rating })
  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function updateTestimonial(id: string, formData: FormData) {
  await requireAdmin()

  const quote = formData.get('quote') as string
  const city = formData.get('city') as string
  const rating = Math.min(5, Math.max(1, Number(formData.get('rating')) || 5))

  const { error } = await supabase.from('testimonials').update({ quote, city, rating }).eq('id', id)
  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}

export async function deleteTestimonial(id: string) {
  await requireAdmin()
  const { error } = await supabase.from('testimonials').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/')
}