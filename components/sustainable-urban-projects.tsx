"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const projectBanners = [
  {
    title: "Admin Pavilion",
    year: "2024",
    description: "Geometric cantilevers in concrete",
    image: "/ADMIN.png",
    id: "brutalist-pavilion",
  },
  {
    title: "Light & Shadow",
    year: "2023",
    description: "Stacked volumes exploringing form",
    image: "/OPTION - 2 RENDER.png",
    id: "light-shadow",
  },
  {
    title: "Heritage Resort",
    year: "2024",
    description: "Minimalist office overlooking the city",
    image: "/6.png",
    id: "glass-observation",
  },
  {
    title: "Interior Void",
    year: "2022",
    description: "Transparent spaces defined by light",
    image: "/render.jpg",
    id: "interior-void",
  },
]

function ProjectBanner({ project }: { project: (typeof projectBanners)[0] }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <Link href={`/gallery?project=${project.id}`}>
      <motion.div
        className="relative w-full min-h-svh md:h-screen overflow-hidden group cursor-pointer"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Background Image */}
        <motion.div
          initial={{ scale: 1 }}
          animate={{ scale: isHovered ? 1.05 : 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="absolute inset-0 bg-black"
        >
          <Image
            src={project.image || "/2.png"}
            alt={project.title}
            fill
            priority
            className="object-contain md:object-cover"
          />

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors duration-700" />
        </motion.div>

        {/* Content */}
        <div className="absolute inset-0 flex flex-col justify-between p-6 sm:p-10 md:p-16">
          <div />

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="space-y-5"
          >
            <div>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0.6 }}
                transition={{ duration: 0.4 }}
                className="text-[10px] sm:text-xs uppercase tracking-[0.3em] text-white/70 font-sans mb-3"
              >
                {project.description}
              </motion.p>

              <h3 className="text-3xl sm:text-4xl md:text-7xl font-serif font-bold text-white tracking-tighter mb-2">
                {project.title}
              </h3>

              <p className="text-xs sm:text-sm md:text-base tracking-widest uppercase text-white/60 font-sans">
                {project.year}
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
              transition={{ duration: 0.4 }}
            >
              <span className="inline-block px-6 sm:px-8 py-3 border border-white/40 text-white text-[10px] sm:text-xs uppercase tracking-[0.2em] font-sans hover:border-white hover:bg-white/5 transition-all duration-500">
                View Project
              </span>
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </Link>
  )
}

export default function ExtendedGallery() {
  return (
    <section className="relative bg-black">
      {/* Section header */}
      <div className="absolute top-24 sm:top-32 left-6 md:left-16 z-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <span className="text-[10px] tracking-[0.4em] uppercase font-sans text-white/50 block mb-4">
            Archive
          </span>
        </motion.div>
      </div>

      {/* Banners */}
      <div className="relative">
        {projectBanners.map((project, index) => (
          <ProjectBanner key={index} project={project} />
        ))}
      </div>
    </section>
  )
}