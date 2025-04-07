"use client"
import { cn } from "@/lib/utils"
import { Menu, X } from "lucide-react"
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "motion/react"
import Link from "next/link"
import React, { useRef, useState } from "react"

interface NavbarProps {
  children: React.ReactNode
  className?: string
}

interface NavBodyProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface NavItemsProps {
  items: {
    name: string
    link: string
  }[]
  className?: string
  onItemClick?: () => void
}

interface MobileNavProps {
  children: React.ReactNode
  className?: string
  visible?: boolean
}

interface MobileNavHeaderProps {
  children: React.ReactNode
  className?: string
}

interface MobileNavMenuProps {
  children: React.ReactNode
  className?: string
  isOpen: boolean
  onClose: () => void
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null)
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  })
  const [scrolled, setScrolled] = useState<boolean>(false)

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 10) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  })

  return (
    <motion.div
      ref={ref}
      className={cn(
        "fixed inset-x-0 top-0 z-40 w-full border-b border-transparent transition-all duration-300",
        scrolled && "border-gray-200 dark:border-gray-800 shadow-sm",
        className,
      )}
      animate={{
        height: scrolled ? "64px" : "80px",
      }}
    >
      {React.Children.map(children, (child) =>
        React.isValidElement(child)
          ? React.cloneElement(child as React.ReactElement<{ scrolled?: boolean }>, { scrolled })
          : child,
      )}
    </motion.div>
  )
}

export const NavBody = ({ children, className, scrolled }: NavBodyProps & { scrolled?: boolean }) => {
  return (
    <div
      className={cn(
        "relative z-[60] mx-auto hidden h-full w-full max-w-7xl flex-row items-center justify-between bg-white dark:bg-gray-950 px-6 lg:flex",
        className,
      )}
    >
      {children}
    </div>
  )
}

export const NavItems = ({ items, className, onItemClick }: NavItemsProps) => {
  const [hovered, setHovered] = useState<number | null>(null)

  return (
    <div
      onMouseLeave={() => setHovered(null)}
      className={cn("flex flex-1 flex-row items-center justify-center space-x-2 text-sm font-medium", className)}
    >
      {items.map((item, idx) => (
        <Link
          onMouseEnter={() => setHovered(idx)}
          onClick={onItemClick}
          className="relative px-4 py-2 text-neutral-600 dark:text-neutral-300 hover:text-black dark:hover:text-white transition-colors"
          key={`link-${idx}`}
          href={item.link}
        >
          {hovered === idx && (
            <motion.div
              layoutId="hovered"
              className="absolute inset-0 h-full w-full rounded-md bg-gray-100 dark:bg-neutral-800"
            />
          )}
          <span className="relative z-20">{item.name}</span>
        </Link>
      ))}
    </div>
  )
}

export const MobileNav = ({ children, className, scrolled }: MobileNavProps & { scrolled?: boolean }) => {
  return (
    <div
      className={cn(
        "relative z-50 mx-auto flex h-full w-full items-center justify-between bg-white px-4 lg:hidden dark:bg-gray-950",
        className,
      )}
    >
      {children}
    </div>
  )
}

export const MobileNavHeader = ({ children, className }: MobileNavHeaderProps) => {
  return <div className={cn("flex w-full flex-row items-center justify-between", className)}>{children}</div>
}

export const MobileNavMenu = ({ children, className, isOpen, onClose }: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            "absolute inset-x-0 top-full z-50 flex w-full flex-col items-start justify-start gap-1 border-t border-gray-100 bg-white px-4 py-4 shadow-lg dark:border-gray-800 dark:bg-gray-950",
            className,
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean
  onClick: () => void
}) => {
  return (
    <button
      onClick={onClick}
      className="flex h-10 w-10 items-center justify-center rounded-md hover:bg-gray-100 dark:hover:bg-gray-800"
    >
      {isOpen ? (
        <X className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      ) : (
        <Menu className="h-5 w-5 text-gray-700 dark:text-gray-300" />
      )}
    </button>
  )
}

export const NavbarLogo = () => {
  return (
    <Link href="/" className="relative z-20 flex items-center space-x-2 py-1 text-sm font-normal">
      <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">
        Portfolio
      </span>
    </Link>
  )
}

export const NavbarButton = ({
  href,
  as: Tag = "a",
  children,
  className,
  variant = "primary",
  ...props
}: {
  href?: string
  as?: React.ElementType
  children: React.ReactNode
  className?: string
  variant?: "primary" | "secondary" | "gradient"
} & (React.ComponentPropsWithoutRef<"a"> | React.ComponentPropsWithoutRef<"button">)) => {
  const variantStyles = {
    primary: "bg-gray-900 text-white hover:bg-gray-800 dark:bg-white dark:text-black dark:hover:bg-gray-200",
    secondary: "bg-gray-100 text-gray-900 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700",
    gradient: "bg-gradient-to-r from-indigo-500 to-purple-500 text-white hover:from-indigo-600 hover:to-purple-600",
  }

  return (
    <Tag
      href={href || undefined}
      className={cn(
        "inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

