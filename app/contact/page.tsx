import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ContactHeader } from "@/components/contact/contact-header"
import { ContactForm } from "@/components/contact/contact-form"
import { MapSection } from "@/components/contact/map-section"
import { FinalCTA } from "@/components/contact/final-cta"

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <ContactHeader />
      <ContactForm />
      <MapSection />
      <FinalCTA />
      <Footer />
    </main>
  )
}
