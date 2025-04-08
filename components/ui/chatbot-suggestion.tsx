"use client"

import { cn } from "@/lib/utils"

interface ChatSuggestionProps {
  question: string
  onClick: (question: string) => void
}

export function ChatSuggestion({ question, onClick }: ChatSuggestionProps) {
  return (
    <button
      onClick={() => onClick(question)}
      className="text-left px-3 py-2 text-sm rounded-lg bg-muted/50 hover:bg-muted transition-colors w-full mb-2 border border-muted"
    >
      {question}
    </button>
  )
}

export function ChatSuggestions({
  suggestions,
  onSelect,
}: { suggestions: string[]; onSelect: (question: string) => void }) {
  return (
    <div className={cn("flex flex-col w-full gap-2 mt-2")}>
      {suggestions.map((suggestion, index) => (
        <ChatSuggestion key={index} question={suggestion} onClick={onSelect} />
      ))}
    </div>
  )
}
