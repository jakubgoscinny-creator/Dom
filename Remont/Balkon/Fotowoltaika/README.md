# Fotowoltaika Balkonowa — Bundle dla Claude Code + Claude Design

Folder: `C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\Fotowoltaika\`
Deploy target: `https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/Fotowoltaika/`

## Co jest w tym folderze

Bundle przygotowuje pełne środowisko dla decyzji zakupowej o balkonowej fotowoltaice: research, kalkulator + wizualizator 3D, business case, plan wykonania. Obsługuje dwa tryby pracy: bezpośrednio w Claude Code, albo z wstępną iteracją wizualną w Claude Design (nowy produkt Anthropic Labs z kwietnia 2026) i handoffem do Claude Code.

## Pliki w tym bundlu

| Plik | Rola |
|------|------|
| `PROMPT_FOR_CLAUDE_CODE.md` | **Zacznij tutaj.** Główny prompt do wklejenia w nową sesję Claude Code. |
| `AGENTS.md` | Entry point dla Codex-style agentów. |
| `CLAUDE.md` | Entry point dla Claude Code. |
| `FOTOWOLTAIKA_PLAYBOOK.md` | Operacyjne zasady, specyfikacja 14 deliverables, sequences, loop heuristics, design-system authority. 29 hard rules. |
| `DESIGN.md` | **Wizualny kontrakt projektu.** 9-sekcyjny format Claude Design: tonacja, kolory, typografia, komponenty, layout, elevation, do's/don'ts, responsywność, prompty dla agenta. |
| `DESIGN_WORKFLOW.md` | Jak Claude Design i Claude Code współpracują. Dwie ścieżki pracy: A (design first) vs B (code direct). |
| `CONTINUITY.md` | Append-only ledger postępów. Claude Code dopisuje po każdej fazie. |
| `skills/fotowoltaika/SKILL.md` | Rejestracja skilla dla Claude Code. |
| `skills/fotowoltaika/DATA_SOURCES.md` | Początkowa lista autorytatywnych źródeł polskich i unijnych. |
| `skills/fotowoltaika/PVGIS_RECIPE.md` | Kanoniczne wywołanie PVGIS dla Bydgoszczy + fallback. |
| `skills/fotowoltaika/AGENTS_SNIPPET.md` | Przenośna rejestracja dla Codex. |
| `skills/fotowoltaika/CLAUDE_SKILL_REGISTRATION.md` | Metadata rejestracji skilla. |

## Dwie ścieżki pracy

### Path A — Claude Design first, potem Claude Code

Dobre dla: iteracji wizualnej UI zanim zaczniesz pisać kod, eksplorowania 2-3 kierunków estetycznych, stworzenia reużywalnego design systemu dla całej serii `Balkon/`.

1. Rozpakuj bundle do `C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\Fotowoltaika\`.
2. Otwórz `https://claude.ai/design/#org` → "Create new design system".
3. Wgraj `DESIGN.md` jako asset. Claude Design zbuduje pełny design system w kilka minut.
4. Utwórz nowy prototype w tym samym projekcie. Napisz: *"Build the Fotowoltaika calculator screen following DESIGN.md, mobile-first, three headline numbers, placeholder for Three.js viewport."*
5. Iteruj na canvas (inline comments, czat, slider controls). Proś o 2-3 warianty gdzie decyzja jest niejednoznaczna.
6. Gdy design jest zamknięty → "Export → Handoff to Claude Code".
7. Otwórz Claude Code w folderze `Fotowoltaika/`. Pierwsza wiadomość: *"Path A. Przeczytaj `PROMPT_FOR_CLAUDE_CODE.md`. Handoff z Claude Design wklejam poniżej: [paste]"*
8. Claude Code implementuje kalkulator, Three.js, PVGIS, dokumenty zgodnie z playbookiem. `DESIGN.md` pozostaje autorytetem wizualnym.

### Path B — Claude Code bezpośrednio z DESIGN.md

Dobre dla: szybkiej realizacji, gdy pierwszy kierunek wizualny jest OK, lub gdy nie chcesz przełączać kontekstu.

1. Rozpakuj bundle jak wyżej.
2. Otwórz Claude Code w folderze.
3. Pierwsza wiadomość: *"Path B. Przeczytaj `PROMPT_FOR_CLAUDE_CODE.md` i `DESIGN.md`. Zacznij."*
4. Claude Code traktuje `DESIGN.md` jak `AGENTS.md` — jako zestaw reguł wizualnych do spełnienia podczas implementacji.

Jeśli w Path B widzę że UI wymaga więcej iteracji wizualnej niż mogę przekazać w czacie, Claude Code ma prawo zaproponować detour do Path A.

## Co powstanie po pracy Claude Code

```
Fotowoltaika/
├── AGENTS.md                          (z bundla)
├── CLAUDE.md                          (z bundla)
├── CONTINUITY.md                      (Claude rozbudowuje)
├── DESIGN.md                          (z bundla, referencja wizualna)
├── DESIGN_WORKFLOW.md                 (z bundla)
├── FOTOWOLTAIKA_PLAYBOOK.md           (z bundla)
├── PROMPT_FOR_CLAUDE_CODE.md          (z bundla)
├── README.md                          (ten plik)
├── research/
│   ├── STAN_RYNKU_2026.md            (Claude tworzy)
│   ├── PRODUKTY.md                   (Claude tworzy)
│   ├── PRZEPISY_PL.md                (Claude tworzy)
│   ├── ZRODLA.md                     (Claude tworzy)
│   ├── PVGIS_RAW.json                (Claude tworzy w Fazie 1)
│   └── PVGIS_RAW.csv                 (Claude tworzy w Fazie 1)
├── app/
│   ├── index.html                    (Claude tworzy — kalkulator + 3D zgodnie z DESIGN.md)
│   └── README.md                     (Claude tworzy)
├── biznes/
│   ├── BUSINESS_CASE.md              (Claude tworzy)
│   ├── PORÓWNANIE_ALTERNATYW.md      (Claude tworzy)
│   └── REKOMENDACJA.md               (Claude tworzy)
├── plan/
│   ├── PLAN_WYKONANIA.md             (Claude tworzy)
│   ├── CHECKLIST.md                  (Claude tworzy)
│   ├── RYZYKA.md                     (Claude tworzy)
│   └── BUDZET.md                     (Claude tworzy)
└── skills/
    └── fotowoltaika/
        ├── SKILL.md                  (z bundla)
        ├── DATA_SOURCES.md           (z bundla)
        ├── PVGIS_RECIPE.md           (z bundla)
        ├── AGENTS_SNIPPET.md         (z bundla)
        └── CLAUDE_SKILL_REGISTRATION.md (z bundla)
```

## Kluczowe zasady (streszczenie FOTOWOLTAIKA_PLAYBOOK §2)

**Dane i research:**
- Każda liczba ma źródło z datą dostępu.
- PVGIS, nie pamięć modelu.
- Net-billing (prosument 2022+), zweryfikowany na URE.
- ENEA Operator w Bydgoszczy, zweryfikowany na operator.enea.pl.
- `UNCONFIRMED` to akceptowalna odpowiedź.
- Rekomendacja "nie kupuj" to też kompletna odpowiedź.

**Design i UI (reguły §2.25-§2.29):**
- `DESIGN.md` to autorytet wizualny — tokeny, typo, komponenty, elevation.
- Jeśli handoff z Claude Design jest sprzeczny z `DESIGN.md` → `DESIGN.md` wygrywa.
- Trzy nagłówkowe liczby: JetBrains Mono, tabular-nums, polski przecinek, wąska spacja.
- `UNCONFIRMED` to badge, nie tooltip.
- Żadnych gradientów dekoracyjnych, glassmorphism, generic-AI estetyki.

**Mobile i deploy:**
- Mobile-first, iPhone Safari to prawdziwy target.
- `env(safe-area-inset-bottom)` dla dolnych kontrolek.
- Polski warsztatowy, nie marketingowy.
- Deploy na GitHub Pages subpath `/Dom/Remont/Balkon/Fotowoltaika/`.

## Jak to ma się do reszty serii Balkon

To jest ósmy projekt w serii `Projekty Balkonu 3D` (siedem już na `https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/`), ale z innym charakterem — poprzednie to konfiguratory estetyczne (IVAR, Hygge, Jungle), ten jest decyzją ekonomiczno-inżynieryjną. Dlatego kalkulator dominuje nad 3D, a research i business case są osobnymi warstwami. Wizualnie spójny z serią przez `DESIGN.md`; strukturalnie osobny.

Claude Code NIE edytuje `../index.html` (strony matki z siedmioma kartami) bez wyraźnej zgody. Jeśli projekt ma tam trafić jako ósma karta, pytamy przed.

## Co nowego vs. wersja bez Claude Design

- **Dodano `DESIGN.md`** w formacie 9-sekcyjnym (Visual Theme, Colors, Typography, Components, Layout, Depth, Do's/Don'ts, Responsive, Agent Prompts). Działa jako input do Claude Design lub jako skill context dla Claude Code.
- **Dodano `DESIGN_WORKFLOW.md`** opisujący Path A / Path B, reconciliation rules dla handoffu, kiedy wracać do Claude Design.
- **Playbook §9**: authority rules dla DESIGN.md, handoff verification checklist, triggers dla Claude Design detour.
- **Playbook §2.25-§2.29**: nowe hard rules o wizualnym autorytecie, headline metric pattern, UNCONFIRMED badge jako first-class UI state, zakaz gradientów i glassmorphism.
- **Skill load order** rozszerzony o DESIGN.md i DESIGN_WORKFLOW.md.
