/* Recherche de secours : déterministe, limitée aux informations publiques du CV. */
function normalizeQuestion(value) {
  return value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, " ")
    .trim();
}
function findLocalSources(question) {
  const normalized = normalizeQuestion(question);
  const includes = (term) =>
    (" " + normalized + " ").includes(" " + normalizeQuestion(term) + " ");
  if (
    /\b(ignore|instruction|prompt|system|systeme|recette|meteo|president|politique|secret|password|token|mot de passe)\b/.test(
      normalized,
    ) &&
    !/pc monitor/.test(normalized)
  )
    return [];
  if (/^(bonjour|salut|hello|bonsoir|coucou|merci)[ !.]*$/.test(normalized))
    return KNOWLEDGE.filter((s) => s.id === "profil");
  const namedProjects = PROJECTS.filter(
    (p) => includes(p.name) || includes(p.id),
  );
  if (namedProjects.length)
    return KNOWLEDGE.filter((s) => namedProjects.some((p) => p.id === s.id));
  if (/\b(projet|projets|realisations|portfolio|projects)\b/.test(normalized)) {
    const ai = /\b(ia|ai|intelligence|assiste|assistes)\b/.test(normalized);
    return KNOWLEDGE.filter((s) =>
      PROJECTS.some((p) => p.id === s.id && (!ai || p.assisted)),
    ).slice(0, ai ? 4 : 3);
  }
  const results = KNOWLEDGE.map((s) => ({
    s,
    score: s.keywords.reduce(
      (sum, k) => sum + (includes(k) ? normalizeQuestion(k).length : 0),
      0,
    ),
  }))
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score);
  return results.slice(0, 3).map((x) => x.s);
}
function localAnswer(question) {
  const sources = findLocalSources(question);
  return {
    title: sources.length
      ? "Voici les informations du portfolio."
      : "Restons dans mon portfolio.",
    paragraphs: sources.length
      ? []
      : [
          "Je peux vous renseigner sur les compétences, les projets, la formation et le parcours de Johny. Cette question n’a pas de réponse documentée dans le portfolio.",
        ],
    sources: sources.map((s) => s.id),
    local: true,
  };
}
