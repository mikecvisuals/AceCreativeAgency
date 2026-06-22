"use client";

import React from "react";
import { motion } from "framer-motion";

type Testimonial = {
  text: string;
  name: string;
  role: string;
  image?: string;
  rating?: number;
};

export const TestimonialsColumn = ({
  className,
  testimonials,
  duration = 10,
}: {
  className?: string;
  testimonials: Testimonial[];
  duration?: number;
}) => {
  return (
    <div className={className} style={{ overflow: "hidden" }}>
      <motion.div
        animate={{ translateY: "-50%" }}
        transition={{ duration, repeat: Infinity, ease: "linear", repeatType: "loop" }}
        style={{ display: "flex", flexDirection: "column", gap: "16px", paddingBottom: "16px" }}
      >
        {[...new Array(2).fill(0).map((_, index) => (
          <React.Fragment key={index}>
            {testimonials.map(({ text, image, name, role, rating }, i) => (
              <div
                key={i}
                style={{
                  padding: "24px",
                  borderRadius: "16px",
                  border: "1px solid rgba(255,255,255,0.08)",
                  backgroundColor: "#0a0a0a",
                  maxWidth: "300px",
                  width: "100%",
                }}
              >
                {/* Stars */}
                {rating && (
                  <div style={{ display: "flex", gap: "2px", marginBottom: "12px" }}>
                    {Array.from({ length: rating }).map((_, s) => (
                      <svg key={s} width="14" height="14" viewBox="0 0 24 24" fill="#C8A968">
                        <polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26" />
                      </svg>
                    ))}
                  </div>
                )}
                <p style={{ fontSize: "14px", color: "#A0A0A0", lineHeight: 1.6, marginBottom: "16px" }}>
                  &ldquo;{text}&rdquo;
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  {image ? (
                    <img
                      src={image}
                      alt={name}
                      width={36}
                      height={36}
                      style={{ width: "36px", height: "36px", borderRadius: "9999px", objectFit: "cover" }}
                    />
                  ) : (
                    <div style={{
                      width: "36px", height: "36px", borderRadius: "9999px",
                      backgroundColor: "#1a1a1a",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      fontSize: "14px", fontWeight: 600, color: "#C8A968",
                      flexShrink: 0,
                    }}>
                      {name.charAt(0)}
                    </div>
                  )}
                  <div>
                    <p style={{ fontSize: "13px", fontWeight: 600, color: "#F3F5F5", lineHeight: 1.3 }}>{name}</p>
                    <p style={{ fontSize: "12px", color: "#555", lineHeight: 1.3 }}>{role}</p>
                  </div>
                </div>
              </div>
            ))}
          </React.Fragment>
        ))]}
      </motion.div>
    </div>
  );
};
