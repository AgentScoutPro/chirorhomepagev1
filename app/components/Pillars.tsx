"use client";
import { useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { AlertCircle, Dumbbell, HeartCrack, CircleHelp } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PROBLEMS = [
  "Chronic neck, mid-back, and low back pain",
  "Sciatica and radiating leg pain",
  "Peripheral neuropathy (burning, tingling, numbness in feet or hands)",
  "Shoulder, hip, and knee pain from arthritis or overuse",
  "Pain from auto accidents, work injuries, or sports injuries",
  "Headaches and migraines",
];

const FEELINGS = [
  "Frustrated with temporary relief from medications",
  "Unsure what's actually causing your pain or nerve symptoms",
  "Worried about surgery or long-term opioids",
  "Ready for a plan that looks at the whole body, not just one symptom",
];

export default function Pillars() {
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const bodyRef    = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });
      gsap.from(bodyRef.current, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: bodyRef.current, start: "top 80%" },
      });
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
      <div style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "-8%",   right: "-4%", width: 380, height: 380, background: "radial-gradient(circle, #ECE7FF, transparent)", opacity: 0.3 }} />
        <div className="blob blob-2" style={{ bottom: "-8%", left: "-4%",  width: 340, height: 340, background: "radial-gradient(circle, #E2F9F5, transparent)", opacity: 0.3 }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 56 }}>
          <div
            style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              background: "rgba(244,63,94,0.07)", border: "1px solid rgba(244,63,94,0.18)",
              borderRadius: 50, padding: "6px 16px", marginBottom: 18,
              fontSize: "0.75rem", fontWeight: 600, color: "#F43F5E",
              letterSpacing: "0.06em", textTransform: "uppercase",
              fontFamily: "var(--font-body)",
            }}
          >
            <AlertCircle size={13} color="#F43F5E" />
            Who We Help
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.8rem, 3.5vw, 2.9rem)",
              fontWeight: 700, color: "#0C2340",
              lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 20,
            }}
          >
            Tired of Living With Constant Pain<br />
            or{" "}
            <span className="text-gradient-teal">Nerve Symptoms?</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)", fontSize: "1.05rem",
              lineHeight: 1.78, color: "#475569",
              maxWidth: 680, margin: "0 auto",
            }}
          >
            If back pain, neck pain, joint pain, or nerve symptoms like burning, tingling,
            or numbness are limiting your life, you are not alone. Many patients come to
            City Health Services after trying quick fixes or medications that only mask
            symptoms. Our team focuses on finding the{" "}
            <strong style={{ color: "#0C2340" }}>underlying cause</strong> of your pain and
            creating a personalized plan to address it.
          </p>
        </div>

        {/* Two-column bullets */}
        <div
          ref={bodyRef}
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 28 }}
          className="grid-cols-1 md:grid-cols-2"
        >
          {/* Common problems */}
          <div
            className="glass pillar-card"
            style={{ borderRadius: 24, padding: "36px 32px", position: "relative", overflow: "hidden" }}
          >
            <div style={{ position: "absolute", inset: 0, borderRadius: 24, background: "linear-gradient(135deg, #FFE9EC, #FFD1D7)", opacity: 0.2, zIndex: 0 }} />
            <div style={{ position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 20 }}>
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(244,63,94,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <HeartCrack size={22} color="#F43F5E" strokeWidth={1.8} />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "#0C2340" }}>
                  Common Problems We Treat
                </h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                {PROBLEMS.map((p) => (
                  <li key={p} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                    <div
                      style={{
                        width: 18, height: 18, borderRadius: "50%", marginTop: 2,
                        background: "rgba(244,63,94,0.1)", border: "1.5px solid rgba(244,63,94,0.25)",
                        display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                      }}
                    >
                      <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#F43F5E" }} />
                    </div>
                    <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#374151", lineHeight: 1.55 }}>{p}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Feelings + CTA */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            <div
              className="glass pillar-card"
              style={{ borderRadius: 24, padding: "32px", position: "relative", overflow: "hidden", flex: 1 }}
            >
              <div style={{ position: "absolute", inset: 0, borderRadius: 24, background: "linear-gradient(135deg, #ECE7FF, #D3C7FF)", opacity: 0.2, zIndex: 0 }} />
              <div style={{ position: "relative", zIndex: 1 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 18 }}>
                  <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(139,92,246,0.1)", display: "flex", alignItems: "center", justifyContent: "center" }}>
                    <CircleHelp size={20} color="#8B5CF6" strokeWidth={1.8} />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontSize: "1.1rem", fontWeight: 600, color: "#0C2340" }}>
                    For Patients Who Feel...
                  </h3>
                </div>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 11 }}>
                  {FEELINGS.map((f) => (
                    <li key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                      <div
                        style={{
                          width: 18, height: 18, borderRadius: "50%", marginTop: 2,
                          background: "rgba(139,92,246,0.1)", border: "1.5px solid rgba(139,92,246,0.25)",
                          display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0,
                        }}
                      >
                        <div style={{ width: 5, height: 5, borderRadius: "50%", background: "#8B5CF6" }} />
                      </div>
                      <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#374151", lineHeight: 1.55 }}>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div
              className="glass"
              style={{
                borderRadius: 20, padding: "24px 28px",
                background: "linear-gradient(135deg, rgba(8,145,178,0.06), rgba(20,184,166,0.04))",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 14 }}>
                <Dumbbell size={22} color="#0891B2" strokeWidth={1.8} />
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", fontWeight: 600, color: "#0C2340" }}>
                  Ready to find the real cause of your pain?
                </p>
              </div>
              <a
                href="#contact"
                className="btn-primary"
                style={{
                  padding: "12px 22px", borderRadius: 12, fontSize: "0.875rem",
                  boxShadow: "0 6px 20px rgba(8,145,178,0.3)", width: "100%", justifyContent: "center",
                }}
              >
                Schedule a Consultation to Find the Cause →
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
