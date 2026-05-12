// Personal Information
const PERSONAL_INFO = {
    firstName: 'Johny Olivier',  
    lastName: 'AINAMBININA',    
    title: 'Développeur Full-Stack Junior',
    introduction: 'Étudiant passionné en informatique à ITU Andoharanofotsy. Spécialisé en développement web avec une solide maîtrise du frontend et du backend. Curieux, rigoureux et orienté solution.',
    shortBio: 'Étudiant passionné en informatique à ITU Andoharanofotsy. Spécialisation en développement web et architecture logicielle.',
    interests: ['Jeux vidéo', 'Basketball'],
    location: 'Antananarivo, Madagascar'
};

// Contact Information
const CONTACT_INFO = {
    email: 'johny24.poseidon@gmail.com',
    phone: '038 32 197 87',
    phone2: '037 43 981 73',
    github: 'https://github.com/Johny-olivier',      
    facebook: 'https://www.facebook.com/lion.johny.9',  
    linkedin: 'https://www.linkedin.com/in/johny-olivier-ainambinina-2a6b25343/'    
};

// Statistics
const STATISTICS = [
    { number: '20+', label: 'Projets réalisés' },
    { number: '10+', label: 'Technologies maîtrisées' },
    { number: '2+', label: 'Années d\'expérience' },
    { number: '+90%', label: 'Dédié à l\'excellence' }
];

// Skill levels: 'avancé' | 'intermédiaire' | 'débutant'

// Frontend Skills
const SKILLS_FRONTEND = [
    { name: 'HTML5',      icon: 'fab fa-html5',     level: 'avancé' },
    { name: 'CSS3',       icon: 'fab fa-css3-alt',  level: 'avancé' },
    { name: 'JavaScript', icon: 'fab fa-js',        level: 'avancé' },
    { name: 'React',      icon: 'fab fa-react',     level: 'débutant' },
    { name: 'Angular',    icon: 'fab fa-angular',   level: 'débutant' },
    { name: 'Bootstrap',  icon: 'fab fa-bootstrap', level: 'intermédiaire' },
    { name: 'Tailwind',   icon: 'fas fa-palette',   level: 'débutant' }
];

// Backend Skills
const SKILLS_BACKEND = [
    { name: 'PHP',         icon: 'fab fa-php',       level: 'avancé' },
    { name: 'Node.js',     icon: 'fab fa-node-js',   level: 'débutant' },
    { name: 'Java',        icon: 'fab fa-java',      level: 'avancé' },
    { name: 'Kotlin',      icon: 'fas fa-k',         level: 'débutant' },        // pas d'icône FA officielle → fas fa-k
    { name: 'C',           icon: 'fas fa-copyright', level: 'intermédiaire' },   // jusqu'aux structures
    { name: 'C#',          icon: 'fas fa-hashtag',   level: 'débutant' },        // avec Avalonia sur Linux
    { name: 'CodeIgniter', icon: 'fas fa-fire',      level: 'intermédiaire' },
    { name: 'Spring Boot', icon: 'fas fa-leaf',      level: 'débutant' },
    { name: 'Python',      icon: 'fab fa-python',    level: 'intermédiaire' },
    { name: 'FlightPHP',   icon: 'fas fa-plane',     level: 'avancé' }
];

// Architecture & Concepts
const SKILLS_ARCHITECTURE = [
    { name: 'MVC',              icon: 'fas fa-project-diagram', level: 'avancé' },
    { name: 'DAO',              icon: 'fas fa-layer-group',     level: 'avancé' },
    { name: 'Client-Serveur',   icon: 'fas fa-network-wired',   level: 'avancé' },
    { name: 'REST API',         icon: 'fas fa-cube',            level: 'intermédiaire' },
    { name: 'Authentification', icon: 'fas fa-lock',            level: 'intermédiaire' },
    { name: 'POO avancée',      icon: 'fas fa-object-group',    level: 'avancé' }
];

// Databases
const SKILLS_DATABASES = [
    { name: 'MySQL',      icon: 'fas fa-database', level: 'avancé' },
    { name: 'PostgreSQL', icon: 'fas fa-database', level: 'intermédiaire' },
    { name: 'Oracle',     icon: 'fas fa-database', level: 'débutant' },
    { name: 'SQL Server', icon: 'fas fa-database', level: 'débutant' }
];

// Tools (dev tools)
const SKILLS_TOOLS = [
    { name: 'Git',            icon: 'fab fa-git-alt',  level: 'avancé' },
    { name: 'Docker',         icon: 'fab fa-docker',   level: 'intermédiaire' },
    { name: 'Maven',          icon: 'fas fa-cube',     level: 'avancé' },
    { name: 'DBeaver',        icon: 'fas fa-database', level: 'intermédiaire' },
    { name: 'Figma',          icon: 'fab fa-figma',    level: 'débutant' },
    { name: 'Android Studio', icon: 'fab fa-android',  level: 'débutant' }   // fab fa-android existe dans FA6
];

// Systems & OS
const SKILLS_SYSTEMS = [
    { name: 'Linux',        icon: 'fab fa-linux',    level: 'avancé' },
    { name: 'Windows',      icon: 'fab fa-windows',  level: 'intermédiaire' },
    { name: 'Terminal/CLI', icon: 'fas fa-terminal', level: 'avancé' },
    { name: 'Bash',         icon: 'fas fa-scroll',   level: 'intermédiaire' },
    { name: 'SSH',          icon: 'fas fa-key',      level: 'intermédiaire' }
];

// Education
const EDUCATION = [
    {
        title: 'Licence en Informatique (En cours)',
        institution: 'IT University Andoharanofotsy',
        period: 'Oct. 2024 – Présent',
        description: 'L2 Computer Science — Spécialisation en développement web et architecture logicielle.',
        icon: 'fas fa-graduation-cap'
    },
    {
        title: 'Année Préparatoire',
        institution: 'Programme SESAME Ambatoroka',
        period: '2023 – 2024',
        description: 'Préparation intensive pour études d\'ingénieur informatique.',
        icon: 'fas fa-graduation-cap'
    },
    {
        title: 'Terminale Série S (Mention Bien)',
        institution: 'CIC Mananjary',
        period: '2022 – 2023',
        description: 'Baccalauréat série scientifique avec distinction.',
        icon: 'fas fa-graduation-cap'
    }
];

// Experience
const EXPERIENCE = [
    {
        title: 'Hackathon ITU Website Redesign',
        company: 'ITU Andoharanofotsy',
        period: 'Fev. 2026',
        description: 'Redesign complet du site web de l\'école lors d\'un hackathon interne.',
        tasks: [
            'Refonte complète de l\'architecture et de l\'interface utilisateur',
            'Amélioration de l\'expérience utilisateur (UX) et de la navigation',
            'Projet disponible sur GitHub : <a href="https://github.com/Johny-olivier/itu-website-redesign" target="__blank"> https://github.com/Johny-olivier/itu-website-redesign </a>'
        ]
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

// Projects
const PROJECTS = [
    {
        id: 1,
        title: 'SIG Madagascar',
        description: 'Système d\'Information Géographique pour les routes de Madagascar. Visualisation spatiale et gestion de données géographiques.',
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
        description: 'Algorithme d\'ordonnancement récursif complexe pour optimiser la gestion des prescriptions médicales.',
        stack: ['Java', 'Maven', 'Algorithmes'],
        github: 'https://github.com/Johny-olivier/ordonnance-medicale-algo',
        featured: false
    },
    {
        id: 9,
        title: 'Gestion de Vols Avion',
        description: 'Application de gestion de vols d\'avion utilisant l\'architecture MVC pour assurer une séparation claire des responsabilités.',
        stack: ['Java', 'Servlets', 'MVC', 'PostgreSQL'],
        github: 'https://github.com/Johny-olivier/gestion-vols-avion',
        featured: false
    }
];

// Languages
const LANGUAGES = [
    { language: 'Français', level: 'Courant',       icon: 'fas fa-star' },
    { language: 'Anglais',  level: 'Intermédiaire', icon: 'fas fa-star' },
    { language: 'Malagasy', level: 'Natif',         icon: 'fas fa-star' }
];

// Navigation Links
const NAV_LINKS = [
    { label: 'Qui suis-je ?',    href: '#about' },
    { label: 'Compétences', href: '#skills' },
    { label: 'Parcours', href: '#education' },
    { label: 'Expériences', href: '#experience' },
    { label: 'Projets',     href: '#projects' },
    { label: 'Contact',     href: '#contact' }
];

console.log('Portfolio data loaded successfully');