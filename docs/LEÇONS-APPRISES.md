# Leçons du portfolio

## 2026-09-11 — Les liens et compteurs doivent découler des données vérifiées
- Timing : revue du contenu et de l'interface.
- Symptôme : compteur de huit projets avec quatre fiches, liens construits pour des dépôts inexistants.
- Cause racine : compteurs écrits en HTML et URL supposée identique à l'identifiant d'une fiche.
- Détecteur manquant : comparaison des fiches affichées, des compteurs et des dépôts publics.
- Garde-fou : calculer les compteurs depuis les données ; utiliser un champ `github` explicite, nullable, et tester l'absence de lien inventé.

## 2026-09-11 — Page et assistant doivent partager les mêmes sources
- Timing : enrichissement des projets.
- Symptôme : Gemini connaissait encore quatre projets et des sources absentes de la page.
- Cause racine : copie manuelle des informations dans le prompt serveur.
- Détecteur manquant : test du prompt avec les identifiants des nouveaux projets.
- Garde-fou : générer la connaissance depuis `data.js`, l'importer côté serveur et tester les identifiants de sources avant affichage.

## 2026-09-11 — Une réponse longue doit s'ouvrir sur son début
- Timing : contrôle visuel mobile du chatbot.
- Symptôme : le défilement automatique montrait la fin de la réponse et masquait son titre.
- Cause racine : positionnement systématique au bas de toute la conversation.
- Détecteur manquant : contrôle du titre visible après une réponse plus haute que la zone de lecture.
- Garde-fou : aligner le début de la nouvelle réponse sur la zone de lecture et vérifier avec une réponse longue à 375 px.

## 2026-09-12 — Relire la configuration active après une reprise
- Timing : reprise après des modifications faites par l'utilisateur et une autre IA.
- Symptôme : documentation et tests orientés Gemini alors que `assets/js/config.js` utilisait déjà un Worker Cloudflare public.
- Cause racine : hypothèse reprise depuis l'ancien contexte au lieu de relire le fichier de configuration actif.
- Détecteur manquant : comparaison systématique entre la documentation, `assets/js/config.js` et le backend réellement configuré.
- Garde-fou : avant de modifier un chatbot déjà repris par quelqu'un d'autre, relire la configuration active et préserver le fournisseur actuellement branché.
