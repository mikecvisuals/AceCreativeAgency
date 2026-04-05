import Link from "next/link";
import { Project } from "@/data/projects";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/portfolio/${project.id}`} style={{ display: "block", textDecoration: "none" }}>
      <div style={{ position: "relative", overflow: "hidden", borderRadius: "10px", backgroundColor: "#0f0f0f", aspectRatio: "4/3" }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: project.thumbnailPosition ?? "center", transform: project.thumbnailZoom ? `scale(${project.thumbnailZoom})` : undefined }}
        />

        {/* Badges */}
        <div style={{ position: "absolute", top: "12px", left: "12px", display: "flex", gap: "6px", flexWrap: "wrap", pointerEvents: "none" }}>
          <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, padding: "3px 8px", borderRadius: "9999px", backgroundColor: "rgba(200,169,104,0.1)", color: "#C8A968", border: "1px solid rgba(200,169,104,0.2)" }}>
            {project.type === "video" ? "▶ Video" : "◻ Foto"}
          </span>
          {project.type === "video" && project.tags?.includes("photo") && (
            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, padding: "3px 8px", borderRadius: "9999px", backgroundColor: "rgba(200,169,104,0.1)", color: "#C8A968", border: "1px solid rgba(200,169,104,0.2)" }}>
              ◻ Foto
            </span>
          )}
          {project.tags?.includes("concept") && (
            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, padding: "3px 8px", borderRadius: "9999px", backgroundColor: "rgba(200,169,104,0.1)", color: "#C8A968", border: "1px solid rgba(200,169,104,0.2)" }}>
              ✦ Concept
            </span>
          )}
          {project.tags?.includes("productie") && (
            <span style={{ fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600, padding: "3px 8px", borderRadius: "9999px", backgroundColor: "rgba(200,169,104,0.1)", color: "#C8A968", border: "1px solid rgba(200,169,104,0.2)" }}>
              ◎ Productie
            </span>
          )}
        </div>
      </div>

      <div style={{ marginTop: "12px" }}>
        <h3 style={{ fontSize: "14px", fontWeight: 500, color: "#F3F5F5" }}>
          {project.title}
        </h3>
        <p style={{ fontSize: "12px", color: "#555", marginTop: "2px" }}>{project.category}</p>
      </div>
    </Link>
  );
}
