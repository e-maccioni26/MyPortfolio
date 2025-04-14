"use client"

import Carousel from "@/components/ui/carousel"
import { motion } from "framer-motion"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"
import { projects } from "@/components/projects-data"

export default function ProjectsCarousel() {
  
  const projectsData = projects.slice(0, 4).map(project => ({
    title: project.title,
    description: project.description,
    button: "Voir le projet",
    src: project.thumbnail,
    link: project.link,
  }))

  
  const processedProjects = projectsData.map((project) => ({
    ...project,
    src: project.src.startsWith("http") 
      ? project.src 
      : project.src 
  }))

  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold mb-4 text-black dark:text-white"
          >
            Projets Récents
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-muted-foreground max-w-2xl mx-auto"
          >
            Découvrez mes dernières réalisations et projets
          </motion.p>
        </div>

        <div className="relative overflow-hidden w-full h-full py-16">
          <Carousel slides={processedProjects} />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center mt-16"
        >
          <GradientBorderButton href="/projets">Voir tous les projets</GradientBorderButton>
        </motion.div>
      </div>
    </section>
  )
}

