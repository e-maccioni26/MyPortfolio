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
  title: "Elone Maccioni | Développeur Full Stack",
  description: "Portfolio professionnel d'Elone Maccioni, développeur full stack spécialisé en React, Next.js et technologies web modernes. Découvrez mes compétences, projets et services.",
  keywords: ["développeur full stack", "portfolio", "react", "next.js", "javascript", "développeur web", "Elone Maccioni", "Freelance", "freelance"],
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
          jobTitle: "Développeur Full Stack",
          description: "Développeur Full Stack spécialisé en React, Next.js et technologies web modernes.",
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
          name: "Portfolio d'Elone Maccioni",
          url: "https://elonemaccioni.fr",
          description: "Portfolio professionnel d'Elone Maccioni, développeur full stack",
          author: "Elone Maccioni",
          language: "fr-FR"
        }}
      />
    </main>
  )
}

