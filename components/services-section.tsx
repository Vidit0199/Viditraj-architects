"use client"

import { motion } from "framer-motion"
import { Layout, Building2, Trees, Landmark } from "lucide-react"

const services = [
  {
    icon: Building2,
    title: "Residential Architecture",
    description:
      "We design bespoke residential architecture that balances form, function, and context. Our homes are carefully planned to enhance daily living through natural light, spatial clarity, and material integrity.",
  },
  {
    icon: Layout,
    title: "Interior Architecture & Design",
    description:
      "Our interior architecture services focus on spatial planning, material selection, and sensory experience. We create refined interiors that seamlessly integrate architecture, furniture, and lighting.",
  },
  {
    icon: Trees,
    title: "Sustainable & Contextual Design",
    description:
      "We integrate sustainable architectural strategies that respond to climate, site, and culture. Our approach emphasizes passive design, durable materials, and environmentally responsible construction.",
  },
  {
    icon: Landmark,
    title: "Cultural & Institutional Architecture",
    description:
      "We design cultural and institutional buildings that express identity and permanence. These projects are shaped by context, public engagement, and a deep respect for heritage and place.",
  },
]

export default function ServicesSection() {
  return (
    <section id="services" className="py-2 px-2 bg-secondary/5">
      <div className="container mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-6xl font-serif font-bold mb-24 tracking-tighter text-center"
        >
          Our Expertise
        </motion.h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-20">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              viewport={{ once: true }}
              className="group p-12 border-2 border-foreground/10 hover:border-foreground/90 transition-all duration-500 bg-white backdrop-blur-sm"
            >
              <service.icon className="w-10 h-10 mb-8 stroke-[1px] text-muted-foreground group-hover:text-foreground transition-colors" />
              <h3 className="text-2xl font-serif font-bold mb-4 tracking-tight">{service.title}</h3>
              <p className="text-muted-foreground font-sans tracking-wide leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
