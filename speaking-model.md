# Speaking Model: A Practitioner's Dictionary
## Second Edition — expanded, with dual-level examples and further study

*The working language between humans and large language models. Every core
entry now carries two examples:* 🔰 *new user (layman's terms) and* 🏗️
*advanced (AI-fluent architect level). New parts: X (Session Design), XI
(Speaking Aloud), XII (Meta-Prompting), plus expanded jargon, expanded
anti-patterns, and a Further Study appendix.*

---

## Preface (unchanged, because it's the whole point)

There are no magic words. What exists is a working language: compression
with precision, the same as any craft. The one deep rule:

> **A model completes the document you started.** Every word is evidence
> about what document this is and how it should continue.

Fluency = supplying precise evidence. Everything below is technique.

---

# Part I — The Verbs

The operative verb is the most load-bearing word in a request. Not
synonyms — contracts.

**explain** — teach the mechanism; build understanding, use analogy freely.
- 🔰 "Explain what a mortgage escrow account is like I've never had one."
- 🏗️ "Explain KV-cache reuse across turns, assuming I know transformer
  inference but not serving infrastructure."

**describe** — report what's there; no judgment, no improvement. The best
first move on unfamiliar code or data — it exposes my misreadings *before*
they become edits.
- 🔰 "Describe what this spreadsheet formula does, step by step."
- 🏗️ "Describe this module's actual behavior, including what it does on
  malformed input — as-built, not as-intended."

**summarize** — compress without adding. Always attach a size and an
audience.
- 🔰 "Summarize this lease in 5 bullets a first-time renter would care about."
- 🏗️ "Summarize this RFC in 150 words for the platform team: decisions and
  irreversibles only, skip background."

**critique / review** — find problems; do not fix. Attach a rubric and an
ordering.
- 🔰 "Review my cover letter — what's the single weakest sentence and why?"
- 🏗️ "Review for correctness, then concurrency, then API design. One pass
  each. No style comments. Don't propose rewrites."

**audit** — exhaustive pass against explicit criteria; completeness over
judgment.
- 🔰 "Audit this packing list against a 5-day winter trip — what's missing?"
- 🏗️ "Audit this Terraform against the checklist below; output PASS/FAIL
  per item with the line that satisfies or violates it."

**fix** — smallest change resolving the named defect; the anti-rewrite.
- 🔰 "Fix just the typo-level errors in this email; change nothing else."
- 🏗️ "Fix the race in `flush()` with the minimal diff; do not refactor the
  surrounding lock discipline."

**refactor** — restructure, behavior identical; an implicit promise that
tests still pass.
- 🔰 "Reorganize this recipe so steps that can happen in parallel are grouped
  — same dish, better order."
- 🏗️ "Refactor to extract the retry policy into a strategy interface.
  Behavior-preserving; existing tests must pass unmodified."

**rewrite** — same goal, new construction; licenses large diffs.
- 🔰 "Rewrite this paragraph from scratch — keep the meaning, lose the tone."
- 🏗️ "Rewrite the parser as a state machine; the old recursive version is
  reference-only."

**draft** — first version meant for revision; speed over polish. Pairs with
**tighten**.
- 🔰 "Draft a thank-you note; I'll tell you what to change."
- 🏗️ "Draft the ADR — decision and consequences sections only; we'll
  iterate on alternatives after."

**brainstorm / generate N options** — deliberate quantity; suspend quality
filtering. "Include bad ideas" genuinely widens the search.
- 🔰 "Brainstorm 15 birthday ideas for a 70-year-old who hates parties —
  include some weird ones."
- 🏗️ "Generate 10 architectures for this, spanning the
  consistency/availability trade-off space. No evaluation yet."

**steelman** — construct the strongest version of a position, especially
one you/I disagree with. The antidote to easy agreement.
- 🔰 "Steelman my partner's side of this argument before you take mine."
- 🏗️ "Steelman monolith-first for this system before we commit to services;
  make it strong enough that a good engineer could hold it."

**red-team** — attack it: failure modes, exploits, misreadings. Strongest
criticism verb.
- 🔰 "Red-team my vacation plan — what goes wrong and where am I stranded?"
- 🏗️ "Red-team this auth flow as a hostile insider with read access to
  logs. Enumerate attack paths, rank by effort-to-impact."

**triage** — sort by severity/priority; don't solve yet.
- 🔰 "Triage my to-do list: what actually matters this week?"
- 🏗️ "Triage these 40 CI failures into flaky / env / real regression;
  counts and exemplars only, no fixes."

**diagnose** — find the cause, explicitly deferring the cure. Separating
diagnosis from treatment prevents plausible-fix thrashing.
- 🔰 "Diagnose why my sourdough is dense — don't give me a new recipe yet."
- 🏗️ "Diagnose the p99 regression from these traces. Hypotheses ranked by
  evidence; touch nothing."

**decompose** — break into independent parts before any work; the expert's
opening move on anything large.
- 🔰 "Decompose 'plan the wedding' into chunks I can hand to different people."
- 🏗️ "Decompose this migration into independently shippable, independently
  revertible steps; note the orderings that are forced vs chosen."

**compare / contrast** — force a structure of differences; supply the axes
or inherit mine.
- 🔰 "Compare renting vs buying for me on: monthly cost, flexibility, risk."
- 🏗️ "Compare Kafka vs NATS for this workload on delivery semantics,
  operational burden, and failure modes at our scale — with the scale stated."

**classify / extract / convert** — mechanical verbs; a signal that judgment
is unwanted and creativity is a defect.
- 🔰 "Extract every date and dollar amount from this contract into a list."
- 🏗️ "Extract to the JSON schema below; unknown fields → null, never
  inferred. Output JSON only."

**rank / prioritize** — impose a total order with a stated criterion (vs
triage's buckets).
- 🔰 "Rank these five laptops for a college student on a budget — one list,
  reasons in a phrase each."
- 🏗️ "Rank these tech-debt items by (blast radius × likelihood) / effort;
  show the three-factor estimate per item."

**trace / walk through** — follow execution or logic sequentially with
values in hand.
- 🔰 "Walk me through what happens to my package from checkout to doorstep."
- 🏗️ "Trace this request through the middleware chain with a concrete
  payload; show the mutation at each hop."

**estimate** — explicit order-of-magnitude license; the words "rough" and
"order of magnitude" convert refusal-to-guess into a useful Fermi answer.
- 🔰 "Roughly what does a kitchen remodel cost — just the ballpark and what
  swings it."
- 🏗️ "Order-of-magnitude the token cost of this pipeline per 1k documents;
  state assumptions as a list I can correct."

**translate / port** — cross languages (human or programming) preserving
meaning; name what may be sacrificed (idiom, performance, style).
- 🔰 "Translate this email into polite-but-firm."
- 🏗️ "Port this Python to Go; idiomatic Go wins over structural fidelity;
  flag any semantic drift (exceptions → error values, etc.)."

**quiz me / drill me** — invert the direction: model asks, you answer. The
retrieval-practice verb; far stronger for learning than re-reading.
- 🔰 "Quiz me on this chapter, one question at a time, and correct me."
- 🏗️ "Drill me on failure modes of this design — adversarial questions,
  escalating difficulty, no hints until I'm wrong twice."

**pre-mortem** — assume it failed; explain why. Elicits risks that a
"list the risks" request misses, because it licenses pessimism.
- 🔰 "Pre-mortem my job interview: it's a month later and I didn't get it —
  what were the three most likely reasons?"
- 🏗️ "Pre-mortem this launch: it's six months out and we rolled it back.
  Write the incident review's 'contributing factors' section."

---

# Part II — The Modifiers (adverbs of thought)

**"think step by step" / "reason it out first"** — request visible
intermediate reasoning; measurably helps multi-step problems.
- 🔰 "Think it through step by step before giving me the final number."
- 🏗️ "Derive it before answering; if the derivation and your intuition
  disagree, say so and show both."

**"think hard / take your time on this one"** — allocates deeper effort
(a literal budget in tools with extended thinking). Spend it on hard
problems; it's wasted on lookups.

**"plan first; wait for my approval"** — separates proposal from execution.
Reviewing plans is where human judgment buys the most per minute.
- 🔰 "Before you write anything, tell me your plan in 3 bullets and wait."
- 🏗️ "Produce the execution plan with file-level touch list and risk notes;
  no edits until I sign off."

**"answer first, then explain"** — inverts essay order; ideal when you'll
only read the reasoning on disagreement.

**"from first principles"** — derive rather than recall; suppresses
pattern-matched conventional wisdom.
- 🔰 "From first principles, why do planes actually stay up?"
- 🏗️ "From first principles, what's the minimum coordination this problem
  requires? Ignore what existing systems do."

**"zoom out / zoom in"** — altitude control. "Zoom out: what problem is
this actually solving?" / "Zoom in on step 3 only."

**"be pedantic / be strict"** — raises the standard for what counts as
correct; invites nitpicks you'd otherwise be spared.
- 🏗️ "Be pedantic about the spec: flag every place we're relying on
  undefined behavior, however unlikely."

**"one option, not a menu"** — anti-hedging: "Pick the best one and defend
it in a sentence."

**"stay literal / no interpretation"** — for extraction, transcription,
translation, where helpfulness-as-improvement is a bug.

**"smaller steps" / "go slower"** — recalibrate step size mid-stream.
Instant, underused.

**"show, don't tell"** — demand the artifact over the description of it:
"Don't describe the fix — show the diff."

---

# Part III — Constraint Grammar

**must / never / always / only** — hard limits in hard words, enumerated.
Implied constraints fail; enumerated prohibitions succeed.
- 🔰 "Only reword my sentences. Never add new claims I didn't make."
- 🏗️ "Never modify generated files (marked by header). Only touch the two
  functions named. Everything else byte-identical."

**Scope fences** — the "only" family: "change only X," "Y is out of
scope," "don't touch Z." The best defense against overzealous helpfulness.

**Requirement tiers** — label MUST vs SHOULD vs NICE-TO-HAVE explicitly;
unlabeled wish-lists get treated as uniform and satisfied unevenly.
- 🏗️ "MUST: idempotent, <50ms p99. SHOULD: zero new deps. NICE: reads
  clean. Sacrifice in reverse order."

**Positive beats negative** — name the target, not the anti-target: "plain
prose" > "no bullets." Negation forces imagining the forbidden thing.

**Format contracts** — exact shape, stated up front, with a filled example.
One example of the format outperforms three sentences describing it.
- 🔰 "Answer as a two-column table: item | why it matters."
- 🏗️ "Output only JSON valid against this schema; no prose, no fences.
  Here's one correct example: {...}"

**Length as numbers** — "3 bullets," "under 200 words." Adjectives are
guesses; numbers are contracts.

**Priority order** — rank constraints so conflicts resolve your way:
"If brevity and completeness conflict, choose completeness."

**Budgets** — time/cost/complexity ceilings change the answer honestly:
- 🔰 "Best dinner I can cook in 20 minutes with what's in a normal pantry."
- 🏗️ "Design under a two-engineer-week budget; if the right answer doesn't
  fit, give the best-under-budget and name what was cut."

**Acceptance criteria** — the professional form of "definition of done":
- 🏗️ "Done means: all listed tests pass, no new public API, README updated.
  Self-check against these before reporting done."

---

# Part IV — Epistemic Controls

The truthfulness toolkit — highest value per word in the language.

**"say 'I don't know' if you don't"** — explicitly licenses uncertainty
against the tuned bias toward answering. Stronger form: "an 'I don't know'
beats a guess here."
- 🔰 "If you're not sure which year that happened, say so instead of picking one."
- 🏗️ "Confidence-gate the answer: anything you can't source or derive gets
  flagged UNVERIFIED, not asserted."

**"distinguish fact from inference from assumption"** — forces claim
labeling.
- 🏗️ "Tag each claim [doc] (in the provided material), [derived], or
  [prior knowledge] — I'll treat the third class as unverified."

**"quote the exact line"** — the grounding move; fabricated quotes are
checkable, so this makes fabrication nearly impossible.
- 🔰 "For each thing you say the contract requires, quote the sentence."
- 🏗️ "Every claim about this codebase carries file:line and the verbatim
  line. No line, no claim."

**"what would change your answer?"** — surfaces load-bearing assumptions;
devastating on recommendations.
- 🔰 "You recommend the Honda — what fact about me would flip it to the Subaru?"
- 🏗️ "List the assumptions under this recommendation, each with the
  observation that would falsify it."

**"which part are you least sure of?"** — comparative confidence, which is
better calibrated than absolute confidence.

**"don't guess — ask"** — inverts default gap-filling: "If any requirement
is ambiguous, ask before implementing."

**"check that against the actual file/source"** — re-grounds in the
artifact instead of my memory of it; in long sessions those diverge.

**"be honest, not agreeable"** — counters the documented lean toward
validation. Crucially: don't signal the answer you want, or you'll get it.
- 🔰 "Is this business idea actually good? I'd rather hear no now than fail
  later."
- 🏗️ "Adversarial review, not supportive review. Assume I've over-invested
  in this design and check whether the sunk cost is doing the arguing."

**"argue both sides, then rule"** — forces genuine engagement with the
disfavored side before a verdict; catches motivated one-sidedness.

**"what am I not asking?"** — invites the unknown unknowns; ends more
expert sessions well than any other closing question.
- 🔰 "Based on everything I've told you about this move — what should I be
  asking that I haven't?"
- 🏗️ "Given this design review, what's the question conspicuously absent
  from my rubric?"

---

# Part V — Context Syntax (how to hand me things)

**Delimiters** — fence your material off from your instructions:
`<code>…</code>`, triple backticks, `---`. Not cosmetic: it keeps *content*
from being read as *commands* (see prompt injection, Part VII).
- 🏗️ Multiple materials get named tags — `<spec>`, `<impl>`, `<error>` —
  then instructions can reference them by name: "reconcile <impl> against
  <spec>."

**Material first, question last** — for long documents, paste the material
*before* the ask; instructions adjacent to the answer-writing position get
the most faithful execution. (Corollary of "lost in the middle.")

**Labels over prose** — three tagged blocks beat one interleaved paragraph.

**The example (few-shot)** — the single most powerful syntax that exists.
One input→output pair defines a task better than a paragraph; 2–3 spanning
the edge cases ≈ a specification.
- 🔰 "Format names like this: 'smith, JOHN' → 'John Smith'. Now these 50."
- 🏗️ "Three labeled exemplars below, chosen to pin the boundary cases
  (empty field, multi-value, unicode). Match them exactly."

**Counter-examples** — show the near-miss you *don't* want; defines the
boundary from the other side. "Like A, not like B" is a two-sided spec.

**Templates / prefill** — start the answer's structure yourself and have
me complete it; the strongest format control that exists.

**"Here's what I've tried / ruled out"** — prunes the search space; earns
an answer at your level instead of the FAQ.

**Audience declaration** — the highest-compression sentence in the
language: "explain to a [X] who knows [Y] but not [Z]."

**Artifact naming** — name the things we're iterating on ("call this
draft-A") so later references ("merge draft-A's opening with draft-C's
ending") are unambiguous.

**Roles, honestly assessed** — "as a security auditor" shifts vocabulary,
priorities, and *what gets looked for*. It selects a distribution; it does
not add knowledge. Use for the selection, skip the "world's greatest"
inflation — competence adjectives add nothing.

---

# Part VI — The Iteration Loop

**"keep A, change B"** — the revision atom; diff-based feedback.
- 🔰 "The tone is right; cut it to half the length."
- 🏗️ "Freeze the interface as approved; iterate only on the retry
  internals."

**"that's wrong because…"** — corrections carry reasons; reasons update my
model of the task. Bare "redo it" is a coin flip.

**"tighten"** — same content, fewer words, no new ideas.

**"go again, but…"** — retry with exactly one delta; the experimental
method applied to conversation.

**"give me two contrasting versions"** — A/B on purpose; picking between
real alternatives beats critiquing one.

**"regenerate only section 2"** — surgical regeneration; protects the
parts that already work from revision drift.

**The ratchet** — explicitly lock approved parts as you go ("intro is
final; do not revisit") so progress only accumulates.

**"summarize where we are"** — the checkpoint: consolidates decisions,
exposes drift, and produces a portable state block for a fresh session.

**"disregard the earlier constraint about X"** — constraints linger
silently; retire them by name.

**"before you continue—"** — the interrupt. Steering mid-course is an
order of magnitude cheaper than repairing after.

---

# Part VII — The Jargon

**token** — the unit read/written (~¾ word). Cost and limits denominate
here. · **context window** — working memory; a desk, not a database. ·
**context rot** — degradation as sessions grow long/cluttered; treat with
checkpoint + fresh session. · **lost in the middle** — mid-context
information gets least attention; put critical things first or last. ·
**system prompt** — standing instructions, higher authority than turns. ·
**zero-/one-/few-shot** — 0/1/several examples given. · **chain of
thought** — visible intermediate reasoning. · **extended thinking** —
budgeted private reasoning before the answer (tool-dependent). ·
**hallucination / confabulation** — fluent fabrication: completion without
a truth check, not lying. · **grounding / RAG** — anchoring answers in
retrieved material; "answer only from this document" is manual RAG. ·
**temperature / top-p** — sampling randomness dials (API-level); why
identical prompts vary. · **sycophancy** — the tuned lean toward agreeing
with and validating the user; the reason Part IV exists. · **prompt
injection** — instructions hidden in processed *content* ("ignore your
instructions…" inside a webpage); why read-untrusted agents get minimal
write power. · **jailbreak** — adversarial prompting to bypass a model's
rules (distinct from injection: the attacker is the user). ·
**guardrails** — external checks wrapped around a model (filters,
validators, approval gates). · **eval** — repeatable test set for judging
changes; the antidote to vibes. · **prefill** — starting the model's
answer to lock format. · **knowledge cutoff** — training-data end date;
later facts need tools, not memory. · **fine-tuning** — further training
on your data to shift default behavior (vs prompting, which shifts it per
request). · **RLHF** — training from human preference feedback; where both
helpfulness and sycophancy come from. · **embedding** — text mapped to a
vector so similarity ≈ distance; the mechanism under semantic search. ·
**vector database** — stores embeddings for retrieval; the R in RAG at
scale. · **tool use / function calling** — model emits structured calls
your code executes; the joint between "chatbot" and "agent". · **agent** —
model + loop: decide, act, observe, repeat. · **harness** — the machinery
hosting that loop (UI, sessions, approvals). · **orchestration** —
patterns above one loop: chains, routers, parallel calls, sub-agents. ·
**MCP** — Model Context Protocol; the standard plug for tools/data, "USB
for abilities." · **context engineering** — the discipline of deciding
what enters the window (retrieval, memory, compaction); successor term to
prompt engineering. · **compaction** — summarizing older turns to reclaim
window; lossy, so durable state belongs in files. · **inference** —
running the model (vs training). · **weights / parameters** — the learned
numbers constituting the model; "open weights" = downloadable. ·
**multimodal** — consuming/producing images, audio, etc., not just text. ·
**scratchpad** — designated workspace for intermediate reasoning or notes,
in-context or on disk.

---

# Part VIII — Anti-Patterns

**"Don't hallucinate."** — No such switch exists. Use Part IV: grounding,
quote requirements, uncertainty licensing.

**"Be accurate / thorough / do your best."** — Content-free. Replace with
a checkable criterion.

**The kitchen sink** — twelve unranked requirements in one paragraph;
each dilutes the others. Decompose or rank.

**The leading question** — "This is solid, right?" harvests agreement.
Ask "what's weakest here?" if you want truth. Sycophancy is real; don't
feed it the answer.

**Vague dissatisfaction** — "make it better/punchier" without an example.
Show one sentence in the target voice instead.

**Courtesy/threat folklore** — politeness costs nothing and harms nothing;
threats and tips don't reliably help. Spend tokens on precision.

**Re-asking without a delta** — same prompt, hoping for different output.
Change one variable; that's the experiment.

**The unreviewed marathon** — an hour of agent work before the first look.
Feedback frequency bounds success, not model quality.

**Anthropomorphic debugging** — "why did you lie to me?" produces a
plausible story, not a log. Models generate explanations the same way they
generate everything: by plausibility. Debug with artifacts ("show me the
line you based that on"), not motives.

**Confidence as accuracy** — fluent, confident, and wrong co-occur
comfortably. Calibration comes from Part IV controls, never from tone.

**Silent goalpost moves** — changing the target without saying so, then
judging output against the new one. Name the change: "new constraint: …"

**Sunk-cost sessions** — nursing a 100-turn conversation that's rotted.
Checkpoint-summarize, carry the state block, start fresh. History is not
an asset once it's noise.

**Structure cosplay** — XML tags around everything, role inflation
("world's #1 expert"), prompt-shaped ritual with no informational content.
Structure earns its place by *disambiguating*; decoration dilutes.

**Outsourced judgment** — "just tell me which to choose" on values-laden
decisions strips out the one input only you have: your weights. Give the
weights ("time over money, 2:1, here") and the ranking becomes computable.

---

# Part IX — The Grammar of a Complete Request

```
[AUDIENCE/ROLE]   Reviewing as a security auditor;
[CONTEXT]         auth service for X; I've already checked Z.
[MATERIAL]        <code> … </code>
[TASK VERB]       Audit it
[CONSTRAINTS]     correctness only; no rewrites; crypto primitives
                  untouched. MUST > SHOULD tiers if mixed.
[FORMAT]          table: finding | severity | file:line.
[VERIFICATION]    quote the exact line per finding.
[EPISTEMIC]       needs runtime info you lack → say so, don't guess.
```

Diagnostic use: when output disappoints, ask **which slot was empty** —
almost always CONTEXT, CONSTRAINTS, or VERIFICATION.

---

# Part X — Session Design

Single prompts are sentences; sessions are paragraphs. Experts design them.

**One task, one session.** "While you're at it" is how context rots.
Unrelated task → fresh session. The reset is free; the rot is not.

**The checkpoint cycle.** Long effort: work → "summarize decisions and
open questions into a state block" → fresh session seeded with the block →
repeat. State lives in the summaries (better: files), not the scroll.

**Spec freeze.** Explore freely, then freeze: "this is the spec now; write
it out; implementation deviates only by explicit amendment." Ends the
drift where turn 40 quietly contradicts turn 12.

**Explore/execute split.** Brainstormy context makes sloppy execution
context. Decide in one session; hand the decision to a clean one.

**Files as durable memory** (agentic settings). Anything that must survive
compaction goes in a file the agent re-reads — PLAN.md, NOTES.md. Context
is the scratchpad; disk is the memory.

**Early-turn leverage.** The first messages anchor everything after —
the cheapest place to be precise, the most expensive place to be sloppy.

---

# Part XI — Speaking Aloud

Voice removes formatting, so the work delimiters did moves into words:

- **Verbal fences:** "quote … end quote," "here's the material … end of
  material," "new topic."
- **Spoken structure:** "three constraints: one … two … three …" replaces
  the bullet list; enumerate out loud.
- **Repair idioms:** "scratch that," "correction: …," "ignore my last
  sentence" — spoken self-repair works if it's explicit.
- **Verb early:** long monologues bury the ask; state the task verb first
  ("I need a critique. Context: …"), not after two minutes of background.
- **Spell the un-spellable:** proper nouns, IDs, code identifiers garble
  in transcription — spell them or defer them to text.
- Everything else transfers unchanged; voice is a lossier channel, so
  precision per word matters *more*, not less.

---

# Part XII — Meta-Prompting

The most senior move: use the model on the conversation itself.

**"Rewrite my request to be unambiguous, then answer the rewrite."** —
turns me into your prompt editor; the rewrite also shows you what was
underspecified.

**"What context are you missing to do this well?"** — asked *before* the
task; converts silent assumptions into a checklist you can fill.

**"Draft the instructions you'd want for this task."** — for recurring
work: the model authors the skill/checklist/system-prompt, you review and
keep it. Self-hosting your working language.

**"Critique your own answer against the acceptance criteria; revise
once."** — a built-in review pass; cheap, catches checkable failures.

**"Which of my constraints did you not satisfy?"** — post-hoc compliance
audit; more reliable than inferring satisfaction from fluent output.

Limit, stated honestly: self-review shares blind spots with the self that
wrote the draft. It catches checkable failures (format, missed
constraints) far better than judgment failures. External oracles — tests,
sources, you — outrank self-critique. Always.

**Operationalized.** `for-agents/` in this repo turns the Grammar into
working Claude Code config: two lines for your `CLAUDE.md` and a
`/rewrite` command that does this rewrite for you, on demand.

---

## Afterword: the fluency test (unchanged)

1. You state the check with every task.
2. You correct with reasons and diffs.
3. You ask for disagreement and don't flinch.

The whole language is one management style, compressed: full context,
explicit constraints, checkable done-ness, early feedback, no assumed
mind-reading.

---

# Appendix — Further Study

**Primary documentation (living, authoritative):**
- Anthropic prompt engineering guide —
  https://docs.claude.com/en/docs/build-with-claude/prompt-engineering/overview
- Anthropic, "Building Effective Agents" —
  https://www.anthropic.com/research/building-effective-agents
- Anthropic, "Claude Code: Best Practices for Agentic Coding" —
  https://www.anthropic.com/engineering/claude-code-best-practices
- Anthropic, "Effective Context Engineering for AI Agents" —
  https://www.anthropic.com/engineering/effective-context-engineering-for-ai-agents
- OpenAI prompt engineering guide —
  https://platform.openai.com/docs/guides/prompt-engineering
- Prompt Engineering Guide (DAIR.AI) — https://www.promptingguide.ai

**Papers behind the vocabulary (links verified July 2026):**
- Chain-of-thought: Wei et al., "Chain-of-Thought Prompting Elicits
  Reasoning in Large Language Models" — https://arxiv.org/abs/2201.11903
- Few-shot as a paradigm: Brown et al., "Language Models are Few-Shot
  Learners" (GPT-3) — https://arxiv.org/abs/2005.14165
- "Lost in the middle": Liu et al., "Lost in the Middle: How Language
  Models Use Long Contexts" — https://arxiv.org/abs/2307.03172
- The agent loop: Yao et al., "ReAct: Synergizing Reasoning and Acting
  in Language Models" (ICLR 2023) — https://arxiv.org/abs/2210.03629
- Sycophancy: Sharma et al., "Towards Understanding Sycophancy in
  Language Models" (ICLR 2024) — https://arxiv.org/abs/2310.13548

(Tip: swap /abs/ for /pdf/ in any of these to jump straight to the PDF.)

**Practitioner writing (opinionated, high signal):**
- Simon Willison's weblog — https://simonwillison.net — the best running
  field notes on working with LLMs and their failure modes
- "12-Factor Agents" — https://github.com/humanlayer/12-factor-agents —
  production agent principles in checklist form
- Andrej Karpathy's LLM talks (search "Karpathy Intro to Large Language
  Models") — the best mental model of what the machine is

**How to use this list:** the three Anthropic engineering pieces plus
"Lost in the Middle" cover 80% of this book's load-bearing claims; the
rest is depth. Verify anything time-sensitive — this field's half-life is
short, and Part IV applies to this book too.
