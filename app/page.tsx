import type { Metadata } from "next";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import AnimatedCardStack from "@/components/ui/animate-card-animation";
import ScrollReveal from "@/components/ui/scroll-reveal";

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

export default function Home() {
  return (
    <>
      {/* Hero */}
      <HeroGeometric
        badge="Editor & Content Creator"
        title1="Wij vertellen"
        title2="jouw verhaal in beeld."
      />

      {/* Featured projects */}
      <section style={{ width: "100%", padding: "48px 24px 96px", display: "flex", flexDirection: "column", alignItems: "center", position: "relative", zIndex: 2, backgroundColor: "#000" }}>
        <div style={{ width: "100%", maxWidth: "800px" }}>
          <ScrollReveal>
            <div style={{ textAlign: "center", marginBottom: "40px" }}>
              <h2 style={{ fontSize: "22px", fontWeight: 600, color: "#F3F5F5", marginBottom: "12px" }}>
                Uitgelichte projecten
              </h2>
              <Link href="/portfolio" style={{ fontSize: "13px", color: "#555", textDecoration: "none" }}>
                Alles bekijken →
              </Link>
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <AnimatedCardStack />
          </ScrollReveal>
        </div>
      </section>

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
