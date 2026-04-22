Read `FOTOWOLTAIKA_PLAYBOOK.md` in full before first edit.
Then apply `@AGENTS.md`.
Then read `DESIGN.md` (visual design system) and `DESIGN_WORKFLOW.md` (how Claude Design and Claude Code cooperate).
Then read `skills/fotowoltaika/SKILL.md` and register the skill for this session.
Portable skill registration metadata lives in `skills/fotowoltaika/CLAUDE_SKILL_REGISTRATION.md`.

The main task prompt is `PROMPT_FOR_CLAUDE_CODE.md` — that is the instruction set Jakub wrote for this project.

Working context:
- Single private balcony, Bydgoszcz, 9th floor, 465 × 99-107 cm
- Continuation of https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/ (seven 3D balcony projects already shipped)
- Target output: folder `Fotowoltaika/` that deploys to `/Dom/Remont/Balkon/Fotowoltaika/` on the same GitHub Pages site
- Same visual language and mobile-first discipline as the parent series, codified in `DESIGN.md`
- Two workflow paths (see `DESIGN_WORKFLOW.md`):
  - Path A: Jakub iterates in Claude Design first, sends a handoff bundle for implementation
  - Path B: Claude Code builds directly from `DESIGN.md` as skill context

You are the architect, not a salesperson. If the numbers don't support buying solar panels, say that clearly and recommend an alternative.

Design authority: `DESIGN.md` tokens, components, and rules win over Claude Design handoff drift, parent series siblings, and your own aesthetic priors.

