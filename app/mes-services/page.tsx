import { Monitor, Rocket, RefreshCw, Layers, ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';
import { GradientBorderButton } from '@/components/ui/gradient-border-button';

export default function Services() {
  const services = [
    {
      icon: Monitor,
      title: 'Site Vitrine',
      description: 'Un site élégant et professionnel qui présente votre entreprise et rassure vos prospects.',
      features: ['Design moderne', 'Responsive', 'SEO optimisé', 'Rapide et performant'],
      color: 'from-blue-600 to-cyan-600'
    },
    {
      icon: Rocket,
      title: 'Landing Page',
      description: 'Une page ultra-performante conçue pour convertir vos visiteurs en clients qualifiés.',
      features: ['Conversion optimisée', 'A/B Testing', 'Analytics intégré', 'CTA stratégiques'],
      color: 'from-purple-600 to-pink-600'
    },
    {
      icon: RefreshCw,
      title: 'Refonte Web',
      description: 'Modernisez votre site existant pour booster votre image et vos performances.',
      features: ['Audit complet', 'UX/UI moderne', 'Migration sécurisée', 'Amélioration SEO'],
      color: 'from-orange-600 to-red-600'
    },
    {
      icon: Layers,
      title: 'Application Web',
      description: 'Des solutions sur-mesure pour automatiser vos processus et gagner en efficacité.',
      features: ['Sur-mesure', 'Évolutif', 'Sécurisé', 'Support continu'],
      color: 'from-green-600 to-emerald-600'
    }
  ];

  return (
    <section id="services" className="py-24 bg-white dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 mb-4 text-sm font-semibold text-indigo-600 bg-indigo-100 dark:text-indigo-400 dark:bg-indigo-900/30 rounded-full">
            Mes Services
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 dark:text-white mb-6">
            Des Solutions Adaptées à Vos Besoins
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto">
            Gagner du temps et de l'argent. Soyez crédible auprès de vos client.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
          {services.map((service, index) => (
            <div
              key={index}
              className="group p-8 bg-slate-50 dark:bg-slate-900/50 rounded-2xl border-2 border-slate-100 dark:border-slate-800 hover:border-indigo-500/20 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2"
            >
              <div className={`w-16 h-16 mb-6 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <service.icon className="w-8 h-8 text-white" />
              </div>

              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                {service.title}
              </h3>

              <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3 mb-6">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                    <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-slate-900 dark:text-white font-semibold group-hover:gap-4 transition-all duration-300 hover:text-indigo-600 dark:hover:text-indigo-400"
              >
                <span>Discutons de votre projet</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </div>
          ))}
        </div>

        <div className="p-8 md:p-12 bg-gradient-to-br from-indigo-50 to-purple-50 dark:from-slate-900 dark:to-slate-900 rounded-3xl border border-indigo-100 dark:border-slate-800">
          <div className="text-center max-w-3xl mx-auto">
            <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Pas Sûr de Ce Dont Vous Avez Besoin ?
            </h3>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8">
              Réservez un appel gratuit de 15 minutes. On discute de vos objectifs et je vous guide vers la meilleure solution pour vous.
            </p>
            <div className="flex justify-center">
                <GradientBorderButton href="https://calendly.com/elonemacc/appel-gratuit" target="_blank">
                    <div className="flex items-center gap-2">
                        <Calendar className="w-5 h-5" />
                        <span>Réserver un appel de 15 minutes</span>
                    </div>
                </GradientBorderButton>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
