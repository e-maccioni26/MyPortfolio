import { cn } from "@/lib/utils"

const CATEGORY_STYLES: Record<string, string> = {
  "IA Générative": "text-[#845DF4] bg-[#845DF4]/10 dark:bg-[#845DF4]/15",
  "Développement Web": "text-[#6565F1] bg-[#6565F1]/10 dark:bg-[#6565F1]/15",
  "Veille Tech Quotidienne": "text-[#4F46E5] bg-[#4F46E5]/10 dark:bg-[#4F46E5]/15",
}

export function BlogCategoryBadge({
  category,
  className,
}: {
  category: string
  className?: string
}) {
  return (
    <span
      className={cn(
        "inline-block font-mono text-[10.5px] font-semibold uppercase tracking-wide rounded-md px-2.5 py-1",
        CATEGORY_STYLES[category] ?? "text-primary bg-primary/10",
        className
      )}
    >
      {category}
    </span>
  )
}
