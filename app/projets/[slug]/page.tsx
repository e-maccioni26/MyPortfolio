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
            {project.longDescription}
          </p>
        </section>

        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Technologies utilisées</h2>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech, i) => (
              <span key={i} className="px-3 py-1 bg-muted text-sm rounded-full">
                {tech}
              </span>
            ))}
          </div>
        </section>

        {project.features && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Fonctionnalités clés</h2>
            <ul className="list-disc list-inside space-y-2 text-muted-foreground">
              {project.features.map((feature, index) => (
                <li key={index}>{feature}</li>
              ))}
            </ul>
          </section>
        )}

        {(project.githubLink || project.demoLink) && (
          <section className="space-y-6">
            <h2 className="text-2xl font-semibold">Liens</h2>
            <div className="flex flex-wrap gap-4">
              {project.githubLink && (
                <a 
                  href={project.githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-black text-white dark:bg-white dark:text-black rounded-md hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                    <path d="M9 18c-4.51 2-5-2-7-2"></path>
                  </svg>
                  GitHub
                </a>
              )}
              {project.demoLink && (
                <a 
                  href={project.demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:opacity-90 transition-opacity inline-flex items-center gap-2"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
                    <polyline points="15 3 21 3 21 9"></polyline>
                    <line x1="10" y1="14" x2="21" y2="3"></line>
                  </svg>
                  Voir le site
                </a>
              )}
            </div>
          </section>
        )}
      </div>
    </main>
  )
}

