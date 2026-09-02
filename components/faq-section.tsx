"use client"

import { faqs } from "@/components/faq-data"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


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
