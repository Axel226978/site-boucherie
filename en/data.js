/* =========================================================
   English version: translation of the texts in data.js.
   Only the texts live here; photos, opening hours, prices and 3D stay in ../data.js.
   Lists are matched by id (or by position when there is no id).
   ========================================================= */
const TRADUCTION = {
  langue: "en-GB",

  textes: {
    heure: ":", // 09:00
    deuxPoints: ": ",
    menuOuvrir: "Open the menu",
    menuFermer: "Close the menu",
    ferme: "Closed",
    feries: "Closed on public holidays",
    voirMorceaux: "See the cuts",
    voirMorceauxDe: (nom) => `${nom}: see the cuts`,
    platDuJour: "Dish of the day",
    portrait: (prenom) => `Portrait of ${prenom} Paul`,
    commander: "Order",
    noteMoyenne: (n) => `Average rating from ${n} Google reviews`,
    voirAvis: "Read the reviews on Google",
    ouvert: "Open now",
    fermeConges: "Closed for holidays",
    fermeActuellement: "Closed now",
    carte: "Map: Boucherie des Frères Paul, Rue du Commerce 11, Ciney",
    agrandirCarte: "View larger map",
    planche: (nom) => `Butcher's chart: ${nom}`,
    notreChoix: "Our pick",
    cuissons: "How to cook it",
    recette: "Recipe idea",
    faitMaison: "Homemade",
    prix: "Price: ask in the shop",
    leMorceau: "The cut",
    ficheComplete: "See the full card",
    alt3d: (nom) => `${nom} in 3D: tap a gold dot to see the cut`,
    chargement3d: "Loading 3D",
    voir: (nom) => `See: ${nom}`
  },

  horaires: [
    { jour: "Monday" }, { jour: "Tuesday" }, { jour: "Wednesday" }, { jour: "Thursday" },
    { jour: "Friday" }, { jour: "Saturday" }, { jour: "Sunday" }
  ],

  conges: {
    message: "Annual holidays from 19 July to 2 August inclusive. Open again on 3 August."
  },

  produitPhare: {
    surtitre: "In season",
    titre: "Our Christmas *boudin*",
    texte: "It comes back every end of year. We make it in our workshop, to our own recipes, in 9 varieties. Come and see them in the shop, and order early for the holidays."
  },

  platDuJour: {
    nom: "Old-fashioned veal blanquette",
    description: "Slow-cooked veal, creamy mushroom sauce, tender carrots and pilaf rice."
  },

  specialites: [
    {
      titre: "Our favourites",
      texte: "What people ask for most. Cooked in our workshop.",
      produits: ["Meatballs in sauce (or Tuscan style)", "Chicken lasagne", "Moussaka", "Shepherd's pie (several kinds)", "Macaire potatoes", "Homemade lasagne", "Vol-au-vent", "Bolognese", "Sausage bread"]
    },
    {
      titre: "Homemade charcuterie",
      texte: "Made here, to our own recipes.",
      produits: ["White and black pudding", "Christmas boudin (9 kinds)", "Ciney pâté", "Apple pâté", "Homemade smoked bacon", "Homemade salt bacon", "Head cheese", "Calf's head", "Old-style cervelas sausage", "Dry sausage, classic and spicy", "Homemade meatball", "Mini puddings, curry and paprika (in season)", "White pudding flakes"]
    },
    {
      titre: "Ready meals",
      texte: "Slow-cooked like at home. Just heat them up.",
      produits: ["Stoemp (mash with vegetables)", "Homemade pizza", "Quiche", "Homemade sauerkraut", "Pasta (cannelloni, tortellini, ravioli)", "Lamb navarin", "Chicory gratin", "Tartiflette", "Kourte", "Prince Orloff", "Chef's beef and beer stew", "Blanquette", "Tongue in Madeira sauce", "Ham and cheese crêpe", "Waterzooi", "Ready-to-cook rabbit leg"]
    },
    {
      titre: "Cheeses",
      texte: "A few cheeses to finish the meal. Ask at the counter."
    }
  ],

  commandes: [
    { titre: "Barbecue and raclette menus", texte: "Tell us how many you are, we'll plan the rest." },
    { titre: "Meat boxes", texte: "Butcher's, barbecue, charcuterie or pita. Ready to take away." },
    { titre: "Cold buffets", texte: "For receptions, communions and family meals." },
    { titre: "Filled rolls", texte: "For drinks, a meeting or a birthday." },
    { titre: "Holiday buffets", texte: "For Christmas and New Year, book early." }
  ],

  animaux: [
    {
      id: "porc",
      nom: "Pork",
      accroche: "Bien Acquis pork and farm pork, raised without GMOs or antibiotics.",
      photoAlt: "A pig in the grass of a meadow",
      encart: {
        titre: "Bien Acquis pork",
        texte: "Alongside farm pork, raised without GMOs or antibiotics. Tender, juicy meat from a controlled farm that respects animal welfare.",
        points: ["Fully controlled farming", "Guaranteed traceability", "Respect for animal welfare"]
      },
      morceaux: [
        { id: "tete", nom: "Head and cheek",
          description: "Gelatinous, tasty cuts. The cheek, very tender, is one of the butcher's secrets.",
          cuisson: ["Braised", "Slow-cooked"], recette: "Pork cheeks braised in dark beer with carrots, 3 hours over a low heat.",
          produits: ["Head cheese", "Cheeks"] },
        { id: "echine", nom: "Collar",
          description: "Marbled, juicy and tender, ideal for slow cooking as well as the grill.",
          cuisson: ["Roasted", "Grilled", "Braised"], recette: "Roast pork collar with honey, wholegrain mustard and thyme, 1½ hours in the oven." },
        { id: "carre", nom: "Rack and chops",
          description: "The rack gives tender, slightly fatty chops.",
          cuisson: ["Pan-fried", "Grilled", "Roasted"], recette: "Pan-fried pork chops, cream and mustard sauce, sautéed potatoes." },
        { id: "filet", nom: "Loin",
          description: "Lean and tender, to roast whole or cut into loin chops.",
          cuisson: ["Roasted", "Pan-fried"], recette: "Oven-roasted pork loin, mustard and tarragon sauce." },
        { id: "filet-mignon", nom: "Tenderloin",
          description: "The most tender cut of pork, best cooked just pink.",
          cuisson: ["Pan-fried", "Roasted", "In pastry"], recette: "Bacon-wrapped pork tenderloin, wild mushroom sauce." },
        { id: "epaule", nom: "Shoulder",
          description: "Tasty, affordable meat, perfect for stews and our own preparations.",
          cuisson: ["Slow-cooked", "Braised", "Roasted"], recette: "Pork stew with paprika, peppers and onions.",
          produits: ["Homemade meatballs", "Sausage bread", "Mince", "Diced pork"] },
        { id: "poitrine", nom: "Belly and bacon",
          description: "Layers of fat and lean that bring tenderness and flavour to your dishes.",
          cuisson: ["Grilled", "Confit", "Roasted"], recette: "Pork belly confit for 4 hours, then roasted for crispy crackling.",
          produits: ["Homemade smoked bacon", "Homemade salt bacon", "Lardons"] },
        { id: "jambon", nom: "Ham",
          description: "The pig's hind leg: lean meat, made into cooked ham or escalopes.",
          cuisson: ["Roasted", "Poached"], recette: "Oven-roasted ham on the bone, glazed with Liège syrup.",
          produits: ["Cooked ham", "Escalopes", "Ham roast"] },
        { id: "jarret", nom: "Hock",
          description: "Rich in collagen, it turns meltingly tender after long cooking.",
          cuisson: ["Slow-cooked", "Poached"], recette: "Pork knuckle braised in beer, sauerkraut and steamed potatoes." },
        { id: "pied", nom: "Trotter",
          description: "A traditional, gelatinous cut, loved in country recipes.",
          cuisson: ["Poached", "Breaded", "Grilled"], recette: "Poached pig's trotters, breaded and grilled, with gribiche sauce." }
      ]
    },
    {
      id: "boeuf",
      nom: "Beef",
      accroche: "Rib on the bone, fillet, flank, hanger steak. Ask us, we'll advise you.",
      photoAlt: "Cows grazing in a meadow",
      morceaux: [
        { id: "collier", nom: "Neck",
          description: "From the neck, gelatinous and tasty, wonderful when slow-cooked.",
          cuisson: ["Pot-au-feu", "Braised"], recette: "Traditional pot-au-feu with winter vegetables." },
        { id: "basses-cotes", nom: "Chuck rib",
          description: "Marbled and tasty, as good grilled as braised.",
          cuisson: ["Grilled", "Braised"], recette: "Chuck rib marinated with thyme and cooked on the barbecue." },
        { id: "cote", nom: "Rib and ribeye",
          description: "Rib on the bone and ribeye, well marbled, for those who love flavour.",
          cuisson: ["Grilled", "Pan-fried"], recette: "Barbecued rib on the bone, herb butter." },
        { id: "faux-filet", nom: "Sirloin",
          description: "Tender, with a strip of fat that makes it full of flavour.",
          cuisson: ["Grilled", "Pan-fried", "Roasted"], recette: "Pan-fried sirloin, pepper sauce." },
        { id: "filet", nom: "Fillet",
          description: "The most tender cut of beef, lean and melting.",
          cuisson: ["Pan-fried", "Roasted"], recette: "Pan-fried tournedos, red wine and shallot sauce." },
        { id: "rumsteck", nom: "Rump",
          description: "Lean and tender, ideal as steaks or for fondue.",
          cuisson: ["Grilled", "Pan-fried", "Fondue"], recette: "Rump steak, béarnaise sauce and homemade chips." },
        { id: "aloyau", nom: "Short loin (T-bone)",
          description: "The back of the loin, with sirloin, fillet and rump. This is where the T-bone comes from.",
          cuisson: ["Grilled", "Roasted"], recette: "Barbecued T-bone, sea salt and crushed pepper." },
        { id: "bavette", nom: "Flank (bavette)",
          description: "Long-grained, very tasty meat, best served rare.",
          cuisson: ["Pan-fried", "Grilled"], recette: "Bavette with shallots, baby potatoes." },
        { id: "onglet", nom: "Hanger steak (onglet)",
          description: "A true butcher's cut, rare and full of flavour.",
          cuisson: ["Pan-fried", "Grilled"], recette: "Pan-fried hanger steak, red wine sauce." },
        { id: "hampe", nom: "Skirt",
          description: "From the diaphragm, tender and fragrant, to cook over a high heat.",
          cuisson: ["Grilled", "Pan-fried"], recette: "Marinated skirt steak fajitas, peppers and onions." },
        { id: "plat-de-cotes", nom: "Short ribs",
          description: "A marbled cut, perfect for stews and pot-au-feu.",
          cuisson: ["Slow-cooked", "Braised"], recette: "Short ribs braised in beer with onions." },
        { id: "paleron", nom: "Top blade (paleron)",
          description: "From the shoulder, with a sinew that melts as it cooks.",
          cuisson: ["Braised", "Slow-cooked"], recette: "Flemish carbonnade, beef stewed in dark beer with gingerbread." },
        { id: "macreuse", nom: "Shoulder clod",
          description: "From the shoulder, to braise or grill depending on the cut.",
          cuisson: ["Braised", "Grilled"], recette: "Bœuf bourguignon slow-cooked in red wine." },
        { id: "gite", nom: "Silverside",
          description: "From the leg: silverside is roasted, the rest is stewed.",
          cuisson: ["Roasted", "Slow-cooked"], recette: "Roast silverside, pan juices and seasonal vegetables." },
        { id: "jarret", nom: "Shin",
          description: "Rich in collagen, it gives body to stocks.",
          cuisson: ["Slow-cooked", "Pot-au-feu"], recette: "Beef shin slow-cooked with carrots." },
        { id: "queue", nom: "Oxtail",
          description: "A gelatinous, generous cut for winter dishes.",
          cuisson: ["Slow-cooked", "Braised"], recette: "Oxtail hotpot." }
      ]
    },
    {
      id: "veau",
      nom: "Veal",
      accroche: "Blanquette, escalopes, osso buco: the classics.",
      photoAlt: "A young calf in a meadow",
      morceaux: [
        { id: "tendron", nom: "Breast tip (tendron)",
          description: "A cartilaginous cut that turns tender with slow cooking.",
          cuisson: ["Braised", "Slow-cooked"], recette: "Veal tendrons with carrots and onions." },
        { id: "poitrine", nom: "Breast",
          description: "A soft cut, often stuffed or stewed.",
          cuisson: ["Stuffed", "Slow-cooked"], recette: "Veal breast stuffed with herbs." },
        { id: "epaule", nom: "Shoulder",
          description: "A versatile cut, to roast or dice for blanquette.",
          cuisson: ["Roasted", "Slow-cooked"], recette: "Old-fashioned veal blanquette." },
        { id: "cotes", nom: "Chops",
          description: "Rib chops, tender and tasty.",
          cuisson: ["Pan-fried", "Grilled"], recette: "Veal chop with morels and cream." },
        { id: "filet", nom: "Fillet",
          description: "A very tender cut, best cooked pink.",
          cuisson: ["Roasted", "Pan-fried"], recette: "Veal fillet medallions, cream sauce." },
        { id: "longe", nom: "Loin",
          description: "The part of the back that gives loin chops and roasts.",
          cuisson: ["Roasted"], recette: "Roast loin of veal, thyme jus." },
        { id: "noix", nom: "Topside (noix)",
          description: "The most tender part of the leg, where the finest escalopes come from.",
          cuisson: ["Roasted", "Pan-fried"], recette: "Roast veal topside, mushroom sauce." },
        { id: "sous-noix", nom: "Silverside (sous-noix)",
          description: "A lean cut from the leg, for roasts and escalopes.",
          cuisson: ["Roasted", "Braised"], recette: "Braised veal silverside with baby vegetables." },
        { id: "quasi", nom: "Rump (quasi)",
          description: "From the top of the leg, tender and tasty.",
          cuisson: ["Roasted", "Pan-fried"], recette: "Roast veal rump with rosemary." },
        { id: "jarret", nom: "Shank (osso buco)",
          description: "Cut through the bone with its marrow: that's osso buco.",
          cuisson: ["Slow-cooked"], recette: "Osso buco alla milanese, gremolata." },
        { id: "escalopes", nom: "Escalopes",
          description: "Thin slices cut from the topside or silverside.",
          cuisson: ["Pan-fried", "Breaded"], recette: "Veal escalopes with cream and mushrooms." }
      ]
    },
    {
      id: "agneau",
      nom: "Lamb",
      accroche: "Leg, rack, cutlets, shanks.",
      photoAlt: "Lambs in a meadow",
      morceaux: [
        { id: "collier", nom: "Neck",
          description: "From the neck, perfect for stews.",
          cuisson: ["Slow-cooked"], recette: "Lamb navarin with spring vegetables." },
        { id: "epaule", nom: "Shoulder",
          description: "Fattier than the leg, tender and fragrant.",
          cuisson: ["Roasted", "Confit"], recette: "7-hour lamb shoulder with garlic and thyme." },
        { id: "carre", nom: "Rack",
          description: "The best end chops in one piece, a dish for celebrations.",
          cuisson: ["Roasted"], recette: "Herb-crusted rack of lamb." },
        { id: "cotelettes", nom: "Cutlets",
          description: "Small chops to sear quickly and eat with your fingers.",
          cuisson: ["Grilled", "Pan-fried"], recette: "Grilled cutlets, garlic and rosemary." },
        { id: "selle", nom: "Saddle",
          description: "The part between the rack and the leg, tender and delicate.",
          cuisson: ["Roasted"], recette: "Roast saddle of lamb, stuffed with herbs." },
        { id: "filet", nom: "Loin fillet",
          description: "A small, very tender cut, taken from the saddle.",
          cuisson: ["Pan-fried"], recette: "Pan-fried lamb fillet, garlic jus." },
        { id: "gigot", nom: "Leg",
          description: "The great classic of family meals.",
          cuisson: ["Roasted"], recette: "Roast leg of lamb, flageolet beans and confit garlic." },
        { id: "souris", nom: "Shank (souris)",
          description: "The lower part of the leg, which turns tender with slow cooking.",
          cuisson: ["Confit", "Braised"], recette: "Lamb shanks confit with honey and thyme." }
      ]
    },
    {
      id: "volaille",
      nom: "Poultry",
      accroche: "Whole chicken or pieces, for every day.",
      photoAlt: "Hens in the grass",
      morceaux: [
        { id: "entier", nom: "Whole chicken",
          description: "Oven-ready, for the traditional Sunday roast.",
          cuisson: ["Roasted"], recette: "Roast chicken with thyme and lemon, oven potatoes." },
        { id: "blanc", nom: "Breast / fillet",
          description: "White meat, lean and tender.",
          cuisson: ["Pan-fried", "Grilled"], recette: "Chicken breasts with cream and mushrooms." },
        { id: "cuisse", nom: "Leg",
          description: "Juicier and tastier meat than the breast.",
          cuisson: ["Roasted", "Slow-cooked"], recette: "Oven-baked chicken legs, paprika and onions." },
        { id: "pilon", nom: "Drumstick",
          description: "The lower part of the leg, loved by young and old.",
          cuisson: ["Roasted", "Grilled"], recette: "Honey and soy glazed drumsticks." },
        { id: "aile", nom: "Wing",
          description: "A small, crispy piece, ideal with drinks or on the barbecue.",
          cuisson: ["Grilled", "Roasted"], recette: "Marinated chicken wings on the barbecue." },
        { id: "supreme", nom: "Supreme",
          description: "The breast with its skin and wing bone, juicier when cooked.",
          cuisson: ["Pan-fried", "Roasted"], recette: "Chicken supreme, morel sauce." }
      ]
    }
  ]
};
