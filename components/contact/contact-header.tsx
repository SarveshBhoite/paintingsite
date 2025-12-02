"use client"

import { useEffect, useState } from "react"

export function ContactHeader() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section className="bg-olive pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h1
          className={`text-4xl md:text-5xl lg:text-6xl font-bold text-pista-light mb-6 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          Let's Transform Your Space
        </h1>
        <p
          className={`text-xl text-pista/80 max-w-2xl mx-auto ${
            isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
          }`}
        >
          Get a Free Estimate Today
        </p>
      </div>
    </section>
  )
}
