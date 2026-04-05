"use client";

import { useState } from "react";
import ProjectCard from "@/components/ProjectCard";
import { projects, ProjectType } from "@/data/projects";
import ScrollReveal from "@/components/ui/scroll-reveal";

const filters: { label: string; value: "all" | ProjectType }[] = [
  { label: "Alles", value: "all" },
  { label: "Video", value: "video" },
  { label: "Foto", value: "photo" },
  { label: "Concept", value: "concept" },
  { label: "Productie", value: "productie" },
];

export default function PortfolioPage() {
  const [active, setActive] = useState<"all" | ProjectType>("all");
  const filtered = active === "all"
    ? projects
    : projects.filter((p) => p.type === active || p.tags?.includes(active));

  return (
    <div style={{ paddingTop: "140px", paddingBottom: "96px", paddingLeft: "24px", paddingRight: "24px", display: "flex", flexDirection: "column", alignItems: "center", width: "100%", position: "relative", zIndex: 2 }}>

      {/* Header */}
      <ScrollReveal>
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#555", marginBottom: "16px" }}>Ons werk</p>
          <h1 style={{ fontSize: "clamp(2rem, 6vw, 3rem)", fontWeight: 600, color: "#F3F5F5" }}>Portfolio</h1>
        </div>
      </ScrollReveal>

      {/* Filter buttons */}
      <ScrollReveal delay={0.1} style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", gap: "8px", marginBottom: "64px", justifyContent: "center", flexWrap: "wrap", maxWidth: "600px" }}>
        {filters.map(({ label, value }) => (
          <button
            key={value}
            onClick={() => setActive(value)}
            style={{
              padding: "10px 20px",
              fontSize: "13px",
              borderRadius: "9999px",
              border: active === value ? "1px solid #C8A968" : "1px solid #333",
              backgroundColor: active === value ? "#C8A968" : "transparent",
              color: active === value ? "#000000" : "#7A7A7A",
              whiteSpace: "nowrap",
              cursor: "pointer",
            }}
          >
            {label}
          </button>
        ))}
      </div>
      </ScrollReveal>

      {/* Grid */}
      <ScrollReveal delay={0.2} style={{ width: "100%", maxWidth: "960px" }}>
      <div style={{ width: "100%", maxWidth: "960px", display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: "24px" }}>
        {filtered.map((project) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
      </ScrollReveal>

      {filtered.length === 0 && (
        <p style={{ textAlign: "center", color: "#555", padding: "80px 0" }}>Geen projecten gevonden.</p>
      )}
    </div>
  );
}
