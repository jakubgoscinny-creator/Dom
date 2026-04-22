# Fotowoltaika Skill — Claude Code Skill Registration

Use this metadata when registering the Fotowoltaika playbook as a Claude Code skill or project skill.

---

## Skill name
`fotowoltaika-balkonowa`

## Trigger description

```text
Use this skill whenever working in the Fotowoltaika folder under Dom/Remont/Balkon, or on any balcony PV / Balkonkraftwerk / prosument research or implementation task for a Bydgoszcz address. Triggers include mentions of: Fotowoltaika, Balkonkraftwerk, panele balkonowe, mikrofalownik balkonowy, prosument balkonowy, PV balkonowa, net-billing, ENEA Operator Bydgoszcz, balustrada PV, lub konkretnych wymiarów balkonu 465 cm.
```

## SKILL.md location
`skills/fotowoltaika/SKILL.md`

## Trigger keywords
- Fotowoltaika
- Balkonkraftwerk
- panele balkonowe
- mikrofalownik balkonowy
- prosument balkonowy
- PV balkonowa
- net-billing prosument
- ENEA Operator Bydgoszcz
- balkon 465
- balustrada PV
- kalkulator fotowoltaika balkon

## What this skill does

When triggered, it tells Claude Code to:

1. Read `FOTOWOLTAIKA_PLAYBOOK.md` in full before the first edit.
2. Read `DESIGN.md` at project root before any visual or UI work.
3. Read `DESIGN_WORKFLOW.md` before deciding Path A (Claude Design first) vs Path B (Claude Code direct).
4. Read `skills/fotowoltaika/DATA_SOURCES.md` before running any research tool call.
5. Read `skills/fotowoltaika/PVGIS_RECIPE.md` before any annual yield calculation.
6. Re-read `FOTOWOLTAIKA_PLAYBOOK.md` §1 before every phase checkpoint.
7. Apply hard rules from §2 during the whole session (including §2.25-§2.29 about DESIGN.md authority).
8. Use §3 as the deliverable specification for every file.
9. Use §4 to detect and break loops.
10. Use §5 for recurring shell choreography (deploy, local preview, PVGIS lookup).
11. Use §6 to separate environment failures from model failures.
12. Use §7 to shape sub-prompts without restating the whole playbook.
13. Use §9 when handling Claude Design handoff bundles.

## What this skill does NOT do

- It does not replace source reads for Polish electrical regulations.
- It does not authorize estimating PVGIS yield from memory.
- It does not permit rewriting parent `Balkon/index.html` without explicit user consent.
- It does not authorize using LLM outputs as citable sources.

## Portability

This skill is scoped to a single Bydgoszcz balcony. If applied to another location, the following must be updated:
- Coordinates in `PVGIS_RECIPE.md`
- OSD (distribution operator) in `DATA_SOURCES.md` and `FOTOWOLTAIKA_PLAYBOOK.md` §2 rule 5
- Balcony dimensions and orientation in `FOTOWOLTAIKA_PLAYBOOK.md` §3.5
- Floor number in calculator defaults
- Any references to `jakubgoscinny-creator.github.io` deploy path

The operating structure (4 layers, hard rules, loop heuristics) is portable as-is.
