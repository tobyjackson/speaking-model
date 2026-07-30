---
description: Restate a vague request with all eight Grammar slots filled, so the model has the evidence it needs before acting
argument-hint: [request to rewrite — omit to use my previous message]
---

Rewrite the request below so it is unambiguous, using the Grammar of a
Complete Request. The full table is inlined here — use these slots exactly,
including the ROLE / AUDIENCE naming:

| Slot | What it supplies | Example |
|---|---|---|
| ROLE / AUDIENCE | What to look for; who it's for | "reviewing as a security auditor" |
| CONTEXT | Situation; what's already ruled out | "auth service for X; I've checked Z" |
| MATERIAL | The artifact, fenced | `<code>…</code>` |
| VERB | The contract | "audit it" (≠ review ≠ fix ≠ rewrite) |
| CONSTRAINTS | Hard limits, ranked | "correctness only; never touch crypto; MUST > SHOULD" |
| FORMAT | Exact output shape | "table: finding \| severity \| file:line" |
| VERIFICATION | How success is checked | "quote the exact line per finding" |
| EPISTEMIC | Honesty over guessing | "if you lack runtime info, say so — don't guess" |

Diagnostic: when output disappoints, ask which slot was empty — almost
always CONTEXT, CONSTRAINTS, or VERIFICATION.

Full dictionary: https://tobyjackson.com/speaking-model/ (CC BY 4.0)

## Material
$ARGUMENTS

If the above is empty, target my most recent request in this conversation
instead, and say which message you picked.

## Rules
- Fill each slot from what the request actually states or the conversation establishes.
- Mark every slot you had to GUESS with [ASSUMED] and state the assumption.
- Leave a slot as "(not needed)" when the task genuinely doesn't require it — simple asks stay simple.

## Format
Return the eight slots as a labeled list, one slot per line, in table order
(ROLE / AUDIENCE, CONTEXT, MATERIAL, VERB, CONSTRAINTS, FORMAT, VERIFICATION,
EPISTEMIC). Follow it with a one-line note naming which slots were empty in
the original.

## Verification
Before showing me the rewrite, confirm every [ASSUMED] tag has a stated
assumption beside it, and that no slot is silently blank — each is either
filled or explicitly "(not needed)".

Show me the rewrite and WAIT for my confirmation before executing anything.
On confirmation, execute the rewritten request as written.
