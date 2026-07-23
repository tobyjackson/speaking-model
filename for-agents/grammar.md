# The Grammar of a Complete Request (compact reference)

A model completes the document you started. Each slot supplies evidence.

| Slot | What it supplies | Example |
|---|---|---|
| ROLE / AUDIENCE | What to look for; who it's for | "reviewing as a security auditor" |
| CONTEXT | Situation; what's already ruled out | "auth service for X; I've checked Z" |
| MATERIAL | The artifact, fenced | `<code>…</code>` |
| VERB | The contract | "audit it" (≠ review ≠ fix ≠ rewrite) |
| CONSTRAINTS | Hard limits, ranked | "correctness only; never touch crypto; MUST > SHOULD" |
| FORMAT | Exact output shape | "table: finding | severity | file:line" |
| VERIFICATION | How success is checked | "quote the exact line per finding" |
| EPISTEMIC | Honesty over guessing | "if you lack runtime info, say so — don't guess" |

Diagnostic: when output disappoints, ask which slot was empty — almost
always CONTEXT, CONSTRAINTS, or VERIFICATION.

Full dictionary: https://tobyjackson.com/speaking-model/ (CC BY 4.0)
