import { readFileSync, writeFileSync } from "node:fs";
import vm from "node:vm";
const data = vm.runInNewContext(
  `${readFileSync(new URL("../assets/js/data.js", import.meta.url), "utf8")}\n({PROFILE, SKILLS, PROJECTS, EDUCATION, EXPERIENCE})`,
);
const { PROFILE: p, SKILLS, PROJECTS, EDUCATION, EXPERIENCE } = data;
const records = [
  {
    id: "profil",
    title: "Qui est Johny ?",
    section: "about",
    keywords: [
      "qui",
      "johny",
      "olivier",
      "profil",
      "presente",
      "presentation",
      "parle de toi",
      "about",
      "yourself",
    ],
    text: p.intro + " " + p.goal,
  },
  {
    id: "contact",
    title: "Contacter Johny",
    section: "contact",
    keywords: [
      "contact",
      "email",
      "mail",
      "telephone",
      "numero",
      "joindre",
      "ecrire",
      "recruter",
    ],
    text: `E-mail : ${p.email}. Téléphones : ${p.phones.join(" / ")}. GitHub : ${p.github}.`,
  },
  {
    id: "lieu",
    title: "Où est-il basé ?",
    section: "contact",
    keywords: [
      "ville",
      "habite",
      "base",
      "localisation",
      "madagascar",
      "antananarivo",
      "location",
    ],
    text:
      p.location +
      ". Le CV ne précise pas ses modalités de télétravail ni sa mobilité.",
  },
  {
    id: "langues",
    title: "Langues parlées",
    section: "about",
    keywords: [
      "langue",
      "langues",
      "anglais",
      "francais",
      "malagasy",
      "english",
      "languages",
    ],
    text: p.languages.join(". ") + ".",
  },
  {
    id: "interets",
    title: "Au-delà du code",
    section: "about",
    keywords: [
      "loisir",
      "loisirs",
      "passion",
      "interets",
      "sport",
      "basketball",
      "football",
      "jeux video",
    ],
    text: "Centres d’intérêt : " + p.interests.join(", ") + ".",
  },
  {
    id: "disponibilite",
    title: "Discuter d’une opportunité",
    section: "contact",
    keywords: [
      "disponible",
      "disponibilite",
      "salaire",
      "tarif",
      "contrat",
      "opportunite",
      "recherche",
      "objectif",
      "travail",
      "embauche",
    ],
    text:
      p.goal +
      " Le CV ne précise ni date de disponibilité, ni rémunération, ni type de contrat souhaité : contactez Johny pour en discuter.",
  },
  ...SKILLS.map((s) => {
    const allItems = s.niveaux
      ? Object.values(s.niveaux).flat()
      : s.items || [];
    const niveauxText = s.niveaux
      ? ` Avancé : ${(s.niveaux.avance || []).join(", ")}. Intermédiaire : ${(s.niveaux.intermediaire || []).join(", ")}. Débutant : ${(s.niveaux.debutant || []).join(", ")}.`
      : "";
    return {
      id: s.id,
      title: s.level,
      section: "skill-" + s.id,
      keywords: allItems
        .map((x) => x.toLowerCase())
        .concat(["competences", "niveau", "stack", "technologies", "skills"]),
      text: allItems.join(", ") + "." + niveauxText + " " + s.description,
    };
  }),
  ...PROJECTS.map((s) => ({
    id: s.id,
    title: s.name,
    section: "project-" + s.id,
    keywords: [
      s.name.toLowerCase(),
      s.id,
      ...s.stack.map((x) => x.toLowerCase()),
    ],
    text:
      s.detail +
      " " +
      (s.features || []).join(". ") +
      ". " +
      " Technologies / thèmes : " +
      s.stack.join(", ") +
      (s.github
        ? ". Code source : " + s.github + "."
        : ". Lien du code non renseigné."),
  })),
  {
    id: "formation",
    title: "Formation",
    section: "education",
    keywords: [
      "formation",
      "etude",
      "etudes",
      "diplome",
      "universite",
      "itu",
      "licence",
      "ecole",
      "education",
      "sesame",
      "bac",
    ],
    text: EDUCATION.map(
      (s) => `${s.title} — ${s.place}, ${s.date}. ${s.detail}.`,
    ).join("\n"),
  },
  {
    id: "experience",
    title: "Expérience & concours",
    section: "experience",
    keywords: [
      "experience",
      "stage",
      "wordpress",
      "mada creative",
      "professionnel",
      "hackathon",
      "orange",
      "codingame",
      "entreprise",
    ],
    text: EXPERIENCE.map(
      (s) => `${s.title} — ${s.place}, ${s.date}. ${s.detail}`,
    ).join("\n"),
  },
];
writeFileSync(
  new URL("../assets/js/knowledge.js", import.meta.url),
  "/* Généré par node scripts/build-knowledge.mjs : ne pas modifier à la main. */\nconst KNOWLEDGE = " +
    JSON.stringify(records, null, 2) +
    ";\n",
);
writeFileSync(
  new URL("../worker/knowledge.mjs", import.meta.url),
  "// Généré depuis assets/js/data.js\nexport default " +
    JSON.stringify(records, null, 2) +
    ";\n",
);
console.log(`${records.length} sources générées depuis les données du CV.`);
