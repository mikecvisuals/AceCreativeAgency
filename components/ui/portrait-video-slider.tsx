"use client";

import AutoScroll from "embla-carousel-auto-scroll";
import { useState, useEffect } from "react";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";

type VideoSlide = {
  type: "tiktok" | "youtube";
  tiktokUrl?: string;
  youtubeId?: string;
  label?: string;
};

function extractTikTokId(url: string): string {
  const match = url.match(/\/video\/(\d+)/);
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

function VideoCard({ slide, isPlaying, onClick }: { slide: VideoSlide; isPlaying: boolean; onClick: () => void }) {
  const tiktokThumbnail = useTikTokThumbnail(slide.type === "tiktok" ? slide.tiktokUrl : undefined);

  const thumbnail = slide.type === "youtube" && slide.youtubeId
    ? `https://img.youtube.com/vi/${slide.youtubeId}/hqdefault.jpg`
    : tiktokThumbnail;

  function handleClick() {
    if (slide.type === "tiktok" && slide.tiktokUrl) {
      window.open(slide.tiktokUrl, "_blank");
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
          {thumbnail ? (
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
