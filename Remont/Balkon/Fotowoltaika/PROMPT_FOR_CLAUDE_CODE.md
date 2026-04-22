# Claude Code Opus 4.7 1M Max — Fotowoltaika Balkonowa Bydgoszcz

Working directory: `C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\Fotowoltaika`
Published parent: `https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/`
Target deploy path: `/Dom/Remont/Balkon/Fotowoltaika/` on the same GitHub Pages site
Balkon: 465 × 99-107 cm, 9. piętro, Bydgoszcz

Read files in this exact order before the first edit:

1. `AGENTS.md` in this folder
2. `CLAUDE.md` in this folder
3. `FOTOWOLTAIKA_PLAYBOOK.md` §1 through §4 in full
4. `DESIGN.md` in this folder — design system authority for the app layer
5. `DESIGN_WORKFLOW.md` in this folder — how Claude Design and Claude Code cooperate
6. `skills/fotowoltaika/SKILL.md`
7. `skills/fotowoltaika/DATA_SOURCES.md`
8. `skills/fotowoltaika/PVGIS_RECIPE.md`

Then start.

---

## §0.5. Two-path workflow: Claude Design first, or Claude Code direct

This project supports two operating paths, both described in full in `DESIGN_WORKFLOW.md`.

**Path A — Claude Design first.** I upload `DESIGN.md` to `claude.ai/design`, iterate visually on the canvas, then send you a handoff bundle. You receive the handoff and implement the calculator + 3D + report logic behind the already-validated design. Reconcile with `DESIGN.md` as the source of truth if anything drifted.

**Path B — Claude Code direct.** I skip Claude Design and hand you `DESIGN.md` as context alongside this prompt. You treat `DESIGN.md` the way you treat `AGENTS.md` — as a set of rules to satisfy while implementing. No canvas iteration.

I'll tell you in my first message which path we're on. If I don't say, assume Path B and begin Faza 1 (research). If Path A, I'll paste the Claude Design handoff bundle separately and you start implementation with that as the visual contract on top of `DESIGN.md`.

In both paths, the engineering rules in `FOTOWOLTAIKA_PLAYBOOK.md` §2 are not negotiable. Design handoff does not replace research discipline, PVGIS honesty, or `UNCONFIRMED` flagging.

---

## §0. Tryb pracy

To jest projekt dla prywatnego balkonu, 9. piętro, Bydgoszcz, 465 × 99-107 cm, kontynuacja serii `Projekty Balkonu 3D`. Ten sam język wizualny, mobile-first, Three.js + vanilla + Tailwind, tryb dzień/wieczór jeśli ma sens.

**Jesteś architektem rozwiązania, nie sprzedawcą paneli.** Cel: doprowadzić mnie do najlepszej decyzji zakupowej dla mojego konkretnego przypadku. Jeśli balkonowa fotowoltaika nie ma ekonomicznego sensu w moim scenariuszu, powiedz to wprost w `biznes/REKOMENDACJA.md` i zaproponuj alternatywy (odroczyć do instalacji dachowej, magazyn energii zamiast produkcji, ETF, termomodernizacja, nic nie rób).

Masz 1M kontekstu. Używaj go. Lepiej 15 dobrych źródeł niż 3 powierzchowne. Lepiej pełne PVGIS API response z moimi współrzędnymi niż szacunek z głowy.

---

## §1. Co ma powstać

Cztery warstwy, które razem tworzą jedno narzędzie decyzyjne. Pełną specyfikację każdego pliku masz w `FOTOWOLTAIKA_PLAYBOOK.md` §3. Tutaj skrót:

### 1.1 Research layer (`research/`)
- `STAN_RYNKU_2026.md` — stan rynku balkonowej PV w Polsce i UE na dziś, porównanie z dojrzałym niemieckim rynkiem Balkonkraftwerk
- `PRODUKTY.md` — shortlista 8-15 konkretnych zestawów dostępnych w Polsce z linkami, cenami, specyfikacją, gwarancjami
- `PRZEPISY_PL.md` — legalizacja na balkonie spółdzielni, zgłoszenie do OSD, net-billing prosument, limity mocy
- `ZRODLA.md` — wszystkie cytowane źródła z datą dostępu

### 1.2 App layer (`app/`)
- `index.html` — kalkulator i wizualizator 3D, jedna strona, spójna z resztą serii `Balkon/` i z `DESIGN.md`
- Kalkulator: wymiary balkonu, orientacja, kąt zacienienia, piętro, roczne zużycie kWh, taryfa, model rozliczeń
- Wynik: trzy nagłówkowe liczby (produkcja kWh, oszczędność PLN, payback lat) zgodnie z `DESIGN.md` §4 "Headline number tile". Reszta (IRR 15 lat, NPV, break-even dla wariantów 300W / 600W / 800W / 2×400W) w rozwijalnej sekcji.
- Wizualizacja 3D: balustrada z nałożonymi panelami, tryb dzień/wieczór, slider godziny słońca, strefa cienia — tokeny i rytm z `DESIGN.md` §2, §5, §6
- `UNCONFIRMED` flagi widoczne jako badge, nie zakopane w tooltipach (`DESIGN.md` §4, §7)
- `README.md` w `app/` — jak uruchomić lokalnie, jak deployować, zależności, status testów na iPhone Safari

### 1.3 Business case layer (`biznes/`)
- `BUSINESS_CASE.md` — trzy scenariusze (minimum / sensowny / maksymalny), analiza wrażliwości, sensitivity matrix
- `PORÓWNANIE_ALTERNATYW.md` — co jeśli zamiast paneli: nic, magazyn, odroczenie, termomodernizacja, ETF
- `REKOMENDACJA.md` — jednoznaczna rekomendacja z uzasadnieniem

### 1.4 Execution plan layer (`plan/`)
- `PLAN_WYKONANIA.md` — linia czasu od decyzji do produkcji prądu
- `CHECKLIST.md` — Markdown z checkboxami do wydrukowania
- `RYZYKA.md` — matryca ryzyk prawdopodobieństwo × wpływ
- `BUDZET.md` — pełny rozrachunek PLN z realnym źródłem każdej ceny

Pełne specyfikacje i kryteria akceptacji → `FOTOWOLTAIKA_PLAYBOOK.md` §3.

---

## §2. Nienegocjowalne (TL;DR hard rules — pełna lista w `FOTOWOLTAIKA_PLAYBOOK.md` §2)

1. **Żadnej liczby bez źródła.** Każda liczba w executive summary musi być śledzalna do linku z datą dostępu.
2. **PVGIS, nie głowa.** Roczna produkcja liczona przez PVGIS API z moimi współrzędnymi Bydgoszczy. Recipe w `skills/fotowoltaika/PVGIS_RECIPE.md`.
3. **Mobile-first.** Kalkulator działa na iPhone Safari. Overlay ⇒ scroll-lock `body/html` + `env(safe-area-inset-bottom)`.
4. **Polski warsztatowy, nie marketingowy.** Żadnego "rewolucyjne rozwiązanie" ani "odkryj magię słońca". Piszesz jak elektryk z 20-letnim stażem.
5. **Net-billing, nie net-metering.** Polska od kwietnia 2022 ma net-billing dla nowych prosumentów. Zweryfikuj aktualny model rozliczeń na `www.ure.gov.pl` zanim zaczniesz liczyć.
6. **ENEA Operator to OSD w Bydgoszczy.** Zweryfikuj na `www.operator.enea.pl`, nie zakładaj.
7. **Spółdzielnia/wspólnota.** Mocowanie do balustrady w budynku wielorodzinnym wymaga zgody. Adres: sprawdzę i dopiszę, na razie traktuj jako `UNCONFIRMED`.
8. **3 liczby zawsze widoczne w UI kalkulatora:** roczna produkcja kWh, roczna oszczędność PLN, payback w latach. Reszta rozwijalna. Styl headline w `DESIGN.md` §4.
9. **Jeśli coś jest `UNCONFIRMED`, napisz to wprost.** Nie udawaj pewności której nie masz. UNCONFIRMED to badge, nie footnote (`DESIGN.md` §4, §7).
10. **Deploy = commit + push na GitHub Pages.** Ścieżka musi być `/Dom/Remont/Balkon/Fotowoltaika/`. Weryfikacja: `https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/Fotowoltaika/` zwraca live stronę po 2-3 minutach od push.
11. **`DESIGN.md` to autorytet wizualny.** Tokeny (§2), skala typo (§3), komponenty (§4), layout (§5), elevation (§6), zasady do/don't (§7), responsywność (§8) — trzymaj się ich. Jeśli coś jest sprzeczne z oczekiwaniem z Claude Design handoff, `DESIGN.md` wygrywa.

---

## §3. Kolejność pracy

Cztery faze. Po każdej robisz commit z opisem fazy. Nie rób wszystkiego w jednym commicie.

### Faza 1: Research (czas: aż do nasycenia informacją)
1. Zbadaj moje dane wejściowe w `C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\` — zdjęcia balkonu o różnych porach, jeśli są, powiedzą ci o zacienieniu więcej niż Google Maps.
2. Uzyskaj współrzędne Bydgoszczy (centrum miasta ~53.1235°N, 18.0084°E — zweryfikuj dokładnie dla mojego adresu, który mogę podać jeśli potrzebujesz).
3. Uruchom research: PVGIS, sklepy PL, forum muratordom / elektroda, niemiecki rynek Balkonkraftwerk jako benchmark.
4. Napisz `research/*.md` zanim dotkniesz kodu aplikacji.
5. **Checkpoint:** czy mam wystarczająco danych żeby zbudować sensowny model? Jeśli nie — zatrzymaj się i napisz czego brakuje.

### Faza 2: App (kalkulator + 3D)
1. **Jeśli Path A (Claude Design handoff):** rozpakuj handoff bundle, zweryfikuj tokeny vs. `DESIGN.md` §2-§3, zacznij od pliku referencyjnego HTML z bundla jako szkieletu. Niezgodności rozstrzygaj na korzyść `DESIGN.md`.
2. **Jeśli Path B (bez Claude Design):** szkielet HTML spójny z `../projekt_E_ogrod_srodziemnomorski.html`, tokeny CSS z `DESIGN.md` §2 jako custom properties na `:root`, skala typo z §3, komponenty z §4.
3. Stan kalkulatora w czystym JS, bez frameworka — tak jak reszta Balkonu.
4. Three.js: reużyj setup kamery/oświetlenia z projektu E, dodaj panele na balustradzie. Dzień/noc z tokenami `--surface-page` i `--accent-sun` zgodnie z `DESIGN.md` §9 "3D scene variants".
5. Model produkcji: funkcja `estimateAnnualYield(panelW, orientation, tilt, shadingFactor)` oparta na PVGIS lookup table z Fazy 1.
6. Trzy nagłówkowe liczby używają `.metric` pattern z `DESIGN.md` §4, tabular-nums, polski przecinek dziesiętny, wąska spacja nierozdzielająca jako separator tysięcy.
7. `UNCONFIRMED` badge widoczny tam, gdzie dane mają taki status (nie ukryty w tooltipie).
8. Mobile test: Chrome DevTools `390x844` to preview, nie proof. Jeśli nie masz realnego iPhone'a — zaznacz `UNCONFIRMED` w `app/README.md` przy sekcji "Mobile testing status".
9. Sprawdź kontrast WCAG AA dla głównego tekstu na `--surface-page`. Jeśli poniżej 4.5:1, dostosuj token (odnotuj zmianę w `CONTINUITY.md`).

### Faza 3: Business case + plan wykonania
1. `biznes/BUSINESS_CASE.md` w oparciu o liczby z kalkulatora.
2. `biznes/PORÓWNANIE_ALTERNATYW.md` z wycenionymi alternatywami.
3. `biznes/REKOMENDACJA.md` — jednoznaczna.
4. `plan/*` — wszystkie cztery pliki.

### Faza 4: Deploy + weryfikacja
1. Git commit + push.
2. Sprawdź że link `https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/Fotowoltaika/` działa.
3. Dopisz link do `../index.html` (strona matka serii) jako ósmą kartę projektu, jeśli to ma sens — ale zapytaj mnie zanim edytujesz nadrzędny indeks.
4. Finalny raport w `CONTINUITY.md` w folderze `Fotowoltaika/`.

---

## §4. Co zwrócić w każdym turnie pracy

- Co zrobione w tym kroku
- Co dalej
- Flagi `UNCONFIRMED` jeśli są
- Pytania do mnie jeśli są (maksymalnie 3 na raz, nie rozlewaj)

Nie pytaj o pozwolenie na drobne decyzje. Pytaj tylko o rzeczy które zmienią kierunek (np. "czy chcesz panele pionowo czy poziomo na balustradzie" — to zmienia UX i produkcję, warto zapytać; "czy kolor przycisku niebieski czy szary" — to rozstrzygnij sam).

---

## §5. Jeżeli napotkasz te sytuacje

- **PVGIS API nie odpowiada** → użyj `skills/fotowoltaika/PVGIS_RECIPE.md` fallback, nie zmyślaj
- **Brak danych o cenach paneli na dziś** → zaznacz `UNCONFIRMED` z datą ostatniego sprawdzenia
- **Sprzeczne przepisy w różnych źródłach** → obie wersje w `PRZEPISY_PL.md`, flaga `UNCONFIRMED`, rekomendacja zadzwonić do ENEA infolinii
- **Długie debugowanie Three.js** → popatrz jak to zrobione w `../projekt_E_ogrod_srodziemnomorski.html`, ten sam balkon, ten sam setup
- **Polskie znaki się psują** → pliki są UTF-8 BOM-less, edytor i git ustawione na UTF-8, nie konwertuj na ASCII
- **Claude Design handoff ma inne tokeny niż `DESIGN.md`** → `DESIGN.md` wygrywa, dostosuj implementację, odnotuj rozbieżność w `CONTINUITY.md`
- **Claude Design handoff nie ma `UNCONFIRMED` badge** → dodaj w implementacji, to jest zadanie warstwy danych a nie warstwy designu
- **Wątpliwości czy to sprawa designu czy implementacji** → czytaj `DESIGN_WORKFLOW.md` sekcja "When to re-open Claude Design"

---

## §6. Co jest OK i co nie jest OK

OK:
- Odpowiedź "nie wiem, sprawdzę" albo "nie wiem, to jest `UNCONFIRMED`"
- Rekomendacja "nie kupuj, to się nie opłaca" jeśli tak wychodzi z liczb
- Użycie 30-50% dostępnego kontekstu na research w fazie 1
- Propozycja refaktoru struktury folderów jeśli widzisz że mam nielogiczną
- Dopisanie własnej notatki do `FOTOWOLTAIKA_PLAYBOOK.md` §8 (Lessons) po każdej fazie
- Zaproponowanie przejścia na Path A (Claude Design) jeśli widzisz że UI wymaga więcej iteracji wizualnej niż mogę ci dać w chacie

Nie OK:
- Zmyślanie cen, mocy, współczynników wydajności
- "Profesjonalny sprzedawca" — ty nie sprzedajesz, ty doradzasz
- Płytki research ("znalazłem jeden sklep, biorę ceny stamtąd")
- Ignorowanie mobile-first
- Full-file rewrite `CONTINUITY.md` jeśli wystarczy append
- Emoji i AI-slop w polskim tekście
- Ignorowanie tokenów z `DESIGN.md` bo "szybciej zrobić po swojemu"
- Dodawanie gradientów dekoracyjnych, glassmorphism, albo innej "AI-generic" estetyki

---

## §7. Gotowe? Start.

Pierwszy turn: potwierdź że przeczytałeś wszystkie 8 plików z load order, podsumuj w 5-7 zdaniach co rozumiesz z zadania (w tym którego trybu pracy się spodziewasz — Path A czy Path B — albo że czekasz aż powiem), zidentyfikuj max 3 pytania które muszą być odpowiedziane **teraz** zanim ruszysz, i zaproponuj konkretny pierwszy krok dla Fazy 1.

Nie zaczynaj pisać researchu dopóki nie dostaniesz ode mnie odpowiedzi na pytania (jeśli są) lub zielonego światła. Faza 2 (kod aplikacji) nie rusza dopóki nie wiesz czy jedziemy Path A z handoffem z Claude Design, czy Path B bezpośrednio z `DESIGN.md`.
