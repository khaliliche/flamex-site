'use client'
import { motion } from 'framer-motion'

export default function GlowText() {
  return (
    <motion.h1
      className="text-6xl md:text-8xl font-bold text-white mb-4 relative"
      animate={{
        textShadow: [
          '0 0 20px rgba(220,38,38,0.5), 0 0 40px rgba(185,28,28,0.3)',
          '0 0 35px rgba(220,38,38,0.8), 0 0 60px rgba(185,28,28,0.5)',
          '0 0 20px rgba(220,38,38,0.5), 0 0 40px rgba(185,28,28,0.3)',
        ],
      }}
      transition={{ duration: 2.5, repeat: Infinity, ease: 'easeInOut' }}
    >
      FLAME<span className="text-red-600">X</span>
    </motion.h1>
  )
}