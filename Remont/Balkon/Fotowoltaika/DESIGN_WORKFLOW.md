# DESIGN_WORKFLOW.md

How this project uses Claude Design (launched April 2026) and Claude Code together.

Claude Design is Anthropic's design-focused workspace at `https://claude.ai/design`. It has a chat pane on the left and a live canvas on the right, ingests a `DESIGN.md` as source of truth, scaffolds a full design system, produces interactive prototypes, and exports a handoff bundle to Claude Code when a design is ready to build.

`DESIGN.md` in this folder is the visual contract for the whole project. It's the design-side equivalent of `AGENTS.md` / `FOTOWOLTAIKA_PLAYBOOK.md`.

---

## The two paths

### Path A — Claude Design first, Claude Code second (recommended)

Best when: the UI involves nuanced layout or interaction and I want to see several aesthetic directions before committing; or when I want the design system to be reusable for future `Balkon/` siblings.

Steps:

1. Open `https://claude.ai/design/#org`, click **Create new design system**.
2. Upload `DESIGN.md` from this folder under **Add assets** on the setup screen.
3. Claude Design scaffolds the design system from the 9 sections — colors, type, components, UI kit, `SKILL.md` — usually in a few minutes. Output lands in the project's Design System tab.
4. Create a new prototype in the same project. Prompt example:
   > "Build the Fotowoltaika calculator screen with the three headline numbers, the input panel, and a placeholder for the Three.js viewport. Follow the DESIGN.md rules strictly. Mobile-first single column."
5. Iterate on the canvas with inline comments and chat. Request variants where the call is close.
6. Ask Claude Design to review for accessibility and contrast before handoff.
7. When the design is locked, click **Export → Handoff to Claude Code**. This packages the design, the tokens, and the design-intent notes into a bundle.
8. Open Claude Code in the `Fotowoltaika/` folder. Feed it the handoff bundle as the first message along with `PROMPT_FOR_CLAUDE_CODE.md`.
9. Claude Code implements the design in `app/index.html`, wiring up the calculator state, Three.js scene, and PVGIS data. The `FOTOWOLTAIKA_PLAYBOOK.md` rules still apply — design handoff does not replace engineering discipline.

### Path B — Claude Code direct with DESIGN.md as skill context

Best when: I want to move fast, the first visual direction is good enough, or when I'm in a Claude Code session and don't want to context-switch.

Steps:

1. Open Claude Code in the `Fotowoltaika/` folder.
2. First message references `DESIGN.md` explicitly along with `PROMPT_FOR_CLAUDE_CODE.md`:
   > "Przeczytaj `PROMPT_FOR_CLAUDE_CODE.md` i `DESIGN.md`. Implementuj Fazę 2 (app) trzymając się tokenów i zasad z DESIGN.md."
3. Claude Code uses `DESIGN.md` the same way it would use an `AGENTS.md` — as a set of rules to satisfy, not a pretty reference.
4. When the prototype is shippable, preview locally and deploy.

Path B skips the visual-exploration phase. If the first aesthetic feels wrong, stop, go to Path A, and come back with a handoff bundle.

---

## When to re-open Claude Design after Path B has started

Valid triggers to pause Claude Code and jump into Claude Design:

- More than two rounds of "make it look nicer" feedback in Claude Code without convergence.
- A request that is fundamentally about layout variation, not implementation ("show me three versions of the 3D viewport placement").
- Accessibility or contrast review. Claude Design has tighter visual tooling for this.
- Final polish before deploy — a last once-over on typography rhythm and spacing consistency.

Invalid triggers (stay in Claude Code):

- A bug in the calculator math.
- A PVGIS API change.
- Polish copy corrections.
- Any non-visual rule from `FOTOWOLTAIKA_PLAYBOOK.md`.

---

## Using `DESIGN.md` outside this project

The file is portable. To reuse it for a sibling balcony project (e.g. future Projekt G or H in the series):

1. Copy `DESIGN.md` to the new project folder.
2. Adjust §1 Visual Theme to reflect the new mood if needed.
3. Keep §2 (colors), §3 (type), §4 (components), §6 (elevation) as-is unless the new project intentionally diverges.
4. Update §9 Agent Prompt Guide with project-specific references.
5. Feed to Claude Design or Claude Code the same way.

The `SKILL.md` that Claude Design generates from this file can also be saved to a personal skills folder so Jakub can invoke "use the Balkon series design system" in any future Claude project without re-uploading.

---

## Handoff from Claude Design to Claude Code — what to verify

When a Claude Design handoff bundle lands in Claude Code, verify before implementing:

1. Token names in the handoff bundle match `DESIGN.md` §2 and §3. If they drifted, reconcile with DESIGN.md as source of truth.
2. The three calculator headline numbers use `--text-headline` with tabular-nums. If the handoff rendered them with a different scale, correct it.
3. `UNCONFIRMED` badges are present wherever the underlying data is flagged. Claude Design may not know which fields are UNCONFIRMED — that is Claude Code's job to wire up from the research layer.
4. Three.js scene integration point is a `<canvas>` or `<div>` with a clear ID. The scene itself is not built by Claude Design — Claude Code implements it based on `../projekt_E_ogrod_srodziemnomorski.html` pattern.
5. Mobile-first CSS order. If Claude Design output is desktop-first, refactor to min-width media queries.

If any of these fail, fix them in the implementation rather than bouncing back to Claude Design. The design system is the authority on aesthetics; the engineering constraints are the authority on structure.

---

## Known limitations (from Claude Design support docs)

- Inline comments occasionally disappear before Claude reads them. Workaround: paste comment text into chat.
- Compact layout mode can trigger save errors. Use full view mode.
- Very large repos linked into Claude Design may cause lag. Link `Fotowoltaika/` subdirectory only, not the whole `Balkon/` parent or the OneDrive root.
- If a "chat upstream error" appears, start a new chat tab in the same project.
