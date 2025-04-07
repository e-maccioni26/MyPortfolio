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
} from "@/components/ui/solid-navbar"
import { useState } from "react"
import { ModeToggle } from "@/components/mode-toggle"
import Link from "next/link"

export default function SolidMainNavbar() {
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
      name: "À propos",
      link: "/a-propos",
    },
    {
      name: "Contact",
      link: "/contact",
    },
  ]

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  return (
    <Navbar>
      {/* Desktop Navigation */}
      <NavBody>
        <div className="flex items-center">
          <NavbarLogo />
        </div>
        <NavItems items={navItems} />
        <div className="flex items-center gap-3">
          <ModeToggle />
          <NavbarButton href="/contact" variant="gradient">
            Contact
          </NavbarButton>
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
          {navItems.map((item, idx) => (
            <Link
              key={`mobile-link-${idx}`}
              href={item.link}
              onClick={() => setIsMobileMenuOpen(false)}
              className="w-full py-3 text-gray-700 hover:text-black dark:text-gray-300 dark:hover:text-white border-b border-gray-100 dark:border-gray-800"
            >
              {item.name}
            </Link>
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

