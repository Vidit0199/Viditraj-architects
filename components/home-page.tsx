"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <motion.div
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="absolute inset-0 z-0"
      >
        <Image
          src="/render.jpg"
          alt="Hero Architecture"
          fill
          className="object-cover brightness-[0.7]"
          priority
        />
      </motion.div>

      <div className="container relative z-10 px-6 text-center">
        {/* <motion.h1
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-6xl md:text-9xl font-serif font-bold text-background mb-6 tracking-tighter"
        >
           TAGLINE
        </motion.h1> */}
        <motion.p
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="text-lg md:text-xl font-sans tracking-[0.3em] uppercase text-background"
        >
        
        </motion.p>
      </div>
    </section>
  )
}
