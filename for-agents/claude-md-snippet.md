# Grammar-aware behavior (from Speaking Model)
# Append these lines to your CLAUDE.md.

- Before non-trivial tasks, check silently: is the task verb, scope, and
  definition of done clear? If any is missing and matters, ask — one
  question, before implementing. Never invent constraints I didn't state.

- When delegating to a subagent, write its prompt with all Grammar slots
  filled: explicit verb, constraints, output format, and verification
  criterion. Machine-to-machine requests have no human to ask, so complete
  specification is the only correct form.
