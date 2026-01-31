"use client"

import { Suspense } from "react"
import ScrollProgress from "@/components/scroll-progress"
import GalleryContent from "@/components/gallery-content"

const galleryProjects = [
  {
    id: "brutalist-pavilion",
    title: "Brutalist Pavilion",
    year: "2024",
    description:
      "A meditation on geometric form and material expression. Cantilevers explore the tension between weight and weightlessness, creating dramatic spatial moments.",
    images: ["/brutalist-concrete-architecture-monolith.jpg", "/brutalist-concrete-house.jpg"],
    details: {
      location: "New York, USA",
      size: "1,200 m²",
      materials: "Cast concrete, steel",
      completion: "2024",
    },
  },
  {
    id: "light-shadow",
    title: "Light & Shadow",
    year: "2023",
    description:
      "Stacked residential volumes that celebrate the interplay of light and concrete texture. Each level is a distinct spatial experience.",
    images: ["/brutalist-concrete-house.jpg", "/brutalist-concrete-architecture-monolith.jpg"],
    details: {
      location: "London, UK",
      size: "850 m²",
      materials: "Reinforced concrete, timber",
      completion: "2023",
    },
  },
  {
    id: "glass-observation",
    title: "Glass Observation",
    year: "2024",
    description:
      "A minimal office tower celebrating transparency and light. The design emphasizes the relationship between interior and exterior landscape.",
    images: ["/modernist-glass-office.jpg", "/modernist-glass-architecture-interior.jpg"],
    details: {
      location: "Tokyo, Japan",
      size: "3,500 m²",
      materials: "Glass, steel, limestone",
      completion: "2024",
    },
  },
  {
    id: "interior-void",
    title: "Interior Void",
    year: "2022",
    description:
      "An exploration of transparent materials and spatial continuity. The void becomes the primary architectural element.",
    images: ["/modernist-glass-architecture-interior.jpg", "/modernist-glass-office.jpg"],
    details: {
      location: "Berlin, Germany",
      size: "2,100 m²",
      materials: "Glass, concrete, natural stone",
      completion: "2022",
    },
  },
]

function Loading() {
  return null
}

export default function GalleryPage() {
  return (
    <main className="relative min-h-screen bg-background">
      <ScrollProgress />
     
      <Suspense fallback={<Loading />}>
        <GalleryContent />
      </Suspense>
    </main>
  )
}
