import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ServicesHeader } from "@/components/services/services-header"
import { ServicesGrid } from "@/components/services/services-grid"
import { ServiceDetails } from "@/components/services/service-details"
import { WhyChooseUs } from "@/components/services/why-choose-us"

export default function ServicesPage() {
  return (
    <main>
      <Navbar />
      <ServicesHeader />
      <ServicesGrid />
      <ServiceDetails />
      <WhyChooseUs />
      <Footer />
    </main>
  )
}
