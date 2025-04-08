"use client"

import { motion } from "framer-motion"
import { useState } from "react"

type Experience = {
  period: string
  title: string
  company: string
  description: string
  icon?: string
}

interface CareerTimelineProps {
  experiences: Experience[]
}

export default function CareerTimeline({ experiences }: CareerTimelineProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <div className="relative py-10">
      {/* Ligne verticale décorative */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: "100%" }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
        className="absolute left-0 md:left-1/2 top-0 w-1 bg-gradient-to-b from-purple-500 via-violet-500 to-pink-500 transform -translate-x-1/2 rounded-full"
      />

      {experiences.map((exp, i) => {
        const isEven = i % 2 === 0
        
        return (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: i * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className={`relative flex flex-col md:flex-row items-center mb-16 ${isEven ? 'md:flex-row-reverse' : ''}`}
            onMouseEnter={() => setHoveredIndex(i)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            {/* Point sur la timeline */}
            <motion.div 
              className="absolute left-0 md:left-1/2 w-5 h-5 rounded-full bg-white border-4 border-purple-500 transform -translate-x-1/2 z-10"
              initial={{ scale: 1 }}
              animate={{ 
                scale: hoveredIndex === i ? 1.5 : 1,
                backgroundColor: hoveredIndex === i ? "#8B5CF6" : "#ffffff"
              }}
              transition={{ duration: 0.3 }}
            />
            
            {/* Contenu */}
            <div className={`w-full md:w-[45%] ${isEven ? 'md:pr-12' : 'md:pl-12'}`}>
              <motion.div 
                className="bg-white/5 backdrop-blur-lg rounded-xl p-6 border border-white/10 shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
                whileHover={{ y: -5 }}
              >
                <p className="text-sm font-medium text-purple-400 mb-1">{exp.period}</p>
                <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-2">
                  {exp.title}
                </h3>
                <p className="text-lg text-neutral-300 mb-3">{exp.company}</p>
                <p className="text-neutral-400">{exp.description}</p>
              </motion.div>
            </div>
          </motion.div>
        )
      })}
    </div>
  )
}