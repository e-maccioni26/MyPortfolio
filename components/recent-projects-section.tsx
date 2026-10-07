"use client"

import { useEffect, useRef } from "react"
import Image from "next/image"
import Link from "next/link"
import { projects } from "@/components/projects-data"
import { EnCoursBadge } from "@/components/en-cours-badge"

const recentProjects = [...projects].reverse().slice(0, 4)

/** Amplitudes reprises de la maquette : 10° sur l'axe Y, 8° sur l'axe X. */
const AMPLITUDE_Y = 10
const AMPLITUDE_X = 8

export default function RecentProjectsSection() {
  const grilleRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const grille = grilleRef.current
    if (!grille) return

    const cartes = Array.from(grille.children) as HTMLElement[]

    // Le CSS neutralise déjà l'animation en mouvement réduit, mais sans ce
    // raccourci les cartes resteraient invisibles si l'observer ne se déclenche
    // jamais (onglet en arrière-plan, par exemple).
    const mouvementReduit = window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (mouvementReduit || typeof IntersectionObserver === "undefined") {
      cartes.forEach((carte) => carte.classList.add("revelee"))
      return
    }

    const observer = new IntersectionObserver(
      (entrees) => {
        // Le décalage se calcule sur les cartes qui entrent ensemble, pas sur
        // leur index global : une carte vue seule ne doit pas attendre son tour.
        entrees
          .filter((entree) => entree.isIntersecting)
          .forEach((entree, rang) => {
            const carte = entree.target as HTMLElement
            carte.style.transitionDelay = `${rang * 120}ms`
            carte.classList.add("revelee")
            observer.unobserve(carte)
          })
      },
      // Équivalent du `start: "top 90%"` de la maquette.
      { rootMargin: "0px 0px -10% 0px" }
    )
    cartes.forEach((carte) => observer.observe(carte))

    // L'inclinaison suit le curseur : inutile, et impossible à annuler, au doigt.
    if (!window.matchMedia("(hover: hover)").matches) return () => observer.disconnect()

    const liens = Array.from(grille.querySelectorAll<HTMLElement>(".carte-tilt"))
    const nettoyages = liens.map((lien) => {
      const suivre = (evenement: MouseEvent) => {
        const zone = lien.getBoundingClientRect()
        const x = (evenement.clientX - zone.left) / zone.width
        const y = (evenement.clientY - zone.top) / zone.height
        lien.style.setProperty("--ry", `${(x - 0.5) * AMPLITUDE_Y}deg`)
        lien.style.setProperty("--rx", `${(0.5 - y) * AMPLITUDE_X}deg`)
        lien.style.setProperty("--gx", `${x * 100}%`)
        lien.style.setProperty("--gy", `${y * 100}%`)
      }
      const relacher = () => {
        lien.style.setProperty("--rx", "0deg")
        lien.style.setProperty("--ry", "0deg")
      }
      lien.addEventListener("mousemove", suivre)
      lien.addEventListener("mouseleave", relacher)
      return () => {
        lien.removeEventListener("mousemove", suivre)
        lien.removeEventListener("mouseleave", relacher)
      }
    })

    return () => {
      observer.disconnect()
      nettoyages.forEach((nettoyer) => nettoyer())
    }
  }, [])

  return (
    <section className="py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-3 sm:gap-6 mb-9">
          <div>
            <h2 className="font-heading text-3xl md:text-[28px] font-bold text-foreground">
              Projets récents
            </h2>
            <p className="mt-2 text-muted-foreground">Découvrez mes dernières réalisations</p>
          </div>
          <Link
            href="/projets"
            className="font-semibold text-sm text-secondary hover:text-primary transition-colors whitespace-nowrap"
          >
            Voir tous les projets →
          </Link>
        </div>

        <div ref={grilleRef} className="grid grid-cols-1 md:grid-cols-4 gap-6 md:gap-[22px]">
          {recentProjects.map((project) => (
            // Deux niveaux : la révélation au scroll et l'inclinaison au survol
            // animent toutes deux `transform`, avec des durées différentes.
            <div key={project.link} className="carte-reveal">
              {/* Carte entièrement cliquable : un seul lien, donc une seule
                  tabulation et pas de liens imbriqués. */}
              <Link
                href={project.link}
                className="carte-tilt group relative flex flex-col h-full bg-card border border-border rounded-2xl overflow-hidden shadow-[0_14px_34px_-24px_rgba(20,18,43,.35)] hover:shadow-[0_30px_50px_-28px_rgba(79,70,229,.45)]"
              >
                <div className="relative h-[170px] w-full flex-none">
                  {project.enCours && <EnCoursBadge />}
                  <Image
                    src={project.thumbnail || "/placeholder.svg"}
                    // Le titre est juste en dessous, dans le même lien : répéter
                    // l'alt allongerait le nom accessible sans rien apprendre.
                    alt=""
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover object-top"
                  />
                </div>
                <div className="p-5 flex flex-col gap-2.5 flex-1">
                  <span className="font-mono text-[10.5px] font-semibold uppercase tracking-wide text-secondary">
                    {project.description}
                  </span>
                  <h3 className="font-heading font-bold text-base leading-[1.35] text-foreground group-hover:text-secondary transition-colors">
                    {project.title}
                  </h3>
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="font-mono text-[10.5px] font-medium text-secondary bg-muted px-2 py-1 rounded-[5px]"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <span className="mt-auto pt-1.5 font-semibold text-[13px] text-secondary">
                    Voir le projet →
                  </span>
                </div>
                <span
                  aria-hidden="true"
                  className="carte-glare absolute inset-0 pointer-events-none"
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
