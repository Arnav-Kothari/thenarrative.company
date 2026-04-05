// Brand colors
#let bg = rgb("#F6F1E9")
#let bg-2 = rgb("#EDE7DB")
#let text-color = rgb("#15130E")
#let text-2 = rgb("#6B6157")
#let text-3 = rgb("#A39888")
#let accent = rgb("#C96A2B")
#let border = rgb("#DDD7CC")

// Page setup
#set page(
  paper: "a4",
  fill: bg,
  margin: (top: 48pt, bottom: 48pt, left: 56pt, right: 56pt),
  footer: context {
    if counter(page).get().first() == counter(page).final().first() [
      #line(length: 100%, stroke: 0.5pt + border)
      #v(8pt)
      #set text(size: 8pt, fill: text-3, tracking: 0.04em)
      #align(center)[#text(fill: accent)[The Narrative Company] #sym.dot.c Q2 Social Engagement Plan #sym.dot.c April 2026]
    ]
  }
)

#set text(font: "Inter", size: 10pt, weight: "light", fill: text-color)
#set par(leading: 0.75em)

// Helper functions
#let section-label(body) = {
  v(4pt)
  block[
    #set text(size: 7pt, weight: "regular", fill: accent, tracking: 0.2em)
    #box(line(length: 18pt, stroke: 0.75pt + accent))
    #h(8pt)
    #upper(body)
  ]
}

#let section-title(body) = {
  v(2pt)
  block[
    #set text(font: "Cormorant Garamond", size: 22pt, weight: "medium", fill: text-color)
    #body
  ]
  v(2pt)
}

#let desc(body) = {
  block(width: 85%)[
    #set text(size: 10pt, weight: "light", fill: text-2)
    #set par(leading: 0.85em)
    #body
  ]
  v(6pt)
}

#let card(label, title, description) = {
  block(
    width: 100%,
    fill: bg-2,
    stroke: 0.5pt + border,
    inset: (x: 14pt, y: 14pt),
  )[
    #set text(size: 7pt, weight: "regular", fill: text-3, tracking: 0.2em)
    #upper(label)
    #v(6pt)
    #set text(font: "Cormorant Garamond", size: 14pt, weight: "medium", fill: text-color, tracking: 0pt)
    #title
    #v(4pt)
    #set text(font: "Inter", size: 9pt, weight: "light", fill: text-2, tracking: 0pt)
    #set par(leading: 0.75em)
    #description
  ]
}

#let bullet-item(label, body) = {
  block[
    #set text(size: 9pt, weight: "light", fill: text-2)
    #grid(
      columns: (12pt, auto),
      align: (left + horizon, left),
      line(length: 5pt, stroke: 0.75pt + accent),
      [#text(weight: "medium", fill: text-color)[#label] #body],
    )
  ]
}

#let flow-step(num, label, description) = {
  block(
    width: 100%,
    fill: bg-2,
    stroke: 0.5pt + border,
    inset: (x: 10pt, y: 10pt),
  )[
    #align(center)[
      #set text(size: 7pt, weight: "regular", fill: accent, tracking: 0.15em)
      #upper(num)
      #v(2pt)
      #set text(font: "Cormorant Garamond", size: 13pt, weight: "medium", fill: text-color, tracking: 0pt)
      #label
      #v(1pt)
      #set text(font: "Inter", size: 8pt, weight: "light", fill: text-3, tracking: 0pt)
      #description
    ]
  ]
}

#let flow-arrow() = {
  align(center + horizon)[
    #set text(size: 12pt, fill: accent)
    #sym.arrow.r
  ]
}

#let section-divider() = {
  v(8pt)
  line(length: 100%, stroke: 0.5pt + border)
  v(8pt)
}

// ─── HEADER ───
#block[
  #grid(
    columns: (1fr, 1fr),
    align: (left, right),
    [
      #line(length: 32pt, stroke: 0.75pt + accent)
      #v(4pt)
      #set text(size: 10pt, weight: "regular", tracking: 0.3em)
      #upper[The Narrative Company]
    ],
    [
      #set text(size: 8pt, fill: text-2, tracking: 0.1em)
      #upper[Social Engagement Plan]
    ]
  )
]

#line(length: 100%, stroke: 0.5pt + border)

// ─── HERO ───
#v(36pt)

#block[
  #box(
    stroke: 0.75pt + accent,
    inset: (x: 12pt, y: 5pt),
  )[
    #set text(size: 7.5pt, weight: "medium", fill: accent, tracking: 0.14em)
    #upper[Q2 2026]
  ]
]

#v(12pt)

#block[
  #set text(font: "Cormorant Garamond", weight: "light", style: "italic", size: 36pt, fill: text-color)
  #set par(leading: 0.4em)
  #text(fill: accent)[Marc Benioff] \
  #text(style: "normal", weight: "regular")[Social Engagement Plan]
]

#v(8pt)

#block(width: 80%)[
  #set text(size: 11pt, weight: "light", fill: text-2)
  #set par(leading: 0.85em)
  Five workstreams to sharpen Marc's social presence and deepen how his audience connects with him.
]

#v(36pt)

// ─── WORKSTREAM 01: MOMENTS ───
#section-divider()
#section-label[Workstream 01]
#section-title[Moments]
#desc[Two coordinated, high-impact posts per month across X and LinkedIn.]

#grid(
  columns: (1fr, auto, 1fr, auto, 1fr, auto, 1fr),
  column-gutter: 4pt,
  flow-step("01", "Source", "Identify the topic, angle, and timing"),
  flow-arrow(),
  flow-step("02", "Build", "Draft post for both platforms"),
  flow-arrow(),
  flow-step("03", "Approve", "Route for approval"),
  flow-arrow(),
  flow-step("04", "Amplify", "Exec + corporate cascade fires on publish"),
)

// ─── WORKSTREAM 02: AMPLIFICATION ───
#section-divider()
#section-label[Workstream 02]
#section-title[Amplification]
#desc[Every moment gets amplified by two core execs and the Salesforce handle. We work directly with their comms teams, give proper notice, and help draft their comments or quote posts.]

#v(4pt)

#block[
  #set text(size: 9pt)
  #table(
    columns: (1.2fr, 1.2fr, 1.4fr),
    stroke: none,
    inset: (x: 12pt, y: 8pt),
    fill: (_, row) => {
      if row == 0 { none }
      else if row >= 4 { bg-2 }
      else { none }
    },
    table.hline(stroke: 0.5pt + border),
    [#set text(size: 7pt, weight: "regular", fill: text-3, tracking: 0.15em); #upper[]],
    [#set text(size: 7pt, weight: "regular", fill: text-3, tracking: 0.15em); #upper[Name]],
    [#set text(size: 7pt, weight: "regular", fill: text-3, tracking: 0.15em); #upper[Platforms]],
    table.hline(stroke: 0.5pt + border),
    [#text(weight: "regular")[Exec 01]], [Robin Washington], [LinkedIn],
    table.hline(stroke: 0.5pt + border),
    [#text(weight: "regular")[Exec 02]], [Vala Afshar], [LinkedIn + X],
    table.hline(stroke: 0.5pt + border),
    [#text(weight: "regular")[Company Handle 01]], [Salesforce], [LinkedIn + X],
    table.hline(stroke: 0.5pt + border),
    [#set text(fill: text-3, style: "italic"); Exec 03], [#set text(fill: text-3, style: "italic"); Per Moment], [#set text(fill: text-3, style: "italic"); Based on the moment's requirements],
    table.hline(stroke: 0.5pt + border),
    [#set text(fill: text-3, style: "italic"); Company Handle 02+], [#set text(fill: text-3, style: "italic"); Per Moment], [#set text(fill: text-3, style: "italic"); Based on the moment's requirements],
    table.hline(stroke: 0.5pt + border),
  )
]

#v(4pt)

#block[
  #set text(font: "Cormorant Garamond", size: 15pt, weight: "medium", fill: text-color)
  Building Comms Relationships
]
#v(2pt)
#block(width: 85%)[
  #set text(size: 9.5pt, weight: "light", fill: text-2)
  #set par(leading: 0.85em)
  Going forward we'd like to give proper lead time before moments, and open the door to engaging with their content as well.
]

// ─── WORKSTREAM 03: LINKEDIN ───
#section-divider()
#section-label[Workstream 03]
#section-title[LinkedIn - Build a Live Presence]
#desc[We can move quickly here. Two ways we'll keep Marc's LinkedIn active between moments.]

#grid(
  columns: (1fr, 1fr),
  column-gutter: 12pt,
  block(
    width: 100%,
    height: 170pt,
    fill: bg-2,
    stroke: 0.5pt + border,
    inset: (x: 14pt, y: 14pt),
  )[
    #set text(size: 7pt, weight: "regular", fill: text-3, tracking: 0.2em)
    #upper[Weekly]
    #v(6pt)
    #set text(font: "Cormorant Garamond", size: 14pt, weight: "medium", fill: text-color, tracking: 0pt)
    Original Posts
    #v(4pt)
    #set text(font: "Inter", size: 8.5pt, weight: "light", fill: text-2, tracking: 0pt)
    #set par(leading: 0.7em)
    Consistent publishing cadence coordinated with the broader moment calendar.
    #v(6pt)
    #bullet-item("Pipeline:", [We draft, send for approval, publish])
    #v(3pt)
    #bullet-item("Goal:", [Build the right narrative around every opportunity to talk about something meaningful at Salesforce])
  ],
  block(
    width: 100%,
    height: 170pt,
    fill: bg-2,
    stroke: 0.5pt + border,
    inset: (x: 14pt, y: 14pt),
  )[
    #set text(size: 7pt, weight: "regular", fill: text-3, tracking: 0.2em)
    #upper[Timely]
    #v(6pt)
    #set text(font: "Cormorant Garamond", size: 14pt, weight: "medium", fill: text-color, tracking: 0pt)
    Commenting + Quote Posts
    #v(4pt)
    #set text(font: "Inter", size: 8.5pt, weight: "light", fill: text-2, tracking: 0pt)
    #set par(leading: 0.7em)
    Strategic engagement on the right profiles at the right time - customers, peer CEOs, industry voices.
    #v(6pt)
    #bullet-item("Pipeline:", [Software flags opportunities, we draft + send for approval])
    #v(3pt)
    #bullet-item("Goal:", [Pull influential people into Marc's orbit between moments])
  ],
)

// ─── WORKSTREAM 04: X ADVISORY ───
#section-divider()
#section-label[Workstream 04]
#section-title[X Advisory]
#desc[A low-friction pipeline for surfacing the highest-value moments on X - whether that's a draft post for Marc to publish or an opportunity worth engaging with. We surface fewer, better-justified opportunities and frame them as things to experiment with, not mandates.]

#grid(
  columns: (1fr, auto, 1fr, auto, 1fr, auto, 1fr),
  column-gutter: 4pt,
  flow-step("01", "Flag", "Identify moment or opportunity"),
  flow-arrow(),
  flow-step("02", "Draft", "Post or comment + justification"),
  flow-arrow(),
  flow-step("03", "Raise", "Surface in Slack"),
  flow-arrow(),
  flow-step("04", "Float", "Raised to Marc"),
)

#v(8pt)

#bullet-item("Cadence:", [Once or twice a month - less frequent, better justified])
#v(3pt)
#bullet-item("Bar:", [Every opportunity ships with a draft and clear justification])
#v(3pt)
#bullet-item("Expectation:", [Marc may or may not engage - the pipeline builds trust by being consistently worth his time])

// ─── WORKSTREAM 05: INTELLIGENCE ───
#section-divider()
#section-label[Workstream 05]
#section-title[Intelligence]
#desc[We track the competitive landscape continuously and use it to shape what we post, when, and how. Tone, post length, themes, timing, format - all informed by what the data is telling us.]

#grid(
  columns: (1fr, 1fr, 1fr),
  column-gutter: 12pt,
  card("The 10k List", "Proprietary dataset", [10,000 most influential profiles - live, filtered, continuously updated. Powers our engagement notifications across X and LinkedIn.]),
  card("Continuous", "Competitive reports", [Benchmarking Marc against peer CEOs. What they're doing, what's working, and what we should change.]),
  card("Quarterly", "Quarterly scorecard", [How the numbers moved, where Marc stands, and what we're adjusting next quarter.]),
)

// ─── SUCCESS METRICS ───
#section-divider()
#section-label[How We Measure]
#section-title[Success Metrics]

#block(width: 85%)[
  #set text(size: 10pt, weight: "light", fill: text-2)
  #set par(leading: 0.85em)
  25% increase over 2025 baselines across X and LinkedIn, measured from start of engagement - on both #text(weight: "medium", fill: text-color)[follower growth] and #text(weight: "medium", fill: text-color)[average engagement per post].
]

#v(4pt)

#block(width: 85%)[
  #set text(size: 8.5pt, weight: "light", fill: text-3)
  Note: engagement metrics apply to posts we produce. Posts Marc publishes independently are not included in the measurement.
]

// ─── ENGAGEMENT TERMS ───
#section-divider()

#grid(
  columns: (1fr, 1fr),
  column-gutter: 24pt,
  [
    #section-label[Engagement Period]
    #v(2pt)
    #set text(size: 11pt, weight: "light", fill: text-2)
    April 6 - June 30, 2026
  ],
  [
    #section-label[Renewal]
    #v(2pt)
    #set text(size: 11pt, weight: "light", fill: text-2)
    Rolling quarterly
  ],
)
