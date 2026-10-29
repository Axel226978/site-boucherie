/* =========================================================
   Animations des pages de contenu : GSAP + ScrollTrigger, scroll fluide Lenis.
   Chargé en différé après pages.js. Rien ne se lance si le visiteur
   a demandé moins d'animations ou si les librairies n'ont pas chargé :
   le site reste alors complet et statique.
   ========================================================= */

if (!matchMedia("(prefers-reduced-motion: reduce)").matches && window.gsap && window.ScrollTrigger && window.Lenis) {
  gsap.registerPlugin(ScrollTrigger);

  /* ---------- Scroll fluide (molette ; le tactile garde le scroll natif) ---------- */
  const lenis = new Lenis({ anchors: { offset: -68 } });
  lenis.on("scroll", ScrollTrigger.update);
  gsap.ticker.add((t) => lenis.raf(t * 1000));
  gsap.ticker.lagSmoothing(0);

  /* ---------- Hero : titre lettre par lettre, puis le reste en fondu ---------- */
  const titre = $(".hero h1");
  titre.setAttribute("aria-label", titre.textContent);
  // Lettres groupées par mot pour que le titre ne se coupe jamais au milieu d'un mot ; le mot en <em> reste en italique
  titre.innerHTML = [...titre.childNodes].map((n) => {
    const mots = n.textContent.split(/(\s+)/).map((mot) => /^\s*$/.test(mot) ? mot :
      `<span class="mot" aria-hidden="true">${[...mot].map((l) => `<span class="lettre">${esc(l)}</span>`).join("")}</span>`).join("");
    return n.nodeName === "EM" ? `<em>${mots}</em>` : mots;
  }).join("");
  const entree = gsap.timeline({ defaults: { ease: "power3.out" } })
    .from(".hero h1 .lettre", { opacity: 0, yPercent: 60, rotate: 6, duration: .5, stagger: .02 })
    .from(".hero__sub, .hero__actions, .hero__infos", { opacity: 0, y: 20, duration: .5, stagger: .1 }, "-=.3");
  // Pendant l'intro de première visite, le titre attend qu'elle se termine
  if ($("#intro:not([hidden]):not(.is-fini)")) {
    entree.pause();
    document.addEventListener("intro-fin", () => entree.play(), { once: true });
  }

  // Parallaxe : la photo descend plus lentement que le texte
  const hero = { trigger: ".hero", start: "top top", end: "bottom top", scrub: true };
  // scale: 1 sinon GSAP fige le zoom Ken Burns du moment dans son transform et il se cumule
  gsap.set(".hero__img", { scale: 1 });
  gsap.to(".hero__img", { yPercent: 25, ease: "none", scrollTrigger: hero });
  gsap.to(".hero__content", { yPercent: -15, opacity: .2, ease: "none", scrollTrigger: hero });

  /* ---------- Compteurs des chiffres clés ---------- */
  document.querySelectorAll("[data-compteur]").forEach((el) => {
    // « 4,7 » en français, « 4.7 » en anglais
    const fin = parseFloat(el.textContent.replace(",", "."));
    const decimales = (el.textContent.match(/[.,](\d+)/) || ["", ""])[1].length;
    const format = (n) => n.toLocaleString(SITE.langue, { minimumFractionDigits: decimales, maximumFractionDigits: decimales });
    const compteur = { n: 0 };
    el.textContent = format(0);
    gsap.to(compteur, {
      n: fin, duration: 1.8, ease: "power2.out",
      scrollTrigger: { trigger: el, start: "top 90%", once: true },
      onUpdate: () => { el.textContent = format(compteur.n); }
    });
  });

  /* ---------- Boudin de Noël : neige du 1er décembre au 6 janvier ---------- */
  const encart = $("#phare");
  const mois = maintenant.getMonth(), jour = maintenant.getDate();
  if (encart && !encart.hidden && (mois === 11 || (mois === 0 && jour <= 6))) {
    const canvas = document.createElement("canvas");
    canvas.className = "neige";
    canvas.setAttribute("aria-hidden", "true");
    encart.prepend(canvas);
    const ctx = canvas.getContext("2d");
    const flocons = Array.from({ length: 70 }, () => ({ x: Math.random(), y: Math.random(), r: 1 + Math.random() * 2.2, v: .2 + Math.random() * .5, d: Math.random() * 6 }));
    let visible = false;
    const taille = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    taille();
    addEventListener("resize", taille);
    // Ne dessine que lorsque l'encart est à l'écran
    new IntersectionObserver(([e]) => { visible = e.isIntersecting; }).observe(encart);
    gsap.ticker.add((t) => {
      if (!visible) return;
      const { width: w, height: h } = canvas;
      ctx.clearRect(0, 0, w, h);
      ctx.fillStyle = "rgb(251 247 240 / .75)";
      flocons.forEach((f) => {
        f.y = (f.y + f.v / h) % 1;
        ctx.beginPath();
        ctx.arc(f.x * w + Math.sin(t + f.d) * 12, f.y * h, f.r, 0, 7);
        ctx.fill();
      });
    });
  }
}
