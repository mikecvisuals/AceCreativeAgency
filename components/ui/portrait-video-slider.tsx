"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

type VideoSlide = {
  type: "tiktok" | "youtube" | "instagram";
  tiktokUrl?: string;
  youtubeId?: string;
  instagramUrl?: string;
  label?: string;
};

function extractTikTokId(url: string): string {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : "";
}

function extractInstagramId(url: string): string {
  const match = url.match(/\/reel\/([^/?]+)/);
  return match ? match[1] : "";
}

function videoSrc(slide: VideoSlide): string {
  if (slide.type === "youtube" && slide.youtubeId)
    return `https://www.youtube.com/embed/${slide.youtubeId}?autoplay=1&rel=0&modestbranding=1`;
  if (slide.type === "tiktok" && slide.tiktokUrl)
    return `https://www.tiktok.com/embed/v2/${extractTikTokId(slide.tiktokUrl)}`;
  return "";
}

function useTikTokThumbnail(url?: string) {
  const [thumbnail, setThumbnail] = useState<string | null>(null);
  useEffect(() => {
    if (!url) return;
    fetch(`/api/tiktok-thumbnail?url=${encodeURIComponent(url)}`)
      .then((r) => r.json())
      .then((d) => { if (d.thumbnail_url) setThumbnail(d.thumbnail_url); })
      .catch(() => {});
  }, [url]);
  return thumbnail;
}

function InstagramPlaceholder() {
  return (
    <div style={{ width: "100%", height: "100%", background: "linear-gradient(135deg, #405DE6, #5851DB, #833AB4, #C13584, #E1306C, #FD1D1D, #F56040, #F77737, #FCAF45)", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <svg width="40" height="40" viewBox="0 0 24 24" fill="white" opacity="0.9">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
      </svg>
    </div>
  );
}

function VideoCard({ slide, isPlaying, onClick }: { slide: VideoSlide; isPlaying: boolean; onClick: () => void }) {
  const tiktokThumbnail = useTikTokThumbnail(slide.type === "tiktok" ? slide.tiktokUrl : undefined);

  const thumbnail = slide.type === "youtube" && slide.youtubeId
    ? `https://img.youtube.com/vi/${slide.youtubeId}/hqdefault.jpg`
    : slide.type === "tiktok" ? tiktokThumbnail
    : null;

  function handleClick() {
    if (slide.type === "tiktok" && slide.tiktokUrl) {
      window.open(slide.tiktokUrl, "_blank");
    } else if (slide.type === "instagram" && slide.instagramUrl) {
      window.open(slide.instagramUrl, "_blank");
    } else {
      onClick();
    }
  }

  return (
    <div
      onClick={handleClick}
      style={{
        width: "160px",
        aspectRatio: "9/16",
        borderRadius: "16px",
        overflow: "hidden",
        position: "relative",
        cursor: "pointer",
        backgroundColor: "#111",
        border: `1px solid ${isPlaying ? "rgba(200,169,104,0.5)" : "rgba(255,255,255,0.07)"}`,
        flexShrink: 0,
        transition: "border 0.3s",
      }}
    >
      {isPlaying ? (
        <div style={{ position: "absolute", inset: 0, overflow: "hidden" }}>
          <iframe
            src={videoSrc(slide)}
            style={{ width: "100%", height: "100%", border: "none", display: "block" }}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          />
        </div>
      ) : (
        <>
          {slide.type === "instagram" ? (
            <InstagramPlaceholder />
          ) : thumbnail ? (
            <img src={thumbnail} alt={slide.label ?? "Video"} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
          ) : (
            <div style={{ width: "100%", height: "100%", background: "#0f0f0f" }} />
          )}
          <div style={{ position: "absolute", inset: 0, background: "linear-gradient(to top, rgba(0,0,0,0.55) 0%, transparent 55%)" }} />
          <div style={{ position: "absolute", inset: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{
              width: "40px", height: "40px", borderRadius: "9999px",
              backgroundColor: "rgba(200,169,104,0.85)",
              display: "flex", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 20px rgba(200,169,104,0.4)",
            }}>
              <svg width="14" height="14" viewBox="0 0 24 24" fill="#000"><polygon points="5,3 19,12 5,21" /></svg>
            </div>
          </div>
          {slide.label && (
            <p style={{ position: "absolute", bottom: "10px", left: "10px", fontSize: "11px", fontWeight: 600, color: "#F3F5F5", textShadow: "0 1px 4px rgba(0,0,0,0.8)" }}>
              {slide.label}
            </p>
          )}
        </>
      )}
    </div>
  );
}

export default function PortraitVideoSlider({ slides }: { slides: VideoSlide[] }) {
  const [playingIdx, setPlayingIdx] = useState<number | null>(null);

  const looped = [...slides, ...slides];

  return (
    <Carousel
      opts={{ loop: true, align: "start" }}
      plugins={[AutoScroll({ playOnInit: true, speed: 1.2, stopOnInteraction: true, stopOnMouseEnter: true })]}
    >
      <CarouselContent className="ml-0" style={{ gap: "16px" }}>
        {looped.map((slide, i) => {
          const originalIdx = i % slides.length;
          const isPlaying = playingIdx === originalIdx;
          return (
            <CarouselItem key={i} className="pl-0 basis-auto">
              <VideoCard
                slide={slide}
                isPlaying={isPlaying}
                onClick={() => setPlayingIdx(isPlaying ? null : originalIdx)}
              />
            </CarouselItem>
          );
        })}
      </CarouselContent>
    </Carousel>
  );
}
