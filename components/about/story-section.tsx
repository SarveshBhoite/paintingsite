"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"

export function StorySection() {
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
    <section ref={sectionRef} className="bg-secondary py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Story Text - Updated to pista background and forest text */}
          <div className={`bg-pista rounded-2xl p-8 md:p-12 ${isVisible ? "animate-slide-in-left" : "opacity-0"}`}>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">Our Story</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Founded in 2005, PP PaintingServices began as a small family business with a big dream: to bring artistry and
                excellence to every painting project, no matter the size.
              </p>
              <p>
                What started in a modest garage has grown into a team of over 50 skilled painters, serving residential
                and commercial clients across the region. Our founder, James Mitchell, believed that every wall tells a
                story, and every brush stroke should add to its beauty.
              </p>
              <p>
                Today, we continue that legacy with the same passion and commitment to quality that defined our first
                project. We've painted thousands of homes and businesses, but each project still receives the personal
                attention and care it deserves.
              </p>
            </div>
            <div className="mt-8 flex items-center gap-6">
              <div>
                <span className="text-4xl font-bold text-olive">20+</span>
                <p className="text-sm text-muted-foreground">Years Experience</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <span className="text-4xl font-bold text-olive">5000+</span>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div className="w-px h-12 bg-border" />
              <div>
                <span className="text-4xl font-bold text-olive">50+</span>
                <p className="text-sm text-muted-foreground">Team Members</p>
              </div>
            </div>
          </div>

          {/* Image Collage */}
          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <div
                className={`relative aspect-[3/4] rounded-xl overflow-hidden ${
                  isVisible ? "animate-fade-in animation-delay-200" : "opacity-0"
                }`}
              >
                <Image
                  src="/portfolio/interior2.jpg?height=500&width=375"
                  alt="Painter at work"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`relative aspect-[3/4] rounded-xl overflow-hidden mt-8 ${
                  isVisible ? "animate-fade-in animation-delay-400" : "opacity-0"
                }`}
              >
                <Image
                  src="/portfolio/interior1.jpg?height=500&width=375"
                  alt="Team collaboration"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`relative aspect-[3/4] rounded-xl overflow-hidden -mt-8 ${
                  isVisible ? "animate-fade-in animation-delay-300" : "opacity-0"
                }`}
              >
                <Image
                  src="/portfolio/interior2.jpg?height=500&width=375"
                  alt="Finished interior"
                  fill
                  className="object-cover"
                />
              </div>
              <div
                className={`relative aspect-[3/4] rounded-xl overflow-hidden ${
                  isVisible ? "animate-fade-in animation-delay-500" : "opacity-0"
                }`}
              >
                <Image
                  src="/portfolio/interior1.jpg?height=500&width=375"
                  alt="Color consultation"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
