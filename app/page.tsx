import { ThemeToggle } from "@/components/theme-toggle"
import HomeHero from "@/components/home-hero"
import AboutSection from "@/components/about-section"
import BlogPreviewSection from "@/components/blog-preview-section"
import ServicesSection from "@/components/services-section"
import RecentProjectsSection from "@/components/recent-projects-section"
import FaqSection from "@/components/faq-section"
import ContactCard from "@/components/contact-card"
import { StructuredData } from "./components/structured-data"
import { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  title: "Elone Maccioni - Développeur Freelance React/Next.js & Wordpress (Paris)",
  description: "Expert React / Next.js et WordPress à Paris. J'accompagne les entreprises et indépendants dans la création d'applications web performantes et sur-mesure. Devis gratuit sous 24h.",
  keywords: ["développeur full stack", "développeur", "portfolio", "react", "next.js", "javascript", "développeur web", "Elone Maccioni", "Freelance", "freelance"],
  alternates: {
    canonical: "https://elonemaccioni.fr/"
  }
}

export default function Home() {
  const latestPosts = getAllPosts().slice(0, 3)

  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HomeHero latestPosts={latestPosts} />
      <AboutSection />
      <BlogPreviewSection posts={latestPosts} />
      <ServicesSection />
      <RecentProjectsSection />
      <FaqSection />
      <ContactCard />

      <StructuredData
        type="Person"
        data={{
          name: "Elone Maccioni",
          jobTitle: "Elone Maccioni - Développeur Freelance React/Next.js",
          description: "Expert React / Next.js et WordPress à Paris. J'accompagne les entreprises dans la création d'applications web performantes et sur-mesure. Devis gratuit sous 24h.",
          url: "https://elonemaccioni.fr",
          socialLinks: ["https://linkedin.com/in/elone-maccioni"],
          image: "/avatar.png",
          email: "elonemacc@gmail.com",
          skills: ["JavaScript", "TypeScript", "React", "Next.js", "Node.js", "CSS", "HTML", "API REST", "PHP", "SQL", "Git", "Docker", "Linux", "SEO", "WordPress", "SEO", "IA"]
        }}
      />  
      
      <StructuredData
        type="WebSite"
        data={{
          name: "Elone Maccioni - Développeur Freelance React/Next.js",
          url: "https://elonemaccioni.fr",
          author: "Elone Maccioni",
          language: "fr-FR"
        }}
      />
    </main>
  )
}

