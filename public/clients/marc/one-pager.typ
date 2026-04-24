// Marc Benioff One-Pager - Typst source
// Compile with: typst compile --font-path fonts one-pager.typ ~/Desktop/marc-one-pager.pdf

// === COLOR PALETTE ===
#let bg = rgb("#F6F1E9")
#let bg2 = rgb("#EDE7DB")
#let card = rgb("#EDE7DB")
#let text-color = rgb("#15130E")
#let text-2 = rgb("#6B6157")
#let text-3 = rgb("#A39888")
#let accent = rgb("#C96A2B")
#let accent-glow = rgb("#C96A2B14")
#let accent-border = rgb("#C96A2B47")
#let border-color = rgb("#DDD7CC")
#let border-strong = rgb("#C9C2B5")

// === PAGE SETUP ===
#set page(
  width: 8.5in,
  height: 11in,
  margin: (left: 0.55in, right: 0.55in, top: 0.4in, bottom: 0.4in),
  fill: bg,
  footer: align(top)[
    #block(stroke: (top: 1pt + border-color), inset: (top: 8pt), width: 100%)[
      #grid(columns: (1fr, auto),
        text(size: 8pt, tracking: 1.5pt)[
          #text(fill: accent)[#upper("The Narrative Company")]#text(fill: text-3)[#upper(" · For Marc Benioff")]
        ],
        text(size: 8pt, fill: text-3, tracking: 1.5pt)[#upper("Source: X API · Internal analysis")],
      )
    ]
  ],
  footer-descent: 0pt,
)

#set text(font: "Inter", size: 10pt, weight: "regular", fill: text-color)
#set par(leading: 0.55em, spacing: 0pt)

// === HELPERS ===
#let sec-label(content) = block(below: 10pt)[
  #grid(columns: (auto, auto), column-gutter: 10pt, align: horizon,
    box(width: 16pt, height: 1pt, fill: accent),
    text(size: 9pt, weight: "medium", fill: accent, tracking: 2.5pt)[#upper(content)]
  )
]

// === HEADER STRIP ===
#block(
  below: 12pt,
  stroke: (bottom: 1pt + border-color),
  inset: (bottom: 10pt),
  width: 100%,
)[
  #grid(
    columns: (1fr, auto),
    align: (left + bottom, right + bottom),
    box(
      inset: (top: 7pt),
      stroke: (top: 1pt + accent),
    )[#text(size: 10pt, tracking: 3.2pt)[#upper("The Narrative Company")]],
    text(size: 9pt, fill: text-2, tracking: 2pt)[#upper("For Marc Benioff · 45-Day Pilot Recap · Mar 2026")],
  )
]

// === PILOT CARD ===
#block(
  fill: accent-glow,
  stroke: 1pt + accent-border,
  inset: (x: 16pt, top: 11pt, bottom: 12pt),
  width: 100%,
  breakable: false,
)[
  #text(size: 9pt, weight: "medium", fill: accent, tracking: 2.5pt)[#upper("What worked in the pilot · Moment 01")]

  #v(5pt)

  #text(font: "Cormorant Garamond", size: 20pt, weight: "medium", fill: text-color)[FY26 Earnings - #text(fill: accent, style: "italic")[\"SaaSpocalypse\"]]

  #v(3pt)

  #set par(leading: 0.48em)
  #text(size: 10pt, weight: "light", fill: text-2)[We tested a stack of angles until Edward and Jacob locked onto the #text(style: "italic")[\"SaaSpocalypse\"] counter-narrative. We drafted Marc's posts around it and ran the first orchestrated quote-post amplification across the Salesforce handle and 9 product handles. Heavy coordination. The numbers landed.]

  #v(9pt)
  #line(length: 100%, stroke: 1pt + accent-border)
  #v(9pt)

  #grid(columns: (1fr, 1fr, 1fr), column-gutter: 16pt,
    [
      #block(spacing: 0pt)[#text(font: "Cormorant Garamond", size: 26pt, weight: "medium", fill: text-color)[350K]]
      #v(7pt)
      #text(size: 9pt, weight: "light", fill: text-2)[Strong organic reach for an earnings release on Marc's X.]
    ],
    [
      #block(spacing: 0pt)[#text(font: "Cormorant Garamond", size: 26pt, weight: "medium", fill: text-color)[10K]]
      #v(7pt)
      #text(size: 9pt, weight: "light", fill: text-2)[LinkedIn likes - second-highest engagement on Marc's LinkedIn in the trailing 12 months.]
    ],
    [
      #block(spacing: 0pt)[#text(font: "Cormorant Garamond", size: 26pt, weight: "medium", fill: text-color)[166K]]
      #v(7pt)
      #text(size: 9pt, weight: "light", fill: text-2)[One of the Salesforce handle's strongest organic moments to date.]
    ],
  )

  #v(9pt)
  #line(length: 100%, stroke: 1pt + accent-border)
  #v(7pt)

  #text(size: 9.5pt, weight: "light", fill: text-2)[The bigger unlock: that spicier tone has stuck. The Salesforce handle is running #text(style: "italic", fill: accent, weight: "regular")[\"medium spicy\"] on its own now, Slack shows up in the comments, and the corporate voice has gotten sharper.]
]

#v(14pt)

// === SNAPSHOT TABLE ===
#sec-label[Marc vs. the peer set on X · Jan - Mar 2026]

#let header-cell(content, first: false) = table.cell(
  fill: bg2,
  align: if first { left + horizon } else { right + horizon },
  inset: (x: 6pt, y: 6pt),
)[#text(size: 7.5pt, weight: "medium", fill: text-3, tracking: 0.7pt)[#upper(content)]]

#let ceo-cell(name, role, marc: false) = table.cell(
  fill: if marc { accent-glow } else { card },
  stroke: if marc { (left: 2pt + accent) } else { none },
  inset: if marc { (left: 14pt, right: 8pt, y: 5pt) } else { (x: 8pt, y: 5pt) },
  align: left + horizon,
)[
  #text(weight: "medium", size: 10pt, fill: if marc { accent } else { text-color })[#name] \
  #text(size: 8.5pt, weight: "light", fill: if marc { accent } else { text-3 })[#role]
]

#let data-cell(value, marc: false) = table.cell(
  fill: if marc { accent-glow } else { card },
  align: right + horizon,
  inset: (x: 8pt, y: 5pt),
)[#text(weight: if marc { "medium" } else { "light" }, size: 10pt, fill: if marc { text-color } else { text-2 })[#value]]

#table(
  columns: (2.6fr, 0.8fr, 1fr, 1fr, 1.2fr, 1.1fr, 1.3fr),
  stroke: 1pt + border-color,
  inset: 0pt,

  header-cell("CEO", first: true),
  header-cell("Posts/wk"),
  header-cell("Median Views"),
  header-cell("Median Likes"),
  header-cell("Engagement\nRate"),
  header-cell("Sentiment\n(pos:neg)"),
  header-cell("High-Value\nCommenters"),

  ceo-cell("Sundar Pichai", "Google"),
  data-cell("2.8"),
  data-cell("347K"),
  data-cell("5,566"),
  data-cell("1.39%"),
  data-cell("3 : 1"),
  data-cell("16"),

  ceo-cell("Satya Nadella", "Microsoft"),
  data-cell("2.2"),
  data-cell("682K"),
  data-cell("3,053"),
  data-cell("0.99%"),
  data-cell("1 : 1"),
  data-cell("9"),

  ceo-cell("Patrick Collison", "Stripe"),
  data-cell("0.5"),
  data-cell("124K"),
  data-cell("781"),
  data-cell("0.68%"),
  data-cell("2 : 1"),
  data-cell("78"),

  ceo-cell("Marc Benioff", "Salesforce", marc: true),
  data-cell("4.2", marc: true),
  data-cell("51K", marc: true),
  data-cell("190", marc: true),
  data-cell("0.51%", marc: true),
  data-cell("2 : 1", marc: true),
  data-cell("30", marc: true),

  ceo-cell("Bill McDermott", "ServiceNow"),
  data-cell("0.5"),
  data-cell("7K"),
  data-cell("75"),
  data-cell("1.18%"),
  data-cell("6 : 1"),
  data-cell("9"),
)

#v(10pt)

// === MOVES ===
#sec-label[Three things worth experimenting with]

#let move-card(num, title, body) = grid.cell(
  stroke: 1pt + border-strong,
  fill: bg,
  inset: (x: 12pt, top: 11pt, bottom: 12pt),
)[
  #set par(leading: 0.48em)
  #text(font: "Cormorant Garamond", style: "italic", size: 11pt, fill: accent)[#num]
  #v(2pt)
  #text(font: "Cormorant Garamond", size: 15pt, weight: "medium", fill: text-color)[#title]
  #v(5pt)
  #text(size: 9pt, weight: "light", fill: text-2)[#body]
]

#grid(columns: (1fr, 1fr, 1fr), column-gutter: 12pt,
  move-card(
    "Move 01",
    "Keep the casual voice. Layer in depth.",
    [Your in-the-moment posting is part of why the comment section is so warm - keep it. Two small dials: bring weekly cadence from #text(weight: "medium", fill: text-color)[4.2 down to ~3 posts], and add #text(weight: "medium", fill: text-color)[1-2 deeper, more thoughtful posts a month]. The mix lifts your per-post average and pulls the right audience in.],
  ),
  move-card(
    "Move 02",
    "Lead with takes on cultural moments.",
    [What breaks through across the field is short, opinionated takes on cultural and industry moments - not product announcements. Your #text(weight: "medium", fill: text-color)[Figure 03 post (\"Impressive.\")] is exactly the shape. Lean into perspectives on what the world is already watching.],
  ),
  move-card(
    "Move 03",
    "Reply in your own comment section.",
    [Pichai replied to #text(weight: "medium", fill: text-color)[25 of his own comment threads] in this window - more than any peer - and runs the highest engagement rate and the second-highest comment sentiment in the set. Even a few replies a week to the founders who already show up for you would compound fast.],
  ),
)
