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
    // Téléphone : les noms sont trop serrés sur la bête, ils passent en étiquettes sous la scène (CSS)
    scene.insertAdjacentHTML("beforeend", `<div class="vue3d__liste">${Object.keys(modele.points).map((id) =>
      `<button type="button" data-id="${esc(id)}">${esc(morceauParId[id].nom)}</button>`).join("")}</div>`);

    // La barre de chargement suit la progression, puis s'efface
    const barre = mv.querySelector(".vue3d__chargement");
    mv.addEventListener("progress", (e) => {
      barre.querySelector("span").style.transform = `scaleX(${e.detail.totalProgress})`;
      if (e.detail.totalProgress === 1) barre.classList.add("is-fini");
    });
    mv.addEventListener("error", repli, { once: true });

    const bouger = () => { if (reduit) mv.jumpCameraToGoal(); };

    // Noms des morceaux : chacun prend la première place libre autour de son point (droite, gauche, haut, bas)
    const PLACES = ["droite", "gauche", "haut", "bas"];
    const chevauche = (a, b) => a.left < b.right && a.right > b.left && a.top < b.bottom && a.bottom > b.top;
    const placerNoms = () => {
      const points = [...mv.querySelectorAll(".vue3d__point[data-visible]")];
      const occupes = points.map((p) => p.getBoundingClientRect());
      for (const p of points) {
        const nom = p.querySelector(".vue3d__nom");
        const libre = PLACES.find((place) => {
          nom.dataset.place = place;
          const r = nom.getBoundingClientRect();
          return !occupes.some((o) => chevauche(r, o));
        });
        if (!libre) nom.dataset.place = "droite";
        occupes.push(nom.getBoundingClientRect());
      }
    };
    // Recalculé quand la caméra bouge, au plus toutes les 150 ms (pendant la rotation automatique)
    let dernierPlacement = 0;
    mv.addEventListener("camera-change", () => {
      const t = performance.now();
      if (t - dernierPlacement > 150) { dernierPlacement = t; requestAnimationFrame(placerNoms); }
    });
    mv.addEventListener("load", () => setTimeout(placerNoms, 100));

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

    // Choix d'un morceau : sa zone passe en bordeaux, la caméra se tourne vers lui et zoome, la fiche s'ouvre
    const choisir = (id) => {
      const [p, [nx, ny, nz]] = modele.points[id];
      const theta = Math.atan2(nx, nz) * 180 / Math.PI;
      const phi = Math.min(95, Math.max(45, Math.acos(Math.max(-1, Math.min(1, ny))) * 180 / Math.PI));
      mv.autoRotate = false;
      mv.cameraTarget = p.map((v) => v + "m").join(" ");
      mv.cameraOrbit = `${theta}deg ${phi}deg 55%`;
      mv.fieldOfView = "24deg";
      bouger();
      actif = id; colorer();
      mv.querySelectorAll(".vue3d__point").forEach((b) => b.classList.toggle("is-actif", b.dataset.id === id));
      scene.querySelectorAll(".vue3d__liste button").forEach((b) => b.classList.toggle("is-actif", b.dataset.id === id));
      ouvrirFiche(morceauParId[id]);
      ensemble.hidden = false;
      // Téléphone : la fiche est sous la scène, on l'amène à l'écran
      if (matchMedia("(max-width: 899px)").matches) fiche.scrollIntoView({ behavior: reduit ? "auto" : "smooth", block: "nearest" });
    };

    // Clic sur un point ou directement sur une zone de l'animal (mais pas à la fin d'une rotation à la souris)
    scene.querySelector(".vue3d__liste").addEventListener("click", (e) => {
      const b = e.target.closest("button");
      if (b) choisir(b.dataset.id);
    });
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
      mv.cameraTarget = "auto auto auto";
      mv.cameraOrbit = VUE_DEPART;
      mv.fieldOfView = "auto";
      mv.autoRotate = !reduit;
      bouger();
      actif = null; colorer();
      mv.querySelectorAll(".vue3d__point").forEach((b) => b.classList.remove("is-actif"));
      scene.querySelectorAll(".vue3d__liste button").forEach((b) => b.classList.remove("is-actif"));
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
