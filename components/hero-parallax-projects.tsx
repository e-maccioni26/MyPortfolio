"use client"
import { HeroParallax } from "@/components/ui/hero-parallax"
import { projects } from "@/components/projects-data"

export default function HeroParallaxProjects() {
  return <HeroParallax products={projects} />
} 