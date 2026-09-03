import { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ExternalLink } from "lucide-react"
import { notFound } from "next/navigation"
import { getAllPosts, getPostBySlug, getPostSlugs, getHeadings, formatBlogDate, renderMarkdownToHtml } from "@/lib/blog"
import { BlogCategoryBadge } from "@/components/blog-category-badge"
import BlogLinkedinCta from "@/components/blog-linkedin-cta"

export async function generateStaticParams() {
  return getPostSlugs().map((slug) => ({ slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const slugs = getPostSlugs()
  if (!slugs.includes(slug)) return {}

  const { frontmatter } = getPostBySlug(slug)

  return {
    title: `${frontmatter.title} | Blog Elone Maccioni`,
    description: frontmatter.excerpt,
    alternates: {
      canonical: `https://elonemaccioni.fr/blog/${slug}`,
    },
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.excerpt,
      url: `https://elonemaccioni.fr/blog/${slug}`,
      type: "article",
      images: frontmatter.coverImage
        ? [{ url: `https://elonemaccioni.fr${frontmatter.coverImage}`, width: 1200, height: 630, alt: frontmatter.title }]
        : [{ url: "https://elonemaccioni.fr/avatar.png", width: 1200, height: 630, alt: frontmatter.title }],
    },
    twitter: {
      card: "summary_large_image",
      title: frontmatter.title,
      description: frontmatter.excerpt,
      images: frontmatter.coverImage ? [`https://elonemaccioni.fr${frontmatter.coverImage}`] : ["https://elonemaccioni.fr/avatar.png"],
    },
    authors: [{ name: frontmatter.author }],
    other: {
      "article:published_time": frontmatter.date,
    },
  }
}

export default async function BlogArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const slugs = getPostSlugs()
  if (!slugs.includes(slug)) notFound()

  const post = getPostBySlug(slug)
  const headings = getHeadings(post.content)
  const articleHtml = await renderMarkdownToHtml(post.content)
  const related = getAllPosts()
    .filter((p) => p.slug !== slug)
    .sort((a, b) => (a.frontmatter.category === post.frontmatter.category ? -1 : 1))
    .slice(0, 2)

  const initials = post.frontmatter.author
    .split(" ")
    .map((part) => part[0])
    .join("")

  return (
    <main className="min-h-screen">
      <div className="max-w-3xl mx-auto px-6 pt-16 pb-24">
        <div>
          <div className="flex items-center gap-2.5 mb-5 font-semibold text-[13px] text-muted-foreground">
            <Link href="/blog" className="hover:text-secondary transition-colors">Blog</Link>
            <span>/</span>
            <span className="text-secondary">{post.frontmatter.category}</span>
          </div>

          <BlogCategoryBadge category={post.frontmatter.category} className="mb-5" />

          <h1 className="text-3xl md:text-[42px] font-extrabold font-heading leading-tight text-foreground tracking-tight mb-5">
            {post.frontmatter.title}
          </h1>

          <div className="flex items-center gap-3.5 mb-10">
            <div className="w-11 h-11 rounded-full bg-gradient-to-br from-[#845DF4] to-[#4F46E5] flex items-center justify-center font-heading font-bold text-[15px] text-white">
              {initials}
            </div>
            <div>
              <div className="font-semibold text-sm text-foreground">{post.frontmatter.author}</div>
              <div className="font-mono text-xs text-muted-foreground">
                {formatBlogDate(post.frontmatter.date)}
              </div>
            </div>
          </div>

          {post.frontmatter.coverImage ? (
            <div className="relative h-56 md:h-[340px] rounded-2xl overflow-hidden mb-12">
              <Image
                src={post.frontmatter.coverImage}
                alt={post.frontmatter.title}
                fill
                sizes="(max-width: 768px) 100vw, 768px"
                className="object-cover"
                priority
              />
            </div>
          ) : (
            <div className="h-56 md:h-[340px] rounded-2xl bg-[repeating-linear-gradient(135deg,hsl(var(--accent)),hsl(var(--accent))_14px,hsl(var(--secondary)/0.15)_14px,hsl(var(--secondary)/0.15)_28px)] flex items-center justify-center font-mono text-xs text-secondary mb-12">
              image de couverture
            </div>
          )}
        </div>

        <div className="grid md:grid-cols-[200px_1fr] gap-14">
          {/* Rendu même sans sommaire : l'aside porte aussi l'encart LinkedIn, et
              une colonne absente ferait basculer l'article dans la piste de 200px. */}
          <aside className="hidden md:flex flex-col sticky top-24 self-start font-medium text-[13px] text-muted-foreground">
            {headings.length > 0 && (
              <div className="flex flex-col gap-2.5">
                <div className="font-mono text-[11px] font-semibold text-foreground uppercase tracking-wide mb-1.5">
                  Sommaire
                </div>
                {headings.map((heading) => (
                  <a
                    key={heading.slug}
                    href={`#${heading.slug}`}
                    className={heading.depth === 3 ? "pl-3 hover:text-secondary transition-colors" : "hover:text-secondary transition-colors"}
                  >
                    {heading.text}
                  </a>
                ))}
              </div>
            )}

            <BlogLinkedinCta variant="sidebar" />
          </aside>

          <div className="min-w-0">
            <article className="article-prose" dangerouslySetInnerHTML={{ __html: articleHtml }} />
            <BlogLinkedinCta variant="card" />
          </div>
        </div>

        {post.frontmatter.sources && post.frontmatter.sources.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-6">Sources</h2>
            <ul className="flex flex-col gap-2.5">
              {post.frontmatter.sources.map((url) => {
                let label = url
                try {
                  label = new URL(url).hostname.replace(/^www\./, "")
                } catch {
                  // URL invalide : on affiche la chaîne brute
                }
                return (
                  <li key={url}>
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="inline-flex items-center gap-2 bg-muted rounded-xl px-4 py-3 font-medium text-sm text-secondary hover:text-primary transition-colors break-all"
                    >
                      <ExternalLink className="w-4 h-4 flex-none" />
                      {label}
                    </a>
                  </li>
                )
              })}
            </ul>
          </div>
        )}

        <div className="mt-16 pt-8 border-t border-border flex items-center justify-between flex-wrap gap-4">
          <BlogCategoryBadge category={post.frontmatter.category} />
          <Link href="/blog" className="font-semibold text-[13px] text-secondary hover:text-primary transition-colors">
            ← Retour au blog
          </Link>
        </div>

        {related.length > 0 && (
          <div className="mt-14">
            <h2 className="text-xl md:text-2xl font-bold font-heading text-foreground mb-6">À lire aussi</h2>
            <div className="grid sm:grid-cols-2 gap-6">
              {related.map((p) => (
                <Link
                  key={p.slug}
                  href={`/blog/${p.slug}`}
                  className="bg-muted rounded-2xl p-6 flex flex-col gap-3 no-underline hover:opacity-90 transition-opacity"
                >
                  <BlogCategoryBadge category={p.frontmatter.category} className="self-start" />
                  <h3 className="text-lg font-bold font-heading leading-tight text-foreground m-0">
                    {p.frontmatter.title}
                  </h3>
                  <span className="font-mono text-xs text-muted-foreground">
                    {formatBlogDate(p.frontmatter.date)}
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
