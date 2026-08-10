import { Monitor, Rocket, Sparkles, Layers } from 'lucide-react';
import Link from 'next/link';
import { Metadata } from "next"
import RecentProjectsSection from "@/components/recent-projects-section"

export const metadata: Metadata = {
  title: "Mes services | Elone Maccioni - Développeur Freelance React/Next.js",
  description: "Accompagnement sur-mesure pour vos projets digitaux : création d'applications web (SaaS), refonte de sites vitrines et optimisation de performance. Expertise React, Next.js et Wordpress.",
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
    title: "Mes services | Elone Maccioni - Développeur Full Stack Freelance",
    description: "Accompagnement sur-mesure pour vos projets digitaux : création d'applications web (SaaS), refonte de sites vitrines et optimisation de performance.",
    url: "https://elonemaccioni.fr/mes-services",
  },
  alternates: {
    canonical: "https://elonemaccioni.fr/mes-services"
  }
};

const services = [
  {
    icon: Monitor,
    title: 'Site Vitrine',
    description: 'Un site élégant et professionnel — création ou refonte — qui présente votre entreprise et rassure vos prospects.',
    features: ['Création ou refonte complète', 'Design moderne & responsive', 'SEO optimisé', 'Migration sécurisée'],
    color: '#845DF4',
  },
  {
    icon: Rocket,
    title: 'Landing Page',
    description: 'Une page ultra-performante conçue pour convertir vos visiteurs en clients qualifiés.',
    features: ['Conversion optimisée', 'A/B Testing', 'Analytics intégré', 'CTA stratégiques'],
    color: '#6565F1',
  },
  {
    icon: Sparkles,
    title: 'IA & Automatisation',
    description: "Je propose des formations IA mais aussi de l'implémenter dans vos projets.",
    features: ['Formations sur-mesure', "Intégration d'IA dans vos outils", 'Automatisation de tâches', 'Accompagnement personnalisé'],
    color: '#4F46E5',
  },
  {
    icon: Layers,
    title: 'Application Web',
    description: 'Des solutions sur-mesure pour automatiser vos processus et gagner en efficacité.',
    features: ['Sur-mesure', 'Évolutif', 'Sécurisé', 'Support continu'],
    color: '#845DF4',
  },
];

export default function MesServicesPage() {
  return (
    <main className="min-h-screen">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-4 text-center flex flex-col items-center gap-4">
        <span className="font-mono text-xs font-semibold tracking-wide uppercase text-secondary">
          Mes services
        </span>
        <h1 className="font-heading text-4xl md:text-[42px] font-extrabold leading-tight tracking-tight text-foreground">
          Des solutions adaptées à vos besoins
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-lg">
          Gagnez du temps et de l'argent. Soyez crédible auprès de vos clients.
        </p>
      </section>

      <section className="max-w-6xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 md:grid-cols-2 gap-6">
        {services.map((service) => (
          <div
            key={service.title}
            className="bg-muted rounded-2xl p-8 flex flex-col gap-4"
          >
            <div
              className="w-12 h-12 rounded-xl flex items-center justify-center"
              style={{ backgroundColor: `${service.color}1F` }}
            >
              <service.icon className="w-6 h-6" style={{ color: service.color }} />
            </div>

            <h3 className="font-heading text-2xl font-bold text-foreground">
              {service.title}
            </h3>

            <p className="text-[14.5px] leading-relaxed text-muted-foreground">
              {service.description}
            </p>

            <ul className="flex flex-col gap-2">
              {service.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-[13.5px] font-medium text-foreground">
                  <span
                    className="w-1.5 h-1.5 rounded-full flex-none"
                    style={{ backgroundColor: service.color }}
                  />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              href="/contact"
              className="font-semibold text-sm text-secondary hover:text-primary transition-colors mt-2"
            >
              Discutons de votre projet →
            </Link>
          </div>
        ))}
      </section>

      <RecentProjectsSection />

      <section className="max-w-6xl mx-auto px-6 pt-16 pb-24">
        <div
          className="rounded-3xl p-10 md:p-14 text-center flex flex-col items-center gap-5"
          style={{ background: "linear-gradient(160deg,#5B3FC9,#2C1568)" }}
        >
          <h2 className="font-heading text-2xl md:text-[28px] font-bold text-white">
            Pas sûr de ce dont vous avez besoin ?
          </h2>
          <p className="text-white/80 max-w-lg">
            Réservez un appel gratuit de 15 minutes. On discute de vos objectifs et je vous guide vers la meilleure solution.
          </p>
          <Link
            href="https://calendly.com/elonemacc/appel-gratuit"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-1 font-semibold text-sm text-[#2C1568] bg-white px-8 py-3.5 rounded-full hover:bg-white/90 transition-colors"
          >
            Réserver un appel de 15 minutes
          </Link>
        </div>
      </section>
    </main>
  );
}
