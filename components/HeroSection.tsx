"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import EmberParticles from "@/components/EmberParticles"
import GlowText from "@/components/GlowText"

export default function HeroSection() {
  return (
    <section className="relative min-h-[92vh] flex flex-col items-center justify-center px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      <div className="lg:hidden absolute inset-0">
        <Image
          src="/hero-left.jpg"
          alt=""
          fill
          sizes="100vw"
          priority
          className="object-cover opacity-15 blur-sm"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/70 to-black" />
      </div>

      <EmberParticles />

      <div className="absolute left-1/2 top-[42%] -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] rounded-full bg-red-600/10 blur-[130px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.45, x: 0 }}
        transition={{ duration: 1.2 }}
        className="hidden lg:block absolute left-0 top-0 h-full w-[26%]"
      >
        <div className="relative h-full w-full">
          <Image
            src="/hero-left.jpg"
            alt="Briquets FlameX"
            fill
            sizes="26vw"
            priority
            className="object-cover"
            style={{
              maskImage:
                "linear-gradient(to right, black 35%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 35%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.45, x: 0 }}
        transition={{ duration: 1.2 }}
        className="hidden lg:block absolute right-0 top-0 h-full w-[26%]"
      >
        <div className="relative h-full w-full">
          <Image
            src="/hero-right.jpg"
            alt="Briquet FlameX grave"
            fill
            sizes="26vw"
            className="object-cover"
            style={{
              maskImage:
                "linear-gradient(to left, black 35%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 35%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      <div className="relative z-10 text-center max-w-3xl">
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-block font-mono text-[11px] md:text-xs uppercase tracking-[0.25em] text-red-500 border border-red-600/40 rounded-full px-4 py-1.5 mb-8"
        >
          Édition Rabat · Livraison partout au Maroc
        </motion.span>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.15 }}
        >
          <GlowText />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.55, duration: 0.9 }}
          className="text-gray-400 text-lg md:text-xl mt-2 mb-10 max-w-xl mx-auto"
        >
          Le briquet torch qui ne s&apos;éteint jamais. Dragon, Ange, Carte,
          Rond — gravés, pas imprimés.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.75, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14"
        >
          <Link
            href="/catalogue"
            className="inline-block bg-red-600 text-white font-display uppercase tracking-wide text-sm font-semibold px-9 py-4 rounded-full hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_35px_rgba(220,38,38,0.6)] transition-all"
          >
            Voir le catalogue
          </Link>

          <a
            href="https://wa.me/212706560249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/20 text-white font-display uppercase tracking-wide text-sm font-semibold px-9 py-4 rounded-full hover:border-red-600 hover:text-red-500 transition-all"
          >
            Commander sur WhatsApp
          </a>
        </motion.div>
      </div>
    </section>
  )
}