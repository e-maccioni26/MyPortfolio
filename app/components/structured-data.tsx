import React from "react";

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
        name: data.employer,
      },
      knowsAbout: data.skills,
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
        name: data.author,
      },
      inLanguage: data.language,
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
        name: data.author,
      },
      keywords: data.keywords,
      datePublished: data.datePublished,
    };
  }

  if (!schema) return null;

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}; 