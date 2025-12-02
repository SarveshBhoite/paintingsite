"use client"

import { useEffect, useRef, useState } from "react"
import { Heart, Shield, Sparkles, Users } from "lucide-react"

const values = [
  {
    icon: Sparkles,
    title: "Excellence",
    description: "We never settle for less than perfect. Every brush stroke matters.",
  },
  {
    icon: Heart,
    title: "Passion",
    description: "We love what we do, and it shows in every project we complete.",
  },
  {
    icon: Shield,
    title: "Integrity",
    description: "Honest pricing, transparent communication, and promises kept.",
  },
  {
    icon: Users,
    title: "Customer First",
    description: "Your satisfaction is our ultimate measure of success.",
  },
]

export function ValuesSection() {
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
    <section ref={sectionRef} className="bg-olive py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-pista-light mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Our Core Values
          </h2>
          <p
            className={`text-pista/80 max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            The principles that guide everything we do
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`text-center ${isVisible ? "animate-scale-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pista-light/20 flex items-center justify-center">
                <value.icon className="w-8 h-8 text-pista-light" />
              </div>
              <h3 className="text-xl font-semibold text-pista-light mb-3">{value.title}</h3>
              <p className="text-pista/70">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
