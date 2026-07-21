"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useState } from "react";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

type LandscapeSlide = {
  youtubeId: string;
  projectTitle: string;
  projectId: string;
};

function LandscapeVideoCard({
  slide,
  isPlaying,
  onPlay,
}: {
  slide: LandscapeSlide;
  isPlaying: boolean;
  onPlay: () => void;
}) {
  const embedSrc = `https://www.youtube.com/embed/${slide.youtubeId}?autoplay=1&rel=0&modestbranding=1`;

  return (
    <div
      style={{
        width: "320px",
        aspectRatio: "16/9",
        borderRadius: "12px",
        overflow: "hidden",
        position: "relative",
        backgroundColor: "#111",
        border: `1px solid ${isPlaying ? "rgba(200,169,104,0.5)" : "rgba(255,255,255,0.07)"}`,
        flexShrink: 0,
        transition: "border 0.3s",
      }}
    >
      {isPlaying ? (
        <iframe
          src={embedSrc}
          style={{ width: "100%", height: "100%", border: "none", display: "block" }}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      ) : (
        <>
          <img
            src={`https://img.youtube.com/vi/${slide.youtubeId}/maxresdefault.jpg`}
            onError={(e) => {
              e.currentTarget.src = `https://img.youtube.com/vi/${slide.youtubeId}/hqdefault.jpg`;
            }}
            alt={slide.projectTitle}
            style={{ width: "100%", height: "100%", objectFit: "cover" }}
          />
          <div
            style={{
              position: "absolute",
              inset: 0,
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, transparent 55%)",
            }}
          />
          <button
            onClick={onPlay}
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              background: "transparent",
              border: "none",
              cursor: "pointer",
            }}
          >
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "9999px",
                backgroundColor: "rgba(200,169,104,0.85)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 4px 20px rgba(200,169,104,0.4)",
              }}
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="#000">
                <polygon points="5,3 19,12 5,21" />
              </svg>
            </div>
          </button>
          <div
            style={{
              position: "absolute",
              bottom: "10px",
              left: "12px",
              right: "12px",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <p
              style={{
                fontSize: "12px",
                fontWeight: 600,
                color: "#F3F5F5",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                margin: 0,
              }}
            >
              {slide.projectTitle}
            </p>
            <Link
              href={`/portfolio/${slide.projectId}`}
              onClick={(e) => e.stopPropagation()}
              style={{
                fontSize: "11px",
                color: "#C8A968",
                textDecoration: "none",
                textShadow: "0 1px 4px rgba(0,0,0,0.8)",
                whiteSpace: "nowrap",
              }}
            >
              Bekijk project →
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default function LandscapeVideoSlider({ slides }: { slides: LandscapeSlide[] }) {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

  const looped = [...slides, ...slides];

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[
        AutoScroll({ playOnInit: true, speed: 0.9, stopOnInteraction: false, stopOnMouseEnter: false }),
      ]}
    >
      <CarouselContent className="ml-0" style={{ gap: "16px" }}>
        {looped.map((slide, i) => {
          const originalIdx = i % slides.length;
          const isPlaying = playingIdx === originalIdx;
          return (
            <CarouselItem key={i} className="pl-0 basis-auto">
              <LandscapeVideoCard
                slide={slide}
                isPlaying={isPlaying}
                onPlay={() => setPlayingIdx(isPlaying ? null : originalIdx)}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
