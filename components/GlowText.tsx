'use client'
import { motion } from 'framer-motion'

export default function GlowText() {
  return (
    <motion.h1
      className="font-display uppercase text-7xl md:text-[9rem] leading-[0.85] font-bold text-white mb-4 tracking-tight"
      initial={{ textShadow: '0 0 0px rgba(220,38,38,0)' }}
      animate={{
        textShadow: [
          '0 0 25px rgba(220,38,38,0.35)',
          '0 0 45px rgba(220,38,38,0.6)',
          '0 0 25px rgba(220,38,38,0.35)',
        ],
      }}
      transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut' }}
    >
      FLAME<span className="text-red-600">X</span>
    </motion.h1>
  )
}
