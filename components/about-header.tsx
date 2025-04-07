"use client"
import { motion } from "motion/react"
import { LampContainer } from "@/components/ui/lamp"

export default function AboutHeader() {
  return (
    <LampContainer color="purple">
      <motion.h1
        initial={{ opacity: 0.5, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-8 bg-gradient-to-br from-white to-gray-300 py-4 bg-clip-text text-center text-4xl font-bold tracking-tight text-transparent md:text-7xl"
      >
        À propos de moi
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.5,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="mt-4 text-center text-white/80 text-base md:text-xl max-w-lg"
      >
        Découvrez mon parcours, mes compétences et ma passion pour le développement web
      </motion.p>
    </LampContainer>
  )
}

