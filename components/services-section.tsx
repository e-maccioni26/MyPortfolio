import { Code, Palette, Smartphone, Gauge, Sparkles } from "lucide-react"

const services = [
  {
    icon: Code,
    title: "Développement Web",
    description: "Sites vitrines | Application métier sur mesure | Landing Pages | Outils internes |  Intégration CMS",
    featured: true,
  },
  {
    icon: Palette,
    title: "UI/UX Design",
    description: "Interfaces claires, pensées pour convertir.",
  },
  {
    icon: Smartphone,
    title: "Applications Mobiles",
    description: "Des apps rapides, natives ou hybrides.",
  },
  {
    icon: Gauge,
    title: "Optimisation & Performance",
    description: "Vitesse, SEO technique, Core Web Vitals.",
  },
  {
    icon: Sparkles,
    title: "IA & Automatisation",
    description: "Je propose des formations IA mais aussi de l'implémenter dans vos projets.",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="mb-9 md:grid md:grid-cols-[1fr_auto] md:items-baseline md:gap-x-4 md:gap-y-2">
          <h2 className="font-heading text-3xl md:text-[28px] font-bold text-foreground md:[grid-area:1/1]">
            Mes services
          </h2>
          <p className="text-muted-foreground mt-2 md:mt-0 max-w-2xl md:[grid-area:2/1/3/3]">
            Des solutions sur mesure pour répondre à vos besoins digitaux
          </p>
          <a href="/mes-services" className="font-semibold text-sm text-secondary hover:text-primary transition-colors whitespace-nowrap mt-4 md:mt-0 md:[grid-area:1/2]">
            Voir tous les services →
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr] md:grid-rows-2 gap-5">
          {services.map((service) => {
            const Icon = service.icon
            if (service.featured) {
              return (
                <div
                  key={service.title}
                  className="md:row-span-2 rounded-2xl p-8 flex flex-col justify-between text-white"
                  style={{ background: "linear-gradient(160deg,#845DF4,#4F46E5)" }}
                >
                  <div>
                    <div className="w-11 h-11 rounded-[11px] bg-white/15 flex items-center justify-center mb-4">
                      <Icon className="w-[22px] h-[22px]" />
                    </div>
                    <h3 className="font-heading font-bold text-2xl mb-2.5">{service.title}</h3>
                    <p className="text-[14.5px] leading-relaxed text-white/90">{service.description}</p>
                  </div>
                </div>
              )
            }
            return (
              <div key={service.title} className="rounded-2xl p-6 bg-muted">
                <div className="w-[38px] h-[38px] rounded-[10px] bg-secondary/10 flex items-center justify-center mb-3.5">
                  <Icon className="w-[19px] h-[19px] text-secondary" />
                </div>
                <h3 className="font-heading font-bold text-lg text-foreground mb-2">{service.title}</h3>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
