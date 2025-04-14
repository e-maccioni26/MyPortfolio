"use client"

import { motion } from "framer-motion"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink } from "lucide-react"

type Certification = {
  school: string
  degree: string
  period: string
  status: "Obtenu" | "En cours"
  skills: string[]
  logo: string
  url: string
}

const certifications: Certification[] = [
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
    logo: "/efrei-logo.png",
    url: "https://www.efrei.fr/programmes-experts/master-developpeur-full-stack/"
  },
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
    logo: "/dsp-logo.png",
    url: "https://www.digitalschool.paris/programmes/post-bac/bachelor-chef-de-projet-digital/"
  },
  {
    school: "Skills4All",
    degree: "Design thinking : créativité et innovation dans vos projets",
    period: "Mars 2024",
    status: "Obtenu",
    skills: [
      "Développer la créativité des équipes",
      "Accompagner la transformation digitale",
      "Proposer des produits, services à haute valeur ajoutée",
      "Faire évoluer l'organisation de son entreprise",
    ],
    logo: "/skills4all-logo.jpeg",
    url: "https://lms.skills4all.com/mod/linkedincert/verify_certificate.php?code=TlqMhSxWpi"
  },
  {
    school: "Abilways",
    degree: "Manager les projets avec Agilité",
    period: "Mars 2025",
    status: "Obtenu",
    skills: [
      "Gestion de projet agile",
      "Savoir identifier les projets adaptés à une gestion agile",
      "Communication agile",
      "Scrum",
      "Kanban"
    ],
    logo: "/abiways-logo.png",
    url: "https://abilways-digital-place.lms.crossknowledge.com/certification/r/384728/t/1741707521/h/4456df65986d9cb0d406c0a779a6a136/"
  },
  {
    school: "Opquast",
    degree: "Intégrer les règles et le vocabulaire assurance qualité web",
    period: "Décembre 2024",
    status: "Obtenu",
    skills: [
      "Maîtrise du vocabulaire et des métiers du projet web",
      "Prise en compte de la diversité et des exigences des utilisateurs",
      "Connaissance des règles d'assurance qualité web",
      "Utilisation d'une check-list qualité web",
      "Connaissance des normes W3C",
    ],
    logo: "/opquast-logo.jpeg",
    url: "https://directory.opquast.com/fr/certificat/Y3DE4A/"
  },
]

interface CertificationsSectionProps {
  limit?: number
  showViewMoreButton?: boolean
}

export default function CertificationsSection({ limit, showViewMoreButton = false }: CertificationsSectionProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)
  const [showAll, setShowAll] = useState(false)
  

  const displayedCertifications = showViewMoreButton
    ? showAll
      ? certifications
      : certifications.slice(0, limit || 2)
    : limit
      ? certifications.slice(0, limit)
      : certifications

  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-bold bg-clip-text text-black-600 dark:text-white mb-4">
          Mes Certifications
        </h2>
        <p className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto">
          Parcours académique et formations qui ont façonné mes compétences
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-10">
        {displayedCertifications.map((cert, index) => (
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
                <div className="flex-1">
                  <div className="flex justify-between items-start">
                    <h3 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
                      {cert.degree}
                    </h3>
                    <a 
                      href={cert.url} 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-purple-500 hover:text-purple-600 transition-colors ml-2 flex items-center"
                      title="Voir la formation"
                    >
                      <ExternalLink size={16} />
                    </a>
                  </div>
                  <p className="text-lg text-neutral-600 dark:text-neutral-300">{cert.school}</p>
                </div>
              </div>
              
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-sm font-medium text-purple-500">{cert.period}</span>
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

      {showViewMoreButton && (
        <div className="mt-12 text-center">
          <button 
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center justify-center px-6 py-3 text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-500 to-purple-500 hover:from-indigo-600 hover:to-purple-600 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
          >
            {showAll ? "Voir moins" : "Voir plus"}
          </button>
        </div>
      )}
    </section>
  )
}

// Exporter les certifications pour pouvoir les utiliser dans d'autres composants
export { certifications }