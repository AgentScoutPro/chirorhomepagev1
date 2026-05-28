"use client";
import { useState, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { Check, Star } from "lucide-react";

gsap.registerPlugin(ScrollTrigger, useGSAP);

const PLANS = [
  {
    id: "maintenance",
    label: "Maintenance",
    price: "$89",
    period: "/visit",
    tagline: "Keep your alignment tuned.",
    color: "#0891B2",
    accent: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.2)",
    features: [
      "Full spinal assessment",
      "Targeted chiropractic adjustment",
      "Postural analysis",
      "Home exercise guidance",
      "Progress tracking dashboard",
      "Priority scheduling",
    ],
  },
  {
    id: "chiro-pt",
    label: "Chiro + PT",
    price: "$189",
    period: "/session",
    tagline: "Rehab meets precision alignment.",
    color: "#8B5CF6",
    accent: "rgba(139,92,246,0.08)",
    border: "rgba(139,92,246,0.25)",
    popular: true,
    features: [
      "Everything in Maintenance",
      "Physical therapy integration",
      "Soft tissue mobilization",
      "Corrective exercise program",
      "Digital scan + imaging",
      "Monthly performance review",
    ],
  },
  {
    id: "elite",
    label: "Elite Performance",
    price: "$349",
    period: "/month",
    tagline: "The complete performance protocol.",
    color: "#0891B2",
    accent: "rgba(8,145,178,0.08)",
    border: "rgba(8,145,178,0.2)",
    features: [
      "Everything in Chiro + PT",
      "Unlimited monthly visits",
      "Neuromuscular biofeedback",
      "Spinal decompression access",
      "24/7 telehealth support",
      "Personalized care concierge",
    ],
  },
];

export default function Pricing() {
  const [active, setActive] = useState("chiro-pt");
  const sectionRef = useRef<HTMLElement>(null);
  const headRef    = useRef<HTMLDivElement>(null);
  const cardRef    = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.from(headRef.current, {
        y: 40, opacity: 0, duration: 0.9, ease: "power3.out",
        scrollTrigger: { trigger: headRef.current, start: "top 82%" },
      });
      gsap.from(cardRef.current, {
        y: 50, opacity: 0, duration: 1, ease: "power3.out",
        scrollTrigger: { trigger: cardRef.current, start: "top 78%" },
      });
    },
    { scope: sectionRef }
  );

  const plan = PLANS.find((p) => p.id === active)!;

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      style={{
        position: "relative",
        background: "linear-gradient(180deg, #0A0E1A 0%, #0D1320 8%, #F0F9FF 15%, #FFFFFF 100%)",
        padding: "100px 0",
        overflow: "hidden",
      }}
    >
      {/* Background blobs */}
      <div style={{ position: "absolute", inset: "15% 0 0", overflow: "hidden", zIndex: 0 }}>
        <div className="blob blob-1" style={{ top: "5%",  right: "5%", width: 420, height: 420, background: "radial-gradient(circle, #ECE7FF, #F8F4FF)", opacity: 0.4 }} />
        <div className="blob blob-3" style={{ bottom: "5%", left: "3%", width: 380, height: 380, background: "radial-gradient(circle, #E2F9F5, #F0FDF8)", opacity: 0.4 }} />
      </div>

      <div style={{ position: "relative", zIndex: 10, maxWidth: 820, margin: "0 auto", padding: "0 24px" }}>
        {/* Header */}
        <div ref={headRef} style={{ textAlign: "center", marginBottom: 52 }}>
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
            Care Plans & Packages
          </div>
          <h2
            style={{
              fontFamily: "var(--font-heading)",
              fontSize: "clamp(1.9rem, 3.5vw, 3rem)",
              fontWeight: 700, color: "#0C2340",
              lineHeight: 1.2, letterSpacing: "-0.02em", marginBottom: 14,
            }}
          >
            Your Journey,{" "}
            <span className="text-gradient-teal">Your Plan</span>
          </h2>
          <p
            style={{
              fontFamily: "var(--font-body)", fontSize: "1.05rem",
              lineHeight: 1.75, color: "#64748B", maxWidth: 480, margin: "0 auto",
            }}
          >
            From routine maintenance to elite performance optimization — choose the
            level of care that matches your goals.
          </p>
        </div>

        {/* Tab selector */}
        <div
          className="glass"
          style={{
            display: "flex", gap: 4, padding: 6, borderRadius: 18,
            marginBottom: 36, width: "fit-content", margin: "0 auto 36px",
          }}
        >
          {PLANS.map((p) => (
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`pricing-tab${active === p.id ? " active" : ""}`}
              aria-selected={active === p.id}
              role="tab"
            >
              {p.label}
              {p.popular && active !== p.id && (
                <span
                  style={{
                    marginLeft: 6, fontSize: "0.65rem", fontWeight: 700,
                    color: "#8B5CF6", background: "rgba(139,92,246,0.1)",
                    borderRadius: 50, padding: "2px 7px",
                  }}
                >
                  Popular
                </span>
              )}
            </button>
          ))}
        </div>

        {/* Plan card */}
        <div
          ref={cardRef}
          className="glass"
          key={plan.id}
          style={{
            borderRadius: 28, padding: "40px 44px",
            border: `1px solid ${plan.border}`,
            position: "relative", overflow: "hidden",
          }}
        >
          {plan.popular && (
            <div
              style={{
                position: "absolute", top: 20, right: 20,
                background: "linear-gradient(135deg, #8B5CF6, #A78BFA)",
                color: "white", borderRadius: 50, padding: "4px 14px",
                fontSize: "0.75rem", fontWeight: 700,
                display: "flex", alignItems: "center", gap: 5,
              }}
            >
              <Star size={12} fill="white" /> Most Popular
            </div>
          )}

          {/* Mesh tint */}
          <div
            style={{
              position: "absolute", inset: 0, borderRadius: 28,
              background: plan.accent, pointerEvents: "none",
            }}
          />

          <div style={{ position: "relative", zIndex: 1 }}>
            <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", flexWrap: "wrap", gap: 16, marginBottom: 28 }}>
              <div>
                <h3
                  style={{
                    fontFamily: "var(--font-heading)", fontSize: "1.5rem",
                    fontWeight: 700, color: "#0C2340", marginBottom: 6,
                  }}
                >
                  {plan.label}
                </h3>
                <p style={{ fontFamily: "var(--font-body)", fontSize: "0.95rem", color: "#64748B" }}>
                  {plan.tagline}
                </p>
              </div>
              <div style={{ textAlign: "right" }}>
                <span
                  style={{
                    fontFamily: "var(--font-heading)", fontSize: "2.8rem",
                    fontWeight: 700, color: plan.color, lineHeight: 1,
                  }}
                >
                  {plan.price}
                </span>
                <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#94A3B8", marginLeft: 4 }}>
                  {plan.period}
                </span>
              </div>
            </div>

            {/* Feature list */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "12px 24px",
                marginBottom: 32,
              }}
            >
              {plan.features.map((f) => (
                <div key={f} style={{ display: "flex", alignItems: "flex-start", gap: 10 }}>
                  <div
                    style={{
                      width: 20, height: 20, borderRadius: "50%",
                      background: plan.accent, border: `1.5px solid ${plan.border}`,
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0, marginTop: 1,
                    }}
                  >
                    <Check size={11} color={plan.color} strokeWidth={2.5} />
                  </div>
                  <span style={{ fontFamily: "var(--font-body)", fontSize: "0.9rem", color: "#374151", lineHeight: 1.5 }}>
                    {f}
                  </span>
                </div>
              ))}
            </div>

            <a
              href="#contact"
              className="btn-primary"
              style={{
                padding: "14px 32px", borderRadius: 14,
                fontSize: "0.95rem",
                boxShadow: `0 8px 24px ${plan.accent.replace("0.08", "0.35")}`,
                background:
                  plan.id === "chiro-pt"
                    ? "linear-gradient(135deg, #8B5CF6, #A78BFA)"
                    : "linear-gradient(135deg, #0891B2, #14B8A6)",
              }}
            >
              Get Started with {plan.label} →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
