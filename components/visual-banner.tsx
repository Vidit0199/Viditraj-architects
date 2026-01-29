"use client"

import { motion } from "framer-motion"
import Image from "next/image"

export default function VisualBanner() {
  return (
    <section className="py-25 px-6">
      <div className="container mx-auto">
        <motion.div
          initial={{ clipPath: "inset(0 100% 0 0)" }}
          whileInView={{ clipPath: "inset(0 0% 0 0)" }}
          transition={{ duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          className="relative aspect-21/9 w-full bg-secondary overflow-hidden"
        >
          <Image src="/modernist-glass-architecture-interior.jpg" alt="Interior Banner" fill className="object-cover" />
        </motion.div>
      </div>
    </section>
  )
}
