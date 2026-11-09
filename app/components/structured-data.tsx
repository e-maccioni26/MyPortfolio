import React from "react";
import { serialiserJsonLd } from "@/lib/json-ld";

// Identifiants partagés avec local-business-schema et article-schema : une IA
// doit relier Person, ProfessionalService et auteur d'article à une seule entité.
const SITE = "https://elonemaccioni.fr";

interface StructuredDataProps {
  type: "Person" | "WebSite" | "Project";
  data: any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  let schema: Record<string, unknown> | null = null;

  if (type === "Person") {
    schema = {
      "@context": "https://schema.org",
      "@type": "Person",
      "@id": `${SITE}/#person`,
      name: data.name,
      jobTitle: data.jobTitle,
      description: data.description,
      url: data.url,
      sameAs: data.socialLinks,
      image: data.image,
      email: data.email,
      telephone: data.telephone,
      worksFor: { "@id": `${SITE}/#business` },
      knowsAbout: data.skills,
    };
  } else if (type === "WebSite") {
    schema = {
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${SITE}/#website`,
      name: data.name,
      url: data.url,
      description: data.description,
      author: { "@id": `${SITE}/#person` },
      publisher: { "@id": `${SITE}/#person` },
      inLanguage: data.language,
    };
  } else if (type === "Project") {
    schema = {
      "@context": "https://schema.org",
      "@type": "CreativeWork",
      name: data.title,
      description: data.description,
      image: data.image?.startsWith("/") ? `${SITE}${data.image}` : data.image,
      url: data.url,
      // Le nom reste sur la page : un parseur qui ne lit qu'elle ne résout pas l'@id.
      author: { "@type": "Person", "@id": `${SITE}/#person`, name: data.author },
      keywords: data.keywords,
      datePublished: data.datePublished,
    };
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serialiserJsonLd(schema) }}
    />
  );
}; 