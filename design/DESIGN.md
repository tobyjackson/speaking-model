# Speaking Model — design catalog

The design plan the site is built against. Change this file first, then the
tokens, then the components. `design/` is excluded from the built site.

---

## Direction

**The book those other two pages came out of.**

The sub-site already had a voice before this layout existed: `/cheatsheet/` is a
letterpress dictionary page — guide words, a thumb index, column rules, rubric
red on warm paper — and `/linter/` is set from the same case. The full text is
the volume those are extracted from, so it inherits their type and colour rather
than introducing a third look.

Every device on the page is a print-dictionary convention that still does real
work at 36 KB of text:

| Device | What it's for |
|---|---|
| Guide word (running head) | Where am I, without scrolling back to a heading |
| Thumb index (left rail) | Jump between 15 sections; shows position |
| Headword set apart | You scan for terms, you don't read entries linearly |
| Column rule | Divides index from text; no boxes, no cards |
| Hanging citation block | The 🔰/🏗️ example pairs belong *to* an entry |

Deliberately not used: cards, gradients, glassmorphism, rounded corners, drop
shadows beyond the single "this is a sheet of paper" one the sibling pages
already use, and emoji as interface (the 🔰/🏗️ marks are the author's content,
carrying real meaning, and are left alone).

### Signature

The **live guide word**. The cheat sheet prints a static one (`audit ▸ one page
▸ verify`); here it tracks scroll and names the Part you are inside. One idea,
one place — everything else on the page stays quiet.

---

## Palette

Inherited from `/cheatsheet/`, extended with the tones a long read needs.
Ratios measured, not estimated.

### Light (default)

| Token | Hex | Role | On surface `#fdfcf9` |
|---|---|---|---|
| `--color-shell` | `#e9e6df` | Around the sheet | 1.21:1 (surface) |
| `--color-surface` | `#fdfcf9` | The sheet | — |
| `--color-specimen` | `#fbfaf5` | Code / template blocks | — |
| `--color-ink` | `#1c1a17` | Body text, headwords | **16.92:1** |
| `--color-ink-soft` | `#3d382f` | Example citations | **11.34:1** |
| `--color-meta` | `#5a5f66` | Edition line, glosses, colophon | **6.27:1** |
| `--color-accent` | `#8e2f2a` | Guide word, ordinals, links, position | **7.90:1** |
| `--color-rule` | `#d8d4cc` | Hairlines (non-text) | 1.44:1 |
| `--color-rule-heavy` | `#1c1a17` | Section rules, band underline | 16.92:1 |

Ink on the shell (running head) is 13.93:1; accent on shell 6.50:1.

### Dark (`prefers-color-scheme: dark`)

A warm night, not an inversion. On surface `#191813`:

| Token | Hex | Ratio |
|---|---|---|
| `--color-shell` | `#100f0c` | — |
| `--color-surface` | `#191813` | — |
| `--color-ink` | `#e4dccd` | **13.05:1** |
| `--color-ink-soft` / `--color-meta` | `#a29888` | **6.25:1** |
| `--color-accent` | `#e0937c` | **7.31:1** |
| `--color-rule` | `#3a372f` | 1.50:1 (non-text) |

All body text clears 4.5:1 and all UI text clears 3:1 in both themes.

**No toggle.** Neither sibling page has one and neither does tobyjackson.com, so
inventing a widget here would invent a mechanism the rest of the work doesn't
have. Dark follows the system only. It is a pure semantic-token swap: adding
`[data-theme="…"]` later needs zero component edits.

---

## Type

Same three faces as `/cheatsheet/` and `/linter/`, requested with a byte-identical
Google Fonts URL so the three pages share one cache entry.

| Role | Face | Use |
|---|---|---|
| Display | **Fraunces** 700 | Title, Part names, **every headword** |
| Text | **Source Serif 4** 400/600 + italic | Body, examples, glosses |
| Utility | **Archivo Narrow** 500/600 | Guide word, ordinals, rail, colophon |
| Mono | system stack | The Part IX request template only |

- Body: `clamp(1.0625rem, 1.006rem + 0.28vw, 1.1875rem)` — 17→19px, line-height 1.62.
- Measure: `40rem` ≈ 68 characters.
- Part heading: `clamp(1.35rem, 1.15rem + 0.8vw, 1.7rem)`; title `clamp(2rem, …, 3.05rem)`.

**One rule carries the dictionary feel:** every `<strong>` in the text is set in
the display face. Bold in this document always means "this is a term", so the
rule is semantic, not decorative — and it is what makes Part VII's run-in
glossary read like a real dictionary's run-in entries.

Two typographic roles are recovered from the source at runtime, without editing
any prose: a Part heading's `Part IV —` prefix becomes an ordinal line, and a
heading's trailing parenthetical becomes an italic gloss (so "Preface (unchanged,
because it's the whole point)" sets as a headword plus gloss rather than 
two lines of display type).

---

## Layout

A sheet of paper, ruled into a marginal index and a text column.

```
┌────────────────────────────────────────────────────────┐
│ SPEAKING MODEL.              ▸ PART IV — EPISTEMIC CO… │ sticky guide band
├──────────────┬─────────────────────────────────────────┤
│ CONTENTS     │ Speaking Model: A Practitioner's        │
│ ─────────    │ Dictionary                              │
│    Preface   │ SECOND EDITION — EXPANDED…              │
│  I The Verbs │ ─────────────────────────────           │
│ II The Modi… │ PART I                                  │
│▎IV Epistemic │ The Verbs                               │
│  V Context…  │ explain — teach the mechanism…          │
│              │ │ 🔰 "Explain what a mortgage…"         │
│  (sticky)    │ │ 🏗️ "Explain KV-cache reuse…"          │
└──────────────┴─────────────────────────────────────────┘
   ▲ column rule runs the full height of the text
```

- Under `62rem`: one column. Without JS the contents stay in the flow as a
  book's contents page; with JS the same list becomes a drawer under the band.
- Reading position is shown three ways at once — colour, weight, and a marginal
  tab — so it never depends on colour alone.

## Motion & sound

One state change (the guide word and rail marker) and smooth anchor scrolling,
both dropped under `prefers-reduced-motion: reduce`. No reveals, no parallax.
No audio: this is a reference document, and a cue that fires while someone reads
would be an interruption with no meaning to carry.

---

## Decision log

**2026-08-15 — Extend the cheat sheet's identity, not tobyjackson.com's.**
The parent site is dark, Inter, ember `#d97a3f`. Its two direct siblings under
`/speaking-model/` are warm-paper serif with rubric `#8e2f2a`. Inheriting the
parent would have made the dictionary look unlike the two pages it ships with.
Same warm family, one step closer to the actual neighbours.
*Rejected:* a dark Inter treatment matching the homepage.

**2026-08-15 — Build the TOC in Liquid, not JavaScript.**
The contents are parsed from the rendered HTML at build time, so they survive a
disabled-JS load and can never drift from the document's real headings. JS only
adds scroll-spy and the mobile drawer.
*Rejected:* a hardcoded list (goes stale, duplicates content) and a JS-only TOC
(nothing without JS).

**2026-08-15 — The edition line is skipped by name.**
`## Second Edition — …` is an `<h2>` in the source but a subtitle in fact. The
layout filters it out of the contents and styles it via `h1 + h2`. If that line
is ever renamed, update the `unless label contains 'Edition'` guard in
`_layouts/dictionary.html`.

**2026-08-15 — Dark mode ships, a theme toggle does not.** See Palette.

**2026-08-15 — Google Fonts kept, self-hosting deferred.**
House practice is self-hosted `@font-face`. Here the two sibling pages already
load these three families from the same URL; matching it exactly means the
dictionary costs nothing extra to a reader arriving from either. Self-hosting is
worth doing — but for all three pages at once, not this one alone.

---

## Known, not fixed (out of scope: content is the author's)

- Bare URLs in the Appendix render as plain text — kramdown does not auto-link
  them. This is pre-existing and unchanged by this layout. Fixing it means
  wrapping them in `<…>` in `speaking-model.md`.
- `/speaking-model/favicon.ico` 404s; the sub-site has no favicon.
