"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    instgrm?: { Embeds: { process: () => void } };
  }
}

interface InstagramEmbedProps {
  url: string;
}

export default function InstagramEmbed({ url }: InstagramEmbedProps) {
  useEffect(() => {
    if (window.instgrm) {
      window.instgrm.Embeds.process();
    } else {
      const existing = document.querySelector('script[src*="instagram.com/embed.js"]');
      if (!existing) {
        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
      }
    }
  }, [url]);

  const cleanUrl = url.split("?")[0].replace(/\/?$/, "/");

  return (
    <blockquote
      className="instagram-media"
      data-instgrm-permalink={cleanUrl}
      data-instgrm-version="14"
      style={{
        background: "#FFF",
        border: 0,
        borderRadius: "12px",
        margin: "0",
        maxWidth: "100%",
        minWidth: "260px",
        padding: 0,
        width: "100%",
      }}
    />
  );
}
