"use client"

import { useCallback, useEffect, useRef, useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

/**
 * Avis clients laissés sur Malt.
 *
 * Les citations sont reproduites mot pour mot, y compris leurs coquilles : ce
 * sont les propos de tiers, les retoucher fausserait la recommandation.
 */
const testimonials = [
  {
    quote:
      "J'ai eu l'occasion de collaborer avec Elone au sein du pôle Assurance du Crédit Agricole d'Ile de France. Il a fait preuve d'une grande expertise technique en développant intégralement un outil de Web Stories sur mesure. Grâce à son travail, nous avons pu remplacer une solution tierce payante par un outil interne performant. Je recommande Elone pour son autonomie et sa capacité à livrer des solutions à forte valeur ajoutée.",
    name: "Moussia M.",
    role: "Chef de projet web",
    company: "Crédit Agricole d'Île-de-France",
    initials: "MM",
    date: "2025-12-02",
  },
  {
    quote:
      "Je souhaite remercier Elone pour la qualité de la prestation fournie dans le cadre de la refonte de notre page d'accueil. Le projet s'est déroulé dans d'excellentes conditions, et les objectifs que nous nous étions fixés ont été pleinement atteints, notamment en termes d'amélioration de l'expérience utilisateur. Un grand merci Elone.",
    name: "Boris S.",
    role: "Responsable Web et Communication Clients",
    company: "Crédit Agricole d'Île-de-France",
    initials: "BS",
    date: "2025-11-17",
  },
  {
    quote:
      "J'ai eu l'occasion de travailler avec Elone sur un formulaire spécifique à l'entreprise. Cela c'est très bien passé ! Il a répondu à toutes nos attentes dans un délais très rapide. Merci beaucoup à toi !",
    name: "Thibault M.",
    role: "Webmaster",
    company: "Crédit Agricole d'Île-de-France",
    initials: "TM",
    date: "2025-12-03",
  },
  {
    quote:
      "Merci Elone pour ce super boulot sur mon site d'ostéopathie ! Tu as vraiment pris le temps de comprendre mon activité et ce que je voulais transmettre. Le site est exactement comme je l'imaginais.",
    name: "Aaron Zitoun",
    role: "Ostéopathe D.O.",
    company: "Aaron Z.",
    initials: "AZ",
    date: "2025-10-30",
  },
]

const formatDate = (iso: string) =>
  new Intl.DateTimeFormat("fr-FR", { month: "long", year: "numeric", timeZone: "UTC" }).format(
    new Date(`${iso}T00:00:00Z`)
  )

function QuoteIcon() {
  return (
    <svg
      width="26"
      height="26"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="text-secondary flex-none"
      aria-hidden="true"
    >
      <path d="M10 11H6a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h1M20 11h-4a1 1 0 0 1-1-1V7a3 3 0 0 1 3-3h1" />
      <path d="M10 11v3a5 5 0 0 1-5 5M20 11v3a5 5 0 0 1-5 5" />
    </svg>
  )
}

export default function TestimonialsSection() {
  const scrollerRef = useRef<HTMLDivElement>(null)
  const [peutReculer, setPeutReculer] = useState(false)
  const [peutAvancer, setPeutAvancer] = useState(false)
  const [indexActif, setIndexActif] = useState(0)

  // Pas d'unité en dur : on mesure la carte et le gap à l'exécution, la largeur
  // changeant à chaque breakpoint (1, 2 puis 3 cartes visibles).
  const pasDeDefilement = (el: HTMLDivElement) => {
    const carte = el.firstElementChild as HTMLElement | null
    if (!carte) return 0
    return carte.offsetWidth + (parseFloat(getComputedStyle(el).columnGap) || 0)
  }

  const majEtat = useCallback(() => {
    const el = scrollerRef.current
    if (!el) return
    // marge d'1px : les navigateurs renvoient des scrollLeft fractionnaires
    setPeutReculer(el.scrollLeft > 1)
    setPeutAvancer(el.scrollLeft < el.scrollWidth - el.clientWidth - 1)

    const pas = pasDeDefilement(el)
    if (pas > 0) setIndexActif(Math.round(el.scrollLeft / pas))
  }, [])

  useEffect(() => {
    majEtat()
    window.addEventListener("resize", majEtat)
    return () => window.removeEventListener("resize", majEtat)
  }, [majEtat])

  // Pas de `behavior` sur les deux fonctions ci-dessous : motion-safe:scroll-smooth
  // s'en charge et respecte prefers-reduced-motion, qu'un "smooth" codé en dur
  // écraserait.
  const defiler = (sens: 1 | -1) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollBy({ left: sens * pasDeDefilement(el) })
  }

  const allerA = (index: number) => {
    const el = scrollerRef.current
    if (!el) return
    el.scrollTo({ left: index * pasDeDefilement(el) })
  }

  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="flex items-end justify-between gap-4 mb-9">
          <div>
            <h2 className="font-heading text-3xl md:text-[28px] font-bold text-foreground mb-2">
              Ils m&apos;ont fait confiance
            </h2>
            <p className="text-muted-foreground m-0">
              Ce que disent les clients avec qui j&apos;ai travaillé
            </p>
          </div>

          <div className="hidden sm:flex gap-2 flex-none">
            <button
              type="button"
              onClick={() => defiler(-1)}
              disabled={!peutReculer}
              aria-label="Avis précédent"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground transition-colors hover:bg-muted disabled:opacity-35 disabled:pointer-events-none"
            >
              <ChevronLeft className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              type="button"
              onClick={() => defiler(1)}
              disabled={!peutAvancer}
              aria-label="Avis suivant"
              className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-foreground transition-colors hover:bg-muted disabled:opacity-35 disabled:pointer-events-none"
            >
              <ChevronRight className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* scroll-snap natif : swipe tactile, défilement clavier et inertie sans JS
            d'animation. motion-safe désactive le lissage si l'utilisateur a
            demandé des animations réduites. */}
        <div
          ref={scrollerRef}
          onScroll={majEtat}
          tabIndex={0}
          role="group"
          aria-label="Avis clients, faire défiler horizontalement"
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory motion-safe:scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring rounded-2xl"
        >
          {testimonials.map((t) => (
            <figure
              key={t.name}
              className="m-0 snap-start shrink-0 basis-full md:basis-[calc((100%-24px)/2)] lg:basis-[calc((100%-48px)/3)] border border-border rounded-2xl p-7 md:p-[30px] flex flex-col gap-5"
            >
              <QuoteIcon />

              {/* flex-1 aligne les pieds de carte malgré des avis de longueurs très inégales */}
              <blockquote className="m-0 flex-1 text-[15.5px] leading-relaxed text-muted-foreground">
                {t.quote}
              </blockquote>

              <figcaption className="flex items-center gap-3.5 pt-4 border-t border-border">
                <div
                  aria-hidden="true"
                  className="w-[42px] h-[42px] flex-none rounded-[10px] bg-muted flex items-center justify-center font-heading font-bold text-[13px] text-primary"
                >
                  {t.initials}
                </div>
                <div className="min-w-0">
                  <div className="font-heading font-bold text-[14.5px] text-foreground">{t.name}</div>
                  <div className="text-[13px] text-muted-foreground">
                    {t.role} · {t.company}
                  </div>
                  <div className="font-mono text-[11px] text-muted-foreground/80 mt-0.5">
                    Avis Malt · {formatDate(t.date)}
                  </div>
                </div>
              </figcaption>
            </figure>
          ))}
        </div>

        {/* Contrepartie mobile des flèches, masquées sous sm : sans repère visuel,
            rien n'indique qu'il y a d'autres avis à droite. Cliquables plutôt que
            décoratifs, avec une zone tactile de 28px autour du point de 6px. */}
        <div className="sm:hidden flex justify-center gap-1 mt-5" role="tablist" aria-label="Choisir un avis">
          {testimonials.map((t, i) => (
            <button
              key={t.name}
              type="button"
              role="tab"
              aria-selected={i === indexActif}
              aria-label={`Avis ${i + 1} sur ${testimonials.length} — ${t.name}`}
              onClick={() => allerA(i)}
              className="p-2.5 -m-0.5 group"
            >
              <span
                className={`block h-1.5 rounded-full transition-all ${
                  i === indexActif ? "w-5 bg-primary" : "w-1.5 bg-border group-hover:bg-muted-foreground/40"
                }`}
              />
            </button>
          ))}
        </div>
      </div>
    </section>
  )
}
