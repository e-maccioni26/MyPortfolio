import { PrimaryButton } from "@/components/maquette-buttons"

/**
 * Lien de fin d'article vers la page contact.
 *
 * Un seul bloc pour tous les articles : le blog est la partie du site qui attire
 * des lecteurs, et jusque-là aucun article ne renvoyait vers une page qui vend
 * quelque chose. Le titre et le libellé du lien portent le mot-clé voulu, pour
 * que l'ancre dise vers quoi elle mène.
 */
export default function BlogContactCta() {
  return (
    <aside className="mt-12 rounded-2xl bg-muted p-6 md:p-8 flex flex-col gap-3">
      <h2 className="m-0 font-heading font-bold text-xl leading-snug text-foreground">
        Besoin d&apos;un développeur web freelance à Paris ?
      </h2>
      <p className="m-0 text-[15px] leading-relaxed text-muted-foreground">
        Je conçois et je refonds des sites et applications sur mesure. Parlez-moi de votre projet, je vous réponds sous 24 h avec un devis gratuit.
      </p>
      <div className="mt-2">
        <PrimaryButton href="/contact">Demander un devis gratuit</PrimaryButton>
      </div>
    </aside>
  )
}
