"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { cn } from "@/lib/utils"
import { ModeToggle } from "@/components/mode-toggle"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"

const navItems = [
  {
    name: "Accueil",
    link: "/",
  },
  {
    name: "Projets",
    link: "#projets",
  },
  {
    name: "Compétences",
    link: "#competences",
  },
  {
    name: "Contact",
    link: "#contact",
  },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [scrolled])

  return (
    <header
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled ? "bg-white/80 backdrop-blur-md shadow-sm dark:bg-gray-950/80" : "bg-transparent",
      )}
    >
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold">Portfolio</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex md:items-center md:space-x-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="text-sm font-medium text-gray-700 transition-colors hover:text-gray-900 dark:text-gray-300 dark:hover:text-white"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Right Side - Actions */}
          <div className="flex items-center space-x-4">
            <ModeToggle />
            <GradientBorderButton className="hidden md:inline-flex">Contact</GradientBorderButton>

            {/* Mobile Menu Button */}
            <button
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-700 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-500 md:hidden dark:text-gray-300 dark:hover:bg-gray-800 dark:hover:text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Ouvrir le menu</span>
              {isMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={cn(
          "absolute inset-x-0 top-16 z-50 origin-top transform transition md:hidden",
          isMenuOpen ? "translate-y-0 opacity-100" : "translate-y-[-10px] opacity-0 pointer-events-none",
        )}
      >
        <div className="divide-y divide-gray-200 rounded-lg bg-white px-5 py-6 shadow-lg ring-1 ring-black ring-opacity-5 dark:divide-gray-700 dark:bg-gray-900">
          <div className="space-y-6 py-6">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={item.link}
                className="block text-base font-medium text-gray-900 hover:text-gray-700 dark:text-gray-100 dark:hover:text-gray-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="py-6">
            <GradientBorderButton className="w-full">Contact</GradientBorderButton>
          </div>
        </div>
      </div>
    </header>
  )
}

