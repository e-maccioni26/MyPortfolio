import { ThemeToggle } from "@/components/theme-toggle"
import HomeHero from "@/components/home-hero"
import AboutSection from "@/components/about-section"
import BlogPreviewSection from "@/components/blog-preview-section"
import ServicesSection from "@/components/services-section"
import TestimonialsSection from "@/components/testimonials-section"
import RecentProjectsSection from "@/components/recent-projects-section"
import FaqSection from "@/components/faq-section"
import ContactCard from "@/components/contact-card"
import { StructuredData } from "./components/structured-data"
import { LocalBusinessSchema } from "./components/local-business-schema"
import { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"

export const metadata: Metadata = {
  // ~60 caractères : au-delà, Google tronque le title dans les résultats.
  title: "Développeur web freelance Paris | React, Next.js, WordPress",
  description: "Développeur web freelance à Paris, spécialiste React, Next.js et WordPress. Sites vitrines, refontes et applications sur mesure. Devis gratuit sous 24 h.",
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
      <TestimonialsSection />
      <FaqSection />
      <ContactCard />

      <LocalBusinessSchema />

      <StructuredData
        type="Person"
        data={{
          name: "Elone Maccioni",
          jobTitle: "Développeur web freelance",
          description: "Expert React / Next.js et WordPress à Paris. J'accompagne les entreprises dans la création d'applications web performantes et sur-mesure. Devis gratuit sous 24h.",
          url: "https://elonemaccioni.fr",
          socialLinks: [
            "https://linkedin.com/in/elone-maccioni",
            "https://www.malt.fr/profile/elonemaccioni",
            "https://github.com/e-maccioni26",
          ],
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

