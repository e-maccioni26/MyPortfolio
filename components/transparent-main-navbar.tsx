"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  NavbarButton,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/transparent-navbar"
import { useState } from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

export default function TransparentMainNavbar() {
  const navItems = [
    {
      name: "Accueil",
      link: "/",
    },
    {
      name: "Projets",
      link: "/projets",
    },
    {
      name: "Mes services",
      link: "/mes-services",
    },
    {
      name: "Contact",
      link: "/contact",
      mobileHidden: true, 
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark")
  }

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <div className="container mx-auto flex w-full justify-between">
          <div className="flex items-center">
            <NavbarLogo />
          </div>
          <NavItems items={navItems} />
          <div className="flex items-center gap-3">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-700 dark:text-gray-300" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Changer de thème</span>
            </button>
            <NavbarButton href="/contact" variant="gradient">
              Contact
            </NavbarButton>
          </div>
        </div>
      </NavBody>

      {/* Mobile Navigation */}
      <MobileNav>
        <MobileNavHeader>
          <NavbarLogo />
          <div className="flex items-center gap-2">
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0 text-gray-700 dark:text-gray-300" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100 text-gray-700 dark:text-gray-300" />
              <span className="sr-only">Changer de thème</span>
            </button>
            <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
          </div>
        </MobileNavHeader>

        <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
          {navItems.filter(item => !item.mobileHidden).map((item, idx) => (
            <a
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white border-b border-gray-100 dark:border-gray-800"
            >
              {item.name}
            </a>
          ))}
          <div className="flex w-full pt-3">
            <NavbarButton
              href="/contact"
              variant="gradient"
              className="w-full"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Contact
            </NavbarButton>
          </div>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  )
}

