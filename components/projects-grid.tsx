"use client"

import { useMemo, useState } from "react"
import { projects } from "./projects-data"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const EYEBROW_COLORS = ["#845DF4", "#6565F1", "#4F46E5"]

const FILTRES = [
  { id: "pro", label: "Projets pro" },
  { id: "perso", label: "Projets perso" },
] as const

type Filtre = (typeof FILTRES)[number]["id"]

export default function ProjectsGrid() {
  const reversedProjects = useMemo(() => [...projects].reverse(), [])
  // « pro » par défaut : c'est la vitrine commerciale, et la catégorie qui contient l'essentiel.
  const [filtre, setFiltre] = useState<Filtre>("pro")

  const parFiltre = useMemo(
    () => ({
      pro: reversedProjects.filter((p) => !p.perso),
      perso: reversedProjects.filter((p) => p.perso),
    }),
    [reversedProjects]
  )

  // Un filtre sans projet n'est pas affiché : l'état vide devient impossible
  // plutôt que d'avoir à le gérer.
  const filtresVisibles = FILTRES.filter((f) => parFiltre[f.id].length > 0)
  const filteredProjects = parFiltre[filtre]

  return (
    <>
      <div className="flex flex-wrap gap-2.5 mb-10" role="tablist" aria-label="Type de projet">
        {filtresVisibles.map((f) => (
          <button
            key={f.id}
            type="button"
            role="tab"
            aria-selected={filtre === f.id}
            onClick={() => setFiltre(f.id)}
            className={cn(
              "font-medium text-[13px] px-4 py-2 rounded-full transition-colors",
              filtre === f.id
                ? "text-white bg-gradient-to-br from-[#845DF4] to-[#4F46E5] font-semibold"
                : "text-foreground bg-muted hover:bg-muted/70"
            )}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProjects.map((project, index) => (
          <article
            key={project.title}
            className="bg-card border border-border rounded-2xl overflow-hidden flex flex-col"
          >
            <div className="relative h-[180px] w-full flex-none">
              <Image
                src={project.thumbnail || "/placeholder.svg"}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                className="object-cover object-top"
              />
            </div>
            <div className="p-[22px] flex flex-col gap-2.5 flex-1">
              <span
                className="self-start font-mono text-[10.5px] font-semibold uppercase tracking-wide rounded-md px-2.5 py-1"
                style={{
                  color: EYEBROW_COLORS[index % 3],
                  backgroundColor: `${EYEBROW_COLORS[index % 3]}1A`,
                }}
              >
                {project.description}
              </span>
              <h3 className="font-heading font-bold text-[17px] leading-tight text-foreground">
                {project.title}
              </h3>
              <p className="text-[13.5px] leading-relaxed text-muted-foreground flex-1">
                {project.longDescription
                  ? `${project.longDescription.slice(0, 140).trim()}…`
                  : project.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mt-1">
                {project.technologies.slice(0, 3).map((tech) => (
                  <span
                    key={tech}
                    className="font-mono text-[11px] font-medium text-secondary bg-muted px-2.5 py-1 rounded-[5px]"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="font-mono text-[11px] font-medium text-muted-foreground bg-muted px-2.5 py-1 rounded-[5px]">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              <Link
                href={project.link}
                className="font-semibold text-sm text-secondary hover:text-primary transition-colors mt-1.5"
              >
                Voir le projet →
              </Link>
            </div>
          </article>
        ))}
      </div>
    </>
  )
}
