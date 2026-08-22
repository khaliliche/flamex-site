import { supabase } from "./supabase"
import { Testimonial } from "./types"

export async function getTestimonials(): Promise<Testimonial[]> {
  const { data, error } = await supabase
    .from("testimonials")
    .select("*")
    .order("created_at", { ascending: false })

  if (error) {
    console.error("[getTestimonials] Supabase error:", error.message)
    return []
  }

  return (data as Testimonial[]) ?? []
}