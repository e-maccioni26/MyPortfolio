"use client"
import { motion } from "motion/react"
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight"
import Image from "next/image"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"

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
              className="text-2xl px-4 md:px-0 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-2xl leading-relaxed lg:leading-snug"
            >
              Développeur passionné, créant des{" "}
              <Highlight className="text-black dark:text-white">expériences numériques</Highlight> qui inspirent et
              engagent.
            </motion.h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.7 }}
              className="mt-8 px-4 md:px-0"
            >
              <GradientBorderButton href="/a-propos">À propos de moi</GradientBorderButton>
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
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/profile-pic%20%282%29-B8yCiba26hzW4dgiMtpYhKQD54sMk9.png"
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

