"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"

const categories = ["All", "Interior", "Exterior", "Commercial", "Texture Work"]

const projects = [
  {
    id: 1,
    title: "Modern Minimalist Living Room",
    category: "Interior",
    image: "/portfolio/interior1.jpg?height=600&width=800",
    beforeImage: "/portfolio/interior2.jpg?height=600&width=800",
    description: "Complete transformation of a dated living space into a modern minimalist haven.",
    paintType: "Benjamin Moore Regal Select",
    duration: "3 days",
    aspectRatio: "4/5",
  },
  {
    id: 2,
    title: "Victorian Home Exterior",
    category: "Exterior",
    image: "/portfolio/interior1.jpg?height=800&width=600",
    beforeImage: "/portfolio/interior2.jpg?height=800&width=600",
    description: "Restored and repainted this beautiful Victorian home to its former glory.",
    paintType: "Sherwin-Williams Duration",
    duration: "7 days",
    aspectRatio: "3/4",
  },
  {
    id: 3,
    title: "Corporate Office Complex",
    category: "Commercial",
    image: "/portfolio/interior1.jpg?height=500&width=800",
    beforeImage: "/portfolio/interior2.jpg?height=500&width=800",
    description: "Fresh, professional look for a 50,000 sq ft office space.",
    paintType: "PPG Paints",
    duration: "14 days",
    aspectRatio: "16/10",
  },
  {
    id: 4,
    title: "Textured Accent Wall",
    category: "Texture Work",
    image: "/portfolio/interior1.jpg?height=700&width=600",
    beforeImage: "/portfolio/interior2.jpg?height=700&width=600",
    description: "Custom Venetian plaster finish creating a stunning focal point.",
    paintType: "Custom Venetian Plaster",
    duration: "2 days",
    aspectRatio: "4/5",
  },
  {
    id: 5,
    title: "Cozy Master Bedroom",
    category: "Interior",
    image: "/portfolio/interior1.jpg?height=600&width=700",
    beforeImage: "/portfolio/interior2.jpg?height=600&width=700",
    description: "Warm, inviting colors transformed this bedroom into a peaceful retreat.",
    paintType: "Farrow & Ball",
    duration: "2 days",
    aspectRatio: "1/1",
  },
  {
    id: 6,
    title: "Craftsman Home Exterior",
    category: "Exterior",
    image: "/portfolio/interior1.jpg?height=800&width=600",
    beforeImage: "/portfolio/interior2.jpg?height=800&width=600",
    description: "Weather-resistant finish that will last for years to come.",
    paintType: "Behr Marquee",
    duration: "5 days",
    aspectRatio: "3/4",
  },
  {
    id: 7,
    title: "Restaurant Interior",
    category: "Commercial",
    image: "/portfolio/interior1.jpg?height=500&width=700",
    beforeImage: "/portfolio/interior2.jpg?height=500&width=700",
    description: "Created an inviting atmosphere for diners with warm, appetizing colors.",
    paintType: "Benjamin Moore Aura",
    duration: "4 days",
    aspectRatio: "16/10",
  },
  {
    id: 8,
    title: "Faux Stone Finish",
    category: "Texture Work",
    image: "/portfolio/interior1.jpg?height=600&width=500",
    beforeImage: "/portfolio/interior2.jpg?height=600&width=500",
    description: "Custom faux stone technique creating dramatic visual impact.",
    paintType: "Custom Faux Finish",
    duration: "3 days",
    aspectRatio: "4/5",
  },
  {
    id: 9,
    title: "Open Concept Kitchen",
    category: "Interior",
    image: "/portfolio/interior1.jpg?height=600&width=800",
    beforeImage: "/portfolio/interior2.jpg?height=600&width=800",
    description: "Bright, clean finish that opens up the entire living space.",
    paintType: "Sherwin-Williams Emerald",
    duration: "4 days",
    aspectRatio: "16/10",
  },
  {
    id: 10,
    title: "Medical Office Suite",
    category: "Commercial",
    image: "/portfolio/interior1.jpg?height=600&width=700",
    beforeImage: "/portfolio/interior2.jpg?height=600&width=700",
    description: "Calming colors designed to put patients at ease.",
    paintType: "PPG Ultra-Hide",
    duration: "6 days",
    aspectRatio: "1/1",
  },
  {
    id: 11,
    title: "Colonial Estate",
    category: "Exterior",
    image: "/portfolio/interior1.jpg?height=700&width=600",
    beforeImage: "/portfolio/interior2.jpg?height=700&width=600",
    description: "Classic color scheme that enhances the home's architectural details.",
    paintType: "Benjamin Moore Regal Select",
    duration: "10 days",
    aspectRatio: "3/4",
  },
  {
    id: 12,
    title: "Metallic Accent Wall",
    category: "Texture Work",
    image: "/portfolio/interior1.jpg?height=600&width=600",
    beforeImage: "/portfolio/interior2.jpg?height=600&width=600",
    description: "Stunning metallic finish that catches light beautifully.",
    paintType: "Custom Metallic Finish",
    duration: "2 days",
    aspectRatio: "1/1",
  },
]

export function PortfolioGallery() {
  const [activeFilter, setActiveFilter] = useState("All")
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const [sliderPosition, setSliderPosition] = useState(50)
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

  const filteredProjects = activeFilter === "All" ? projects : projects.filter((p) => p.category === activeFilter)

  const handleSliderChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSliderPosition(Number(e.target.value))
  }

  const navigateProject = (direction: "prev" | "next") => {
    if (!selectedProject) return
    const currentIndex = filteredProjects.findIndex((p) => p.id === selectedProject.id)
    if (direction === "prev" && currentIndex > 0) {
      setSelectedProject(filteredProjects[currentIndex - 1])
    } else if (direction === "next" && currentIndex < filteredProjects.length - 1) {
      setSelectedProject(filteredProjects[currentIndex + 1])
    }
    setSliderPosition(50)
  }

  return (
    <section ref={sectionRef} className="bg-pista py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Filter Buttons */}
        <div className={`flex flex-wrap justify-center gap-3 mb-12 ${isVisible ? "animate-fade-in" : "opacity-0"}`}>
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                activeFilter === category
                  ? "bg-olive text-pista-light"
                  : "bg-pista-light text-muted-foreground hover:bg-pista-light/80"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Masonry Gallery */}
        <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              onClick={() => {
                setSelectedProject(project)
                setSliderPosition(50)
              }}
              className={`group relative overflow-hidden rounded-xl cursor-pointer break-inside-avoid ${
                isVisible ? "animate-fade-in" : "opacity-0"
              }`}
              style={{
                animationDelay: `${(index % 6) * 100}ms`,
                aspectRatio: project.aspectRatio,
              }}
            >
              <Image
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-forest/0 group-hover:bg-forest/70 transition-all duration-300" />
              <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                <span className="text-accent text-sm font-medium mb-1">{project.category}</span>
                <h3 className="text-pista-light text-xl font-semibold mb-2">{project.title}</h3>
                <span className="inline-flex items-center text-pista/80 text-sm">
                  View Project
                  <ChevronRight className="w-4 h-4 ml-1" />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-forest/90 animate-fade-in"
          onClick={() => setSelectedProject(null)}
        >
          <div
            className="relative w-full max-w-5xl bg-pista-light rounded-2xl overflow-hidden max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setSelectedProject(null)}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-forest/80 text-pista-light flex items-center justify-center hover:bg-forest transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Navigation Arrows */}
            <button
              onClick={() => navigateProject("prev")}
              className="absolute left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-forest/80 text-pista-light flex items-center justify-center hover:bg-forest transition-colors disabled:opacity-50"
              disabled={filteredProjects.findIndex((p) => p.id === selectedProject.id) === 0}
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => navigateProject("next")}
              className="absolute right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 rounded-full bg-forest/80 text-pista-light flex items-center justify-center hover:bg-forest transition-colors disabled:opacity-50"
              disabled={filteredProjects.findIndex((p) => p.id === selectedProject.id) === filteredProjects.length - 1}
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>

            {/* Before/After Slider */}
            <div className="relative aspect-video overflow-hidden">
              {/* After Image (Full) */}
              <Image
                src={selectedProject.image || "/placeholder.svg"}
                alt={`${selectedProject.title} - After`}
                fill
                className="object-cover"
              />

              {/* Before Image (Clipped) */}
              <div
  className="absolute inset-0 overflow-hidden"
  style={{ width: `${sliderPosition}%` }}
>
  <div className="relative w-full h-full">
    <Image
      src={selectedProject.beforeImage || "/placeholder.svg"}
      alt={`${selectedProject.title} - Before`}
      fill
      className="object-cover"
    />
  </div>
</div>


              {/* Slider Line */}
              <div
                className="absolute top-0 bottom-0 w-1 bg-pista-light shadow-lg"
                style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
              >
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-pista-light shadow-lg flex items-center justify-center">
                  <ChevronLeft className="w-4 h-4 text-forest" />
                  <ChevronRight className="w-4 h-4 text-forest" />
                </div>
              </div>

              {/* Slider Input */}
              <input
                type="range"
                min="0"
                max="100"
                value={sliderPosition}
                onChange={handleSliderChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize"
                aria-label="Before/After comparison slider"
              />

              {/* Labels */}
              <span className="absolute bottom-4 left-4 px-3 py-1 bg-forest/80 text-pista-light text-sm rounded-full">
                Before
              </span>
              <span className="absolute bottom-4 right-4 px-3 py-1 bg-forest/80 text-pista-light text-sm rounded-full">
                After
              </span>
            </div>

            {/* Project Details */}
            <div className="p-8">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <span className="text-olive text-sm font-medium">{selectedProject.category}</span>
                  <h2 className="text-2xl md:text-3xl font-bold text-forest">{selectedProject.title}</h2>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-pista rounded-xl p-4">
                  <span className="text-sm text-muted-foreground">Paint Type</span>
                  <p className="font-semibold text-forest">{selectedProject.paintType}</p>
                </div>
                <div className="bg-pista rounded-xl p-4">
                  <span className="text-sm text-muted-foreground">Duration</span>
                  <p className="font-semibold text-forest">{selectedProject.duration}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
