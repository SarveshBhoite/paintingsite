"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

const teamMembers = [
  {
    name: "Sarvesh Bhoite",
    role: "Founder & CEO",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Sarvesh",
    role: "Operations Manager",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Raj",
    role: "Lead Painter",
    image: "/placeholder.svg?height=400&width=400",
  },
  {
    name: "Siddhi",
    role: "Color Consultant",
    image: "/placeholder.svg?height=400&width=400",
  },
]

export function TeamSection() {
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
            Meet Our Team
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            The talented people behind every successful project
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <div
              key={member.name}
              className={`group text-center ${isVisible ? "animate-fade-in" : "opacity-0"}`}
              style={{ animationDelay: `${index * 100 + 200}ms` }}
            >
              <div className="relative w-48 h-48 mx-auto mb-6 rounded-full overflow-hidden border-4 border-pista-light group-hover:border-olive transition-colors">
                <Image
                  src={member.image || "/placeholder.svg"}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
              </div>
              <h3 className="text-xl font-semibold text-forest mb-1">{member.name}</h3>
              <p className="text-olive font-medium">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
