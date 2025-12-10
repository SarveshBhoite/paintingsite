"use client"

import { useEffect, useRef, useState } from "react"

const timelineEvents = [
  {
    year: "2015",
    title: "Painting Journey Begins",
    description: "The owner started working professionally, laying the foundation for future success.",
  },
  {
    year: "2023",
    title: "PP Painting Services Founded",
    description: "The company was officially launched, offering premium painting solutions.",
  },
  {
    year: "2024",
    title: "Team Expansion",
    description: "The team grew with skilled painters joining to deliver larger and better projects.",
  },
  {
    year: "2025",
    title: "Major Project",
    description: "Successfully completed a high-value commercial & residential painting project.",
  },
  {
    year: "2026",
    title: "Growing Strong",
    description: "Expanding service areas and capabilities while maintaining top-tier quality.",
  },
]

export function Timeline() {
  const [visibleItems, setVisibleItems] = useState<number[]>([])
  const itemRefs = useRef<(HTMLDivElement | null)[]>([])

  useEffect(() => {
    const observers = itemRefs.current.map((ref, index) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleItems((prev) => [...new Set([...prev, index])])
          }
        },
        { threshold: 0.3 }
      )

      if (ref) observer.observe(ref)

      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section className="bg-pista-light py-20 md:py-28">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-forest mb-4">
            Our Journey
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            A timeline of growth, passion, and dedication to quality.
          </p>
        </div>

        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-olive/30 hidden md:block" />

          {timelineEvents.map((event, index) => (
            <div
              key={event.year}
              ref={(el) => {
                itemRefs.current[index] = el
              }}
              className={`relative mb-12 md:mb-16 ${
                visibleItems.includes(index)
                  ? index % 2 === 0
                    ? "animate-slide-in-left"
                    : "animate-slide-in-right"
                  : "opacity-0"
              }`}
            >
              <div
                className={`md:w-[calc(50%-2rem)] ${
                  index % 2 === 0
                    ? "md:mr-auto md:pr-8"
                    : "md:ml-auto md:pl-8"
                }`}
              >
                <div className="bg-pista rounded-xl p-6 md:p-8 shadow-sm hover:shadow-md transition-shadow">
                  <span className="inline-block px-4 py-1 bg-olive text-pista-light text-sm font-semibold rounded-full mb-4">
                    {event.year}
                  </span>
                  <h3 className="text-xl font-semibold text-forest mb-2">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground">{event.description}</p>
                </div>
              </div>

              {/* Center Dot */}
              <div className="absolute left-1/2 transform -translate-x-1/2 top-8 w-4 h-4 bg-olive rounded-full border-4 border-pista-light hidden md:block" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
