"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Target, Users, FlaskConical, HeartPulse } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const VALUES = [
  {
    icon: Target,
    title: "Gentle, Targeted Adjustments",
    desc: "Precise spinal corrections to improve alignment and reduce nerve irritation — mapped to your unique structural blueprint.",
  },
  {
    icon: Users,
    title: "Clear Communication",
    desc: "Detailed exams with straightforward explanations so you always understand your condition and the path forward.",
  },
  {
    icon: FlaskConical,
    title: "Integrated Therapies",
    desc: "Physical therapy, rehab exercises, and massage therapy coordinated under one roof for complete, cohesive care.",
  },
  {
    icon: HeartPulse,
    title: "In-House Medical Providers",
    desc: "On-site providers for pain management, medical weight loss, hormone optimization, and peptide therapy — no outside referrals needed.",
  },
];

export default function DarkSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const cardsRef   = useRef<HTMLDivElement>(null);
  const visualRef  = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headRef.current, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 80%" },
      });
      gsap.from(visualRef.current, {
        scale: 0.6, opacity: 0, duration: 1.4, ease: "power3.out",
        scrollTrigger: { trigger: visualRef.current, start: "top 85%" },
      });
      if (cardsRef.current) {
        gsap.from(cardsRef.current.children, {
          y: 45, opacity: 0, duration: 0.8, stagger: 0.16, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 78%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="about"
      ref={sectionRef}
      style={{
        position: "relative",
        overflow: "hidden",
        padding: "0 0 110px",
        background: "linear-gradient(180deg, #FFFFFF 0%, #0D1320 6%, #0A0E1A 20%, #0A0E1A 100%)",
      }}
    >
      {/* Neon blobs */}
      <div style={{ position: "absolute", inset: "10% 0 0", overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "10%",  left: "5%",  width: 500, height: 500, background: "radial-gradient(circle, rgba(0,212,184,0.18), transparent)", opacity: 0.7 }} />
        <div className="blob blob-2" style={{ top: "20%",  right: "3%", width: 420, height: 420, background: "radial-gradient(circle, rgba(139,92,246,0.2), transparent)",  opacity: 0.7 }} />
        <div className="blob blob-3" style={{ bottom: "8%", left: "40%", width: 360, height: 360, background: "radial-gradient(circle, rgba(8,145,178,0.15), transparent)",   opacity: 0.6 }} />
      </div>

      {STAR_POSITIONS.map((s, i) => (
        <div key={i} className="star" style={{ top: s.top, left: s.left, width: s.size, height: s.size, opacity: s.opacity, animationDelay: s.delay }} />
      ))}

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", padding: "100px 24px 0" }}>
        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 68 }}>
          <div
            style={{
              marginBottom: 18,
              fontSize: "0.75rem", fontWeight: 600,
              color: "#00D4B8", letterSpacing: "0.06em",
              textTransform: "uppercase", fontFamily: "var(--font-body)",
            }}
          >
            Chiropractor-Led · Fully Integrated
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
              fontWeight: 700, color: "#F1F5F9",
              lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 18,
            }}
          >
            A Chiropractor-Led Clinic With<br />
            a{" "}
            <span className="text-gradient-teal">Full Support Team</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)", fontSize: "1.05rem",
              lineHeight: 1.75, color: "#94A3B8",
              maxWidth: 600, margin: "0 auto",
            }}
          >
            Chiropractic care is at the heart of City Health Services. From there, we add
            physical therapy, rehabilitation, and medical services so you have one
            coordinated team focused on your long-term results — instead of separate
            providers working in silos.
          </p>
        </div>

        {/* Visual + cards */}
        <div
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 60, alignItems: "center" }}
          className="grid-cols-1 md:grid-cols-2"
        >
          <div ref={visualRef} className="hidden md:flex" style={{ justifyContent: "center" }}>
            <IntegratedCareVisual />
          </div>

          <div ref={cardsRef} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {VALUES.map((v) => {
              const Icon = v.icon;
              return (
                <div
                  key={v.title}
                  className="glass-dark neon-card"
                  style={{ borderRadius: 18, padding: "22px 24px", display: "flex", gap: 18, alignItems: "flex-start" }}
                >
                  <div
                    style={{
                      width: 44, height: 44, borderRadius: 12,
                      background: "rgba(0,212,184,0.12)",
                      border: "1px solid rgba(0,212,184,0.2)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    <Icon size={22} color="#00D4B8" strokeWidth={1.8} />
                  </div>
                  <div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1rem", fontWeight: 600, color: "#E2E8F0", marginBottom: 6 }}>
                      {v.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.65, color: "#64748B" }}>
                      {v.desc}
                    </p>
                  </div>
                </div>
              );
            })}

            <a
              href="#team"
              className="btn-primary"
              style={{
                marginTop: 8, padding: "14px 28px", borderRadius: 14,
                fontSize: "0.9rem", justifyContent: "center",
                boxShadow: "0 8px 26px rgba(8,145,178,0.35)",
              }}
            >
              Meet Our Chiropractic &amp; Medical Team →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function IntegratedCareVisual() {
  const nodes = [
    { label: "Chiropractic",        angle: -90,  color: "#00D4B8", r: 115 },
    { label: "Physical Therapy",    angle: -18,  color: "#8B5CF6", r: 115 },
    { label: "Pain Management",     angle:  54,  color: "#F472B6", r: 115 },
    { label: "Weight Loss",         angle: 126,  color: "#60A5FA", r: 115 },
    { label: "Hormones & Peptides", angle: 198,  color: "#A78BFA", r: 115 },
  ];
  return (
    <div style={{ position: "relative", width: 320, height: 340 }}>
      <div
        className="pulse-ring"
        style={{
          position: "absolute", inset: -12, borderRadius: "50%",
          background: "radial-gradient(circle, rgba(0,212,184,0.08) 0%, transparent 70%)",
        }}
      />
      {/* Center hub */}
      <div
        className="glass-dark"
        style={{
          position: "absolute", top: "50%", left: "50%",
          transform: "translate(-50%, -50%)",
          width: 110, height: 110, borderRadius: "50%",
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
          boxShadow: "0 0 40px rgba(0,212,184,0.25)",
          zIndex: 2,
        }}
      >
        <div style={{ fontFamily: "var(--font-body)", fontSize: "0.62rem", fontWeight: 600, color: "#64748B", textTransform: "uppercase", letterSpacing: "0.08em" }}>City Health</div>
        <div style={{ fontFamily: "var(--font-heading)", fontSize: "0.88rem", fontWeight: 700, color: "#00D4B8", marginTop: 2 }}>Services</div>
      </div>
      {/* Node pills */}
      {nodes.map((n) => {
        const rad = (n.angle * Math.PI) / 180;
        const cx  = 160 + n.r * Math.cos(rad);
        const cy  = 170 + n.r * Math.sin(rad);
        return (
          <div
            key={n.label}
            className="glass-dark"
            style={{
              position: "absolute", left: cx, top: cy,
              transform: "translate(-50%, -50%)",
              borderRadius: 50, padding: "7px 13px",
              fontSize: "0.68rem", fontWeight: 700,
              color: n.color, whiteSpace: "nowrap",
              fontFamily: "var(--font-body)",
              border: `1px solid ${n.color}30`,
              zIndex: 3,
            }}
          >
            {n.label}
          </div>
        );
      })}
      {/* Connecting lines */}
      <svg style={{ position: "absolute", inset: 0, zIndex: 1 }} viewBox="0 0 320 340">
        {nodes.map((n) => {
          const rad = (n.angle * Math.PI) / 180;
          const x2  = 160 + n.r * Math.cos(rad);
          const y2  = 170 + n.r * Math.sin(rad);
          return (
            <line key={n.label} x1={160} y1={170} x2={x2} y2={y2}
              stroke={n.color} strokeWidth={1} strokeOpacity={0.25} strokeDasharray="4,4" />
          );
        })}
      </svg>
    </div>
  );
}

const STAR_POSITIONS = [
  { top: "12%", left: "8%",  size: 3, opacity: 0.7, delay: "0s"   },
  { top: "22%", left: "18%", size: 2, opacity: 0.5, delay: "0.8s" },
  { top: "35%", left: "72%", size: 3, opacity: 0.6, delay: "1.5s" },
  { top: "45%", left: "88%", size: 2, opacity: 0.4, delay: "0.3s" },
  { top: "18%", left: "55%", size: 2, opacity: 0.6, delay: "2.1s" },
  { top: "60%", left: "12%", size: 2, opacity: 0.5, delay: "1.2s" },
  { top: "70%", left: "80%", size: 3, opacity: 0.7, delay: "0.6s" },
  { top: "82%", left: "45%", size: 2, opacity: 0.4, delay: "1.8s" },
];
