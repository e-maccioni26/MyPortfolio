'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2, Mail, Phone, MapPin } from 'lucide-react';

const formSchema = z.object({
  name: z.string()
    .min(2, { message: "Le nom doit contenir au moins 2 caractères" })
    .max(50, { message: "Le nom ne doit pas dépasser 50 caractères" })
    .regex(/^[a-zA-ZÀ-ÿ\s'-]+$/, { 
      message: "Le nom ne doit contenir que des lettres, espaces, tirets ou apostrophes" 
    }),
    
  email: z.string()
    .email({ message: "Format d'email invalide" })
    .regex(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, {
      message: "Format d'email invalide" 
    }),
    
  message: z.string()
    .min(10, { message: "Le message doit contenir au moins 10 caractères" })
    .max(2000, { message: "Le message ne doit pas dépasser 2000 caractères" })
    .refine(msg => !/(https?:\/\/|www\.)/i.test(msg), {
      message: "Les liens ne sont pas autorisés dans le message"
    }),
});

type FormValues = z.infer<typeof formSchema>;

export default function ContactPage() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: zodResolver(formSchema),
  });

  const onSubmit = async (data: FormValues) => {
    setIsSubmitting(true);
    setSubmitStatus('idle');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || 'Échec de l\'envoi du message');
      }

      setSubmitStatus('success');
      reset();
    } catch (error) {
      setSubmitStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Une erreur s\'est produite');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen">
      <section className="max-w-3xl mx-auto px-6 pt-16 pb-4 text-center flex flex-col items-center gap-4">
        <span className="font-mono text-xs font-semibold tracking-wide uppercase text-secondary">
          Contact
        </span>
        <h1 className="font-heading text-4xl md:text-[42px] font-extrabold leading-tight tracking-tight text-foreground">
          Me contacter
        </h1>
        <p className="text-base md:text-lg leading-relaxed text-muted-foreground max-w-md">
          N'hésitez pas à me contacter pour discuter de vos projets.
        </p>
      </section>

      <section className="max-w-5xl mx-auto px-6 pt-12 pb-24 grid grid-cols-1 md:grid-cols-[1.3fr_1fr] gap-12">
        <div>
          {submitStatus === 'success' ? (
            <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md">
              <p className="font-medium">Message envoyé avec succès!</p>
              <p className="text-sm mt-1">Merci de m'avoir contacté. Je vous répondrai dès que possible.</p>
              <button
                onClick={() => setSubmitStatus('idle')}
                className="mt-3 text-sm font-medium underline"
              >
                Envoyer un autre message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col gap-5">
              {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-md">
                  <p className="font-medium">Erreur lors de l'envoi du message</p>
                  <p className="text-sm mt-1">{errorMessage || "Veuillez réessayer ultérieurement."}</p>
                </div>
              )}

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="text-sm font-semibold text-foreground">
                  Nom et prénom
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full rounded-lg border bg-background px-4 py-3 text-[14.5px] ${
                    errors.name ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Votre nom et prénom"
                  {...register('name')}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-destructive">{errors.name.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-foreground">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full rounded-lg border bg-background px-4 py-3 text-[14.5px] ${
                    errors.email ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="vous@exemple.com"
                  {...register('email')}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-sm font-semibold text-foreground">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className={`w-full rounded-lg border bg-background px-4 py-3 text-[14.5px] leading-relaxed resize-none ${
                    errors.message ? 'border-destructive' : 'border-input'
                  }`}
                  placeholder="Parlez-moi de votre projet…"
                  {...register('message')}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="self-start mt-1 inline-flex items-center justify-center gap-2 rounded-[9px] px-[30px] py-[14px] text-sm font-semibold text-white hover:opacity-90 transition-opacity disabled:opacity-70"
                style={{ background: "linear-gradient(135deg,#845DF4,#4F46E5)" }}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer'
                )}
              </button>
            </form>
          )}
        </div>

        <div className="flex flex-col gap-3">
          <div className="bg-muted rounded-2xl p-6 flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-[11px] flex items-center justify-center flex-none"
              style={{ backgroundColor: "rgba(132,93,244,.14)" }}
            >
              <Mail className="w-5 h-5" style={{ color: "#845DF4" }} />
            </div>
            <div>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                Email
              </div>
              <div className="font-semibold text-[14.5px] text-foreground">contact@elonemaccioni.fr</div>
            </div>
          </div>

          <div className="bg-muted rounded-2xl p-6 flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-[11px] flex items-center justify-center flex-none"
              style={{ backgroundColor: "rgba(101,101,241,.14)" }}
            >
              <Phone className="w-5 h-5" style={{ color: "#6565F1" }} />
            </div>
            <div>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                Téléphone
              </div>
              <div className="font-semibold text-[14.5px] text-foreground">+33 6 95 15 80 73</div>
            </div>
          </div>

          <div className="bg-muted rounded-2xl p-6 flex items-center gap-4">
            <div
              className="w-11 h-11 rounded-[11px] flex items-center justify-center flex-none"
              style={{ backgroundColor: "rgba(79,70,229,.14)" }}
            >
              <MapPin className="w-5 h-5" style={{ color: "#4F46E5" }} />
            </div>
            <div>
              <div className="font-mono text-[11px] font-semibold uppercase tracking-wide text-muted-foreground mb-0.5">
                Localisation
              </div>
              <div className="font-semibold text-[14.5px] text-foreground">Paris, France</div>
            </div>
          </div>

          <div
            className="rounded-2xl p-6 flex flex-col gap-2.5 mt-1.5"
            style={{ background: "linear-gradient(160deg,#5B3FC9,#2C1568)" }}
          >
            <h3 className="font-heading font-bold text-lg text-white">Un appel rapide ?</h3>
            <p className="text-[13.5px] leading-relaxed text-white/80">
              15 minutes gratuites pour cadrer votre projet.
            </p>
            <a
              href="https://calendly.com/elonemacc/appel-gratuit"
              target="_blank"
              rel="noopener noreferrer"
              className="font-semibold text-sm text-white underline mt-1"
            >
              Réserver un appel →
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}