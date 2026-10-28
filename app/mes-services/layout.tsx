import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Mes services | Elone Maccioni - Développeur Freelance React/Next.js",
  description: "Création de site vitrine, refonte de site web, application web et mobile et optimisation des performances. React, Next.js et WordPress à Paris.",
  keywords: [
    "création application web",
    "développeur react freelance", 
    "expert next.js", 
    "expert wordpress",
    "refonte site internet", 
    "développement saas",
    "audit technique web",
    "Elone Maccioni"
  ],
  openGraph: {
    title: "Mes services | Elone Maccioni - Développeur Freelance React/Next.js",
    description: "Accompagnement sur-mesure pour vos projets digitaux : création d'applications web (SaaS), refonte de sites vitrines et optimisation de performance.",    
    url: "https://elonemaccioni.fr/mes-services",
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/mes-services"
  }
};

export default function MesServicesLayout({
    children,
  }: {
    children: React.ReactNode
  }) {
    return (
      <>
        {children}
      </>
    );
  }