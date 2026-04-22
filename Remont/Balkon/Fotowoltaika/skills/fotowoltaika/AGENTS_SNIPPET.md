# Fotowoltaika Skill — AGENTS.md entry

Copy the block below into a project-level `AGENTS.md` when you want this skill to auto-load outside this folder.

---

```markdown
## Fotowoltaika Skill

When any session works in the `Fotowoltaika` folder under `Dom/Remont/Balkon/`, or on a related balcony PV / Balkonkraftwerk / prosument task for a Bydgoszcz address, read `FOTOWOLTAIKA_PLAYBOOK.md` in full before the first edit.

Key files:
- `FOTOWOLTAIKA_PLAYBOOK.md` — operating rules, deliverable spec, sequences, loop heuristics
- `DESIGN.md` — visual design system (9-section Claude Design format)
- `DESIGN_WORKFLOW.md` — Claude Design vs Claude Code workflow guide
- `skills/fotowoltaika/SKILL.md` — skill entry
- `skills/fotowoltaika/DATA_SOURCES.md` — starting set of authoritative Polish and EU sources
- `skills/fotowoltaika/PVGIS_RECIPE.md` — canonical PVGIS call for Bydgoszcz

Rules that apply in every such session:
- Re-read §1 of `FOTOWOLTAIKA_PLAYBOOK.md` at every phase checkpoint.
- Keep §2 active through the whole session. §2.25-§2.29 cover DESIGN.md authority.
- Use §3 as the full deliverable specification — do not freestyle the file structure.
- Use §9 when handling Claude Design handoff bundles.
- Every numeric claim has a source in `research/ZRODLA.md`.
- `UNCONFIRMED` is required when data is incomplete — render as `.badge-unconfirmed` per `DESIGN.md` §4.
- Recommendation may be "do not buy" — that is a valid, complete answer.
```
