"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { featuredProjects } from "@/data/projects"

interface Card {
  id: number
  projectIndex: number
}

const positionStyles = [
  { scale: 1,    y: 12  },
  { scale: 0.95, y: -16 },
  { scale: 0.90, y: -44 },
]

const exitAnimation  = { y: 340, scale: 1,   zIndex: 10 }
const enterAnimation = { y: -16, scale: 0.90 }

function CardContent({ projectIndex }: { projectIndex: number }) {
  const project = featuredProjects[projectIndex % featuredProjects.length]
  return (
    <div style={{ display: "flex", flexDirection: "column", height: "100%", width: "100%", gap: "12px" }}>
      <div style={{ height: "200px", width: "100%", overflow: "hidden", borderRadius: "12px", border: "1px solid rgba(255,255,255,0.06)" }}>
        <img
          src={project.thumbnail}
          alt={project.title}
          style={{ height: "100%", width: "100%", objectFit: "cover", userSelect: "none", display: "block", transform: project.thumbnailZoom ? `scale(${project.thumbnailZoom})` : undefined }}
        />
      </div>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: "8px", padding: "0 8px 8px" }}>
        <div style={{ minWidth: 0, flex: 1 }}>
          <div style={{ fontWeight: 500, color: "#F3F5F5", fontSize: "15px", overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
            {project.title}
          </div>
          <div style={{ color: "#7A7A7A", fontSize: "13px" }}>{project.category}</div>
        </div>
        <Link
          href={`/portfolio/${project.id}`}
          style={{ display: "flex", alignItems: "center", gap: "2px", height: "36px", flexShrink: 0, borderRadius: "9999px", backgroundColor: "#C8A968", padding: "0 16px 0 14px", fontSize: "13px", fontWeight: 500, color: "#000", textDecoration: "none", userSelect: "none" }}
        >
          Bekijk
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="square">
            <path d="M9.5 18L15.5 12L9.5 6" />
          </svg>
        </Link>
      </div>
    </div>
  )
}

function AnimatedCard({ card, index, isAnimating }: { card: Card; index: number; isAnimating: boolean }) {
  const { scale, y } = positionStyles[index] ?? positionStyles[2]
  const zIndex = index === 0 && isAnimating ? 10 : 3 - index

  return (
    <motion.div
      key={card.id}
      initial={index === 2 ? enterAnimation : undefined}
      animate={{ y, scale }}
      exit={index === 0 ? exitAnimation : undefined}
      transition={{ type: "spring", duration: 1, bounce: 0 }}
      style={{
        zIndex,
        position: "absolute",
        left: "50%",
        x: "-50%",
        bottom: 0,
        width: "min(324px, calc(100vw - 48px))",
        height: "280px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: "16px 16px 0 0",
        border: "1px solid #1a1a1a",
        borderBottom: "none",
        backgroundColor: "#0a0a0a",
        padding: "8px",
        boxShadow: "0 -4px 24px rgba(0,0,0,0.4)",
        willChange: "transform",
      }}
    >
      <CardContent projectIndex={card.projectIndex} />
    </motion.div>
  )
}

const initialCards: Card[] = featuredProjects.slice(0, 3).map((_, i) => ({ id: i + 1, projectIndex: i }))

export default function AnimatedCardStack() {
  const [cards, setCards] = useState<Card[]>(initialCards)
  const [nextId, setNextId] = useState(initialCards.length + 1)

  const handleNext = () => {
    setCards(prev => {
      const nextProjectIndex = (prev[prev.length - 1].projectIndex + 1) % featuredProjects.length
      return [...prev.slice(1), { id: nextId, projectIndex: nextProjectIndex }]
    })
    setNextId(n => n + 1)
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", width: "100%" }}>
      <div style={{ position: "relative", height: "380px", width: "min(512px, 100%)", overflow: "hidden" }}>
        <AnimatePresence initial={false}>
          {cards.slice(0, 3).map((card, index) => (
            <AnimatedCard key={card.id} card={card} index={index} isAnimating={false} />
          ))}
        </AnimatePresence>
      </div>

      <div style={{ position: "relative", zIndex: 10, marginTop: "-1px", width: "100%", borderTop: "1px solid #1a1a1a", display: "flex", justifyContent: "center", padding: "16px 0" }}>
        <button
          type="button"
          onClick={handleNext}
          style={{ display: "flex", height: "36px", cursor: "pointer", alignItems: "center", justifyContent: "center", gap: "4px", overflow: "hidden", borderRadius: "8px", border: "1px solid #1a1a1a", backgroundColor: "#000", padding: "0 12px", fontWeight: 500, color: "#7A7A7A", fontSize: "14px", transition: "background-color 0.2s" }}
        >
          Volgend project
        </button>
      </div>
    </div>
  )
}
