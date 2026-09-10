# Validation de la refonte — 10 septembre 2026

- 15 tests automatisés réussis : niveaux issus du CV, recherche locale, refus hors sujet, validation JSON, origines CORS, limites de requêtes, quota, erreurs IA et intégrité des ancres.
- Vérification Chrome : 320, 375, 768, 812 (paysage), 1024 et 1440 px, sans débordement horizontal.
- Menu mobile, fermeture avec Échap, filtres de projets, navigation depuis le chatbot vers un projet masqué, rendu de HTML utilisateur comme texte et réduction des mouvements vérifiés.
- Rendu de la page complète et de l'assistant inspecté ; aucune exception JavaScript détectée.
- Ressources locales présentes ; PDF téléchargeable identique au CV source (comparaison SHA-256).
- `git diff --check` réussi. Sources relues ; aucun secret ajouté.
- Worker empaqueté avec succès par Wrangler 4.130.0 en `--dry-run` : binding AI et limitation 10 requêtes / 60 s reconnus.

## Restant après connexion du compte Cloudflare Free

Déployer le Worker, renseigner son URL publique dans `assets/js/config.js`, puis tester de vraies réponses du modèle et leurs sources. Les tests actuels du binding IA utilisent des réponses simulées. Aucun appel réel au modèle, aucun déploiement Cloudflare et aucun push GitHub n'ont été effectués.

Le contrôle final du skill apprendre-de-ses-erreurs a été appliqué aux éléments pertinents du projet statique. Les contrôles TypeORM, injection, DTO et multi-tenant sont sans objet ici.
