import { projects } from "@/components/projects-data";
import { getAllPosts } from "@/lib/blog";
import { parseBlogDate } from "@/lib/blog-utils";
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://elonemaccioni.fr";
  
  // Pages statiques de base
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/mes-services`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/projets`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.7,
    },
  ];

  // Pages de projets dynamiques
  const projectPages = projects.map((project) => {
    return {
      url: `${baseUrl}/projets/${project.link.split("/").pop()}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    };
  });

  const blogPages = [
    {
      url: `${baseUrl}/blog`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    ...getAllPosts().map((post) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      // Une date d'article invalide ne doit pas produire un `<lastmod>` cassé.
      lastModified: parseBlogDate(post.frontmatter.date) ?? new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  ];

  return [...staticPages, ...projectPages, ...blogPages];
} 
