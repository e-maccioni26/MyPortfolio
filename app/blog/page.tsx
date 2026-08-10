import { Metadata } from "next"
import { getAllPosts } from "@/lib/blog"
import BlogList from "@/components/blog-list"

export const metadata: Metadata = {
  title: "Blog | Elone Maccioni - Développeur Freelance React/Next.js",
  description: "Notes de veille, retours d'expérience et analyses sur l'IA générative, le développement web et les outils du quotidien.",
  keywords: ["blog développeur", "veille tech", "ia générative", "développement web", "Elone Maccioni", "freelance"],
  openGraph: {
    title: "Blog | Elone Maccioni",
    description: "Notes de veille, retours d'expérience et analyses sur l'IA générative, le développement web et les outils du quotidien.",
    url: "https://elonemaccioni.fr/blog",
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/blog"
  }
}

export default function BlogPage() {
  const posts = getAllPosts()

  return (
    <main className="min-h-screen">
      <section className="max-w-7xl mx-auto px-6 pt-16 pb-2">
        <div className="font-mono text-xs font-semibold tracking-wide text-secondary uppercase mb-3.5">
          Blog
        </div>
        <h1 className="text-4xl md:text-[42px] font-extrabold font-heading leading-tight text-foreground tracking-tight mb-3.5 max-w-2xl">
          Veille Tech &amp; IA, documentée chaque semaine
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-2xl">
          Retrouver toute l'actualité IA et sur la Tech au même endroit.
        </p>
      </section>

      <section className="max-w-7xl mx-auto px-6 pt-8 pb-24">
        <BlogList posts={posts} />
      </section>
    </main>
  )
}
