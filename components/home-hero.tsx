import Link from "next/link"
import { PrimaryButton, OutlineButton } from "@/components/maquette-buttons"
import TextType from "@/components/ui/text-type"
import type { BlogPost } from "@/lib/blog-utils"

const CATEGORY_DOT: Record<string, string> = {
  "IA Générative": "text-[#845DF4]",
  "Développement Web": "text-[#6565F1]",
  "Veille Tech Quotidienne": "text-[#4F46E5]",
}

export default function HomeHero({ latestPosts = [] }: { latestPosts?: BlogPost[] }) {
  return (
    <section className="pt-16 pb-20 md:pt-24 md:pb-28">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-14 items-center">
          <div className="flex flex-col gap-5">
            <span className="font-mono font-semibold text-xs tracking-wide uppercase text-secondary">
              Elone Maccioni · Disponible pour vos projets.
            </span>
            <TextType
              as="h1"
              text={["Développeur Full Stack React & Next.js - Paris", "Je code, Je veille, je Partage.","Retrouver les actualités Techs du moment",]}
              typingSpeed={55}
              deletingSpeed={25}
              pauseDuration={2200}
              initialDelay={300}
              loop
              showCursor
              className="font-heading font-extrabold text-4xl md:text-5xl lg:text-[56px] leading-[1.06] tracking-tight text-foreground max-w-xl min-h-[2.2em]"
            />
            <p className="text-base md:text-[17px] leading-relaxed text-muted-foreground max-w-md">
              Vos projets digitaux sont mes préocupations, laissez-moi vous aider à les concrétiser. Retrouvez également les dernières actualités tech et IA du moment.
            </p>

            <div className="flex flex-wrap gap-3.5 mt-2">
              <PrimaryButton href="/mes-services">Voir mes services</PrimaryButton>
              <OutlineButton href="/blog">Lire le blog</OutlineButton>
            </div>
          </div>

          <div className="rounded-2xl bg-[#0F0E22] shadow-2xl shadow-primary/20 overflow-hidden">
            <div className="flex items-center p-3 gap-2 px-4.5 py-3 bg-white/[0.04] border-b border-white/[0.06]">
              <div className="w-2.5 h-2.5 rounded-full bg-[#845DF4]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#6565F1]" />
              <div className="w-2.5 h-2.5 rounded-full bg-[#4F46E5]" />
              <span className="ml-2 font-mono text-xs text-white/50">veille.log</span>
            </div>
            <div className="p-6 flex flex-col gap-3.5 font-mono text-[13.5px] leading-relaxed text-[#B8B2E8]">
              {latestPosts.length > 0 ? (
                latestPosts.map((post) => (
                  <Link
                    key={post.slug}
                    href={`/blog/${post.slug}`}
                    className="hover:text-white transition-colors"
                  >
                    <span className={CATEGORY_DOT[post.frontmatter.category] ?? "text-[#845DF4]"}>
                      [{post.frontmatter.category}]
                    </span>{" "}
                    {post.frontmatter.title}
                  </Link>
                ))
              ) : (
                <div className="text-white/40">Aucun article pour le moment.</div>
              )}
              <div className="text-white">$ tail -f veille.log</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
