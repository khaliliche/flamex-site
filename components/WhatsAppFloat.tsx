"use client"
import { motion } from "framer-motion"

export default function WhatsAppFloat() {
  return (
    <motion.a
      href="https://wa.me/212706560249"
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contacter sur WhatsApp"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center bg-gradient-to-br from-red-600 via-red-700 to-black border border-red-500/40"
      animate={{ boxShadow: ["0 0 15px rgba(220,38,38,0.5)", "0 0 30px rgba(220,38,38,0.85)", "0 0 15px rgba(220,38,38,0.5)"] }}
      transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      whileHover={{ scale: 1.15 }}
    >
      <svg viewBox="0 0 32 32" fill="white" className="w-8 h-8">
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.837.746 5.62 2.163 8.067L0 32l8.13-2.13A15.9 15.9 0 0 0 16 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333a13.28 13.28 0 0 1-6.777-1.85l-.487-.29-5.023 1.317 1.343-4.897-.317-.503A13.267 13.267 0 1 1 16 29.333zm7.273-9.933c-.397-.2-2.357-1.163-2.723-1.297-.367-.133-.633-.2-.9.2-.267.4-1.033 1.297-1.267 1.563-.233.267-.467.3-.863.1-.397-.2-1.677-.617-3.193-1.97-1.18-1.053-1.977-2.353-2.21-2.753-.233-.4-.025-.617.175-.817.18-.18.397-.467.597-.7.2-.233.267-.4.397-.667.133-.267.067-.5-.033-.7-.1-.2-.9-2.167-1.233-2.967-.325-.78-.655-.675-.9-.687-.233-.01-.5-.013-.767-.013-.267 0-.7.1-1.067.5-.367.4-1.4 1.367-1.4 3.333s1.433 3.867 1.633 4.133c.2.267 2.82 4.307 6.833 6.037.955.413 1.7.66 2.28.843.958.305 1.83.262 2.518.159.768-.115 2.357-.963 2.69-1.893.333-.93.333-1.727.233-1.893-.1-.167-.367-.267-.767-.467z"/>
      </svg>
    </motion.a>
  )
}