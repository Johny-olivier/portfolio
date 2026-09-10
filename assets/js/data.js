/* Profil conservé depuis la version courante. Projets enrichis depuis les README GitHub publics le 10 septembre 2026. */
const PROFILE = {
  name: "Johny Olivier",
  fullName: "AINAMBININA Johny Olivier",
  title: "Développeur full-stack junior",
  email: "ainambininajohnyolivier@gmail.com",
  phones: ["038 32 197 87", "037 43 981 73"],
  location: "Antananarivo, Madagascar",
  github: "https://github.com/Johny-olivier",
  intro:
    "Étudiant en développement informatique à IT University, passionné par le développement web, curieux, rigoureux et orienté solution. Je cherche à contribuer à des projets concrets et à apprendre en continu.",
  goal: "Je souhaite contribuer au développement d’applications web et renforcer ma pratique au sein d’une équipe technique.",
  languages: [
    "Français · courant",
    "Anglais · intermédiaire",
    "Malagasy · natif",
  ],
  interests: ["Jeux vidéo", "Basketball"],
};

const SKILLS = [
  {
    id: "backend",
    title: "Backend",
    level: "Backend",
    description: "La logique, l'architecture et les données.",
    icon: "code",
    niveaux: {
      avance: ["PHP", "Java"],
      intermediaire: [
        "Laravel",
        "FlightPHP",
        "CodeIgniter",
        "Spring",
        "Spring Boot",
        "Python",
      ],
      debutant: ["Node.js"],
    },
  },
  {
    id: "frontend",
    title: "Frontend",
    level: "Frontend",
    description: "L'interface, le rendu et l'expérience utilisateur.",
    icon: "monitor",
    niveaux: {
      avance: ["HTML5", "CSS3", "JavaScript"],
      intermediaire: ["Bootstrap"],
      debutant: ["React", "Angular", "TypeScript", "Tailwind"],
    },
  },
  {
    id: "architecture",
    title: "Architecture & Concepts",
    level: "Architecture & Concepts",
    description: "Patrons de conception et bonnes pratiques.",
    icon: "layers",
    niveaux: {
      avance: ["MVC", "POO avancée", "REST API", "Client-Serveur"],
      intermediaire: ["Authentification"],
      debutant: ["DAO"],
    },
  },
  {
    id: "databases",
    title: "Bases de Données",
    level: "Bases de Données",
    description: "Stockage et persistance.",
    icon: "layers",
    niveaux: {
      avance: ["MySQL"],
      intermediaire: ["PostgreSQL", "SQLite"],
      debutant: ["Oracle", "Microsoft SQL Server"],
    },
  },
  {
    id: "outils",
    title: "Outils, Systèmes & IA",
    level: "Outils, Systèmes & IA",
    description: "Environnement de développement et IA.",
    icon: "code",
    niveaux: {
      avance: ["XAMPP", "Tomcat", "Opencode", "Gemini CLI", "Codex CLI"],
      intermediaire: ["Git", "Docker", "Maven", "Linux (Ubuntu)"],
      debutant: ["DBeaver", "FileZilla", "Windows 11", "Cline", "Ollama"],
    },
  },
];

const PROJECTS = [
  {
    id: "family-private",
    name: "Family Private",
    category: "web",
    type: "Réseau social privé",
    featured: true,
    description:
      "Un espace familial pour échanger, publier des photos et garder ses conversations privées.",
    detail:
      "Application en PHP natif organisée en MVC, avec publications, réactions, galerie multimédia et administration.",
    features: [
      "Comptes et authentification avec Argon2ID",
      "Discussions privées avec PIN et chiffrement AES-256-GCM",
      "Publications, commentaires et galerie multimédia",
    ],
    stack: ["PHP", "MySQL", "JavaScript", "MVC"],
    icon: "code",
    tone: "sage",
    assisted: false,
    github: "https://github.com/Johny-olivier/family-private",
    source: "https://github.com/Johny-olivier/family-private#readme",
    label: "Réseau social privé",
  },
  {
    id: "pc-monitor",
    name: "PC Monitor",
    category: "systeme",
    type: "Application client-serveur",
    featured: true,
    description:
      "Surveiller à distance les ressources d’un ordinateur depuis une interface Java.",
    detail:
      "Un serveur collecte les données du système et un client les affiche dans une interface Swing ou en ligne de commande.",
    features: [
      "Suivi du CPU, de la mémoire, des disques et du réseau",
      "Découverte des serveurs sur le réseau local",
      "Consultation et gestion des processus à distance",
    ],
    stack: ["Java", "Maven", "Swing", "Sockets TCP"],
    icon: "monitor",
    tone: "sand",
    assisted: false,
    github: "https://github.com/Johny-olivier/pc-monitor",
    source: "https://github.com/Johny-olivier/pc-monitor#readme",
    label: "Application client-serveur",
  },
  {
    id: "local-ai-agent",
    name: "Local AI Agent",
    category: "ia",
    type: "Assistant IA local",
    featured: true,
    description:
      "Interagir avec ses documents et ses outils grâce à des modèles exécutés avec Ollama.",
    detail:
      "Assistant local pour Linux, avec interface web et fenêtre de bureau Tauri. Projet personnel réalisé avec l’assistance d’outils d’IA.",
    features: [
      "Lecture de documents et mémoire des échanges",
      "Connexion à des outils MCP",
      "Interface de bureau et gestion de modèles Ollama",
    ],
    stack: ["Python", "FastAPI", "Next.js", "Tauri", "Ollama"],
    icon: "chat",
    tone: "lilac",
    assisted: true,
    github: "https://github.com/Johny-olivier/local-ai-agent",
    source: "https://github.com/Johny-olivier/local-ai-agent#readme",
    label: "Assistant IA local · Assisté par IA",
  },
  {
    id: "schedule-handler",
    name: "Schedule Handler",
    category: "web",
    type: "Gestion d’emploi du temps",
    featured: true,
    description:
      "Organiser ses activités avec des horaires précis et une gestion simple du planning.",
    detail:
      "Application web de gestion d’emploi du temps. Le README documente une installation PHP et MySQL et le stockage des activités avec heures de début et de fin.",
    features: [
      "Organisation des activités par créneaux horaires",
      "Gestion des horaires de début et de fin",
      "Stockage des plannings en base MySQL",
    ],
    stack: ["PHP", "MySQL", "JavaScript"],
    icon: "layers",
    tone: "sand",
    assisted: null,
    github: "https://github.com/Johny-olivier/schedule-handler",
    source: "https://github.com/Johny-olivier/schedule-handler#readme",
    label: "Gestion d’emploi du temps",
  },
  {
    id: "mini-framework-java",
    name: "Mini Framework Java",
    category: "systeme",
    type: "Exploration d’architecture",
    featured: true,
    description:
      "Comprendre les fondations d’un framework en les construisant en Java.",
    detail:
      "Projet de framework Java développé à partir de zéro. Le dépôt annonce l’objectif d’explorer des fonctionnalités inspirées de Spring Boot, notamment un ORM ; il ne documente pas leur niveau d’achèvement.",
    features: [
      "Expérimentation autour de la conception d’un framework",
      "Objectif annoncé : explorer des mécanismes de type ORM",
    ],
    stack: ["Java", "Architecture"],
    icon: "code",
    tone: "blue",
    assisted: null,
    github: "https://github.com/Johny-olivier/mini-framework-java",
    source: "https://github.com/Johny-olivier/mini-framework-java#readme",
    label: "Exploration d’architecture",
  },
  {
    id: "footlive",
    name: "FootLive",
    category: "web",
    type: "Scores & compétitions",
    featured: true,
    description:
      "Retrouver les matchs, les résultats et les classements de plusieurs ligues de football.",
    detail:
      "Application de livescore multi-compétitions, avec frontend React et backend Node.js / Express. Projet réalisé avec l’assistance d’outils d’IA.",
    features: [
      "Matchs, classements et résultats multi-compétitions",
      "Intégration de football-data.org et OpenLigaDB",
      "Interface React et Tailwind CSS",
    ],
    stack: ["React", "Node.js", "Express", "Tailwind CSS"],
    icon: "layers",
    tone: "sage",
    assisted: true,
    github: "https://github.com/Johny-olivier/footlive",
    source: "https://github.com/Johny-olivier/footlive#readme",
    label: "Scores & compétitions · Assisté par IA",
  },
  {
    id: "facebook-clone",
    name: "Facebook Clone",
    category: "web",
    type: "Application sociale",
    featured: false,
    description:
      "Explorer une application sociale avec authentification et échanges en temps réel.",
    detail:
      "Application full-stack avec une API Laravel et une interface React. Projet réalisé avec l’assistance d’outils d’IA.",
    features: [
      "Authentification SPA avec Sanctum",
      "Temps réel avec Laravel Reverb et Echo",
      "Frontend React et Vite, base SQLite",
    ],
    stack: ["Laravel", "React", "SQLite", "Reverb"],
    icon: "code",
    tone: "blue",
    assisted: true,
    github: "https://github.com/Johny-olivier/facebook-clone",
    source: "https://github.com/Johny-olivier/facebook-clone#readme",
    label: "Application sociale · Assisté par IA",
  },
  {
    id: "acos-orchestrator",
    name: "ACOS Orchestrator",
    category: "ia",
    type: "Organisation de projets IA",
    featured: false,
    description:
      "Centraliser les tâches et le suivi de projets assistés par IA dans une application locale.",
    detail:
      "Application web locale avec un backend Node.js, une interface React et une base SQLite. Les documents et le code des projets restent dans leurs dossiers. Projet assisté par IA.",
    features: [
      "Gestion locale des tâches, statuts et assignations",
      "Suivi des exécutions et des livrables",
      "Documentation et code conservés sur le disque",
    ],
    stack: ["TypeScript", "React", "Node.js", "SQLite"],
    icon: "layers",
    tone: "lilac",
    assisted: true,
    github: "https://github.com/Johny-olivier/acos-orchestrator",
    source: "https://github.com/Johny-olivier/acos-orchestrator#readme",
    label: "Organisation de projets IA · Assisté par IA",
  },
  {
    id: "contra-1990-remake",
    name: "Contra 1990 Remake",
    category: "systeme",
    type: "Jeu vidéo",
    featured: false,
    description:
      "Revisiter un classique du jeu vidéo avec une architecture ECS en Python.",
    detail:
      "Remake de Contra en Python et Pygame, organisé autour d’un moteur, d’entités, d’armes, de niveaux et de boss.",
    features: [
      "Architecture Entity Component System",
      "Physique, collisions et animations",
      "Effets visuels, particules et audio",
    ],
    stack: ["Python", "Pygame", "ECS"],
    icon: "monitor",
    tone: "sand",
    assisted: false,
    github: "https://github.com/Johny-olivier/contra-1990-remake",
    source: "https://github.com/Johny-olivier/contra-1990-remake#readme",
    label: "Jeu vidéo",
  },
  {
    id: "acos",
    name: "ACOS",
    category: "ia",
    type: "Méthode & documentation",
    featured: false,
    description:
      "Structurer le travail entre un développeur et des agents IA spécialisés.",
    detail:
      "Projet personnel de documentation proposant des rôles, des contrats partagés et des conventions pour organiser le développement assisté par IA.",
    features: [
      "Définition de rôles et de périmètres de travail",
      "Conventions techniques et documentation",
      "Modèles de prompts et suivi des tâches",
    ],
    stack: ["Organisation", "Documentation", "IA"],
    icon: "layers",
    tone: "sage",
    assisted: false,
    github: "https://github.com/Johny-olivier/acos",
    source: "https://github.com/Johny-olivier/acos#readme",
    label: "Méthode & documentation",
  },
  {
    id: "mini-sgbd",
    name: "Mini SGBD en Malagasy",
    category: "systeme",
    label: "Expérimentation Java",
    description: "Algèbre relationnelle implémentée de zéro.",
    detail:
      "Moteur SQL simplifié en Malagasy (SELECT, INSERT, UPDATE, DELETE).",
    stack: ["Java", "Algèbre relationnelle"],
    symbol: "DB",
    visual: "orchestrator",
    assisted: null,
    type: "Expérimentation Java",
    featured: false,
    icon: "layers",
    tone: "blue",
    github: null,
    features: ["Algèbre relationnelle", "Commandes de données en Malagasy"],
  },
];

const EDUCATION = [
  {
    date: "2024 — Aujourd’hui",
    title: "Licence 3 en informatique",
    place: "IT University · Andoharanofotsy",
    detail: "En cours · Début en octobre 2024",
  },
  {
    date: "2023 — 2024",
    title: "Année préparatoire",
    place: "Programme SESAME · Ambatoroka",
    detail: "Préparation aux études supérieures",
  },
  {
    date: "2022 — 2023",
    title: "Baccalauréat · Série S",
    place: "CIC Mananjary",
    detail: "Mention Bien",
  },
];

const EXPERIENCE = [
  {
    date: "Juin — Nov. 2024",
    title: "Stagiaire développeur WordPress",
    place: "Mada Creative Agency",
    detail:
      "Intégration et personnalisation de pages WordPress en HTML/CSS, adaptation responsive, optimisation SEO et gestion de contenu.",
  },
  {
    date: "Décembre 2025",
    title: "Hackathon CodinGame / Orange",
    place: "Concours d’optimisation algorithmique",
    detail: "Participation à un concours d’optimisation algorithmique.",
  },
];
