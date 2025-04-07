"use client";

import { useEffect } from "react";

interface StructuredDataProps {
  type: "Person" | "WebSite" | "Project";
  data: any;
}

export const StructuredData = ({ type, data }: StructuredDataProps) => {
  useEffect(() => {
    // Ne pas exécuter côté serveur
    if (typeof window === "undefined") return;

    let schema;

    if (type === "Person") {
      schema = {
        "@context": "https://schema.org",
        "@type": "Person",
        name: data.name,
        jobTitle: data.jobTitle,
        description: data.description,
        url: data.url,
        sameAs: data.socialLinks,
        image: data.image,
        email: data.email,
        telephone: data.telephone,
        worksFor: {
          "@type": "Organization",
          name: data.employer
        },
        knowsAbout: data.skills
      };
    } else if (type === "WebSite") {
      schema = {
        "@context": "https://schema.org",
        "@type": "WebSite",
        name: data.name,
        url: data.url,
        description: data.description,
        author: {
          "@type": "Person",
          name: data.author
        },
        inLanguage: data.language
      };
    } else if (type === "Project") {
      schema = {
        "@context": "https://schema.org",
        "@type": "CreativeWork",
        name: data.title,
        description: data.description,
        image: data.image,
        url: data.url,
        author: {
          "@type": "Person",
          name: data.author
        },
        keywords: data.keywords,
        datePublished: data.datePublished
      };
    }

    if (schema) {
      // Injecter la balise script contenant les données structurées
      const scriptTag = document.createElement("script");
      scriptTag.setAttribute("type", "application/ld+json");
      scriptTag.textContent = JSON.stringify(schema);
      document.head.appendChild(scriptTag);

      // Nettoyage lors du démontage du composant
      return () => {
        document.head.removeChild(scriptTag);
      };
    }
  }, [type, data]);

  // Ce composant ne rend rien visuellement
  return null;
}; 