import { ThemeToggle } from "@/components/theme-toggle"
import { projects } from "@/components/projects-data"
import Link from "next/link"
import { notFound } from "next/navigation"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.link.split("/").pop(),
  }))
}

export default async function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.link.endsWith(params.slug))

  if (!project) {
    notFound()
  }

  return (
    <main className="min-h-screen p-6">
      <ThemeToggle />
      <div className="max-w-4xl mx-auto space-y-12 py-12">
        <Link href="/projets" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
          ← Retour aux projets
        </Link>

        <section className="space-y-4">
          <h1 className="text-4xl font-bold">{project.title}</h1>
          <div
            className="w-full h-80 bg-muted rounded-lg overflow-hidden"
            style={{
              backgroundImage: `url(${project.thumbnail})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">À propos du projet</h2>
          <p className="text-muted-foreground">
            Ce projet est un exemple de démonstration. Vous pourrez remplacer ce texte par une description détaillée de
            votre projet, incluant les objectifs, les défis rencontrés et les solutions apportées.
          </p>
          <p className="text-muted-foreground">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl. Sed euismod, nisl vel ultricies lacinia, nisl nisl
            aliquam nisl, eget aliquam nisl nisl sit amet nisl.
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2">
            {["React", "Next.js", "TypeScript", "Tailwind CSS", "Framer Motion"].map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-muted text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Fonctionnalités clés</h2>
          <ul className="list-disc list-inside space-y-2 text-muted-foreground">
            <li>Fonctionnalité 1 - Description détaillée</li>
            <li>Fonctionnalité 2 - Description détaillée</li>
            <li>Fonctionnalité 3 - Description détaillée</li>
            <li>Fonctionnalité 4 - Description détaillée</li>
          </ul>
        </section>
      </div>
    </main>
  )
}

