"use client"

import { cn } from "@/lib/utils"
import Link from "next/link"
import type React from "react"

interface GradientBorderButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
}

export const GradientBorderButton = ({
  children,
  className,
  href,
  onClick,
  type = "button",
}: GradientBorderButtonProps) => {
  const buttonContent = (
    <button className={cn("p-[3px] relative", className)} onClick={onClick} type={type}>
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-lg" />
      <div className="px-8 py-2 bg-black dark:bg-black rounded-[6px] relative group transition duration-200 text-white hover:bg-transparent">
        {children}
      </div>
    </button>
  )

  if (href) {
    return (
      <Link href={href} className={cn("inline-block", className)}>
        {buttonContent}
      </Link>
    )
  }

  return buttonContent
}

