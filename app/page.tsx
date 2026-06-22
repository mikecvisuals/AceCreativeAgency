import type { Metadata } from "next";
import Link from "next/link";
import { HeroGeometric } from "@/components/ui/shape-landing-hero";
import ProjectsCarousel from "@/components/ProjectsCarousel";
import ScrollReveal from "@/components/ui/scroll-reveal";
import PortraitVideoSlider from "@/components/ui/portrait-video-slider-client";

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
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7647505162797452576", label: "Social Next Agency" },
            { type: "youtube", youtubeId: "TJnhf092bL4", label: "Raoul" },
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7647846376432291104", label: "Social Next Agency" },
            { type: "youtube", youtubeId: "ZUcQNLzgpso", label: "Raoul" },
            { type: "tiktok", tiktokUrl: "https://www.tiktok.com/@flevonautica/video/7650073900973378848", label: "Social Next Agency" },
            { type: "youtube", youtubeId: "eS3QtcZDdsw", label: "Raoul" },
            { type: "youtube", youtubeId: "bSVjcv0-zXY", label: "Raoul" },
          ]}
        />
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
