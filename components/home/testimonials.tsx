"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react"

const testimonials = [
  {
    id: 1,
    name: "Sarvesh",
    role: "Homeowner",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "BrushCraft Pro transformed our home completely. The attention to detail and professionalism was outstanding. Our walls have never looked better!",
    rating: 5,
  },
  {
    id: 2,
    name: "Sarvesh",
    role: "Business Owner",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "We hired them for our office renovation and the results exceeded expectations. On time, on budget, and exceptional quality.",
    rating: 5,
  },
  {
    id: 3,
    name: "Sarvesh",
    role: "Interior Designer",
    image: "/placeholder.svg?height=80&width=80",
    quote:
      "As an interior designer, I'm very particular about paint quality. BrushCraft Pro consistently delivers the perfect finish for my clients.",
    rating: 5,
  },
]

export function Testimonials() {
  const [isVisible, setIsVisible] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
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

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section ref={sectionRef} className="bg-secondary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2
            className={`text-3xl md:text-4xl font-bold text-forest mb-4 ${
              isVisible ? "animate-fade-in-up" : "opacity-0"
            }`}
          >
            What Our Clients Say
          </h2>
          <p
            className={`text-muted-foreground max-w-2xl mx-auto ${
              isVisible ? "animate-fade-in-up animation-delay-200" : "opacity-0"
            }`}
          >
            Don't just take our word for it — hear from our satisfied customers
          </p>
        </div>

        <div
          className={`relative max-w-4xl mx-auto ${isVisible ? "animate-scale-in animation-delay-300" : "opacity-0"}`}
        >
          <div className="bg-pista-light rounded-2xl p-8 md:p-12 shadow-lg">
            <Quote className="w-12 h-12 text-olive/30 mb-6" />

            <div className="flex flex-col items-center text-center">
              <div className="flex gap-1 mb-6">
                {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-olive text-olive" />
                ))}
              </div>

              <p className="text-lg md:text-xl text-forest leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </p>

              <div className="flex items-center gap-4">
                <div className="relative w-16 h-16 rounded-full overflow-hidden border-4 border-olive/20">
                  <Image
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-forest">{testimonials[currentIndex].name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonials[currentIndex].role}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center gap-4 mt-8">
            <button
              onClick={prevTestimonial}
              className="w-12 h-12 rounded-full bg-pista-light border border-border flex items-center justify-center hover:bg-olive hover:text-pista-light hover:border-olive transition-all"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <div className="flex items-center gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? "bg-olive w-8" : "bg-border"
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            <button
              onClick={nextTestimonial}
              className="w-12 h-12 rounded-full bg-pista-light border border-border flex items-center justify-center hover:bg-olive hover:text-pista-light hover:border-olive transition-all"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
