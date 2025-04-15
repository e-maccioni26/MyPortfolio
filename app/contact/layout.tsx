import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Contact | Portfolio Elone Maccioni",
  description: "Contactez Elone Maccioni, développeur full stack. Discutons de vos projets web et des solutions digitales adaptées à vos besoins.",
  keywords: ["contact développeur", "freelance web", "développeur full stack", "Elone Maccioni", "devis projet web", "contact"],
  openGraph: {
    title: "Contact | Portfolio Elone Maccioni",
    description: "Contactez Elone Maccioni, développeur full stack. Discutons de vos projets web et des solutions digitales adaptées à vos besoins.",
    url: "https://elonemaccioni.fr/contact",
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/contact"
  }
};

export default function ContactLayout({
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