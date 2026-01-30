"use client"

import { motion } from "framer-motion"
import Image from "next/image"
import { useSearchParams } from "next/navigation"
import { useState } from "react"

/* -------------------------------------------------------------------------- */
/*                                PROJECT DATA                                */
/* -------------------------------------------------------------------------- */

const galleryProjects = [
  {
    id: "brutalist-pavilion",
    title: "Admin Pavillion",
    year: "2024",
    description:
      "A meditation on geometric form and material expression. Cantilevers explore the tension between weight and weightlessness, creating dramatic spatial moments.",
    images: [
      "/brutalist-concrete-architecture-monolith.jpg",
      "/ADMIN.png",
      "/FRONT CANOPY.png",
      "/CANOPY 2.png",
      "/brutalist-concrete-architecture-monolith.jpg",
    ],
    details: {
      location: "New York, USA",
      size: "1,200 m²",
      materials: "Cast concrete, steel",
      completion: "2024",
    },
  },
  {
    id: "light-shadow",
    title: "Residentail",
    year: "2023",
    description:
      "Stacked residential volumes that celebrate the interplay of light and concrete texture. Each level is a distinct spatial experience.",
    images: ["/1.jpg",
      "/4.jpg",
      "/5.jpg",
      "/6.jpg",
      "/3.jpg",
    ],
    details: {
      location: "Udaipur, RAJ",
      size: "1650 sq feet",
      materials: "Reinforced concrete, timber",
      completion: "2023",
    },
  },
  {
    id: "glass-observation",
    title: "Heritage Resort",
    year: "2024",
    description:
      "A minimal office tower celebrating transparency and light.",
    images: ["/6.png",
      "/7.png",
      "/8.png",
      "/1.png"
    ],
    details: {
      location: "Jaisalmer, RAJ",
      size: "9,500 sq feet",
      materials: "Glass, steel, limestone",
      completion: "2024",
    },
  },
  {
    id: "glass-observation 1",
    title: "Heritage Resort",
    year: "2024",
    description:
      "A minimal office tower celebrating transparency and light.",
    images: ["/render.jpg"],
    details: {
      location: "Tokyo, Japan",
      size: "3,500 m²",
      materials: "Glass, steel, limestone",
      completion: "2024",
    },
  },
  {
    id: "glass-observation 2",
    title: "Commercial GYM",
    year: "2024",
    description:
      "A minimal office tower celebrating transparency and light.",
    images: ["/4.png",
      "/3.png",
      "/2.png"
    ],
    details: {
      location: "Udaipur, RAJ",
      size: "5,500 m²",
      materials: "Glass, steel ",
      completion: "2024",
    },
  },
  {
    id: "glass-observation 3",
    title: "European Styled",
    year: "2024",
    description:
      "A minimal office tower celebrating transparency and light.",
    images: ["/2.jpg",
      "/01.jpg",
      "/03.jpg",
    ],
    details: {
      location: "Noida, UP ",
      size: "2,500 m²",
      materials: "Glass, steel, limestone",
      completion: "2024",
    },
  },
  // {
  //   id: "glass-observation 4",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // },
  //   {
  //   id: "glass-observation 5",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // },  {
  //   id: "glass-observation 6",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // },  {
  //   id: "glass-observation 8",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // }, 
  //  {
  //   id: "glass-observation 7",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // },
  //  {
  //   id: "glass-observation 9",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // }, {
  //   id: "glass-observation 10",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // }, {
  //   id: "glass-observation 11",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // }, {
  //   id: "glass-observation 12",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // }, {
  //   id: "glass-observation 13",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // }, {
  //   id: "glass-observation 14",
  //   title: "Heritage Resort",
  //   year: "2024",
  //   description:
  //     "A minimal office tower celebrating transparency and light.",
  //   images: ["/6.png"],
  //   details: {
  //     location: "Tokyo, Japan",
  //     size: "3,500 m²",
  //     materials: "Glass, steel, limestone",
  //     completion: "2024",
  //   },
  // },
  // ADD MORE PROJECTS (UP TO 18)
]

/* -------------------------------------------------------------------------- */
/*                               GALLERY GRID                                 */
/* -------------------------------------------------------------------------- */

function GalleryGrid() {
  return (
    <section className="pt-32 px-6">
      <div className="container mx-auto">
        <h1 className="text-5xl md:text-7xl font-serif font-bold tracking-tighter mb-16">
          Gallery
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {galleryProjects.slice(0, 18).map((project) => (
            <a
              key={project.id}
              href={`/gallery?project=${project.id}`}
              className="group"
            >
              <div className="relative aspect-4/5 overflow-hidden mb-6">
                <Image
                  src={project.images[0]}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500" />
              </div>

              <h3 className="text-2xl font-serif font-bold mb-1">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {project.year}
              </p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

/* -------------------------------------------------------------------------- */
/*                             PROJECT DETAIL VIEW                             */
/* -------------------------------------------------------------------------- */

function ProjectDetail({ project }: any) {
  const [selectedImageIndex, setSelectedImageIndex] = useState(0)

  return (
    <>
      {/* HERO */}
      <section className="pt-32 pb-12 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] tracking-[0.4em] uppercase text-muted-foreground block mb-4">
              Project Details
            </span>
            <h1 className="text-6xl md:text-8xl font-serif font-bold tracking-tighter mb-4">
              {project.title}
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              {project.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      <section className="px-6 mb-24">
        <div className="container mx-auto">
          <motion.div
            key={selectedImageIndex}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="relative aspect-video overflow-hidden"
          >
            
            <Image
              src={project.images[selectedImageIndex]}
              alt={project.title}
              fill
              className="object-cover"
              priority
            />
            
          </motion.div>

          <div className="flex gap-3 mt-6 justify-center">
            {project.images.map((_image: string, index: number) => (
              <button
                key={index}
                onClick={() => setSelectedImageIndex(index)}
                className={`px-4 py-2 text-xs uppercase tracking-widest ${
                  selectedImageIndex === index
                    ? "bg-foreground text-background"
                    : "border border-foreground/20"
                }`}
              >
                 {index + 1}
              </button>
              
            ))}
          </div>
        </div>
         {/* PROJECT DETAILS */}
<section className="px-6 mb-24">
  <div className="container mx-auto">
    <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
      {Object.entries(project.details).map(([key, value]) => (
        <div key={key}>
          <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
            {key}
          </p>
          <p className="text-lg font-serif font-bold">
            {String(value)}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
      </section>

      {/* BACK TO GALLERY */}
      <section className="px-6 pb-24 text-center">
        <a
          href="/gallery"
          className="inline-block text-sm uppercase tracking-widest border-b border-foreground"
        >
          Back to Gallery
        </a>
      </section>
    </>
  )
}

/* -------------------------------------------------------------------------- */
/*                               MAIN EXPORT                                   */
/* -------------------------------------------------------------------------- */

export default function GalleryPage() {
  const searchParams = useSearchParams()
  const projectId = searchParams.get("project")

  if (!projectId) {
    return <GalleryGrid />
  }

  const project =
    galleryProjects.find((p) => p.id === projectId) || galleryProjects[0]

  return <ProjectDetail project={project} />
}