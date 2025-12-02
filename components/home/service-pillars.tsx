"use client"

import { useEffect, useRef, useState } from "react"
import { Award, Clock, Users, Leaf } from "lucide-react"

const pillars = [
  {
    icon: Award,
    title: "Premium Finish",
    description: "Flawless results with top-quality materials",
  },
  {
    icon: Clock,
    title: "On-Time Delivery",
    description: "We respect your time and schedules",
  },
  {
    icon: Users,
    title: "Skilled Painters",
    description: "Expert craftsmen with years of experience",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly Paints",
    description: "Safe for your family and the environment",
  },
]

export function ServicePillars() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.2 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-pista py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-forest mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Why Choose BrushCraft Pro
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            We combine expertise with passion to deliver exceptional painting services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {pillars.map((pillar, index) => (
            <div
              key={pillar.title}
              className={`group bg-pista-light rounded-xl p-8 text-center hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                isVisible ? "animate-scale-in" : "opacity-0"
              }`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-olive/10 flex items-center justify-center group-hover:bg-olive group-hover:scale-110 transition-all duration-300">
                <pillar.icon className="w-8 h-8 text-olive group-hover:text-pista-light transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-forest mb-3">{pillar.title}</h3>
              <p className="text-muted-foreground">{pillar.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
