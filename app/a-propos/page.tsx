import { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos | Portfolio Elone Maccioni",
  description: "Découvrez mon parcours, mes compétences et ma vision en tant que développeur full stack. Apprenez-en plus sur mon expertise technique et mon approche professionnelle.",
  keywords: ["à propos", "développeur full stack", "parcours professionnel", "compétences techniques", "Elone Maccioni", "expertise web"],
  openGraph: {
    title: "À propos | Portfolio Elone Maccioni",
    description: "Découvrez mon parcours, mes compétences et ma vision en tant que développeur full stack. Apprenez-en plus sur mon expertise technique et mon approche professionnelle.",
    url: "https://elonemaccioni.fr/a-propos",
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/a-propos"
  }
}

"use client"

import AboutBeamsDemo from "@/components/about-beams-demo"
import TechStackSection from "@/components/tech-stack-section"
import CareerTimeline from "@/components/career-timeline"
import { motion } from "framer-motion"

export default function AProposPage() {
  return (
    <main className="min-h-screen">
      <AboutBeamsDemo />
      <TechStackSection />

      {/* <section className="py-20 bg-neutral-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="text-3xl font-bold text-center mb-16"
          >
            MON PARCOURS
          </motion.h2>
          
          <div className="max-w-5xl mx-auto">
            <CareerTimeline 
              experiences={[
                {
                  period: "2023/2025 - Poste actuel",
                  title: "Développeur Full Stack / Chef de Projet",
                  company: "Crédit Agricole d'Ile-de-France",
                  description: "Durant mes deux ans d'alternance j'ai pu contribuer à plusieurs projets",
                },
                {
                  period: "2018 - 2020",
                  title: "Développeur Front-end",
                  company: "Startup ABC",
                  description: "Création d'interfaces utilisateur modernes et responsives.",
                },
                {
                  period: "2016 - 2018",
                  title: "Formation Développement Web",
                  company: "École de développement",
                  description: "Formation intensive en développement web front-end et back-end.",
                },
              ]}
            />
          </div>
        </div>
      </section> */}
    </main>
  )
}

