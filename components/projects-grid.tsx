"use client"

import { useMemo, useState } from "react"
import { projects } from "./projects-data"
import Image from "next/image"
import Link from "next/link"
import { cn } from "@/lib/utils"

const EYEBROW_COLORS = ["#845DF4", "#6565F1", "#4F46E5"]

export default function ProjectsGrid() {
  const reversedProjects = useMemo(() => [...projects].reverse(), [])
  const [selectedTech, setSelectedTech] = useState<string>("Tous")

  const allProgrammingLanguages = Array.from(
    new Set(
      reversedProjects.flatMap((project) =>
        project.technologies.filter((tech) =>
          [
            "React", "React Native", "PHP", "JavaScript", "TypeScript", "Python",
            "HTML", "CSS", "TailwindCss", "Bootstrap", "Wordpress", "Flask", "Express",
            "JSX", "MySQL", "PostgreSQL",
          ].includes(tech)
        )
      )
    )
  )

  const filterOptions = ["Tous", ...allProgrammingLanguages]

  const filteredProjects =
    selectedTech === "Tous"
      ? reversedProjects
      : reversedProjects.filter((project) => project.technologies.includes(selectedTech))

  return (
    <>
      <div className="flex flex-wrap gap-2.5 mb-10">
        {filterOptions.map((tech) => (
          <button
            key={tech}
            onClick={() => setSelectedTech(tech)}
            className={cn(
              "font-medium text-[13px] px-4.5 p-3 py-2 rounded-full transition-colors",
              selectedTech === tech
                ? "text-white bg-gradient-to-br from-[#845DF4] to-[#4F46E5] font-semibold"
                : "text-foreground bg-muted hover:bg-muted/70"
            )}
          >
            {tech === "Tous" ? "Tous les langages" : tech}
          </button>
        ))}
      </div>

      {filteredProjects.length === 0 ? (
        <div className="text-center py-20 rounded-2xl border border-border bg-card/50">
          <p className="text-muted-foreground text-lg">Aucun projet ne correspond à ce langage de programmation.</p>
          <button
            onClick={() => setSelectedTech("Tous")}
            className="mt-4 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
          >
            Voir tous les projets
          </button>
        </div>
      ) : (
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
      )}
    </>
  )
}
