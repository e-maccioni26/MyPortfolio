import AboutBeamsDemo from "@/components/about-beams-demo"
import TechStackSection from "@/components/tech-stack-section"

export default function AProposPage() {
  return (
    <main className="min-h-screen">
      <AboutBeamsDemo />
      <TechStackSection />

      <div className="max-w-4xl mx-auto space-y-12 py-12 px-6">
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold">Parcours</h2>

          <div className="space-y-8">
            {[
              {
                period: "2020 - Présent",
                title: "Développeur Full Stack",
                company: "Entreprise XYZ",
                description: "Développement d'applications web et mobiles avec React, Next.js et Node.js.",
              },
              {
                period: "2018 - 2020",
                title: "Développeur Front-end",
                company: "Startup ABC",
                description: "Création d'interfaces utilisateur modernes et responsives.",
              },
              {
                period: "2016 - 2018",
                title: "Formation Développement Web",
                company: "École de développement",
                description: "Formation intensive en développement web front-end et back-end.",
              },
            ].map((exp, i) => (
              <div key={i} className="relative pl-8 border-l-2 border-muted">
                <div className="absolute -left-1.5 top-0 w-3 h-3 rounded-full bg-primary"></div>
                <div className="space-y-1">
                  <p className="text-sm text-muted-foreground">{exp.period}</p>
                  <h3 className="text-lg font-medium">{exp.title}</h3>
                  <p className="text-muted-foreground">{exp.company}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  )
}

