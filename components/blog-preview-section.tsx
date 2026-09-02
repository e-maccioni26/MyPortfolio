import Link from "next/link"
import Image from "next/image"
import { formatBlogDate, type BlogPost } from "@/lib/blog-utils"
import { BlogCategoryBadge } from "@/components/blog-category-badge"
import TrueFocus from "@/components/ui/true-focus"

export default function BlogPreviewSection({ posts }: { posts: BlogPost[] }) {
  if (posts.length === 0) return null

  return (
    <section className="py-20 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-3 md:gap-4 mb-9">
          <h2>
            <TrueFocus
              sentence="Dernières actualités"
              borderColor="#845DF4"
              glowColor="rgba(132,93,244,0.6)"
              animationDuration={1}
              pauseBetweenAnimations={2}
              freezeOnMobile
              className="font-heading text-3xl md:text-[28px] font-bold text-foreground"
            />
          </h2>
          <Link href="/blog" className="font-semibold text-sm text-secondary hover:text-primary transition-colors whitespace-nowrap">
            Voir tous les articles →
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {posts.map((post) => (
            <Link
              key={post.slug}
              href={`/blog/${post.slug}`}
              className="h-full bg-card border border-border rounded-2xl p-6 flex flex-col gap-3.5 no-underline hover:shadow-lg hover:shadow-primary/5 transition-shadow"
            >
              {post.frontmatter.coverImage ? (
                <div className="relative h-36 -mx-6 -mt-6 mb-1">
                  <Image
                    src={post.frontmatter.coverImage}
                    alt={post.frontmatter.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover rounded-t-2xl"
                  />
                </div>
              ) : null}
              <BlogCategoryBadge category={post.frontmatter.category} className="self-start" />
              <h3 className="font-heading font-bold text-lg leading-tight text-foreground m-0">
                {post.frontmatter.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground m-0">
                {post.frontmatter.excerpt}
              </p>
              <span className="font-mono text-xs text-muted-foreground mt-auto pt-1">
                {formatBlogDate(post.frontmatter.date)}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
