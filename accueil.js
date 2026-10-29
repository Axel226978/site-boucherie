/* =========================================================
   Page d'accueil — contenu lu depuis data.js
   ========================================================= */

/* ---------- Accordéon « Nos viandes » ---------- */
const accordeon = $("#accordeon");
const tactile = matchMedia("(hover: none)");

// La photo de l'animal actif couvre tout l'accordéon ; les volets sont posés par-dessus
accordeon.innerHTML = `
  <span class="accordeon__fonds" aria-hidden="true">
    ${SITE.animaux.map((a, i) => `<img class="accordeon__fond${i === 0 ? " is-active" : ""}" src="${esc(a.photo)}" alt="">`).join("")}
  </span>
  ${SITE.animaux.map((a, i) => `
  <a class="volet${i === 0 ? " is-open" : ""}" href="${esc(a.id)}.html" data-index="${i}" aria-label="${esc(a.nom)} : découvrir les morceaux">
    <span class="volet__vertical" aria-hidden="true">${esc(a.nom)}</span>
    <span class="volet__contenu" aria-hidden="true">
      <span class="volet__nom">${esc(a.nom)}</span>
      <span class="volet__accroche">${esc(a.accroche)}</span>
      <span class="btn btn--gold">Découvrir les morceaux</span>
    </span>
  </a>`).join("")}`;

const volets = [...accordeon.querySelectorAll(".volet")];
const fonds = [...accordeon.querySelectorAll(".accordeon__fond")];
const ouvrirVolet = (volet) => {
  volets.forEach((v) => v.classList.toggle("is-open", v === volet));
  fonds.forEach((f, i) => f.classList.toggle("is-active", i === Number(volet.dataset.index)));
};

volets.forEach((volet) => {
  volet.addEventListener("mouseenter", () => { if (!tactile.matches) ouvrirVolet(volet); });
  volet.addEventListener("focus", () => ouvrirVolet(volet));
  // Téléphone : le premier tap ouvre le volet, le suivant (ou le bouton) mène à la page
  volet.addEventListener("click", (e) => {
    if (tactile.matches && !volet.classList.contains("is-open")) { e.preventDefault(); ouvrirVolet(volet); }
  });
});

// Téléphone : le volet sous le doigt s'ouvre quand on glisse de gauche à droite
accordeon.addEventListener("touchmove", (e) => {
  const t = e.touches[0];
  const volet = document.elementFromPoint(t.clientX, t.clientY)?.closest(".volet");
  if (volet && !volet.classList.contains("is-open")) ouvrirVolet(volet);
}, { passive: true });

/* ---------- Plat du jour ---------- */
const plat = SITE.platDuJour;
const prix = new Intl.NumberFormat("fr-BE", { style: "currency", currency: "EUR" }).format(plat.prix);
const datePlat = new Date(plat.date + "T12:00").toLocaleDateString("fr-BE", { weekday: "long", day: "numeric", month: "long", year: "numeric" });
$("#plat").innerHTML = `
  <img src="${esc(plat.image)}" alt="${esc(plat.nom)}" width="800" height="600" loading="lazy">
  <div class="plat__body">
    <p class="eyebrow">Plat du jour</p>
    <h2>${esc(plat.nom)}</h2>
    <p>${esc(plat.description)}</p>
    <div class="plat__meta">
      <span class="plat__prix">${prix}</span>
      <time class="plat__date" datetime="${esc(plat.date)}">${datePlat}</time>
    </div>
  </div>`;

/* ---------- Spécialités ---------- */
$("#cards").innerHTML = SITE.specialites.map((s, i) => `
  <article class="card reveal" style="transition-delay:${(i % 3) * 0.1}s">
    <div class="card__img"><img src="${esc(s.image)}" alt="${esc(s.titre)}" width="800" height="600" loading="lazy"></div>
    <div class="card__body">
      <h3>${esc(s.titre)}</h3><p>${esc(s.texte)}</p>
      ${s.produits.length ? `<ul class="card__produits">${s.produits.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : ""}
    </div>
  </article>`).join("");

/* ---------- Notre équipe ---------- */
$("#equipe-liste").innerHTML = SITE.equipe.map((m, i) => `
  <article class="membre reveal" style="transition-delay:${i * 0.1}s">
    <img src="${esc(m.image)}" alt="Portrait de ${esc(m.prenom)} Paul" width="600" height="750" loading="lazy">
    <h3>${esc(m.prenom)}</h3>
    <a href="tel:${esc(m.telephoneLien)}">${esc(m.telephone)}</a>
  </article>`).join("");

/* ---------- Commandes ---------- */
$("#commandes-liste").innerHTML = SITE.commandes.map((c, i) => `
  <li class="commande reveal" style="transition-delay:${(i % 3) * 0.1}s">
    <div class="commande__img"><img src="${esc(c.image)}" alt="" width="800" height="600" loading="lazy"></div>
    <div class="commande__corps"><h3>${esc(c.titre)}</h3><p>${esc(c.texte)}</p></div>
  </li>`).join("");

/* ---------- Galerie ---------- */
$("#galerie").innerHTML = SITE.galerie.map((g) => `
  <figure class="galerie__item reveal"><img src="${esc(g.image)}" alt="${esc(g.alt)}" width="1000" height="750" loading="lazy"></figure>`).join("");

/* ---------- Téléphones des frères (section contact) ---------- */
$("#contact-freres").innerHTML = SITE.equipe.map((m) =>
  `<li>${esc(m.prenom)} : <a href="tel:${esc(m.telephoneLien)}">${esc(m.telephone)}</a></li>`).join("");

/* ---------- Produit phare de saison ---------- */
const phare = SITE.produitPhare;
if (phare.afficher) {
  $("#phare").hidden = false;
  $("#phare-contenu").innerHTML = `
    <img src="${esc(phare.image)}" alt="${esc(phare.titre)}" width="1200" height="900" loading="lazy">
    <div>
      <p class="eyebrow">${esc(phare.surtitre)}</p>
      <h2>${esc(phare.titre)}</h2>
      <p>${esc(phare.texte)}</p>
      <a class="btn btn--gold" href="tel:+3283231156">Commander : 083 23 11 56</a>
    </div>`;
}

/* ---------- Avis Google (note réelle, aucun témoignage inventé) ---------- */
const note = SITE.avis.note.toLocaleString("fr-BE");
$("#avis").innerHTML = `
  <p class="avis__note">${note}<small>/5</small></p>
  <div>
    <p class="etoiles" aria-hidden="true">★★★★★</p>
    <p>Note moyenne sur ${SITE.avis.nombre} avis Google</p>
  </div>
  <a class="btn btn--ghost" href="${esc(SITE.avis.lien)}" target="_blank" rel="noopener">Voir les avis sur Google</a>`;

/* ---------- Horaires + « Ouvert maintenant » ---------- */
$("#horaires").innerHTML = SITE.horaires.map((h, i) => `
  <tr class="${i === aujourdHui ? "is-today" : ""}"${i === aujourdHui ? ' aria-current="date"' : ""}>
    <th scope="row">${esc(h.jour)}</th>
    <td>${plagesTexte(h.plages, "<br>")}</td>
  </tr>`).join("");

// Congés annuels : dates "AAAA-MM-JJ" comparables directement en texte
const { conges } = SITE;
const dateDuJour = maintenant.toLocaleDateString("sv-SE"); // format AAAA-MM-JJ
const enConges = conges.afficher && dateDuJour >= conges.du && dateDuJour <= conges.au;
if (conges.afficher) {
  $("#conges").textContent = conges.message;
  $("#conges").hidden = false;
}

// shortcut: les jours fériés ne sont pas détectés, le statut peut afficher « ouvert » ce jour-là
const ouvert = !enConges && estOuvert(SITE.horaires[aujourdHui].plages, minutes);
const statut = $("#statut");
statut.textContent = ouvert ? "Ouvert maintenant" : enConges ? "Fermé pour congés" : "Fermé actuellement";
statut.classList.add(ouvert ? "is-open" : "is-closed");

/* ---------- Carte OpenStreetMap ---------- */
const { latitude: lat, longitude: lon } = SITE.boutique;
$("#carte").innerHTML = `
  <iframe title="Carte : Boucherie des Frères Paul, Rue du Commerce 11, Ciney" loading="lazy"
    src="https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.005},${lat - 0.0025},${lon + 0.005},${lat + 0.0025}&layer=mapnik&marker=${lat},${lon}"></iframe>
  <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}" target="_blank" rel="noopener">Agrandir la carte</a>`;
