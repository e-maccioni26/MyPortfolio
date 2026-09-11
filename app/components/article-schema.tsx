import { parseBlogDate, type BlogPostFrontmatter } from "@/lib/blog-utils"
import { serialiserJsonLd } from "@/lib/json-ld"

const SITE = "https://elonemaccioni.fr"

/**
 * JSON-LD `BlogPosting` pour un article.
 *
 * `BlogPosting` plutôt qu'`Article` : c'est le type que Google attend pour un
 * billet de blog, et il hérite de tout ce qu'`Article` apporte.
 *
 * La date passe par `parseBlogDate`, qui rejette les dates inexistantes (un
 * 31 juin dans un frontmatter avait déjà fait planter le site sur Safari) :
 * mieux vaut omettre `datePublished` qu'émettre une date invalide, que Google
 * signalerait comme erreur de balisage.
 */
export function ArticleSchema({
  slug,
  frontmatter,
}: {
  slug: string
  frontmatter: BlogPostFrontmatter
}) {
  const url = `${SITE}/blog/${slug}`
  const publiee = parseBlogDate(frontmatter.date)

  const auteur = {
    "@type": "Person",
    name: frontmatter.author,
    url: SITE,
  }

  const schema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": `${url}#article`,
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
    url,
    headline: frontmatter.title,
    description: frontmatter.excerpt,
    articleSection: frontmatter.category,
    inLanguage: "fr-FR",
    image: frontmatter.coverImage ? `${SITE}${frontmatter.coverImage}` : `${SITE}/avatar.png`,
    author: auteur,
    publisher: auteur,
    ...(publiee
      ? {
          datePublished: frontmatter.date,
          // Aucune date de modification dans le frontmatter : on reprend la
          // publication plutôt que d'inventer une fraîcheur.
          dateModified: frontmatter.date,
        }
      : {}),
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialiserJsonLd(schema) }}
    />
  )
}
