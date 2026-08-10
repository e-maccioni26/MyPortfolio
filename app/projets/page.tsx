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
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-4">
        <div className="font-mono text-xs font-semibold tracking-wide text-secondary uppercase mb-3.5">
          Portfolio
        </div>
        <h1 className="text-4xl md:text-[42px] font-extrabold font-heading leading-tight text-foreground tracking-tight mb-3.5 max-w-2xl">
          Mes projets &amp; réalisations
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
          Découvrez les projets sur lesquels j'ai travaillé. Chaque projet représente un défi unique relevé avec les technologies les plus adaptées.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-24">
        <ProjectsGrid />
      </section>
    </main>
  )
}
