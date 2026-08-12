"use client"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import EmberParticles from "@/components/EmberParticles"
import GlowText from "@/components/GlowText"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="lg:hidden absolute inset-0">
        <Image src="/hero-left.jpg" alt="" fill sizes="100vw" priority className="object-cover opacity-15 blur-sm" />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <EmberParticles />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.2 }}
        className="hidden lg:block absolute left-0 top-0 h-full w-[28%]"
      >
        <div className="relative h-full w-full">
          <Image src="/hero-left.jpg" alt="Briquets FlameX" fill sizes="28vw" priority className="object-cover" style={{ maskImage: "linear-gradient(to right, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to right, black 40%, transparent 100%)" }} />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.2 }}
        className="hidden lg:block absolute right-0 top-0 h-full w-[28%]"
      >
        <div className="relative h-full w-full">
          <Image src="/hero-right.jpg" alt="Briquet FlameX grave" fill sizes="28vw" className="object-cover" style={{ maskImage: "linear-gradient(to left, black 40%, transparent 100%)", WebkitMaskImage: "linear-gradient(to left, black 40%, transparent 100%)" }} />
        </div>
      </motion.div>

      <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }} className="relative z-10 text-center">
        <GlowText />
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center my-4"
        >
          <motion.div
            animate={{ filter: ["drop-shadow(0 0 15px rgba(255,140,0,0.5))", "drop-shadow(0 0 30px rgba(255,80,20,0.8))", "drop-shadow(0 0 15px rgba(255,140,0,0.5))"] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image src="/logo.png" alt="FlameX" width={100} height={100} className="object-contain" />
          </motion.div>
        </motion.div>
        <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.6, duration: 1 }} className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl mx-auto">
          Briquets torch premium - Dragon, Ange, Carte, Rond
        </motion.p>
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.9, duration: 0.6 }}>
          <Link href="/catalogue" className="inline-block bg-orange-500 text-black font-bold px-8 py-4 rounded-full hover:bg-orange-400 hover:scale-105 hover:shadow-[0_0_30px_rgba(255,140,0,0.6)] transition-all">
            Voir le catalogue
          </Link>
        </motion.div>
      </motion.div>
    </section>
  )
}
