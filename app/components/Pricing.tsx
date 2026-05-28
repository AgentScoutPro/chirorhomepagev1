"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Stethoscope, Zap, Activity, PersonStanding, Scale, FlaskConical } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const SERVICES = [
  {
    icon: Stethoscope,
    title: "Chiropractic Care",
    desc: "Precise spinal and joint adjustments to relieve pain, reduce nerve irritation, and support better movement.",
    color: "#0891B2",
    bg: "linear-gradient(135deg, #E2F9F5, #B2F5EA)",
    accent: "rgba(8,145,178,0.12)",
    link: "Learn more about chiropractic care",
  },
  {
    icon: Zap,
    title: "Neuropathy & Nerve Pain",
    desc: "Advanced therapies and nerve-focused care for peripheral neuropathy — helping reduce burning, tingling, and numbness in feet or hands.",
    color: "#8B5CF6",
    bg: "linear-gradient(135deg, #ECE7FF, #DDD6FE)",
    accent: "rgba(139,92,246,0.12)",
    link: "Learn more about neuropathy treatment",
  },
  {
    icon: Activity,
    title: "Pain Management & Rehab",
    desc: "Non-surgical pain management combined with rehab, corrective exercises, and therapy to restore strength, stability, and function.",
    color: "#F43F5E",
    bg: "linear-gradient(135deg, #FFE9EC, #FECDD3)",
    accent: "rgba(244,63,94,0.12)",
    link: "Learn more about pain management & rehab",
  },
  {
    icon: PersonStanding,
    title: "Physical Therapy & Injury Recovery",
    desc: "Customized therapy programs after injuries, accidents, or surgery to help you return to daily activities safely and confidently.",
    color: "#EA580C",
    bg: "linear-gradient(135deg, #FFF7ED, #FED7AA)",
    accent: "rgba(234,88,12,0.12)",
    link: "Learn more about physical therapy",
  },
  {
    icon: Scale,
    title: "Medical Weight Loss",
    desc: "Physician-guided weight loss plans designed to improve energy, support joint health, and enhance overall wellness.",
    color: "#14B8A6",
    bg: "linear-gradient(135deg, #CCFBF1, #99F6E4)",
    accent: "rgba(20,184,166,0.12)",
    link: "Learn more about weight loss programs",
  },
  {
    icon: FlaskConical,
    title: "Hormone & Peptide Therapy",
    desc: "Personalized hormone and peptide protocols to support better sleep, energy, body composition, recovery, and performance.",
    color: "#8B5CF6",
    bg: "linear-gradient(135deg, #ECE7FF, #C4B5FD)",
    accent: "rgba(139,92,246,0.12)",
    link: "Learn more about hormone & peptide therapy",
  },
];

export default function Pricing() {
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
          y: 50, opacity: 0, duration: 0.75, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: cardsRef.current, start: "top 78%" },
        });
      }
    },
    { scope: sectionRef }
  );

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0A0E1A 0%, #0D1320 8%, #F0F9FF 15%, #FFFFFF 100%)",
        padding: "100px 0 110px",
        overflow: "hidden",
      }}
    >
      <div style={{ position: "absolute", inset: "15% 0 0", overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "5%",  right: "5%", width: 420, height: 420, background: "radial-gradient(circle, #ECE7FF, #F8F4FF)", opacity: 0.4 }} />
        <div className="blob blob-3" style={{ bottom: "5%", left: "3%", width: 380, height: 380, background: "radial-gradient(circle, #E2F9F5, #F0FDF8)", opacity: 0.4 }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 60 }}>
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
            Our Services
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
              fontWeight: 700, color: "#0C2340",
              lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
            }}
          >
            Services Designed for{" "}
            <span className="text-gradient-teal">Long-Term Relief</span>
            <br />and Wellness
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)", fontSize: "1.05rem",
              lineHeight: 1.75, color: "#64748B",
              maxWidth: 560, margin: "0 auto",
            }}
          >
            Your care plan may include one or several of these services, combined to
            match your specific condition, goals, and lifestyle.
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={cardsRef}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: 22, marginBottom: 48,
          }}
        >
          {SERVICES.map((s) => {
            const Icon = s.icon;
            return (
              <div
                key={s.title}
                className="glass pillar-card"
                style={{ borderRadius: 22, padding: "30px 26px", position: "relative", overflow: "hidden" }}
              >
                <div style={{ position: "absolute", inset: 0, borderRadius: 22, background: s.bg, opacity: 0.22, zIndex: 0 }} />
                <div style={{ position: "relative", zIndex: 1 }}>
                  <div
                    style={{
                      width: 50, height: 50, borderRadius: 14,
                      background: s.accent, display: "flex",
                      alignItems: "center", justifyContent: "center", marginBottom: 18,
                    }}
                  >
                    <Icon size={26} color={s.color} strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "#0C2340", marginBottom: 10, lineHeight: 1.3 }}>
                    {s.title}
                  </h3>
                  <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.7, color: "#475569", marginBottom: 16 }}>
                    {s.desc}
                  </p>
                  <a
                    href="#contact"
                    style={{
                      fontFamily: "var(--font-body)", fontSize: "0.82rem",
                      fontWeight: 600, color: s.color,
                      textDecoration: "none", cursor: "pointer",
                      display: "flex", alignItems: "center", gap: 5,
                    }}
                  >
                    {s.link} →
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Section CTAs */}
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <a
            href="#contact"
            className="btn-primary"
            style={{ padding: "14px 32px", borderRadius: 14, fontSize: "0.95rem", boxShadow: "0 8px 24px rgba(8,145,178,0.35)" }}
          >
            View All Services →
          </a>
          <a
            href="#start"
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              padding: "14px 28px", borderRadius: 14,
              fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.95rem",
              color: "#0891B2", background: "rgba(8,145,178,0.07)",
              border: "1px solid rgba(8,145,178,0.2)",
              textDecoration: "none", cursor: "pointer",
              transition: "all 200ms",
            }}
          >
            Request an Appointment
          </a>
        </div>
      </div>
    </section>
  );
}
