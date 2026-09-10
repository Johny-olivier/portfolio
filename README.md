# Johny Olivier — Portfolio

Portfolio éditorial responsive en HTML, CSS et JavaScript natif. Aucun framework, compilation ou serveur requis pour GitHub Pages.

## Développement

```bash
npm run dev
# http://127.0.0.1:4173
npm test
```

## Contenu

`assets/js/data.js` contient les données du CV **Développeur Full Stack Junior – AINAMBININA Johny Olivier**, version du 3 septembre 2026 (la plus récente des deux versions fullstack retrouvées). Les niveaux sont distingués : pratique autonome, intermédiaire et apprentissage. Les projets assistés par IA sont identifiés selon le CV. Le document téléchargeable est une copie exacte du CV source.

Après modification des données :

```bash
npm run build
```

Cette commande régénère les sources partagées de l'assistant. Redéployer aussi le Worker si l'IA est activée.

## Assistant

Interface conversationnelle avec réponses structurées, liens vers les sections précises et accès clavier. Le service Cloudflare Workers AI est implémenté dans `worker/`, mais **l'IA n'est active qu'après déploiement et renseignement de son URL** dans `assets/js/config.js`. Sans configuration ou en cas de quota épuisé, un mode local explicitement identifié répond depuis le CV.

Voir [l'activation gratuite et les limites](docs/CHATBOT.md).

## Hébergement

Conserver la publication GitHub Pages existante à la racine du dépôt. Les chemins des ressources sont relatifs et compatibles avec un site de projet `/portfolio/`. Le frontend est indépendant du service IA et ne contient aucun secret. Aucun déploiement ni push n'est effectué par `npm run build`.

## Direction visuelle

Ivoire, orange vermillon, vert profond ; Space Grotesk et DM Sans, avec des italiques serif. Portrait monochrome, grandes compositions typographiques, vignettes de projets typographiques (pas de fausses captures produit), sections contrastées. Police système de secours si Google Fonts est indisponible. Filtres, fiches détaillées, menu mobile, navigation clavier, réduction des mouvements et liens directs vers les projets.
