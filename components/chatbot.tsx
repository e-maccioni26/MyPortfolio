"use client"

import { useState, useEffect, useRef } from "react"
import { AnimatePresence, motion } from "motion/react"
import { Bot, X, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ChatMessage } from "@/components/ui/chatbot-message"
import { ChatInput } from "@/components/ui/chatbot-input"
import { ChatSuggestions } from "@/components/ui/chatbot-suggestion"
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
      content: "Hello 👋🏼 je suis l'assistant d'Elone ! Vous pouvez me poser des questions sur lui et j'y répondrai avec plaisir.",    
      isUser: false,
      timestamp: new Date(),
    },
  ])
  const [isTyping, setIsTyping] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(true)
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const suggestedQuestions = [
    "Qu'as-tu fait comme projets ?",
    "Quel est ton parcours académique ?",
    "Quelles sont tes compétences techniques ?",
    "Comment puis-je te contacter ?",
    "Quels services proposes-tu ?",
  ]

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setShowSuggestions(true)
      }, 300)
    }
  }, [isOpen])
  
  // Afficher le message d'accueil après 5 secondes
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(true)
    }, 5000)
    
    return () => clearTimeout(timer)
  }, [])

  const handleSendMessage = async (content: string) => {
    setShowSuggestions(false)
  
    const userMessage: Message = {
      id: Date.now().toString(),
      content,
      isUser: true,
      timestamp: new Date(),
    }
  
    setMessages((prev) => [...prev, userMessage])
    setIsTyping(true)
  
    try {
      const res = await fetch("/api/contact/chatbot", {
        method: "POST",
        body: JSON.stringify({ message: content }),
        headers: {
          "Content-Type": "application/json",
        },
      })
  
      const data = await res.json()
  
      // Attente de 3 secondes avant réponse
      setTimeout(() => {
        const botMessage: Message = {
          id: (Date.now() + 1).toString(),
          content: data.response,
          isUser: false,
          timestamp: new Date(),
        }
  
        setMessages((prev) => [...prev, botMessage])
        setIsTyping(false)
  
        
        if (data.response.startsWith("Je suis désolé")) {
          setShowSuggestions(true)
        }
      }, 3000)
    } catch (error) {
      setMessages((prev) => [
        ...prev,
        {
          id: (Date.now() + 2).toString(),
          content: "Erreur serveur. Veuillez réessayer plus tard.",
          isUser: false,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
    }
  }

  const handleSuggestionClick = (question: string) => {
    handleSendMessage(question)
  }

  return (
    <>
      {/* Welcome message */}
      <AnimatePresence>
        {showWelcomeMessage && !isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 bg-indigo-600 text-white p-3 rounded-lg shadow-lg max-w-[250px] flex items-start gap-2"
          >
            <MessageCircle className="h-5 w-5 mt-0.5 flex-shrink-0" />
            <div>
              <p className="text-sm font-medium">Hey je suis l&apos;assistant d&apos;Elone, n&apos;hésite pas à me poser des questions !</p>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-1 text-xs text-indigo-200 hover:text-white p-0 h-auto"
                onClick={() => {
                  setShowWelcomeMessage(false)
                  setIsOpen(true)
                }}
              >
                Discuter
              </Button>
              <Button 
                variant="ghost" 
                size="sm" 
                className="mt-1 ml-2 text-xs text-indigo-200 hover:text-white p-0 h-auto"
                onClick={() => setShowWelcomeMessage(false)}
              >
                Fermer
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      {/* Chat button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          "fixed bottom-6 right-6 z-50 rounded-full shadow-lg h-16 w-16 p-0",
          isOpen ? "bg-gray-700 hover:bg-gray-800" : "bg-indigo-600 hover:bg-indigo-700",
        )}
      >
        {isOpen ? <X className="h-8 w-8" /> : <Bot className="h-8 w-8" />}
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

              {showSuggestions && !isTyping && messages.length === 1 && (
                <div className="mt-4">
                  <p className="text-xs text-muted-foreground mb-2">Questions suggérées :</p>
                  <ChatSuggestions suggestions={suggestedQuestions} onSelect={handleSuggestionClick} />
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