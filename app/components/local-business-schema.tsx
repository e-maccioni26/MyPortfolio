import { faqs } from "@/components/faq-data"

/**
 * Schémas destinés aux moteurs et aux LLM.
 *
 * `ProfessionalService` est le type qui correspond aux requêtes du genre
 * « développeur freelance paris » : il porte la prestation, la zone desservie et
 * le catalogue de services, là où `Person` ne décrit qu'un individu.
 * `FAQPage` reprend les questions déjà affichées sur la home — les moteurs
 * génératifs citent volontiers des paires question/réponse.
 */
const services = [
  {
    name: "Création de site vitrine",
    description:
      "Conception et développement de sites vitrines sur mesure en React et Next.js, ou sous WordPress, pour entreprises et indépendants.",
  },
  {
    name: "Refonte de site web",
    description:
      "Refonte complète de sites existants : nouvelle interface, migration technique, amélioration des performances et du référencement.",
  },
  {
    name: "Développement d'application web",
    description:
      "Applications métier et outils internes sur mesure en React, Next.js, TypeScript et Node.js. Intégration d'API et de bases de données.",
  },
  {
    name: "Optimisation des performances et SEO technique",
    description:
      "Amélioration de la vitesse de chargement, des Core Web Vitals et du référencement technique.",
  },
  {
    name: "IA & automatisation",
    description:
      "Intégration d'IA dans des projets web et automatisation de tâches, avec formation des équipes.",
  },
]

export function LocalBusinessSchema() {
  const business = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://elonemaccioni.fr/#business",
    name: "Elone Maccioni — Développeur web freelance",
    description:
      "Développeur web full stack freelance à Paris, spécialisé en React, Next.js et WordPress. Création de sites vitrines, refonte de sites web et développement d'applications sur mesure.",
    url: "https://elonemaccioni.fr",
    image: "https://elonemaccioni.fr/profil-pic.png",
    email: "contact@elonemaccioni.fr",
    priceRange: "€€",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Paris",
      addressCountry: "FR",
    },
    areaServed: [
      { "@type": "City", name: "Paris" },
      { "@type": "Country", name: "France" },
    ],
    knowsLanguage: ["fr", "en"],
    founder: { "@type": "Person", name: "Elone Maccioni" },
    sameAs: [
      "https://linkedin.com/in/elone-maccioni",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "WordPress",
      "PHP",
      "Développement web",
      "Refonte de site web",
      "SEO technique",
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Prestations de développement web",
      itemListElement: services.map((s) => ({
        "@type": "Offer",
        itemOffered: {
          "@type": "Service",
          name: s.name,
          description: s.description,
          areaServed: { "@type": "City", name: "Paris" },
          provider: { "@id": "https://elonemaccioni.fr/#business" },
        },
      })),
    },
  }

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    })),
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(business) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  )
}
