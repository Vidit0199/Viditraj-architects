"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled ? "py-4 bg-background/80 backdrop-blur-md border-b" : "py-8 bg-transparent"
      }`}
    >
      <div className="container mx-auto px-6 flex justify-between items-center">
        <Link href="/" className="text-2xl font-serif font-bold tracking-tighter">
          VIDIT RAJ & ARCHITECTS
        </Link>

        <div className="hidden md:flex gap-8 text-sm uppercase tracking-widest font-sans">
          <Link href="/#projects" className="hover:opacity-50 transition-opacity">
            Projects
          </Link>
          <Link href="/gallery" className="hover:opacity-50 transition-opacity">
            Gallery
          </Link>
          <Link href="/#services" className="hover:opacity-50 transition-opacity">
            Services
          </Link>
          <Link href="/#about" className="hover:opacity-50 transition-opacity">
            About
          </Link>
          <Link href="/#contact" className="hover:opacity-50 transition-opacity">
            Contact
          </Link>
        </div>

        <button className="md:hidden" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-background border-b p-6 md:hidden"
          >
            <div className="flex flex-col gap-6 text-sm uppercase tracking-widest font-sans">
              <Link href="/#projects" onClick={() => setIsMobileMenuOpen(false)}>
                Projects
              </Link>
              <Link href="/gallery" onClick={() => setIsMobileMenuOpen(false)}>
                Gallery
              </Link>
              <Link href="/#services" onClick={() => setIsMobileMenuOpen(false)}>
                Services
              </Link>
              <Link href="/#about" onClick={() => setIsMobileMenuOpen(false)}>
                About
              </Link>
              <Link href="/#contact" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  )
}
