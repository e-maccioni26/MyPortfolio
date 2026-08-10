import Link from "next/link"
import type React from "react"
import { cn } from "@/lib/utils"

interface MaquetteButtonProps {
  children: React.ReactNode
  className?: string
  href?: string
  onClick?: () => void
  type?: "button" | "submit" | "reset"
  target?: string
  rel?: string
  disabled?: boolean
}

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-[9px] px-[26px] py-[14px] text-sm font-semibold transition-opacity disabled:opacity-60"

export function PrimaryButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  target,
  rel,
  disabled,
}: MaquetteButtonProps) {
  const classes = cn(baseClasses, "text-white hover:opacity-90", className)
  const style = { background: "linear-gradient(135deg,#845DF4,#4F46E5)" }

  if (href) {
    return (
      <Link href={href} className={classes} style={style} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} style={style} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}

export function OutlineButton({
  children,
  className,
  href,
  onClick,
  type = "button",
  target,
  rel,
  disabled,
}: MaquetteButtonProps) {
  const classes = cn(
    baseClasses,
    "text-foreground border border-foreground/15 hover:bg-foreground/5",
    className
  )

  if (href) {
    return (
      <Link href={href} className={classes} target={target} rel={rel}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  )
}
