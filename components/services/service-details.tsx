"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"

const serviceDetails = [
  {
    id: "interior",
    title: "Interior Painting",
    description:
      "Our interior painting services transform your living and working spaces into beautiful, inviting environments. We use premium, low-VOC paints that are safe for your family and provide lasting durability.",
    process: [
      { step: "Preparation", description: "Furniture protection, wall repair, sanding, and priming" },
      { step: "Painting", description: "Expert application with premium paints and techniques" },
      { step: "Clean-up", description: "Thorough cleaning and final inspection" },
    ],
    features: [
      "Premium low-VOC paints",
      "Color matching expertise",
      "Wall repair included",
      "Furniture protection",
      "Clean, dust-free process",
    ],
    image: "/services/interior1.jpg?height=500&width=600",
  },
  {
    id: "exterior",
    title: "Exterior Painting",
    description:
      "Protect and beautify your property with our professional exterior painting services. We use weather-resistant coatings designed to withstand the elements while maintaining their vibrant appearance for years.",
    process: [
      { step: "Assessment", description: "Surface inspection, power washing, and repair" },
      { step: "Priming", description: "Weather-resistant primers for maximum adhesion" },
      { step: "Application", description: "Multi-coat system for lasting protection" },
    ],
    features: [
      "Weather-resistant coatings",
      "10-year durability",
      "Power washing included",
      "Wood rot repair",
      "Caulking and sealing",
    ],
    image: "/services/exterior1.jpg?height=500&width=600",
  },
  {
    id: "commercial",
    title: "Commercial Painting",
    description:
      "Minimize downtime and maximize impact with our commercial painting services. We work around your schedule to deliver professional results that enhance your business environment.",
    process: [
      { step: "Planning", description: "Project scheduling to minimize business disruption" },
      { step: "Execution", description: "Efficient team deployment with commercial-grade equipment" },
      { step: "Completion", description: "Quality assurance and walkthrough" },
    ],
    features: [
      "After-hours availability",
      "OSHA compliant",
      "Large-scale capacity",
      "Fast turnaround",
      "Warranty included",
    ],
    image: "/services/commercial1.jpg?height=500&width=600",
  },
]

export function ServiceDetails() {
  const [visibleSections, setVisibleSections] = useState<string[]>([])
  const sectionRefs = useRef<{ [key: string]: HTMLDivElement | null }>({})

  useEffect(() => {
    const observers = Object.entries(sectionRefs.current).map(([id, ref]) => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => [...new Set([...prev, id])])
          }
        },
        { threshold: 0.2 },
      )

      if (ref) {
        observer.observe(ref)
      }

      return observer
    })

    return () => observers.forEach((observer) => observer.disconnect())
  }, [])

  return (
    <section className="bg-pista-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {serviceDetails.map((service, index) => (
          <div
            key={service.id}
            id={service.id}
            ref={(el) => {
              sectionRefs.current[service.id] = el
            }}
            className={`mb-24 last:mb-0 ${visibleSections.includes(service.id) ? "animate-fade-in" : "opacity-0"}`}
          >
            <div
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              {/* Content */}
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">{service.title}</h2>
                <p className="text-muted-foreground leading-relaxed mb-8">{service.description}</p>

                {/* Process Steps */}
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-forest mb-4">Our Process</h3>
                  <div className="flex flex-col md:flex-row gap-4">
                    {service.process.map((step, stepIndex) => (
                      <div key={step.step} className="flex-1 relative">
                        <div className="bg-pista rounded-xl p-4 h-full">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="w-6 h-6 rounded-full bg-olive text-pista-light text-sm font-bold flex items-center justify-center">
                              {stepIndex + 1}
                            </span>
                            <span className="font-semibold text-forest">{step.step}</span>
                          </div>
                          <p className="text-sm text-muted-foreground">{step.description}</p>
                        </div>
                        {stepIndex < service.process.length - 1 && (
                          <div className="hidden md:block absolute top-1/2 -right-2 w-4 h-0.5 bg-olive" />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Features */}
                <div>
                  <h3 className="text-lg font-semibold text-forest mb-4">What's Included</h3>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.features.map((feature) => (
                      <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                        <CheckCircle className="w-5 h-5 text-olive" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Image */}
              <div
                className={`relative aspect-[4/3] rounded-2xl overflow-hidden ${index % 2 === 1 ? "lg:order-1" : ""}`}
              >
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
