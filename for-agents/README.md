# for-agents/

The book's Grammar of a Complete Request, operationalized for Claude Code
(and adaptable to any harness that takes markdown instructions).

Three mechanisms, matched to three triggers — deliberately NOT one blanket
"always rewrite" rule, because an agent that silently fills your empty slots
is guessing your intent. When a critical slot is empty, the correct automated
behavior is the book's own control: don't guess — ask.

| File | Mechanism | Trigger |
|---|---|---|
| `claude-md-snippet.md` | Two lines for your CLAUDE.md | Always on, fires only when ambiguity matters |
| `commands/rewrite.md` | `/rewrite` slash command | Deliberate, on demand |
| `grammar.md` | Compact Grammar reference | Read-on-demand by the above |

## Install (Claude Code)

1. Append the contents of `claude-md-snippet.md` to `~/.claude/CLAUDE.md`
   (global) or your project's `CLAUDE.md`.
2. Copy `commands/rewrite.md` to `~/.claude/commands/rewrite.md`
   (personal) or `.claude/commands/rewrite.md` (project).
3. Optionally keep `grammar.md` in your project so the command and the
   agent can reference it by path.

Usage: `/rewrite fix the login thing when users have spaces in emails`
→ the agent returns the request rewritten slot-by-slot, with every slot it
had to guess marked `[ASSUMED]`, and waits for your confirmation.

From [Speaking Model: A Practitioner's Dictionary](https://tobyjackson.com/speaking-model/) — CC BY 4.0.
