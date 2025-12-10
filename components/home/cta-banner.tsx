"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function CTABanner() {
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
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex flex-col lg:flex-row items-center justify-between gap-8 ${
            isVisible ? "animate-fade-in-up" : "opacity-0"
          }`}
        >
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-pista-light mb-4">Ready to Transform Your Space?</h2>
            <p className="text-pista/80 text-lg max-w-xl">
              Schedule a free consultation today and let's bring your vision to life
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button asChild size="lg" className="bg-pista-light text-forest hover:bg-pista">
              <Link href="/contact">
                Get Free Estimate
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-pista-light text-pista-light hover:bg-pista-light hover:text-forest bg-transparent"
            >
              <a href="tel:+917620773294">
                <Phone className="mr-2 w-4 h-4" />
                Call Us Now
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
