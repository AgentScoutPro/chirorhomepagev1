"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { CalendarCheck, ClipboardList, LayoutList, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const STEPS = [
  {
    step: "01",
    icon: CalendarCheck,
    title: "Schedule Your Visit",
    desc: "Call our Mesa clinic or request an appointment online at a time that works for you. Our friendly staff makes scheduling straightforward.",
    color: "#0891B2",
    bg: "linear-gradient(135deg, #E2F9F5, #B2F5EA)",
  },
  {
    step: "02",
    icon: ClipboardList,
    title: "Get a Complete Evaluation",
    desc: "Your provider listens to your concerns, reviews your history, performs a detailed exam, and explains what is driving your pain or symptoms.",
    color: "#8B5CF6",
    bg: "linear-gradient(135deg, #ECE7FF, #DDD6FE)",
  },
  {
    step: "03",
    icon: LayoutList,
    title: "Follow Your Personalized Plan",
    desc: "Receive a clear plan that may include chiropractic care, rehab, neuropathy therapies, medical weight loss, hormones, or peptide therapy — built around your goals.",
    color: "#14B8A6",
    bg: "linear-gradient(135deg, #CCFBF1, #99F6E4)",
  },
];

const DIFFERENTIATORS = [
  "Chiropractor-led clinic with integrated medical, therapy, and wellness services",
  "Focus on treating root causes of pain and neuropathy, not just symptoms",
  "Non-surgical, opioid-sparing strategies whenever possible",
  "Personalized treatment plans tailored to your health history and goals",
  "Convenient Mesa location serving the East Valley, with flexible scheduling and friendly staff",
];

export default function JourneyMap() {
  const sectionRef = useRef<HTMLElement>(null);
  const whyRef     = useRef<HTMLDivElement>(null);
  const stepsRef   = useRef<HTMLDivElement>(null);
  const ctaRef     = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(whyRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: whyRef.current, start: "top 82%" },
      });
      if (stepsRef.current) {
        gsap.from(stepsRef.current.children, {
          y: 50, opacity: 0, scale: 0.96,
          duration: 0.75, stagger: 0.16, ease: "power3.out",
          scrollTrigger: { trigger: stepsRef.current, start: "top 80%" },
        });
      }
      gsap.from(ctaRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: ctaRef.current, start: "top 82%" },
      });
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
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-2" style={{ top: "5%",  left: "45%",  width: 380, height: 380, background: "radial-gradient(circle, #ECE7FF, transparent)", opacity: 0.35 }} />
        <div className="blob blob-3" style={{ bottom: "5%", right: "10%", width: 320, height: 320, background: "radial-gradient(circle, #E2F9F5, transparent)", opacity: 0.35 }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>

        {/* ── Why Choose Us ─────────────────────────── */}
        <div ref={whyRef} style={{ marginBottom: 90 }}>
          <div style={{ textAlign: "center", marginBottom: 44 }}>
            <div
              style={{
                marginBottom: 18,
                fontSize: "0.75rem", fontWeight: 600, color: "#0891B2",
                letterSpacing: "0.06em", textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              Why Patients Choose Us
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
                fontWeight: 700, color: "#0C2340",
                lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 16,
              }}
            >
              Why Patients in Mesa Choose<br />
              <span className="text-gradient-teal">City Health Services</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "#64748B", maxWidth: 600, margin: "0 auto" }}>
              There are many chiropractic and pain clinics in Mesa. Patients choose City Health Services
              because they want a team that looks at the whole person, communicates clearly, and focuses
              on long-term solutions instead of quick fixes.
            </p>
          </div>

          <div
            className="glass"
            style={{
              borderRadius: 24, padding: "38px 44px",
              background: "linear-gradient(135deg, rgba(8,145,178,0.05), rgba(20,184,166,0.03))",
            }}
          >
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
                gap: "14px 32px", marginBottom: 28,
              }}
            >
              {DIFFERENTIATORS.map((d) => (
                <div key={d} style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <div
                    style={{
                      width: 22, height: 22, borderRadius: "50%", marginTop: 1,
                      background: "rgba(8,145,178,0.1)", border: "1.5px solid rgba(8,145,178,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                    }}
                  >
                    <div style={{ width: 6, height: 6, borderRadius: "50%", background: "#0891B2" }} />
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#374151", lineHeight: 1.6 }}>{d}</span>
                </div>
              ))}
            </div>
            <a
              href="#reviews"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.9rem",
                color: "#0891B2", textDecoration: "none", cursor: "pointer",
              }}
            >
              See What Our Patients Say →
            </a>
          </div>
        </div>

        {/* ── How to Get Started ────────────────────── */}
        <div>
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <div
              style={{
                marginBottom: 18,
                fontSize: "0.75rem", fontWeight: 600, color: "#0891B2",
                letterSpacing: "0.06em", textTransform: "uppercase",
                fontFamily: "var(--font-body)",
              }}
            >
              Simple Process
            </div>
            <h2
              style={{
                fontFamily: "var(--font-heading)",
                fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
                fontWeight: 700, color: "#0C2340",
                lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14,
              }}
            >
              How to{" "}
              <span className="text-gradient-teal">Get Started</span>
            </h2>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "1.05rem", lineHeight: 1.75, color: "#64748B", maxWidth: 520, margin: "0 auto" }}>
              Getting help for chronic pain and nerve symptoms should feel straightforward,
              not overwhelming. Here&apos;s how the process works.
            </p>
          </div>

          <div
            ref={stepsRef}
            style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 22 }}
          >
            {STEPS.map((s) => {
              const Icon = s.icon;
              return (
                <div
                  key={s.step}
                  className="glass pillar-card"
                  style={{ borderRadius: 22, padding: "32px 28px", position: "relative", overflow: "hidden" }}
                >
                  <div style={{ position: "absolute", top: -6, right: 16, fontFamily: "var(--font-heading)", fontSize: "5rem", fontWeight: 800, color: "rgba(0,0,0,0.035)", lineHeight: 1, userSelect: "none", pointerEvents: "none" }}>
                    {s.step}
                  </div>
                  <div style={{ position: "absolute", inset: 0, borderRadius: 22, background: s.bg, opacity: 0.22, zIndex: 0 }} />
                  <div style={{ position: "relative", zIndex: 1 }}>
                    <div
                      style={{
                        width: 48, height: 48, borderRadius: 14,
                        background: "rgba(255,255,255,0.7)",
                        border: "1px solid rgba(255,255,255,0.9)",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.06)",
                        display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 18,
                      }}
                    >
                      <Icon size={24} color={s.color} strokeWidth={1.8} />
                    </div>
                    <div style={{ fontFamily: "var(--font-body)", fontSize: "0.72rem", fontWeight: 700, color: s.color, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>
                      Step {s.step}
                    </div>
                    <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "#0C2340", marginBottom: 10, lineHeight: 1.3 }}>
                      {s.title}
                    </h3>
                    <p style={{ fontFamily: "var(--font-body)", fontSize: "0.875rem", lineHeight: 1.68, color: "#475569" }}>
                      {s.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* CTA strip */}
        <div
          ref={ctaRef}
          id="start"
          className="glass"
          style={{
            marginTop: 56, borderRadius: 24, padding: "40px 44px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 24,
            background: "linear-gradient(135deg, rgba(8,145,178,0.06), rgba(139,92,246,0.04))",
          }}
        >
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.45rem", fontWeight: 700, color: "#0C2340", marginBottom: 8 }}>
              Ready to Begin Your Journey?
            </h3>
            <p style={{ fontFamily: "var(--font-body)", fontSize: "0.97rem", color: "#64748B", maxWidth: 420 }}>
              Your first consultation is complimentary. Our team is ready to build
              your custom care plan today.
            </p>
          </div>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href="#contact"
              className="btn-primary"
              style={{ padding: "14px 26px", borderRadius: 14, fontSize: "0.92rem", whiteSpace: "nowrap", boxShadow: "0 8px 26px rgba(8,145,178,0.35)" }}
            >
              Request a Chiropractic Evaluation →
            </a>
            <a
              href="tel:4806495297"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                padding: "14px 22px", borderRadius: 14,
                fontFamily: "var(--font-body)", fontWeight: 700, fontSize: "0.92rem",
                color: "#0C2340", background: "rgba(255,255,255,0.7)",
                border: "1px solid rgba(255,255,255,0.9)",
                textDecoration: "none", whiteSpace: "nowrap",
                boxShadow: "0 4px 14px rgba(0,0,0,0.07)",
              }}
            >
              <Phone size={16} color="#0891B2" />
              Call (480) 649-5297
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
