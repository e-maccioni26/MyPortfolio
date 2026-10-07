/**
 * Marque un projet encore en développement, posé sur la vignette de la carte.
 *
 * Ambre plutôt que le violet de la charte : c'est une information d'état, pas
 * une catégorie, et elle doit se distinguer des libellés déjà présents sur la
 * carte. Le contraste du texte blanc sur #B45309 est de 5,9:1.
 */
export function EnCoursBadge() {
  return (
    <span className="absolute top-2.5 right-2.5 z-10 flex items-center gap-1.5 rounded-full bg-[#B45309] px-2.5 py-1 font-mono text-[10px] font-semibold uppercase tracking-wide text-white shadow-sm">
      <span
        aria-hidden="true"
        className="h-1.5 w-1.5 rounded-full bg-white motion-safe:animate-cursor-blink"
      />
      En cours
    </span>
  )
}
