"use client"

import { motion } from "framer-motion"
import Image from "next/image"

const projects = [
  {
    title: "The Monolith",
    category: "Residential",
    image: "/FINAL RENDER - 22.07.2025.png",
  },
  {
    title: "Glass Void",
    category: "Commercial",
    image: "/01.jpg",
  },
  // {
  //   title: "Shadow Line",
  //   category: "Cultural",
  //   image: "/8.png",
  // },
  {
    title: "The Monolith",
    category: "Residential",
    image: "/1.jpg",
  },
  // {
  //   title: "The Monolith",
  //   category: "Residential",
  //   image: "/FINAL RENDER - 22.07.2025.png",
  // },
  // {
  //   title: "The Monolith",
  //   category: "Residential",
  //   image: "/FINAL RENDER - 22.07.2025.png",
  // },
]

export default function ProjectsSection() {
  return (
    <section id="projects" className="py-25 px-6 bg-background">
      <div className="container mx-auto">
        <h2 className="text-4xl md:text-6xl font-serif font-bold mb-16 tracking-tighter">Residential  Elevations </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-5/6 overflow-hidden bg-muted mb-4">
                <Image
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-all duration-700 group-hover:grayscale-0 group-hover:scale-105"
                />
              </div>
              <p className="text-xs uppercase tracking-widest font-sans text-muted-foreground mb-1">
                {project.category}
              </p>
              <h3 className="text-xl font-serif font-bold group-hover:opacity-50 transition-opacity">
                {project.title}
              </h3>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
