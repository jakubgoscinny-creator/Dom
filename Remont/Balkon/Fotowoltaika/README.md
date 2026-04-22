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
├── DESIGN.md                   (kontrakt wizualny, 9 sekcji Claude Design)
├── DESIGN_WORKFLOW.md          (jak Claude Design + Claude Code współpracują)
├── FOTOWOLTAIKA_PLAYBOOK.md    (29 hard rules, specyfikacja deliverables, design authority)
├── PROMPT_FOR_CLAUDE_CODE.md   (główny prompt do Claude Code)
├── CONTINUITY.md               (append-only ledger, lokalny, ignorowany przez git)
├── README.md                   (ten plik — rola bundla, sposób użycia)
├── README_APP.md               (dokumentacja aplikacji kalkulatora)
├── index.html                  (Faza 2 — kalkulator + Three.js, deploy target)
├── research/                   (Faza 1 — warstwa badawcza, 7 plików)
│   ├── PVGIS_RAW.json         (4 zmierzone + 10 fallback punktów PVGIS 2026-04-21)
│   ├── OBSERWACJE_Z_ZDJEC.md  (korozja, daszek, siatka kota, ściana boczna)
│   ├── STAN_RYNKU_2026.md     (PL vs DE benchmark, komponenty, ceny)
│   ├── PRZEPISY_PL.md         (net-billing, ENEA, wspólnota, magazyn 10/30/300 kWh, ppoż)
│   ├── PRODUKTY.md            (12 zestawów balkonowych, rekomendacja Hoymiles/Growatt)
│   ├── WSPOLNOTA_SCENARIUSZ.md (3 scenariusze dachowe + ppoż C + Grant OZE)
│   └── ZRODLA.md              (wszystkie URL z datą dostępu)
├── biznes/                     (Faza 3 — warstwa biznesowa, 4 pliki)
│   ├── BUSINESS_CASE.md       (3×3 scenariusze + sensitivity + assumption log)
│   ├── POROWNANIE_ALTERNATYW.md (A/B/C/D/E z NPV/IRR/payback)
│   ├── REKOMENDACJA.md        (1 strona, jednoznaczna)
│   └── PROPOZYCJA_DLA_WSPOLNOTY.md (2-stronicowy pitch do druku dla zarządu)
├── plan/                       (Faza 3 — warstwa wykonawcza, 4 pliki)
│   ├── PLAN_WYKONANIA.md      (2 ścieżki: balkon i wspólnota, timeline)
│   ├── CHECKLIST.md           (drukowalne checkboxy, puste pola do wypełnienia)
│   ├── RYZYKA.md              (17 ryzyk z mitygacją)
│   └── BUDZET.md              (pełne PLN rozpisanie obu ścieżek)
└── skills/
    └── fotowoltaika/
        ├── SKILL.md                       (rejestracja skilla Claude Code)
        ├── DATA_SOURCES.md                (autorytatywne źródła startowe)
        ├── PVGIS_RECIPE.md                (kanoniczne wywołanie PVGIS + fallback)
        ├── AGENTS_SNIPPET.md              (przenośna rejestracja Codex)
        └── CLAUDE_SKILL_REGISTRATION.md   (metadata rejestracji)
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
