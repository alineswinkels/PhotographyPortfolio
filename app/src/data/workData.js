export const categories = [
  {
    id: 1,
    name: "UX Design"
  },
  {
    id: 2,
    name: "Development"
  },
  {
    id: 3,
    name: "Research"
  }
];

export const rawWorkData = [
  {
    slug: "hololens",
    title: "HoloLens",
    company: "Greenhouse Group, Labs",
    location: "Eindhoven",
    categories: [3, 2, 1],
    images: [
      "images/britax1.jpg",
      "../assets/DSCF5409.jpg"
    ],
    description: "Ik deed gebruikersonderzoek via enquêtes en tests met werknemers om inzicht te krijgen in bestaande communicatieknelpunten. Daarnaast onderzocht ik de technische haalbaarheid van een real-time “holoportatie” oplossing en bestaande technologieën die hiervoor gebruikt konden worden. Het project resulteerde in een werkend prototype, ontwikkeld in Unity, waarmee de mogelijkheden van mixed reality als alternatief voor videobellen tastbaar werden gemaakt."
  },
  {
    slug: "philips-nero",
    title: "Philips Nero",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [2, 1],
    images: [
      "../assets/DSCF5409.jpg",
      "../assets/DSCF5409.jpg"
    ],
    description: "Voor Philips werkte ik aan de interactie en gebruikerservaring van een antisnurk apparaat. Ik dacht mee over de fysieke interactie, iconografie en de logica van de gebruikersflow. Om het concept te toetsen ontwikkelde ik een high-fidelity prototype dat de volledige interactie van het fysieke product nabootste—een soort digital twin van het device. Dit prototype werd gebruikt door Philips om gebruikerstesten uit te voeren en de interactie te valideren in een realistische context."
  },
  {
    slug: "philips-pregnancy-app",
    title: "Philips Pregnancy app",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Voor Philips werkte ik aan een concept voor een aanvullende app binnen de bestaande pregnancy suite, gericht op kwetsbare zwangeren met een verhoogd risico op complicaties. Samen met een grafisch ontwerper ontwierp ik de volledige UX, waarbij de focus lag op overzicht, vertrouwen en het laagdrempelig maken van complexe medische informatie. We vertaalden medische en gedragsmatige inzichten naar een heldere tracking-ervaring die gebruikers ondersteunt in hun dagelijkse gezondheidssituatie."
  },
  {
    slug: "thermo-fisher",
    title: "Thermo Fisher",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Voor een scheikundig onderzoeksbedrijf werkte ik aan het ontwerp van een digitale omgeving voor het structureren, opslaan en terugvinden van complexe onderzoeksdata. De uitdaging lag in de vertaling van een zeer technische workflow naar een overzichtelijke en bruikbare interface. Een belangrijk onderdeel was het visualiseren van fysieke laboratoriumprocessen, zoals reageerbuisjes die op trays worden geplaatst met verschillende typen moleculen en condities. Samen met het team vertaalde ik deze complexiteit naar een intuïtieve UI waarin onderzoekers hun experimenten eenvoudig kunnen beheren en terugvinden, zonder de onderliggende rijkheid van de data te verliezen."
  },
  {
    slug: "atag",
    title: "Atag",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Voor ATAG werkte ik aan de ontwikkeling van een fysiek prototype voor een nieuw keukenapparaat in conceptfase. Ik was verantwoordelijk voor het realiseren van de interactieve opstelling, bestaande uit fysieke knoppen, draaiknoppen en een touchscreen-interface."
  },
  {
    slug: "formul-ai",
    title: "Formul'AI",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Ik werkte aan het ontwerp van een dashboard voor een AI-tool die wordt ingezet in R&D voor nieuwe voedingsproducten. De tool analyseert ingrediënten op moleculair niveau en ondersteunt onderzoekers bij het vervangen of toevoegen van ingrediënten, met directe feedback op de impact op het totale recept. De interface visualiseert complexe data zoals voedingswaarden, maar ook duurzaamheidseffecten zoals CO₂-footprint, waardoor beslissingen sneller en beter onderbouwd genomen kunnen worden. Mijn focus lag op het vertalen van deze complexe informatie naar een helder en bruikbaar dashboard voor onderzoekers."
  },
  {
    slug: "vpro",
    title: "VPRO, de volmaakte mens",
    company: "Fontys",
    location: "Eindhoven",
    categories: [1],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Voor de Dutch Technology Week werkte ik aan een interactieve installatie voor VPRO, gebaseerd op het programma De Volmaakte Mens. Het project draaide om het zichtbaar maken van ethische vraagstukken rondom toekomstige technologieën, met een focus op genetische manipulatie. Samen ontwikkelden we een futuristisch concept van een bedrijf waarmee ouders via een visuele interface eigenschappen van hun toekomstige kind konden samenstellen, zoals uiterlijk, interesses en talenten. Van branding en storytelling tot een werkend prototype en complete beursbeleving met doktersjassen: we brachten het concept volledig tot leven tijdens de Dutch Technology Week in Eindhoven. Dit project combineerde conceptontwikkeling, interactief design en speculative design om bezoekers actief na te laten denken over de impact van technologie op de toekomst."
  },
  {
    slug: "jde",
    title: "JDE coffee machine interface",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [2],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Voor JDE Peet's ontwikkelde ik een digitaal prototype waarin de nieuwe interface voor een koffiemachine volledig is uitgewerkt, inclusief animaties en transities. Het prototype werd gebruikt om de interaction design te testen met gebruikers en diende daarnaast als referentie voor het development team tijdens de implementatie."
  },
  {
    slug: "britax",
    title: "Britax exploratie",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Tijdens dit project werkte ik mee aan de productinnovatie van een kinderautostoeltje, waarbij veiligheid centraal stond. Samen met het team ontwikkelden en testten we verschillende concepten en prototypes om de veiligheid en gebruikservaring te verbeteren. Een van de innovaties was een sensorsysteem in het stoeltje dat kon detecteren of een kind correct in de gordel zat. Het doel hiervan was om ouders extra zekerheid te bieden en het risico op onjuiste bevestiging te verkleinen. Dit project gaf mij waardevolle ervaring in productontwikkeling, prototyping en innovatie."
  },
  {
    slug: "return-to-office",
    title: "Return to Office",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Tijdens de coronaperiode ontwierp en ontwikkelde ik een web-app om de terugkeer naar kantoor veilig en overzichtelijk te laten verlopen. Medewerkers konden via de applicatie aangeven wanneer zij op kantoor aanwezig zouden zijn, zodat het aantal aanwezigen beheersbaar bleef. Daarnaast maakte het systeem het mogelijk om achteraf inzicht te krijgen in wie er op kantoor was geweest bij eventuele besmettingen. De applicatie werd uiteindelijk gebruikt door alle 100 medewerkers binnen het bedrijf. Dit project gaf mij ervaring in zowel UX/UI-design als het ontwikkelen van een praktische digitale oplossing met directe impact op de organisatie."
  },
  {
    slug: "intercom",
    title: "Intercom Concept",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Voor dit project werkte ik aan een conceptuele verkenning van een slimme, internetverbonden intercom. Ik ontwikkelde een interactief prototype met één fysieke knop waarmee gebruikers intuïtief door de interface konden navigeren. Via een soepele en gebruiksvriendelijke interface konden bezoekers eenvoudig bedrijven binnen een gebouw selecteren en direct zien waar deze zich bevonden op een illustratieve plattegrond. Het concept combineerde hardware, interactiedesign en digitale gebruikerservaring in één productbeleving. Uiteindelijk hebben we het concept gepitcht aan Bosch, waaruit later een vervolgopdracht is ontstaan."
  },
  {
    slug: "project-management-tool",
    title: "Project management tool",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      "../assets/DSCF5409.jpg"
    ],
    description: "Voor dit project ontwierp ik een nieuwe frontend interface voor het registreren van uren, gekoppeld aan de bestaande SAP-omgeving. Veel medewerkers ervaarden het huidige systeem als onoverzichtelijk en tijdrovend, waardoor er behoefte was aan een gebruiksvriendelijkere oplossing. Ik ontwikkelde een intuïtieve interface die sneller en eenvoudiger in gebruik was, met als doel de gebruikerservaring te verbeteren en fouten te verminderen. Daarnaast werd het ontwerp afgestemd op integratie met zowel de planningstool als de SAP-backend. Dit project combineerde UX/UI-design met het optimaliseren van interne digitale processen."
  }
];


export const workData = rawWorkData.map((item, index) => ({
  id: item.slug,
  ...item
}));