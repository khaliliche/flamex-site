import { supabase } from "./supabase"
import { Product } from "./types"

export async function getProducts(): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("[getProducts] Supabase error:", error.message)
    return []
  }

  return (data as Product[]) ?? []
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("category", category)

  if (error) {
    console.error("[getProductsByCategory] Supabase error:", error.message)
    return []
  }

  return (data as Product[]) ?? []
}

export async function getProductById(id: string): Promise<Product | null> {
  const { data, error } = await supabase
    .from("products")
    .select("*")
    .eq("id", id)
    .single()

  if (error) {
    console.error("[getProductById] Supabase error:", error.message)
    return null
  }

  return data as Product
}

export async function getGallery(): Promise<{ id: string; url: string }[]> {
  const { data, error } = await supabase
    .from("gallery")
    .select("id, url")
    .order("id", { ascending: false })

  if (error) {
    console.error("[getGallery] Supabase error:", error.message)
    return []
  }

  return data ?? []
}