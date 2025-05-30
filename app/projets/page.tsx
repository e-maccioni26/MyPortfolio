import HeroParallaxProjects from "@/components/hero-parallax-projects"
import ProjectsGrid from "@/components/projects-grid"
import { ThemeToggle } from "@/components/theme-toggle"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Projets | Portfolio Elone Maccioni",
  description: "Découvrez mes projets en tant que développeur full stack. Consultez mon portefeuille comprenant des sites web, applications et solutions digitales.",
  keywords: ["projets web", "portfolio développeur", "développement web", "applications", "sites web", "Elone Maccioni", "freelance", "landing page"],
  openGraph: {
    title: "Projets | Portfolio Elone Maccioni",
    description: "Découvrez mes projets de développement web en tant que développeur full stack. Consultez mon portefeuille comprenant des sites web, applications et solutions digitales.",
    url: "https://elonemaccioni.fr/projets",
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/projets"
  }
}

export default function ProjetsPage() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroParallaxProjects />
      <div className="mt-[-100px] relative z-10">
        <ProjectsGrid />
      </div>
    </main>
  )
}

