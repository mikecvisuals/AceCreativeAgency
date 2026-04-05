"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface LinkCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  href: string;
  accentColor?: string;
  className?: string;
}

const LinkCard = React.forwardRef<HTMLAnchorElement, LinkCardProps>(
  ({ className, title, description, icon, href, accentColor = "#C8A968" }, ref) => {
    return (
      <a
        ref={ref}
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={cn("group", className)}
        style={{
          height: "180px",
          width: "100%",
          maxWidth: "320px",
          borderRadius: "16px",
          border: "1px solid #1a1a1a",
          backgroundColor: "#0a0a0a",
          padding: "24px",
          textDecoration: "none",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          position: "relative",
          overflow: "hidden",
          transition: "transform 0.3s ease, border-color 0.3s ease",
        }}
        onMouseEnter={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(-5px) scale(1.02)"; }}
        onMouseLeave={e => { (e.currentTarget as HTMLElement).style.transform = "translateY(0) scale(1)"; }}
      >
        <div style={{ zIndex: 10 }}>
          <h3 style={{ fontSize: "22px", fontWeight: 600, color: "#F3F5F5", marginBottom: "8px", letterSpacing: "-0.01em" }}>
            {title}
          </h3>
          <p style={{ fontSize: "13px", color: "#7A7A7A", lineHeight: 1.5, maxWidth: "75%" }}>
            {description}
          </p>
        </div>

        <div style={{ position: "absolute", bottom: "20px", right: "20px", opacity: 0.15, color: accentColor, transform: "scale(2.5)", transformOrigin: "bottom right" }}>
          {icon}
        </div>

        <div style={{ fontSize: "12px", color: accentColor, letterSpacing: "0.05em", position: "relative", zIndex: 10 }}>
          Volg ons →
        </div>
      </a>
    );
  }
);

LinkCard.displayName = "LinkCard";
export { LinkCard };
