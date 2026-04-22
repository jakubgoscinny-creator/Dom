# FOTOWOLTAIKA_PLAYBOOK.md

Purpose: operating playbook for the Fotowoltaika Balkonowa project. One private balcony in Bydgoszcz, one real purchasing decision. Not a demo.

Load order for any agent:
1. Read §1 before the first edit.
2. Keep §2 active during the whole session.
3. Use §3 as the full deliverable specification.
4. Use §4 when you feel a loop, oscillation, or retry spiral.
5. Use §5 instead of re-inventing recurring shell choreography.
6. Read §6 before blaming the model for what may be the environment.
7. Read §7 when the prompt is broad, aesthetic, or likely to drift.
8. Use §8 to extend the playbook after any new lesson.
9. Read §9 before writing any design token or visual decision. Authority is `DESIGN.md` (at project root) and `DESIGN_WORKFLOW.md`.

Evidence style:
- Every number cited in research must include source link and date of access.
- `UNCONFIRMED` is a real, acceptable status. "Probably around 600W" is not.

---

## §1. First-turn anchor

To jest decyzja zakupowa dla jednego balkonu, nie generyczny przewodnik po fotowoltaice. Piszesz dla jednego człowieka w Bydgoszczy, nie dla odbiorców bloga. Liczby muszą być lokalne i aktualne. Język polski, warsztatowy, bez AI-slopu. Kalkulator ma pokazać mi jednoznacznie czy to się opłaca, czy nie — i w wersji „nie” ma to powiedzieć wprost. Mobile-first, bo czytam to z telefonu leżąc wieczorem. Wizualizacja 3D spójna z resztą serii balkonowej — ten sam setup Three.js co projekt E.

---

## §2. Hard rules

1. Read this file in full before the first edit. Re-read §1 at every phase checkpoint.
2. Every number in any deliverable must be traceable to a source with date of access listed in `research/ZRODLA.md`.
3. PVGIS is the authoritative annual yield source. Do not estimate from memory or from a sales brochure. Recipe in `skills/fotowoltaika/PVGIS_RECIPE.md`.
4. Net-billing is the Polish system from April 2022 for new prosumers. Verify current rules at `www.ure.gov.pl` before writing any calculation that depends on billing model.
5. ENEA Operator is the OSD (distribution operator) in Bydgoszcz. Verify at `www.operator.enea.pl` before assuming; do not confuse with ENEA SA (the retailer).
6. Mounting panels on a multi-family building balcony balustrade in Poland requires consent from the spółdzielnia mieszkaniowa or wspólnota mieszkaniowa. Treat this as a blocking prerequisite, not a footnote.
7. Polish UI and documentation uses NFC-composed diacritics. Files are UTF-8 without BOM. If diacritics start corrupting, stop and fix encoding, do not retry the write.
8. Mobile validation means real iPhone Safari. Chrome DevTools at `390x844` is preview, not proof. Mark untested as `UNCONFIRMED` in `app/README.md`.
9. Any fixed overlay in the calculator inside a transformed ancestor must render through `createPortal(..., document.body)` equivalent (or plain fixed-position at root).
10. On every modal, sheet, or fixed overlay open, lock both `<body>` and `<html>` scroll and release them on close.
11. Use `env(safe-area-inset-bottom)` for bottom-docked mobile UI.
12. Three.js scene setup must be functionally aligned with the parent series (see `../projekt_E_ogrod_srodziemnomorski.html`). Same camera conventions, same lighting pattern, same day/night toggle if used.
13. Deploy target is GitHub Pages subpath `/Dom/Remont/Balkon/Fotowoltaika/`. Any absolute path reference must respect this subpath or use relative paths.
14. Do not rewrite the parent `index.html` (the seven-card grid page) without explicit permission. If the project should appear there as an eighth card, ask first.
15. `CONTINUITY.md` updates are short append blocks, never blind full-file rewrites.
16. If a research claim is contradicted between sources, keep both with attribution, flag `UNCONFIRMED`, and recommend a phone call (ENEA infolinia, spółdzielnia) to resolve.
17. Executive summary in every `.md` file: max 5 bullet points, every bullet traceable to numbers in the body.
18. The calculator's three always-visible headline numbers: annual production (kWh), annual savings (PLN), simple payback (years). Everything else is collapsible.
19. Do not recommend a product the agent has not personally verified is available for purchase in Poland in the current month. If availability is uncertain, mark `UNCONFIRMED`.
20. Do not use emoji or AI-slop phrases ("unleash", "revolutionary", "odkryj magię") in any user-facing Polish text.
21. IRR and NPV calculations use a discount rate assumption. State it in `BUSINESS_CASE.md`. Default: 5% real (inflation-adjusted), justified with reference to current Polish 10-year bond yield. If that yield changed materially since playbook write-date, update the assumption.
22. Price forecasts for electricity (kWh) are a known weak point. Provide three scenarios (constant, +3%/yr real, -2%/yr real) and present the recommendation robust across all three, or flag which scenario changes it.
23. If the recommendation in `REKOMENDACJA.md` is "do not buy", it must still include: (a) the specific scenarios under which the answer would flip to "buy", and (b) actionable alternatives with their own business cases.
24. No step in the execution plan may assume Jakub has electrician SEP qualifications. The plan must identify which steps require a certified electrician.
25. `DESIGN.md` at project root is the single source of truth for visual and interaction design. Tokens, type scale, components, layout, elevation, and responsive rules in that file win over any other reference — including handoff bundles from Claude Design, prior series siblings, or LLM aesthetic priors.
26. If a Claude Design handoff bundle contains tokens or components that contradict `DESIGN.md`, reconcile toward `DESIGN.md` in the implementation and note the drift in `CONTINUITY.md`. Do not silently accept the handoff version.
27. The three calculator headline numbers (annual production kWh, annual savings PLN, payback years) use the `.metric` pattern from `DESIGN.md` §4 with `JetBrains Mono`, `tabular-nums`, Polish decimal comma, and narrow no-break space thousands separator. This is not stylistic preference — it is a readability requirement for number comparison across states.
28. `UNCONFIRMED` is a first-class UI state per `DESIGN.md` §4 and §7. Render as the `.badge-unconfirmed` component wherever the underlying data is flagged. Never reduce to a footnote, tooltip, or muted gray text.
29. Do not introduce gradients, glassmorphism, or other generic-AI-aesthetic decorations. The palette and elevation in `DESIGN.md` §2 and §6 are deliberately constrained.

---

## §3. Deliverable specification

### §3.1 `research/STAN_RYNKU_2026.md`

Sections required:
- Executive summary (5 bullets max)
- Balcony PV market in Poland: size, growth, key distributors, price trend last 12 months
- Balcony PV market in Germany (Balkonkraftwerk): regulatory precedent, price reference, product maturity
- EU legal framework: current status of plug-in PV for balconies, any 2025/2026 updates
- Technology overview: mikrofalownik (microinverter) vs direct-to-grid vs off-grid-with-battery
- Typical power classes available: 300W / 600W / 800W / 2×400W — what's actually sold in Poland
- What is NOT balcony PV: standalone garden kits, roof installations, agricultural PV — scope fence

Every numeric claim: source link + date.

### §3.2 `research/PRODUKTY.md`

Shortlist of 8-15 actually-available-in-Poland kits. For each:
- Brand, model, supplier URL (direct product page, not homepage)
- Rated power (Wp)
- Inverter type and max output
- Price in PLN (with delivery cost if listed)
- Warranty (panel / inverter / performance)
- Physical dimensions (must fit 465 cm balustrade)
- Mounting hardware included or separate
- Owner opinions (forum muratordom, elektroda, Allegro reviews) — at least one real link
- Date of price check
- Agent's one-line verdict

Order: by best match for Jakub's balcony (price/performance/fit), not alphabetical.

### §3.3 `research/PRZEPISY_PL.md`

Sections:
- Prosument regulations (net-billing from 2022, current rules verified at ure.gov.pl)
- Distribution operator: ENEA Operator in Bydgoszcz (verified at operator.enea.pl)
- OSD notification procedure (form, timing, fees if any)
- Two-way meter requirement and who installs it
- Power limits without additional permits (typically 800W at EU level, verify Polish implementation)
- Multi-family building: spółdzielnia or wspólnota consent requirements — what section of statute applies
- Mounting to balustrada: structural, fire safety, falling object liability
- Insurance implications (can panels void OC for the flat)
- Neighbour-facing: glare, visual nuisance, precedents

Every claim that cites Polish law: reference to the act (e.g. "ustawa o OZE art. XX") with date of access to the text.

### §3.4 `research/ZRODLA.md`

Every source cited anywhere in the project. For each:
- URL
- Publisher
- Title
- Access date
- One-line relevance note
- If it's a PDF or a press release that might disappear: suggest Wayback Machine snapshot

### §3.5 `app/index.html`

Single HTML file. Inline or adjacent JS/CSS. Same structural pattern as `../projekt_E_ogrod_srodziemnomorski.html`.

Calculator inputs:
- Balcony width (cm), default 465
- Balcony depth min/max (cm), default 99 / 107
- Orientation (N / NE / E / SE / S / SW / W / NW) — dropdown
- Tilt angle for panels (degrees from vertical, 0-90) — slider, default 20 (leaning out from balustrade)
- Shading factor (%) — slider 0-50, help text explaining what to estimate
- Floor number, default 9 (affects shading from adjacent buildings — explanatory only, not in formula unless agent decides otherwise with justification)
- Annual household consumption (kWh), default asks user to fill
- Tariff model (stała G11 / dwustrefowa G12w) — dropdown
- Energy price (PLN/kWh), prefill with current average from URE with date
- Billing model: net-billing (prosument 2022+) — locked unless agent adds justified option
- Optional: battery storage yes/no (affects self-consumption %)

Calculator outputs (three headline, rest collapsible):
- **Headline 1**: Annual production (kWh)
- **Headline 2**: Annual savings (PLN)
- **Headline 3**: Simple payback (years)
- Collapsible: IRR 15-year, NPV at stated discount rate, break-even month, self-consumption %, grid-export %, CO2 avoided kg/year
- Comparison table: 300W vs 600W vs 800W vs 2×400W side by side

Three.js visualization:
- Balcony mesh with real dimensions
- Balustrada with attached panel meshes, panel count and tilt from calculator state
- Day/night toggle (matches parent series)
- Sun position slider (06:00 - 20:00) showing shadow cast on panels
- Optional shadow outline from adjacent building (simplified box)
- Mobile controls: tap to rotate, pinch to zoom, no accidental page scroll

Bilingual toggle PL/EN consistent with parent series — PL primary.

### §3.6 `app/README.md`

How to run locally (`python -m http.server` or similar), how to deploy to GitHub Pages, dependencies loaded from CDN, known limitations, `UNCONFIRMED` flags for anything not tested on real iPhone Safari.

### §3.7 `biznes/BUSINESS_CASE.md`

- Executive summary (5 bullets max, traceable to body)
- Three scenarios: Minimum (300W single panel), Sensowny (600W recommended), Maksymalny (800W or 2×400W)
- For each scenario:
  - CAPEX breakdown
  - Annual production (from PVGIS via calculator)
  - Annual savings (from calculator)
  - 15-year NPV at stated discount rate
  - IRR
  - Payback
  - Break-even month
- Sensitivity analysis table: electricity price ±30%, production ±20%, self-consumption 50%/70%/90%
- Robustness check: under which scenario cells does recommendation flip?
- Assumption log at the end: every number not directly measured must be listed here with source

### §3.8 `biznes/PORÓWNANIE_ALTERNATYW.md`

Valued comparison of:
- (A) Do nothing (status quo cost baseline)
- (B) Storage only (no production, time-shift consumption to cheap hours if G12w)
- (C) Defer to rooftop installation at some future date X
- (D) Energy efficiency investment (LED replacement, heat pump feasibility, window seals)
- (E) Invest the CAPEX in ETF / Polish treasury bonds for 15 years

Each alternative: quick business case with same payback/IRR/NPV method. Same discount rate assumption.

### §3.9 `biznes/REKOMENDACJA.md`

Maximum one page. Structure:
- Recommendation sentence (buy / don't buy / conditional)
- Top 3 reasons
- What would flip the recommendation
- If recommendation is "don't buy now": when to revisit and what data to watch
- Next action today

### §3.10 `plan/PLAN_WYKONANIA.md`

Timeline from decision to first kWh produced. Phases:
1. Consent from spółdzielnia/wspólnota
2. Product selection and ordering
3. Delivery
4. Mounting (who: Jakub, a handyman, or a climber? Based on floor 9 + balustrada type)
5. Electrical connection (who: Jakub if plug-in only with Schuko, certified electrician if hardwired)
6. OSD notification to ENEA Operator
7. Two-way meter installation
8. First production month
9. Tax/billing reconciliation at year end

For each phase: duration estimate, dependencies, who does it, cost.

### §3.11 `plan/CHECKLIST.md`

Markdown checkboxes for every action. Printable. Every checkbox is a single atomic action, not "handle the permits" (too big).

### §3.12 `plan/RYZYKA.md`

Risk matrix table: risk × probability (L/M/H) × impact (L/M/H) × mitigation.
Include at minimum:
- Refusal by spółdzielnia
- Theft from 9th floor balcony (low but non-zero for high-value panels)
- Hail/wind damage
- Panel degradation beyond spec at year 10
- Net-billing rules change to prosument's disadvantage
- Energy price collapse
- Technical failure of microinverter (MTBF realistic for class)
- Neighbour complaint leading to forced removal

### §3.13 `plan/BUDZET.md`

Full PLN breakdown:
- Panel(s)
- Microinverter
- Mounting hardware
- Cables + Schuko/plug
- Two-way meter (if chargeable separately by ENEA Operator)
- Certified electrician labor (if hardwired)
- Spółdzielnia administrative fee (if any)
- Contingency (10%)
- Total
- Total per Wp as sanity check against STAN_RYNKU_2026.md averages

Each line item: source of price (product page link + date, or stated assumption).

### §3.14 `CONTINUITY.md`

Running ledger of phases completed, decisions taken, `UNCONFIRMED` flags still open, next step. Append-only.

---

## §4. Loop-detection heuristics

Watch for these patterns and break out instead of spiraling:

1. **Oscillating between two panel recommendations** across turns → stop, write the decision matrix explicitly in `PRODUKTY.md`, pick the top row.
2. **Rewriting the same Three.js scene four times** → stop, open `../projekt_E_ogrod_srodziemnomorski.html`, copy the working pattern.
3. **PVGIS returns slightly different numbers each call** → fine, cache one canonical call in `research/PVGIS_RAW.json` and cite that.
4. **Research expanding without converging** → force a Faza 1 checkpoint: list what is known, what is `UNCONFIRMED`, and whether current knowledge is enough to continue to Faza 2.
5. **Business case numbers keep changing because calculator assumptions keep changing** → freeze the assumption log in `BUSINESS_CASE.md §Assumptions` first, then run the numbers once.

---

## §5. Scripted sequences

### §5.1 PVGIS lookup sequence
See `skills/fotowoltaika/PVGIS_RECIPE.md`. Do not improvise.

### §5.2 Deploy to GitHub Pages
```
cd C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\Fotowoltaika
git add .
git commit -m "faza N: <short description>"
git push
```
Wait 2-3 minutes. Verify at `https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/Fotowoltaika/`. If 404, check:
- Is the file `index.html` in `app/` or at folder root? If in `app/`, URL is `.../Fotowoltaika/app/`.
- Is GitHub Pages enabled for the repo? Ask Jakub if uncertain.

### §5.3 Local preview
```
cd C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\Fotowoltaika\app
python -m http.server 8080
```
Open `http://localhost:8080`.

### §5.4 Polish diacritic sanity check
If any `.md` file shows `Ĺ`, `Ĺ‚`, `Ĺ„` on disk: the file was double-encoded. Do NOT retry the write. Open the file, paste the correct Polish, save as UTF-8 without BOM.

---

## §6. Environment vs model failure triage

Before blaming Claude Code for poor output:
- If Three.js scene renders black → CDN script blocked by corporate firewall, try alternate CDN
- If `git push` fails with auth → PAT token expired, Jakub to refresh
- If PVGIS times out → EU service, try again in 5 minutes or use fallback table from recipe
- If GitHub Pages shows 404 after deploy → propagation delay, wait 3 more minutes
- If Polish diacritics are broken → editor or git config, not the model

---

## §7. Prompt shaping for sub-tasks

If a phase expands and the agent wants to delegate (e.g. generate PRODUKTY.md entries by calling the web tool many times), structure the sub-prompt as:

- Goal in one sentence
- Input data paths
- Output file path and structure (exact headings)
- Acceptance criteria (what makes this sub-task done)
- `UNCONFIRMED` policy for unknown fields

Do not let the sub-task drift into restating the whole playbook — the playbook is already loaded.

---

## §8. Lessons (append-only)

Agents add findings here after each phase. Format:
- `YYYY-MM-DD` — one-line finding — why it matters — file or rule updated

- `2026-04-21` — Scope rozszerzony o ścieżkę wspólnotową (dachowa PV + magazyn energii dla części wspólnych) — Jakub zauważył że dach bloku ma ~52% lepszą produkcję/kWp niż balkon SE pionowy (1060 vs 697 kWh/kWp/rok), a tarcza energetyczna wygasła dla wspólnot III kw. 2025 — dodano `research/WSPOLNOTA_SCENARIUSZ.md`, rozszerzono `PRZEPISY_PL.md` o prosumenta lokatorskiego/zbiorowego, Grant OZE BGK i magazyny energii od 7.01.2026.
- `2026-04-21` — Jakub dodał pozycję "poprawa instalacji pożarniczej" do rozważenia — potencjalnie synergia z wyłącznikiem PV Stop i adaptacją pomieszczenia magazynu EI60/REI60/EI30, potencjalnie oddzielny projekt — wpisane do `WSPOLNOTA_SCENARIUSZ.md §2.4` jako trzy warianty A/B/C zakresu modernizacji ppoż, pozostaje `UNCONFIRMED` jaki zakres obowiązuje w bloku Jakuba.
- `2026-04-21` — Deadline Grant OZE BGK to 30.06.2026 — realny harmonogram wymaga pierwszej rozmowy z zarządem wspólnoty do 15.05.2026 — dodany jako pytanie #2 w checkpoint'cie Fazy 1.
- `2026-04-21` — WebFetch na Leroy Merlin i Allegro zwracał HTTP 403 (antybot) — ceny zestawów w `PRODUKTY.md` są `UNCONFIRMED` i wymagają weryfikacji przez Jakuba przy zakupie — nie pogarsza to researchu strukturalnego, ale flaguje w budżecie.
- `2026-04-22` — Faza 2 (app/) i Faza 3 (biznes/ + plan/) komplet. Kalkulator z dwoma trybami (balkon + wspólnota), Three.js z dwiema scenami, business case + 8 plików biznes/plan. Rekomendacja jednoznaczna: Jakub dopycha uchwałę wspólnoty do 15.05.2026 żeby łapać Grant OZE BGK, balkonowa indywidualna jest plan B. NPV Ścieżki B dla Jakuba 2,8× lepsze niż balkonowej mimo wyższego jednorazowego udziału.
- `2026-04-22` — Ekonomika balkonowej indywidualnej (payback 7-10 lat, NPV 15-letni +1020 PLN dla 600W) jest gorsza niż polskich obligacji skarbowych EDO 10L (NPV real +3238 PLN), co potwierdza rekomendację "nie kupuj indywidualnie" jeśli wspólnotowa jest osiągalna.
- `2026-04-22` — Faza 5 (post-dokument wspólnoty) — Jakub udostępnił `docs/Konopnickiej 33.pdf` plan gospodarczy wspólnoty z 27.02.2026. Zamknięto `UNCONFIRMED`: 83 lokale (nie 40), 4 284 m², fundusz remontowy 303 917 PLN na koniec 2026, plan wydatków remontowych 2026 = 0 PLN, administrator Wspólnoty.pl Andrzej Szczepaniak, księgowa Joanna Wendrowska. Stworzono `research/WSPOLNOTA_DANE_FORMALNE.md` (10 sekcji). Per lokator spada z 5 290 PLN na 3 037 PLN (-43%) dzięki większej skali wspólnoty mimo wyższego kosztu ppoż C.
- `2026-04-22` — Jakub potwierdził że blok ma **11 pięter** (nie 9 jak z INDEX.md zdjęć "8-10 pięter"). Klasyfikacja prawna: **budynek wysoki** (kategoria W, § 8 rozporządzenia o warunkach technicznych). Implikacja: **modernizacja ppoż zakres C jest obowiązkiem prawnym**, nie opcjonalną synergią. Obligatoryjne: DSO, oddymianie klatek schodowych, oświetlenie ewakuacyjne, hydranty 25/33 mm na każdej kondygnacji (§ 207-263). Koszt ppoż C rewizja: 120 000 → 166 000 PLN. Three.js scena dachu zaktualizowana z 9 na 11 pięter.

---

## §9. Design system authority and workflow

`DESIGN.md` at project root is the visual contract. It follows the 9-section format used by Claude Design (claude.ai/design) and is compatible with both direct Claude Code consumption and Claude Design handoff flows. Full workflow details in `DESIGN_WORKFLOW.md`.

### §9.1 Two paths, same authority

**Path A — Claude Design first.** User uploads `DESIGN.md` to Claude Design, iterates visually on the canvas, exports a handoff bundle, and hands it to Claude Code for implementation. The handoff bundle contains generated CSS, tokens, and component scaffolds, but `DESIGN.md` remains the source of truth. If the handoff and `DESIGN.md` disagree, `DESIGN.md` wins (Hard rule §2.25, §2.26).

**Path B — Claude Code direct.** User skips Claude Design and hands `DESIGN.md` to Claude Code alongside `PROMPT_FOR_CLAUDE_CODE.md`. Claude Code treats `DESIGN.md` like `AGENTS.md` — as a set of rules to satisfy during implementation.

### §9.2 What Claude Code verifies when a handoff arrives

When a Claude Design handoff bundle is pasted into Claude Code, before implementing:

1. Token names in the handoff CSS variables match `DESIGN.md` §2 and §3. If drifted, reconcile with `DESIGN.md`.
2. Headline numbers (`.metric-value`) use `--text-headline`, `JetBrains Mono`, `tabular-nums`, Polish decimal comma. If absent, add.
3. `UNCONFIRMED` badges are present wherever research data is flagged. Claude Design cannot know which fields are UNCONFIRMED — that wiring is Claude Code's job.
4. Three.js integration point is a clean `<canvas>` or `<div>` with an ID. The scene itself is built by Claude Code from `../projekt_E_ogrod_srodziemnomorski.html` pattern, not by Claude Design.
5. CSS is mobile-first (min-width media queries). If handoff is desktop-first, refactor.

### §9.3 What Claude Code does NOT fix by bouncing back to Claude Design

Visual decisions that are handled locally in Claude Code, not sent back to Claude Design:

- Token value adjustments needed to meet WCAG AA contrast on real content
- Polish language copy (Claude Design tends to output English placeholders)
- UNCONFIRMED badge placement based on data state
- Three.js scene mood and lighting for day/night
- Mobile touch target sizing below 44px
- Any rule already codified in `DESIGN.md`

### §9.4 When to propose reopening Claude Design mid-session

Claude Code proposes a Path A detour when:

- The user has given more than two rounds of "make it look nicer" without convergence in chat
- The request is fundamentally about layout variation, not implementation ("three versions of the 3D viewport placement")
- Accessibility or contrast review needs tighter visual tooling
- Final polish before deploy — a last pass on typography rhythm and spacing consistency

Claude Code does NOT propose reopening Claude Design for:

- Calculator math bugs
- PVGIS API integration
- Polish copy corrections
- Any non-visual rule from §2 of this playbook
