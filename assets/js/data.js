const PERSONAL_INFO = {
  firstName: 'Johny Olivier',
  lastName: 'AINAMBININA',
  title: 'Développeur Full-Stack & Fondateur ACOS',
  introduction: 'Étudiant en informatique à ITU Andoharanofotsy, fondateur du concept ACOS (AI Company Operating System). Je conçois des architectures logicielles robustes et des solutions full-stack avec une approche industrialisée du développement assisté par IA.',
  shortBio: 'Fondateur du concept ACOS (AI Company Operating System), étudiant en informatique à ITU Andoharanofotsy. Passionné par l\'architecture logicielle, le développement full-stack et l\'orchestration IA.',
  interests: ['les jeux vidéo', 'le basketball', 'l\'intelligence artificielle'],
  location: 'Antananarivo, Madagascar'
};

const CONTACT_INFO = {
  email: 'johny24.poseidon@gmail.com',
  phone: '038 32 197 87',
  phone2: '037 43 981 73',
  github: 'https://github.com/Johny-olivier',
  facebook: 'https://www.facebook.com/lion.johny.9',
  linkedin: 'https://www.linkedin.com/in/johny-olivier-ainambinina-2a6b25343/'
};

const STATISTICS = [
  { number: '25+', label: 'Projets réalisés' },
  { number: '15+', label: 'Technologies maîtrisées' },
  { number: '3+', label: "Années d'expérience" },
  { number: '1', label: 'Concept ACOS fondé' }
];

const SKILLS_FRONTEND = [
  { name: 'HTML5', icon: 'ph ph-code', level: 'avancé' },
  { name: 'CSS3', icon: 'ph ph-palette', level: 'avancé' },
  { name: 'JavaScript', icon: 'ph ph-code-block', level: 'avancé' },
  { name: 'TypeScript', icon: 'ph ph-brackets-curly', level: 'intermédiaire' },
  { name: 'React', icon: 'ph ph-atom', level: 'intermédiaire' },
  { name: 'Next.js', icon: 'ph ph-lightning', level: 'intermédiaire' },
  { name: 'Tailwind CSS', icon: 'ph ph-wind', level: 'intermédiaire' },
  { name: 'Bootstrap', icon: 'ph ph-columns', level: 'intermédiaire' },
];

const SKILLS_BACKEND = [
  { name: 'PHP', icon: 'ph ph-code', level: 'avancé' },
  { name: 'Laravel', icon: 'ph ph-lightning', level: 'intermédiaire' },
  { name: 'Java', icon: 'ph ph-coffee', level: 'avancé' },
  { name: 'Spring Boot', icon: 'ph ph-flower', level: 'intermédiaire' },
  { name: 'Node.js', icon: 'ph ph-code', level: 'intermédiaire' },
  { name: 'Python', icon: 'ph ph-terminal', level: 'intermédiaire' },
  { name: 'FastAPI', icon: 'ph ph-lightning', level: 'intermédiaire' },
  { name: 'Express', icon: 'ph ph-server', level: 'intermédiaire' },
  { name: 'C', icon: 'ph ph-copyright', level: 'intermédiaire' },
];

const SKILLS_ARCHITECTURE = [
  { name: 'MVC', icon: 'ph ph-share-network', level: 'avancé' },
  { name: 'DAO', icon: 'ph ph-stack', level: 'avancé' },
  { name: 'DDD', icon: 'ph ph-cube', level: 'intermédiaire' },
  { name: 'Client-Serveur', icon: 'ph ph-network', level: 'avancé' },
  { name: 'REST API', icon: 'ph ph-cube', level: 'intermédiaire' },
  { name: 'ECS', icon: 'ph ph-shapes', level: 'intermédiaire' },
  { name: 'POO avancée', icon: 'ph ph-shapes', level: 'avancé' }
];

const SKILLS_DATABASES = [
  { name: 'MySQL', icon: 'ph ph-database', level: 'avancé' },
  { name: 'PostgreSQL', icon: 'ph ph-database', level: 'intermédiaire' },
  { name: 'SQLite', icon: 'ph ph-database', level: 'intermédiaire' },
  { name: 'Oracle', icon: 'ph ph-database', level: 'débutant' },
  { name: 'Prisma', icon: 'ph ph-database', level: 'intermédiaire' },
];

const SKILLS_AI = [
  { name: 'Ollama', icon: 'ph ph-robot', level: 'avancé' },
  { name: 'LLM', icon: 'ph ph-brain', level: 'intermédiaire' },
  { name: 'Prompt Engineering', icon: 'ph ph-chats', level: 'avancé' },
  { name: 'MCP', icon: 'ph ph-plugs', level: 'intermédiaire' },
  { name: 'ACOS', icon: 'ph ph-lightbulb', level: 'avancé' },
  { name: 'Tauri', icon: 'ph ph-window', level: 'débutant' },
];

const SKILLS_TOOLS = [
  { name: 'Git', icon: 'ph ph-git-branch', level: 'avancé' },
  { name: 'GitHub', icon: 'ph ph-github-logo', level: 'avancé' },
  { name: 'Docker', icon: 'ph ph-shipping-container', level: 'intermédiaire' },
  { name: 'Maven', icon: 'ph ph-package', level: 'avancé' },
  { name: 'Linux', icon: 'ph ph-terminal-window', level: 'avancé' },
  { name: 'Bash', icon: 'ph ph-scroll', level: 'intermédiaire' },
  { name: 'Figma', icon: 'ph ph-figma-logo', level: 'débutant' },
];

const EDUCATION = [
  {
    title: 'Licence en Informatique (En cours)',
    institution: 'IT University Andoharanofotsy',
    period: 'Oct. 2024 – Présent',
    description: 'L2 Computer Science — Spécialisation en développement web et architecture logicielle.',
    icon: 'ph ph-graduation-cap'
  },
  {
    title: 'Année Préparatoire',
    institution: 'Programme SESAME Ambatoroka',
    period: '2023 – 2024',
    description: "Préparation intensive pour études d'ingénieur informatique.",
    icon: 'ph ph-graduation-cap'
  },
  {
    title: 'Terminale Série S (Mention Bien)',
    institution: 'CIC Mananjary',
    period: '2022 – 2023',
    description: 'Baccalauréat série scientifique avec distinction.',
    icon: 'ph ph-graduation-cap'
  }
];

const EXPERIENCE = [
  {
    title: 'Fondateur & CEO — Concept ACOS',
    company: 'AI Company Operating System',
    period: '2026 – Présent',
    description: 'Création et développement du concept ACOS, un système d\'exploitation conceptuel pour entreprises IA.',
    tasks: [
      'Conception d\'un framework standardisé pour orchestrer le développement assisté par IA',
      'Définition de 8 documents fondateurs (architecture, processus, standards, templates)',
      'Développement d\'ACOS-O, l\'orchestrateur qui implémente le concept ACOS dans son propre développement',
      'Architecture DDD avec backend Express/SQLite et frontend React/Zustand'
    ]
  },
  {
    title: 'Hackathon ITU Website Redesign',
    company: 'ITU Andoharanofotsy',
    period: 'Fev. 2026',
    description: 'Redesign complet du site web de l\'école lors d\'un hackathon interne.',
    tasks: [
      'Refonte complète de l\'architecture et de l\'interface utilisateur',
      'Amélioration de l\'expérience utilisateur (UX) et de la navigation',
      'Projet disponible sur GitHub'
    ],
    link: 'https://github.com/Johny-olivier/itu-website-redesign'
  },
  {
    title: 'Hackathon CodinGame / Orange',
    company: 'CodinGame × Orange',
    period: 'Déc. 2025',
    description: 'Participation au Hackathon national de coding contest.',
    tasks: [
      'Résolution de problèmes algorithmiques complexes sous contrainte de temps',
      'Optimisation avancée des performances (Coding Contest)',
      'Classement compétitif parmi les participants'
    ]
  },
  {
    title: 'Stagiaire Développeur WordPress',
    company: 'Mada Creative Agency',
    period: 'Juin – Nov 2024',
    description: 'Stagiaire développeur WordPress avec responsabilités multiples.',
    tasks: [
      'Intégration et personnalisation HTML/CSS de thèmes WordPress',
      'Optimisation SEO et gestion de contenu',
      'Développement de solutions web personnalisées'
    ]
  }
];

const PROJECTS = [
  {
    id: 1,
    title: 'ACOS — AI Company Operating System',
    description: "Système d'exploitation conceptuel pour entreprises IA. Framework standardisé pour orchestrer le développement assisté par IA avec une hiérarchie CEO → Architectes → Développeurs IA.",
    stack: ['Concept', 'Architecture', 'Documentation', 'Standards'],
    github: 'https://github.com/Johny-olivier/acos',
    featured: true
  },
  {
    id: 2,
    title: 'ACOS Orchestrator (ACOS-O)',
    description: "Application web locale qui automatise l'exploitation d'ACOS. Implémente le concept ACOS dans son propre développement. Architecture DDD avec file watching, SSE et gestion de tâches IA.",
    stack: ['TypeScript', 'React', 'Express', 'SQLite', 'Zustand', 'TailwindCSS'],
    github: 'https://github.com/Johny-olivier/acos-orchestrator',
    featured: true
  },
  {
    id: 3,
    title: 'Local AI Agent',
    description: "Assistant IA 100 % local avec accès système complet. Shell interactif, lecture de documents, mémoire sémantique, recherche web. Application desktop native Tauri.",
    stack: ['Python', 'FastAPI', 'Next.js', 'Tauri', 'Ollama', 'LLM'],
    github: 'https://github.com/Johny-olivier/local-ai-agent',
    featured: true
  },
  {
    id: 4,
    title: 'Contra 1990 Remake',
    description: "Remake complet du jeu légendaire Contra avec architecture ECS. 8 niveaux, 8 boss, système d'armes, particules, animations et audio. Moteur de jeu écrit de zéro.",
    stack: ['Python', 'Pygame', 'ECS', 'Game Engine'],
    github: 'https://github.com/Johny-olivier/contra-1990-remake',
    featured: true
  },
  {
    id: 5,
    title: 'Facebook Clone',
    description: "Clone fonctionnel de Facebook avec API REST complète, messagerie WebSocket temps réel, authentification SPA, fil d'actualités, stories et système d'amis.",
    stack: ['Laravel', 'React', 'WebSocket', 'SQLite', 'Sanctum'],
    github: 'https://github.com/Johny-olivier/facebook-clone',
    featured: true
  },
  {
    id: 6,
    title: 'FootLive',
    description: "Application de livescore football multi-compétitions en temps réel. Cache intelligent, agrégation de données depuis 2 API, support de 13 ligues internationales.",
    stack: ['React', 'Node.js', 'Express', 'TailwindCSS', 'API'],
    github: 'https://github.com/Johny-olivier/footlive',
    featured: true
  },
  {
    id: 7,
    title: 'Family Private',
    description: "Réseau social familial privé avec chiffrement AES-256-GCM, authentification multi-facteurs, messagerie privée, galerie multimédia et backoffice administrateur.",
    stack: ['PHP', 'MySQL', 'MVC', 'AES-256', 'JavaScript'],
    github: 'https://github.com/Johny-olivier/family-private',
    featured: true
  },
  {
    id: 8,
    title: 'PC Monitor',
    description: "Application client-serveur pour le monitoring en temps réel des performances système (CPU, RAM) via Sockets avec interface Swing.",
    stack: ['Java', 'Sockets', 'Swing', 'Maven'],
    github: 'https://github.com/Johny-olivier/pc-monitor',
    featured: true
  },
  {
    id: 9,
    title: 'SIG Madagascar',
    description: "Système d'Information Géographique pour les routes de Madagascar. Visualisation spatiale et gestion de données géographiques.",
    stack: ['Java', 'Maven', 'PostGIS', 'Docker'],
    github: 'https://github.com/Johny-olivier/sig-madagascar',
    featured: false
  },
  {
    id: 10,
    title: 'Interface Samba',
    description: "Interface de gestion moderne pour serveur Samba, permettant de gérer les partages réseau et les utilisateurs.",
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Johny-olivier/interface-samba',
    featured: false
  },
  {
    id: 11,
    title: 'Terrain ML Analysis',
    description: "Analyse et prédiction de types de terrains via Machine Learning avec visualisation interactive sur carte.",
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/Johny-olivier/terrain-ml-analysis',
    featured: false
  }
];

const NAV_LINKS = [
  { label: 'À propos', href: '#about' },
  { label: 'Compétences', href: '#skills' },
  { label: 'Parcours', href: '#education' },
  { label: 'Expériences', href: '#experience' },
  { label: 'Projets', href: '#projects' },
  { label: 'Contact', href: '#contact' }
];
