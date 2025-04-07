"use client"
import { FloatingDock } from "@/components/ui/floating-dock"
import { Home, FolderKanban, Mail, User, Github, Linkedin } from "lucide-react"

export default function FloatingNavbar() {
  const links = [
    {
      title: "Accueil",
      icon: <Home className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/",
    },
    {
      title: "Projets",
      icon: <FolderKanban className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/projets",
    },
    {
      title: "Me contacter",
      icon: <Mail className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/contact",
    },
    {
      title: "À propos de moi",
      icon: <User className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "/a-propos",
    },
    {
      title: "GitHub",
      icon: <Github className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://github.com",
    },
    {
      title: "LinkedIn",
      icon: <Linkedin className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: "https://linkedin.com",
    },
  ]

  return (
    <div className="fixed bottom-8 left-1/2 -translate-x-1/2 z-50">
      <FloatingDock items={links} />
    </div>
  )
}

