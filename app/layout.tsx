import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import TransparentMainNavbar from "@/components/transparent-main-navbar"
import Chatbot from "@/components/chatbot"
import { SpeedInsights } from "@vercel/speed-insights/next"


const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Portfolio | Elone Maccioni",
  description: "Développeur Full Stack spécialisé en React, Next.js et technologies web modernes. Découvrez mes projets et compétences.",
  keywords: ["développeur full stack", "portfolio", "react", "next.js", "javascript", "développeur web", "Elone Maccioni"],
  authors: [{ name: "Elone Maccioni" }],
  creator: "Elone Maccioni",
  publisher: "Elone Maccioni",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://elonemaccioni.fr/",
    title: "Portfolio | Elone Maccioni | Développeur Full Stack",
    description: "Développeur Full Stack spécialisé en React, Next.js et technologies web modernes. Découvrez mes projets et compétences.",
    siteName: "Portfolio d'Elone Maccioni",
    images: [
      {
        url: "/avatar.png",
        width: 800,
        height: 800,
        alt: "Photo d'Elone Maccioni"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Elone Maccioni | Développeur Full Stack",
    description: "Développeur Full Stack spécialisé en React, Next.js et technologies web modernes. Découvrez mes projets et compétences.",
    images: ["/avatar.png"]
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <body
        className={`${inter.className} bg-white dark:bg-black text-black dark:text-white flex flex-col min-h-screen pt-16`}
      >
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <TransparentMainNavbar />
          <div className="flex-grow">{children}</div>
          <Footer />
          <Chatbot />
        </ThemeProvider>
        <SpeedInsights />
      </body>
    </html>
  )
}



import './globals.css'