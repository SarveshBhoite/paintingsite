"use client"

import { useEffect, useRef, useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export function HeroSection() {
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <section ref={sectionRef} className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('/home/hero.jpg?height=1080&width=1920')`,
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-forest/85 via-olive/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32 pt-40">
        <div className="max-w-2xl">
          <span
            className={`inline-block text-pista/90 text-sm tracking-widest uppercase mb-4 ${
              isVisible ? "animate-fade-in" : "opacity-0"
            }`}
          >
            Premium Painting Services
          </span>
          <h1
            className={`text-4xl md:text-5xl lg:text-6xl font-bold text-pista-light leading-tight mb-6 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            Transform Your Space Into a <span className="text-accent">Masterpiece</span>
          </h1>
          <p
            className={`text-lg text-pista/80 leading-relaxed mb-8 max-w-xl ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Experience the art of perfect painting. From stunning interiors to durable exteriors, we bring your vision
            to life with precision and care.
          </p>
          <div
            className={`flex flex-col sm:flex-row gap-4 ${
              isVisible ? "animate-fade-in-up animation-delay-400" : "opacity-0"
            }`}
          >
            <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground group">
              <Link href="/contact">
                Get Free Estimate
                <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-pista text-pista hover:bg-pista hover:text-forest bg-transparent"
            >
              <Link href="/portfolio">View Our Work</Link>
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 150" className="w-full h-24 md:h-36" preserveAspectRatio="none">
          {/* Background wave layer */}
          <path
            d="M0,150 L0,100 C120,120 240,60 360,80 C480,100 600,40 720,60 C840,80 960,30 1080,50 C1200,70 1320,100 1440,80 L1440,150 Z"
            className="fill-pista/40"
          />
          {/* Main wave layer */}
          <path
            d="M0,150 L0,110 C180,70 360,130 540,90 C720,50 900,110 1080,70 C1200,45 1320,90 1440,60 L1440,150 Z"
            className="fill-pista"
          />
        </svg>
      </div>
    </section>
  )
}
