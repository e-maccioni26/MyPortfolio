import Image from "next/image"
import Link from "next/link"
import { projects } from "@/components/projects-data"

const recentProjects = [...projects].reverse().slice(0, 4)

export default function RecentProjectsSection() {
  return (
    <section className="py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="mb-9 md:grid md:grid-cols-[1fr_auto] md:items-baseline md:gap-x-4 md:gap-y-2">
          <h2 className="font-heading text-3xl md:text-[28px] font-bold text-foreground md:[grid-area:1/1]">
            Projets récents
          </h2>
          <p className="text-muted-foreground mt-2 md:mt-0 md:[grid-area:2/1/3/3]">
            Découvrez mes dernières réalisations
          </p>
          <Link
            href="/projets"
            className="font-semibold text-sm text-secondary hover:text-primary transition-colors whitespace-nowrap mt-4 md:mt-0 md:[grid-area:1/2]"
          >
            Voir tous mes projets →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-[22px]">
          {recentProjects.map((project) => (
            <div key={project.link} className="flex flex-col gap-3">
              <Link href={project.link} className="relative h-[210px] md:h-[150px] w-full rounded-xl overflow-hidden block">
                <Image
                  src={project.thumbnail || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover object-top"
                />
              </Link>
              <span className="text-[11px] font-medium text-muted-foreground">
                {project.technologies.slice(0, 2).join(" / ")}
              </span>
              <h3 className="font-heading font-bold text-[15px] leading-tight text-foreground">
                <Link href={project.link} className="hover:text-secondary transition-colors">
                  {project.title}
                </Link>
              </h3>
              <Link
                href={project.link}
                className="font-semibold text-[13px] text-secondary hover:text-primary transition-colors"
              >
                Voir le projet →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
