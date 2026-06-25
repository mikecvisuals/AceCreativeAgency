import type { Metadata } from "next";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ScrollReveal from "@/components/ui/scroll-reveal";
import PortraitVideoSlider from "@/components/ui/portrait-video-slider-client";
import LandscapeVideoSlider from "@/components/ui/landscape-video-slider-client";
import { projects } from "@/data/projects";

export const metadata: Metadata = {
  title: {
    absolute: "Ace Creative Agency — Wij vertellen jouw verhaal in beeld",
  },
  description:
    "Ace Creative Agency is een creatief bureau voor videoproductie, video editing en fotografie. Gebaseerd in Roosendaal — wij werken voor merken, creators en influencers door heel Nederland.",
  alternates: { canonical: "https://acecreativeagency.nl" },
  openGraph: {
    title: "Ace Creative Agency — Wij vertellen jouw verhaal in beeld",
    description:
      "Videoproductie, video editing en fotografie voor merken, creators en influencers door heel Nederland.",
    url: "https://acecreativeagency.nl",
  },
};

const testimonials = [
  {
    text: "Mike heeft al meerdere shoots voor ons gedaan en we zijn elke keer super tevreden. Hij werkt nauwkeurig, denkt mee en luistert echt naar wat je wilt. Dat maakt het samenwerken heel fijn. Echt een aanrader 😊",
    name: "Sabrina de Bruijn",
    role: "SDB Coaching",
    rating: 5,
  },
  {
    text: "Hele mooie professionele foto's laten maken door Mike tijdens het trainen. De foto's zijn erg gedetailleerd. Ik ben zeer tevreden over het eind resultaat.",
    name: "Dennis Elst",
    role: "Google Review",
    rating: 5,
  },
  {
    text: "Tijdje geleden een gezinsshoot gedaan bij Mike. Er hing een super relaxte sfeer en hij hielp ons ook heel goed met poses etc. De foto's waren uiteindelijk zo ontzettend mooi geworden, dus zeker een aanrader!!",
    name: "Ashley Timmers",
    role: "Google Review",
    rating: 5,
  },
];

function ReviewCard({ text, name, role, rating }: { text: string; name: string; role: string; rating: number }) {
  return (
    <div style={{ flex: "1 1 260px", padding: "24px", borderRadius: "16px", border: "1px solid rgba(255,255,255,0.08)", backgroundColor: "#0a0a0a" }}>
      <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
        {Array.from({ length: rating }).map((_, s) => (
          <svg key={s} width="13" height="13" viewBox="0 0 24 24" fill="#C8A968"><polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" /></svg>
        ))}
      </div>
      <p style={{ fontSize: "14px", color: "#A0A0A0", lineHeight: 1.65, marginBottom: "16px" }}>&ldquo;{text}&rdquo;</p>
      <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
        <div style={{ width: "36px", height: "36px", borderRadius: "9999px", backgroundColor: "#1a1a1a", display: "flex", alignItems: "center", justifyContent: "center", fontSize: "14px", fontWeight: 600, color: "#C8A968", flexShrink: 0 }}>
          {name.charAt(0)}
        </div>
        <div>
          <p style={{ fontSize: "13px", fontWeight: 600, color: "#F3F5F5" }}>{name}</p>
          <p style={{ fontSize: "12px", color: "#555" }}>{role}</p>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  return (
    <section style={{ width: "100%", padding: "80px 0", backgroundColor: "#000", position: "relative", zIndex: 2 }}>
      <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 24px" }}>
        <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "4px 14px", borderRadius: "9999px", border: "1px solid #333", marginBottom: "20px" }}>
          <svg width="12" height="12" viewBox="0 0 24 24" fill="#C8A968">
            <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
          </svg>
          <span style={{ fontSize: "11px", color: "#7A7A7A", letterSpacing: "0.2em", textTransform: "uppercase" }}>Reviews</span>
        </div>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 600, color: "#F3F5F5", marginBottom: "12px" }}>
          Wat klanten over ons <span style={{ color: "#C8A968" }}>zeggen</span>
        </h2>
        <p style={{ fontSize: "14px", color: "#555", maxWidth: "400px", margin: "0 auto" }}>
          Beoordeeld met een gemiddelde van 5 sterren op Google
        </p>
      </div>

      {/* Mobile: horizontale scroll */}
      <div className="flex md:hidden" style={{ overflowX: "auto", gap: "12px", padding: "0 24px 8px", scrollbarWidth: "none" }}>
        {testimonials.map((t, i) => (
          <div key={i} style={{ flexShrink: 0, width: "270px" }}>
            <ReviewCard {...t} />
          </div>
        ))}
      </div>

      {/* Desktop: 3 kaarten naast elkaar */}
      <div className="hidden md:flex" style={{ gap: "16px", padding: "0 48px", maxWidth: "1100px", margin: "0 auto" }}>
        {testimonials.map((t, i) => (
          <ReviewCard key={i} {...t} />
        ))}
      </div>
    </section>
  );
}

const aggregateRatingSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Ace Creative Agency",
  url: "https://acecreativeagency.nl",
  email: "mike@acecreativeagency.nl",
  image: "https://acecreativeagency.nl/logo.png",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Roosendaal",
    addressRegion: "Noord-Brabant",
    addressCountry: "NL",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 51.5302,
    longitude: 4.4632,
  },
  areaServed: "NL",
  aggregateRating: {
    "@type": "AggregateRating",
    ratingValue: "5",
    reviewCount: "3",
    bestRating: "5",
    worstRating: "1",
  },
  review: [
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Sabrina de Bruijn" },
      reviewBody: "Mike heeft al meerdere shoots voor ons gedaan en we zijn elke keer super tevreden. Hij werkt nauwkeurig, denkt mee en luistert echt naar wat je wilt.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Dennis Elst" },
      reviewBody: "Hele mooie professionele foto's laten maken door Mike tijdens het trainen. De foto's zijn erg gedetailleerd. Ik ben zeer tevreden over het eind resultaat.",
    },
    {
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: "5" },
      author: { "@type": "Person", name: "Ashley Timmers" },
      reviewBody: "Tijdje geleden een gezinsshoot gedaan bij Mike. Er hing een super relaxte sfeer en hij hielp ons ook heel goed met poses etc. De foto's waren uiteindelijk zo ontzettend mooi geworden.",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "Wat doet Ace Creative Agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ace Creative Agency is een creatief bureau in Roosendaal gespecialiseerd in videoproductie, video editing, fotografie en social media management. We werken voor merken, content creators en influencers door heel Nederland.",
      },
    },
    {
      "@type": "Question",
      name: "In welke regio werkt Ace Creative Agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Ons bureau is gevestigd in Roosendaal (Noord-Brabant), maar we werken door heel Nederland. We zijn actief in West-Brabant, maar ook landelijk inzetbaar voor video- en fotoproducties.",
      },
    },
    {
      "@type": "Question",
      name: "Welke diensten biedt Ace Creative Agency aan?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Wij bieden videoproductie, professionele video editing, fotografie (portret, sport, bedrijf) en social media management aan. Ook short-form video voor YouTube Shorts, TikTok en Instagram Reels behoort tot ons specialisme.",
      },
    },
    {
      "@type": "Question",
      name: "Hoe kan ik contact opnemen met Ace Creative Agency?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Je kunt contact opnemen via het contactformulier op onze website (acecreativeagency.nl/contact) of via e-mail op mike@acecreativeagency.nl. We reageren doorgaans binnen 24 uur.",
      },
    },
  ],
};

export default function Home() {
  const landscapeSlides = projects.flatMap((p) => {
    const ids = p.youtubeIds ?? (p.youtubeId ? [p.youtubeId] : []);
    return ids.map((youtubeId) => ({ youtubeId, projectTitle: p.title, projectId: p.id }));
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(aggregateRatingSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      {/* Hero */}
      <HeroGeometric
        badge="Editor & Content Creator"
        title1="Wij vertellen"
        title2="jouw verhaal in beeld."
      />

      {/* Services strip */}
      <section style={{ width: "100%", borderTop: "1px solid #1a1a1a", padding: "64px 24px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2, backgroundColor: "#000" }}>
        <div style={{ width: "100%", maxWidth: "960px" }}>
          <ScrollReveal>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "32px" }}>
              {[
                { label: "Edit", icon: "◈" },
                { label: "Foto", icon: "◎" },
                { label: "Video", icon: "◉" },
                { label: "Social Media Management", icon: "♡" },
              ].map(({ label, icon }) => (
                <div key={label} style={{ textAlign: "center" }}>
                  <div style={{ fontSize: "22px", color: "#C8A968", marginBottom: "12px" }}>{icon}</div>
                  <p style={{ fontSize: "13px", color: "#7A7A7A" }}>{label}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Projects carousel */}
      <section style={{ width: "100%", padding: "48px 0 96px", position: "relative", zIndex: 2, backgroundColor: "#000", overflowX: "hidden" }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "32px", padding: "0 24px" }}>
            <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#F3F5F5", marginBottom: "12px" }}>
              Projecten
            </h2>
            <Link href="/portfolio" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>
              Alles bekijken →
            </Link>
          </div>
        </ScrollReveal>
        <ScrollReveal delay={0.1}>
          <ProjectsCarousel />
        </ScrollReveal>
      </section>

      {/* Portrait video slider */}
      <section style={{ width: "100%", padding: "80px 0", backgroundColor: "#000", position: "relative", zIndex: 2 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 24px" }}>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#555", marginBottom: "12px" }}>Short-form content</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 600, color: "#F3F5F5" }}>
              Ons <span style={{ color: "#C8A968" }}>werk</span> in beeld
            </h2>
          </div>
        </ScrollReveal>
        <PortraitVideoSlider
          slides={[
            { type: "youtube", youtubeId: "xRICVIOfsfo", label: "Raoul" },
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7647505162797452576", label: "FlevoNautica" },
            { type: "instagram", instagramUrl: "https://www.instagram.com/reel/C4N_T_ct1r6/", label: "Russo" },
            { type: "instagram", instagramUrl: "https://www.instagram.com/reel/DVGx89sDBm1/", label: "SDB Coaching" },
            { type: "youtube", youtubeId: "TJnhf092bL4", label: "Raoul" },
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7647846376432291104", label: "FlevoNautica" },
            { type: "instagram", instagramUrl: "https://www.instagram.com/reel/C0ep7YzsR_d/", label: "Russo" },
            { type: "instagram", instagramUrl: "https://www.instagram.com/reel/DTXVAqdjLRf/", label: "SDB Coaching" },
            { type: "youtube", youtubeId: "ZUcQNLzgpso", label: "Raoul" },
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7650073900973378848", label: "FlevoNautica" },
            { type: "instagram", instagramUrl: "https://www.instagram.com/reel/Cwhz8efsXOT/", label: "Russo" },
            { type: "instagram", instagramUrl: "https://www.instagram.com/reel/DP5yRypjL6e/", label: "SDB Coaching" },
            { type: "youtube", youtubeId: "eS3QtcZDdsw", label: "Raoul" },
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7653035915811523872", label: "FlevoNautica" },
            { type: "instagram", instagramUrl: "https://www.instagram.com/reel/DYwesi9MMGu/", label: "SDB Coaching" },
            { type: "youtube", youtubeId: "bSVjcv0-zXY", label: "Raoul" },
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7652658822967774496", label: "FlevoNautica" },
            { type: "instagram", instagramUrl: "https://www.instagram.com/reel/DWOXj97sLyn/", label: "SDB Coaching" },
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7651922264752934177", label: "FlevoNautica" },
          ]}
        />
      </section>

      {/* Landscape video slider */}
      <section style={{ width: "100%", padding: "80px 0", backgroundColor: "#000", position: "relative", zIndex: 2 }}>
        <ScrollReveal>
          <div style={{ textAlign: "center", marginBottom: "48px", padding: "0 24px" }}>
            <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#555", marginBottom: "12px" }}>Long-form content</p>
            <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 600, color: "#F3F5F5" }}>
              Recent <span style={{ color: "#C8A968" }}>werk</span>
            </h2>
          </div>
        </ScrollReveal>
        <LandscapeVideoSlider slides={landscapeSlides} />
      </section>

      {/* Testimonials */}
      <TestimonialsSection />

      {/* CTA */}
      <section style={{ padding: "96px 24px", position: "relative", zIndex: 2, backgroundColor: "#000", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
        <ScrollReveal style={{ width: "100%", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
          <div style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "9999px", border: "1px solid #333", marginBottom: "32px" }}>
            <span style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "#C8A968", display: "inline-block", flexShrink: 0 }} />
            <span style={{ fontSize: "12px", color: "#7A7A7A", letterSpacing: "0.2em", textTransform: "uppercase" }}>Editor & Content Creator</span>
          </div>
          <h2 style={{ fontSize: "clamp(1.75rem, 4vw, 3rem)", fontWeight: 600, color: "#F3F5F5", marginBottom: "24px", maxWidth: "640px" }}>
            Klaar om samen iets{" "}
            <span style={{ color: "#C8A968" }}>moois</span> te maken?
          </h2>
          <p style={{ color: "#7A7A7A", marginBottom: "32px", maxWidth: "400px", lineHeight: "1.7" }}>
            Vertel ons over je project en we nemen snel contact met je op.
          </p>
          <Link
            href="/contact"
            style={{ padding: "14px 32px", fontSize: "16px", fontWeight: 500, backgroundColor: "#C8A968", color: "#000000", borderRadius: "9999px", display: "inline-block" }}
          >
            Stuur een bericht
          </Link>
        </ScrollReveal>
      </section>
    </>
  );
}
