import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { AboutHeader } from "@/components/about/about-header"
import { StorySection } from "@/components/about/story-section"
import { Timeline } from "@/components/about/timeline"
import { TeamSection } from "@/components/about/team-section"
import { ValuesSection } from "@/components/about/values-section"

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <AboutHeader />
      <StorySection />
      <Timeline />
      <ValuesSection />
      <TeamSection />
      <Footer />
    </main>
  )
}
