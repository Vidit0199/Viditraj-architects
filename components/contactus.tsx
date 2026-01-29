"use client"

import type React from "react"
import { motion } from "framer-motion"
import { useState } from "react"

export default function ContactSection() {
  const [focused, setFocused] = useState<string | null>(null)
  const [showThankYou, setShowThankYou] = useState(false)

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    vision: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const mailtoLink = `mailto:vision@structura.studio?subject=${encodeURIComponent(
      formData.subject
    )}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.vision}`
    )}`

    window.location.href = mailtoLink

    setShowThankYou(true)

    setFormData({
      name: "",
      email: "",
      subject: "",
      vision: "",
    })
  }

  return (
    <section id="contact" className="relative py-25 px-6 bg-background overflow-hidden">
      {/* Architectural background elements */}
      <div className="absolute top-0 left-0 w-1/3 h-1/3 bg-secondary/5 -z-10" />
      <div className="absolute bottom-0 right-0 w-1/2 h-2/3 bg-secondary/5 -z-10" />

      <div className="container mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-24"
        >
          <span className="text-[10px] tracking-[0.4em] uppercase font-sans text-muted-foreground block mb-4">
            Get in Touch
          </span>
          <h2 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-6">
            Let's Design the Future
          </h2>
          <p className="text-base text-muted-foreground max-w-2xl leading-relaxed">
            We specialize in creating architectural experiences that transcend conventional boundaries. Share your
            vision, and let's bring it to life.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <div className="space-y-16">
              <div className="relative pl-6 border-l-2 border-foreground/20 hover:border-foreground transition-colors duration-500">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Studio Address
                </p>
                <p className="text-lg font-serif font-bold mb-2">VIDIT RAJ & ARCHITECTS</p>
                <p className="text-sm text-muted-foreground">
                  Keshav Nagar, Khara Kua, Udaipur, Rajasthan 313001
                </p>
              </div>

              <div className="relative pl-6 border-l-2 border-foreground/20 hover:border-foreground transition-colors duration-500">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Direct Line
                </p>
                <a href="tel:+919087654321" className="text-lg font-bold hover:opacity-60">
                  +91 9087654321
                </a>
                <p className="text-xs text-muted-foreground mt-2">MON – FRI, 9AM–6PM IST</p>
              </div>

              <div className="relative pl-6 border-l-2 border-foreground/20 hover:border-foreground transition-colors duration-500">
                <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                  Gmail
                </p>
                <a
                  href="mailto:Viditrajarchitects@gmail.com"
                  className="text-lg font-serif font-bold hover:opacity-60 break-all"
                >
                  Viditrajarchitects@gmail.com
                </a>
              </div>
            </div>
          </motion.div>

          {/* Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="relative">
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  onFocus={() => setFocused("name")}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-transparent border-b border-foreground/20 py-4 outline-none"
                  required
                />
                <label
                  className={`absolute left-0 transition-all text-[10px] uppercase tracking-widest ${
                    focused === "name" || formData.name ? "-top-4 text-foreground" : "top-4 text-muted-foreground"
                  }`}
                >
                  Full Name
                </label>
              </div>

              <div className="relative">
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  onFocus={() => setFocused("email")}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-transparent border-b border-foreground/20 py-4 outline-none"
                  required
                />
                <label
                  className={`absolute left-0 transition-all text-[10px] uppercase tracking-widest ${
                    focused === "email" || formData.email ? "-top-4 text-foreground" : "top-4 text-muted-foreground"
                  }`}
                >
                  Professional Email
                </label>
              </div>

              <div className="relative">
                <textarea
                  rows={6}
                  value={formData.vision}
                  onChange={(e) => setFormData({ ...formData, vision: e.target.value })}
                  onFocus={() => setFocused("vision")}
                  onBlur={(e) => !e.target.value && setFocused(null)}
                  className="w-full bg-transparent border-b border-foreground/20 py-4 outline-none resize-none"
                  required
                />
                <label
                  className={`absolute left-0 transition-all text-[10px] uppercase tracking-widest ${
                    focused === "vision" || formData.vision ? "-top-4 text-foreground" : "top-4 text-muted-foreground"
                  }`}
                >
                  Describe Your Vision
                </label>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 0.95 }}
                whileTap={{ scale: 0.9 }}
                className="w-full py-5 bg-foreground text-background uppercase tracking-[0.3em] text-xs"
              >
                Submit Inquiry
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>

      {/* THANK YOU POPUP */}
      {showThankYou && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-background p-10 max-w-md text-center"
          >
            <h3 className="text-2xl font-serif font-bold mb-4">Thank You</h3>
            <p className="text-sm text-muted-foreground mb-8">
              We have received your message. We will connect with you soon.
            </p>
            <button
              onClick={() => setShowThankYou(false)}
              className="px-6 py-3 bg-foreground text-background uppercase tracking-widest text-xs"
            >
              Close
            </button>
          </motion.div>
        </div>
      )}
    </section>
  )
}