"use client"
import { motion } from "motion/react"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"

export default function ContactCard() {
  return (
    <section className="py-16 bg-white dark:bg-black">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative max-w-5xl mx-auto rounded-2xl overflow-hidden"
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 dark:from-indigo-500/20 dark:via-purple-500/20 dark:to-pink-500/20" />

          {/* Border gradient */}
          <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-indigo-500/40 via-purple-500/40 to-pink-500/40 mask-border" />

          {/* Content */}
          <div className="relative bg-white/80 dark:bg-black/80 backdrop-blur-sm p-8 md:p-12 rounded-2xl">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="md:max-w-2xl">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                  Un projet en tête ?
                </h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
                  Que vous ayez besoin d'un site web, d'une
                  application ou d'une refonte, je suis là pour vous accompagner dans la réalisation de vos idées.
                </p>
              </div>
              <div className="flex-shrink-0">
                <GradientBorderButton href="/contact" className="whitespace-nowrap">
                  Me contacter
                </GradientBorderButton>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CSS pour créer le masque de bordure */}
      <style jsx global>{`
        .mask-border {
          mask-image: linear-gradient(to_bottom, transparent, black 10px, black calc(100% - 10px), transparent);
          -webkit-mask-image: linear-gradient(to bottom, transparent, black 10px, black calc(100% - 10px), transparent);
        }
      `}</style>
    </section>
  )
}

