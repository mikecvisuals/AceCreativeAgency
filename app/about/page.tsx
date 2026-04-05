import type { Metadata } from "next";
import Link from "next/link";
import ScrollReveal from "@/components/ui/scroll-reveal";

export const metadata: Metadata = {
  title: "Over ons",
  description:
    "Leer Mike Bogers kennen — oprichter van Ace Creative Agency. Afgestudeerd aan het Grafisch Lyceum Rotterdam, met ervaring bij BNNVARA en ITV Studios als video editor en content creator.",
  alternates: { canonical: "https://acecreativeagency.nl/about" },
  openGraph: {
    title: "Over ons — Ace Creative Agency",
    description:
      "Leer Mike Bogers kennen — oprichter van Ace Creative Agency. Video editor en content creator met ervaring bij BNNVARA en ITV Studios.",
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
          Ace Creative Agency is een creatief bureau gespecialiseerd in
          videoproductie en fotografie. We werken met passie aan projecten
          die een verhaal vertellen en een indruk achterlaten.
        </p>
      </ScrollReveal>

      {/* Two column */}
      <ScrollReveal delay={0.1}>
        <div className="grid md:grid-cols-2" style={{ gap: "48px", marginBottom: "80px", width: "100%", maxWidth: "800px" }}>
          <div style={{ textAlign: "left" }}>
            <h2 style={{ fontSize: "18px", fontWeight: 600, color: "#F3F5F5", marginBottom: "16px" }}>Onze aanpak</h2>
            <p style={{ color: "#7A7A7A", lineHeight: 1.7, marginBottom: "16px", fontSize: "15px" }}>
              Elk project begint met een gesprek. We willen jouw verhaal
              begrijpen, jouw doelen kennen en jouw doelgroep leren kennen.
              Vanuit die basis bouwen we een creatief concept dat echt werkt.
            </p>
            <p style={{ color: "#7A7A7A", lineHeight: 1.7, fontSize: "15px" }}>
              Van pre-productie tot de eindoplevering — we begeleiden je door
              het hele proces en zorgen voor een resultaat waar je trots op bent.
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

      {/* Wie ben ik */}
      <ScrollReveal delay={0.3} style={{ width: "100%", maxWidth: "800px" }}>
        <div style={{ borderTop: "1px solid #1a1a1a", paddingTop: "80px", marginBottom: "80px" }}>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#555", marginBottom: "16px", textAlign: "center" }}>De persoon achter het werk</p>
          <h2 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 600, color: "#F3F5F5", marginBottom: "48px", textAlign: "center" }}>
            Wie ben <span style={{ color: "#C8A968" }}>ik?</span>
          </h2>

          <div style={{ display: "flex", flexDirection: "row", gap: "48px", alignItems: "flex-start", flexWrap: "wrap" }}>
            {/* Photo */}
            <div style={{ flexShrink: 0, width: "260px", maxWidth: "100%" }}>
              <img
                src="/mike-bogers.jpg"
                alt="Mike Bogers — Editor & Content Creator bij Ace Creative Agency"
                width={780}
                height={1040}
                style={{ width: "100%", borderRadius: "16px", objectFit: "cover", aspectRatio: "3/4", display: "block" }}
              />
              <p style={{ marginTop: "16px", fontSize: "14px", fontWeight: 600, color: "#F3F5F5", textAlign: "center" }}>Mike Bogers</p>
              <p style={{ fontSize: "12px", color: "#C8A968", textAlign: "center", marginTop: "4px" }}>Editor & Content Creator</p>
            </div>

            {/* Bio */}
            <div style={{ flex: 1, minWidth: "240px", textAlign: "left", display: "flex", flexDirection: "column", gap: "16px" }}>
              {[
                "Mijn naam is Mike Bogers, geboren en getogen in Roosendaal. Al op jonge leeftijd ontwikkelde ik een sterke interesse in video en fotografie. Wat begon als een hobby, groeide al snel uit tot mijn grootste passie, en uiteindelijk mijn droombaan.",
                "Mijn reis begon op het Grafisch Lyceum in Rotterdam, waar ik in 2020 ben afgestudeerd. Tijdens mijn opleiding heb ik mijn creatieve en technische vaardigheden verder ontwikkeld en geleerd om verhalen visueel tot leven te brengen.",
                "Na mijn studie heb ik waardevolle ervaring opgedaan bij BNNVARA en ITV Studios, waar ik de fijne kneepjes van het vak heb geleerd op het gebied van radio en televisieproductie. Deze professionele basis neem ik mee in elk project waar ik aan werk.",
                "Daarnaast ben ik actief in de wereld van online content en werk ik samen met influencers. Zo heb ik onder andere shorts geproduceerd voor YouTube en TikTok voor Raoul (bekend van de Bankzitters) en Russo. Hierdoor ben ik sterk thuis in het creëren van content die aansluit bij de snelle en dynamische online wereld.",
                "Met een combinatie van creativiteit, technische kennis en praktijkervaring help ik merken en makers om hun verhaal krachtig en visueel aantrekkelijk te vertellen.",
              ].map((para, i) => (
                <p key={i} style={{ color: "#7A7A7A", lineHeight: 1.8, fontSize: "15px" }}>{para}</p>
              ))}
            </div>
          </div>
        </div>
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
