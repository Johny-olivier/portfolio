# Validation de la refonte — 12 septembre 2026

- 23 tests automatisés réussis : niveaux issus du CV, recherche locale, refus hors sujet, validation JSON, origines CORS, limites de requêtes, quota, erreurs IA, backend Gemini hérité et intégrité des ancres.
- Vérification Chrome : 320, 375, 768, 812 (paysage), 1024 et 1440 px, sans débordement horizontal.
- Menu mobile, fermeture avec Échap, filtres de projets, navigation depuis le chatbot vers un projet masqué, rendu de HTML utilisateur comme texte et réduction des mouvements vérifiés.
- Rendu de la page complète et de l'assistant inspecté ; aucune exception JavaScript détectée.
- Ressources locales présentes ; PDF téléchargeable identique au CV source (comparaison SHA-256).
- `git diff --check` réussi. Sources relues ; aucun secret ajouté.
- Worker Cloudflare configuré dans `assets/js/config.js` et joignable pendant la reprise. Deux réponses réelles ont montré un décalage avec les données locales actuelles : React est revenu "intermédiaire" alors que le fichier actuel le classe "débutant", et une question pertinente sur les projets Java a été refusée. Redéployer le Worker après régénération des connaissances avant de considérer le chatbot réel comme validé.

## Restant côté Cloudflare

Régénérer `worker/knowledge.mjs`, redéployer le Worker Cloudflare, puis retester de vraies réponses du modèle et leurs sources. Les tests automatisés du binding IA utilisent des réponses simulées. Aucun nouveau déploiement Cloudflare et aucun push GitHub n'ont été effectués pendant cette reprise.

Le contrôle final du skill apprendre-de-ses-erreurs a été appliqué aux éléments pertinents du projet statique. Les contrôles TypeORM, injection, DTO et multi-tenant sont sans objet ici.
