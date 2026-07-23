# Speaking Model
### A practitioner's dictionary for the working language between humans and AI models

There are no magic words for talking to AI — but there *is* a working
language, the same way surgery and aviation have one: compression with
precision. This book catalogs it. The verbs that act as contracts
(`refactor` ≠ `rewrite` ≠ `fix`), the constraint grammar that actually
gets obeyed, the epistemic controls that trade fluent confidence for
truth, and the anti-patterns that feel powerful and aren't.

One rule underneath all of it:

> **A model completes the document you started.** Every word you write is
> evidence about what document this is and how it should continue.

Everything in this book is technique for supplying precise evidence.

## Who this is for

- **New users** — every core entry has a plain-language example (🔰)
- **Engineers & architects** — every core entry has an advanced example (🏗️)
- **Anyone tired of cargo-cult prompt tips** — the preface explains why
  "power words" are astrology, and what works instead

## The map

| Part | What it covers |
|---|---|
| I — The Verbs | Operative verbs as contracts, with dual-level examples |
| II — The Modifiers | Adverbs of thought: plan-first, first-principles, zoom |
| III — Constraint Grammar | must/never/only, scope fences, format contracts, budgets |
| IV — Epistemic Controls | The truthfulness toolkit — highest value per word |
| V — Context Syntax | Delimiters, few-shot examples, prefills, audience clauses |
| VI — The Iteration Loop | Diff-based feedback, ratchets, checkpoints |
| VII — The Jargon | The nouns of the trade, agent-era included |
| VIII — Anti-Patterns | What feels powerful and isn't |
| IX — The Grammar | The complete request, slot by slot — a diagnostic tool |
| X — Session Design | Prompts are sentences; sessions are paragraphs |
| XI — Speaking Aloud | The language over voice |
| XII — Meta-Prompting | Using the model on the conversation itself |
| Appendix | Further study: docs, papers (verified links), practitioners |

**Start here:** read the Preface and Part IX (the Grammar). Those two
alone change how you write your next request. The rest is vocabulary you
acquire as you need it.

## The fluency test

You speak this language when three habits are unconscious:
1. You state the check with every task — how we'll both know it's right.
2. You correct with reasons and diffs — "keep A, change B, because C."
3. You ask for disagreement and don't flinch when you get it.

## In this repo

- **[The book](https://github.com/tobyjackson/speaking-model/blob/main/speaking-model.md)** — the full dictionary
- **[Cheat sheet](https://tobyjackson.com/speaking-model/cheatsheet/)** — the Grammar and the core vocabulary on one page
- **[Prompt linter](https://tobyjackson.com/speaking-model/linter/)** — paste a prompt, see which grammar slots you left empty; runs entirely in your browser
- **[Obsidian vault](https://github.com/tobyjackson/speaking-model/tree/main/vault)** — the book as ~140 linked notes; [download the zip](https://github.com/tobyjackson/speaking-model/releases/latest/download/speaking-model-vault.zip), unzip, open in Obsidian ("Open folder as vault")

## Contributing

New entries welcome. A good entry has: the term, a one-sentence
definition of the *contract* it makes, and both a 🔰 and 🏗️ example. Open
a PR; keep the tone of the book — precise, honest, no astrology.

## Honesty note

This field's half-life is short. The principles here are durable; verify
anything time-sensitive against the primary sources in the Appendix.
Part IV of the book applies to the book itself.

## License

CC BY 4.0 — share and adapt freely, with attribution.

---

*Drafted in collaboration with Claude (Anthropic), July 2026. The
collaboration is itself a demonstration of Part VI.*