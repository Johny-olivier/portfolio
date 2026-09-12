# Johny Olivier — Portfolio

Portfolio responsive en HTML, CSS et JavaScript natif : sélection de projets, recherche par nom ou technologie, compétences, parcours et assistant conversationnel.

## Développement

```bash
npm run dev
# http://127.0.0.1:4173
npm run build
npm test
```

Le serveur Python sert la page statique. Quand `assets/js/config.js` pointe vers le Worker Cloudflare, l'assistant utilise ce backend IA même en local, à condition que l'origine locale soit autorisée côté Worker. Aucune installation n'est nécessaire pour la page et les tests (Node.js récent requis).

## Contenu

- `assets/js/data.js` : profil et compétences conservés depuis la version présente au début de la refonte ; projets enrichis à partir des README publics du GitHub de Johny.
- 11 projets présentés, dont 6 dans la sélection initiale. 10 dépôts publics vérifiés ; Mini SGBD conserve sa présentation existante sans lien GitHub inventé.
- Recherche et compteurs calculés depuis les projets réellement présents.
- `npm run build` régénère `assets/js/knowledge.js` et `worker/knowledge.mjs`. La page, le secours local et le Worker Cloudflare utilisent les mêmes informations.
- Le PDF téléchargeable est conservé.

Les sources des descriptions figurent dans [docs/PROJECT-SOURCES.md](docs/PROJECT-SOURCES.md). La présence d'une technologie dans un dépôt n'est pas assimilée à un niveau de maîtrise.

## Assistant

`assets/js/config.js` pointe vers le Worker Cloudflare public. Le Worker appelle Workers AI, valide les réponses structurées et laisse le navigateur créer les liens vers les sections autorisées.

La fonction `api/chat.js` reste présente comme ancien backend Gemini, mais elle n'est pas utilisée par la configuration actuelle. Voir [docs/CHATBOT.md](docs/CHATBOT.md).

## Design

Fond blanc cassé, accents sauge et graphite, arrondis de 8 à 16 px, hiérarchie sobre. Portrait monochrome avec cadre incliné conservé. Les flèches obliques décoratives ont été supprimées ; les actions utilisent des icônes locales.

Les PNG Icons8 sont téléchargés dans `assets/icons/`, avec attribution dans le pied de page et provenance dans `assets/icons/sources.json`. Les polices Geist et Inter viennent de Google Fonts, avec une police système de secours.

## Vérification

Consulter [docs/VALIDATION.md](docs/VALIDATION.md) pour les tests fonctionnels, les dimensions vérifiées et les limites de la validation du modèle réel.
