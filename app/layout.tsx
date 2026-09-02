import type React from "react"
import type { Metadata } from "next"
import { Inter, Outfit, JetBrains_Mono } from "next/font/google"
import Script from "next/script"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import Footer from "@/components/footer"
import TransparentMainNavbar from "@/components/transparent-main-navbar"
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from '@vercel/analytics/next';


const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const outfit = Outfit({ subsets: ["latin"], weight: ["600", "700", "800"], variable: "--font-outfit" })
const jetbrainsMono = JetBrains_Mono({ subsets: ["latin"], weight: ["400", "500", "600"], variable: "--font-jetbrains-mono" })

export const metadata: Metadata = {
  metadataBase: new URL("https://elonemaccioni.fr"),
  title: "Portfolio | Elone Maccioni",
  description: "Développeur Full Stack spécialisé en React, Next.js et technologies web modernes. Découvrez mes projets et compétences.",
  keywords: ["développeur full stack", "portfolio", "react", "next.js", "javascript", "développeur web", "Elone Maccioni", "freelance"],
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
        url: "https://elonemaccioni.fr/avatar.png",
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
    images: ["https://elonemaccioni.fr/avatar.png"]
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/"
  },
  icons: {
    icon: '/icon.png', 
    shortcut: '/favicon.ico', 
    apple: '/apple-icon.png', 
    other: {
      rel: 'icon', 
      url: '/favicon-32x32.png',
      sizes: '32x32'
    },
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        {/* Google Tag Manager */}
        {/* afterInteractive et non beforeInteractive : GTM n'a pas besoin de
            s'exécuter avant l'hydratation, et le charger plus tôt bloque le
            rendu et alourdit le thread principal. C'est la stratégie
            recommandée par Google pour GTM dans Next.js. */}
        <Script id="gtm-head" strategy="afterInteractive">
          {`(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
          new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
          j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
          'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
          })(window,document,'script','dataLayer','GTM-TQJJNGZN');`}
        </Script>
        {/* End Google Tag Manager */}
      </head>
      <body
        className={`${inter.variable} ${outfit.variable} ${jetbrainsMono.variable} font-sans bg-background text-foreground flex flex-col min-h-screen pt-16`}
      >
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-TQJJNGZN"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem disableTransitionOnChange>
          <TransparentMainNavbar />
          <div className="flex-grow">{children}</div>
          <Footer />
        </ThemeProvider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  )
}