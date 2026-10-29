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
  const ANGLES_DEPART = "85deg 75deg"; // presque de profil : les points restent bien espacés
  const CHAMP = 30; // champ de vision fixe (degrés) : le cadrage se règle par la distance

  const repli = () => { vue.hidden = true; $("#dessin").hidden = false; };

  const afficher = () => {
    const mv = document.createElement("model-viewer");
    Object.entries({
      src: modele.src, alt: `${animal.nom} en 3D : touchez un point doré pour voir le morceau`,
      "camera-controls": "", "touch-action": "pan-y", "disable-pan": "", "interaction-prompt": "none",
      "camera-orbit": `${ANGLES_DEPART} auto`, "field-of-view": `${CHAMP}deg`,
      "min-field-of-view": `${CHAMP}deg`, "max-field-of-view": `${CHAMP}deg`,
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

    // Cadrage : la bête occupe ~80 % de la largeur du cadre (et 85 % de sa hauteur au plus)
    let rayon = 0;
    const cadrer = () => {
      const d = mv.getDimensions(), c = mv.getBoundingBoxCenter(), r = mv.getBoundingClientRect();
      if (!d.z || !r.width) return;
      const tan = Math.tan(CHAMP * Math.PI / 360);
      // 0.88 et non 0.8 : la vue de trois quarts et la perspective raccourcissent la bête d'environ 10 %
      const parLargeur = Math.max(d.z, d.x) / 0.88 / (2 * tan * (r.width / r.height));
      const parHauteur = d.y / 0.85 / (2 * tan);
      rayon = Math.max(parLargeur, parHauteur) + d.x / 2;
      mv.cameraTarget = `${c.x}m ${c.y}m ${c.z}m`;
      mv.minCameraOrbit = `auto 35deg ${rayon * 0.6}m`;
      mv.maxCameraOrbit = `auto 100deg ${rayon * 1.3}m`;
    };
    const vueDepart = () => { mv.cameraOrbit = `${ANGLES_DEPART} ${rayon}m`; };
    mv.addEventListener("load", () => { cadrer(); vueDepart(); mv.jumpCameraToGoal(); });
    new ResizeObserver(() => { if (mv.loaded) cadrer(); }).observe(mv);

    // Zones du modèle : une matière par morceau, nommée par son id (images/3d/*.glb)
    const BORDEAUX = [0.42, 0.06, 0.09, 1], SURVOL = [0.55, 0.2, 0.2, 1];
    let actif = null, survole = null;
    const tonsDepart = new Map();
    mv.addEventListener("load", () => mv.model.materials.forEach((m) => tonsDepart.set(m.name, [...m.pbrMetallicRoughness.baseColorFactor])));
    const colorer = () => mv.model?.materials.forEach((m) => {
      const id = m.name;
      const teinte = actif === "entier" || id === actif ? BORDEAUX : id === survole ? SURVOL : tonsDepart.get(id);
      if (teinte) m.pbrMetallicRoughness.setBaseColorFactor(teinte);
    });

    // Choix d'un morceau : sa zone passe en bordeaux, la bête se tourne vers lui (sans zoom, elle reste entière)
    const choisir = (id) => {
      const [, [nx, ny, nz]] = modele.points[id];
      const theta = Math.atan2(nx, nz) * 180 / Math.PI;
      const phi = Math.min(90, Math.max(60, Math.acos(Math.max(-1, Math.min(1, ny))) * 180 / Math.PI));
      mv.autoRotate = false;
      mv.cameraOrbit = `${theta}deg ${phi}deg ${rayon}m`;
      bouger();
      actif = id; colorer();
      mv.querySelectorAll(".vue3d__point").forEach((b) => b.classList.toggle("is-actif", b.dataset.id === id));
      ouvrirFiche(morceauParId[id]);
      ensemble.hidden = false;
      // Téléphone : la fiche est sous la scène, on l'amène à l'écran
      if (matchMedia("(max-width: 899px)").matches) fiche.scrollIntoView({ behavior: reduit ? "auto" : "smooth", block: "nearest" });
    };

    // Clic sur un point ou directement sur une zone de l'animal (mais pas à la fin d'une rotation à la souris)
    let depart = null;
    mv.addEventListener("pointerdown", (e) => { depart = [e.clientX, e.clientY]; });
    mv.addEventListener("click", (e) => {
      const point = e.target.closest(".vue3d__point");
      if (point) return choisir(point.dataset.id);
      if (depart && Math.hypot(e.clientX - depart[0], e.clientY - depart[1]) > 5) return;
      const zone = mv.materialFromPoint(e.clientX, e.clientY)?.name;
      if (modele.points[zone]) choisir(zone);
    });

    // Souris : la zone survolée s'éclaire
    if (matchMedia("(hover: hover)").matches) {
      let attente = false;
      mv.addEventListener("pointermove", (e) => {
        if (attente || e.buttons) return;
        attente = true;
        requestAnimationFrame(() => {
          attente = false;
          const zone = mv.materialFromPoint(e.clientX, e.clientY)?.name;
          const nouvelle = modele.points[zone] ? zone : null;
          mv.style.cursor = nouvelle ? "pointer" : "";
          if (nouvelle !== survole) { survole = nouvelle; colorer(); }
        });
      });
      mv.addEventListener("pointerleave", () => { survole = null; colorer(); });
    }

    ensemble.addEventListener("click", () => {
      vueDepart();
      mv.autoRotate = !reduit;
      bouger();
      actif = null; colorer();
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
