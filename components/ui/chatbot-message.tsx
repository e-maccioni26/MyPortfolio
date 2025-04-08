import { cn } from "@/lib/utils"
import { Bot, User } from "lucide-react"

interface ChatMessageProps {
  message: string
  isUser: boolean
  timestamp: Date
}

export function ChatMessage({ message, isUser, timestamp }: ChatMessageProps) {
  return (
    <div className={cn("flex w-full items-start gap-2 p-2", isUser ? "justify-end" : "justify-start")}>
      {!isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground">
          <Bot className="h-4 w-4" />
        </div>
      )}
      <div className={cn("flex flex-col space-y-1 max-w-[80%]", isUser ? "items-end" : "items-start")}>
        <div className={cn("rounded-lg px-3 py-2 text-sm", isUser ? "bg-primary text-primary-foreground" : "bg-muted")}>
          {message}
        </div>
        <span className="text-xs text-muted-foreground">{formatTime(timestamp)}</span>
      </div>
      {isUser && (
        <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-background">
          <User className="h-4 w-4" />
        </div>
      )}
    </div>
  )
}

function formatTime(date: Date): string {
  return date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })
}
