import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";
import TeamGrid from "@/components/ui/team-grid";

export const metadata: Metadata = {
  title: "Over Mike Bogers — Video Editor & Content Creator",
  description:
    "Mike Bogers is oprichter van Ace Creative Agency in Roosendaal. Video editor en content creator met ervaring bij BNNVARA en ITV Studios. Gespecialiseerd in short-form video, fotografie en social media.",
  alternates: { canonical: "https://acecreativeagency.nl/about" },
  openGraph: {
    title: "Over Mike Bogers — Video Editor & Content Creator | Ace Creative Agency",
    description:
      "Mike Bogers — oprichter van Ace Creative Agency in Roosendaal. Video editor en content creator met ervaring bij BNNVARA en ITV Studios.",
    url: "https://acecreativeagency.nl/about",
  },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Mike Bogers",
  jobTitle: "Editor & Content Creator",
  worksFor: { "@type": "Organization", name: "Ace Creative Agency" },
  url: "https://acecreativeagency.nl/about",
  image: "https://acecreativeagency.nl/mike-bogers.jpg",
  alumniOf: { "@type": "EducationalOrganization", name: "Grafisch Lyceum Rotterdam" },
  description:
    "Video editor en content creator gespecialiseerd in short form video, fotografie en social media content. Eerder werkzaam bij BNNVARA en ITV Studios.",
};

export default function AboutPage() {
  return (
    <div style={{ paddingTop: "140px", paddingBottom: "96px", paddingLeft: "24px", paddingRight: "24px", display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />

      {/* Header */}
      <ScrollReveal>
        <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#555", marginBottom: "16px" }}>Over ons</p>
        <h1 style={{ fontSize: "clamp(2rem, 8vw, 4rem)", fontWeight: 600, color: "#F3F5F5", lineHeight: 1.1, marginBottom: "24px", maxWidth: "640px" }}>
          Wij geloven in de{" "}
          <span style={{ color: "#C8A968" }}>kracht van beeld.</span>
        </h1>
        <p style={{ fontSize: "17px", color: "#7A7A7A", lineHeight: 1.7, maxWidth: "560px", marginBottom: "80px" }}>
          Ace Creative Agency is een creatief bureau in Roosendaal,
          gespecialiseerd in videoproductie en fotografie voor merken,
          content creators en influencers door heel Nederland.
        </p>
      </ScrollReveal>

      {/* Two column */}
      <ScrollReveal delay={0.1}>
        <div className="grid md:grid-cols-2" style={{ gap: "48px", marginBottom: "80px", width: "100%", maxWidth: "800px" }}>
          <div style={{ textAlign: "left" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#F3F5F5", marginBottom: "16px" }}>Onze aanpak</h2>
            <p style={{ color: "#7A7A7A", lineHeight: 1.7, marginBottom: "16px", fontSize: "15px" }}>
              Elk project begint met een gesprek: wat wil je vertellen, aan
              wie, en waarom nu? Vanuit die antwoorden bouwen we een concept
              dat past bij jouw merk, niet bij een sjabloon.
            </p>
            <p style={{ color: "#7A7A7A", lineHeight: 1.7, fontSize: "15px" }}>
              Van pre-productie tot de eindoplevering blijven we betrokken.
              Geen losse freelancer die verdwijnt na de opnamedag, maar iemand
              die het hele traject bewaakt.
            </p>
          </div>
          <div style={{ textAlign: "left" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#F3F5F5", marginBottom: "16px" }}>Wat we doen</h2>
            <ul style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
              {[
                "Video editing",
                "Fotografie",
                "Videoproductie",
                "Social media management",
              ].map((item) => (
                <li key={item} style={{ display: "flex", alignItems: "center", gap: "12px", color: "#7A7A7A", fontSize: "15px" }}>
                  <span style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "#C8A968", flexShrink: 0 }} />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </ScrollReveal>

      {/* Stats */}
      <ScrollReveal delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4" style={{ borderTop: "1px solid #1a1a1a", paddingTop: "64px", gap: "40px", marginBottom: "80px", width: "100%", maxWidth: "800px" }}>
          {[
            { number: "100+", label: "Projecten" },
            { number: "5+", label: "Jaar ervaring" },
            { number: "50+", label: "Tevreden klanten" },
            { number: "∞", label: "Passie" },
          ].map(({ number, label }) => (
            <div key={label} style={{ textAlign: "center" }}>
              <div style={{ fontSize: "28px", fontWeight: 600, color: "#C8A968", marginBottom: "8px" }}>{number}</div>
              <div style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.15em", color: "#555" }}>{label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* Het ontstaan */}
      <ScrollReveal delay={0.3} style={{ width: "100%", maxWidth: "800px" }}>
        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "80px", marginBottom: "80px" }}>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#555", marginBottom: "16px", textAlign: "center" }}>Het ontstaan</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 600, color: "#F3F5F5", marginBottom: "48px", textAlign: "center" }}>
            Hoe <span style={{ color: "#C8A968" }}>Ace Creative Agency</span> ontstond
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "16px", textAlign: "left" }}>
            {[
              "Ace Creative Agency startte ik in 2020, vlak na mijn afstuderen aan het Grafisch Lyceum in Rotterdam. Er was geen masterplan. Ik nam freelance klussen aan naast een vaste baan en keek gewoon waar het heen ging. Een paar jaar later sta ik er nog steeds, en inmiddels met veel meer overtuiging dan in het begin.",
              "Die vaste baan was bij BNNVARA, en later bij ITV Studios. Dat liep gewoon naast elkaar: overdag het vak leren binnen de televisiewereld, ernaast 's avonds en in het weekend aan mijn eigen klanten werken. Wat ik bij de een oppikte, gebruikte ik meteen bij de ander.",
              "De naam Ace komt niet uit een merknaam-generator of brainstormsessie. Hij is vernoemd naar mijn zoontje. Als ik iets bouw, wil ik dat het zijn naam waardig is.",
              "Die eerste freelance klusjes zijn intussen uitgegroeid tot een bureau dat merken, content creators en influencers door heel Nederland helpt met hun verhaal.",
            ].map((para, i) => (
              <p key={i} style={{ color: "#7A7A7A", lineHeight: 1.8, fontSize: "15px" }}>{para}</p>
            ))}
          </div>
        </div>
      </ScrollReveal>

      {/* Werk in beeld */}
      <ScrollReveal delay={0.35} style={{ width: "100%", maxWidth: "1000px", marginBottom: "80px" }}>
        <h2 style={{ fontSize: "clamp(1.5rem, 4vw, 2rem)", fontWeight: 600, color: "#F3F5F5", marginBottom: "32px", textAlign: "center" }}>
          Ons <span style={{ color: "#C8A968" }}>Ace Creative Agency</span> Team
        </h2>
        <TeamGrid
          members={[
            { id: "mike", src: "/mike-bogers-team.jpg", name: "Mike Bogers", role: "Eigenaar, Editor & Content Creator", objectPosition: "center top" },
            { id: "denise", src: "/denise-wuijster-thumbnail.jpg", name: "Denise Wuijster", role: "Freelance editor" },
          ]}
        />
      </ScrollReveal>

      {/* CTA */}
      <ScrollReveal delay={0.4}>
        <Link
          href="/contact"
          style={{ padding: "14px 32px", fontSize: "16px", fontWeight: 500, backgroundColor: "#C8A968", color: "#000000", borderRadius: "9999px", display: "inline-block" }}
        >
          Werk met ons samen
        </Link>
      </ScrollReveal>
    </div>
  );
}
