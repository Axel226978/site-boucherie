/* =========================================================
   Nederlandse versie: vertaling van de teksten van data.js.
   Alleen de teksten staan hier ; foto's, uren, prijzen en 3D blijven in ../data.js.
   Lijsten worden gekoppeld via id (of via volgorde als er geen id is).
   ========================================================= */
const TRADUCTION = {
  langue: "nl-BE",

  textes: {
    heure: "u", // 09u00
    deuxPoints: ": ",
    menuOuvrir: "Menu openen",
    menuFermer: "Menu sluiten",
    ferme: "Gesloten",
    feries: "Gesloten op feestdagen",
    voirMorceaux: "Bekijk de stukken",
    voirMorceauxDe: (nom) => `${nom}: bekijk de stukken`,
    platDuJour: "Dagschotel",
    portrait: (prenom) => `Portret van ${prenom} Paul`,
    commander: "Bestellen",
    noteMoyenne: (n) => `Gemiddelde score op ${n} Google-reviews`,
    voirAvis: "Bekijk de reviews op Google",
    ouvert: "Nu open",
    fermeConges: "Gesloten wegens vakantie",
    fermeActuellement: "Nu gesloten",
    carte: "Kaart: Slagerij des Frères Paul, Rue du Commerce 11, Ciney",
    agrandirCarte: "Grotere kaart",
    planche: (nom) => `Uitsnijdkaart: ${nom}`,
    notreChoix: "Onze keuze",
    cuissons: "Aanbevolen bereiding",
    recette: "Receptidee",
    faitMaison: "Huisgemaakt",
    prix: "Prijs: op aanvraag in de winkel",
    leMorceau: "Het stuk",
    ficheComplete: "Bekijk de volledige fiche",
    alt3d: (nom) => `${nom} in 3D: tik op een gouden punt om het stuk te zien`,
    chargement3d: "3D wordt geladen",
    voir: (nom) => `Bekijk: ${nom}`
  },

  horaires: [
    { jour: "Maandag" }, { jour: "Dinsdag" }, { jour: "Woensdag" }, { jour: "Donderdag" },
    { jour: "Vrijdag" }, { jour: "Zaterdag" }, { jour: "Zondag" }
  ],

  conges: {
    message: "Jaarlijkse vakantie van 19 juli tot en met 2 augustus. Weer open op 3 augustus."
  },

  produitPhare: {
    surtitre: "Seizoensproduct",
    titre: "De *kerstpens*",
    texte: "Elk jaar tegen de feestdagen is hij terug. We maken hem in ons atelier, met onze eigen recepten, in 9 soorten. Kom ze bekijken in de winkel en bestel op tijd voor de feesten."
  },

  platDuJour: {
    nom: "Kalfsblanquette op grootmoeders wijze",
    description: "Zacht gegaard kalfsvlees, romige champignonsaus, smeuïge wortelen en pilavrijst."
  },

  specialites: [
    {
      titre: "Onze toppers",
      texte: "Wat het meest gevraagd wordt. Bereid in ons atelier.",
      produits: ["Balletjes in saus (of Toscaans)", "Kippenlasagne", "Moussaka", "Hachis parmentier (verschillende soorten)", "Aardappelen Macaire", "Huisgemaakte lasagne", "Vol-au-vent", "Bolognese", "Worstenbrood"]
    },
    {
      titre: "Huisgemaakte charcuterie",
      texte: "Hier gemaakt, met onze eigen recepten.",
      produits: ["Witte en zwarte pens", "Kerstpens (9 soorten)", "Paté van Ciney", "Appelpaté", "Huisgerookt spek", "Huisgezouten spek", "Hoofdvlees", "Kalfskop", "Cervelaat op grootmoeders wijze", "Gedroogde worst, klassiek en pikant", "Huisgemaakte boulet", "Mini-pensjes curry en paprika (in het seizoen)", "Vlokken witte pens"]
    },
    {
      titre: "Bereide traiteurgerechten",
      texte: "Gestoofd zoals thuis. U hoeft ze alleen op te warmen.",
      produits: ["Stoemp", "Huisgemaakte pizza", "Quiche", "Huisgemaakte zuurkool", "Pasta (cannelloni, tortellini, ravioli)", "Lamsragout", "Gegratineerd witloof", "Tartiflette", "Kourte", "Prince Orloff", "Stoofvlees van de chef", "Blanquette", "Tong in madeirasaus", "Pannenkoek met ham en kaas", "Waterzooi", "Bereide konijnenbout"]
    },
    {
      titre: "Kazen",
      texte: "Enkele kazen om de maaltijd af te sluiten. Vraag ernaar aan de toonbank."
    }
  ],

  commandes: [
    { titre: "Barbecue- en raclettemenu's", texte: "Zeg ons met hoeveel u bent, wij zorgen voor de rest." },
    { titre: "Pakketten", texte: "Slagerij, barbecue, charcuterie of pita. Klaar om mee te nemen." },
    { titre: "Koude buffetten", texte: "Voor uw recepties, communies en familiefeesten." },
    { titre: "Belegde broodjes", texte: "Voor een aperitief, een vergadering of een verjaardag." },
    { titre: "Eindejaarsbuffetten", texte: "Voor Kerstmis en Nieuwjaar, reserveer op tijd." }
  ],

  animaux: [
    {
      id: "porc",
      nom: "Varken",
      accroche: "Varken Bien Acquis en hoevevarken, gekweekt zonder ggo's of antibiotica.",
      photoAlt: "Een varken in het gras van een weide",
      encart: {
        titre: "Varken Bien Acquis",
        texte: "Samen met het hoevevarken, gekweekt zonder ggo's of antibiotica. Mals en sappig vlees, van een gecontroleerde kweek die het dierenwelzijn respecteert.",
        points: ["Volledig gecontroleerde kweek", "Gegarandeerde traceerbaarheid", "Respect voor dierenwelzijn"]
      },
      morceaux: [
        { id: "tete", nom: "Kop en wang",
          description: "Gelatineuze en smaakvolle stukken. De wang, heel mals, is een van de geheimen van de slager.",
          cuisson: ["Gestoofd", "Langzaam gegaard"], recette: "Varkenswangen gestoofd in donker bier met wortelen, 3 uur op een zacht vuurtje.",
          produits: ["Hoofdvlees", "Wangen"] },
        { id: "echine", nom: "Varkensnek",
          description: "Gemarmerd, sappig en mals stuk, ideaal voor lang garen of op de grill.",
          cuisson: ["Gebraden", "Gegrild", "Gestoofd"], recette: "Gebraden varkensnek met honing, grove mosterd en tijm, 1,5 uur in de oven." },
        { id: "carre", nom: "Ribstuk en koteletten",
          description: "Het ribstuk levert koteletten, mals en licht doorregen.",
          cuisson: ["Gebakken", "Gegrild", "Gebraden"], recette: "Gebakken varkenskoteletten, room-mosterdsaus en gebakken aardappelen." },
        { id: "filet", nom: "Filet",
          description: "Mager en mals stuk, om in zijn geheel te braden of in filetkoteletten te snijden.",
          cuisson: ["Gebraden", "Gebakken"], recette: "Gebraden varkensfilet uit de oven, mosterd-dragonsaus." },
        { id: "filet-mignon", nom: "Varkenshaasje",
          description: "Het malste stuk van het varken, rosé te bakken.",
          cuisson: ["Gebakken", "Gebraden", "In korst"], recette: "Varkenshaasje in een jasje van spek, bospaddenstoelensaus." },
        { id: "epaule", nom: "Schouder",
          description: "Smaakvol en voordelig vlees, perfect voor stoofgerechten en onze bereidingen.",
          cuisson: ["Langzaam gegaard", "Gestoofd", "Gebraden"], recette: "Varkensstoofpotje met paprikapoeder, paprika en ui.",
          produits: ["Huisgemaakte balletjes", "Worstenbrood", "Gehakt", "Stoofblokjes"] },
        { id: "poitrine", nom: "Buik en spek",
          description: "Afwisselend vet en mager, wat smeuïgheid en smaak geeft aan uw gerechten.",
          cuisson: ["Gegrild", "Gekonfijt", "Gebraden"], recette: "Varkensbuik 4 uur gekonfijt en daarna gebraden voor een krokant zwoerdje.",
          produits: ["Huisgerookt spek", "Huisgezouten spek", "Spekblokjes"] },
        { id: "jambon", nom: "Ham",
          description: "De achterbout van het varken: mager vlees, verwerkt tot gekookte ham of lapjes.",
          cuisson: ["Gebraden", "Gekookt in bouillon"], recette: "Ham aan het been uit de oven, geglaceerd met Luikse siroop.",
          produits: ["Gekookte ham", "Lapjes", "Hamgebraad"] },
        { id: "jarret", nom: "Schenkel",
          description: "Stuk rijk aan collageen dat na lang garen heerlijk mals wordt.",
          cuisson: ["Langzaam gegaard", "Gekookt in bouillon"], recette: "Varkensschenkel gestoofd in bier, zuurkool en gestoomde aardappelen." },
        { id: "pied", nom: "Poot",
          description: "Traditioneel en gelatineus stuk, geliefd in streekgerechten.",
          cuisson: ["Gekookt in bouillon", "Gepaneerd", "Gegrild"], recette: "Gepocheerde varkenspootjes, gepaneerd en gegrild, met gribichesaus." }
      ]
    },
    {
      id: "boeuf",
      nom: "Rund",
      accroche: "Côte à l'os, filet pur, bavette, onglet. Vraag het ons, wij geven graag raad.",
      photoAlt: "Koeien die grazen in een weide",
      morceaux: [
        { id: "collier", nom: "Hals",
          description: "Stuk van de nek, gelatineus en smaakvol, uitstekend om langzaam te garen.",
          cuisson: ["Pot-au-feu", "Gestoofd"], recette: "Traditionele pot-au-feu met wintergroenten." },
        { id: "basses-cotes", nom: "Schouderrib",
          description: "Gemarmerd en smaakvol vlees, even lekker gegrild als gestoofd.",
          cuisson: ["Gegrild", "Gestoofd"], recette: "Schouderrib gemarineerd met tijm en op de barbecue gegaard." },
        { id: "cote", nom: "Côte à l'os en entrecote",
          description: "De côte à l'os en de entrecote, mooi gemarmerd, voor wie van smaak houdt.",
          cuisson: ["Gegrild", "Gebakken"], recette: "Côte à l'os op de barbecue, met kruidenboter." },
        { id: "faux-filet", nom: "Contrefilet",
          description: "Mals, met een randje vet dat hem extra smaak geeft.",
          cuisson: ["Gegrild", "Gebakken", "Gebraden"], recette: "Gebakken contrefilet, pepersaus." },
        { id: "filet", nom: "Filet pur",
          description: "Het malste stuk van het rund, mager en zacht.",
          cuisson: ["Gebakken", "Gebraden"], recette: "Gebakken tournedos, saus van rode wijn en sjalot." },
        { id: "rumsteck", nom: "Rumsteak",
          description: "Mager en mals stuk, ideaal als steak of voor fondue.",
          cuisson: ["Gegrild", "Gebakken", "Fondue"], recette: "Rumsteak met bearnaisesaus en huisgemaakte frietjes." },
        { id: "aloyau", nom: "Lende (T-bone)",
          description: "Het achterste deel van de rug, met contrefilet, filet pur en rumsteak. Hier snijden we de T-bone uit.",
          cuisson: ["Gegrild", "Gebraden"], recette: "T-bone op de barbecue, fleur de sel en grof gemalen peper." },
        { id: "bavette", nom: "Bavette",
          description: "Vlees met lange vezels, erg smaakvol, saignant te serveren.",
          cuisson: ["Gebakken", "Gegrild"], recette: "Bavette met sjalot en krieltjes." },
        { id: "onglet", nom: "Onglet",
          description: "Een echt slagersstuk, zeldzaam en smaakvol, met een uitgesproken smaak.",
          cuisson: ["Gebakken", "Gegrild"], recette: "Gebakken onglet, rodewijnsaus." },
        { id: "hampe", nom: "Omloop (hampe)",
          description: "Stuk van het middenrif, zacht en geurig, kort en heet te bakken.",
          cuisson: ["Gegrild", "Gebakken"], recette: "Gemarineerde omloop als fajitas, met paprika en ui." },
        { id: "plat-de-cotes", nom: "Platte rib",
          description: "Doorregen stuk, perfect voor stoofgerechten en pot-au-feu.",
          cuisson: ["Langzaam gegaard", "Gestoofd"], recette: "Platte rib gestoofd in bier met uien." },
        { id: "paleron", nom: "Sukade (paleron)",
          description: "Stuk van de schouder, met een pees die smelt tijdens het garen.",
          cuisson: ["Gestoofd", "Langzaam gegaard"], recette: "Vlaamse stoofkarbonade met donker bier en peperkoek." },
        { id: "macreuse", nom: "Schouderstuk (macreuse)",
          description: "Stuk van de schouder, om te stoven of te grillen, afhankelijk van de snit.",
          cuisson: ["Gestoofd", "Gegrild"], recette: "Bœuf bourguignon, gestoofd in rode wijn." },
        { id: "gite", nom: "Platte bil (gîte)",
          description: "Stuk van de bil: de platte bil wordt gebraden, de rest gestoofd.",
          cuisson: ["Gebraden", "Langzaam gegaard"], recette: "Gebraad van platte bil, met jus en seizoensgroenten." },
        { id: "jarret", nom: "Schenkel",
          description: "Rijk aan collageen, het geeft smeuïgheid aan bouillons.",
          cuisson: ["Langzaam gegaard", "Pot-au-feu"], recette: "Runderschenkel gestoofd met wortelen." },
        { id: "queue", nom: "Staart",
          description: "Gelatineus en royaal stuk, voor wintergerechten.",
          cuisson: ["Langzaam gegaard", "Gestoofd"], recette: "Hutsepot met ossenstaart." }
      ]
    },
    {
      id: "veau",
      nom: "Kalf",
      accroche: "Blanquette, escalopes, osso buco: de klassiekers.",
      photoAlt: "Een jong kalf in een weide",
      morceaux: [
        { id: "tendron", nom: "Tendron",
          description: "Kraakbeenachtig stuk dat bij lang garen heerlijk mals wordt.",
          cuisson: ["Gestoofd", "Langzaam gegaard"], recette: "Kalfstendrons met wortelen en uien." },
        { id: "poitrine", nom: "Borst",
          description: "Mals stuk, vaak gevuld of gestoofd.",
          cuisson: ["Gevuld", "Langzaam gegaard"], recette: "Gevulde kalfsborst met kruiden." },
        { id: "epaule", nom: "Schouder",
          description: "Veelzijdig stuk, om te braden of in blokjes voor blanquette.",
          cuisson: ["Gebraden", "Langzaam gegaard"], recette: "Kalfsblanquette op grootmoeders wijze." },
        { id: "cotes", nom: "Koteletten",
          description: "Rib- en halskoteletten, mals en smaakvol.",
          cuisson: ["Gebakken", "Gegrild"], recette: "Kalfskotelet met morieljes en room." },
        { id: "filet", nom: "Filet",
          description: "Heel mals stuk, rosé te bakken.",
          cuisson: ["Gebraden", "Gebakken"], recette: "Medaillons van kalfsfilet, roomsaus." },
        { id: "longe", nom: "Lende",
          description: "Het deel van de rug waaruit filetkoteletten en gebraden komen.",
          cuisson: ["Gebraden"], recette: "Gebraden kalfslende, jus met tijm." },
        { id: "noix", nom: "Fricandeau (noix)",
          description: "Het malste stuk van de bil, waaruit de mooiste escalopes komen.",
          cuisson: ["Gebraden", "Gebakken"], recette: "Gebraad van kalfsfricandeau, champignonsaus." },
        { id: "sous-noix", nom: "Onderbil (sous-noix)",
          description: "Mager stuk van de bil, voor gebraden en escalopes.",
          cuisson: ["Gebraden", "Gestoofd"], recette: "Gestoofde onderbil met fijne groentjes." },
        { id: "quasi", nom: "Staartstuk (quasi)",
          description: "Stuk van de bovenkant van de bil, mals en smaakvol.",
          cuisson: ["Gebraden", "Gebakken"], recette: "Gebraden kalfsstaartstuk met rozemarijn." },
        { id: "jarret", nom: "Schenkel (osso buco)",
          description: "In plakken gesneden met het bot en het merg: dat is osso buco.",
          cuisson: ["Langzaam gegaard"], recette: "Osso buco alla milanese, met gremolata." },
        { id: "escalopes", nom: "Escalopes",
          description: "Dunne sneden uit de fricandeau of de onderbil.",
          cuisson: ["Gebakken", "Gepaneerd"], recette: "Kalfsescalopes met room en champignons." }
      ]
    },
    {
      id: "agneau",
      nom: "Lam",
      accroche: "Bout, rack, koteletjes, souris.",
      photoAlt: "Lammeren in een weide",
      morceaux: [
        { id: "collier", nom: "Hals",
          description: "Stuk van de nek, perfect voor ragouts.",
          cuisson: ["Langzaam gegaard"], recette: "Lamsragout met lentegroenten." },
        { id: "epaule", nom: "Schouder",
          description: "Vetter dan de bout, zacht en geurig.",
          cuisson: ["Gebraden", "Gekonfijt"], recette: "Lamsschouder 7 uur gekonfijt met look en tijm." },
        { id: "carre", nom: "Rack (carré)",
          description: "De ribkoteletten aan één stuk, een feestelijk gerecht.",
          cuisson: ["Gebraden"], recette: "Lamsrack in een kruidenkorst." },
        { id: "cotelettes", nom: "Koteletjes",
          description: "Kleine koteletjes om kort en heet te bakken, om met de vingers te eten.",
          cuisson: ["Gegrild", "Gebakken"], recette: "Gegrilde koteletjes, look en rozemarijn." },
        { id: "selle", nom: "Zadel",
          description: "Het deel tussen de rack en de bout, mals en fijn.",
          cuisson: ["Gebraden"], recette: "Gebraden lamszadel, gevuld met kruiden." },
        { id: "filet", nom: "Filet",
          description: "Klein en heel mals stuk, uit het zadel.",
          cuisson: ["Gebakken"], recette: "Gebakken lamsfilet, jus met look." },
        { id: "gigot", nom: "Bout",
          description: "De grote klassieker voor familiemaaltijden.",
          cuisson: ["Gebraden"], recette: "Gebraden lamsbout, flageoletbonen en gekonfijte look." },
        { id: "souris", nom: "Souris (lamsschenkel)",
          description: "Het onderste deel van de bout, dat bij lang garen heerlijk mals wordt.",
          cuisson: ["Gekonfijt", "Gestoofd"], recette: "Lamsschenkels gekonfijt met honing en tijm." }
      ]
    },
    {
      id: "volaille",
      nom: "Gevogelte",
      accroche: "Hele kip of in stukken, voor elke dag.",
      photoAlt: "Kippen in het gras",
      morceaux: [
        { id: "entier", nom: "Hele kip",
          description: "Klaar om te braden, voor de traditionele zondagskip.",
          cuisson: ["Gebraden"], recette: "Gebraden kip met tijm en citroen, aardappelen uit de oven." },
        { id: "blanc", nom: "Kipfilet",
          description: "Wit vlees, mager en mals.",
          cuisson: ["Gebakken", "Gegrild"], recette: "Kipfilet met room en champignons." },
        { id: "cuisse", nom: "Kippenbout",
          description: "Smeuïger en smaakvoller vlees dan de filet.",
          cuisson: ["Gebraden", "Langzaam gegaard"], recette: "Kippenbouten uit de oven, paprikapoeder en uien." },
        { id: "pilon", nom: "Drumstick",
          description: "Het onderste deel van de bout, geliefd bij jong en oud.",
          cuisson: ["Gebraden", "Gegrild"], recette: "Drumsticks gelakt met honing en sojasaus." },
        { id: "aile", nom: "Vleugel",
          description: "Klein, krokant stuk, ideaal bij het aperitief of op de barbecue.",
          cuisson: ["Gegrild", "Gebraden"], recette: "Gemarineerde kippenvleugels van de barbecue." },
        { id: "supreme", nom: "Suprême",
          description: "De filet met het vel en het vleugelbotje, sappiger bij het bakken.",
          cuisson: ["Gebakken", "Gebraden"], recette: "Gevogeltesuprême, morieljesaus." }
      ]
    }
  ]
};
