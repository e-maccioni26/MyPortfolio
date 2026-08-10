export interface BlogPostFrontmatter {
  title: string
  category: string
  excerpt: string
  date: string
  author: string
  coverImage?: string
  sources?: string[]
}

export interface BlogPost {
  slug: string
  frontmatter: BlogPostFrontmatter
  content: string
}

export function formatBlogDate(date: string): string {
  return new Intl.DateTimeFormat("fr-FR", { day: "numeric", month: "long", year: "numeric" }).format(
    new Date(date)
  )
}
