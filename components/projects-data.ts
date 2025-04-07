export interface Project {
  title: string;
  link: string;
  thumbnail: string;
  description: string;
  longDescription?: string;
  technologies: string[];
  features?: string[];
  githubLink?: string;
  demoLink?: string;
}

export const projects: Project[] = [
  {
    title: "Landing Page destinée aux parents",
    link: "/projets/landing-page-parents",
    thumbnail: "/images/projects/landing-page-enfant.png", 
    description: "LP",
    longDescription: "Cette landing page a été réalisée pour le Crédit Agricole d’Île-de-France, dans le cadre d'une campagne dédiée aux parents de jeunes enfants. L’objectif était de mettre en valeur les différentes offres bancaires proposées pour les enfants et adolescents, de manière claire, engageante et responsive. J’ai conçu cette page de bout en bout, en partant du maquettage sur Figma, jusqu’au développement complet en HTML, CSS, JavaScript et PHP. Un système de tracking avancé via Piano Analytics a également été mis en place pour analyser les performances de la page et en optimiser le contenu.",
    technologies: ["Html", "Css", "PHP", "Figma", "Javascript", "Piano Analytics"],
    features: [
      "Design responsive : Adaptation fluide de l’interface sur mobile, tablette et desktop.",
      "Optimisation du parcours utilisateur : Mise en avant des offres selon les tranches d’âge, avec une navigation intuitive.",
      "Tracking & statistiques : Intégration de Piano Analytics pour mesurer les clics, taux de rebond, et engagement utilisateur.",
      "Chargement rapide : Optimisation des performances pour une meilleure expérience utilisateur."
    ],
    demoLink: "https://www.credit-agricole.fr/ca-paris/particulier/campagnes/les-offres-pour-vos-enfants.html"
  },
  {
    title: "Landing page hivernale avec effet de neige",
    link: "/projets/landing-page-assurance",
    thumbnail: "/images/projects/landing-page-hiver.png", 
    description: "LP",
    longDescription: "Cette landing page a été développée pour accompagner une campagne saisonnière du Crédit Agricole d’Île-de-France destinée aux clients préparant un séjour à la montagne. L’objectif était de valoriser les services bancaires et assurances utiles pour les vacances d’hiver, tout en proposant une expérience utilisateur immersive et engageante.J’ai réalisé la conception de cette page de A à Z, en partant de maquettes Figma jusqu’à l’intégration HTML, CSS, JavaScript et PHP. Pour renforcer l’ambiance hivernale, j’ai également codé un effet de neige animé en JavaScript. Enfin, un système de tracking via Piano Analytics permet de mesurer les interactions des visiteurs et d’optimiser les performances de la page.",
    technologies: ["Html", "Css", "Bootstrap", "PHP", "Javascript", "Figma", "Piano Analytics"],
    features: [
      "Interface responsive : Affichage optimal sur mobile, tablette et desktop.",
      "Effet visuel immersif : Animation de neige en JavaScript pour renforcer le thème hivernal.",
      "Mise en avant des services bancaires : Offres dédiées aux séjours à la montagne (assurances, moyens de paiement, etc.).",
      "Suivi des performances : Tracking des clics, conversions et parcours utilisateur via Piano Analytics.",
      "Code optimisé : Temps de chargement réduit et bonne accessibilité."
    ],
    demoLink: "https://www.credit-agricole.fr/ca-paris/particulier/campagnes/vous-envisagez-un-sejour-a-la-montagne.html"
  },
  {
    title: "Projet interne – Plateforme de Web Stories",
    link: "/projets/web-stories",
    thumbnail: "/images/projects/webstories.png", 
    description: "Web-Stories",
    longDescription: "Ce projet a été réalisé dans le but de proposer une solution interne de création et de diffusion de Web Stories pour le Crédit Agricole d’Île-de-France. Il remplace une solution externe payante, permettant ainsi à l’entreprise de gagner en autonomie et en flexibilité, tout en réduisant les coûts.J’ai mis en place un WordPress auto-hébergé avec une base de données MySQL sur un serveur Apache, et j’ai intégré un plugin open-source de Google pour la création des stories. J’ai également conçu un thème personnalisé en PHP et Bootstrap pour l’affichage des stories, avec automatisation de la page d’accueil : chaque story est affichée dynamiquement avec son image, son titre, sa description et un bouton de redirection.",
    technologies: ["Wordpress", "PHP", "JavaScript", "Bootstrap", "MySQL", "Apache"],
    features: [
      "Création de stories via WordPress : Utilisation d’un plugin open-source pour générer facilement du contenu interactif.",
      "Thème personnalisé : Développement d’un thème WordPress sur-mesure pour afficher automatiquement les stories.",
      "Automatisation de la page d’accueil : Affichage dynamique des dernières stories avec image, titre, description et lien.",
      "Solution auto-hébergée : Mise en place d’un serveur Apache avec base de données MySQL pour héberger le projet.",
      "Optimisation des coûts : Remplacement d’un outil payant par une solution open-source gérée en interne."
    ],
    demoLink: "https://stories.ca-paris.fr/"
  },
  {
    title: "Automatisation de l’envoi de leads",
    link: "/projets/plateforme-leads",
    thumbnail: "/images/projects/plateforme-leads.png", 
    description: "Leads",
    longDescription: "Ce formulaire a été conçu pour les conseillers du Crédit Agricole d’Île-de-France afin de leur permettre d’envoyer rapidement les besoins de leurs clients (Assurance, Épargne, Entrée en relation) via un outil simple, efficace et centralisé.Ce projet remplace l’envoi manuel d’emails par un formulaire web sécurisé, qui transmet automatiquement les informations vers l’outil SOLEAD et la plateforme IAV pour la prise de rendez-vous ou le rappel client. J’ai développé l’ensemble en HTML, CSS, JavaScript et PHP, en m’assurant que les données soient correctement formatées et analysées par un robot de lecture côté messagerie. Le système intègre également un code apporteur pour assurer la traçabilité des leads.",
    technologies: ["HTML", "CSS", "JavaScript", "PHP", "Express", "Material UI"],
    features: [
      "Formulaire intelligent : Remplissage guidé avec champs conditionnels selon le besoin client.",
      "Envoi automatique d’emails formatés : Les données sont analysées par un robot chaque minute pour intégration dans un outil en interne.",
      "Distribution automatique des leads : Redirection des leads vers le bon service en fonction du sujet sélectionné.",
      "Traçabilité des envois : Génération automatique d’un code apporteur pour suivre l’origine des leads.",
      "Statistiques : Les performances (nombre de leads, typologie) sont visibles dans l'outil en interne grâce au tracking mis en place."
    ],
  },
  {
    title: "Générateur de GIF personnalisé",
    link: "/projets/generateur-gif",
    thumbnail: "/images/projects/generateur-gif.png", 
    description: "GIF",
    longDescription: "Ce projet est un générateur de GIF personnalisé développé pour un usage interne au Crédit Agricole d’Île-de-France. Il permet à l’utilisateur de téléverser plusieurs images, de choisir les paramètres souhaités (taille, vitesse d’animation), puis de générer automatiquement un GIF animé. J’ai développé cet outil en PHP et JavaScript, avec une interface simple et efficace. La génération du GIF est réalisée côté serveur à l’aide de la bibliothèque GD, ce qui permet de créer des animations à partir d’images personnalisées directement depuis le navigateur. Cet outil s’inscrit dans une logique d’automatisation et de création de contenu digital interne.",
    technologies: ["HTML", "Bootstrap", "JavaScript", "PHP"],
    features: [
      "Téléversement d’images : L’utilisateur peut uploader plusieurs fichiers images depuis son appareil.",
      "Paramétrage du GIF : Choix de la taille (largeur/hauteur) et du délai entre chaque image.",
      "NFTs intégrés : Génération automatique de badges numériques en NFT selon les interactions des utilisateurs.",
      "Gamification de l’expérience : Les jeunes peuvent collectionner leurs badges, débloquer des offres, et les conserver dans leur portefeuille.",
      "Compatible tous supports : Design responsive pour une consultation sur mobile, tablette et desktop."
    ],
  },  
  {
    title: "Plateforme jeune avec intégration Web3 et NFTs",
    link: "/projets/globe-trotter",
    thumbnail: "/images/projects/globe-trotter-place.png", 
    description: "GTP",
    longDescription: "Globe-Trotter Place est une plateforme digitale interactive développée pour le Crédit Agricole d’Île-de-France, à destination des jeunes de 18 à 30 ans. Elle centralise des bons plans, conseils pratiques et offres bancaires pour accompagner les jeunes dans leurs projets de voyage, d’installation ou d’études à l’étranger.Dans le cadre de l’innovation et de la gamification de l’expérience client, j’ai intégré un système de NFTs offrant des badges numériques à collectionner selon les actions ou contenus consultés sur la plateforme. Ces NFTs sont mintés via une API connectée à la blockchain, et permettent aux jeunes utilisateurs de recevoir des récompenses digitales exclusives.Le site a été entièrement pensé pour une expérience fluide, mobile-first et responsive, avec une esthétique jeune et dynamique.",
    technologies: ["HTML", "TailwindCss", "JavaScript", "PHP", "API Blockchain (mint de NFTs)", "Wordpress"],
    features: [
      "Plateforme interactive : Interface dynamique avec animations, contenus ludiques et UX pensée pour les jeunes.",
      "Contenus dynamiques : Intégration de bons plans, offres, et articles régulièrement mis à jour.",
      "NFTs intégrés : Génération automatique de badges numériques en NFT selon les interactions des utilisateurs.",
      "Gamification de l’expérience : Les jeunes peuvent collectionner leurs badges, débloquer des offres, et les conserver dans leur portefeuille.",
      "Compatible tous supports : Design responsive pour une consultation sur mobile, tablette et desktop."
    ],
    demoLink: "https://globetrotterplace.ca-paris.fr/"
  },  
  {
    title: "Landing page EKO Pro",
    link: "/projets/landing-page-pro",
    thumbnail: "/images/projects/landing-page-pro.png", 
    description: "Eko Pro",
    longDescription: "Cette landing page a été conçue pour présenter l’offre EKO Pro du Crédit Agricole d’Île-de-France, destinée aux professionnels à la recherche d’un compte bancaire simple et accessible.J’ai réalisé l’intégration complète de la page en HTML, CSS, JavaScript et PHP, en respectant la charte graphique du groupe. Une attention particulière a été portée à la clarté du parcours utilisateur et à la visibilité des informations clés.La page comprend également un formulaire de contact intégré, permettant aux professionnels intéressés de laisser leurs coordonnées. Les données du formulaire sont sécurisées et transmises automatiquement au service concerné via un système d’emailing configuré côté back-end.",
    technologies: ["HTML", "Css", "JavaScript", "PHP", "Bootstrap"],
    features: [
      "Page responsive : Design fluide et compatible mobile/tablette/desktop.",
      "Formulaire de contact intégré : Collecte des informations utilisateur avec validation des champs.",
      "Transmission automatisée : Envoi des données vers l’adresse dédiée du service professionnel.",
      "Structure optimisée pour la conversion : Mise en avant des avantages de l’offre EKO Pro avec call-to-actions visibles."
    ],
    demoLink: "https://www.credit-agricole.fr/ca-paris/professionnel/compte/gerer-son-argent/eko-pro0.html"
  },  
  {
    title: "Landing page PEA Jeunes",
    link: "/projets/pea-jeunes",
    thumbnail: "/images/projects/pea-jeunes.png", 
    description: "PEA Jeunes",
    longDescription: "Cette landing page a été développée pour promouvoir le Plan d’Épargne en Actions (PEA) Jeunes proposé par le Crédit Agricole d’Île-de-France. Elle s’adresse aux jeunes majeurs souhaitant commencer à investir en bourse tout en bénéficiant d’un cadre fiscal avantageux.J’ai réalisé l’intégration complète de la page en HTML, CSS, JavaScript et PHP, à partir des maquettes fournies. L’objectif était de rendre la page claire, responsive et engageante, en facilitant la compréhension des bénéfices de l’offre.Cette page fait partie intégrante d’un dispositif digital visant à sensibiliser les jeunes à l’épargne et à l’investissement, avec un focus sur l’accessibilité et la pédagogie.",
    technologies: ["HTML", "Css", "JavaScript", "PHP", "Bootstrap"],
    features: [
      "Intégration responsive : Affichage fluide sur tous les supports (mobile, tablette, desktop).",
      "Mise en avant pédagogique : Présentation simplifiée des avantages du PEA Jeunes, pensée pour un public non initié.",
      "Call-to-actions visibles : Boutons d’accès rapide aux démarches et à l’ouverture de compte.",
      "Respect des standards CA : Conformité graphique et technique avec l’environnement digital du Crédit Agricole."
    ],
    demoLink: "https://www.credit-agricole.fr/ca-paris/particulier/epargne/bourse/plan-epargne-en-actions-jeunes.html"
  },  
  {
    title: "Site partenaires – Offres bancaires personnalisées",
    link: "/projets/landing-page-cse",
    thumbnail: "/images/projects/landing-page-cse.png", 
    description: "CSE",
    longDescription: "Ce site a été développé pour le Crédit Agricole d’Île-de-France, dans le cadre d’un dispositif partenariats entreprises. Il s’adresse aux salariés d’entreprises partenaires en leur proposant des offres bancaires exclusives.À l’arrivée sur le site, une pop-up interactive demande à l’utilisateur s’il dispose d’un code entreprise. En fonction de sa réponse, le contenu de la page est adapté dynamiquement, notamment le titre principal qui se personnalise automatiquement pour offrir une expérience plus ciblée et engageante.J’ai développé l’ensemble du système en PHP, JavaScript, HTML et CSS, avec une gestion des conditions en front-end et un traitement serveur sécurisé.",
    technologies: ["HTML", "Css", "JavaScript", "PHP", "Bootstrap"],
    features: [
      "Pop-up d’entrée conditionnelle : Demande à l’utilisateur s’il a un code entreprise pour ajuster le parcours.",
      "Variabilisation du contenu : Modification dynamique du titre et des éléments de la page selon le profil (partenaire ou non).",
      "Expérience fluide : Aucun rechargement de page, tout se fait dynamiquement avec du JavaScript.",
      "Respect des standards CA : Conformité graphique et technique avec l’environnement digital du Crédit Agricole."
    ],
  },  
  {
    title: "Application mobile Pokémon",
    link: "/projets/react-native-app",
    thumbnail: "/images/projects/react-native-pokemon.png", 
    description: "react-native",
    longDescription: "Cette application mobile Pokémon App a été développée avec React Native, dans le cadre de mon apprentissage du développement mobile. Elle permet à l’utilisateur de parcourir les différents Pokémon, de les filtrer par type et d’accéder à leurs caractéristiques détaillées.Le but de ce projet était de mettre en pratique les notions clés de React Native, comme la gestion des états, les appels API, le routing, ainsi que la création d’une interface mobile fluide et responsive.L’application consomme une API publique Pokémon pour récupérer dynamiquement les données.",
    technologies: ["React Native", "JavaScript / JSX", "React Navigation", "Expo", "API REST (PokéAPI)"],
    features: [
      "Affichage des Pokémon : Liste dynamique des Pokémon via appel à l’API.",
      "Filtrage par type : Sélection d’un type (feu, eau, plante, etc.) pour filtrer la liste des Pokémon.",
      "Expérience fluide : Aucun rechargement de page, tout se fait dynamiquement avec du JavaScript.",
      "Chargement dynamique : Données mises à jour en temps réel via requêtes HTTP."
    ],
    githubLink: "https://github.com/e-maccioni26/Pokemon_app"
  },  
] 