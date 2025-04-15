export default function MentionsLegales() {
  return (
    <main className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-10 text-black dark:text-white">
          Mentions Légales
        </h1>

        <div className="space-y-8 text-left">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Éditeur du site</h2>
            <p className="text-black dark:text-white">
              Le site <a href="https://elonemaccioni.fr" className="text-purple-400 hover:text-pink-400 transition-colors">https://elonemaccioni.fr</a> est édité par :
              <br />
              <strong>Elone Maccioni</strong>
              <br />
              Responsable de la publication : Elone Maccioni
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. Hébergement</h2>
            <p className="text-black dark:text-white">
              Le site est hébergé par :
              <br />
              <strong>Vercel Inc.</strong>
              <br />
              440 N Barranca Ave #4133, Covina, CA 91723
              <br />
              Site web : <a href="https://vercel.com" className="text-purple-400 hover:text-pink-400 transition-colors">https://vercel.com</a>
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Propriété intellectuelle</h2>
            <p className="text-black dark:text-white">
              L'ensemble des contenus (textes, images, code source, projets présentés) figurant sur le site sont la propriété exclusive d'Elone Maccioni, sauf mention contraire. Toute reproduction ou utilisation sans autorisation écrite est interdite.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Données personnelles</h2>
            <p className="text-black dark:text-white">
              Aucune donnée personnelle n'est collectée à l'insu des visiteurs. Le formulaire de contact permet d'envoyer une demande à Elone Maccioni. Les données ne sont utilisées que pour répondre et ne sont pas conservées au-delà de la durée nécessaire. Conformément au RGPD, vous pouvez exercer vos droits par e-mail à : contact@elonemaccioni.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Cookies</h2>
            <p className="text-black dark:text-white">
              Ce site n'utilise pas de cookies à des fins de suivi, publicité ou statistique. Seuls des cookies strictement nécessaires peuvent être utilisés pour le bon fonctionnement du site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Limitation de responsabilité</h2>
            <p className="text-black dark:text-white">
              Le contenu du site est fourni à titre informatif. Malgré le soin apporté, l'éditeur ne peut être tenu responsable d'éventuelles erreurs ou dommages liés à l'utilisation du site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">7. Contact</h2>
            <p className="text-black dark:text-white">
              Pour toute question, vous pouvez envoyer un message à : contact@elonemaccioni.fr
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
