"use client"

import { useEffect, useRef, useState } from "react"
import { Home, Building2, Palette, Layers, Brush, Sparkles } from "lucide-react"

const services = [
  {
    icon: Home,
    title: "Interior Painting",
    description: "Transform your living spaces with flawless interior finishes",
    href: "#interior",
  },
  {
    icon: Building2,
    title: "Exterior Painting",
    description: "Weather-resistant coatings that protect and beautify",
    href: "#exterior",
  },
  {
    icon: Layers,
    title: "Commercial Painting",
    description: "Professional solutions for offices, retail, and industrial spaces",
    href: "#commercial",
  },
  {
    icon: Palette,
    title: "Color Consultation",
    description: "Expert guidance to find the perfect palette for your space",
    href: "#consultation",
  },
  {
    icon: Brush,
    title: "Texture Work",
    description: "Custom textures and decorative finishes that make a statement",
    href: "#texture",
  },
  {
    icon: Sparkles,
    title: "Cabinet Refinishing",
    description: "Revive your kitchen with expertly refinished cabinetry",
    href: "#cabinet",
  },
]

export function ServicesGrid() {
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
    <section ref={sectionRef} className="bg-secondary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <a
              key={service.title}
              href={service.href}
              className={`group bg-pista-light rounded-xl p-8 hover:shadow-xl transition-all duration-500 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-14 h-14 rounded-xl bg-pista flex items-center justify-center mb-6 group-hover:bg-olive transition-colors duration-300">
                <service.icon className="w-7 h-7 text-forest group-hover:text-pista-light transition-colors duration-300" />
              </div>
              <h3 className="text-xl font-semibold text-forest mb-3 group-hover:text-olive transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground mb-4">{service.description}</p>
              <span className="inline-flex items-center text-olive font-medium opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                Learn More
                <svg className="w-4 h-4 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
