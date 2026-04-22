# Fotowoltaika Balkonowa Skill

Use this skill whenever the session works in the `Fotowoltaika` folder under the `Dom/Remont/Balkon` series or on any adjacent balcony PV / Balkonkraftwerk research task for a Bydgoszcz address.

## Trigger

Trigger this skill for any mention of:
- `Fotowoltaika`
- `Balkonkraftwerk`
- `panele balkonowe`
- `mikrofalownik balkonowy`
- `prosument balkonowy`
- `PV balkonowa`
- `net-billing prosument`
- `ENEA Operator Bydgoszcz`
- `balkon 465`
- `balustrada PV`

## Mandatory load order

1. Read `FOTOWOLTAIKA_PLAYBOOK.md` in full before the first edit.
2. Read `DESIGN.md` at project root before any visual or UI implementation.
3. Read `DESIGN_WORKFLOW.md` before deciding between Claude Design first (Path A) or Claude Code direct (Path B).
4. Read `DATA_SOURCES.md` in this skill folder before running any research tool call.
5. Read `PVGIS_RECIPE.md` in this skill folder before any annual yield calculation.
6. Re-read `FOTOWOLTAIKA_PLAYBOOK.md` §1 before every phase checkpoint.
7. Keep `FOTOWOLTAIKA_PLAYBOOK.md` §2 active during the whole session.
8. Use `FOTOWOLTAIKA_PLAYBOOK.md` §3 as the specification when writing any deliverable.
9. Use `FOTOWOLTAIKA_PLAYBOOK.md` §9 when handling Claude Design handoffs or proposing a Claude Design detour.

## How to use this skill

- For Faza 1 (research): start with `DATA_SOURCES.md`, then `FOTOWOLTAIKA_PLAYBOOK.md` §3.1-§3.4.
- For Faza 2 (app): reference `../projekt_E_ogrod_srodziemnomorski.html` as the structural template, `DESIGN.md` as the visual authority, then `FOTOWOLTAIKA_PLAYBOOK.md` §3.5-§3.6.
- For Faza 3 (business case + plan): `FOTOWOLTAIKA_PLAYBOOK.md` §3.7-§3.13.
- For Faza 4 (deploy): `FOTOWOLTAIKA_PLAYBOOK.md` §5.2.
- For handling a Claude Design handoff bundle: `FOTOWOLTAIKA_PLAYBOOK.md` §9 and `DESIGN_WORKFLOW.md`.

## Required behaviors

- Treat the playbook as operating rules, not background reading.
- `DESIGN.md` is the visual contract — tokens, type, components, layout, elevation, responsive rules, do's/don'ts.
- Every numeric claim has a source in `research/ZRODLA.md`.
- `UNCONFIRMED` is a legitimate, required marker when data is incomplete — render as `.badge-unconfirmed`, not a tooltip.
- Calculator outputs three headline numbers: annual production (kWh), annual savings (PLN), payback (years) — styled per `DESIGN.md` §4.
- The recommendation may be "do not buy"; that is a valid, complete answer if numbers support it.
- Polish text is workshop-tone, not marketing-tone. No emoji, no AI-slop, no gradients, no glassmorphism.

## What this skill does NOT do

- It does not replace source reads for Polish electrical code or ENEA Operator documentation.
- It does not grant authority to estimate PVGIS yield from memory.
- It does not permit rewriting the parent `Balkon/index.html` without explicit user consent.

## Files in this bundle

- `FOTOWOLTAIKA_PLAYBOOK.md` — main operating tool at project root
- `DESIGN.md` — design system authority at project root (9-section Claude Design format)
- `DESIGN_WORKFLOW.md` — Claude Design vs Claude Code workflow guide at project root
- `SKILL.md` — this file
- `DATA_SOURCES.md` — curated starting list of authoritative Polish and EU sources
- `PVGIS_RECIPE.md` — canonical PVGIS API call for Bydgoszcz
- `AGENTS_SNIPPET.md` — portable Codex registration text
- `CLAUDE_SKILL_REGISTRATION.md` — portable Claude Code registration metadata
