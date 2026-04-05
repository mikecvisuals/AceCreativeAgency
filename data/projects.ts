export type ProjectType = "video" | "photo" | "concept" | "productie";

export interface SliderImage { src: string; objectPosition?: string }

export interface Project {
  id: string;
  title: string;
  type: ProjectType;
  category: string;
  description: string;
  thumbnail: string;
  featured: boolean;
  // Extra tags naast het hoofdtype
  tags?: ProjectType[];
  // For video projects
  youtubeId?: string;
  instagramUrl?: string;
  // Extra Instagram posts (photos/reels)
  instagramPostUrls?: string[];
  // YouTube Shorts (portrait)
  youtubeShortIds?: string[];
  // Regular YouTube videos (landscape 16:9)
  youtubeIds?: string[];
  // For photo projects
  images?: (string | SliderImage)[];
  // Zoom thumbnail to crop edges (e.g. 1.4 = 140%)
  thumbnailZoom?: number;
  // Thumbnail crop position (e.g. "center 70%")
  thumbnailPosition?: string;
  // Show images as auto-scrolling slider instead of stacked
  imageSlider?: boolean;
}

export const projects: Project[] = [
  {
    id: "raoul",
    title: "Raoul",
    type: "video",
    category: "Video",
    description: "Van wilde ideeën tot gepolijste content — voor Raoul zorgden we voor knallende short form video's op YouTube én Instagram. Niet alleen achter de knoppen, maar ook vóór het scherm: concepten bedenken, uitwerken en van A tot Z produceren. Creativiteit meets executie.",
    thumbnail: "/raoul-thumbnail.jpg",
    featured: true,
    tags: ["concept"],
    instagramUrl: "https://www.instagram.com/reel/C2zyWXyIOx4/",
    instagramPostUrls: ["https://www.instagram.com/p/C0PhvEloxO2/"],
    youtubeShortIds: ["xRICVIOfsfo", "TJnhf092bL4", "ZUcQNLzgpso", "eS3QtcZDdsw", "bSVjcv0-zXY"],
  },
  {
    id: "russo",
    title: "Russo",
    type: "video",
    category: "Video",
    description: `Voor Russo heb ik de visuele storytelling van zijn populaire serie "The One Hour Challenge" naar een hoger niveau getild.\n\nIk creëerde dynamische short-form social content die de energie, snelheid en herkenbare stijl van de serie versterkt. Door ritme, humor en visuele timing centraal te zetten, werden de contentstukken perfect geschikt voor platformen als TikTok, Instagram Reels en YouTube Shorts.\n\nDaarnaast heb ik Russo tweemaal voorzien van een Spotify Canvas, loopbare visuals die zijn tracks extra identiteit geven binnen Spotify. De canvassen zijn volledig afgestemd op zijn sound, merkuitstraling en serie-stijl, waardoor luisteraars een consistente creatieve beleving krijgen.`,
    thumbnail: "/russo-thumbnail.jpg",
    featured: true,
    youtubeId: "dQw4w9WgXcQ",
    instagramPostUrls: [
      "https://www.instagram.com/p/CxNyUBzMlC3/",
      "https://www.instagram.com/p/Cxxz3MEMogX/",
      "https://www.instagram.com/reel/Cy59aVXsKd1/",
      "https://www.instagram.com/reel/C0ep7YzsR_d/",
      "https://www.instagram.com/reel/C4N_T_ct1r6/",
    ],
  },
  {
    id: "portrait-series",
    title: "SDB Coaching",
    type: "video",
    category: "Video & Foto",
    description: "Voor SDB Coaching was ik verantwoordelijk voor het volledige creatieve eindproduct. Ik heb diverse behind-the-scenes video's geproduceerd, evenals succesverhalen van klanten visueel tot leven gebracht.\n\nDaarnaast heb ik tijdens de SDB Coaching Dag fotoshoots zowel behind-the-scenes foto's als video's gemaakt, waarbij ik de energie en beleving van het moment wist vast te leggen.\n\nVan concept en opname tot montage en oplevering lag het gehele proces in mijn handen. Hierdoor heb ik niet alleen mijn creatieve vaardigheden verder ontwikkeld, maar ook mijn verantwoordelijkheid in het bewaken van kwaliteit en storytelling versterkt.",
    thumbnail: "/sdb-coaching-thumbnail.png",
    thumbnailZoom: 1.3,
    featured: true,
    tags: ["photo"],
    imageSlider: true,
    images: [
      "/sdb-mik07811.jpg",
      "/sdb-mik08213.jpg",
      "/sdb-mik08642.jpg",
      "/sdb-mik08683.jpg",
      "/sdb-mik08777.jpg",
      "/sdb-mik08824.jpg",
      "/sdb-mik08984.jpg",
      "/sdb-mik09184.jpg",
      "/sdb-mik09445.jpg",
      "/sdb-mik09459.jpg",
    ],
  },
  {
    id: "itv-studios",
    title: "ITV Studios",
    type: "video",
    category: "Video",
    description: "Tijdens mijn werk bij ITV Studios heb ik een veelzijdige rol vervuld binnen zowel de productie als post-productie. Ik was verantwoordelijk voor het monteren van beeldmateriaal en het creëren van diverse videocontent, waaronder promo's voor onder andere Love Island.\n\nDaarnaast heb ik ervaring opgedaan in productie op locatie, waar ik betrokken was bij de organisatie en uitvoering van opnames. Ook hield ik mij bezig met media management, waarbij ik zorgde voor een gestructureerde verwerking en beheer van al het opgenomen materiaal.\n\nIn deze periode heb ik meegewerkt aan verschillende bekende televisieprogramma's, zoals Married at First Sight, Het Perfecte Plaatje, Moordfeest en Prince Charming.\n\nDeze ervaring heeft mij een brede basis gegeven binnen de televisiewereld, waarbij ik zowel creatief als organisatorisch sterk ben ontwikkeld.",
    thumbnail: "/itv-studios-thumbnail.jpg",
    featured: true,
    tags: ["productie"],
    images: ["/itv-img-1.jpg", "/itv-img-2.jpg", "/itv-img-3.jpg"],
    instagramPostUrls: [
      "https://www.instagram.com/p/CdfaDm_KbvP/",
      "https://www.instagram.com/reel/Cs-9rGBIKx6/",
    ],
  },
  {
    id: "landscape-series",
    title: "BNNVARA",
    type: "video",
    category: "Video",
    description: "Tijdens mijn tijd bij BNNVARA heb ik mij verder ontwikkeld op het gebied van camera, editing en regie. Mijn werkzaamheden vonden voornamelijk plaats bij NPO Radio 2 en 3FM, waar ik heb meegewerkt aan diverse producties.\n\nBinnen deze projecten was ik betrokken bij het vastleggen van live boxregistraties en andere audiovisuele content. Ik vervulde hierin verschillende rollen, waardoor ik het volledige productieproces van begin tot eind heb leren beheersen van opname tot eindmontage.\n\nNaast camerawerk en editing heb ik regelmatig de regie verzorgd, waarbij ik verantwoordelijk was voor het aansturen van de productie en het bewaken van de kwaliteit van het eindresultaat. Deze veelzijdige ervaring heeft mij geleerd om snel te schakelen en creatief te denken binnen een dynamische live-omgeving.",
    thumbnail: "/bnnvara-thumbnail.avif",
    featured: false,
    youtubeIds: ["YB6hkMIQ5j4", "b1dUQsrF0XY", "x-JMpRKowIM"],
  },
  {
    id: "product-shoot",
    title: "Gezin Shoots",
    type: "photo",
    category: "Foto",
    description: "Naast mijn werk in video en contentproductie leg ik mij ook toe op het vastleggen van gezinnen. Voor mij draait fotografie niet alleen om het perfecte plaatje, maar juist om echte momenten en oprechte emoties.\n\nTijdens een gezinsshoot zorg ik voor een ontspannen en natuurlijke sfeer, waarin iedereen zichzelf kan zijn. Geen stijve poses, maar spontane beelden waarin jullie als gezin echt naar voren komen. Of het nu gaat om een wandeling in de natuur, een speelmoment met de kinderen of een rustig moment samen, ik leg het vast zoals het écht is.\n\nMet oog voor detail en gevoel voor sfeer creëer ik tijdloze beelden die een verhaal vertellen en waar je nog jarenlang met plezier op terugkijkt.",
    thumbnail: "/Gezin Shoot/MIK07997.jpg",
    thumbnailPosition: "center 35%",
    featured: false,
    imageSlider: true,
    images: [
      { src: "/Gezin Shoot/MIK00203.jpeg", objectPosition: "center 25%" },
      "/Gezin Shoot/MIK00421.jpeg",
      "/Gezin Shoot/MIK00963.JPG",
      "/Gezin Shoot/MIK07876.JPG",
      "/Gezin Shoot/MIK07997.jpg",
      "/Gezin Shoot/MIK08306.JPG",
      "/Gezin Shoot/MIK08447 2.JPG",
      "/Gezin Shoot/MIK09073.JPG",
      "/Gezin Shoot/MIK09185.JPG",
      "/Gezin Shoot/MIK09743.jpeg",
    ],
  },
  {
    id: "demi-van-thuil",
    title: "Demi van Thuil",
    type: "video",
    category: "Video",
    description: "Voor Demi van Thuil was ik verantwoordelijk voor het editen van haar video's en het ontwerpen van bijpassende thumbnails. In dit proces stond het vertalen van haar persoonlijke stijl en energie centraal, zodat elke video herkenbaar en aantrekkelijk bleef voor haar doelgroep.\n\nTijdens het editen lag de focus op tempo, storytelling en visuele impact, met als doel de kijker van begin tot eind geboeid te houden. Daarnaast heb ik thumbnails ontwikkeld die niet alleen visueel opvallen, maar ook bijdragen aan een hogere doorklikratio en een consistente uitstraling van haar kanaal.\n\nDoor deze combinatie van montage en design heb ik bijgedragen aan een sterke en herkenbare online presence, waarin content en visuele identiteit naadloos op elkaar aansluiten.",
    thumbnail: "/Scherm­afbeelding 2026-04-05 om 16.32.25.png",
    thumbnailPosition: "75% 30%",
    thumbnailZoom: 1.2,
    featured: false,
    youtubeIds: ["TDQBdMxhlog", "bRf2BQAorng", "PFLzcQXpO8g"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
