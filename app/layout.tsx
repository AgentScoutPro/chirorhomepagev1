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
  title: "ChiroR — Where Alignment Meets Optimal Performance",
  description:
    "Premium chiropractic care backed by state-of-the-art diagnostic technology. Precision adjustments, decompression therapy, and elite wellness plans.",
  keywords: [
    "chiropractic",
    "spinal alignment",
    "decompression therapy",
    "neurological care",
    "wellness",
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
