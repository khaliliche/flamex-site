'use server'
import { supabase } from './supabase'
import { revalidatePath } from 'next/cache'

export async function addProduct(formData: FormData) {
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
  const { error } = await supabase.from('products').delete().eq('id', id)
  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}

export async function toggleStock(id: string, currentStock: boolean) {
  const { error } = await supabase.from('products').update({ stock: !currentStock }).eq('id', id)
  if (error) throw error
  revalidatePath('/admin/dashboard')
  revalidatePath('/catalogue')
}
export async function updateProduct(id: string, formData: FormData) {
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
  const { error } = await supabase.from("gallery").insert({ url })
  if (error) throw error
  revalidatePath("/admin/dashboard")
  revalidatePath("/")
}

export async function deleteGalleryImage(id: string) {
  const { error } = await supabase.from("gallery").delete().eq("id", id)
  if (error) throw error
  revalidatePath("/admin/dashboard")
  revalidatePath("/")
}
