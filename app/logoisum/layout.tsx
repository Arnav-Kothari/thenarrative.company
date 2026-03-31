import { Barlow, Instrument_Serif } from "next/font/google";
import type { Metadata } from "next";

const barlow = Barlow({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-barlow",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-instrument-serif",
});

export const metadata: Metadata = {
  title: "Logoisum — Video Editing Agency",
  description: "Short-form video editing for Influencers, Creators and Brands",
};

export default function LogoisumLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div
      className={`${barlow.variable} ${instrumentSerif.variable}`}
      style={{ fontFamily: "var(--font-barlow)" }}
    >
      {children}
    </div>
  );
}
