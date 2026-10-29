/* =========================================================
   Boucherie des Frères Paul : code commun à toutes les pages
   (en-tête, horaires du pied de page, apparition au scroll).
   Chargé après data.js et avant le script propre à la page
   (pages.js ou animal.js).
   ========================================================= */

const $ = (sel) => document.querySelector(sel);

/* ---------- Versions traduites (nl/, en/) ---------- */
// La page charge ../data.js puis sa TRADUCTION (nl/data.js…) : on remplace les textes de SITE,
// les listes d'objets étant reprises par id (ou par position), et les chemins images/ remontent d'un dossier
const fusionner = (cible, trad) => {
  for (const [k, v] of Object.entries(trad)) {
    if (Array.isArray(v) && typeof v[0] === "object") v.forEach((x, i) => fusionner(x.id ? cible[k].find((c) => c.id === x.id) : cible[k][i], x));
    else if (v && typeof v === "object" && !Array.isArray(v)) fusionner(cible[k], v);
    else cible[k] = v;
  }
};
const remonter = (o) => {
  for (const k in o) {
    if (typeof o[k] === "string" && o[k].startsWith("images/")) o[k] = "../" + o[k];
    else if (o[k] && typeof o[k] === "object") remonter(o[k]);
  }
};
{
  const essai = { a: "x", l: [{ id: "p", n: "1", img: "images/a.jpg" }, { id: "q", n: "2" }], h: [{ j: "Lu" }] };
  fusionner(essai, { a: "y", l: [{ id: "q", n: "deux" }], h: [{ j: "Ma" }] });
  remonter(essai);
  console.assert(essai.a === "y" && essai.l[0].n === "1" && essai.l[1].n === "deux" && essai.h[0].j === "Ma" && essai.l[0].img === "../images/a.jpg", "fusion des traductions");
}
if (typeof TRADUCTION !== "undefined") {
  fusionner(SITE, TRADUCTION);
  remonter(SITE);
  if (typeof DESSINS !== "undefined") remonter(DESSINS);
}
const T = SITE.textes;

// Échappe le texte injecté en HTML (utile le jour où data.js viendra d'une base de données)
const esc = (s) => String(s).replace(/[&<>"']/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));

/* ---------- En-tête : fond au scroll + menu burger ---------- */
const header = $("#header");
const burger = $("#burger");

// Appelé aussi au chargement : une page rechargée au milieu doit avoir son fond tout de suite
const majHeader = () => header.classList.toggle("is-scrolled", scrollY > 40);
addEventListener("scroll", majHeader, { passive: true });
majHeader();

function toggleMenu(open) {
  header.classList.toggle("is-open", open);
  burger.setAttribute("aria-expanded", open);
  burger.setAttribute("aria-label", open ? T.menuFermer : T.menuOuvrir);
}
burger.addEventListener("click", () => toggleMenu(burger.getAttribute("aria-expanded") !== "true"));
$("#nav").addEventListener("click", (e) => { if (e.target.closest("a")) toggleMenu(false); });
addEventListener("keydown", (e) => { if (e.key === "Escape") toggleMenu(false); });

/* ---------- Horaires ---------- */
const enMinutes = (hhmm) => { const [h, m] = hhmm.split(":").map(Number); return h * 60 + m; };
const plagesTexte = (plages, separateur) => plages.length
  ? plages.map(([a, b]) => `${a.replace(":", T.heure)} – ${b.replace(":", T.heure)}`).join(separateur)
  : T.ferme;
const estOuvert = (plages, minutes) => plages.some(([a, b]) => minutes >= enMinutes(a) && minutes < enMinutes(b));

// Auto-vérification (visible dans la console en cas d'erreur)
console.assert(estOuvert([["08:00", "13:00"], ["14:00", "18:30"]], 9 * 60), "ouvert à 9h");
console.assert(!estOuvert([["08:00", "13:00"], ["14:00", "18:30"]], 13 * 60 + 30), "fermé à 13h30 (pause)");
console.assert(!estOuvert([], 10 * 60), "fermé si aucune plage");

// Heure de Belgique, quel que soit le fuseau du visiteur
const maintenant = new Date(new Date().toLocaleString("en-US", { timeZone: "Europe/Brussels" }));
const aujourdHui = (maintenant.getDay() + 6) % 7; // 0 = lundi
const minutes = maintenant.getHours() * 60 + maintenant.getMinutes();

// Pied de page : jours consécutifs aux horaires identiques regroupés (« Lundi – Samedi »)
const groupes = [];
SITE.horaires.forEach((h) => {
  const texte = plagesTexte(h.plages, " / ");
  const dernier = groupes[groupes.length - 1];
  if (dernier && dernier.texte === texte) dernier.fin = h.jour;
  else groupes.push({ debut: h.jour, fin: h.jour, texte });
});
$("#footer-horaires").innerHTML = groupes.map((g) =>
  `<li>${esc(g.debut)}${g.fin !== g.debut ? " – " + esc(g.fin) : ""}${T.deuxPoints}${g.texte}</li>`).join("") + `<li>${T.feries}</li>`;

$("#annee").textContent = new Date().getFullYear();

/* ---------- Apparition douce au scroll ---------- */
// Lancé après tous les scripts, pour inclure le contenu généré par pages.js / animal.js
addEventListener("DOMContentLoaded", () => {
  if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;
  // Déclenché dès que le haut de l'élément atteint 90 % de la hauteur de l'écran
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((e) => {
      if (e.isIntersecting) { e.target.classList.add("is-visible"); observer.unobserve(e.target); }
    });
  }, { rootMargin: "0px 0px -10% 0px" });
  document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
  // Le CSS ne masque les .reveal qu'à partir d'ici : si un script plante avant, tout reste visible
  document.documentElement.classList.add("reveal-actif");
});
