import Image from "next/image"
import CountUp from "@/components/ui/count-up"
import RotatingText from "@/components/ui/rotating-text"

type Stat = {
  label: string
  /** Valeur chiffrée : animée au défilement. */
  count?: number
  /** Texte accolé au chiffre (« + », « ans »). */
  suffix?: string
  /** Valeur purement textuelle, non animée. */
  text?: string
}

const stats: Stat[] = [
  { count: 15, suffix: "+", label: "projets livrés" },
  { count: 5, suffix: " ans", label: "d'expérience" },
  { text: "CDI/CDD", label: "en recherche active" },
]

export default function AboutSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto grid gap-10 md:grid-cols-[280px_1fr] md:gap-14 md:items-center">
          <div className="relative aspect-square w-full max-w-[240px] md:max-w-[280px] mx-auto md:mx-0">
            <Image
              src="/profil-pic.png"
              alt="Elone Maccioni, développeur full stack à Paris"
              fill
              sizes="280px"
              className="object-contain"
            />
          </div>

          <div className="max-w-2xl">
            <div className="font-mono text-xs font-semibold tracking-wide text-secondary uppercase mb-3.5">
              À propos
            </div>

            <h2 className="font-heading text-3xl md:text-[32px] font-bold leading-tight text-foreground tracking-tight mb-5 flex flex-wrap items-center gap-x-3 gap-y-2">
              <span>Développeur</span>
              <RotatingText
                texts={["Full Stack", "PHP", "Wordpress", "React", "NextJs"]}
                // min-w calé sur le mot le plus long : sans lui la pastille passe
                // de « PHP » à « Wordpress » toutes les 2 s, et le titre peut
                // basculer sur deux lignes, ce qui décale tout le contenu (CLS).
                mainClassName="px-2.5 md:px-3 py-0.5 md:py-1 min-w-[10ch] bg-primary text-primary-foreground overflow-hidden justify-center rounded-lg"
                staggerFrom="last"
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                exit={{ y: "-120%" }}
                staggerDuration={0.025}
                splitLevelClassName="overflow-hidden pb-0.5 md:pb-1"
                transition={{ type: "spring", damping: 30, stiffness: 400 }}
                rotationInterval={2000}
              />
            </h2>

            <p className="text-base leading-relaxed text-muted-foreground mb-4">
              Je conçois et développe des sites et applications web sur mesure pour des entreprises et des indépendants. Actuellement à la recherche d&apos;une nouvelle opportunité en CDI/CDD, je poursuis en parallèle quelques missions freelance sélectionnées
            </p>
            <p className="text-base leading-relaxed text-muted-foreground mb-9">
              En parallèle, je documente ma veille Tech &amp; IA chaque semaine. C&apos;est ce qui me permet de
              rester à jour sur des technologies qui évoluent vite, et d&apos;en faire bénéficier directement mes
              projets clients.
            </p>

            <dl className="flex flex-wrap gap-x-12 gap-y-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <dt className="font-heading text-2xl font-bold text-foreground leading-none mb-1.5">
                    {typeof stat.count === "number" ? (
                      <>
                        <CountUp to={stat.count} duration={1.4} />
                        {stat.suffix}
                      </>
                    ) : (
                      stat.text
                    )}
                  </dt>
                  <dd className="text-sm text-muted-foreground">{stat.label}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  )
}
