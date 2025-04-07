export default function ContactPage() {
  return (
    <main className="min-h-screen p-6">
      <div className="max-w-3xl mx-auto space-y-12 py-12">
        <section className="text-center space-y-4">
          <h1 className="text-4xl font-bold">Me Contacter</h1>
          <p className="text-xl text-muted-foreground">N'hésitez pas à me contacter pour discuter de vos projets</p>
        </section>

        <section className="bg-card rounded-lg border p-8 shadow-sm">
          <form className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="text-sm font-medium">
                Nom
              </label>
              <input
                id="name"
                type="text"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Votre nom"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                type="email"
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="votre@email.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                rows={5}
                className="w-full rounded-md border border-input bg-background px-3 py-2"
                placeholder="Votre message..."
              />
            </div>

            <button
              type="submit"
              className="rounded-md bg-primary px-4 py-2 text-primary-foreground hover:bg-primary/90"
            >
              Envoyer
            </button>
          </form>
        </section>

        <section className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="rounded-lg border bg-card p-6 text-center">
            <h3 className="font-medium mb-2">Email</h3>
            <p className="text-muted-foreground">contact@exemple.com</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center">
            <h3 className="font-medium mb-2">Téléphone</h3>
            <p className="text-muted-foreground">+33 6 12 34 56 78</p>
          </div>

          <div className="rounded-lg border bg-card p-6 text-center">
            <h3 className="font-medium mb-2">Localisation</h3>
            <p className="text-muted-foreground">Paris, France</p>
          </div>
        </section>
      </div>
    </main>
  )
}

