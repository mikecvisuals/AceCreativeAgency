"use client";

import InstagramEmbed from "@/components/InstagramEmbed";

interface VideoEmbedProps {
  youtubeId?: string;
  instagramUrl?: string;
}

export default function VideoEmbed({ youtubeId, instagramUrl }: VideoEmbedProps) {
  if (youtubeId) {
    return (
      <div className="relative w-full aspect-video rounded-lg overflow-hidden bg-[#0f0f0f]">
        <iframe
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0&modestbranding=1`}
          title="YouTube video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="absolute inset-0 w-full h-full"
        />
      </div>
    );
  }

  if (instagramUrl) {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div style={{ width: "100%", maxWidth: "400px" }}>
          <InstagramEmbed url={instagramUrl} />
        </div>
      </div>
    );
  }

  return null;
}
