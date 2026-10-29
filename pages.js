/* =========================================================
   Pages de contenu (accueil, viandes, la maison, spécialités,
   commandes, contact), contenu lu depuis data.js.
   Chaque bloc ne s'exécute que si sa section est dans la page.
   ========================================================= */

const tactile = matchMedia("(hover: none)");

/* ---------- Accordéon « Nos viandes » ---------- */
const accordeon = $("#accordeon");
if (accordeon) {
  // Une colonne par animal (un clic la choisit, sans changer de page) ; seul le bouton du panneau mène à la page
  accordeon.innerHTML = `
    <span class="accordeon__fonds" aria-hidden="true">
      ${SITE.animaux.map((a, i) => `<img class="accordeon__fond${i === 0 ? " is-active" : ""}" src="${esc(a.photo)}" alt="">`).join("")}
    </span>
    <div class="accordeon__onglets" role="tablist">
      ${SITE.animaux.map((a, i) => `
      <button class="onglet${i === 0 ? " is-active" : ""}" type="button" role="tab" aria-selected="${i === 0}" aria-controls="accordeon-panneau" data-index="${i}">
        <span class="onglet__nom">${esc(a.nom)}</span>
      </button>`).join("")}
    </div>
    <div class="accordeon__panneau" id="accordeon-panneau" role="tabpanel"></div>`;

  const onglets = [...accordeon.querySelectorAll(".onglet")];
  const fonds = [...accordeon.querySelectorAll(".accordeon__fond")];
  const panneau = $("#accordeon-panneau");
  const choisir = (n) => {
    const a = SITE.animaux[n];
    onglets.forEach((o, i) => { o.classList.toggle("is-active", i === n); o.setAttribute("aria-selected", i === n); });
    fonds.forEach((f, i) => f.classList.toggle("is-active", i === n));
    panneau.innerHTML = `
      <div class="accordeon__texte">
        <h3 class="accordeon__nom">${esc(a.nom)}</h3>
        <p class="accordeon__accroche">${esc(a.accroche)}</p>
        <a class="btn btn--ghost" href="${esc(a.id)}.html" aria-label="${esc(T.voirMorceauxDe(a.nom))}">${T.voirMorceaux} <span aria-hidden="true">→</span></a>
      </div>`;
  };
  onglets.forEach((o, i) => o.addEventListener("click", () => choisir(i)));
  choisir(0);
}

/* ---------- Hero de l'accueil : vidéo en boucle ---------- */
// Pas de vidéo si les animations sont réduites, ni sur téléphone avec une connexion lente : la photo reste
const video = $(".hero__video");
const connexion = navigator.connection;
const connexionLente = connexion && (connexion.saveData || /2g|3g/.test(connexion.effectiveType));
if (video && !matchMedia("(prefers-reduced-motion: reduce)").matches && !(connexionLente && matchMedia("(max-width: 899px)").matches)) {
  video.src = video.dataset.src;
  video.addEventListener("playing", () => video.classList.add("is-prete"), { once: true });
  // En pause hors de l'écran pour ménager la batterie ; play() refusé (mode économie…) : la photo reste
  new IntersectionObserver(([e]) => { if (e.isIntersecting) video.play().catch(() => {}); else video.pause(); }).observe(video);
}

/* ---------- Plat du jour ---------- */
if ($("#plat")) {
  const plat = SITE.platDuJour;
  const prix = new Intl.NumberFormat(SITE.langue, { style: "currency", currency: "EUR" }).format(plat.prix);
  const datePlat = new Date(plat.date + "T12:00").toLocaleDateString(SITE.langue, { weekday: "long", day: "numeric", month: "long", year: "numeric" });
  $("#plat").innerHTML = `
    <img src="${esc(plat.image)}" alt="${esc(plat.nom)}" width="800" height="600" loading="lazy">
    <div class="plat__body">
      <p class="plat__titre">${T.platDuJour}</p>
      <h2>${esc(plat.nom)}</h2>
      <p>${esc(plat.description)}</p>
      <div class="plat__meta">
        <span class="plat__prix">${prix}</span>
        <time class="plat__date" datetime="${esc(plat.date)}">${datePlat}</time>
      </div>
    </div>`;
}

/* ---------- Spécialités : carte qui se retourne (photo au recto, produits au verso) ---------- */
if ($("#cards")) {
  $("#cards").innerHTML = SITE.specialites.map((s, i) => `
    <article class="card reveal" style="transition-delay:${(i % 3) * 0.06}s" tabindex="0">
      <div class="card__inner">
        <div class="card__face card__recto">
          <div class="card__img"><img src="${esc(s.image)}" alt="${esc(s.titre)}" width="800" height="600" loading="lazy"></div>
          <div class="card__body"><h3>${esc(s.titre)}</h3><p>${esc(s.texte)}</p></div>
        </div>
        <div class="card__face card__verso">
          <p class="card__verso-titre">${esc(s.titre)}</p>
          ${s.produits.length ? `<ul class="card__produits">${s.produits.map((p) => `<li>${esc(p)}</li>`).join("")}</ul>` : `<p>${esc(s.texte)}</p>`}
        </div>
      </div>
    </article>`).join("");
  // Tactile : un tap retourne la carte (au survol sur ordinateur, voir style.css)
  document.querySelectorAll(".card").forEach((c) => c.addEventListener("click", () => {
    if (tactile.matches) c.classList.toggle("is-flipped");
  }));
}

/* ---------- Notre équipe ---------- */
if ($("#equipe-liste")) {
  $("#equipe-liste").innerHTML = SITE.equipe.map((m, i) => `
    <article class="membre reveal" style="transition-delay:${i * 0.06}s">
      <img src="${esc(m.image)}" alt="${esc(T.portrait(m.prenom))}" width="600" height="750" loading="lazy">
      <h3>${esc(m.prenom)}</h3>
      <a href="tel:${esc(m.telephoneLien)}">${esc(m.telephone)}</a>
    </article>`).join("");
}

/* ---------- Commandes ---------- */
if ($("#commandes-liste")) {
  $("#commandes-liste").innerHTML = SITE.commandes.map((c, i) => `
    <li class="commande reveal" style="transition-delay:${(i % 3) * 0.06}s">
      <div class="commande__img"><img src="${esc(c.image)}" alt="" width="800" height="600" loading="lazy"></div>
      <div class="commande__corps"><h3>${esc(c.titre)}</h3><p>${esc(c.texte)}</p></div>
    </li>`).join("");
}

/* ---------- Téléphones des frères (page contact) ---------- */
if ($("#contact-freres")) {
  $("#contact-freres").innerHTML = SITE.equipe.map((m) =>
    `<li>${esc(m.prenom)} : <a href="tel:${esc(m.telephoneLien)}">${esc(m.telephone)}</a></li>`).join("");
}

/* ---------- Produit phare de saison ---------- */
const phare = SITE.produitPhare;
if (phare.afficher && $("#phare")) {
  $("#phare").hidden = false;
  $("#phare-contenu").innerHTML = `
    <img src="${esc(phare.image)}" alt="${esc(phare.titre.replace(/\*/g, ""))}" width="1200" height="900" loading="lazy">
    <div>
      <p class="eyebrow">${esc(phare.surtitre)}</p>
      <h2>${esc(phare.titre).replace(/\*(.+?)\*/g, "<em>$1</em>")}</h2>
      <p>${esc(phare.texte)}</p>
      <a class="btn btn--gold" href="tel:+3283231156">${T.commander} : 083 23 11 56</a>
    </div>`;
}

/* ---------- Avis Google (note réelle, aucun témoignage inventé) ---------- */
const note = SITE.avis.note.toLocaleString(SITE.langue);
if ($("#note-chiffre")) $("#note-chiffre").textContent = note;
if ($("#avis")) {
  $("#avis").innerHTML = `
    <p class="avis__note">${note}<small>/5</small></p>
    <div>
      <p class="etoiles" aria-hidden="true">★★★★★</p>
      <p>${T.noteMoyenne(SITE.avis.nombre)}</p>
    </div>
    <a class="btn btn--ghost" href="${esc(SITE.avis.lien)}" target="_blank" rel="noopener">${T.voirAvis}</a>`;
}

/* ---------- Congés annuels (bandeau de l'accueil) ---------- */
// Dates "AAAA-MM-JJ" comparables directement en texte
const { conges } = SITE;
const dateDuJour = maintenant.toLocaleDateString("sv-SE"); // format AAAA-MM-JJ
const enConges = conges.afficher && dateDuJour >= conges.du && dateDuJour <= conges.au;
if (conges.afficher && $("#conges")) {
  $("#conges").textContent = conges.message;
  $("#conges").hidden = false;
}

/* ---------- Horaires + « Ouvert maintenant » (page contact) ---------- */
if ($("#horaires")) {
  $("#horaires").innerHTML = SITE.horaires.map((h, i) => `
    <tr class="${i === aujourdHui ? "is-today" : ""}"${i === aujourdHui ? ' aria-current="date"' : ""}>
      <th scope="row">${esc(h.jour)}</th>
      <td>${plagesTexte(h.plages, "<br>")}</td>
    </tr>`).join("");

  // shortcut: les jours fériés ne sont pas détectés, le statut peut afficher « ouvert » ce jour-là
  const ouvert = !enConges && estOuvert(SITE.horaires[aujourdHui].plages, minutes);
  const statut = $("#statut");
  statut.textContent = ouvert ? T.ouvert : enConges ? T.fermeConges : T.fermeActuellement;
  statut.classList.add(ouvert ? "is-open" : "is-closed");
}

/* ---------- Carte OpenStreetMap (page contact) ---------- */
if ($("#carte")) {
  const { latitude: lat, longitude: lon } = SITE.boutique;
  $("#carte").innerHTML = `
    <iframe title="${T.carte}" loading="lazy"
      src="https://www.openstreetmap.org/export/embed.html?bbox=${lon - 0.005},${lat - 0.0025},${lon + 0.005},${lat + 0.0025}&layer=mapnik&marker=${lat},${lon}"></iframe>
    <a href="https://www.openstreetmap.org/?mlat=${lat}&mlon=${lon}#map=17/${lat}/${lon}" target="_blank" rel="noopener">${T.agrandirCarte}</a>`;
}
