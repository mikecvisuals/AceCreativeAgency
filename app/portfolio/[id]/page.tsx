import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/data/projects";
import VideoEmbed from "@/components/VideoEmbed";
import ScrollReveal from "@/components/ui/scroll-reveal";
import ImageAutoSlider from "@/components/ui/image-auto-slider";

interface Props {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return projects.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);
  if (!project) return {};

  const description = project.description.split("\n\n")[0].slice(0, 160);
  const url = `https://acecreativeagency.nl/portfolio/${project.id}`;

  return {
    title: project.title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title: `${project.title} — Ace Creative Agency`,
      description,
      url,
      images: project.thumbnail
        ? [{ url: project.thumbnail, alt: project.title }]
        : [],
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { id } = await params;
  const project = projects.find((p) => p.id === id);

  if (!project) notFound();

  const creativeWorkSchema = {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    name: project.title,
    description: project.description.split("\n\n")[0],
    creator: { "@type": "Person", name: "Mike Bogers" },
    url: `https://acecreativeagency.nl/portfolio/${project.id}`,
    ...(project.thumbnail ? { image: `https://acecreativeagency.nl${project.thumbnail}` } : {}),
    genre: project.category,
  };

  return (
    <div style={{ paddingTop: "140px", paddingBottom: "96px", paddingLeft: "24px", paddingRight: "24px", display: "flex", flexDirection: "column", alignItems: "center" }}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(creativeWorkSchema) }}
      />
      <div style={{ width: "100%", maxWidth: "800px" }}>

        {/* Back link */}
        <ScrollReveal>
          <Link
            href="/portfolio"
            style={{ display: "inline-flex", alignItems: "center", gap: "8px", fontSize: "13px", color: "#555", textDecoration: "none", marginBottom: "40px" }}
          >
            ← Terug naar portfolio
          </Link>
        </ScrollReveal>

        {/* Header */}
        <ScrollReveal delay={0.1}>
          <div style={{ marginBottom: "32px" }}>
            <div style={{ marginBottom: "16px", display: "flex", alignItems: "center", gap: "8px", flexWrap: "wrap" }}>
              <span style={{
                fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600,
                padding: "4px 10px", borderRadius: "9999px",
                backgroundColor: "rgba(200,169,104,0.1)", color: "#C8A968", border: "1px solid rgba(200,169,104,0.2)",
              }}>
                {project.type === "video" ? "▶ Video" : "◻ Foto"}
              </span>
              {project.type === "video" && project.tags?.includes("photo") && (
                <span style={{
                  fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600,
                  padding: "4px 10px", borderRadius: "9999px",
                  backgroundColor: "rgba(200,169,104,0.1)", color: "#C8A968", border: "1px solid rgba(200,169,104,0.2)",
                }}>
                  ◻ Foto
                </span>
              )}
              {project.tags?.includes("concept") && (
                <span style={{
                  fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600,
                  padding: "4px 10px", borderRadius: "9999px",
                  backgroundColor: "rgba(200,169,104,0.1)", color: "#C8A968", border: "1px solid rgba(200,169,104,0.2)",
                }}>
                  ✦ Concept
                </span>
              )}
              {project.tags?.includes("productie") && (
                <span style={{
                  fontSize: "10px", textTransform: "uppercase", letterSpacing: "0.1em", fontWeight: 600,
                  padding: "4px 10px", borderRadius: "9999px",
                  backgroundColor: "rgba(200,169,104,0.1)", color: "#C8A968", border: "1px solid rgba(200,169,104,0.2)",
                }}>
                  ◎ Productie
                </span>
              )}
            </div>
            <h1 style={{ fontSize: "clamp(1.75rem, 5vw, 2.5rem)", fontWeight: 600, color: "#F3F5F5", marginBottom: "16px", lineHeight: 1.1 }}>
              {project.title}
            </h1>
            <div style={{ color: "#7A7A7A", lineHeight: 1.7, fontSize: "15px", maxWidth: "600px", display: "flex", flexDirection: "column", gap: "16px" }}>
              {project.description.split("\n\n").map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Video */}
        {project.type === "video" && !project.instagramPostUrls?.length && (
          <ScrollReveal delay={0.2}>
            <div style={{ marginBottom: "40px" }}>
              <VideoEmbed youtubeId={project.youtubeId} instagramUrl={project.instagramUrl} />
            </div>
          </ScrollReveal>
        )}

        {/* Photos — slider */}
        {project.images && project.imageSlider && (
          <ScrollReveal delay={0.2}>
            <div style={{ marginBottom: "40px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "#C8A968", flexShrink: 0 }} />
                <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#C8A968", fontWeight: 600 }}>Foto's</p>
              </div>
              <ImageAutoSlider images={project.images} />
            </div>
          </ScrollReveal>
        )}

        {/* Photos — stacked */}
        {project.images && !project.imageSlider && (
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {project.type === "video" && (
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "8px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "#C8A968", flexShrink: 0 }} />
                <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#C8A968", fontWeight: 600 }}>Foto's</p>
              </div>
            )}
            {project.images.map((img, i) => {
              const src = typeof img === "string" ? img : img.src
              return (
                <ScrollReveal key={i} delay={i * 0.1}>
                  <img
                    src={src}
                    alt={`${project.title} — ${i + 1}`}
                    style={{ width: "100%", borderRadius: "12px", objectFit: "cover" }}
                  />
                </ScrollReveal>
              )
            })}
          </div>
        )}

        {/* Regular YouTube videos — landscape 16:9 */}
        {project.youtubeIds?.length && (
          <ScrollReveal delay={0.2}>
            <div style={{ marginTop: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "#C8A968", flexShrink: 0 }} />
                <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#C8A968", fontWeight: 600 }}>Video's</p>
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
                {project.youtubeIds.map((id) => (
                  <div key={id} style={{ borderRadius: "12px", overflow: "hidden", background: "#0f0f0f", border: "1px solid #1a1a1a", position: "relative", paddingBottom: "56.25%", height: 0 }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      style={{ position: "absolute", top: 0, left: 0, width: "100%", height: "100%", border: "none", display: "block" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Content grid — Instagram reels/posts + YouTube Shorts */}
        {(project.instagramPostUrls?.length || project.youtubeShortIds?.length) && (
          <ScrollReveal delay={0.2}>
            <div style={{ marginTop: "48px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "12px", marginBottom: "24px" }}>
                <span style={{ width: "6px", height: "6px", borderRadius: "9999px", backgroundColor: "#C8A968", flexShrink: 0 }} />
                <p style={{ fontSize: "11px", textTransform: "uppercase", letterSpacing: "0.3em", color: "#C8A968", fontWeight: 600 }}>Content</p>
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: "16px" }}>

                {project.instagramUrl && (() => {
                  const reelMatch = project.instagramUrl!.match(/reel\/([A-Za-z0-9_-]+)/);
                  const reelId = reelMatch?.[1];
                  if (!reelId) return null;
                  return (
                    <div key="reel" style={{ borderRadius: "12px", overflow: "hidden", background: "#0f0f0f", border: "1px solid #1a1a1a" }}>
                      <iframe
                        src={`https://www.instagram.com/reel/${reelId}/embed/`}
                        width="100%"
                        height="480"
                        style={{ border: "none", display: "block", width: "100%" }}
                        allowFullScreen
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
                      />
                    </div>
                  );
                })()}

                {project.instagramPostUrls?.map((url) => {
                  const reelMatch = url.match(/\/reel\/([A-Za-z0-9_-]+)/);
                  const postMatch = url.match(/\/p\/([A-Za-z0-9_-]+)/);
                  const embedId = reelMatch?.[1] ?? postMatch?.[1];
                  const embedType = reelMatch ? "reel" : "p";
                  if (!embedId) return null;
                  return (
                    <div key={embedId} style={{ borderRadius: "12px", overflow: "hidden", background: "#0f0f0f", border: "1px solid #1a1a1a" }}>
                      <iframe
                        src={`https://www.instagram.com/${embedType}/${embedId}/embed/`}
                        width="100%"
                        height="480"
                        style={{ border: "none", display: "block", width: "100%" }}
                        allowFullScreen
                        scrolling="no"
                        allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"
                        sandbox="allow-scripts allow-same-origin allow-popups allow-forms allow-presentation"
                      />
                    </div>
                  );
                })}

                {project.youtubeShortIds?.map((id) => (
                  <div key={id} style={{ borderRadius: "12px", overflow: "hidden", background: "#0f0f0f", border: "1px solid #1a1a1a" }}>
                    <iframe
                      src={`https://www.youtube.com/embed/${id}`}
                      width="100%"
                      height="480"
                      style={{ border: "none", display: "block", width: "100%" }}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                    />
                  </div>
                ))}
              </div>
            </div>
          </ScrollReveal>
        )}

        {/* Divider + CTA */}
        <ScrollReveal delay={0.3}>
          <div style={{ marginTop: "80px", paddingTop: "40px", borderTop: "1px solid #1a1a1a", textAlign: "center" }}>
            <p style={{ color: "#7A7A7A", marginBottom: "20px", fontSize: "14px" }}>
              Interesse in een soortgelijk project?
            </p>
            <Link
              href="/contact"
              style={{ padding: "14px 32px", fontSize: "15px", fontWeight: 500, backgroundColor: "#C8A968", color: "#000000", borderRadius: "9999px", display: "inline-block", textDecoration: "none" }}
            >
              Neem contact op
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </div>
  );
}
