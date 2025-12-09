import { ThemeToggle } from "@/components/theme-toggle"
import HomeHero from "@/components/home-hero"
import TechStack from "@/components/tech-stack"
import ServicesSection from "@/components/services-section"
import ProjectsCarousel from "@/components/projects-carousel"
import ContactCard from "@/components/contact-card"
import CertificationsSection from "@/components/certifications-section"
import { StructuredData } from "./components/structured-data"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Elone Maccioni - Développeur Freelance React/Next.js & Wordpress (Paris)",
  description: "Expert React / Next.js et WordPress à Paris. J'accompagne les entreprises et indépendants dans la création d'applications web performantes et sur-mesure. Devis gratuit sous 24h.",
  keywords: ["développeur full stack", "développeur", "portfolio", "react", "next.js", "javascript", "développeur web", "Elone Maccioni", "Freelance", "freelance"],
  alternates: {
    canonical: "https://elonemaccioni.fr/"
  }
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white dark:bg-black text-black dark:text-white">
      <ThemeToggle />
      <HomeHero />
      <TechStack />
      <ServicesSection />
      <CertificationsSection limit={2} showViewMoreButton={true} />
      <ProjectsCarousel />
      <ContactCard />
      
      <StructuredData
        type="Person"
        data={{
          name: "Elone Maccioni",
          jobTitle: "Elone Maccioni - Développeur Freelance React/Next.js & Wordpress (Paris)",
          description: "Expert React / Next.js et WordPress à Paris. J'accompagne les entreprises dans la création d'applications web performantes et sur-mesure. Devis gratuit sous 24h.",
          url: "https://elonemaccioni.fr",
          socialLinks: ["https://github.com/e-maccioni26", "https://linkedin.com/in/elone-maccioni"],
          image: "/avatar.png",
          email: "elonemacc@gmail.com",
          skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "CSS", "HTML", "API REST", "PHP", "SQL", "Git", "Docker", "Linux", "SEO", "WordPress", "SEO", "IA"]
        }}
      />  
      
      <StructuredData
        type="WebSite"
        data={{
          name: "Elone Maccioni - Développeur Freelance React/Next.js & Wordpress",
          url: "https://elonemaccioni.fr",
          description: "Portfolio professionnel d'Elone Maccioni, développeur full stack",
          author: "Elone Maccioni",
          language: "fr-FR"
        }}
      />
    </main>
  )
}

