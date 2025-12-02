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
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3781.406203584192!2d73.77271787523874!3d18.600790682508364!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9a68125fa15%3A0x4ab3e638485e9d03!2sJISNU%20Digital%20Solutions%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1764660297608!5m2!1sen!2sin"
        width="100%"
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="BrushCraft Pro Location"
        className="grayscale-[30%] contrast-[1.1]"
      />
    </section>
  )
}
