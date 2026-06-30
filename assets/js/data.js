const PERSONAL_INFO = {
  firstName: 'Johny Olivier',
  lastName: 'AINAMBININA',
  title: 'Développeur Full-Stack Junior',
  introduction: 'Étudiant en informatique à ITU Andoharanofotsy, spécialisé en développement web avec une solide maîtrise du frontend et du backend. Je transforme des idées en solutions logicielles robustes.',
  shortBio: 'Étudiant passionné en informatique à ITU Andoharanofotsy avec une spécialisation en développement web et architecture logicielle. Rigoureux, curieux et orienté solution.',
  interests: ['les jeux vidéo', 'le basketball'],
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
  { number: '20+', label: 'Projets réalisés' },
  { number: '12+', label: 'Technologies maîtrisées' },
  { number: '3+', label: "Années d'expérience" },
  { number: '+90%', label: 'Dédié à l\'excellence' }
];

const SKILLS_FRONTEND = [
  { name: 'HTML5', icon: 'ph ph-code', level: 'avancé' },
  { name: 'CSS3', icon: 'ph ph-palette', level: 'avancé' },
  { name: 'JavaScript', icon: 'ph ph-code-block', level: 'avancé' },
  { name: 'TypeScript', icon: 'ph ph-brackets-curly', level: 'intermédiaire' },
  { name: 'React', icon: 'ph ph-atom', level: 'intermédiaire' },
  { name: 'Next.js', icon: 'ph ph-lightning', level: 'débutant' },
  { name: 'Bootstrap', icon: 'ph ph-columns', level: 'intermédiaire' },
  { name: 'Tailwind CSS', icon: 'ph ph-wind', level: 'intermédiaire' },
];

const SKILLS_BACKEND = [
  { name: 'PHP', icon: 'ph ph-code', level: 'avancé' },
  { name: 'Laravel', icon: 'ph ph-lightning', level: 'intermédiaire' },
  { name: 'Java', icon: 'ph ph-coffee', level: 'avancé' },
  { name: 'Spring Boot', icon: 'ph ph-flower', level: 'intermédiaire' },
  { name: 'Node.js', icon: 'ph ph-code', level: 'intermédiaire' },
  { name: 'Python', icon: 'ph ph-terminal', level: 'intermédiaire' },
  { name: 'CodeIgniter', icon: 'ph ph-fire', level: 'intermédiaire' },
  { name: 'FlightPHP', icon: 'ph ph-airplane', level: 'intermédiaire' },
  { name: 'Kotlin', icon: 'ph ph-code', level: 'débutant' },
  { name: 'C', icon: 'ph ph-copyright', level: 'intermédiaire' },
  { name: 'C#', icon: 'ph ph-hash', level: 'débutant' },
];

const SKILLS_ARCHITECTURE = [
  { name: 'MVC', icon: 'ph ph-share-network', level: 'avancé' },
  { name: 'DAO', icon: 'ph ph-stack', level: 'avancé' },
  { name: 'Client-Serveur', icon: 'ph ph-network', level: 'avancé' },
  { name: 'REST API', icon: 'ph ph-cube', level: 'intermédiaire' },
  { name: 'Authentification', icon: 'ph ph-lock-key', level: 'intermédiaire' },
  { name: 'POO avancée', icon: 'ph ph-shapes', level: 'avancé' }
];

const SKILLS_DATABASES = [
  { name: 'MySQL', icon: 'ph ph-database', level: 'avancé' },
  { name: 'PostgreSQL', icon: 'ph ph-database', level: 'intermédiaire' },
  { name: 'Oracle', icon: 'ph ph-database', level: 'débutant' },
  { name: 'SQL Server', icon: 'ph ph-database', level: 'débutant' }
];

const SKILLS_TOOLS = [
  { name: 'Git', icon: 'ph ph-git-branch', level: 'avancé' },
  { name: 'GitHub', icon: 'ph ph-github-logo', level: 'avancé' },
  { name: 'Docker', icon: 'ph ph-shipping-container', level: 'intermédiaire' },
  { name: 'Maven', icon: 'ph ph-package', level: 'avancé' },
  { name: 'DBeaver', icon: 'ph ph-database', level: 'intermédiaire' },
  { name: 'Figma', icon: 'ph ph-figma-logo', level: 'débutant' },
  { name: 'Android Studio', icon: 'ph ph-android-logo', level: 'débutant' }
];

const SKILLS_SYSTEMS = [
  { name: 'Linux', icon: 'ph ph-terminal', level: 'avancé' },
  { name: 'Windows', icon: 'ph ph-windows-logo', level: 'intermédiaire' },
  { name: 'Terminal/CLI', icon: 'ph ph-terminal', level: 'avancé' },
  { name: 'Bash', icon: 'ph ph-scroll', level: 'intermédiaire' },
  { name: 'SSH', icon: 'ph ph-key', level: 'intermédiaire' },
  { name: 'ROS2', icon: 'ph ph-robot', level: 'débutant' }
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
    title: 'SIG Madagascar',
    description: "Système d'Information Géographique pour les routes de Madagascar. Visualisation spatiale et gestion de données géographiques.",
    stack: ['Java', 'Maven', 'PostGIS', 'Docker'],
    github: 'https://github.com/Johny-olivier/sig-madagascar',
    featured: true
  },
  {
    id: 2,
    title: 'Interface Samba',
    description: 'Interface de gestion moderne et intuitive pour un serveur Samba, permettant de gérer les partages et les utilisateurs.',
    stack: ['React', 'TypeScript', 'Tailwind CSS', 'Vite'],
    github: 'https://github.com/Johny-olivier/interface-samba',
    featured: true
  },
  {
    id: 3,
    title: 'Taxi-Brousse Réservation',
    description: 'Plateforme complète de réservation de places de taxi-brousse avec gestion des trajets, des coopératives et des passagers.',
    stack: ['Spring Boot', 'Java', 'Maven', 'MySQL'],
    github: 'https://github.com/Johny-olivier/taxi-brousse-reservation',
    featured: false
  },
  {
    id: 4,
    title: 'PC Monitor',
    description: 'Application client-serveur pour le monitoring en temps réel des performances système (CPU, RAM) via Sockets.',
    stack: ['Java', 'Sockets', 'Swing', 'Maven'],
    github: 'https://github.com/Johny-olivier/pc-monitor',
    featured: true
  },
  {
    id: 5,
    title: 'Terrain ML Analysis',
    description: 'Analyse et prédiction de types de terrains via Machine Learning avec visualisation interactive sur carte.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    github: 'https://github.com/Johny-olivier/terrain-ml-analysis',
    featured: true
  },
  {
    id: 6,
    title: 'Élevage Poulet Simulation',
    description: 'Système de simulation et de gestion d\'un élevage de poulets, incluant le suivi de croissance et de santé.',
    stack: ['Node.js', 'Angular', 'SQL Server'],
    github: 'https://github.com/Johny-olivier/elevage-poulet-simulation',
    featured: true
  },
  {
    id: 7,
    title: 'Nutri Goal',
    description: 'Application de suivi nutritionnel et d\'objectifs de santé avec recommandations personnalisées de régimes.',
    stack: ['CodeIgniter 4', 'PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/Johny-olivier/nutri-goal',
    featured: true
  },
  {
    id: 8,
    title: 'Ordonnance Médicale Algo',
    description: "Algorithme d'ordonnancement récursif complexe pour optimiser la gestion des prescriptions médicales.",
    stack: ['Java', 'Maven', 'Algorithmes'],
    github: 'https://github.com/Johny-olivier/ordonnance-medicale-algo',
    featured: false
  },
  {
    id: 9,
    title: 'Gestion de Vols Avion',
    description: "Application de gestion de vols d'avion utilisant l'architecture MVC.",
    stack: ['Java', 'Servlets', 'MVC', 'PostgreSQL'],
    github: 'https://github.com/Johny-olivier/gestion-vols-avion',
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
