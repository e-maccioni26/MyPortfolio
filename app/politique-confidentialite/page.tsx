export default function PolitiqueConfidentialite() {
  return (
    <main className="container mx-auto px-4 py-16 min-h-screen">
      <div className="max-w-3xl">
        <h1 className="text-4xl font-bold mb-10 text-black dark:text-white">
          Politique de Confidentialité
        </h1>

        <div className="space-y-8 text-left">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">1. Responsable du traitement</h2>
            <p className="text-black dark:text-white">
              Le site <a href="https://elonemaccioni.fr" className="text-purple-400 hover:text-pink-400 transition-colors">https://elonemaccioni.fr</a> est édité par Elone Maccioni, qui est responsable du traitement des données collectées sur le site.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">2. Données collectées</h2>
            <p className="text-black dark:text-white">
              Aucune donnée personnelle n'est collectée à l'insu des visiteurs. Le formulaire de contact et le chatbot du site permettent de saisir un nom, une adresse e-mail et un message afin d'envoyer une demande à Elone Maccioni. Ces informations sont uniquement utilisées pour répondre à la demande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">3. Utilisation des données</h2>
            <p className="text-black dark:text-white">
              Les données transmises via le formulaire de contact ou le chatbot ne sont utilisées que pour répondre à votre demande. Elles ne sont ni cédées, ni vendues, ni communiquées à des tiers, et ne sont pas conservées au-delà de la durée nécessaire au traitement de votre demande.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">4. Cookies et mesure d'audience</h2>
            <p className="text-black dark:text-white">
              Ce site utilise des outils de mesure d'audience (Google Tag Manager, Vercel Analytics et Speed Insights) afin de suivre la fréquentation et d'améliorer l'expérience utilisateur. Ces outils peuvent déposer des cookies ou traceurs techniques. Aucune donnée personnelle identifiable n'est vendue ni partagée à des fins publicitaires.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">5. Hébergement des données</h2>
            <p className="text-black dark:text-white">
              Le site est hébergé par Vercel Inc. (440 N Barranca Ave #4133, Covina, CA 91723). Les données transitant par le site peuvent donc être traitées sur des serveurs situés hors de l'Union européenne, dans le respect des garanties prévues par le RGPD.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">6. Vos droits</h2>
            <p className="text-black dark:text-white">
              Conformément au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, d'opposition et de suppression des données vous concernant. Vous pouvez exercer ces droits à tout moment en écrivant à : contact@elonemaccioni.fr
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-purple-400">7. Contact</h2>
            <p className="text-black dark:text-white">
              Pour toute question relative à cette politique de confidentialité, vous pouvez envoyer un message à : contact@elonemaccioni.fr
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
