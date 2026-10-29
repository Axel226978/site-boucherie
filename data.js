/* =========================================================
   Contenu du site : Boucherie des Frères Paul
   Toutes les données modifiables sont ici. Plus tard, cet objet
   pourra être remplacé par une réponse d'API (même structure).
   ========================================================= */
const SITE = {
  boutique: {
    nom: "Boucherie des Frères Paul",
    adresse: "Rue du Commerce 11",
    codePostal: "5590",
    ville: "Ciney",
    telephone: "083 23 11 56",
    telephoneLien: "+3283231156",
    // Coordonnées approximatives : à vérifier sur openstreetmap.org
    latitude: 50.2948,
    longitude: 5.1003
  },

  avis: {
    note: 4.7,
    nombre: 104,
    lien: "https://www.google.com/maps/search/?api=1&query=Boucherie+des+Fr%C3%A8res+Paul+Rue+du+Commerce+11+5590+Ciney"
  },

  /* Horaires : format "HH:MM". Tableau vide = fermé toute la journée.
     Fermé aussi les jours fériés (mention affichée sous le tableau). */
  horaires: [
    { jour: "Lundi",    plages: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { jour: "Mardi",    plages: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { jour: "Mercredi", plages: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { jour: "Jeudi",    plages: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { jour: "Vendredi", plages: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { jour: "Samedi",   plages: [["09:00", "13:00"], ["14:00", "18:00"]] },
    { jour: "Dimanche", plages: [] }
  ],

  /* Bandeau « Congés annuels » : mettre afficher à true pour le montrer.
     Entre les dates du et au (incluses), le statut passe à « Fermé ». */
  conges: {
    afficher: false,
    du: "2027-07-19",
    au: "2027-08-02",
    message: "Congés annuels du 19 juillet au 2 août inclus. Réouverture le 3 août."
  },

  equipe: [
    { prenom: "Sébastien", telephone: "0475 80 66 01", telephoneLien: "+32475806601", image: "images/equipe-sebastien.jpg" },
    { prenom: "Olivier",   telephone: "0472 94 45 64", telephoneLien: "+32472944564", image: "images/equipe-olivier.jpg" },
    { prenom: "Benjamin",  telephone: "0472 54 20 11", telephoneLien: "+32472542011", image: "images/equipe-benjamin.jpg" }
  ],

  /* Produit phare de saison : mettre afficher à false hors saison.
     Dans le titre, le mot entre *étoiles* s'affiche en italique. */
  produitPhare: {
    afficher: true,
    surtitre: "De saison",
    titre: "Le boudin de *Noël*",
    texte: "Il revient chaque fin d'année. On le fait à l'atelier, avec nos recettes, en 9 sortes. Passez les voir au magasin et commandez tôt pour les fêtes.",
    image: "images/boudin-noel.jpg"
  },

  platDuJour: {
    nom: "Blanquette de veau à l'ancienne",
    description: "Veau mijoté doucement, sauce crémeuse aux champignons, carottes fondantes et riz pilaf.",
    prix: 14.5,
    date: "2026-10-29",
    image: "images/plat-du-jour.jpg"
  },

  /* Spécialités : produits = liste facultative (affichée en étiquettes) */
  specialites: [
    {
      titre: "Nos principaux",
      texte: "Ce qu'on nous demande le plus. Cuisiné à l'atelier.",
      image: "images/specialite-1.jpg",
      produits: ["Boulettes en sauce (ou toscane)", "Lasagne poulet", "Moussaka", "Hachis parmentier (plusieurs variétés)", "Pommes de terre Macaire", "Lasagne maison", "Vol-au-vent", "Bolo", "Pain de saucisse"]
    },
    {
      titre: "Charcuterie maison",
      texte: "Faite ici, avec nos recettes.",
      image: "images/specialite-2.jpg",
      produits: ["Boudin blanc et noir", "Boudin de Noël (9 sortes)", "Pâté de Ciney", "Pâté aux pommes", "Lard fumé maison", "Lard salé maison", "Tête pressée", "Tête de veau", "Cervelas à l'ancienne", "Saucisse sèche classique et piquante", "Boulette maison", "Mini boudins curry et paprika (en saison)", "Flocon de boudin blanc"]
    },
    {
      titre: "Plats préparés traiteur",
      texte: "Mijotés comme à la maison. Vous n'avez qu'à réchauffer.",
      image: "images/specialite-3.jpg",
      produits: ["Potées", "Pizza maison", "Quiche", "Choucroute maison", "Pâtes (cannelloni, tortellini, ravioli)", "Navarin d'agneau", "Chicons gratinés", "Tartiflette", "Kourte", "Prince Orloff", "Carbonnades du chef", "Blanquette", "Langue sauce madère", "Crêpe jambon fromage", "Waterzooï", "Cuisse de lapin préparée"]
    },
    {
      titre: "Fromages",
      texte: "Quelques fromages pour finir le repas. Demandez au comptoir.",
      image: "images/specialite-4.jpg",
      produits: []
    }
  ],

  /* « N'oubliez pas de commander » */
  commandes: [
    { image: "images/commandes/barbecue.jpg", titre: "Menus barbecue et raclette", texte: "Dites-nous combien vous êtes, on prévoit le reste." },
    { image: "images/commandes/colis.jpg", titre: "Colis", texte: "Boucherie, barbecue, charcuterie ou pita. Prêts à emporter." },
    { image: "images/commandes/buffet-froid.jpg", titre: "Buffets froids", texte: "Pour vos réceptions, communions et repas de famille." },
    { image: "images/commandes/pains-garnis.jpg", titre: "Pains garnis", texte: "Pour un apéro, une réunion ou un anniversaire." },
    { image: "images/commandes/fin-annee.jpg", titre: "Buffets de fin d'année", texte: "Pour Noël et le Nouvel An, réservez tôt." }
  ],

  /* Animaux : accordéon de l'accueil + pages porc.html, boeuf.html, etc.
     Le dessin de découpe (formes SVG) est dans dessins.js, relié par l'id des morceaux.
     Un morceau sans forme dans dessins.js apparaît seulement dans la grille de fiches. */
  animaux: [
    {
      id: "porc",
      nom: "Porc",
      accroche: "Porc Bien Acquis et porc fermier, élevés sans OGM ni antibiotiques.",
      photo: "images/animaux/porc.jpg",
      photoAlt: "Un cochon dans l'herbe d'un pré",
      // Cochon en 3D (animal3d.js) : pour chaque morceau, [position, normale] en coordonnées du modèle.
      // Calculées depuis la boîte englobante (groin en z+, sabots en y = 0) puis posées sur la surface.
      modele3d: {
        src: "images/3d/porc.glb",
        points: {
          "tete":         [[0.71, 2.43, 3.86],  [0.99, 0.05, -0.16]],
          "echine":       [[0.83, 3.82, 2.59],  [0.81, 0.16, 0.57]],
          "epaule":       [[1.32, 2.63, 2.23],  [0.82, 0.2, 0.54]],
          "carre":        [[1.01, 3.83, 0.72],  [0.97, 0.2, 0.12]],
          "poitrine":     [[1.26, 2.15, 0.31],  [0.99, -0.14, 0.06]],
          "filet":        [[1.11, 3.89, -0.82], [0.99, 0.16, -0.01]],
          "filet-mignon": [[1.23, 3.19, -1.52], [0.98, 0.17, 0.08]],
          "jambon":       [[1.58, 2.54, -2.69], [1, -0.03, 0.09]],
          "jarret":       [[1.33, 1.21, -3.24], [0.97, -0.23, 0.06]],
          "pied":         [[1.37, 0.25, 2.0],   [1, -0.04, -0.01]]
        }
      },
      // Encart mis en avant (facultatif)
      encart: {
        titre: "Porc Bien Acquis",
        texte: "Avec le porc fermier, élevé sans OGM ni antibiotiques. Une viande tendre et juteuse, d'un élevage contrôlé qui respecte le bien-être des bêtes.",
        points: ["Élevage entièrement contrôlé", "Traçabilité garantie", "Respect du bien-être animal"]
      },
      morceaux: [
        { id: "tete", nom: "Tête et joue", image: "images/viandes/porc-tete.jpg",
          description: "Morceaux gélatineux et savoureux. La joue, très moelleuse, est l'un des secrets des bouchers.",
          cuisson: ["Braisée", "Mijotée"], recette: "Joues de porc braisées à la bière brune et aux carottes, 3 heures à feu doux.",
          produits: ["Tête pressée", "Joues"] },
        { id: "echine", nom: "Échine", image: "images/viandes/porc-echine.jpg",
          description: "Morceau persillé, juteux et tendre, idéal pour les cuissons longues comme pour le grill.",
          cuisson: ["Rôtie", "Grillée", "Braisée"], recette: "Rôti d'échine au miel, moutarde à l'ancienne et thym, 1 h 30 au four." },
        { id: "carre", nom: "Carré et côtes", image: "images/viandes/porc-carre.jpg",
          description: "Le carré offre des côtes premières et secondes, tendres et légèrement grasses.",
          cuisson: ["Poêlée", "Grillée", "Rôtie"], recette: "Côtes de porc poêlées, sauce crème et moutarde, pommes de terre sautées." },
        { id: "filet", nom: "Filet", image: "images/viandes/porc-filet.jpg",
          description: "Morceau maigre et tendre, à rôtir entier ou à tailler en côtes filet.",
          cuisson: ["Rôti", "Poêlé"], recette: "Rôti de filet au four, sauce moutarde et estragon." },
        { id: "filet-mignon", nom: "Filet mignon", image: "images/viandes/porc-filet-mignon.jpg",
          description: "La pièce la plus tendre du porc, à cuire juste rosée.",
          cuisson: ["Poêlé", "Rôti", "En croûte"], recette: "Filet mignon en croûte de lard, sauce aux champignons des bois." },
        { id: "epaule", nom: "Épaule", image: "images/viandes/porc-epaule.jpg",
          description: "Viande goûteuse et économique, parfaite pour les plats mijotés et nos préparations.",
          cuisson: ["Mijotée", "Braisée", "Rôtie"], recette: "Sauté de porc au paprika, poivrons et oignons.",
          produits: ["Boulettes maison", "Pain de saucisse", "Haché", "Sauté"] },
        { id: "poitrine", nom: "Poitrine et lard", image: "images/viandes/porc-poitrine.jpg",
          description: "Alternance de gras et de maigre qui donne du fondant et du goût à vos plats.",
          cuisson: ["Grillée", "Confite", "Rôtie"], recette: "Poitrine confite 4 heures puis rôtie pour une couenne croustillante.",
          produits: ["Lard fumé maison", "Lard salé maison", "Lardons"] },
        { id: "jambon", nom: "Jambon", image: "images/viandes/porc-jambon.jpg",
          description: "La cuisse du porc : une viande maigre, transformée en jambons cuits ou en escalopes.",
          cuisson: ["Rôtie", "Cuite au bouillon"], recette: "Jambon à l'os rôti au four, glacé au sirop de Liège.",
          produits: ["Jambon cuit", "Escalopes", "Rôti de jambon"] },
        { id: "jarret", nom: "Jarret", image: "images/viandes/porc-jarret.jpg",
          description: "Morceau riche en collagène qui devient fondant après une longue cuisson.",
          cuisson: ["Mijoté", "Cuit au bouillon"], recette: "Jambonneau braisé à la bière, choucroute et pommes de terre vapeur." },
        { id: "pied", nom: "Pied", image: "images/viandes/porc-pied.jpg",
          description: "Morceau traditionnel et gélatineux, apprécié dans les recettes du terroir.",
          cuisson: ["Cuit au bouillon", "Pané", "Grillé"], recette: "Pieds de porc pochés puis panés et grillés, sauce gribiche." }
      ]
    },
    {
      id: "boeuf",
      nom: "Bœuf",
      accroche: "Côte à l'os, filet, bavette, onglet. Demandez, on vous conseille.",
      photo: "images/animaux/boeuf.jpg",
      photoAlt: "Des vaches qui paissent dans un pré",
      modele3d: {
        src: "images/3d/boeuf.glb",
        points: {
          "collier":       [[0.33, 3.09, 3.38], [0.88, -0.43, 0.18]],
          "paleron":       [[0.67, 3.43, 2.57], [0.95, 0.04, 0.31]],
          "macreuse":      [[0.18, 2.48, 2.7], [0.33, -0.76, 0.56]],
          "basses-cotes":  [[0.75, 3.91, 2.06], [0.98, 0.17, 0.09]],
          "cote":          [[0.81, 3.92, 1.3], [0.99, 0.16, -0.02]],
          "plat-de-cotes": [[0.95, 2.61, 1.63], [0.98, 0.06, 0.19]],
          "faux-filet":    [[0.8, 3.92, 0.47], [0.95, 0.32, -0.02]],
          "filet":         [[0.98, 3.37, 0.06], [0.95, 0.31, -0.02]],
          "aloyau":        [[0.84, 3.83, -0.45], [0.98, 0.14, 0.14]],
          "rumsteck":      [[0.88, 3.83, -1.36], [0.92, 0.39, 0.11]],
          "hampe":         [[0.93, 2.11, 0.25], [0.96, -0.27, 0.07]],
          "onglet":        [[1.01, 2.77, 0.31], [1, 0.05, 0]],
          "bavette":       [[0.98, 2.38, -0.27], [0.89, -0.43, -0.16]],
          "gite":          [[0.9, 2.37, -1.94], [0.97, -0.17, -0.17]],
          "jarret":        [[0.72, 0.75, 1.98], [0.93, 0.04, 0.36]],
          "queue":         [[0.1, 3.3, -2.93], [0.7, 0, -0.7]] // posé à la main : la queue est trop fine pour le lancer de rayon
        }
      },
      morceaux: [
        { id: "collier", nom: "Collier", image: "images/viandes/boeuf-collier.jpg",
          description: "Morceau du cou, gélatineux et goûteux, qui fait merveille en cuisson lente.",
          cuisson: ["Pot-au-feu", "Braisé"], recette: "Pot-au-feu traditionnel aux légumes d'hiver." },
        { id: "basses-cotes", nom: "Basses côtes", image: "images/viandes/boeuf-basses-cotes.jpg",
          description: "Viande persillée et savoureuse, aussi bonne grillée que braisée.",
          cuisson: ["Grillées", "Braisées"], recette: "Basses côtes marinées au thym et cuites au barbecue." },
        { id: "cote", nom: "Côte et entrecôte", image: "images/viandes/boeuf-cote.jpg",
          description: "La côte à l'os et l'entrecôte, bien persillées, pour les amateurs de goût.",
          cuisson: ["Grillée", "Poêlée"], recette: "Côte à l'os au barbecue, beurre maître d'hôtel." },
        { id: "faux-filet", nom: "Faux-filet", image: "images/viandes/boeuf-faux-filet.jpg",
          description: "Tendre, avec un liseré de gras qui le rend savoureux.",
          cuisson: ["Grillé", "Poêlé", "Rôti"], recette: "Faux-filet poêlé, sauce au poivre." },
        { id: "filet", nom: "Filet", image: "images/viandes/boeuf-filet.jpg",
          description: "Le morceau le plus tendre du bœuf, maigre et fondant.",
          cuisson: ["Poêlé", "Rôti"], recette: "Tournedos poêlés, sauce au vin rouge et échalotes." },
        { id: "rumsteck", nom: "Rumsteck", image: "images/viandes/boeuf-rumsteck.jpg",
          description: "Morceau maigre et tendre, idéal en pavés ou en fondue.",
          cuisson: ["Grillé", "Poêlé", "Fondue"], recette: "Pavé de rumsteck, sauce béarnaise et frites maison." },
        { id: "aloyau", nom: "Aloyau", image: "images/viandes/boeuf-aloyau.jpg",
          description: "L'arrière du dos, qui réunit faux-filet, filet et rumsteck. On y taille le T-bone.",
          cuisson: ["Grillé", "Rôti"], recette: "T-bone au barbecue, fleur de sel et poivre concassé." },
        { id: "bavette", nom: "Bavette", image: "images/viandes/boeuf-bavette.jpg",
          description: "Viande à fibres longues, très goûteuse, à servir saignante.",
          cuisson: ["Poêlée", "Grillée"], recette: "Bavette à l'échalote, pommes grenaille." },
        { id: "onglet", nom: "Onglet", image: "images/viandes/boeuf-onglet.jpg",
          description: "Un morceau du boucher, rare et savoureux, au goût prononcé.",
          cuisson: ["Poêlé", "Grillé"], recette: "Onglet poêlé, sauce au vin rouge." },
        { id: "hampe", nom: "Hampe", image: "images/viandes/boeuf-hampe.jpg",
          description: "Morceau du diaphragme, fondant et parfumé, à cuire vivement.",
          cuisson: ["Grillée", "Poêlée"], recette: "Hampe marinée façon fajitas, poivrons et oignons." },
        { id: "plat-de-cotes", nom: "Plat de côtes", image: "images/viandes/boeuf-plat-de-cotes.jpg",
          description: "Morceau entrelardé, parfait pour les plats mijotés et le pot-au-feu.",
          cuisson: ["Mijoté", "Braisé"], recette: "Plat de côtes braisé à la bière et aux oignons." },
        { id: "paleron", nom: "Paleron", image: "images/viandes/boeuf-paleron.jpg",
          description: "Morceau de l'épaule, traversé d'un nerf qui fond à la cuisson.",
          cuisson: ["Braisé", "Mijoté"], recette: "Carbonnades flamandes à la bière brune et au pain d'épices." },
        { id: "macreuse", nom: "Macreuse", image: "images/viandes/boeuf-macreuse.jpg",
          description: "Morceau de l'épaule, à braiser ou à griller selon la découpe.",
          cuisson: ["Braisée", "Grillée"], recette: "Bœuf bourguignon mijoté au vin rouge." },
        { id: "gite", nom: "Gîte", image: "images/viandes/boeuf-gite.jpg",
          description: "Morceau de la cuisse : le gîte à la noix se rôtit, le gîte se mijote.",
          cuisson: ["Rôti", "Mijoté"], recette: "Rôti de gîte à la noix, jus court et légumes de saison." },
        { id: "jarret", nom: "Jarret", image: "images/viandes/boeuf-jarret.jpg",
          description: "Riche en collagène, il donne du moelleux aux bouillons.",
          cuisson: ["Mijoté", "Pot-au-feu"], recette: "Jarret de bœuf mijoté aux carottes." },
        { id: "queue", nom: "Queue", image: "images/viandes/boeuf-queue.jpg",
          description: "Morceau gélatineux et généreux, pour les plats d'hiver.",
          cuisson: ["Mijotée", "Braisée"], recette: "Hochepot à la queue de bœuf." }
      ]
    },
    {
      id: "veau",
      nom: "Veau",
      accroche: "Blanquette, escalopes, osso buco : les classiques.",
      photo: "images/animaux/veau.jpg",
      photoAlt: "Un jeune veau dans un pré",
      modele3d: {
        src: "images/3d/veau.glb",
        points: {
          "poitrine":  [[0.39, 2.41, 2.93], [0.98, -0.1, 0.18]],
          "epaule":    [[0.62, 3.53, 2.62], [0.98, 0.15, 0.11]],
          "tendron":   [[0.86, 2.66, 1.38], [0.99, -0.09, -0.14]],
          "cotes":     [[0.73, 4.29, 1.28], [0.99, 0.11, 0.02]],
          "longe":     [[0.83, 4.4, 0.06], [0.99, 0.12, 0.09]],
          "filet":     [[0.92, 3.78, -0.32], [0.99, 0.14, -0.08]],
          "quasi":     [[0.82, 4.29, -2.02], [0.93, 0.37, 0.01]],
          "escalopes": [[1.04, 2.95, -1.62], [0.59, -0.02, 0.81]],
          "noix":      [[1.08, 3.38, -2.35], [1, -0.01, 0.05]],
          "sous-noix": [[1.09, 2.44, -2.72], [1, -0.01, 0.05]],
          "jarret":    [[-0.5, 0.89, -2.73], [0.99, -0.1, 0.07]]
        }
      },
      morceaux: [
        { id: "tendron", nom: "Tendron", image: "images/viandes/veau-tendron.jpg",
          description: "Morceau cartilagineux qui devient fondant en cuisson lente.",
          cuisson: ["Braisé", "Mijoté"], recette: "Tendrons de veau aux carottes et aux oignons." },
        { id: "poitrine", nom: "Poitrine", image: "images/viandes/veau-poitrine.jpg",
          description: "Morceau moelleux, souvent farci ou mijoté.",
          cuisson: ["Farcie", "Mijotée"], recette: "Poitrine de veau farcie aux herbes." },
        { id: "epaule", nom: "Épaule", image: "images/viandes/veau-epaule.jpg",
          description: "Morceau polyvalent, à rôtir ou à couper en blanquette.",
          cuisson: ["Rôtie", "Mijotée"], recette: "Blanquette de veau à l'ancienne." },
        { id: "cotes", nom: "Côtes", image: "images/viandes/veau-cotes.jpg",
          description: "Côtes premières et secondes, tendres et savoureuses.",
          cuisson: ["Poêlées", "Grillées"], recette: "Côte de veau aux morilles et à la crème." },
        { id: "filet", nom: "Filet", image: "images/viandes/veau-filet.jpg",
          description: "Morceau très tendre, à cuire rosé.",
          cuisson: ["Rôti", "Poêlé"], recette: "Médaillons de filet de veau, sauce crème." },
        { id: "longe", nom: "Longe", image: "images/viandes/veau-longe.jpg",
          description: "La partie du dos qui donne les côtes filet et les rôtis.",
          cuisson: ["Rôtie"], recette: "Longe de veau rôtie, jus au thym." },
        { id: "noix", nom: "Noix", image: "images/viandes/veau-noix.jpg",
          description: "Le morceau le plus tendre de la cuisse, dont on tire les plus belles escalopes.",
          cuisson: ["Rôtie", "Poêlée"], recette: "Rôti de noix de veau, sauce aux champignons." },
        { id: "sous-noix", nom: "Sous-noix", image: "images/viandes/veau-sous-noix.jpg",
          description: "Morceau de la cuisse, maigre, pour rôtis et escalopes.",
          cuisson: ["Rôtie", "Braisée"], recette: "Sous-noix braisée aux petits légumes." },
        { id: "quasi", nom: "Quasi", image: "images/viandes/veau-quasi.jpg",
          description: "Morceau du haut de la cuisse, tendre et savoureux.",
          cuisson: ["Rôti", "Poêlé"], recette: "Quasi de veau rôti au romarin." },
        { id: "jarret", nom: "Jarret (osso buco)", image: "images/viandes/veau-jarret.jpg",
          description: "Tranché avec l'os et sa moelle, c'est l'osso buco.",
          cuisson: ["Mijoté"], recette: "Osso buco à la milanaise, gremolata." },
        { id: "escalopes", nom: "Escalopes", image: "images/viandes/veau-escalopes.jpg",
          description: "Fines tranches taillées dans la noix ou la sous-noix.",
          cuisson: ["Poêlées", "Panées"], recette: "Escalopes de veau à la crème et aux champignons." }
      ]
    },
    {
      id: "agneau",
      nom: "Agneau",
      accroche: "Gigot, carré, côtelettes, souris.",
      photo: "images/animaux/agneau.jpg",
      photoAlt: "Des agneaux dans un pré",
      modele3d: {
        src: "images/3d/agneau.glb",
        points: {
          "collier":    [[0.35, 3.01, 2.35], [0.89, -0.05, 0.45]],
          "epaule":     [[0.68, 2.67, 1.61], [0.86, -0.16, 0.48]],
          "cotelettes": [[0.76, 2.96, 0.86], [0.97, 0.24, -0.06]],
          "carre":      [[0.6, 3.68, 0.68], [0.98, 0.21, 0.06]],
          "selle":      [[0.66, 3.69, -0.26], [0.98, 0.17, 0.08]],
          "filet":      [[0.76, 3.14, -0.44], [0.98, 0.16, -0.09]],
          "gigot":      [[1.06, 2.73, -1.57], [1, -0.04, 0.09]],
          "souris":     [[0.86, 1.25, -1.67], [0.99, 0, 0.13]]
        }
      },
      morceaux: [
        { id: "collier", nom: "Collier", image: "images/viandes/agneau-collier.jpg",
          description: "Morceau du cou, parfait pour les ragoûts.",
          cuisson: ["Mijoté"], recette: "Navarin d'agneau aux légumes de printemps." },
        { id: "epaule", nom: "Épaule", image: "images/viandes/agneau-epaule.jpg",
          description: "Plus grasse que le gigot, elle est fondante et parfumée.",
          cuisson: ["Rôtie", "Confite"], recette: "Épaule d'agneau confite 7 heures à l'ail et au thym." },
        { id: "carre", nom: "Carré", image: "images/viandes/agneau-carre.jpg",
          description: "Les côtes premières réunies, une pièce de fête.",
          cuisson: ["Rôti"], recette: "Carré d'agneau en croûte d'herbes." },
        { id: "cotelettes", nom: "Côtelettes", image: "images/viandes/agneau-cotelettes.jpg",
          description: "Petites côtes à saisir vivement, à manger avec les doigts.",
          cuisson: ["Grillées", "Poêlées"], recette: "Côtelettes grillées, ail et romarin." },
        { id: "selle", nom: "Selle", image: "images/viandes/agneau-selle.jpg",
          description: "La partie entre le carré et le gigot, tendre et fine.",
          cuisson: ["Rôtie"], recette: "Selle d'agneau rôtie, farcie aux herbes." },
        { id: "filet", nom: "Filet", image: "images/viandes/agneau-filet.jpg",
          description: "Petit morceau très tendre, tiré de la selle.",
          cuisson: ["Poêlé"], recette: "Filet d'agneau poêlé, jus à l'ail." },
        { id: "gigot", nom: "Gigot", image: "images/viandes/agneau-gigot.jpg",
          description: "Le grand classique des repas de famille.",
          cuisson: ["Rôti"], recette: "Gigot rôti, flageolets et gousses d'ail confites." },
        { id: "souris", nom: "Souris", image: "images/viandes/agneau-souris.jpg",
          description: "Le bas du gigot, qui devient fondant en cuisson lente.",
          cuisson: ["Confite", "Braisée"], recette: "Souris d'agneau confites au miel et au thym." }
      ]
    },
    {
      id: "volaille",
      nom: "Volaille",
      accroche: "Poulet entier ou en morceaux, pour tous les jours.",
      photo: "images/animaux/volaille.jpg",
      photoAlt: "Des poules dans l'herbe",
      modele3d: {
        src: "images/3d/volaille.glb",
        points: {
          "blanc":   [[6.12, -7.91, 17.52], [0.37, -0.74, 0.56]],
          "supreme": [[13.29, 2.66, 6.8], [0.9, 0.43, -0.07]],
          "aile":    [[14.06, 1.98, -7.6], [0.92, 0.39, -0.03]],
          "entier":  [[4.05, 9.64, -12.63], [0.37, 0.93, -0.06]],
          "cuisse":  [[13.99, -13.43, -14.78], [0.9, -0.32, -0.29]],
          "pilon":   [[12.33, -22.05, 2.25], [0.87, -0.26, 0.43]]
        }
      },
      morceaux: [
        { id: "entier", nom: "Poulet entier", image: "images/viandes/volaille-entier.jpg",
          description: "Prêt à rôtir, pour le traditionnel poulet du dimanche.",
          cuisson: ["Rôti"], recette: "Poulet rôti au thym et au citron, pommes de terre au four." },
        { id: "blanc", nom: "Blanc / filet", image: "images/viandes/volaille-blanc.jpg",
          description: "Viande blanche, maigre et tendre.",
          cuisson: ["Poêlé", "Grillé"], recette: "Blancs de poulet à la crème et aux champignons." },
        { id: "cuisse", nom: "Cuisse", image: "images/viandes/volaille-cuisse.jpg",
          description: "Viande plus moelleuse et plus goûteuse que le blanc.",
          cuisson: ["Rôtie", "Mijotée"], recette: "Cuisses de poulet au four, paprika et oignons." },
        { id: "pilon", nom: "Pilon", image: "images/viandes/volaille-pilon.jpg",
          description: "Le bas de la cuisse, apprécié des petits et des grands.",
          cuisson: ["Rôti", "Grillé"], recette: "Pilons laqués au miel et à la sauce soja." },
        { id: "aile", nom: "Aile", image: "images/viandes/volaille-aile.jpg",
          description: "Petit morceau croustillant, idéal à l'apéritif ou au barbecue.",
          cuisson: ["Grillée", "Rôtie"], recette: "Ailes de poulet marinées, cuites au barbecue." },
        { id: "supreme", nom: "Suprême", image: "images/viandes/volaille-supreme.jpg",
          description: "Le blanc avec la peau et l'os de l'aile, plus juteux à la cuisson.",
          cuisson: ["Poêlé", "Rôti"], recette: "Suprême de volaille, sauce aux morilles." }
      ]
    }
  ]
};
