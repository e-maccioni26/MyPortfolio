'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Loader2 } from 'lucide-react';

const formSchema = z.object({
  name: z.string().min(2, { message: "Le nom doit contenir au moins 2 caractères" }),
  email: z.string().email({ message: "Format d'email invalide" }),
  message: z.string().min(10, { message: "Le message doit contenir au moins 10 caractères" }),
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
    <main className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto space-y-12 py-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Me Contacter</h1>
          <p className="text-xl text-muted-foreground">N'hésitez pas à me contacter pour discuter de vos projets</p>
        </section>

        <section className="bg-card rounded-lg border p-8 shadow-sm">
          {submitStatus === 'success' ? (
            <div className="bg-green-50 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-md mb-6">
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
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {submitStatus === 'error' && (
                <div className="bg-red-50 dark:bg-red-900/20 text-red-800 dark:text-red-300 p-4 rounded-md">
                  <p className="font-medium">Erreur lors de l'envoi du message</p>
                  <p className="text-sm mt-1">{errorMessage || "Veuillez réessayer ultérieurement."}</p>
                </div>
              )}

              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium">
                  Nom
                </label>
                <input
                  id="name"
                  type="text"
                  className={`w-full rounded-md border ${
                    errors.name ? 'border-red-500' : 'border-input'
                  } bg-background px-3 py-2`}
                  placeholder="Votre nom"
                  {...register('name')}
                  disabled={isSubmitting}
                />
                {errors.name && (
                  <p className="text-sm text-red-500 mt-1">{errors.name.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium">
                  Email
                </label>
                <input
                  id="email"
                  type="email"
                  className={`w-full rounded-md border ${
                    errors.email ? 'border-red-500' : 'border-input'
                  } bg-background px-3 py-2`}
                  placeholder="votre@email.com"
                  {...register('email')}
                  disabled={isSubmitting}
                />
                {errors.email && (
                  <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className={`w-full rounded-md border ${
                    errors.message ? 'border-red-500' : 'border-input'
                  } bg-background px-3 py-2`}
                  placeholder="Votre message..."
                  {...register('message')}
                  disabled={isSubmitting}
                />
                {errors.message && (
                  <p className="text-sm text-red-500 mt-1">{errors.message.message}</p>
                )}
              </div>

              <button
                type="submit"
                className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90 flex items-center justify-center w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  'Envoyer'
                )}
              </button>
            </form>
          )}
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-card p-6 text-center">
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-muted-foreground">elonemacc@gmail.com</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center">
            <h3 className="font-medium mb-2">Téléphone</h3>
            <p className="text-muted-foreground">+33 6 95 15 80 73</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center">
            <h3 className="font-medium mb-2">Localisation</h3>
            <p className="text-muted-foreground">Paris, France</p>
          </div>
        </section>
      </div>
    </main>
  );
}