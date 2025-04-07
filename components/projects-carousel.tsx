"use client"

import Carousel from "@/components/ui/carousel"
import { motion } from "motion/react"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"

export default function ProjectsCarousel() {
  const projectsData = [
    {
      title: "Application E-commerce",
      description: "Plateforme de vente en ligne avec paiement intégré et gestion des stocks",
      button: "Voir le projet",
      src: "/images/projects/ecommerce.jpg",
      link: "/projets/ecommerce",
    },
    {
      title: "Portfolio Créatif",
      description: "Site vitrine pour un photographe avec galerie interactive",
      button: "Voir le projet",
      src: "/images/projects/portfolio.jpg",
      link: "/projets/portfolio",
    },
    {
      title: "Dashboard Analytics",
      description: "Interface d'administration avec visualisation de données en temps réel",
      button: "Voir le projet",
      src: "/images/projects/dashboard.jpg",
      link: "/projets/dashboard",
    },
    {
      title: "Application Mobile",
      description: "Application de fitness avec suivi des performances et coaching personnalisé",
      button: "Voir le projet",
      src: "/images/projects/mobile.jpg",
      link: "/projets/mobile",
    },
  ]

  // Utilisons des images de placeholder en attendant que l'utilisateur fournisse ses propres images
  const processedProjects = projectsData.map((project) => ({
    ...project,
    src: project.src.includes("http")
      ? project.src
      : `/placeholder.svg?height=800&width=800&text=${encodeURIComponent(project.title)}`,
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

        <div className="relative overflow-hidden w-full h-full py-10">
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

