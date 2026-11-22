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
      id: "gestion-club",
      title: "Gestion de club M2L",
      kind: "Atelier professionnel · SIO 2",
      year: "2026 — 2027",
      status: "En cours",
      cover: null,
      accent: "#A8B5A2",
      summary:
        "Webapp de gestion de club sportif pour la Maison des Ligues de Lorraine : adhérents, entraînements, compétitions, objectifs et performances.",
      context:
        "La M2L, association de clubs sportifs, veut une webapp pour suivre ses adhérents, améliorer les performances de ses sportifs en compétition et donner aux plus jeunes l'envie de mieux s'entraîner : une sorte de « Doctolib » du club de sport, sous licence GPL pour pouvoir être réutilisée par d'autres clubs. Une version bêta est attendue pour décembre. Le cahier des charges impose Symfony avec Twig et JavaScript, une base MySQL, une séparation nette entre frontend et backend, et une authentification sécurisée qui respecte le RGPD.",
      stack: ["PHP", "Symfony", "Doctrine ORM", "Twig", "JavaScript", "MySQL", "Git"],
      missions: [
        {
          group: "Réalisé",
          items: [
            "Modélisation de la base : utilisateurs, équipes, sportifs, rencontres, entraînements, performances et objectifs",
            "Trois rôles : administrateur, entraîneur (animateur) et sportif",
            "Création du schéma par migrations Doctrine et jeu de données de test (fixtures)",
          ],
        },
        {
          group: "Version 1 · en cours",
          items: [
            "Pages de connexion /login et de déconnexion /logout",
            "Interface administrateur : gestion des compétitions, des sportifs et des entraîneurs (CRUD Doctrine)",
            "Interface entraîneur : entraînements, équipes, inscriptions aux compétitions, objectifs de chaque adhérent",
            "Consultation de ses objectifs côté sportif",
            "Interface responsive de type tableau de bord",
          ],
        },
        {
          group: "Évolutions prévues",
          items: [
            "Statistiques sur les résultats avec graphiques",
            "Indice de performance : performance en compétition × engagement",
            "Fiche du sportif exportée en PDF",
            "Import de sportifs ou de compétitions en XML ou JSON",
          ],
        },
      ],
      bloc1: ["patrimoine", "enligne", "projet", "service", "devpro"],
      links: [],
    },

    {
      id: "cinetrack",
      title: "CineTrack",
      kind: "Projet CDA · SIO 2 · en équipe",
      year: "2026 — 2027",
      status: "En cours",
      cover: null,
      accent: "#D9774B",
      team: ["Jayden AKOI", "Evan MONNERVILLE", "Lucas ROUZAIRE"],
      summary:
        "Application de découverte et de réservation de films au cinéma, développée à trois en C# avec ASP.NET Core.",
      context:
        "CineTrack regroupe dans une seule application les informations sur les films, les séances et les réservations des utilisateurs. Le projet se fait en équipe de trois avec une méthode de travail professionnelle : chaque membre est responsable d'au moins une fonctionnalité, identifiable sur GitHub par ses issues, ses commits et ses pull requests.",
      stack: ["C#", ".NET", "ASP.NET Core", "ASP.NET Core Identity", "Git", "GitHub Projects"],
      missions: [
        {
          group: "Fonctionnalités",
          items: [
            "Catalogue des films avec leur description",
            "Comptes utilisateurs : inscription, connexion et profil",
            "Formulaire de réservation d'une séance pour un film",
          ],
        },
        {
          group: "Comptes et sécurité",
          items: [
            "Rôles Admin et Utilisateur créés automatiquement au démarrage",
            "Premier administrateur défini par variables d'environnement, sans identifiants dans le dépôt",
            "Espace d'administration : créer des comptes, changer les rôles, supprimer un compte",
            "Un changement de rôle s'applique aux sessions ouvertes en 5 minutes au plus",
          ],
        },
        {
          group: "Travail en équipe",
          items: [
            "Suivi des tâches avec GitHub Issues et un tableau Kanban (GitHub Projects)",
            "Une branche par fonctionnalité, intégrée par pull request",
            "Revue de code entre membres de l'équipe",
            "Arborescence src / tests / docs et modèles d'issues et de pull requests",
          ],
        },
      ],
      bloc1: ["enligne", "projet", "service", "devpro"],
      links: [],
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

  /* Documents affichés dans « À propos », le menu mobile et le contact.
     Mettre href: null pour masquer un document pas encore disponible. */
  DOCUMENTS: [
    { label: "CV", file: "CV-Jayden-AKOI.pdf", href: "assets/docs/CV-Jayden-AKOI.pdf" },
    { label: "Lettre de motivation", file: "Lettre-motivation-Jayden-AKOI.pdf", href: "assets/docs/lettre-motivation-Jayden-AKOI.pdf" },
    { label: "Rapport de stage 1re année", file: "Rapport-stage-SIO1-Jayden-AKOI.pdf", href: null },
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
