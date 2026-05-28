"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Target, ArrowUpDown, Brain, Activity } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PILLARS = [
  {
    icon: Target,
    title: "Precision Adjustments",
    desc: "Targeted spinal corrections using advanced biomechanical analysis. Every adjustment is mapped to your unique structural blueprint for lasting results.",
    gradient: "linear-gradient(135deg, #E2F9F5, #A7ECD9)",
    iconColor: "#0891B2",
    accent: "rgba(8,145,178,0.12)",
  },
  {
    icon: ArrowUpDown,
    title: "Decompression Therapy",
    desc: "FDA-cleared non-surgical spinal decompression to relieve disc herniation, sciatica, and degenerative conditions with measurable outcomes.",
    gradient: "linear-gradient(135deg, #ECE7FF, #D3C7FF)",
    iconColor: "#8B5CF6",
    accent: "rgba(139,92,246,0.12)",
  },
  {
    icon: Brain,
    title: "Neurological Care",
    desc: "Restore optimal nerve communication between brain and body. Our neurological protocols address the root cause of pain — not just the symptom.",
    gradient: "linear-gradient(135deg, #FFE9EC, #FFD1D7)",
    iconColor: "#F43F5E",
    accent: "rgba(244,63,94,0.12)",
  },
  {
    icon: Activity,
    title: "Active Recovery",
    desc: "Integrated rehabilitation combining chiropractic care, functional movement training, and soft tissue therapy to accelerate your return to peak performance.",
    gradient: "linear-gradient(135deg, #FFF7ED, #FED7AA)",
    iconColor: "#EA580C",
    accent: "rgba(234,88,12,0.12)",
  },
];

export default function Pillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });

      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 50, opacity: 0, duration: 0.75, stagger: 0.14, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 80%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="services"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "#FFFFFF",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      {/* Subtle background blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "-10%", right: "-5%", width: 400, height: 400, background: "radial-gradient(circle, #ECE7FF, transparent)", opacity: 0.3 }} />
        <div className="blob blob-2" style={{ bottom: "-10%", left: "-5%", width: 350, height: 350, background: "radial-gradient(circle, #E2F9F5, transparent)", opacity: 0.3 }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 64 }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(8,145,178,0.07)",
              border: "1px solid rgba(8,145,178,0.18)",
              borderRadius: 50, padding: "6px 16px", marginBottom: 18,
              fontSize: "0.75rem", fontWeight: 600, color: "#0891B2",
              letterSpacing: "0.06em", textTransform: "uppercase",
              fontFamily: "var(--font-body)",
            }}
          >
            Core Pillars of Care
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              fontWeight: 700,
              color: "#0C2340",
              lineHeight: 1.2,
              letterSpacing: "-0.02em",
              marginBottom: 16,
            }}
          >
            Every Discipline,<br />
            <span className="text-gradient-teal">One Unified Goal</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)",
              fontSize: "1.05rem",
              lineHeight: 1.75,
              color: "#64748B",
              maxWidth: 520,
              margin: "0 auto",
            }}
          >
            Our clinic integrates four core therapeutic disciplines into one
            seamless care journey, designed around you.
          </p>
        </div>

        {/* Cards Grid */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
            gap: 24,
          }}
        >
          {PILLARS.map((p) => {
            const Icon = p.icon;
            return (
              <div
                key={p.title}
                className="glass pillar-card"
                style={{ borderRadius: 22, padding: "32px 28px", position: "relative", overflow: "hidden" }}
              >
                {/* Mesh gradient bg */}
                <div
                  style={{
                    position: "absolute", inset: 0, borderRadius: 22,
                    background: p.gradient, opacity: 0.35, zIndex: 0,
                    transition: "opacity 280ms ease",
                  }}
                />

                <div style={{ position: "relative", zIndex: 1 }}>
                  {/* Icon */}
                  <div
                    style={{
                      width: 52, height: 52, borderRadius: 14,
                      background: p.accent, display: "flex",
                      alignItems: "center", justifyContent: "center",
                      marginBottom: 20,
                    }}
                  >
                    <Icon size={26} color={p.iconColor} strokeWidth={1.8} />
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-heading)",
                      fontSize: "1.2rem",
                      fontWeight: 600,
                      color: "#0C2340",
                      marginBottom: 12,
                      lineHeight: 1.3,
                    }}
                  >
                    {p.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)",
                      fontSize: "0.9rem",
                      lineHeight: 1.7,
                      color: "#475569",
                    }}
                  >
                    {p.desc}
                  </p>

                  {/* Learn more link */}
                  <div
                    style={{
                      marginTop: 20, display: "flex", alignItems: "center", gap: 6,
                      fontFamily: "var(--font-body)", fontSize: "0.85rem",
                      fontWeight: 600, color: p.iconColor, cursor: "pointer",
                    }}
                  >
                    Learn more →
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
