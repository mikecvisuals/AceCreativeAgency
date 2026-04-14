'use client';

import Link from 'next/link';
import { projects } from '@/data/projects';

const categoryIcons: Record<string, string> = {
  Video: '◉',
  Foto: '◎',
  'Video & Foto': '◈',
};

export default function ProjectsCarousel() {
  return (
    <div
      className="no-scrollbar"
      style={{
        display: 'flex',
        gap: '8px',
        overflowX: 'auto',
        // "safe center": centered when all cards fit, starts at first card when overflowing (mobile)
        justifyContent: 'safe center',
        padding: '4px 24px 12px',
        WebkitOverflowScrolling: 'touch' as React.CSSProperties['WebkitOverflowScrolling'],
      }}
    >
      {projects.map((project) => (
        <Link
          key={project.id}
          href={`/portfolio/${project.id}`}
          style={{
            flexShrink: 0,
            position: 'relative',
            width: 'clamp(140px, 18vw, 200px)',
            aspectRatio: '3 / 4',
            borderRadius: '12px',
            overflow: 'hidden',
            display: 'block',
            textDecoration: 'none',
            transition: 'transform 0.2s, box-shadow 0.2s',
          }}
          onMouseEnter={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1.03)';
            (e.currentTarget as HTMLElement).style.boxShadow = '0 8px 24px rgba(0,0,0,0.5)';
          }}
          onMouseLeave={(e) => {
            (e.currentTarget as HTMLElement).style.transform = 'scale(1)';
            (e.currentTarget as HTMLElement).style.boxShadow = 'none';
          }}
        >
          {/* Thumbnail */}
          <img
            alt={project.title}
            src={project.thumbnail}
            style={{
              position: 'absolute',
              inset: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              objectPosition: project.thumbnailPosition ?? 'center',
              transform: project.thumbnailZoom ? `scale(${project.thumbnailZoom})` : undefined,
            }}
          />

          {/* Top gradient — category tag */}
          <div style={{
            position: 'absolute', top: 0, left: 0, right: 0,
            background: 'linear-gradient(to bottom, rgba(0,0,0,0.55) 0%, transparent 100%)',
            padding: '10px 10px 24px',
          }}>
            <span style={{
              color: '#C8A968',
              fontSize: '9px',
              fontWeight: 600,
              letterSpacing: '0.12em',
              textTransform: 'uppercase',
              display: 'block',
            }}>
              {categoryIcons[project.category] ?? '◈'} {project.category}
            </span>
          </div>

          {/* Bottom gradient — project name */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, right: 0,
            background: 'linear-gradient(to top, rgba(0,0,0,0.85) 0%, transparent 100%)',
            padding: '28px 10px 12px',
          }}>
            <span style={{
              color: '#F3F5F5',
              fontSize: '12px',
              fontWeight: 500,
              lineHeight: 1.3,
              display: 'block',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
            }}>
              {project.title}
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}
