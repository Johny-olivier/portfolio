"use strict";
const $ = (selector, root = document) => root.querySelector(selector);
function node(tag, cls, text) {
  const el = document.createElement(tag);
  if (cls) el.className = cls;
  if (text !== undefined) el.textContent = text;
  return el;
}
function icon(name, size = 20) {
  const image = node("img", "icon");
  image.src = "assets/icons/" + name + ".png";
  image.alt = "";
  image.width = size;
  image.height = size;
  return image;
}
function anchor(href, label, cls) {
  const el = node("a", cls, label);
  el.href = href;
  return el;
}
function tags(items) {
  const el = node("div", "tags");
  items.forEach((item) => el.append(node("span", "", item)));
  return el;
}
$("#profile-intro").textContent = PROFILE.intro;
$("#profile-goal").textContent = PROFILE.goal;
$("#interests").textContent = PROFILE.interests.join(" · ");
PROFILE.languages.forEach((language) =>
  $("#languages").append(node("li", "", language)),
);
$("#contact-email").append(icon("mail"), node("span", "", PROFILE.email));
$("#contact-email").href = "mailto:" + PROFILE.email;
PROFILE.phones.forEach((phone, i) => {
  if (i) $("#contact-phones").append(" / ");
  $("#contact-phones").append(
    anchor("tel:+261" + phone.slice(1).replace(/ /g, ""), phone),
  );
});
$("#year").textContent = new Date().getFullYear();
PROJECTS.forEach((p) => {
  const card = node("article", "project");
  card.id = "project-" + p.id;
  card.dataset.category = p.category;
  card.dataset.featured = String(p.featured);
  card.dataset.search = normalizeQuestion(
    [p.name, p.type, p.description, ...p.stack].join(" "),
  );
  const top = node("div", "project-card-top");
  const mark = node("div", "project-icon tone-" + p.tone);
  mark.append(icon(p.icon));
  top.append(mark, node("span", "project-kind", p.type));
  card.append(
    top,
    node("h3", "", p.name),
    node("p", "project-description", p.description),
    tags(p.stack),
  );
  card.append(
    node(
      "p",
      "project-origin",
      p.assisted ? "Projet personnel · Assisté par IA" : "Projet personnel",
    ),
  );
  const details = node("details");
  const summary = node("summary", "", "Fonctionnalités & détails");
  summary.append(icon("chevron-down", 12));
  const features = node("ul");
  p.features.forEach((feature) => features.append(node("li", "", feature)));
  details.append(summary, node("p", "", p.detail), features);
  card.append(details);
  if (p.github) {
    const link = anchor(p.github, "", "project-code");
    link.append(
      icon("github", 16),
      node("span", "", "Voir le code sur GitHub"),
    );
    link.target = "_blank";
    link.rel = "noopener noreferrer";
    link.setAttribute(
      "aria-label",
      "Voir le code de " + p.name + " sur GitHub (nouvel onglet)",
    );
    card.append(link);
  } else
    card.append(
      node(
        "p",
        "project-note",
        "Présentation du projet · Lien du code à venir",
      ),
    );
  $("#projects-container").append(card);
});
SKILLS.forEach((s) => {
  const card = node("article", "skill-card");
  card.id = "skill-" + s.id;
  const heading = node("div", "skill-heading");
  heading.append(icon(s.icon), node("h3", "", s.level));
  card.append(heading, node("p", "", s.description));
  const niveaux = s.niveaux || (s.items ? { avance: s.items } : null);
  if (niveaux) {
    const order = [
      { key: "avance", label: "Avancé" },
      { key: "intermediaire", label: "Intermédiaire" },
      { key: "debutant", label: "Débutant" },
    ];
    order.forEach(({ key, label }) => {
      const items = niveaux[key];
      if (!items || !items.length) return;
      const hr = document.createElement("hr");
      hr.className = "skill-sep";
      const lvl = node("span", "skill-level", label);
      card.append(hr, lvl, tags(items));
    });
  } else if (s.items) card.append(tags(s.items));
  $("#skills-container").append(card);
});
function journey(items, target) {
  items.forEach((item) => {
    const row = node("article", "journey-item");
    row.append(
      node("span", "eyebrow", item.date),
      node("h4", "", item.title),
      node("p", "place", item.place),
      node("p", "", item.detail),
    );
    $(target).append(row);
  });
}
journey(EXPERIENCE, "#experience-container");
journey(EDUCATION, "#education-container");
let activeFilter = "featured";
const search = $("#project-search");
$("#all-projects-count").textContent = PROJECTS.length;
function filterProjects(value = activeFilter) {
  activeFilter = value;
  document
    .querySelectorAll("[data-filter]")
    .forEach((button) =>
      button.setAttribute(
        "aria-pressed",
        String(button.dataset.filter === value),
      ),
    );
  const terms = normalizeQuestion(search.value).split(" ").filter(Boolean);
  let count = 0;
  document.querySelectorAll(".project").forEach((card) => {
    const categoryMatch =
      value === "all" ||
      (value === "featured"
        ? card.dataset.featured === "true"
        : card.dataset.category === value);
    card.hidden =
      !categoryMatch ||
      !terms.every((term) => card.dataset.search.includes(term));
    if (!card.hidden) count++;
  });
  $("#project-count").textContent =
    `${count} projet${count === 1 ? "" : "s"} affiché${count === 1 ? "" : "s"} sur ${PROJECTS.length}`;
  $("#projects-empty").hidden = count > 0;
  $("#show-all-projects").hidden = value === "all" && !search.value;
}
document
  .querySelectorAll("[data-filter]")
  .forEach((button) =>
    button.addEventListener("click", () =>
      filterProjects(button.dataset.filter),
    ),
  );
// Searching covers all projects so an unselected project remains discoverable.
search.addEventListener("input", () =>
  filterProjects(search.value.trim() ? "all" : activeFilter),
);
function resetProjects() {
  search.value = "";
  filterProjects("all");
}
$("#show-all-projects").addEventListener("click", resetProjects);
$("#clear-project-search").addEventListener("click", () => {
  resetProjects();
  search.focus();
});
filterProjects();
const menu = $(".menu-toggle");
const navigation = $("#navigation");
function closeMenu() {
  menu.setAttribute("aria-expanded", "false");
  navigation.classList.remove("open");
}
menu.addEventListener("click", () => {
  const open = menu.getAttribute("aria-expanded") !== "true";
  menu.setAttribute("aria-expanded", String(open));
  navigation.classList.toggle("open", open);
});
navigation.addEventListener("click", (event) => {
  if (event.target.closest("a")) closeMenu();
});
document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") closeMenu();
});
function revealHash() {
  let id;
  try {
    id = decodeURIComponent(location.hash.slice(1));
  } catch {
    return;
  }
  const target = document.getElementById(id);
  if (target?.classList.contains("project") && target.hidden) {
    resetProjects();
    target.scrollIntoView();
  }
}
window.addEventListener("hashchange", revealHash);
revealHash();
if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      const visible = entries
        .filter((entry) => entry.isIntersecting)
        .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navigation.querySelectorAll("a").forEach((link) => {
        if (link.hash === "#" + visible.target.id)
          link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    },
    { rootMargin: "-15% 0px -50% 0px", threshold: [0, 0.2, 0.5] },
  );
  document
    .querySelectorAll("#projects,#skills,#experience,#contact")
    .forEach((section) => observer.observe(section));
}
const dialog = $("#chat-dialog"),
  messages = $("#chat-messages"),
  input = $("#chat-input"),
  submit = $('#chat-form button[type="submit"]');
let chatTrigger = null;
let controller = null;
let requestVersion = 0;
const welcome = messages.firstElementChild.cloneNode(true);
function openChat(event) {
  chatTrigger = event.currentTarget;
  dialog.showModal();
  document.body.classList.add("chat-open");
  input.focus();
}
document
  .querySelectorAll("[data-open-chat]")
  .forEach((button) => button.addEventListener("click", openChat));
$("#chat-close").addEventListener("click", () => dialog.close());
dialog.addEventListener("close", () => {
  document.body.classList.remove("chat-open");
  chatTrigger?.focus();
});
function sourceLink(source) {
  const link = anchor("#" + source.section, source.title);
  link.append(icon("arrow-right", 14));
  link.addEventListener("click", () => {
    dialog.close();
    if (source.section.startsWith("project-")) resetProjects();
    const section = document.getElementById(source.section);
    if (section) {
      section.tabIndex = -1;
      section.focus({ preventScroll: true });
      section.scrollIntoView({
        behavior: matchMedia("(prefers-reduced-motion: reduce)").matches
          ? "instant"
          : "smooth",
        block: "start",
      });
      section.classList.remove("source-highlight");
      requestAnimationFrame(() => section.classList.add("source-highlight"));
    }
  });
  return link;
}
function renderAnswer(answer, note) {
  const el = node("div", "message assistant-message");
  el.append(
    node(
      "span",
      "message-author",
      answer.local
        ? "Réponse issue du portfolio"
        : "L’assistant de Johny · Réponse IA",
    ),
    node("h3", "", answer.title),
  );
  for (const paragraph of answer.paragraphs || [])
    el.append(node("p", "", paragraph));
  for (const id of answer.sources || []) {
    const source = KNOWLEDGE.find((s) => s.id === id);
    if (!source) continue;
    const block = node("div", "answer-block");
    if (answer.local) {
      block.append(node("strong", "", source.title));
      const list = node("ul");
      source.text
        .replace(/ Code source : https?:\/\/[^\s]+\.?/g, "")
        .split("\n")
        .forEach((text) => list.append(node("li", "", text)));
      block.append(list);
    }
    const links = node("div", "answer-links");
    links.append(sourceLink(source));
    block.append(links);
    el.append(block);
  }
  if (note) el.append(node("p", "message-note", note));
  return el;
}
async function ask(question) {
  question = question.trim();
  if (!question || submit.disabled) return;
  input.value = "";
  messages.append(node("div", "message user-message", question));
  const pending = node(
    "div",
    "message assistant-message",
    "Je consulte le parcours de Johny…",
  );
  pending.setAttribute("role", "status");
  messages.append(pending);
  messages.scrollTop = messages.scrollHeight;
  submit.disabled = true;
  const version = ++requestVersion;
  let answer, note;
  let timeout;
  try {
    if (!CHAT_CONFIG.endpoint) {
      answer = localAnswer(question);
      note =
        "L’IA générative n’est pas encore connectée. Cette réponse provient des informations du portfolio.";
    } else {
      controller = new AbortController();
      timeout = setTimeout(() => controller?.abort(), 20000);
      const response = await fetch(CHAT_CONFIG.endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ question }),
        signal: controller.signal,
      });
      if (!response.ok) throw new Error("unavailable");
      answer = await response.json();
      if (
        !answer ||
        typeof answer.title !== "string" ||
        !Array.isArray(answer.paragraphs) ||
        !answer.paragraphs.every((p) => typeof p === "string") ||
        !Array.isArray(answer.sources) ||
        answer.sources.some(
          (id) => !KNOWLEDGE.some((source) => source.id === id),
        )
      )
        throw new Error("invalid");
    }
  } catch {
    answer = localAnswer(question);
    note =
      "L’IA est momentanément indisponible ou son quota est atteint. Voici les informations du portfolio en mode local.";
  } finally {
    clearTimeout(timeout);
    if (version === requestVersion) {
      pending.replaceWith(renderAnswer(answer, note));
      submit.disabled = false;
      controller = null;
      messages.scrollTop = messages.scrollHeight;
    }
  }
}
$("#chat-form").addEventListener("submit", (event) => {
  event.preventDefault();
  ask(input.value);
});
document
  .querySelectorAll("[data-question]")
  .forEach((button) =>
    button.addEventListener("click", () => ask(button.dataset.question)),
  );
$("#chat-reset").addEventListener("click", () => {
  requestVersion++;
  controller?.abort();
  controller = null;
  submit.disabled = false;
  messages.replaceChildren(welcome.cloneNode(true));
  input.value = "";
  input.focus();
});
$("#chat-privacy-copy").textContent = CHAT_CONFIG.endpoint
  ? "Réponses générées à partir du profil et des projets publics de Johny. Votre question est transmise au service IA configuré (Gemini pour /api/chat). Aucun historique n’est enregistré par cette page. Les liens permettent de vérifier les réponses."
  : "Assistant local basé sur le profil et les projets publics de Johny. Vos questions restent dans ce navigateur et sont effacées à l’actualisation.";
