"use client";

function HeroGeometric({
  badge = "Video & Fotografie",
  title1 = "Wij vertellen",
  title2 = "jouw verhaal in beeld.",
}: {
  badge?: string;
  title1?: string;
  title2?: string;
}) {
  return (
    <div style={{ position: "relative", width: "100%", display: "flex", alignItems: "center", justifyContent: "center", height: "100vh", maxHeight: "100vh", background: "#000000", overflow: "hidden" }}>
      <style>{`
        @keyframes fadeUp {
          from { opacity: 0; transform: translateY(24px); }
          to   { opacity: 1; transform: translateY(0); }
        }
        @keyframes floatShape {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(12px); }
        }
        @keyframes pulseLine {
          0%, 100% { opacity: 0.3; }
          50%       { opacity: 1; }
        }
        .hero-badge  { animation: fadeUp 0.7s ease-out 0.3s both; }
        .hero-title  { animation: fadeUp 0.7s ease-out 0.5s both; }
        .hero-text   { animation: fadeUp 0.7s ease-out 0.7s both; }
        .hero-btns   { animation: fadeUp 0.7s ease-out 0.9s both; }
        .shape-float { animation: floatShape 10s ease-in-out infinite; pointer-events: none; }
        .pulse-line  { animation: pulseLine 2s ease-in-out infinite; }
      `}</style>

      {/* Background shapes — completely non-interactive */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", pointerEvents: "none", zIndex: 0 }}>
        <div className="shape-float" style={{ position: "absolute", left: "-5%", top: "20%", width: 600, height: 140, transform: "rotate(12deg)" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "9999px", background: "linear-gradient(to right, rgba(200,169,104,0.10), transparent)", border: "1px solid rgba(255,255,255,0.06)" }} />
        </div>
        <div className="shape-float" style={{ position: "absolute", right: "0%", top: "75%", width: 500, height: 120, transform: "rotate(-15deg)", animationDelay: "2s" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "9999px", background: "linear-gradient(to right, rgba(200,169,104,0.06), transparent)", border: "1px solid rgba(255,255,255,0.06)" }} />
        </div>
        <div className="shape-float" style={{ position: "absolute", left: "10%", bottom: "10%", width: 300, height: 80, transform: "rotate(-8deg)", animationDelay: "4s" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "9999px", background: "linear-gradient(to right, rgba(255,255,255,0.03), transparent)", border: "1px solid rgba(255,255,255,0.04)" }} />
        </div>
        <div className="shape-float" style={{ position: "absolute", right: "20%", top: "15%", width: 200, height: 60, transform: "rotate(20deg)", animationDelay: "1s" }}>
          <div style={{ width: "100%", height: "100%", borderRadius: "9999px", background: "linear-gradient(to right, rgba(200,169,104,0.08), transparent)", border: "1px solid rgba(255,255,255,0.05)" }} />
        </div>
        {/* Gradient overlay */}
        <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, #000000 0%, transparent 40%, rgba(0,0,0,0.4) 100%)" }} />
      </div>

      {/* Content */}
      <div style={{ position: "relative", zIndex: 1, width: "100%", maxWidth: "800px", margin: "0 auto", textAlign: "center", padding: "0 24px" }}>
        <div className="hero-badge" style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "6px 16px", borderRadius: "9999px", border: "1px solid #333", marginBottom: "40px" }}>
          <span style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "#C8A968", display: "inline-block", flexShrink: 0 }} />
          <span style={{ fontSize: "12px", color: "#7A7A7A", letterSpacing: "0.2em", textTransform: "uppercase" }}>{badge}</span>
        </div>

        <h1 className="hero-title" style={{ fontSize: "clamp(2.5rem, 7vw, 5rem)", fontWeight: 600, lineHeight: 1.1, letterSpacing: "-0.02em", marginBottom: "32px" }}>
          <span style={{ color: "#F3F5F5" }}>{title1}{" "}</span>
          <br />
          <span style={{ color: "#C8A968" }}>{title2}</span>
        </h1>

        <p className="hero-text" style={{ fontSize: "18px", color: "#7A7A7A", lineHeight: 1.7, maxWidth: "520px", margin: "0 auto 40px" }}>
          Ace Creative Agency is gespecialiseerd in video, foto en social media management — voor influencers, bedrijven en persoonlijke projecten.
        </p>

        <div className="hero-btns" style={{ display: "flex", gap: "16px", justifyContent: "center", flexWrap: "wrap", paddingBottom: "80px" }}>
          <a href="/portfolio" style={{ padding: "14px 32px", fontSize: "16px", fontWeight: 500, backgroundColor: "#C8A968", color: "#000000", borderRadius: "9999px", display: "inline-block", textDecoration: "none" }}>
            Bekijk portfolio
          </a>
          <a href="/contact" style={{ padding: "14px 32px", fontSize: "16px", border: "1px solid #333", color: "#F3F5F5", borderRadius: "9999px", display: "inline-block", textDecoration: "none" }}>
            Neem contact op
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div style={{ position: "absolute", bottom: "48px", left: "50%", transform: "translateX(-50%)", zIndex: 1, pointerEvents: "none" }}>
        <div className="pulse-line" style={{ width: "1px", height: "64px", background: "linear-gradient(to bottom, #333, transparent)" }} />
      </div>
    </div>
  );
}

export { HeroGeometric };
