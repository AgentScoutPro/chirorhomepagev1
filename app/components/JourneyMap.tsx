"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ClipboardList, ScanLine, LayoutList, Stethoscope, TrendingUp, Sparkles } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  {
    step: "01",
    icon: ClipboardList,
    title: "Free Consultation",
    desc: "A 30-minute deep dive into your history, goals, and pain patterns. No pressure — just discovery.",
    color: "#0891B2",
    bg: "linear-gradient(135deg, #E2F9F5, #B2F5EA)",
  },
  {
    step: "02",
    icon: ScanLine,
    title: "Digital Spinal Scans",
    desc: "State-of-the-art neurological scanning and digital posture analysis creates your unique spinal blueprint.",
    color: "#8B5CF6",
    bg: "linear-gradient(135deg, #ECE7FF, #DDD6FE)",
  },
  {
    step: "03",
    icon: LayoutList,
    title: "Customized Care Plan",
    desc: "Your dedicated chiropractor designs a precise, time-framed care plan with clear milestones.",
    color: "#0891B2",
    bg: "linear-gradient(135deg, #E2F9F5, #B2F5EA)",
  },
  {
    step: "04",
    icon: Stethoscope,
    title: "Active Treatment",
    desc: "Precision adjustments, decompression, and neurological protocols executed with clinical mastery.",
    color: "#F43F5E",
    bg: "linear-gradient(135deg, #FFE9EC, #FECDD3)",
  },
  {
    step: "05",
    icon: TrendingUp,
    title: "Progress Reviews",
    desc: "Regular outcome assessments using objective measurements — no guessing, only data-driven progress.",
    color: "#EA580C",
    bg: "linear-gradient(135deg, #FFF7ED, #FED7AA)",
  },
  {
    step: "06",
    icon: Sparkles,
    title: "Optimal Health",
    desc: "Transition into a sustainable wellness lifestyle with maintenance plans that protect your results.",
    color: "#14B8A6",
    bg: "linear-gradient(135deg, #CCFBF1, #99F6E4)",
  },
];

export default function JourneyMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const stepsRef   = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });

      if (stepsRef.current) {
        gsap.from(stepsRef.current.children, {
          y: 50, opacity: 0, scale: 0.95,
          duration: 0.7, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: stepsRef.current, start: "top 78%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="contact"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FFFE 100%)",
        padding: "100px 0 120px",
        overflow: "hidden",
      }}
    >
      {/* Blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-2" style={{ top: "5%",  left: "45%",  width: 380, height: 380, background: "radial-gradient(circle, #ECE7FF, transparent)", opacity: 0.35 }} />
        <div className="blob blob-3" style={{ bottom: "5%", right: "10%", width: 320, height: 320, background: "radial-gradient(circle, #E2F9F5, transparent)", opacity: 0.35 }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 72 }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(8,145,178,0.07)", border: "1px solid rgba(8,145,178,0.18)",
              borderRadius: 50, padding: "6px 16px", marginBottom: 18,
              fontSize: "0.75rem", fontWeight: 600, color: "#0891B2",
              letterSpacing: "0.06em", textTransform: "uppercase",
              fontFamily: "var(--font-body)",
            }}
          >
            Your Patient Journey
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              fontWeight: 700, color: "#0C2340",
              lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14,
            }}
          >
            Six Steps to{" "}
            <span className="text-gradient-teal">Complete Alignment</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)", fontSize: "1.05rem",
              lineHeight: 1.75, color: "#64748B", maxWidth: 500, margin: "0 auto",
            }}
          >
            Every patient begins at step one. Every patient ends with a body that
            performs at its full potential.
          </p>
        </div>

        {/* Steps grid */}
        <div
          ref={stepsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: 24,
          }}
        >
          {STEPS.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.step}
                className="glass pillar-card"
                style={{ borderRadius: 22, padding: "28px 26px", position: "relative", overflow: "hidden" }}
              >
                {/* Step number watermark */}
                <div
                  style={{
                    position: "absolute", top: -6, right: 16,
                    fontFamily: "var(--font-heading)", fontSize: "5rem",
                    fontWeight: 800, color: "rgba(0,0,0,0.035)",
                    lineHeight: 1, userSelect: "none", pointerEvents: "none",
                  }}
                >
                  {s.step}
                </div>

                {/* Bg tint */}
                <div style={{ position: "absolute", inset: 0, borderRadius: 22, background: s.bg, opacity: 0.25, zIndex: 0 }} />

                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: 48, height: 48, borderRadius: 14,
                      background: "rgba(255,255,255,0.7)",
                      border: "1px solid rgba(255,255,255,0.9)",
                      boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      marginBottom: 18,
                    }}
                  >
                    <Icon size={24} color={s.color} strokeWidth={1.8} />
                  </div>

                  <div
                    style={{
                      fontFamily: "var(--font-body)", fontSize: "0.72rem",
                      fontWeight: 700, color: s.color, letterSpacing: "0.1em",
                      textTransform: "uppercase", marginBottom: 8,
                    }}
                  >
                    Step {s.step}
                  </div>

                  <h3
                    style={{
                      fontFamily: "var(--font-heading)", fontSize: "1.1rem",
                      fontWeight: 600, color: "#0C2340", marginBottom: 10, lineHeight: 1.3,
                    }}
                  >
                    {s.title}
                  </h3>
                  <p
                    style={{
                      fontFamily: "var(--font-body)", fontSize: "0.875rem",
                      lineHeight: 1.68, color: "#475569",
                    }}
                  >
                    {s.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA strip */}
        <div
          className="glass"
          style={{
            marginTop: 64, borderRadius: 24, padding: "42px 48px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24,
            background: "linear-gradient(135deg, rgba(8,145,178,0.06), rgba(139,92,246,0.05))",
          }}
        >
          <div>
            <h3
              style={{
                fontFamily: "var(--font-heading)", fontSize: "1.55rem",
                fontWeight: 700, color: "#0C2340", marginBottom: 8,
              }}
            >
              Ready to Begin Your Journey?
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1rem", color: "#64748B", maxWidth: 400 }}>
              Your first consultation is free. Our team is ready to build your
              custom alignment plan today.
            </p>
          </div>
          <a
            href="mailto:appointments@chiror.com"
            className="btn-primary"
            style={{
              padding: "15px 34px", borderRadius: 14,
              fontSize: "1rem", whiteSpace: "nowrap",
              boxShadow: "0 8px 26px rgba(8,145,178,0.35)",
            }}
          >
            Book Free Consultation →
          </a>
        </div>
      </div>
    </section>
  );
}
