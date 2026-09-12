# Assistant du portfolio

## Configuration actuelle : Cloudflare Workers AI

`assets/js/config.js` pointe vers le Worker public Cloudflare :

```js
const CHAT_CONFIG = Object.freeze({
  endpoint:
    "https://johny-portfolio-assistant.johny-olivier.workers.dev/chat",
});
```

Le portfolio reste statique sur GitHub Pages. Le navigateur envoie la question au Worker, puis le Worker appelle Workers AI et renvoie une réponse JSON structurée. Les liens affichés par le chatbot sont construits côté navigateur à partir des sources autorisées du portfolio.

La fonction `api/chat.js` existe encore comme ancien backend Gemini, mais elle n'est pas utilisée tant que `assets/js/config.js` garde l'URL Cloudflare.

## Architecture et coût

Le portfolio reste statique sur GitHub Pages. Un Worker Cloudflare appelle Workers AI (Llama 3.1 8B) pour reformuler les informations du CV et retourne des réponses JSON structurées. Le navigateur construit les liens à partir d'une liste de sections autorisées.

**Utiliser exclusivement le forfait Workers Free.** Au 10 septembre 2026, Workers AI inclut 10 000 neurones/jour ; sur Free, le dépassement provoque une erreur, sans facturation supplémentaire. Ne pas activer Workers Paid ni les crédits prépayés. Le nombre de conversations varie avec la longueur des échanges ; aucun volume illimité n'est promis. Sources :

- https://developers.cloudflare.com/workers-ai/platform/pricing/
- https://developers.cloudflare.com/workers-ai/configuration/bindings/
- https://developers.cloudflare.com/workers-ai/features/json-mode/

Le mode local documenté est utilisé si l'URL n'est pas configurée, si le quota est atteint, si la réponse est invalide ou si le réseau échoue. L'interface indique toujours quel mode répond.

## Activation ou redéploiement

Depuis la racine du dépôt :

```bash
node scripts/build-knowledge.mjs
npx wrangler deploy --config worker/wrangler.jsonc
```

La connexion Cloudflare se fait avec le compte gratuit du propriétaire du portfolio. Ne copier aucun jeton dans le dépôt. Le binding AI gère l'accès au modèle côté serveur.

Après toute modification de `assets/js/data.js`, exécuter `node scripts/build-knowledge.mjs`, redéployer le Worker, puis republier la page statique si les fichiers du navigateur ont changé. `worker/wrangler.jsonc` autorise `https://johny-olivier.github.io` et `http://127.0.0.1:4173`.

Tester une question réelle après déploiement :

```bash
curl 'https://johny-portfolio-assistant.johny-olivier.workers.dev/chat' \
  -H 'Origin: https://johny-olivier.github.io' \
  -H 'Content-Type: application/json' \
  --data '{"question":"Quel est le niveau de Johny en React ?"}'
```

Vérifier ensuite le chatbot sur la page, puis publier les fichiers du portfolio par le workflow GitHub Pages existant.

## Données, confidentialité et limites

- `assets/js/data.js` est la source éditoriale unique (profil et projets publics). `node scripts/build-knowledge.mjs` régénère les sources de l'assistant côté navigateur et Worker. Redéployer le Worker après modification.
- Avec le Worker Cloudflare, les questions sont transmises à Cloudflare seulement lorsque son URL est configurée ; l'interface l'annonce. Aucun historique en base, cookie de suivi ou stockage local. La conversation disparaît à l'actualisation. Chaque question est indépendante (pas de mémoire conversationnelle envoyée au modèle).
- Le Worker n'enregistre pas les questions et n'utilise aucun outil externe. Le traitement et les journaux d'infrastructure restent soumis aux règles Cloudflare.
- Corps limité à 4 Ko, question limitée à 500 caractères, réponse limitée à 600 tokens. Limitation approximative de 10 requêtes/minute par IP et par localisation Cloudflare ; plusieurs visiteurs derrière la même IP partagent cette limite.
- CORS restreint les appels depuis les navigateurs, mais n'authentifie pas un client hors navigateur. Le quota du forfait Free reste le plafond de coût.
- Le prompt limite les réponses au CV ; le serveur rejette les structures invalides, les citations inconnues et les liens générés. Les textes sont affichés avec `textContent`, jamais comme HTML. Une IA générative peut malgré tout se tromper : les liens vers les sources permettent de vérifier. Les tests simulés ne remplacent pas une validation réelle du modèle après redéploiement.

## Validation

```bash
node --test tests/*.test.mjs
node scripts/build-knowledge.mjs
```

Après redéploiement, tester aussi une question hors sujet, une tentative de détournement, une information absente du CV, plusieurs projets, un niveau en apprentissage et une indisponibilité de l'API. L'IA ne doit ni inventer une expérience ni présenter une technologie en apprentissage comme maîtrisée.
