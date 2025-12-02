import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { HeroSection } from "@/components/home/hero-section"
import { ServicePillars } from "@/components/home/service-pillars"
import { WorkShowcase } from "@/components/home/work-showcase"
import { Testimonials } from "@/components/home/testimonials"
import { CTABanner } from "@/components/home/cta-banner"

export default function HomePage() {
  return (
    <main>
      <Navbar />
      <HeroSection />
      <ServicePillars />
      <WorkShowcase />
      <Testimonials />
      <CTABanner />
      <Footer />
    </main>
  )
}
