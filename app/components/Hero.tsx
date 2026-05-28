"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ArrowRight, ChevronDown } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STATS = [
  { number: "5,000+", label: "Patients Aligned" },
  { number: "15 Yrs", label: "Clinical Excellence" },
  { number: "98%",    label: "Satisfaction Rate" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const headingRef = useRef<HTMLDivElement>(null);
  const subRef    = useRef<HTMLDivElement>(null);
  const ctaRef    = useRef<HTMLDivElement>(null);
  const statsRef  = useRef<HTMLDivElement>(null);
  const graphicRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      // Intro reveal
      const tl = gsap.timeline({ delay: 0.15 });
      tl.from(headingRef.current, { y: 50, opacity: 0, duration: 1,   ease: "power3.out" })
        .from(subRef.current,    { y: 35, opacity: 0, duration: 0.85, ease: "power3.out" }, "-=0.55")
        .from(ctaRef.current,   { y: 25, opacity: 0, duration: 0.75, ease: "power3.out" }, "-=0.4")
        .from(statsRef.current, { y: 20, opacity: 0, duration: 0.65, ease: "power3.out" }, "-=0.4")
        .from(graphicRef.current, { scale: 0.82, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=1.1");

      // Scroll parallax
      ScrollTrigger.create({
        trigger: sectionRef.current,
        start: "top top",
        end: "bottom top",
        scrub: 1,
        onUpdate: (self) => {
          const p = self.progress;
          gsap.set(headingRef.current, { y: p * -70,  opacity: 1 - p * 1.6 });
          gsap.set(subRef.current,     { y: p * -45,  opacity: 1 - p * 2   });
          gsap.set(ctaRef.current,     { y: p * -25,  opacity: 1 - p * 2.5 });
          gsap.set(statsRef.current,   { y: p * -15,  opacity: 1 - p * 2.5 });
          gsap.set(graphicRef.current, { scale: 1 + p * 0.25, opacity: 1 - p * 0.6 });
        },
      });
    },
    { scope: sectionRef }
  );

  return (
    <section
      ref={sectionRef}
      style={{
        minHeight: "100vh",
        position: "relative",
        overflow: "hidden",
        background: "linear-gradient(180deg, #FFFFFF 0%, #F8FFFE 60%, #F0F9FF 100%)",
        display: "flex",
        alignItems: "center",
        paddingTop: "110px",
        paddingBottom: "60px",
      }}
    >
      {/* Blobs */}
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "8%",  left: "4%",  width: 560, height: 560, background: "radial-gradient(circle, #A7ECD9, #E2F9F5)" }} />
        <div className="blob blob-2" style={{ top: "15%", right: "6%", width: 440, height: 440, background: "radial-gradient(circle, #D3C7FF, #ECE7FF)" }} />
        <div className="blob blob-3" style={{ bottom: "8%", left: "28%", width: 380, height: 380, background: "radial-gradient(circle, #FFD1D7, #FFE9EC)" }} />
      </div>

      <div
        style={{
          position: "relative",
          zIndex: 10,
          maxWidth: "1180px",
          width: "100%",
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "60px",
          alignItems: "center",
        }}
        className="grid-cols-1 md:grid-cols-2"
      >
        {/* Left: text */}
        <div>
          <div ref={headingRef}>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                background: "rgba(8,145,178,0.08)",
                border: "1px solid rgba(8,145,178,0.2)",
                borderRadius: "50px",
                padding: "6px 16px",
                marginBottom: "22px",
                fontSize: "0.75rem",
                fontWeight: 600,
                color: "#0891B2",
                letterSpacing: "0.06em",
                textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#0891B2", display: "inline-block" }} />
              Premium Chiropractic Care
            </div>

            <h1
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(2.1rem, 4.5vw, 3.75rem)",
                fontWeight: 700,
                lineHeight: 1.13,
                color: "#0C2340",
                marginBottom: "0",
                letterSpacing: "-0.02em",
              }}
            >
              Where Alignment<br />
              Meets{" "}
              <span className="text-gradient-teal">Optimal<br />Performance</span>
            </h1>
          </div>

          <div ref={subRef} style={{ marginTop: "24px" }}>
            <p
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "1.1rem",
                lineHeight: 1.78,
                color: "#475569",
                maxWidth: "490px",
              }}
            >
              Experience precision chiropractic care designed to restore your
              body&apos;s natural balance, eliminate pain, and unlock peak
              performance — backed by advanced diagnostic imaging and decades of
              clinical mastery.
            </p>
          </div>

          <div
            ref={ctaRef}
            style={{
              marginTop: "36px",
              display: "flex",
              gap: "16px",
              alignItems: "center",
              flexWrap: "wrap",
            }}
          >
            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "15px 32px",
                borderRadius: "14px",
                fontSize: "1rem",
                boxShadow: "0 8px 26px rgba(8,145,178,0.35)",
              }}
            >
              Start Your Alignment Journey
              <ArrowRight size={18} />
            </a>
            <a
              href="#services"
              style={{
                fontFamily: "var(--font-body)",
                fontSize: "0.95rem",
                fontWeight: 600,
                color: "#0891B2",
                textDecoration: "none",
                cursor: "pointer",
                display: "flex",
                alignItems: "center",
                gap: "5px",
                transition: "gap 200ms",
              }}
            >
              Explore Services <ChevronDown size={16} />
            </a>
          </div>

          <div
            ref={statsRef}
            style={{
              display: "flex",
              gap: "32px",
              marginTop: "48px",
              paddingTop: "32px",
              borderTop: "1px solid rgba(0,0,0,0.06)",
              flexWrap: "wrap",
            }}
          >
            {STATS.map((s) => (
              <div key={s.label}>
                <div
                  style={{
                    fontFamily: "var(--font-heading)",
                    fontSize: "1.8rem",
                    fontWeight: 700,
                    color: "#0E7490",
                    lineHeight: 1.1,
                  }}
                >
                  {s.number}
                </div>
                <div
                  style={{
                    fontFamily: "var(--font-body)",
                    fontSize: "0.78rem",
                    fontWeight: 500,
                    color: "#94A3B8",
                    letterSpacing: "0.04em",
                    marginTop: "4px",
                  }}
                >
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: graphic */}
        <div
          ref={graphicRef}
          className="hidden md:flex"
          style={{ justifyContent: "center", alignItems: "center", position: "relative" }}
        >
          <SpinalGraphic />
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-indicator" style={{ cursor: "pointer" }} aria-hidden="true">
        <span
          style={{
            fontFamily: "var(--font-body)",
            fontSize: "0.7rem",
            fontWeight: 600,
            color: "#94A3B8",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
          }}
        >
          Scroll
        </span>
        <ChevronDown size={18} color="#94A3B8" />
      </div>
    </section>
  );
}

function SpinalGraphic() {
  return (
    <div style={{ position: "relative", width: 420, height: 440 }}>
      {/* Outer spin ring */}
      <div
        className="spin-ring"
        style={{
          position: "absolute",
          inset: -24,
          borderRadius: "50%",
          background:
            "conic-gradient(from 0deg, transparent 0%, rgba(8,145,178,0.12) 20%, transparent 40%, rgba(139,92,246,0.12) 60%, transparent 80%)",
        }}
      />

      {/* Main glass orb */}
      <div
        className="glass glow-card"
        style={{
          position: "absolute",
          inset: "30px",
          borderRadius: "50%",
        }}
      />

      {/* SVG Spine */}
      <svg
        viewBox="0 0 200 300"
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 155,
          height: 250,
        }}
      >
        <defs>
          <linearGradient id="spineGrad" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%"   stopColor="#0891B2" />
            <stop offset="50%"  stopColor="#14B8A6" />
            <stop offset="100%" stopColor="#8B5CF6" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Flow lines */}
        <path d="M 55,15 Q 30,150 55,285" stroke="url(#spineGrad)" strokeWidth={1.2} fill="none" strokeDasharray="5,5" opacity={0.4} />
        <path d="M 145,15 Q 170,150 145,285" stroke="url(#spineGrad)" strokeWidth={1.2} fill="none" strokeDasharray="5,5" opacity={0.4} />

        {/* Vertebrae */}
        {Array.from({ length: 10 }, (_, i) => {
          const y  = 18 + i * 26;
          const ox = Math.sin(i * 0.55) * 7;
          const w  = 52 - i * 1.2;
          return (
            <g key={i} filter="url(#glow)">
              <rect
                x={100 - w / 2 + ox}
                y={y}
                width={w}
                height={18}
                rx={6}
                fill={`rgba(8,145,178,${0.1 + i * 0.04})`}
                stroke="url(#spineGrad)"
                strokeWidth={1.5}
              />
              {i < 9 && (
                <ellipse
                  cx={100 + ox}
                  cy={y + 20}
                  rx={w / 2 - 5}
                  ry={3}
                  fill="rgba(20,184,166,0.25)"
                />
              )}
            </g>
          );
        })}
      </svg>

      {/* Floating stat: Alignment Score */}
      <div
        className="glass"
        style={{
          position: "absolute",
          top: "14%",
          right: "-18px",
          borderRadius: "14px",
          padding: "12px 16px",
          minWidth: 130,
        }}
      >
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Alignment Score
        </div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.45rem", fontWeight: 700, color: "#0891B2", marginTop: 2 }}>
          98.5%
        </div>
      </div>

      {/* Floating stat: Pain Relief */}
      <div
        className="glass"
        style={{
          position: "absolute",
          bottom: "18%",
          left: "-18px",
          borderRadius: "14px",
          padding: "12px 16px",
          minWidth: 122,
        }}
      >
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.68rem", fontWeight: 600, color: "#94A3B8", textTransform: "uppercase", letterSpacing: "0.08em" }}>
          Pain Relief
        </div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "1.45rem", fontWeight: 700, color: "#14B8A6", marginTop: 2 }}>
          97%
        </div>
      </div>
    </div>
  );
}
