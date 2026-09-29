"use client";

import { useState } from "react";

export interface TeamMember {
  id: string;
  src: string;
  name: string;
  role: string;
  objectPosition?: string;
}

interface TeamGridProps {
  members: TeamMember[];
}

export default function TeamGrid({ members }: TeamGridProps) {
  const [activeId, setActiveId] = useState(members[0]?.id ?? "");

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "560px",
        gap: "16px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {members.map((member) => {
        const isActive = member.id === activeId;
        return (
          <div
            key={member.id}
            onMouseEnter={() => setActiveId(member.id)}
            onClick={() => setActiveId(member.id)}
            style={{
              position: "relative",
              flex: isActive ? "3 1 0%" : "1 1 0%",
              minWidth: 0,
              cursor: "pointer",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundColor: "#0f0f0f",
            }}
          >
            <img
              src={member.src}
              alt={`${member.name} — ${member.role}`}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: member.objectPosition ?? "center",
              }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: isActive
                  ? "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 45%)"
                  : "rgba(0,0,0,0.45)",
                transition: "background 0.5s",
              }}
            />
            <div
              style={{
                position: "absolute",
                bottom: "20px",
                left: "20px",
                right: "20px",
                opacity: isActive ? 1 : 0,
                transform: isActive ? "translateY(0)" : "translateY(8px)",
                transition: "opacity 0.4s, transform 0.4s",
              }}
            >
              <p style={{ color: "#F3F5F5", fontSize: "16px", fontWeight: 600, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", marginBottom: "2px" }}>
                {member.name}
              </p>
              <p style={{ color: "#C8A968", fontSize: "13px", whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                {member.role}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
