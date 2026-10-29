/* =========================================================
   Gabarit des pages animaux (porc.html, boeuf.html, …)
   L'animal est choisi par <body data-animal="porc">.
   Contenu : data.js, dessin : dessins.js
   ========================================================= */

const animal = SITE.animaux.find((a) => a.id === document.body.dataset.animal);
const dessin = DESSINS[animal.id];

/* ---------- Hero ---------- */
$("#animal-photo").src = animal.photo;
$("#animal-accroche").textContent = animal.accroche;

/* ---------- Planche de découpe ---------- */
const morceauParId = Object.fromEntries(animal.morceaux.map((m) => [m.id, m]));

// Chaque zone est un lien vers sa fiche : clavier (Tab + Entrée) et tactile sans code en plus
const zones = Object.entries(dessin.zones).map(([id, d]) => `
  <a href="#morceau-${id}" class="zone-lien" aria-label="${esc(morceauParId[id].nom)}">
    <path class="zone" d="${d}"/>
  </a>`).join("");

const [, , largeur, hauteur] = dessin.viewBox.split(" ");
$("#dessin").innerHTML = `
  <svg viewBox="${dessin.viewBox}" role="group" aria-label="${esc(T.planche(animal.nom))}">
    <defs><clipPath id="clip-corps"><path d="${dessin.silhouette}"/></clipPath></defs>
    <image href="${dessin.photo}" width="${largeur}" height="${hauteur}"/>
    <path class="voile" fill-rule="evenodd" d="M0,0 H${largeur} V${hauteur} H0 Z ${dessin.silhouette}"/>
    <g clip-path="url(#clip-corps)">${zones}</g>
    <path class="corps" d="${dessin.silhouette}"/>
    <text class="label" id="label"></text>
  </svg>`;

// Étiquette au survol : centrée sur la partie visible de la zone (zone ∩ silhouette)
const label = $("#label");
const corps = $(".corps").getBBox();
const montrer = (lien) => {
  const z = lien.firstElementChild.getBBox();
  const x1 = Math.max(z.x, corps.x), x2 = Math.min(z.x + z.width, corps.x + corps.width);
  const y1 = Math.max(z.y, corps.y), y2 = Math.min(z.y + z.height, corps.y + corps.height);
  label.textContent = lien.getAttribute("aria-label");
  label.setAttribute("x", (x1 + x2) / 2);
  label.setAttribute("y", (y1 + y2) / 2 + 7);
  label.classList.add("is-visible");
};
const cacher = () => label.classList.remove("is-visible");
document.querySelectorAll(".zone-lien").forEach((lien) => {
  lien.addEventListener("mouseenter", () => montrer(lien));
  lien.addEventListener("focus", () => montrer(lien));
  lien.addEventListener("mouseleave", cacher);
  lien.addEventListener("blur", cacher);
});

/* ---------- Encart (ex. « Porc Bien Acquis ») ---------- */
if (animal.encart) {
  $("#encart").hidden = false;
  $("#encart").innerHTML = `
    <p class="encart__label">${T.notreChoix}</p>
    <h3>${esc(animal.encart.titre)}</h3>
    <p>${esc(animal.encart.texte)}</p>
    <ul>${animal.encart.points.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>`;
}

/* ---------- Fiches des morceaux ---------- */
const puces = (arr) => `<ul class="puces">${arr.map((x) => `<li>${esc(x)}</li>`).join("")}</ul>`;
$("#fiches").innerHTML = animal.morceaux.map((m) => `
  <article class="fiche reveal" id="morceau-${esc(m.id)}">
    <div class="fiche__img"><img src="${esc(m.image)}" alt="" width="900" height="675" loading="lazy"></div>
    <div class="fiche__corps">
      <h3>${esc(m.nom)}</h3>
      <p>${esc(m.description)}</p>
      <h4>${T.cuissons}</h4>${puces(m.cuisson)}
      <h4>${T.recette}</h4><p>${esc(m.recette)}</p>
      ${m.produits ? `<h4>${T.faitMaison}</h4>${puces(m.produits)}` : ""}
      <p class="fiche__prix">${T.prix}</p>
    </div>
  </article>`).join("");

/* ---------- Liens vers les autres animaux ---------- */
$("#autres").innerHTML = SITE.animaux.filter((a) => a !== animal).map((a) => `
  <li><a class="autre" href="${esc(a.id)}.html">
    <img src="${esc(a.photo)}" alt="" loading="lazy"><span>${esc(a.nom)}</span>
  </a></li>`).join("");
