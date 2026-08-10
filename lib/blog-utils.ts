export interface BlogPostFrontmatter {
  title: string
  category: string
  excerpt: string
  date: string
  author: string
  coverImage?: string
  sources?: string[]
}

export interface BlogPost {
  slug: string
  frontmatter: BlogPostFrontmatter
  content: string
}

/**
 * Parse une date de frontmatter de façon stricte et portable.
 *
 * `new Date("2026-06-31")` n'est pas fiable : V8 (Chrome/Node) fait déborder la
 * date sur le 1er juillet, tandis que WebKit (Safari) renvoie `Invalid Date`.
 * Passer cet `Invalid Date` à `Intl.DateTimeFormat.format()` lève un
 * `RangeError` qui fait planter tout le rendu React côté client.
 *
 * On valide donc le calendrier nous-mêmes et on renvoie `null` si la date
 * n'existe pas, au lieu de laisser le comportement dépendre du navigateur.
 */
export function parseBlogDate(date: string): Date | null {
  const match = /^(\d{4})-(\d{2})-(\d{2})$/.exec(date.trim())
  if (!match) return null

  const [, year, month, day] = match
  const parsed = new Date(Date.UTC(Number(year), Number(month) - 1, Number(day)))

  // Un aller-retour permet de rejeter les dates inexistantes (31 juin, 30 février...)
  // que `Date.UTC` ferait silencieusement déborder sur le mois suivant.
  const isRealDate =
    parsed.getUTCFullYear() === Number(year) &&
    parsed.getUTCMonth() === Number(month) - 1 &&
    parsed.getUTCDate() === Number(day)

  return isRealDate ? parsed : null
}

export function formatBlogDate(date: string): string {
  const parsed = parseBlogDate(date)

  // Une date invalide ne doit jamais faire planter la page : on affiche la
  // valeur brute, le contenu de l'article reste lisible.
  if (!parsed) return date

  return new Intl.DateTimeFormat("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(parsed)
}
