﻿"use client"
import { motion } from "framer-motion"

const categories = [
  { value: "", label: "Tous" },
  { value: "dragon", label: "Dragon" },
  { value: "ange", label: "Ange" },
  { value: "carte", label: "Carte Flamme" },
  { value: "rond", label: "Rond" },
]

export default function CategoryFilter({ selectedCategory }: { selectedCategory: string }) {
  return (
    <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }} className="flex justify-center gap-2 flex-wrap mb-12">
      {categories.map((cat) => (
        <a key={cat.value} href={cat.value ? `/catalogue?category=${cat.value}` : "/catalogue"} className={`px-4 py-2 rounded-full text-sm font-semibold transition-all ${selectedCategory === cat.value ? "bg-red-600 text-white shadow-[0_0_15px_rgba(220,38,38,0.5)]" : "bg-zinc-900 text-gray-300 border border-zinc-700 hover:border-red-600"}`}>
          {cat.label}
        </a>
      ))}
    </motion.div>
  )
}
