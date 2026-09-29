"use client";

import { useState } from "react";

export interface ImageAccordionItem {
  id: string;
  src: string;
  alt: string;
  label?: string;
  objectPosition?: string;
  objectZoom?: number;
}

interface ImageAccordionProps {
  items: ImageAccordionItem[];
}

export default function ImageAccordion({ items }: ImageAccordionProps) {
  const [activeId, setActiveId] = useState(items[0]?.id ?? "");

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "420px",
        gap: "8px",
        borderRadius: "16px",
        overflow: "hidden",
      }}
    >
      {items.map((item) => {
        const isActive = item.id === activeId;
        return (
          <div
            key={item.id}
            onMouseEnter={() => setActiveId(item.id)}
            onClick={() => setActiveId(item.id)}
            style={{
              position: "relative",
              flex: isActive ? "6 1 0%" : "1 1 0%",
              minWidth: 0,
              cursor: "pointer",
              borderRadius: "12px",
              overflow: "hidden",
              transition: "flex 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
              backgroundColor: "#0f0f0f",
            }}
          >
            <img
              src={item.src}
              alt={item.alt}
              style={{
                position: "absolute",
                inset: 0,
                width: "100%",
                height: "100%",
                objectFit: "cover",
                objectPosition: item.objectPosition ?? "center",
                transform: item.objectZoom ? `scale(${item.objectZoom})` : undefined,
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
            {item.label && (
              <p
                style={{
                  position: "absolute",
                  bottom: "16px",
                  left: "16px",
                  right: "16px",
                  color: "#F3F5F5",
                  fontSize: "13px",
                  fontWeight: 600,
                  whiteSpace: "nowrap",
                  overflow: "hidden",
                  textOverflow: "ellipsis",
                  opacity: isActive ? 1 : 0,
                  transform: isActive ? "translateY(0)" : "translateY(6px)",
                  transition: "opacity 0.4s, transform 0.4s",
                }}
              >
                {item.label}
              </p>
            )}
          </div>
        );
      })}
    </div>
  );
}
