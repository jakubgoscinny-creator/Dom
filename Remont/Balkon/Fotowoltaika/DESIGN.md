# DESIGN.md — Fotowoltaika Balkonowa

A design system for a single-page decision tool: calculator + 3D balcony visualizer + report. Part of the `Projekty Balkonu 3D` series published at `https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/`. Continuation of the visual language of `projekt_E_ogrod_srodziemnomorski.html` and siblings, adapted from lifestyle-configurator to engineering-decision tool.

This file is the single source of truth for visual and interaction design. Feed it to Claude Design (`claude.ai/design`) to scaffold a design system, or reference it directly from Claude Code to keep the build on-brand.

---

## 1. Visual Theme & Atmosphere

**Tone**: Practical-engineering, Polish workshop voice, not a marketing landing page. The user is making a real ~3000-8000 PLN purchasing decision, not browsing for inspiration. Honesty over delight.

**Density**: Medium-high. Three headline numbers dominate the calculator; everything else is collapsible. Research and business-case documents are prose-dense but scannable. Not a whitespace-luxury layout.

**Atmosphere**: Bydgoszcz 9th floor at late afternoon. Warm sunlight on a concrete balcony, slight industrial feel from the balustrade, modern but not trendy. Day/night toggle inherited from parent series — day is the default, night shows evening production shortfall honestly.

**Mood references from parent series** (not to copy, but to harmonize with):
- Projekt E (Ogród Śródziemnomorski): warm terracotta + lavender accents, day/night
- Projekt C (Hygge): amber glow in evening mode
- Projekt D (Jungle): deep greens
- This project sits closer to Projekt E in warmth, but more utilitarian

**Anti-patterns**: No gradients for decoration. No glassmorphism. No "AI aesthetic" generic dashboards. No emoji in primary UI (emoji only in decorative context badges if inherited from parent series).

---

## 2. Color Palette & Roles

All colors as CSS custom properties. Semantic naming, not literal.

### Light mode (default, `[data-theme="day"]`)

```css
--surface-page: #fbf9f4;          /* warm off-white, paper feel */
--surface-card: #ffffff;          /* cards, calculator panel */
--surface-sunken: #f2ede4;        /* input backgrounds, code blocks */
--surface-elevated: #ffffff;      /* modals, tooltips */

--ink-primary: #1a1814;           /* body text, near-black warm */
--ink-secondary: #4a4640;         /* labels, captions */
--ink-muted: #8a8378;             /* metadata, placeholders */
--ink-inverse: #fbf9f4;           /* text on dark surfaces */

--accent-sun: #d97706;            /* primary accent, amber 600, sun energy */
--accent-sun-soft: #fef3c7;       /* accent background tint */
--accent-sky: #0284c7;            /* secondary accent, Bydgoszcz sky blue */
--accent-leaf: #65a30d;           /* tertiary, production-positive, savings */

--semantic-positive: #15803d;     /* "buy" recommendation, ROI positive */
--semantic-negative: #b91c1c;     /* "do not buy", shading loss */
--semantic-caution: #ca8a04;      /* UNCONFIRMED flags, assumptions */
--semantic-info: #0369a1;         /* factual notes, sources */

--border-hairline: #e5ddd0;       /* subtle separators */
--border-strong: #c4bba8;         /* input borders, card edges */
--border-focus: #d97706;          /* focus ring, matches accent-sun */
```

### Dark mode (`[data-theme="night"]`, evening toggle)

```css
--surface-page: #141210;          /* deep warm black */
--surface-card: #1f1c18;          /* cards */
--surface-sunken: #0d0c0a;        /* inputs */
--surface-elevated: #29251f;      /* modals */

--ink-primary: #f5efe3;           /* warm off-white text */
--ink-secondary: #c4bba8;
--ink-muted: #7a7368;
--ink-inverse: #141210;

--accent-sun: #f59e0b;            /* slightly brighter amber for dark mode */
--accent-sun-soft: #3d2a0a;
--accent-sky: #38bdf8;
--accent-leaf: #84cc16;

--semantic-positive: #22c55e;
--semantic-negative: #ef4444;
--semantic-caution: #eab308;
--semantic-info: #38bdf8;

--border-hairline: #2a2620;
--border-strong: #4a4238;
--border-focus: #f59e0b;
```

**Color rules**:
- `accent-sun` is reserved for: primary CTA, active slider tracks, the single "Recommendation" heading, and the sun disc in 3D scene.
- `accent-leaf` is reserved for: positive ROI numbers, "worth buying" badges.
- `semantic-caution` is reserved for: `UNCONFIRMED` flags — always use this color when flagging data quality.
- Never use accent-sun for decorative flourishes. It means "this matters".

---

## 3. Typography Rules

### Font stack

- **Display / headings**: `"Manrope", ui-sans-serif, system-ui, sans-serif` — geometric-humanist, pairs with parent series. Google Font: Manrope.
- **Body**: `"Inter", ui-sans-serif, system-ui, sans-serif` — workhorse, excellent Polish diacritic support. Google Font: Inter.
- **Numerical / data**: `"JetBrains Mono", ui-monospace, monospace` — tabular-nums via `font-variant-numeric: tabular-nums` for all price and kWh displays so digits align vertically in tables.

If a reader requires Latin Extended-A for Polish characters (ą, ć, ę, ł, ń, ó, ś, ź, ż), both Manrope and Inter support it via standard Google Fonts subset.

### Type scale (1.25 ratio, rem-based, mobile-first)

```css
--text-xs:    0.75rem;    /* 12px — metadata, source citations */
--text-sm:    0.875rem;   /* 14px — secondary body, labels */
--text-base:  1rem;       /* 16px — body default */
--text-lg:    1.125rem;   /* 18px — emphasized body */
--text-xl:    1.5rem;     /* 24px — section labels */
--text-2xl:   1.875rem;   /* 30px — subsection headings */
--text-3xl:   2.5rem;     /* 40px — calculator headline numbers on desktop */
--text-4xl:   3.5rem;     /* 56px — headline numbers on large screens */

/* Mobile clamp for the three calculator headline numbers */
--text-headline: clamp(2rem, 6vw + 1rem, 3.5rem);
```

**Line heights**: 1.5 body, 1.2 display, 1.4 labels. Tabular numbers always 1.0 (tight).

**Headline number hierarchy** (the three dominant numbers in the calculator):
- Uses `--text-headline` with `font-weight: 700`, `font-family: JetBrains Mono`, `tabular-nums`, and `letter-spacing: -0.02em`.
- Always shown with unit in `--text-base` on the same baseline, e.g. `458 kWh/rok`, `287 PLN/rok`, `11,4 lat`.
- Polish decimal comma, not period. Thousands separator: narrow no-break space (` ` → `\u202f`), never comma.

**Polish language rules**:
- NFC-composed diacritics. File encoding: UTF-8 without BOM.
- Sentence case in headings (`Stan rynku 2026`), not Title Case.
- Inline code and variable names are English; user-facing copy is Polish.
- Never "rewolucyjne", "odkryj magię", "unleash". Never emoji in serious copy.

---

## 4. Component Stylings

### Buttons

```css
.btn-primary {
  background: var(--accent-sun);
  color: var(--ink-inverse);
  padding: 0.75rem 1.5rem;
  border-radius: 0.5rem;
  font-weight: 600;
  font-family: "Manrope", sans-serif;
  min-height: 44px;              /* iOS touch target */
  transition: background 150ms, transform 100ms;
}
.btn-primary:hover { background: #b45309; }
.btn-primary:active { transform: scale(0.98); }
.btn-primary:focus-visible { outline: 3px solid var(--border-focus); outline-offset: 2px; }

.btn-secondary {
  background: transparent;
  color: var(--ink-primary);
  border: 1px solid var(--border-strong);
  /* same padding / radius / min-height as primary */
}

.btn-ghost {
  background: transparent;
  color: var(--ink-secondary);
  border: none;
  /* for low-emphasis actions like "Rozwiń szczegóły" */
}
```

One primary button per view. Secondary buttons for alternative actions. Ghost for tertiary (expand/collapse, language toggle).

### Inputs

```css
.input-field {
  background: var(--surface-sunken);
  border: 1px solid var(--border-hairline);
  border-radius: 0.375rem;
  padding: 0.625rem 0.875rem;
  font-size: var(--text-base);
  font-family: "Inter", sans-serif;
  min-height: 44px;
  color: var(--ink-primary);
  transition: border-color 150ms, background 150ms;
}
.input-field:focus {
  outline: none;
  border-color: var(--border-focus);
  background: var(--surface-card);
  box-shadow: 0 0 0 3px var(--accent-sun-soft);
}
```

Number inputs always use `inputmode="decimal"` and `font-variant-numeric: tabular-nums`.

### Slider (range)

Critical component — used for shading, tilt angle, sun hour, consumption.

```css
.slider-track {
  height: 6px;
  background: var(--surface-sunken);
  border-radius: 3px;
}
.slider-thumb {
  width: 24px;
  height: 24px;
  background: var(--accent-sun);
  border: 3px solid var(--surface-card);
  border-radius: 50%;
  box-shadow: 0 2px 4px rgba(0,0,0,0.12);
  cursor: grab;
  /* 44×44 hit target via pseudo-element */
}
.slider-fill {
  background: var(--accent-sun);
  height: 6px;
  border-radius: 3px 0 0 3px;
}
```

Always pair a slider with its current value displayed in tabular-nums, right-aligned.

### Cards

```css
.card {
  background: var(--surface-card);
  border: 1px solid var(--border-hairline);
  border-radius: 0.75rem;
  padding: 1.25rem;
  box-shadow: var(--shadow-sm);
}

.card-elevated {
  /* for the main calculator card */
  background: var(--surface-card);
  border: 1px solid var(--border-strong);
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: var(--shadow-md);
}
```

### Headline number tile (the three dominant numbers)

```html
<div class="metric">
  <div class="metric-label">Roczna produkcja</div>
  <div class="metric-value">458<span class="metric-unit"> kWh</span></div>
  <div class="metric-delta">±12% inter-annual variability</div>
</div>
```

```css
.metric-label {
  font-size: var(--text-sm);
  color: var(--ink-secondary);
  text-transform: uppercase;
  letter-spacing: 0.08em;
}
.metric-value {
  font-family: "JetBrains Mono", monospace;
  font-size: var(--text-headline);
  font-weight: 700;
  font-variant-numeric: tabular-nums;
  letter-spacing: -0.02em;
  color: var(--ink-primary);
}
.metric-unit {
  font-size: 0.5em;
  color: var(--ink-secondary);
  font-weight: 400;
}
.metric-delta {
  font-size: var(--text-xs);
  color: var(--ink-muted);
  font-family: "Inter", sans-serif;
}
```

### UNCONFIRMED badge

```html
<span class="badge-unconfirmed" title="Data not yet verified">UNCONFIRMED</span>
```

```css
.badge-unconfirmed {
  display: inline-block;
  background: var(--semantic-caution);
  color: var(--ink-primary);
  font-size: var(--text-xs);
  font-weight: 600;
  padding: 0.125rem 0.5rem;
  border-radius: 0.25rem;
  letter-spacing: 0.05em;
  font-family: "JetBrains Mono", monospace;
}
```

This badge is required wherever a number has a `UNCONFIRMED` status in the underlying data. It is not optional decoration.

### Source citation inline

```html
<span class="cite">PVGIS, dostęp 2026-04-21 <a href="...">↗</a></span>
```

```css
.cite {
  font-size: var(--text-xs);
  color: var(--ink-muted);
  font-family: "Inter", sans-serif;
}
.cite a { color: var(--accent-sky); text-decoration: none; border-bottom: 1px dotted; }
```

### Day/night toggle

Inherited from parent series. Top-right of the 3D viewport. Icon-only button (sun ↔ moon SVG), 44×44 hit target. Transitions the CSS custom property tokens over 400ms.

### Language toggle (PL/EN)

Inherited from parent series. Top-right of the page header, left of the theme toggle. Text-only, `.btn-ghost` style with active state using `--accent-sun`.

---

## 5. Layout Principles

### Grid

Mobile-first, single column up to 768px. Two-column split calculator | 3D at 768-1279px (40/60). Three-column at 1280px+ (calculator | 3D | collapsible report sidebar at 32/48/20).

```css
--content-max-w: 1440px;
--content-padding-mobile: 1rem;
--content-padding-tablet: 1.5rem;
--content-padding-desktop: 2rem;
```

### Spacing scale (4px base)

```css
--space-1: 0.25rem;   /* 4px */
--space-2: 0.5rem;    /* 8px */
--space-3: 0.75rem;   /* 12px */
--space-4: 1rem;      /* 16px */
--space-5: 1.5rem;    /* 24px */
--space-6: 2rem;      /* 32px */
--space-8: 3rem;      /* 48px */
--space-12: 6rem;     /* 96px */
```

Between calculator inputs: `--space-4`. Between input groups: `--space-5`. Between major sections: `--space-8`.

### Safe area

Bottom-docked controls (mobile sheet, action bar) must respect `env(safe-area-inset-bottom)`. Top header respects `env(safe-area-inset-top)` on notch devices.

### Three.js viewport

- Full-width on mobile, aspect-ratio `4 / 3` minimum.
- Fixed 60vh height on desktop when sharing the column with the calculator.
- Sun position slider docked at bottom of the viewport.
- Day/night toggle top-right inside the viewport.

---

## 6. Depth & Elevation

Shadows are warm, not gray — they tint slightly toward the page surface color.

```css
--shadow-xs: 0 1px 2px rgba(42, 34, 20, 0.04);
--shadow-sm: 0 1px 3px rgba(42, 34, 20, 0.06), 0 1px 2px rgba(42, 34, 20, 0.04);
--shadow-md: 0 4px 6px rgba(42, 34, 20, 0.07), 0 2px 4px rgba(42, 34, 20, 0.04);
--shadow-lg: 0 10px 15px rgba(42, 34, 20, 0.08), 0 4px 6px rgba(42, 34, 20, 0.04);
--shadow-focus: 0 0 0 3px var(--accent-sun-soft);
```

**Elevation levels**:
- Level 0: page surface (no shadow)
- Level 1: cards, input focus (`--shadow-sm`)
- Level 2: main calculator card, sticky mobile sheet (`--shadow-md`)
- Level 3: modals, tooltips on hover (`--shadow-lg`)

Never stack more than one shadow visually adjacent. Don't use shadow on dark mode surfaces — use `border` with `--border-strong` for separation instead.

---

## 7. Do's and Don'ts

### Do

- Show the three headline numbers (produkcja / oszczędność / payback) before anything else on mobile.
- Show every number with its unit and, where variable, a plausible range (`458 kWh ± 12%`).
- Mark every data point that came from an estimate with an `UNCONFIRMED` badge if not yet verified against a cited source.
- Use Polish decimal comma and narrow no-break space as thousands separator.
- Use tabular-nums for any number the user might compare across rows or states.
- Respect `prefers-reduced-motion` — disable Three.js auto-rotation and slider transitions.
- Keep mobile touch targets ≥ 44×44 px.
- Preserve the day/night and language toggles as inherited from parent series.
- Test contrast: `ink-primary` on `surface-page` must exceed WCAG AA (4.5:1). All semantic colors on card backgrounds must exceed 3:1 for non-text UI.

### Don't

- Don't use emoji in calculator or report copy.
- Don't use gradients for decoration. Solid fills only. Exception: the sun disc in 3D scene may use a radial gradient as part of the render.
- Don't show a number without its source lineage available on click or hover.
- Don't hide the recommendation. If the answer is "do not buy", that sentence must be the most prominent element in the executive summary.
- Don't use `rezerwa zawodowa` or other speedway-adjacent Polish jargon that leaked from an earlier project context. This project uses energy and construction vocabulary.
- Don't imply certainty where there isn't any. `UNCONFIRMED` is not a footnote, it's a first-class UI state.
- Don't auto-play any animation longer than 600ms on initial load. The calculator should be usable the moment CSS parses.
- Don't collapse the UNCONFIRMED badge behind an info icon — it must be visible at first glance.

---

## 8. Responsive Behavior

### Breakpoints

```css
/* Mobile-first, min-width queries */
@media (min-width: 480px)  { /* larger phone */ }
@media (min-width: 768px)  { /* tablet, two-column split */ }
@media (min-width: 1024px) { /* small desktop */ }
@media (min-width: 1280px) { /* three-column with report sidebar */ }
@media (min-width: 1536px) { /* max content width reached */ }
```

### Mobile (< 768px) layout

1. Sticky header: logo/breadcrumb left, language toggle + theme toggle right
2. Hero: page title, one sentence describing the tool
3. Three headline numbers stacked vertically, each full-width
4. Calculator inputs in a single column, grouped by `<fieldset>` with `<legend>`
5. Collapsible "Pokaż szczegóły" section with IRR, NPV, comparison table
6. 3D viewport below calculator, swipe-hint first time
7. Sticky bottom action bar respecting safe-area-inset-bottom, contains primary CTA (e.g. "Zapisz szacunek jako PDF")
8. Footer with source citation list link

### Tablet (768-1279px)

- Two-column: calculator 40% left, 3D 60% right
- Three headline numbers as a row above calculator inputs
- Collapsibles become inline expandable accordions

### Desktop (1280px+)

- Three-column: calculator 32% / 3D 48% / report sidebar 20%
- Report sidebar pins executive summary, latest assumption log, UNCONFIRMED flag count
- Sticky bottom bar becomes non-sticky footer

### Touch & interaction

- Three.js pan/rotate/zoom works with touch (single-finger rotate, two-finger pinch zoom). Never hijack page scroll.
- Calculator input changes debounced 250ms before triggering recalculation.
- 3D re-render on orientation change with debounce 500ms.
- Sun hour slider live-updates shadow cast with no debounce — this is the key interaction, should feel instant.

---

## 9. Agent Prompt Guide

Reusable prompts Claude Code and Claude Design should embed into the generated `SKILL.md` (and that the Fotowoltaika skill already registers in `skills/fotowoltaika/SKILL.md`).

### Generating new screens on-brand

> Build the [screen name] for Fotowoltaika Balkonowa using the DESIGN.md tokens. Three.js scene follows the pattern of `../projekt_E_ogrod_srodziemnomorski.html`. Every number has a unit and a source. `UNCONFIRMED` data shows the badge. Polish UI copy, workshop tone, no emoji.

### Generating calculator variations

> Produce a variant of the calculator with [constraint, e.g. "grid export disabled" or "battery storage added"]. Keep the three headline numbers. Keep Polish decimal comma. Keep the tabular-nums rule. If the variant changes a headline number's semantics, update the `metric-label` accordingly.

### Generating report-layer documents (business case, plan)

> Markdown document with executive summary (max 5 bullets, each traceable), body prose in Polish workshop voice, every numeric claim citing `research/ZRODLA.md` with access date. UNCONFIRMED status marked inline. No emoji. No generic "solar energy is amazing" statements.

### Generating error / empty states

> When a calculator input is invalid or PVGIS data cannot be reached, show an inline `--semantic-caution` message with the specific issue ("Nie udało się pobrać danych PVGIS. Używam fallback z `PVGIS_RECIPE.md`. Wynik: UNCONFIRMED."). Do not silently fall back to estimated numbers without a visible badge.

### Generating light/dark variants of 3D scene

> Day mode: warm directional light from `+x +y`, shadow opacity 0.35, sky gradient from `--surface-page` to `--accent-sky`. Night mode: cool directional light at lower intensity, moon from `-x +y`, stadium-style ambient at 0.15, amber windows in adjacent buildings. Sun/moon disc uses a radial gradient tinted with `--accent-sun` or a cool white for moon.

### Generating copy in Polish

> Napisz jak elektryk z 20-letnim stażem tłumaczący zięciowi: konkretnie, bez marketingu, z liczbami i źródłami. Jeśli czegoś nie wiesz, powiedz wprost `nie wiem, trzeba sprawdzić`. Nigdy nie obiecuj oszczędności których nie udowodnisz kalkulacją.

---

## Relationship to parent series

This project is the eighth tile on `https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/` (once linked). The visual language above is a siblings-compatible refinement, not a replacement:

- Inherited: warm palette direction, day/night toggle pattern, PL/EN toggle, Three.js camera conventions, mobile-first discipline.
- Refined: tightened accent-sun semantics (reserved for real importance), added tabular-nums everywhere, added UNCONFIRMED as a first-class UI state, added source citation inline pattern.
- Diverged: mood is engineering-practical vs. lifestyle-configurator. Card structure is data-first vs. image-first.

When a parent-series visual decision conflicts with a rule in this file, the rule in this file wins for this project only. Do not retroactively refactor the parent series.
