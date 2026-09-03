const LINKEDIN_URL = "https://linkedin.com/in/elone-maccioni"

function LinkedinIcon() {
  return (
    <div className="w-[34px] h-[34px] rounded-[9px] bg-primary/10 flex items-center justify-center">
      <svg width="17" height="17" viewBox="0 0 24 24" className="fill-primary" aria-hidden="true">
        <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9h4v12H3V9zm7 0h3.8v1.7h.05c.53-1 1.83-2.05 3.77-2.05C21 8.65 22 10.6 22 13.5V21h-4v-6.6c0-1.6-.6-2.7-2-2.7-1.15 0-1.85.78-2.15 1.53-.11.27-.14.64-.14 1.02V21h-4V9z" />
      </svg>
    </div>
  )
}

/**
 * Encart de suivi LinkedIn des articles.
 *
 * `sidebar` se glisse sous le sommaire sur desktop ; `card` reprend le même
 * contenu en bas de l'article sur mobile, où la colonne latérale disparaît.
 * Un seul des deux est visible à la fois, d'où l'`aria-hidden` sur la version
 * masquée pour éviter que les lecteurs d'écran n'annoncent le bloc deux fois.
 */
export default function BlogLinkedinCta({ variant }: { variant: "sidebar" | "card" }) {
  const isCard = variant === "card"

  return (
    <div
      className={
        isCard
          ? "md:hidden mt-10 bg-muted rounded-2xl p-6 flex flex-col gap-2.5"
          : "hidden md:flex mt-7 pt-6 border-t border-border flex-col gap-2.5"
      }
    >
      <LinkedinIcon />
      <h2 className={`m-0 font-heading font-bold leading-snug text-foreground ${isCard ? "text-base" : "text-[15px]"}`}>
        Suivez ma veille Tech &amp; IA
      </h2>
      <p className={`m-0 leading-relaxed text-muted-foreground ${isCard ? "text-[13.5px]" : "text-[13px]"}`}>
        Je partage chaque semaine mes analyses sur l&apos;IA et le développement web. Rejoignez-moi sur LinkedIn.
      </p>
      <a
        href={LINKEDIN_URL}
        target="_blank"
        rel="noopener noreferrer"
        className={`self-start mt-1 font-semibold text-primary border border-primary/30 rounded-lg whitespace-nowrap transition-colors hover:bg-accent ${
          isCard ? "text-[13px] px-4 py-2.5" : "text-[12.5px] px-3.5 py-2.5"
        }`}
      >
        Voir mon profil sur LinkedIn →
      </a>
    </div>
  )
}
