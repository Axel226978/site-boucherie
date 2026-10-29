/* =========================================================
   Planches de découpe — une vraie photo par animal (images/planches/).
   - photo      : la photo (tête à gauche)
   - viewBox    : repère des coordonnées ci-dessous (largeur 800 = largeur de la photo)
   - silhouette : contour de l'animal sur la photo ; découpe aussi les zones
   - zones      : forme de chaque morceau (id = id du morceau dans data.js),
                  découpée par la silhouette, donc de simples rectangles suffisent
   Si une photo est remplacée, il faut retracer silhouette et zones.
   Ce fichier ne contient que les formes : le contenu reste dans data.js.
   ========================================================= */

const DESSINS = {
  porc: {
    photo: "images/planches/porc.jpg",
    viewBox: "0 0 800 600",
    silhouette: "M200,140 L300,128 L400,122 L500,120 L600,122 L680,130 L720,150 L745,185 L755,230 L752,280 L740,320 L720,345 L705,370 L700,400 L700,440 L690,470 L670,478 L645,470 L640,440 L630,400 L615,340 L600,330 L560,345 L520,355 L470,350 L400,345 L345,345 L330,380 L320,420 L315,460 L300,485 L280,488 L272,470 L275,430 L272,390 L255,350 L230,330 L200,320 L165,320 L130,315 L100,305 L80,290 L70,265 L72,235 L90,200 L115,170 L150,150 Z",
    zones: {
      tete: "M0,0 H190 V600 H0 Z",
      echine: "M190,0 H320 V230 H190 Z",
      carre: "M320,0 H450 V230 H320 Z",
      filet: "M450,0 H610 V200 H450 Z",
      "filet-mignon": "M450,200 H610 V240 H450 Z",
      epaule: "M190,230 H320 V350 H190 Z",
      poitrine: "M320,230 H450 V240 H610 V370 H320 Z",
      jambon: "M610,0 H800 V375 H610 Z",
      jarret: "M190,350 H345 V430 H190 Z M600,375 H760 V440 H600 Z",
      pied: "M190,430 H345 V600 H190 Z M600,440 H760 V600 H600 Z"
    }
  },

  boeuf: {
    photo: "images/planches/boeuf.jpg",
    viewBox: "0 0 800 533",
    silhouette: "M55,125 L75,95 L100,65 L150,35 L185,30 L200,55 L240,62 L290,72 L350,95 L420,102 L500,95 L580,85 L640,80 L670,88 L690,110 L700,160 L705,220 L712,270 L728,320 L715,330 L700,300 L690,260 L685,330 L690,380 L712,440 L700,450 L683,447 L672,400 L660,355 L645,370 L640,440 L625,447 L608,440 L615,400 L620,340 L605,320 L560,320 L520,340 L480,345 L420,330 L370,320 L355,350 L340,400 L330,440 L300,445 L290,435 L305,400 L300,350 L285,335 L250,330 L230,310 L210,270 L190,230 L160,170 L130,150 L110,150 L80,140 L60,140 Z",
    zones: {
      collier: "M150,0 H255 V250 H150 Z",
      "basses-cotes": "M255,0 H340 V190 H255 Z",
      cote: "M340,0 H420 V190 H340 Z",
      "faux-filet": "M420,0 H500 V190 H420 Z",
      aloyau: "M500,0 H550 V190 H500 Z",
      rumsteck: "M550,0 H625 V190 H550 Z",
      paleron: "M255,190 H340 V260 H255 Z",
      macreuse: "M150,250 H255 V260 H340 V345 H150 Z",
      "plat-de-cotes": "M340,190 H420 V335 H340 Z",
      hampe: "M420,190 H470 V260 H420 Z",
      onglet: "M420,260 H470 V345 H420 Z",
      filet: "M470,190 H610 V235 H470 Z",
      bavette: "M470,235 H610 V350 H470 Z",
      gite: "M625,0 H690 V375 H610 V190 H625 Z",
      queue: "M690,80 H740 V340 H690 Z",
      jarret: "M280,345 H370 V420 H280 Z M600,375 H725 V425 H600 Z"
    }
  },

  veau: {
    photo: "images/planches/veau.jpg",
    viewBox: "0 0 800 600",
    silhouette: "M20,320 L25,270 L40,195 L65,170 L100,175 L150,170 L190,160 L250,130 L300,115 L400,110 L500,115 L580,125 L650,145 L685,175 L700,220 L700,300 L695,350 L690,400 L695,460 L690,520 L660,525 L650,500 L640,440 L625,400 L610,440 L605,500 L590,515 L570,510 L580,460 L585,400 L570,350 L520,345 L470,350 L420,350 L370,360 L345,380 L330,430 L320,500 L300,550 L280,555 L275,520 L290,460 L285,400 L280,365 L240,340 L200,320 L140,320 L100,315 L70,330 L40,335 Z",
    zones: {
      epaule: "M150,0 H310 V370 H150 Z",
      cotes: "M310,0 H420 V260 H310 Z",
      poitrine: "M310,260 H420 V380 H310 Z",
      longe: "M420,0 H530 V210 H420 Z",
      filet: "M420,210 H530 V250 H420 Z",
      tendron: "M420,250 H530 V360 H420 Z",
      quasi: "M530,0 H710 V220 H530 Z",
      escalopes: "M530,220 H610 V360 H530 Z",
      noix: "M610,220 H710 V300 H610 Z",
      "sous-noix": "M610,300 H710 V400 H610 Z",
      jarret: "M265,370 H355 V470 H265 Z M560,400 H710 V470 H560 Z"
    }
  },

  agneau: {
    photo: "images/planches/agneau.jpg",
    viewBox: "0 0 800 600",
    silhouette: "M155,185 L160,165 L210,160 L245,140 L290,148 L310,155 L355,155 L362,165 L335,180 L370,150 L430,130 L500,125 L560,135 L595,165 L615,200 L625,240 L618,290 L610,330 L620,380 L625,440 L615,495 L595,497 L590,450 L580,400 L560,370 L555,420 L545,470 L530,495 L510,495 L520,440 L525,380 L510,345 L480,330 L430,330 L385,340 L370,380 L360,440 L355,475 L335,478 L325,440 L315,400 L300,375 L250,360 L225,330 L210,290 L215,250 L205,195 L190,192 Z",
    zones: {
      collier: "M300,0 H345 V260 H300 Z",
      cotelettes: "M345,0 H400 V240 H345 Z",
      carre: "M400,0 H460 V240 H400 Z",
      selle: "M460,0 H545 V230 H460 Z",
      filet: "M460,230 H545 V345 H460 Z",
      epaule: "M200,280 H300 V260 H345 V240 H460 V390 H200 Z",
      gigot: "M545,0 H640 V400 H545 Z",
      souris: "M500,400 H640 V500 H500 Z"
    }
  },

  volaille: {
    photo: "images/planches/volaille.jpg",
    viewBox: "0 0 800 600",
    silhouette: "M232,100 L245,75 L270,55 L295,52 L300,75 L330,90 L360,120 L390,170 L420,200 L500,215 L570,210 L600,160 L640,125 L700,110 L730,140 L750,190 L735,250 L700,290 L660,310 L630,350 L600,380 L560,420 L540,460 L480,480 L450,490 L445,520 L465,540 L430,555 L380,550 L420,530 L425,490 L400,470 L375,440 L360,465 L345,460 L350,430 L320,420 L290,390 L255,340 L230,290 L225,230 L240,190 L270,165 L255,145 L240,115 Z",
    zones: {
      supreme: "M200,160 H330 V290 H200 Z",
      blanc: "M200,290 H360 V420 H200 Z",
      cuisse: "M360,330 H600 V430 H360 Z",
      pilon: "M320,420 H480 V600 H320 Z",
      // L'aile est tracée en dernier : elle passe au-dessus du blanc et de la cuisse
      aile: "M330,215 C400,200 500,210 570,230 C580,280 560,320 520,335 C450,345 380,335 345,305 C330,280 325,245 330,215 Z"
    }
  }
};
