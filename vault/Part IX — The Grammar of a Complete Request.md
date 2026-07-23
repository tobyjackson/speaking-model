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
[[Speaking Model — index|index]]
