"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    TikTok?: unknown;
  }
}

interface TikTokEmbedProps {
  url: string;
}

function extractTikTokId(url: string): string {
  const match = url.match(/\/video\/(\d+)/);
  return match ? match[1] : "";
}

export default function TikTokEmbed({ url }: TikTokEmbedProps) {
  const videoId = extractTikTokId(url);

  useEffect(() => {
    const existing = document.querySelector('script[src*="tiktok.com/embed.js"]');
    if (existing) {
      existing.remove();
    }
    const script = document.createElement("script");
    script.src = "https://www.tiktok.com/embed.js";
    script.async = true;
    document.body.appendChild(script);
  }, [url]);

  if (!videoId) return null;

  return (
    <blockquote
      className="tiktok-embed"
      cite={url}
      data-video-id={videoId}
      style={{ maxWidth: "100%", minWidth: "260px", margin: 0 }}
    >
      <section />
    </blockquote>
  );
}
