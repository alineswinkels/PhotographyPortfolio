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
    slug: "philips-nero",
    title: "Designing the digital experience for Philips' anti-snoring device",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [2, 1],
    images: [
      "images/philips2.jpg",
      "images/philipsnero-devices.jpg",
      "images/philips.jpeg",
      "images/nerocode.png"
      
    ],
    videos: [
      "videos/philipsnerovid.mov"
      // "videos/PhilipsNero.mov"
    ],
    description:
      "Designed the interaction and user experience for a Philips anti-snoring device, from physical interactions and iconography to the complete user flow. Built a high-fidelity digital twin to support usability testing and validate the product experience."
  },

  // {
  //   slug: "philips-pregnancy-app",
  //   title: "Designing remote monitoring for high-risk pregnancies",
  //   company: "VanBerlo",
  //   location: "Eindhoven",
  //   categories: [1],
  //   images: [
  //     "images/philipspregnancy.webp"
  //   ],
  //   videos: [],
  //   description:
  //     "Designed a concept for a remote monitoring experience within Philips' pregnancy ecosystem, focused on expectant mothers at increased risk of complications. The UX translated complex medical and behavioural insights into a clear, reassuring and accessible tracking experience."
  // },

  

  {
    slug: "atag",
    title: "Bringing a next-generation ATAG interface to life",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      // "images/CX8412D-AT1.jpg",
      "images/CX8412D-AT2.png",
      // "images/b067e052-7084-4f81-8c55-13b8afb96fbb_400.jpg",
      // "images/1769422220ATAGovens-3.jpg.webp",
      // "images/0c73f82c-294a-e15b-2a60-673fc0068a8d-1024x1024.jpeg",
      // "images/atag-5-in-1-inbouw-oven.jpg",
      // "images/fc16030a-5ea9-2c39-0bd4-376f093e8975-kopie.jpg",
      // "images/atag.avif",
      "images/DSCF6038.jpg",
      "images/DSCF6026.jpg",
      "images/DSCF5977.jpg",
      "images/DSCF5999.jpg",
      "images/user-test.png",
      "images/Scherm­afbeelding 2026-04-21 om 13.11.33.png"
    ],
    videos: [
      "videos/Screen Recording 2022-01-14 at 11.20.47.mov"
      // "videos/new proposal - extras menu behaviour.mov",
      // "videos/from proto - carousels behaviour.mov",
      // "videos/from proto - main menu.mov",
      // "videos/oven running - background animation.mov"
    ],
    description:
      "Developed an interactive prototype for a new ATAG kitchen appliance, combining physical controls with a touchscreen interface. The prototype brought the interaction concept to life and enabled the team to test the product experience."
  },

  {
    slug: "thermo-fisher",
    title: "Making complex laboratory workflows easier to navigate",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1],
    images: [
      "images/tf.png",
      "images/tf-projects.png",
      "images/tf-tray.png",
      "images/treeview.png"
    ],
    videos: [],
    description:
      "Designed a digital environment for managing complex scientific data and laboratory workflows. The challenge was to translate highly technical processes into an intuitive interface without losing the richness and complexity of the underlying data."
  },

  {
    slug: "jde",
    title: "Prototyping the next interface for Douwe Egberts coffee machines",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [2],
    images: [
      "images/DSCF5470.jpg",
      // "images/jde-screenshot.png"
    ],
    videos: [
      "videos/Schermopname 2026-06-23 om 11.47.52.mov"
    ],
    description:
      "Developed a high-fidelity prototype for a new coffee machine interface, including animations and transitions. The prototype was used to test interactions with users and support the development team during implementation."
  },

  // {
  //   slug: "formul-ai",
  //   title: "Using AI to accelerate food innovation",
  //   company: "VanBerlo",
  //   location: "Eindhoven",
  //   categories: [1],
  //   images: [
  //     "images/formulai.png"
  //   ],
  //   videos: [
  //     "videos/Screen Recording 2021-09-16 at 12.21.57.mov"
  //   ],
  //   description:
  //     "Designed a dashboard for an AI-powered tool supporting R&D teams in developing new food products. Complex data on ingredients, nutrition and environmental impact was translated into a clear interface that supports faster and better-informed decisions."
  // },

  {
    slug: "xyall",
    title: "Creating intuitive UX for automated cancer diagnostics",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1],
    images: [
      "images/xyall.png",
      "images/xyall2.png",
      "images/xyall3.jpg"
    ],
    videos: [],
    description:
      "Explored and designed intuitive user experiences for a system supporting automated cancer diagnostics, translating complex technology and workflows into a clear and accessible interface."
  },
{
    slug: "canesten-app",
    title: "Designing a digital self-test experience for Canesten",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [2],
    images: [
      "images/canesten.png"
    ],
    videos: [
      "videos/Screen Recording 2021-04-11 at 17.20.17.mov"
    ],
    description:
      "Developed a digital concept for an online self-test experience for Canesten, exploring how users could be guided through a clear and accessible diagnostic journey."
  },
  {
    slug: "vpro",
    title: "What if you could design your future child?",
    company: "Fontys",
    location: "Eindhoven",
    categories: [1, 2, 3],
    images: [
      "images/genetechs2.png",
      "images/genetechs.jpg",
      "images/genetechs.gif",
      "images/genetechs-tweet.jpg",
      "images/genetechs-consult.jpg",
    ],
    videos: [],
    description:
      "Created an interactive speculative design installation for VPRO, exploring the ethical implications of genetic manipulation. From concept and branding to interaction design and a complete exhibition experience, we turned a fictional future into something visitors could actively experience."
  },

  {
    slug: "holoportation",
    title: "Exploring the future of conferencing",
    company: "Greenhouse Group, Labs",
    location: "Eindhoven",
    categories: [3, 2],
    images: [
      "images/hololens.png",
      "images/hololens-unity.png",
      "images/Schermafbeelding 2017-06-08 om 23.29.23.png",
      "images/tedxveghel.jpg"
    ],
    videos: [],
    description:
      "Researched the technical and human potential of Holoportation as an alternative to video communication. The project combined user research and technical exploration, resulting in a working mixed-reality prototype built for Microsoft HoloLens."
  },

  {
    slug: "festivals",
    title: "Creating interactive experiences for festival audiences",
    company: "Fontys",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      "images/festivals.png",
      "images/paaspopkast.jpg",
      "images/kasthangt.png",
      "images/Schermafbeelding 2016-06-15 om 20.59.17.png",
      "images/wae.gif",
      "images/_MG_0057.JPG"
    ],
    videos: [],
    description:
      "Designed and developed interactive installations and media experiences for visitors at Dutch festivals, including Paaspop, We Are Electric and Mundial."
  },

  {
    slug: "return-to-office",
    title: "Designing a safer return to the office during COVID",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      "images/rto.png"
    ],
    videos: [
      "videos/ReturnToOffice.mov"
    ],
    description:
      "Designed and developed a web application that helped more than 100 employees coordinate a safe return to the office. The tool provided insight into office attendance and supported contact tracing when needed."
  },

  {
    slug: "intercom",
    title: "Rethinking the intercom as a connected digital experience",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      "images/intercomphoto.png",
      "images/intercom-building.jpg",
      "images/intercom.jpg",
      "images/intercom.png"
    ],
    videos: [
      "videos/intercomscreenshotvid.mp4"
    ],
    description:
      "Explored a new concept for a smart, connected intercom that combined physical interaction with a digital interface. The result was an interactive prototype that allowed visitors to intuitively navigate a building using just one physical control."
  },
{
    slug: "photography",
    title: "Photography for business",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [],
    images: [
      "images/EHV_0413.jpg",
      "images/DSC_4681.jpg",
      // "images/ster.png",
      // "images/PEO_5006-2.jpg",
      "images/PEO_2202.jpg",
      "images/EHV10706.jpg",
      // "images/men.png",
      "images/wou.png"
    ],
    videos: [
      
    ],
    description:
      "Photography of clients and employees for business cards, social media and other business content."
  },
  // {
  //   slug: "project-management-tool",
  //   title: "Simplifying time tracking for consultants",
  //   company: "VanBerlo",
  //   location: "Eindhoven",
  //   categories: [1, 2],
  //   images: [
  //     "images/hourbooking.png"
  //   ],
  //   videos: [],
  //   description:
  //     "Redesigned the experience of planning and registering working hours for consultants. The new interface simplified a previously complex SAP-based workflow and connected seamlessly with the company's planning and backend systems."
  // },

  {
    slug: "britax",
    title: "Exploring smarter ways to improve child car seat safety",
    company: "VanBerlo",
    location: "Eindhoven",
    categories: [1, 2],
    images: [
      "images/EHV10056-2.jpg",
      // "images/carseat-demo.png",
      "images/IMG_0031.PNG",
      "images/IMG_0032.PNG",
      "images/IMG_0034.PNG",
      // "images/IMG_0020.JPG"
      // "images/EHV10048.jpg",
      // "images/prototype-carseat.png"
      // "images/IMG_0031.PNG",
      // "images/IMG_0032.PNG",
      // "images/IMG_0034.PNG"
    ],
    videos: [
      "videos/IMG_0013.MOV"
    ],
    description:
      "Worked on the development and prototyping of new child car seat concepts, exploring how sensors could improve safety and give parents more confidence. One concept detected whether a child was correctly secured in the seat."
  }
];

export const workData = rawWorkData.map((item) => ({
  id: item.slug,
  ...item
}));