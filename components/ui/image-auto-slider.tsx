"use client"

import React from "react"

export interface SliderImage {
  src: string
  objectPosition?: string
}

interface ImageAutoSliderProps {
  images: (string | SliderImage)[]
}

export default function ImageAutoSlider({ images }: ImageAutoSliderProps) {
  const normalized: SliderImage[] = images.map((img) =>
    typeof img === "string" ? { src: img } : img
  )
  const duplicated = [...normalized, ...normalized]

  return (
    <>
      <style>{`
        @keyframes scroll-right {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .image-auto-slider-track {
          animation: scroll-right 20s linear infinite;
        }
        .image-auto-slider-item {
          transition: transform 0.3s ease, filter 0.3s ease;
        }
        .image-auto-slider-item:hover {
          transform: scale(1.05);
          filter: brightness(1.1);
        }
      `}</style>

      <div style={{
        width: "100%",
        overflow: "hidden",
        WebkitMask: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
        mask: "linear-gradient(90deg, transparent 0%, black 10%, black 90%, transparent 100%)",
      }}>
        <div className="image-auto-slider-track" style={{ display: "flex", gap: "16px", width: "max-content" }}>
          {duplicated.map((img, i) => (
            <div
              key={i}
              className="image-auto-slider-item"
              style={{ flexShrink: 0, width: "260px", height: "260px", borderRadius: "12px", overflow: "hidden", border: "1px solid #1a1a1a" }}
            >
              <img
                src={img.src}
                alt={`Foto ${(i % normalized.length) + 1}`}
                style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: img.objectPosition ?? "center", display: "block" }}
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </>
  )
}
