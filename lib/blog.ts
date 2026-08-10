import fs from "fs"
import path from "path"
import matter from "gray-matter"
import GithubSlugger from "github-slugger"
import { unified } from "unified"
import remarkParse from "remark-parse"
import remarkGfm from "remark-gfm"
import remarkRehype from "remark-rehype"
import rehypeSlug from "rehype-slug"
import rehypeStringify from "rehype-stringify"
import type { BlogPost, BlogPostFrontmatter } from "@/lib/blog-utils"

export type { BlogPost, BlogPostFrontmatter } from "@/lib/blog-utils"
export { formatBlogDate } from "@/lib/blog-utils"

const BLOG_DIR = path.join(process.cwd(), "content/blog")

export function getPostSlugs(): string[] {
  return fs
    .readdirSync(BLOG_DIR)
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""))
}

export function getPostBySlug(slug: string): BlogPost {
  const filePath = path.join(BLOG_DIR, `${slug}.mdx`)
  const raw = fs.readFileSync(filePath, "utf8")
  const { data, content } = matter(raw)

  return {
    slug,
    frontmatter: data as BlogPostFrontmatter,
    content,
  }
}

export function getAllPosts(): BlogPost[] {
  return getPostSlugs()
    .map(getPostBySlug)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1))
}

export function getCategories(): string[] {
  return Array.from(new Set(getAllPosts().map((post) => post.frontmatter.category)))
}

export async function renderMarkdownToHtml(content: string): Promise<string> {
  const file = await unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeStringify)
    .process(content)

  return String(file)
}

export interface Heading {
  text: string
  slug: string
  depth: 2 | 3
}

export function getHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger()
  const matches = content.matchAll(/^(##|###)\s+(.+)$/gm)

  return Array.from(matches).map((match) => {
    const text = match[2].trim()
    return {
      text,
      slug: slugger.slug(text),
      depth: match[1].length === 2 ? 2 : 3,
    }
  })
}
