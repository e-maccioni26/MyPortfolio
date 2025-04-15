import { Metadata } from "next"

export const metadata: Metadata = {
  title: "À propos | Portfolio Elone Maccioni",
  description: "Découvrez mon parcours, mes compétences et ma vision en tant que développeur full stack. Apprenez-en plus sur mon expertise technique et mon approche professionnelle.",
  keywords: ["à propos", "développeur full stack", "parcours professionnel", "compétences techniques", "Elone Maccioni", "expertise web"],
  openGraph: {
    title: "À propos | Portfolio Elone Maccioni",
    description: "Découvrez mon parcours, mes compétences et ma vision en tant que développeur full stack. Apprenez-en plus sur mon expertise technique et mon approche professionnelle.",
    url: "https://elonemaccioni.fr/a-propos",
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/a-propos"
  }
};

export default function AproposLayout({
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