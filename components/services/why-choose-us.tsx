"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Shield, Clock, Award, Leaf, ArrowRight } from "lucide-react"

const reasons = [
  {
    icon: Shield,
    title: "Licensed & Insured",
    description: "Full coverage for your peace of mind",
  },
  {
    icon: Clock,
    title: "On-Time Guarantee",
    description: "We respect your schedule",
  },
  {
    icon: Award,
    title: "Quality Warranty",
    description: "5-year warranty on all work",
  },
  {
    icon: Leaf,
    title: "Eco-Friendly",
    description: "Safe for family and environment",
  },
]

export function WhyChooseUs() {
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
    <section ref={sectionRef} className="bg-olive py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-12 ${isVisible ? "animate-fade-in-up" : "opacity-0"}`}>
          <h2 className="text-3xl md:text-4xl font-bold text-pista-light mb-4">Why Choose Our Services</h2>
          <p className="text-pista/80 max-w-2xl mx-auto">
            Experience the difference that comes with two decades of expertise
          </p>
        </div>

        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-6 mb-12 ${
            isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
          }`}
        >
          {reasons.map((reason) => (
            <div key={reason.title} className="text-center">
              <div className="w-14 h-14 mx-auto mb-4 rounded-full bg-pista-light/20 flex items-center justify-center">
                <reason.icon className="w-7 h-7 text-pista-light" />
              </div>
              <h3 className="text-lg font-semibold text-pista-light mb-1">{reason.title}</h3>
              <p className="text-pista/70 text-sm">{reason.description}</p>
            </div>
          ))}
        </div>

        <div className={`text-center ${isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"}`}>
          <Button asChild size="lg" className="bg-pista-light text-forest hover:bg-pista">
            <Link href="/contact">
              Get Your Free Estimate
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
