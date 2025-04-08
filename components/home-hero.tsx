"use client"
import { motion } from "motion/react"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import Image from "next/image"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"
import { Github, Linkedin, Mail } from "lucide-react"

export default function HomeHero() {
  return (
    <HeroHighlight>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="md:w-1/2"
          >
            <motion.h1
              initial={{
                opacity: 0,
                y: 20,
              }}
              animate={{
                opacity: 1,
                y: [20, -5, 0],
              }}
              transition={{
                duration: 0.5,
                ease: [0.4, 0.0, 0.2, 1],
              }}
              className="text-2xl px-4 md:px-0 md:text-4xl lg:text-6xl font-bold text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug"
            >
              Développeur <Highlight className="text-black dark:text-white">Full Stack</Highlight>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="mt-4 px-4 md:px-0 text-base md:text-lg text-neutral-600 dark:text-neutral-300 max-w-xl"
            >
              Spécialisé dans le développement d'applications web modernes et performantes, je combine créativité et expertise technique pour donner vie à vos projets digitaux.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 px-4 md:px-0"
            >
              <GradientBorderButton href="/a-propos">À propos de moi</GradientBorderButton>
              
              <div className="flex space-x-4 mt-6">
                <motion.a
                  href="https://github.com/e-maccioni26"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.8 }}
                >
                  <Github size={22} />
                  <span className="sr-only">GitHub</span>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/elone-maccioni"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.9 }}
                >
                  <Linkedin size={22} />
                  <span className="sr-only">LinkedIn</span>
                </motion.a>
                <motion.a
                  href="mailto:elonemacc@gmail.com"
                  className="text-gray-600 hover:text-indigo-500 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 1 }}
                >
                  <Mail size={22} />
                  <span className="sr-only">Email</span>
                </motion.a>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="md:w-1/2 flex justify-center md:justify-end"
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80">
              <div className="absolute inset-0 -bottom-4 -right-4 bg-purple-500/30 dark:bg-purple-600/40 rounded-full blur-xl z-0"></div>
              <div className="absolute inset-0 -top-4 -left-4 bg-indigo-500/20 dark:bg-indigo-600/30 rounded-full blur-xl z-0"></div>
              <div className="relative z-10 w-full h-full">
                <Image
                  src="/avatar.png"
                  alt="Avatar"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </HeroHighlight>
  )
}

