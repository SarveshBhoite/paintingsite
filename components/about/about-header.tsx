"use client"

import { useEffect, useState } from "react"

export function AboutHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-pista-light pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-forest mb-6 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          About BrushCraft Pro
        </h1>
        <div
          className={`w-24 h-1 bg-olive mx-auto mb-6 ${
            isVisible ? "animate-scale-in animation-delay-200" : "opacity-0"
          }`}
        />
        <p
          className={`text-lg text-muted-foreground max-w-2xl mx-auto ${
            isVisible ? "animate-fade-in-up animation-delay-300" : "opacity-0"
          }`}
        >
          Two decades of transforming spaces with passion, precision, and premium craftsmanship
        </p>
      </div>
    </section>
  )
}
