"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import Image from "next/image"
import { useRef } from "react"

export default function AboutSection() {
  const containerRef = useRef<HTMLDivElement>(null)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })

  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"])

  return (
    <section id="about" ref={containerRef} className="py-25 px-6 bg-background overflow-hidden">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24 items-center">
        <motion.div style={{ y }} className="relative aspect-4/5 w-full max-w-md mx-auto md:mx-0 overflow-hidden">
          <Image
            src="/vidit.png"
            alt="Architect"
            fill
            className="object-cover"
          />
        </motion.div>

        <div className="flex flex-col space-y-8">
          <motion.h2
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-serif font-bold tracking-tighter"
          >
            <p className="text-xl md:text-3xl font-sans font-extralight italic tracking-tighter leading-relaxed" > MEET OUR FOUNDER </p>
            Vidit Raj Singh Parihar
          </motion.h2>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-4 text-lg md:text-xl font-sans tracking-wide leading-relaxed text-muted-foreground"
          >
            <p>
              We believe architecture is not just about building structures, but about sculpting space and light into
              meaningful experiences. Our approach is rooted in the purity of materials and the honesty of form.
            </p>
            <p>
              Every project is a dialogue between the site, the material, and the void. We seek to create silence in a
              world of noise, allowing the architecture to speak through its proportions and texture.
            </p>
          </motion.div>
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            viewport={{ once: true }}
            className="text-1xl md:text-4xl font-serif italic text-foreground/80 mt-12 font-small"
          >
            VIDIT RAJ & ARCHITECTS
          </motion.p>
        </div>
      </div>
    </section>
  )
}
