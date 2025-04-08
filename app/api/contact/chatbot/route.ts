const responses = [
    {
      keywords: ["bonjour", "salut", "coucou"],
      response: "Bonjour et bienvenue sur mon portfolio ! Je suis Elone Maccioni, développeur full stack passionné. N'hésitez pas à me poser une question pour en savoir plus sur mon parcours ou mes projets.",
    },
    {
      keywords: ["projet", "réalisé", "portfolio"],
      response: "J'ai conçu plusieurs projets variés, dont un portfolio en React/Next.js, un blog Angular permettant la publication de recettes, une application Pokedex en React Native, et un outil interne pour le Crédit Agricole IDF qui automatise l’envoi de leads clients. Vous pouvez découvrir ces projets en détail dans la section Projets.",
    },
    {
      keywords: ["parcours", "formation", "académique"],
      response: "Je suis actuellement en Master Dev Manager Full Stack à l’Efrei Paris dans le cadre d’un double diplôme avec l’école 3IL Ingénieur. Mon alternance se termine en septembre 2025 au Crédit Agricole d’Île-de-France, où j’ai conçu des outils digitaux internes pour améliorer les processus des conseillers.",
    },
    {
      keywords: ["compétence", "technique", "stack"],
      response: "Je maîtrise un large éventail de technologies : React, Next.js, Angular, TypeScript, JavaScript, Node.js, PHP, MySQL, Docker, Tailwind CSS, Git, et bien d’autres. Mon profil complet est disponible dans la section À propos.",
    },
    {
      keywords: ["contact", "email", "joindre"],
      response: "Vous pouvez me contacter via le formulaire sur ce site ou par e-mail à elonemacc@gmail.com. Je suis également disponible sur LinkedIn et GitHub pour toute collaboration ou discussion.",
    },
    {
      keywords: ["service", "propose", "prestations"],
      response: "Je propose des services de développement sur mesure : sites web vitrines, applications métiers, outils d’automatisation, optimisation des performances, et intégration continue. Parlons de vos besoins !",
    },
    {
      keywords: ["merci", "thanks", "super"],
      response: "Avec plaisir ! Si vous avez d'autres questions, je suis à votre disposition. 😊",
    },
  ]
  
  export async function POST(req: Request) {
    const { message } = await req.json()
    const lower = message.toLowerCase()
  
    const match = responses.find((item) =>
      item.keywords.some((kw) => lower.includes(kw))
    )
  
    const response = match
      ? match.response
      : "Je suis désolé, je n’ai pas compris. Voici quelques suggestions pour m’aider à mieux vous répondre :"
  
    return Response.json({ response })
  }