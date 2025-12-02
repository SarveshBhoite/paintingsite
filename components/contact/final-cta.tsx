"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Calendar, ArrowRight } from "lucide-react"

export function FinalCTA() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.3 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  return (
    <section ref={sectionRef} className="bg-olive py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className={isVisible ? "animate-fade-in-up" : "opacity-0"}>
          <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-pista-light/20 flex items-center justify-center">
            <Calendar className="w-8 h-8 text-pista-light" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-pista-light mb-4">Book a Home Visit</h2>
          <p className="text-pista/80 text-lg mb-8 max-w-2xl mx-auto">
            Our experts will visit your property, assess the project requirements, and provide a detailed, no-obligation
            estimate.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" className="bg-pista-light text-forest hover:bg-pista">
              <a href="tel:+1234567890">
                Schedule Visit
                <ArrowRight className="ml-2 w-4 h-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-pista-light text-pista-light hover:bg-pista-light hover:text-forest bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
