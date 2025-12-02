import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { PortfolioHeader } from "@/components/portfolio/portfolio-header"
import { PortfolioGallery } from "@/components/portfolio/portfolio-gallery"
import { PortfolioCTA } from "@/components/portfolio/portfolio-cta"

export default function PortfolioPage() {
  return (
    <main>
      <Navbar />
      <PortfolioHeader />
      <PortfolioGallery />
      <PortfolioCTA />
      <Footer />
    </main>
  )
}
