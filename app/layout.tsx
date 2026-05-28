import type { Metadata } from "next";
import { Lora, Raleway } from "next/font/google";
import "./globals.css";

const lora = Lora({
  variable: "--font-lora",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "City Health Services — Chiropractic Care, Pain Relief & Wellness in Mesa, AZ",
  description:
    "Chiropractor-led clinic in Mesa, AZ offering integrated pain management, neuropathy care, physical therapy, medical weight loss, hormone optimization, and peptide therapy. Serving Mesa, Gilbert, Chandler, Tempe, and the East Valley.",
  keywords: [
    "chiropractor Mesa AZ",
    "neuropathy treatment Mesa",
    "pain management clinic Mesa",
    "physical therapy East Valley",
    "medical weight loss Mesa",
    "hormone therapy peptide therapy AZ",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${lora.variable} ${raleway.variable}`}
      style={{ fontFamily: "var(--font-raleway), sans-serif" }}
    >
      <body className="antialiased" style={{ fontFamily: "var(--font-raleway), sans-serif" }}>
        {children}
      </body>
    </html>
  );
}
