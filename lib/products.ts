import { sql } from "./db"
import { Product } from "./types"

export async function getProducts(): Promise<Product[]> {
  try {
    const { rows } = await sql<Product>`SELECT * FROM products ORDER BY created_at DESC`
    return rows
  } catch (error) {
    console.error("[getProducts] DB error:", error)
    return []
  }
}

export async function getProductsByCategory(category: string): Promise<Product[]> {
  try {
    const { rows } = await sql<Product>`SELECT * FROM products WHERE category = ${category}`
    return rows
  } catch (error) {
    console.error("[getProductsByCategory] DB error:", error)
    return []
  }
}

export async function getProductById(id: string): Promise<Product | null> {
  try {
    const { rows } = await sql<Product>`SELECT * FROM products WHERE id = ${id}`
    return rows[0] ?? null
  } catch (error) {
    console.error("[getProductById] DB error:", error)
    return null
  }
}

export async function getGallery(): Promise<{ id: string; url: string }[]> {
  try {
    const { rows } = await sql<{ id: string; url: string }>`SELECT id, url FROM gallery ORDER BY created_at DESC`
    return rows
  } catch (error) {
    console.error("[getGallery] DB error:", error)
    return []
  }
}
