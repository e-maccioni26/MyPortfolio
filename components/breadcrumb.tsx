import Link from "next/link"
import { serialiserJsonLd } from "@/lib/json-ld"

const SITE = "https://elonemaccioni.fr"

/**
 * Fil d'Ariane visible + BreadcrumbList en JSON-LD, générés depuis la même liste :
 * le balisage ne peut pas décrire autre chose que ce que la page affiche.
 * Le dernier élément est la page courante (non cliquable).
 */
export default function Breadcrumb({ items, className = "" }: { items: { name: string; path: string }[]; className?: string }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE}${item.path}`,
    })),
  }

  return (
    <nav aria-label="Fil d'Ariane" className={className}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serialiserJsonLd(schema) }} />
      <ol className="flex items-center gap-2.5 font-semibold text-[13px] text-muted-foreground">
        {items.map((item, i) => {
          const derniere = i === items.length - 1
          return (
            <li key={item.path} className={`flex items-center gap-2.5 ${derniere ? "min-w-0" : "flex-none"}`}>
              {derniere ? (
                <span aria-current="page" className="text-secondary truncate">{item.name}</span>
              ) : (
                <>
                  <Link href={item.path} className="hover:text-secondary transition-colors">{item.name}</Link>
                  <span aria-hidden="true">/</span>
                </>
              )}
            </li>
          )
        })}
      </ol>
    </nav>
  )
}
