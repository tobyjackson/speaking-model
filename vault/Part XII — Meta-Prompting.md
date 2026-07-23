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

---
[[Speaking Model — index|index]]
