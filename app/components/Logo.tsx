import type { CSSProperties } from "react";

/**
 * The Narrative Company logo system.
 *
 * Two lockups. Both share a 1px amber bar above the mark.
 *
 *   <Logo variant="wordmark" />   Primary. Inline. Inter 400, 0.4em tracking, uppercase.
 *                                 Use anywhere horizontal space allows. This is the default.
 *
 *   <Logo variant="monogram" />   Reduced. Italic Cormorant serif "N" + amber period + bar.
 *                                 Use only when horizontal space collapses: favicons, avatars,
 *                                 stationery, tiny UI chrome.
 *
 * Tones:
 *   "ink"   dark text on light background (default)
 *   "ivory" light text on dark background
 *   "amber" ivory text on the amber brand surface
 *
 * The component is pure visual. Wrap it in a <Link> if you need navigation.
 */

type Variant = "wordmark" | "monogram";
type Tone = "ink" | "ivory" | "amber";

interface LogoProps {
  variant?: Variant;
  tone?: Tone;
  /**
   * Wordmark: font-size in px (default 15).
   * Monogram: total cap-height in px (default 120).
   */
  size?: number;
  className?: string;
  style?: CSSProperties;
}

// Brand tokens — pulled straight from brand.html.
const INK = "#15130E";
const IVORY = "#F6F1E9";
const AMBER = "#C96A2B";

function resolveColors(tone: Tone) {
  switch (tone) {
    case "ivory":
      return { color: IVORY, barColor: AMBER };
    case "amber":
      return { color: IVORY, barColor: "rgba(246,241,233,0.6)" };
    case "ink":
    default:
      return { color: INK, barColor: AMBER };
  }
}

export default function Logo({
  variant = "wordmark",
  tone = "ink",
  size,
  className,
  style,
}: LogoProps) {
  const { color, barColor } = resolveColors(tone);

  if (variant === "monogram") {
    const px = size ?? 120;
    return (
      <span
        aria-label="The Narrative Company"
        className={className}
        style={{
          display: "inline-block",
          position: "relative",
          paddingTop: Math.max(2, px * 0.14),
          lineHeight: 0.9,
          ...style,
        }}
      >
        <span
          aria-hidden
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: px * 0.62,
            height: 1,
            background: barColor,
          }}
        />
        <span
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontWeight: 400,
            fontStyle: "italic",
            fontSize: px,
            lineHeight: 0.9,
            color,
            display: "inline-block",
          }}
        >
          N<span style={{ color: barColor }}>.</span>
        </span>
      </span>
    );
  }

  // variant === "wordmark"
  const px = size ?? 15;
  return (
    <span
      aria-label="The Narrative Company"
      className={className}
      style={{
        position: "relative",
        display: "inline-block",
        fontFamily: "Inter, sans-serif",
        fontWeight: 400,
        fontSize: px,
        letterSpacing: "0.4em",
        textTransform: "uppercase",
        color,
        paddingTop: Math.max(8, px * 0.75),
        lineHeight: 1.2,
        ...style,
      }}
    >
      <span
        aria-hidden
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: barColor,
        }}
      />
      The Narrative Company
    </span>
  );
}
