"use client"

import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import EmberParticles from "@/components/EmberParticles"
import GlowText from "@/components/GlowText"

export default function HeroSection() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center px-6 bg-gradient-to-b from-black via-zinc-950 to-black overflow-hidden">
      {/* Mobile Background */}
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

      {/* Particles */}
      <EmberParticles />

      {/* Central Glow */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-red-600/10 blur-[120px] pointer-events-none" />

      {/* Left Image */}
      <motion.div
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.2 }}
        className="hidden lg:block absolute left-0 top-0 h-full w-[28%]"
      >
        <div className="relative h-full w-full">
          <Image
            src="/hero-left.jpg"
            alt="Briquets FlameX"
            fill
            sizes="28vw"
            priority
            className="object-cover"
            style={{
              maskImage:
                "linear-gradient(to right, black 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 40%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* Right Image */}
      <motion.div
        initial={{ opacity: 0, x: 40 }}
        animate={{ opacity: 0.5, x: 0 }}
        transition={{ duration: 1.2 }}
        className="hidden lg:block absolute right-0 top-0 h-full w-[28%]"
      >
        <div className="relative h-full w-full">
          <Image
            src="/hero-right.jpg"
            alt="Briquet FlameX grave"
            fill
            sizes="28vw"
            className="object-cover"
            style={{
              maskImage:
                "linear-gradient(to left, black 40%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to left, black 40%, transparent 100%)",
            }}
          />
        </div>
      </motion.div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        {/* Badge */}
        <motion.span
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="inline-block text-xs md:text-sm font-semibold uppercase tracking-widest text-red-500 border border-red-600/40 rounded-full px-4 py-1.5 mb-6"
        >
          Nouveau · Livraison partout au Maroc
        </motion.span>

        {/* Glow Text */}
        <GlowText />

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, scale: 0.7 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="flex justify-center my-4"
        >
          <motion.div
            animate={{
              filter: [
                "drop-shadow(0 0 15px rgba(220,38,38,0.5))",
                "drop-shadow(0 0 30px rgba(185,28,28,0.8))",
                "drop-shadow(0 0 15px rgba(220,38,38,0.5))",
              ],
            }}
            transition={{
              duration: 2.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/logo.png"
              alt="FlameX"
              width={100}
              height={100}
              className="object-contain"
            />
          </motion.div>
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="text-gray-400 text-lg md:text-xl mb-8 max-w-xl mx-auto"
        >
          Briquets torch premium - Dragon, Ange, Carte, Rond
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.9, duration: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          {/* Catalogue */}
          <Link
            href="/catalogue"
            className="inline-block bg-red-600 text-white font-bold px-8 py-4 rounded-full hover:bg-red-500 hover:scale-105 hover:shadow-[0_0_30px_rgba(220,38,38,0.6)] transition-all"
          >
            Voir le catalogue
          </Link>

          {/* WhatsApp */}
          <a
            href="https://wa.me/212706560249"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block border border-white/20 text-white font-semibold px-8 py-4 rounded-full hover:border-red-600 hover:text-red-500 transition-all"
          >
            Commander sur WhatsApp
          </a>
        </motion.div>
      </motion.div>
    </section>
  )
}