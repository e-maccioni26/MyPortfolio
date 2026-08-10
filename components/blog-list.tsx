"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { cn } from "@/lib/utils"
import { formatBlogDate, type BlogPost } from "@/lib/blog-utils"
import { BlogCategoryBadge } from "@/components/blog-category-badge"

function CoverImage({ post, className }: { post: BlogPost; className?: string }) {
  if (post.frontmatter.coverImage) {
    return (
      <div className={cn("relative", className)}>
        <Image
          src={post.frontmatter.coverImage}
          alt={post.frontmatter.title}
          fill
          className="object-cover"
        />
      </div>
    )
  }

  return (
    <div
      className={cn(
        "bg-[repeating-linear-gradient(135deg,hsl(var(--accent)),hsl(var(--accent))_14px,hsl(var(--secondary)/0.15)_14px,hsl(var(--secondary)/0.15)_28px)] flex items-center justify-center font-mono text-xs text-secondary",
        className
      )}
    >
      image de couverture
    </div>
  )
}

export default function BlogList({ posts }: { posts: BlogPost[] }) {
  const categories = Array.from(new Set(posts.map((post) => post.frontmatter.category)))
  const [activeCategory, setActiveCategory] = useState<string>("Tous les articles")

  const filteredPosts =
    activeCategory === "Tous les articles"
      ? posts
      : posts.filter((post) => post.frontmatter.category === activeCategory)

  const [featured, ...rest] = filteredPosts

  return (
    <>
      <span className="block font-mono text-xs font-semibold uppercase tracking-wide text-muted-foreground mb-3">
        Filtre :
      </span>
      <div className="flex gap-2.5 flex-wrap mb-10">
        {["Tous les articles", ...categories].map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={cn(
              "font-medium text-[13px] p-4 py-2 rounded-full transition-colors",
              activeCategory === category
                ? "text-white bg-gradient-to-br from-[#845DF4] to-[#4F46E5] font-semibold"
                : "text-foreground bg-muted hover:bg-muted/70"
            )}
          >
            {category}
          </button>
        ))}
      </div>

      {featured && (
        <div className="mb-10">
          <Link
            href={`/blog/${featured.slug}`}
            className="bg-muted rounded-2xl p-6 md:p-9 grid md:grid-cols-[1.1fr_1.4fr] gap-9 items-center no-underline hover:opacity-95 transition-opacity"
          >
            <CoverImage post={featured} className="h-56 rounded-2xl overflow-hidden" />
            <div className="flex flex-col gap-3.5">
              <div className="flex items-center gap-3">
                <BlogCategoryBadge category={featured.frontmatter.category} />
                <span className="font-mono text-xs text-muted-foreground">À la une</span>
              </div>
              <h2 className="text-2xl md:text-[26px] font-bold font-heading leading-tight text-foreground m-0">
                {featured.frontmatter.title}
              </h2>
              <p className="text-[14.5px] leading-relaxed text-muted-foreground m-0">
                {featured.frontmatter.excerpt}
              </p>
              <span className="font-mono text-xs text-muted-foreground">
                {formatBlogDate(featured.frontmatter.date)}
              </span>
            </div>
          </Link>
        </div>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {rest.map((post) => (
          <div key={post.slug}>
            <Link
              href={`/blog/${post.slug}`}
              className="h-full bg-card border border-border rounded-2xl overflow-hidden flex flex-col no-underline hover:shadow-lg hover:shadow-primary/5 transition-shadow"
            >
              <CoverImage post={post} className="h-40" />
              <div className="p-6 flex flex-col gap-3 flex-1">
                <BlogCategoryBadge category={post.frontmatter.category} className="self-start" />
                <h3 className="text-lg font-bold font-heading leading-tight text-foreground m-0 flex-1">
                  {post.frontmatter.title}
                </h3>
                <p className="text-[13.5px] leading-relaxed text-muted-foreground m-0">
                  {post.frontmatter.excerpt}
                </p>
                <span className="font-mono text-xs text-muted-foreground">
                  {formatBlogDate(post.frontmatter.date)}
                </span>
              </div>
            </Link>
          </div>
        ))}
      </div>

      {filteredPosts.length === 0 && (
        <div className="text-center py-20 rounded-lg border border-border bg-card/50">
          <p className="text-muted-foreground text-lg">Aucun article dans cette catégorie pour le moment.</p>
        </div>
      )}
    </>
  )
}
