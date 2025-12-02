"use client"

import type React from "react"

import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"
import { Phone, Mail, MapPin, MessageCircle, Send, CheckCircle } from "lucide-react"

const contactInfo = [
  {
    icon: Phone,
    label: "Phone",
    value: "9136870930",
    href: "tel:+9136870930",
  },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "Chat with us",
    href: "https://wa.me/1234567890",
    isWhatsApp: true,
  },
  {
    icon: Mail,
    label: "Email",
    value: "info@brushcraftpro.com",
    href: "mailto:info@brushcraftpro.com",
  },
  {
    icon: MapPin,
    label: "Address",
    value: "123 Paint Street, Pune City, AC 12345",
    href: "https://maps.app.goo.gl/32wY3YqzqhovSady5",
  },
]

export function ContactForm() {
  const [isVisible, setIsVisible] = useState(false)
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })
  const [focusedField, setFocusedField] = useState<string | null>(null)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const sectionRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        }
      },
      { threshold: 0.1 },
    )

    if (sectionRef.current) {
      observer.observe(sectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setFormState({ name: "", email: "", phone: "", service: "", message: "" })
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <section ref={sectionRef} className="bg-pista-light py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Contact Information */}
          <div className={isVisible ? "animate-slide-in-left" : "opacity-0"}>
            <h2 className="text-3xl md:text-4xl font-bold text-forest mb-6">Get In Touch</h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Ready to transform your space? Reach out to us for a free consultation and estimate. We're here to help
              bring your vision to life.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  target={item.href.startsWith("http") ? "_blank" : undefined}
                  rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className={`group flex items-center gap-4 p-4 rounded-xl bg-pista hover:bg-olive/10 transition-all duration-300 hover:translate-x-2 ${
                    isVisible ? "animate-fade-in" : "opacity-0"
                  }`}
                  style={{ animationDelay: `${index * 100 + 200}ms` }}
                >
                  <div
                    className={`w-12 h-12 rounded-full flex items-center justify-center ${
                      item.isWhatsApp ? "bg-olive" : "bg-olive/20"
                    }`}
                  >
                    <item.icon className={`w-6 h-6 ${item.isWhatsApp ? "text-pista-light" : "text-olive"}`} />
                  </div>
                  <div>
                    <span className="text-sm text-muted-foreground">{item.label}</span>
                    <p className="font-semibold text-forest group-hover:text-olive transition-colors">{item.value}</p>
                  </div>
                </a>
              ))}
            </div>

            {/* Business Hours - Updated colors */}
            <div
              className={`mt-8 p-6 rounded-xl bg-pista ${
                isVisible ? "animate-fade-in animation-delay-600" : "opacity-0"
              }`}
            >
              <h3 className="font-semibold text-forest mb-4">Business Hours</h3>
              <div className="space-y-2 text-muted-foreground">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span className="font-medium text-forest">8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium text-forest">9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium text-forest">Closed</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className={isVisible ? "animate-slide-in-right" : "opacity-0"}>
            <div className="bg-secondary rounded-2xl p-8 md:p-10 shadow-lg">
              <h3 className="text-2xl font-bold text-forest mb-6">Request a Free Estimate</h3>

              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-olive flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-pista-light" />
                  </div>
                  <h4 className="text-xl font-semibold text-forest mb-2">Thank You!</h4>
                  <p className="text-muted-foreground">
                    We've received your message and will get back to you within 24 hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-forest mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formState.name}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-xl bg-pista-light border-2 transition-all duration-300 outline-none ${
                        focusedField === "name" ? "border-olive" : "border-olive/30"
                      }`}
                      placeholder="John Doe"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-forest mb-2">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("email")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl bg-pista-light border-2 transition-all duration-300 outline-none ${
                          focusedField === "email" ? "border-olive" : "border-olive/30"
                        }`}
                        placeholder="john@example.com"
                      />
                    </div>
                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-forest mb-2">
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full px-4 py-3 rounded-xl bg-pista-light border-2 transition-all duration-300 outline-none ${
                          focusedField === "phone" ? "border-olive" : "border-olive/30"
                        }`}
                        placeholder="(123) 456-7890"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-forest mb-2">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={formState.service}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("service")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-xl bg-pista-light border-2 transition-all duration-300 outline-none ${
                        focusedField === "service" ? "border-olive" : "border-olive/30"
                      }`}
                    >
                      <option value="">Select a service</option>
                      <option value="interior">Interior Painting</option>
                      <option value="exterior">Exterior Painting</option>
                      <option value="commercial">Commercial Painting</option>
                      <option value="texture">Texture Work</option>
                      <option value="cabinet">Cabinet Refinishing</option>
                      <option value="consultation">Color Consultation</option>
                    </select>
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-forest mb-2">
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formState.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField("message")}
                      onBlur={() => setFocusedField(null)}
                      className={`w-full px-4 py-3 rounded-xl bg-pista-light border-2 transition-all duration-300 outline-none resize-none ${
                        focusedField === "message" ? "border-olive" : "border-olive/30"
                      }`}
                      placeholder="Tell us about your project..."
                    />
                  </div>

                  <Button type="submit" size="lg" className="w-full bg-olive hover:bg-olive/90 text-pista-light">
                    Send Message
                    <Send className="ml-2 w-4 h-4" />
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
