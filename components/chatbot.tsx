"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Bot, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatMessage } from "@/components/ui/chatbot-message"
import { ChatInput } from "@/components/ui/chatbot-input"
import { cn } from "@/lib/utils"

interface Message {
  id: string
  content: string
  isUser: boolean
  timestamp: Date
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      content: "Bonjour ! Comment puis-je vous aider aujourd'hui ?",
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

 
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  const handleSendMessage = (content: string) => {
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    }
    setMessages((prev) => [...prev, userMessage])

    setIsTyping(true)

    
    setTimeout(
      () => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: getBotResponse(content),
          isUser: false,
          timestamp: new Date(),
        }
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
      },
      1000 + Math.random() * 2000,
    ) 
  }

  
  const getBotResponse = (message: string): string => {
    const lowerMessage = message.toLowerCase()

    if (lowerMessage.includes("bonjour") || lowerMessage.includes("salut")) {
      return "Bonjour ! Comment puis-je vous aider aujourd'hui ?"
    }

    if (lowerMessage.includes("projet") || lowerMessage.includes("services")) {
      return "Je propose des services de développement web, création de sites et d'applications. Vous pouvez consulter mes projets dans la section Projets du site."
    }

    if (lowerMessage.includes("contact") || lowerMessage.includes("email")) {
      return "Vous pouvez me contacter par email à elonemacc@gmail.com ou via le formulaire de contact sur le site."
    }

    if (lowerMessage.includes("merci")) {
      return "Je vous en prie ! N'hésitez pas si vous avez d'autres questions."
    }

    return "Je suis désolé, je ne suis qu'une démo pour le moment. Je serai bientôt connecté à un LLM pour mieux répondre à vos questions !"
  }

  return (
    <>
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full shadow-lg h-14 w-14 p-0",
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-indigo-600 hover:bg-indigo-700",
        )}
      >
        {isOpen ? <X className="h-6 w-6" /> : <Bot className="h-6 w-6" />}
      </Button>

      {/* Chat window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-24 right-6 z-50 w-[350px] max-w-[calc(100vw-3rem)] rounded-lg border bg-background shadow-xl"
          >
            {/* Chat header */}
            <div className="flex items-center justify-between border-b p-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-indigo-600 text-white">
                  <Bot className="h-4 w-4" />
                </div>
                <div>
                  <h3 className="font-medium">Assistant</h3>
                  <p className="text-xs text-muted-foreground">En ligne</p>
                </div>
              </div>
              <Button variant="ghost" size="icon" onClick={() => setIsOpen(false)}>
                <X className="h-4 w-4" />
                <span className="sr-only">Fermer</span>
              </Button>
            </div>

            {/* Chat messages */}
            <div className="h-[350px] overflow-y-auto p-4">
              {messages.map((message) => (
                <ChatMessage
                  key={message.id}
                  message={message.content}
                  isUser={message.isUser}
                  timestamp={message.timestamp}
                />
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex items-center gap-2 p-2">
                  <div className="flex h-8 w-8 shrink-0 select-none items-center justify-center rounded-md border bg-primary text-primary-foreground">
                    <Bot className="h-4 w-4" />
                  </div>
                  <div className="flex space-x-1 p-2">
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.3s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground [animation-delay:-0.15s]"></div>
                    <div className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground"></div>
                  </div>
                </div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Chat input */}
            <ChatInput onSendMessage={handleSendMessage} disabled={isTyping} />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
