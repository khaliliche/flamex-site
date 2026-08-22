﻿"use client";
import { motion } from "framer-motion";

export default function InstagramCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="text-center"
    >
      <a
        href="https://www.instagram.com/flamex.store1/"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block border border-red-600 text-red-600 font-semibold px-8 py-3 rounded-full hover:bg-red-600 hover:text-white transition-all"
      >
        @flamex.store1
      </a>
    </motion.div>
  );
}
