"use client";

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
    // Extract reel ID from URL
    const reelMatch = instagramUrl.match(/reel\/([A-Za-z0-9_-]+)/);
    const reelId = reelMatch?.[1];

    if (reelId) {
      return (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <div style={{ width: "320px", borderRadius: "12px", overflow: "hidden", background: "#0f0f0f" }}>
            <iframe
              src={`https://www.instagram.com/reel/${reelId}/embed/`}
              width="320"
              height="568"
              style={{ border: "none", display: "block" }}
              allowFullScreen
              scrolling="no"
              allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
              sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
            />
          </div>
        </div>
      );
    }

    return (
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: "16px", padding: "32px 0" }}>
        <a
          href={instagramUrl}
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "inline-flex", alignItems: "center", gap: "8px", padding: "12px 24px", border: "1px solid #333", borderRadius: "9999px", fontSize: "14px", color: "#F3F5F5", textDecoration: "none" }}
        >
          Bekijk op Instagram
        </a>
      </div>
    );
  }

  return null;
}
