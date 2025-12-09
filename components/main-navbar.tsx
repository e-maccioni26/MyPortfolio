"use client"
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  NavbarLogo,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
} from "@/components/ui/resizable-navbar"
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import { GradientBorderButton } from "@/components/ui/gradient-border-button"

export default function MainNavbar() {
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

  return (
    <div className="relative w-full">
      <Navbar>
        {/* Desktop Navigation */}
        <NavBody>
          <NavbarLogo />
          <NavItems items={navItems} />
          <div className="flex items-center gap-4">
            <ModeToggle />
            <GradientBorderButton href="/contact">Contact</GradientBorderButton>
          </div>
        </NavBody>

        {/* Mobile Navigation */}
        <MobileNav>
          <MobileNavHeader>
            <NavbarLogo />
            <div className="flex items-center gap-2">
              <ModeToggle />
              <MobileNavToggle isOpen={isMobileMenuOpen} onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} />
            </div>
          </MobileNavHeader>

          <MobileNavMenu isOpen={isMobileMenuOpen} onClose={() => setIsMobileMenuOpen(false)}>
            {navItems.filter(item => !item.mobileHidden).map((item, idx) => (
              <a
                key={`mobile-link-${idx}`}
                href={item.link}
                onClick={() => setIsMobileMenuOpen(false)}
                className="relative text-neutral-600 dark:text-neutral-300 w-full py-3 border-b border-gray-100 dark:border-gray-800"
              >
                <span className="block">{item.name}</span>
              </a>
            ))}
            <div className="flex w-full flex-col gap-4 mt-4">
              <GradientBorderButton href="/contact" className="w-full" onClick={() => setIsMobileMenuOpen(false)}>
                Contact
              </GradientBorderButton>
            </div>
          </MobileNavMenu>
        </MobileNav>
      </Navbar>
    </div>
  )
}

