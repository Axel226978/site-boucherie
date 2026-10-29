/* =========================================================
   Animal en 3D (pages porc, bœuf, veau, agneau, volaille) avec <model-viewer>.
   Modèle et points cliquables : data.js (animal.modele3d).
   La planche de découpe (#dessin) reste affichée tant que la 3D
   n'est pas chargée, et revient si elle échoue.
   ========================================================= */

const modele = animal.modele3d;
const vue = $("#vue3d");

if (modele && vue) {
  const reduit = matchMedia("(prefers-reduced-motion: reduce)").matches;
  const scene = $("#vue3d-scene");
  const fiche = $("#vue3d-fiche");
  const ensemble = $("#vue3d-ensemble");
  const aideInitiale = fiche.innerHTML;
  const VUE_DEPART = "85deg 75deg auto"; // presque de profil : les points restent bien espacés

  const repli = () => { vue.hidden = true; $("#dessin").hidden = false; };

  const afficher = () => {
    const mv = document.createElement("model-viewer");
    Object.entries({
      src: modele.src, alt: `${animal.nom} en 3D : touchez un point doré pour voir le morceau`,
      "camera-controls": "", "touch-action": "pan-y", "disable-pan": "", "interaction-prompt": "none",
      "camera-orbit": VUE_DEPART, "min-camera-orbit": "auto 35deg auto", "max-camera-orbit": "auto 100deg auto",
      "min-field-of-view": "14deg", "max-field-of-view": "40deg", "field-of-view": "auto",
      "shadow-intensity": "0.9", "shadow-softness": "1", exposure: "1.05", "environment-image": "neutral",
      "auto-rotate-delay": "3000", "rotation-per-second": "8deg"
    }).forEach(([k, v]) => mv.setAttribute(k, v));
    if (!reduit) mv.setAttribute("auto-rotate", "");

    mv.innerHTML = `
      <div class="vue3d__chargement" slot="progress-bar"><span></span><p>Chargement de la 3D</p></div>
      ${Object.entries(modele.points).map(([id, [p, n]]) => `
        <button class="vue3d__point" slot="hotspot-${esc(id)}" type="button" data-id="${esc(id)}" data-visibility-attribute="visible"
          data-position="${p.join(" ")}" data-normal="${n.join(" ")}" aria-label="Voir : ${esc(morceauParId[id].nom)}">
          <span class="vue3d__nom" aria-hidden="true">${esc(morceauParId[id].nom)}</span>
        </button>`).join("")}`;
    scene.prepend(mv);

    // La barre de chargement suit la progression, puis s'efface
    const barre = mv.querySelector(".vue3d__chargement");
    mv.addEventListener("progress", (e) => {
      barre.querySelector("span").style.transform = `scaleX(${e.detail.totalProgress})`;
      if (e.detail.totalProgress === 1) barre.classList.add("is-fini");
    });
    mv.addEventListener("error", repli, { once: true });

    const bouger = () => { if (reduit) mv.jumpCameraToGoal(); };

    // Clic sur un point : la caméra se tourne vers le morceau et zoome, la fiche s'ouvre à côté
    mv.addEventListener("click", (e) => {
      const point = e.target.closest(".vue3d__point");
      if (!point) return;
      const [p, [nx, ny, nz]] = modele.points[point.dataset.id];
      const theta = Math.atan2(nx, nz) * 180 / Math.PI;
      const phi = Math.min(95, Math.max(45, Math.acos(Math.max(-1, Math.min(1, ny))) * 180 / Math.PI));
      mv.autoRotate = false;
      mv.cameraTarget = p.map((v) => v + "m").join(" ");
      mv.cameraOrbit = `${theta}deg ${phi}deg 55%`;
      mv.fieldOfView = "24deg";
      bouger();
      mv.querySelectorAll(".vue3d__point").forEach((b) => b.classList.toggle("is-actif", b === point));
      ouvrirFiche(morceauParId[point.dataset.id]);
      ensemble.hidden = false;
      // Téléphone : la fiche est sous la scène, on l'amène à l'écran
      if (matchMedia("(max-width: 899px)").matches) fiche.scrollIntoView({ behavior: reduit ? "auto" : "smooth", block: "nearest" });
    });

    ensemble.addEventListener("click", () => {
      mv.cameraTarget = "auto auto auto";
      mv.cameraOrbit = VUE_DEPART;
      mv.fieldOfView = "auto";
      mv.autoRotate = !reduit;
      bouger();
      mv.querySelectorAll(".vue3d__point").forEach((b) => b.classList.remove("is-actif"));
      fiche.innerHTML = aideInitiale;
      ensemble.hidden = true;
    });

    vue.hidden = false;
    $("#dessin").hidden = true;
  };

  const ouvrirFiche = (m) => {
    fiche.innerHTML = `
      <p class="eyebrow">Le morceau</p>
      <h3>${esc(m.nom)}</h3>
      <p>${esc(m.description)}</p>
      <h4>Cuissons conseillées</h4>${puces(m.cuisson)}
      <h4>Idée recette</h4><p>${esc(m.recette)}</p>
      ${m.produits ? `<h4>Fait maison</h4>${puces(m.produits)}` : ""}
      <a class="vue3d__lien" href="#morceau-${esc(m.id)}">Voir la fiche complète</a>`;
  };

  // Chargé seulement à l'approche de la planche : le reste de la page ne paie pas les ~250 Ko de model-viewer
  new IntersectionObserver(([e], obs) => {
    if (!e.isIntersecting) return;
    obs.disconnect();
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://cdn.jsdelivr.net/npm/@google/model-viewer@4.3.1/dist/model-viewer.min.js";
    script.onerror = repli;
    document.head.append(script);
    customElements.whenDefined("model-viewer").then(afficher);
  }, { rootMargin: "400px" }).observe($("#decoupe"));
}
