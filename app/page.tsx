import { ThemeToggle } from "@/components/theme-toggle"
import HomeHero from "@/components/home-hero"
import TechStack from "@/components/tech-stack"
import ServicesSection from "@/components/services-section"
import ProjectsCarousel from "@/components/projects-carousel"
import ContactCard from "@/components/contact-card"

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <ThemeToggle />
      <HomeHero />
      <TechStack />
      <ServicesSection />
      <ProjectsCarousel />
      <ContactCard />
    </main>
  )
}

