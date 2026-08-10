"use client"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

const faqs = [
  {
    question: "Comment se déroule la première prise de contact ?",
    answer:
      "Un appel de 30 minutes ou de 1 heure pour cadrer le besoin, suivi d'une proposition détaillée avec périmètre et budget.",
  },
  {
    question: "Combien de temps dure un projet de développement web ?",
    answer:
      "Un site vitrine prend généralement 2 semaines, une application sur mesure 6 à 12 semaines selon le périmètre.",
  },
  {
    question: "Comment déterminez-vous le budget d'un projet web ?",
    answer:
      "Chaque projet est unique. Le budget est calculé après une première analyse de vos besoins, en prenant en compte la complexité des fonctionnalités, le design, et le temps de développement nécessaire. Après notre premier échange, je vous fournis un devis détaillé et transparent.",
  },
  {
    question: "Quelles sont les modalités de paiement ?",
    answer:
      "Pour assurer un partenariat de confiance, le paiement est généralement lissé sur la durée du projet. Un acompte de 30 % est demandé à la signature du devis pour valider le lancement. Le reste est ensuite facturé selon des jalons d'avancement définis ensemble, avec le solde réglé au moment de la mise en ligne finale.",
  },
  {
    question: "Les sites que vous créez sont-ils optimisés pour Google (SEO) ?",
    answer:
      "Oui, le référencement naturel est intégré dès la conception technique. Je veille à produire un code propre, à optimiser les temps de chargement, et à structurer vos pages (balisage, sitemap) pour que votre site dispose des meilleures fondations possibles afin d'être bien classé par les moteurs de recherche.",
  },
  {
    question: "Proposez-vous un accompagnement après la mise en ligne ?",
    answer:
      "Oui, maintenance, évolutions et suivi de performance peuvent être inclus dans une formule mensuelle.",
  },
  {
    question: "Vais-je pouvoir modifier le contenu de mon site moi-même une fois terminé ?",
    answer:
      "Absolument. Je mets un point d'honneur à vous rendre totalement autonome. Selon la solution technique choisie (comme WordPress), vous disposerez d'une interface d'administration intuitive pour modifier vos textes, images ou produits. Une formation de prise en main est toujours prévue lors de la livraison du projet.",
  },
]

export default function FaqSection() {
  return (
    <section className="py-20 md:py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-[28px] font-bold text-foreground mb-2">
            Questions fréquentes
          </h2>
          <p className="text-muted-foreground mb-9">
            Tout ce qu'il faut savoir avant de démarrer un projet
          </p>

          <Accordion type="single" collapsible className="flex flex-col gap-3.5 text-left">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={faq.question}
                value={`item-${index}`}
                className="bg-muted rounded-2xl px-6 border-none"
              >
                <AccordionTrigger className="font-heading font-bold text-base text-foreground hover:no-underline py-5">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-[14px] leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
