"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"

type Certification = {
  school: string
  degree: string
  period: string
  status: "Obtenu" | "En cours"
  skills: string[]
  logo: string
}

const certifications: Certification[] = [
  {
    school: "Digital School of Paris",
    degree: "Bachelor Chef de Projet Digital",
    period: "2020-2023",
    status: "Obtenu",
    skills: [
      "Algorithme",
      "Développement web",
      "Gestion de projet (Méthode Agile)",
      "UI-UX Ergonomie",
      "SEO-SEA",
      "Anglais",
      "Stratégie Marketing"
    ],
    logo: "/dsp-logo.png" 
  },
  {
    school: "Efrei",
    degree: "Master Dev Manager Full Stack",
    period: "2023-2025",
    status: "En cours",
    skills: [
      "Développement d'applications web et mobile",
      "Management de projets et SI",
      "Informatique et SI",
      "Data & Services",
      "AI"
    ],
    logo: "/efrei-logo.png" 
  }
]

export default function CertificationsSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500 mb-4">
          Mes Certifications
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Parcours académique et formations qui ont façonné mes compétences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {certifications.map((cert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.2 }}
            viewport={{ once: true, margin: "-100px" }}
            className="relative"
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <motion.div
              className="bg-white dark:bg-neutral-900 rounded-xl p-6 border border-neutral-200 dark:border-neutral-800 shadow-xl hover:shadow-purple-500/10 transition-all duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center mb-6">
                <div className="relative w-16 h-16 mr-4 bg-white dark:bg-neutral-800 rounded-lg p-2 flex items-center justify-center">
                  <Image
                    src={cert.logo}
                    alt={`Logo ${cert.school}`}
                    width={48}
                    height={48}
                    className="object-contain"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-pink-500">
                    {cert.degree}
                  </h3>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300">{cert.school}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-purple-400">{cert.period}</span>
                  <span className={`text-sm font-medium px-3 py-1 rounded-full ${cert.status === "Obtenu" ? "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400" : "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-400"}`}>
                    {cert.status}
                  </span>
                </div>
              </div>
              
              <div>
                <h4 className="text-sm font-semibold text-neutral-700 dark:text-neutral-300 mb-2">Compétences acquises :</h4>
                <ul className="flex flex-wrap gap-2">
                  {cert.skills.map((skill, skillIndex) => (
                    <li 
                      key={skillIndex}
                      className="text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 px-2 py-1 rounded-md"
                    >
                      {skill}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}