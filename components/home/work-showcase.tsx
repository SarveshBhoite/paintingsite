"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    id: 1,
    category: "Interior",
    image: "/home/project1.jpg?height=400&width=600",
  },
  {
    id: 2,
    category: "Design",
    image: "/home/project2.jpg?height=400&width=600",
  },
  {
    id: 3,
    category: "Bedroom",
    image: "/home/project3.jpg?height=400&width=600",
  },
  {
    id: 4,
    category: "Schools",
    image: "/home/project4.jpg?height=400&width=600",
  },
  {
    id: 5,
    category: "Ceiling",
    image: "/home/project5.jpg?height=400&width=600",
  },
  {
    id: 6,
    category: "Exterior",
    image: "/home/project6.jpg?height=400&width=600",
  },
]

export function WorkShowcase() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-pista-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16">
          <div>
            <h2
              className={`text-3xl md:text-4xl font-bold text-forest mb-4 ${
                isVisible ? "animate-slide-in-left" : "opacity-0"
              }`}
            >
              Our Work Showcase
            </h2>
            <p
              className={`text-muted-foreground max-w-xl ${
                isVisible ? "animate-slide-in-left animation-delay-200" : "opacity-0"
              }`}
            >
              Explore our portfolio of completed projects that showcase our commitment to excellence
            </p>
          </div>
          <Button
            asChild
            variant="outline"
            className={`mt-6 md:mt-0 border-olive text-olive hover:bg-olive hover:text-pista-light ${
              isVisible ? "animate-fade-in animation-delay-300" : "opacity-0"
            }`}
          >
            <Link href="/portfolio">
              View All Projects
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <Link
              key={project.id}
              href="/portfolio"
              className={`group relative overflow-hidden rounded-xl aspect-[4/3] ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 300}ms` }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.category}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/70 transition-all duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <h3 className="text-pista-light text-xl font-semibold">{project.category}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
