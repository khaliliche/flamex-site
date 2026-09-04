import { sql } from "./db"
import { Testimonial } from "./types"

export async function getTestimonials(): Promise<Testimonial[]> {
  try {
    const { rows } = await sql<Testimonial>`SELECT * FROM testimonials ORDER BY created_at DESC`
    return rows
  } catch (error) {
    console.error("[getTestimonials] DB error:", error)
    return []
  }
}
