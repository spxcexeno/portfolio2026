/* ==========================================================================
   DONNÉES DU PORTFOLIO
   --------------------------------------------------------------------------
   Pour ajouter un projet : copie un bloc { ... } dans PROJECTS et remplis-le.
   Pour ajouter une procédure : même principe dans PROCEDURES
   (le texte entre `accents graves` s'affiche comme une commande).
   Rien d'autre à toucher, les cartes et les fenêtres de détail sont générées
   automatiquement.

   Champs "bloc1" (compétences du référentiel BTS SIO, bloc 1) :
     patrimoine  → Gérer le patrimoine informatique
     incidents   → Répondre aux incidents et aux demandes d'assistance
     enligne     → Développer la présence en ligne de l'organisation
     projet      → Travailler en mode projet
     service     → Mettre à disposition des utilisateurs un service informatique
     devpro      → Organiser son développement professionnel
   ========================================================================== */

window.PORTFOLIO = {
  PROJECTS: [
    {
      id: "club-foot",
      title: "Projet AP SIO 2",
      kind: "Atelier professionnel · SIO 2",
      year: "2026 — 2027",
      status: "En cours",
      cover: null,
      accent: "#A8B5A2",
      summary:
        "Application web de gestion d'un club de football : équipes, joueurs, matchs, entraînements, performances et objectifs individuels.",
      context:
        "Atelier professionnel de deuxième année, développé avec le framework Symfony. L'application doit permettre à un club de suivre ses équipes de U7 à vétérans, d'organiser les entraînements et les rencontres, et de suivre la progression de chaque joueur. Trois profils d'utilisateurs sont prévus : administrateur, entraîneur et joueur. Le projet est en cours : la base de données est en place, les écrans arrivent ensuite.",
      stack: ["PHP 8.4", "Symfony 8", "Doctrine ORM", "Twig", "Git"],
      missions: [
        {
          group: "Base de données",
          items: [
            "Modélisation de 7 entités : Utilisateur, Équipe, Joueur, Rencontre, Entraînement, Performance, Objectif",
            "Relations Doctrine entre les entités (un-à-un, un-à-plusieurs, plusieurs-à-un)",
            "Création du schéma par migrations Doctrine",
            "Jeu de données de test avec des fixtures",
          ],
        },
        {
          group: "Règles métier",
          items: [
            "Rôles utilisateurs : administrateur, entraîneur, joueur",
            "Catégories d'équipes (U7 à Seniors et Vétérans), postes et pied fort des joueurs",
            "Types de rencontres : championnat, coupe, tournoi, amical",
            "Statistiques par match : temps de jeu, buts, passes décisives, cartons, note",
            "Objectifs individuels avec statut : en cours, validé, abandonné",
          ],
        },
      ],
      bloc1: ["enligne", "projet", "devpro"],
      links: [],
    },

    {
      id: "cinetrack",
      title: "CineTrack MVC",
      kind: "TP · SIO 2",
      year: "2026 — 2027",
      status: "En cours",
      cover: null,
      accent: "#D9774B",
      summary:
        "Application web de catalogue de films en C# avec ASP.NET Core, construite selon le modèle MVC (Modèle, Vue, Contrôleur).",
      context:
        "Travail pratique pour apprendre l'architecture MVC avec ASP.NET Core. L'application liste des films, affiche la fiche détaillée de chacun et permet de filtrer les films sortis après une année donnée. La persistance avec Entity Framework Core et SQLite est en cours de mise en place.",
      stack: ["C#", ".NET 10", "ASP.NET Core MVC", "Razor", "Entity Framework Core", "SQLite"],
      missions: [
        {
          group: "Développement",
          items: [
            "Modèle Film : titre, année de sortie, réalisateur",
            "Contrôleur Films avec trois actions : liste, détails, films sortis après une année",
            "Gestion du film introuvable avec une réponse 404",
            "Filtrage des films avec LINQ",
            "Vues Razor pour la liste et la fiche d'un film",
          ],
        },
        {
          group: "Données",
          items: ["Contexte Entity Framework Core prêt pour une base SQLite"],
        },
      ],
      bloc1: ["enligne", "devpro"],
      links: [{ label: "Code source sur GitHub", href: "https://github.com/spxcexeno/TP-MVC-Films-reconstruction.md" }],
    },

    {
      id: "koo2fourchette",
      title: "Koo2Fourchette",
      kind: "Atelier professionnel · SIO 1",
      year: "2025 — 2026",
      cover: "assets/img/koo2fourchette.png",
      accent: "#D9774B",
      summary:
        "Refonte et auto-hébergement du site d'un service de partage de recettes : de la maquette HTML jusqu'à l'infrastructure réseau complète, dans un scénario d'entreprise réaliste.",
      context:
        "La société Koo_2_fourchette, spécialisée dans la mise en ligne de recettes par des particuliers, veut un site au design actuel et quitter son hébergement chez un FAI pour passer en auto-hébergement. Embauché dans l'entreprise, je dois concevoir le nouveau site ET mettre en place toute l'infrastructure système et réseau qui l'héberge.",
      stack: ["HTML", "CSS", "PHP", "MySQL", "Linux", "Apache", "SSH", "VirtualBox", "FTP", "Git", "Trello"],
      missions: [
        {
          group: "Développement",
          items: [
            "Maquette HTML / CSS de la page d'accueil",
            "Page de test de connexion PHP ↔ MySQL",
            "Site dynamique conforme à la maquette avec CRUD utilisateurs et recettes",
          ],
        },
        {
          group: "Système",
          items: [
            "Serveur web et base de données sur VirtualBox (réseau NAT)",
            "Activation et test de SSH sur le serveur web",
            "Installation d'Apache, puis ajout et test de PHP",
            "Serveur FTP de sauvegarde, accessible uniquement depuis le serveur web (réseau interne)",
          ],
        },
        {
          group: "Réseau",
          items: [
            "Redirection de ports : 8080 → 80 (HTTP) et 2222 → 22 (SSH)",
            "Passage NAT → pont avec IP statique en 192.168.X.0/29",
            "Routage sur les équipements pour rendre le site accessible aux autres",
            "Schéma réseau de l'infrastructure",
          ],
        },
        {
          group: "Gestion de projet",
          items: [
            "Versionnement des configurations serveur et du code avec Git",
            "Suivi des tâches sur Trello",
            "Rédaction des procédures associées à chaque action",
          ],
        },
      ],
      bloc1: ["patrimoine", "enligne", "projet", "service", "devpro"],
      links: [
        { label: "Cahier des charges (PDF)", href: "assets/docs/projet-ap-sio1-koo2fourchette.pdf" },
        { label: "Procédure : redirection de port", href: "assets/docs/procedure-redirection-port.pdf" },
        { label: "Procédure : IP statique", href: "assets/docs/procedure-ip-statique.pdf" },
      ],
    },

    {
      id: "portfolio",
      title: "Portfolio",
      kind: "Projet personnel",
      year: "2025 — 2026",
      cover: null,
      accent: "#A8B5A2",
      summary:
        "Conception de ce portfolio : une vitrine de mon parcours en BTS SIO, codée à la main sans framework et versionnée sur GitHub.",
      context:
        "Pour présenter mes réalisations dans le cadre du BTS (épreuve E5) et de ma recherche de stage, j'ai créé mon propre portfolio. La première version a été entièrement refondue pour une identité plus professionnelle, plus lisible et animée.",
      stack: ["HTML", "CSS", "JavaScript", "Git", "GitHub"],
      missions: [
        {
          group: "Développement",
          items: [
            "Intégration HTML sémantique et CSS responsive (mobile → desktop)",
            "Animations au défilement en JavaScript natif (IntersectionObserver)",
            "Contenu généré depuis un fichier de données unique pour faciliter les ajouts",
            "Formulaire de contact relié à un service d'envoi de mails",
          ],
        },
        {
          group: "Gestion de projet",
          items: ["Versionnement avec Git et hébergement du code sur GitHub"],
        },
      ],
      bloc1: ["enligne", "projet", "devpro"],
      links: [{ label: "Code source sur GitHub", href: "https://github.com/spxcexeno/portfolio2026" }],
    },

    /* ----- MODÈLE À COPIER POUR UN NOUVEAU PROJET -----------------------
    {
      id: "mon-projet",                 // identifiant unique, sans espace
      title: "Nom du projet",
      kind: "Atelier professionnel · SIO 2",
      year: "2026 — 2027",
      status: "En cours",               // à retirer une fois le projet terminé
      cover: "assets/img/mon-image.png", // ou null
      accent: "#D9774B",
      summary: "Une phrase qui résume le projet.",
      context: "Le contexte, la demande du client, ton rôle.",
      stack: ["PHP", "MySQL"],
      missions: [
        { group: "Développement", items: ["Tâche 1", "Tâche 2"] },
      ],
      bloc1: ["enligne", "projet"],
      links: [{ label: "Documentation (PDF)", href: "assets/docs/mon-doc.pdf" }],
    },
    --------------------------------------------------------------------- */
  ],

  PROCEDURES: [
    {
      title: "Redirection de port en réseau NAT",
      tool: "VirtualBox",
      date: "Déc. 2025",
      image: "assets/img/vbox.jpg",
      href: "assets/docs/procedure-redirection-port.pdf",
      project: "Koo2Fourchette",
      steps: [
        "Ouvrir la configuration de la machine virtuelle",
        "Rubrique Réseau → mode d'accès « Réseau NAT »",
        "Ajouter les règles de redirection (8080 → 80, 2222 → 22)",
      ],
    },
    {
      title: "Configurer une adresse IP statique",
      tool: "Windows · netsh",
      date: "2025",
      image: "assets/img/adresse-ip.jpg",
      href: "assets/docs/procedure-ip-statique.pdf",
      project: "Réseau",
      steps: [
        "Lister les interfaces : `netsh interface ipv4 show interfaces`",
        "Fixer IP, masque et passerelle avec `netsh interface ipv4 set address`",
        "Déclarer les DNS (8.8.8.8 / 1.1.1.1) puis vérifier avec `ipconfig /all` et `ping`",
      ],
    },
  ],

  BLOC1: {
    patrimoine: "Gérer le patrimoine informatique",
    incidents: "Répondre aux incidents et aux demandes d'assistance et d'évolution",
    enligne: "Développer la présence en ligne de l'organisation",
    projet: "Travailler en mode projet",
    service: "Mettre à disposition des utilisateurs un service informatique",
    devpro: "Organiser son développement professionnel",
  },
};
