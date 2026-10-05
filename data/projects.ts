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
  // TikTok video URLs
  tiktokUrls?: string[];
  // Self-hosted video files (e.g. not yet published anywhere), served from /public
  localVideos?: string[];
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
    id: "vetfitmetfleur",
    title: "VetFitMetFleur",
    type: "video",
    category: "Video",
    description: "Voor Fleur van VetFitMetFleur edit ik de YouTube-video's en ontwerp ik de thumbnails erbij. Een thumbnail moet in één oogopslag duidelijk maken waar de video over gaat, dus die werk ik uit in dezelfde herkenbare stijl als haar kanaal.\n\nBij de montage ligt de nadruk op een helder tempo, zodat de kijker van begin tot eind blijft kijken.",
    thumbnail: "/vetfitmetfleur-thumbnail.jpg",
    thumbnailPosition: "75% center",
    featured: false,
    youtubeIds: ["C03HgITyxGk"],
  },
  {
    id: "marco-spadaro",
    title: "Marco Spadaro",
    type: "video",
    category: "Video",
    description: "Ik monteer de YouTube-video's van Marco Spadaro. Elke video moet meteen herkenbaar zijn als iets van hem, dus de montage volgt zijn tempo en manier van praten in plaats van een vast sjabloon.\n\nDe grootste uitdaging bij dit soort content is de kijker vasthouden zonder dat het geforceerd aanvoelt. Dat betekent vooral kijken naar waar een gesprek even inzakt, en daar strak op snijden.",
    thumbnail: "/marco-spadaro-thumbnail.jpeg",
    thumbnailPosition: "center top",
    thumbnailZoom: 1.15,
    featured: false,
    youtubeIds: ["pN-o_lhRsI8", "x-H8C4LtNmI"],
  },
  {
    id: "vi-coaching",
    title: "VI Coaching",
    type: "video",
    category: "Video",
    description: "Voor VI Coaching monteer ik de short-form advertenties die op Instagram en TikTok lopen. Bij advertenties gelden andere regels dan bij gewone content: de eerste twee seconden bepalen of iemand doorkijkt of doorscrolt.\n\nDe montage is daarom vooral gericht op een snelle opening, een heldere boodschap en een call-to-action die niet wegvalt tussen de rest.",
    thumbnail: "/vi-coaching-thumbnail.jpg",
    thumbnailPosition: "center 40%",
    featured: false,
    localVideos: [
      "/videos/vi-coaching/VICOACHING_SEPTEMBER_AD1_V2.mp4",
      "/videos/vi-coaching/VICOACHING_SEPTEMBER_AD2_V2.mp4",
      "/videos/vi-coaching/VICOACHING_SEPTEMBER_AD3_V2.mp4",
      "/videos/vi-coaching/VICOACHING_SEPTEMBER_AD4_V2.mp4",
    ],
  },
  {
    id: "raoul",
    title: "Raoul",
    type: "video",
    category: "Video",
    description: "Voor Raoul (bekend van de Bankzitters) deden we meer dan alleen monteren. We bedachten concepten, dachten mee voor de camera en werkten de video's daarna af tot short-form content voor YouTube en Instagram.\n\nDie combinatie, zelf meedenken over het idee én het eindresultaat monteren, zorgt voor video's die kloppen van begin tot eind.",
    thumbnail: "/raoul-thumbnail.jpg",
    featured: true,
    tags: ["concept"],
    instagramUrl: "https://www.instagram.com/reel/C2zyWXyIOx4/",
    instagramPostUrls: ["https://www.instagram.com/p/C0PhvEloxO2/"],
    youtubeShortIds: ["xRICVIOfsfo", "TJnhf092bL4", "ZUcQNLzgpso", "eS3QtcZDdsw", "bSVjcv0-zXY"],
  },
  {
    id: "hanwe",
    title: "Hanwe",
    type: "video",
    category: "Video",
    description: "Voor content creator Hanwe monteer ik zijn YouTube-video's, vooral reactievideo's waarin hij op een kritische en humoristische manier commentaar geeft op tv-programma's als Temptation Island en actuele online trends.\n\nBij dit soort content bepaalt timing alles: een grap die een fractie te laat komt, landt niet. De montage is dus vooral precisiewerk, gericht op tempo en het uitvergroten van de momenten die al grappig zijn in het ruwe materiaal.",
    thumbnail: "/hanwe-thumbnail.png",
    thumbnailPosition: "center top",
    featured: false,
    youtubeIds: ["ga_qEcYUAkQ", "E-sCQVOi4_g", "a4R52r4l8MA", "q4uDFG7tLEg", "GFyefEtWzHQ", "dBqYy1G6eo4", "PqvBNlxc3bk"],
  },
  {
    id: "russo",
    title: "Russo",
    type: "video",
    category: "Video",
    description: `Voor Russo werk ik aan de short-form content rond zijn serie "The One Hour Challenge", geknipt voor TikTok, Instagram Reels en YouTube Shorts. De montage volgt het ritme van de serie zelf: snel, met humor en scherpe timing op de grappen.\n\nDaarnaast heb ik twee keer een Spotify Canvas voor hem gemaakt, de loopende visuals die naast een nummer draaien. Die zijn afgestemd op de sound en uitstraling van de track, zodat het ook op Spotify voelt als iets van Russo.`,
    thumbnail: "/russo-thumbnail.jpg",
    featured: true,
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
    description: "Voor SDB Coaching deed ik het complete traject: van concept en opname tot montage en oplevering. Ik maakte behind-the-scenes video's en bracht succesverhalen van klanten in beeld, zodat potentiële klanten zien wat coaching bij SDB concreet oplevert.\n\nTijdens de jaarlijkse SDB Coaching Dag schoot ik ook foto's en video's op locatie, van speeches tot spontane momenten tussen deelnemers. Bij dat soort dagen werk je snel en alert: je krijgt maar één kans om een moment vast te leggen.",
    thumbnail: "/sdb-coaching-thumbnail.png",
    thumbnailZoom: 1.3,
    featured: true,
    tags: ["photo"],
    youtubeIds: ["TbxvO2ucpOs", "GMQspPycqWc"],
    instagramPostUrls: [
      "https://www.instagram.com/reel/DTXVAqdjLRf/",
      "https://www.instagram.com/reel/DVGx89sDBm1/",
      "https://www.instagram.com/reel/DUxaVsNDMPj/",
      "https://www.instagram.com/reel/DRMeKPVDKjD/",
      "https://www.instagram.com/reel/DP5yRypjL6e/",
    ],
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
    description: "Bij ITV Studios werkte ik zowel in de productie als de post-productie. Ik monteerde beeldmateriaal en promo's, waaronder voor Love Island, en stond op locatie mee te draaien bij opnames.\n\nDaarnaast deed ik media management: het ordenen en beheren van al het opgenomen materiaal, zodat editors en producers altijd snel bij de juiste beelden konden. Ik werkte mee aan bekende programma's als Married at First Sight, Het Perfecte Plaatje, Moordfeest en Prince Charming.",
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
    description: "Bij BNNVARA werkte ik voornamelijk voor NPO Radio 2 en 3FM, waar ik meedraaide op camera, editing en regie. Een groot deel van het werk bestond uit live boxregistraties: artiesten die in de studio optreden terwijl de uitzending gewoon doorloopt.\n\nDat soort live-werk laat geen ruimte voor een tweede take. Ik deed dan ook het hele traject, van opname tot montage, en stuurde regelmatig zelf de regie aan tijdens de opnames.",
    thumbnail: "/bnnvara-thumbnail.avif",
    featured: false,
    youtubeIds: ["YB6hkMIQ5j4", "b1dUQsrF0XY", "x-JMpRKowIM"],
  },
  {
    id: "social-next-agency",
    title: "Social Next Agency",
    type: "video",
    category: "Video",
    description: "Voor Social Next Agency knip ik lange video's om tot short-form content voor TikTok, Instagram Reels en YouTube Shorts. Een van de klanten waar ik content voor maak is FlevoNautica.\n\nBij het ombouwen van lange naar korte content gaat het vooral om keuzes maken: welk stuk van een video werkt ook zonder de rest van de context? De eerste paar seconden bepalen of iemand blijft kijken, dus die momenten kies ik het zorgvuldigst uit. Strakke montage, goede ondertiteling en gevoel voor wat er op dat moment trending is, maken daarna het verschil.",
    thumbnail: "/social-next-agency-thumbnail.webp",
    featured: false,
    tiktokUrls: [
      "https://www.tiktok.com/@flevonautica/video/7647505162797452576",
      "https://www.tiktok.com/@flevonautica/video/7647846376432291104",
      "https://www.tiktok.com/@flevonautica/video/7650073900973378848",
      "https://www.tiktok.com/@flevonautica/video/7653035915811523872",
      "https://www.tiktok.com/@flevonautica/video/7652658822967774496",
      "https://www.tiktok.com/@flevonautica/video/7651922264752934177",
    ],
  },
  {
    id: "product-shoot",
    title: "Gezin Shoots",
    type: "photo",
    category: "Foto",
    description: "Naast video doe ik ook gezinsfotografie. Fotografie draait voor mij niet om het perfecte plaatje, maar om het vastleggen van hoe een gezin daadwerkelijk is samen.\n\nTijdens een shoot hou ik het bewust ontspannen: geen opgelegde poses, maar ruimte om gewoon te doen wat jullie normaal ook zouden doen. Wandelen, spelen met de kinderen, even niks. Precies in die momenten ontstaan de beelden die je jaren later nog steeds raken.",
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
    description: "Voor Demi van Thuil monteer ik haar video's en ontwerp ik de thumbnails die erbij horen. Die twee horen voor mij bij elkaar: een thumbnail bepaalt of iemand klikt, de montage bepaalt of ze blijven kijken.\n\nDe thumbnails zijn gericht op een hogere doorklikratio, met een stijl die per video net iets anders is maar wel direct herkenbaar blijft als haar kanaal.",
    thumbnail: "/demi-van-thuil-thumbnail.png",
    thumbnailPosition: "75% 30%",
    thumbnailZoom: 1.2,
    featured: false,
    youtubeIds: ["TDQBdMxhlog", "bRf2BQAorng", "PFLzcQXpO8g"],
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
