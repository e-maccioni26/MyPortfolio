import HeroParallaxProjects from "@/components/hero-parallax-projects"
import { ThemeToggle } from "@/components/theme-toggle"

export default function ProjetsPage() {
  return (
    <main className="min-h-screen">
      <ThemeToggle />
      <HeroParallaxProjects />
    </main>
  )
}

