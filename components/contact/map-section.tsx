"use client"

import { useEffect, useRef, useState } from "react"

export function MapSection() {
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
    <section ref={sectionRef} className={`h-96 md:h-[500px] w-full ${isVisible ? "animate-scale-in" : "opacity-0"}`}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3779.7990931050567!2d73.791973!3d18.673009399999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b749cb57d63d%3A0x55941536e9f6d95e!2sPP%20Home%20Painting%20Services!5e0!3m2!1sen!2sin!4v1764915439089!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="PP PaintingServices Location"
        className="grayscale-[30%] contrast-[1.1]"
      />
    </section>
  )
}
