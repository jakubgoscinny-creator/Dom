# README_APP — kalkulator i wizualizator fotowoltaiki balkonowej

*Plik `index.html` kalkulatora znajduje się w root folderu `Fotowoltaika/`. Deploy na `/Dom/Remont/Balkon/Fotowoltaika/` (bez podfolderu `app/`).*

Pojedyncza strona HTML z inline CSS i modułem ES JS. Trzy warstwy:

1. **Kalkulator** — wejścia w HTML `<form>`, logika w module JS. PVGIS lookup table z `research/PVGIS_RAW.json` (4 realnie zmierzone punkty + interpolacja bilinearna z fallback tabeli `skills/fotowoltaika/PVGIS_RECIPE.md`).
2. **Wizualizator 3D** — Three.js r160 z jsdelivr CDN. Dwie sceny w jednym `<canvas>`: balkon z balustradą 465 × 80 cm (z rdzą u podstawy prętów + panele pionowe + daszek + siatka dla kota), oraz blok wielorodzinny z panelami pod 30° na dachu + ikoną magazynu energii w piwnicy.
3. **UI** — tokeny z `DESIGN.md` jako CSS custom properties na `:root`. Mobile-first (≥768 px: dwukolumnowy layout, ≥1280 px: trzy kolumny). `UNCONFIRMED` jako pierwszorzędny badge, nie tooltip. Polski przecinek dziesiętny + wąska spacja nierozdzielająca jako separator tysięcy w liczbach.

## Tryby

- **Mój balkon (indywidualny)**: kalkuluje produkcję/oszczędność/payback dla jednego mieszkania, 2×400W panele pionowo SE na balustradzie 4,65 m. Rekomendacja domyślna 800W pionowo.
- **Wspólnota: dach + magazyn + ppoż**: kalkuluje dachową PV 20-40 kWp + LiFePO4 15-30 kWh + Grant OZE BGK 50% + osobny budżet na gruntowną modernizację ppoż budynku (zakres C: PWP główny, DSO, oświetlenie ewakuacyjne, czujki, hydranty). Zgodnie z `research/WSPOLNOTA_SCENARIUSZ.md §3.5`.

Przełącznik u góry strony. Trzy headline numbers (produkcja kWh, oszczędność PLN, payback lat) aktualizują się z trybem. Tabela porównawcza pod rozwijalną sekcją pokazuje w trybie balkonowym warianty mocy 300 / 600 / 800 / 860W, a w trybie wspólnotowym scenariusze MIN / SENS / MAX / MAX+ppożC.

## Uruchomienie lokalne

### Wariant A — plik bezpośrednio

Podwójnie kliknij `index.html` w Eksploratorze Windows → otwiera się w domyślnej przeglądarce. Three.js CDN wymaga aktywnego internetu.

Ograniczenie: niektóre przeglądarki restrykcyjnie traktują `fetch` z `file://`. W tej aplikacji nie używamy `fetch` (wszystko jest inline), więc ten wariant działa.

### Wariant B — lokalny HTTP serwer (zalecane)

```powershell
cd C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\Fotowoltaika
python -m http.server 8080
```

Otwórz `http://localhost:8080`.

### Wariant C — `npx serve`

```powershell
cd C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\Fotowoltaika
npx serve -p 8080
```

## Zależności (CDN)

- `three@0.160.0` z `https://cdn.jsdelivr.net/npm/three@0.160.0/build/three.module.js`
- `three/examples/jsm/controls/OrbitControls` z `https://cdn.jsdelivr.net/npm/three@0.160.0/examples/jsm/controls/OrbitControls.js`
- Google Fonts: **Manrope** (display), **Inter** (body), **JetBrains Mono** (liczby) — preconnect w `<head>` dla szybszego FCP.

Wszystkie zależności ładowane z HTTPS CDN. Aplikacja nie ma lokalnego bundlingu — edytuj `index.html` bezpośrednio i odśwież przeglądarkę.

## Deploy na GitHub Pages

Projekt jest zagnieżdżony w repozytorium `Dom/` i publikowany na ścieżce `/Dom/Remont/Balkon/Fotowoltaika/`. Strona matka serii `Balkon/` linkuje do tego kalkulatora jako 8. karta. URL:

```
https://jakubgoscinny-creator.github.io/Dom/Remont/Balkon/Fotowoltaika/
```

Deploy:
```powershell
cd C:\Users\jakub\OneDrive\Dokumenty\Claude\Dom\Remont\Balkon\Fotowoltaika
git add .
git commit -m "faza N: opis"
git push
```

Wait 2-3 minuty na propagację Pages.

## Status testów

| Środowisko | Status | Data |
|---|---|---|
| Chrome 130 Desktop (Windows) | `UNCONFIRMED` — do przetestowania przez Jakuba po pierwszym uruchomieniu | 2026-04-21 |
| Firefox Desktop | `UNCONFIRMED` | — |
| Chrome DevTools Mobile Preview 390×844 | `UNCONFIRMED` | — |
| **iPhone Safari realny** | `UNCONFIRMED` — krytyczny wymóg z PLAYBOOK §2.8 | — |
| Android Chrome realny | `UNCONFIRMED` | — |

Chrome DevTools 390×844 jest **preview, nie proof** (PLAYBOOK §2.8). Dopóki nie uruchomię na realnym iPhone Safari i nie zweryfikuję że:
- Three.js renderuje bez czarnego ekranu
- Suwak godziny nie koliduje z gestem scroll strony
- Overlay fixed pozostaje w bounding boxu na notch devices
- Scroll-lock nie zawiesza `<html>/<body>` przy otwarciu details

— mobile testing status pozostaje `UNCONFIRMED`.

## Znane ograniczenia

- **PVGIS lookup** używa 4 realnie zmierzonych punktów z 2026-04-21 + 10 punktów z tabeli fallback. Interpolacja bilinearna. Dokładność ±5% wewnątrz grida, ±15% na brzegach. Dla bardziej precyzyjnego wyniku — osobny call PVGIS API dla konkretnego tilt/azimuth.
- **Współczynnik korekcyjny net-billing 1,23** — zaszyty na stałe zgodnie ze stanem prawnym na 2026-02-01. Jeśli URE zmieni wartość, poprawić w `§3 Kalkulator — balkon` → stała `CORR`.
- **Cena RCE 0,32 PLN/kWh** — estymata na podstawie średniej 2025 (312 PLN/MWh). `UNCONFIRMED` dla 2026, do weryfikacji z miesięcznymi zestawieniami TGE.
- **Dach bloku w scenie wspólnotowej** to **schematyczny model** (9-piętrowy blok 32×12 m, 40 paneli w siatce 4×10). Nie jest skonfigurowany dla konkretnego bloku Jakuba. W Fazie 3, po rozmowie z zarządem, można podmienić wymiary.
- **Magazyn energii** przedstawiony jako zielony sześcian w piwnicy z przezroczystym frontem. To wizualny proxy, nie fizyczna reprezentacja adaptacji EI60/REI60/EI30 pomieszczenia.
- **i18n PL/EN** — tłumaczenia podstawowe (nagłówki, opisy, legendy tabel). Głębsze etykiety pól formularzy są wyłącznie PL w pierwszej iteracji. EN dodać w kroku przed deploy jeśli celujemy w nie-polskich odbiorców.
- **Brak zapisu stanu** — przeładowanie strony resetuje parametry do defaultów. LocalStorage można dodać jeśli Jakub chce.
- **Brak eksportu** (PDF / share link) — planowane w kolejnej iteracji po Fazie 3, gdy `biznes/` i `plan/` będą gotowe.

## Mapa plików aplikacji

```
Fotowoltaika/
├── index.html      — całość: HTML, CSS, ES module JS (inline)
└── README_APP.md   — ten plik
```

Jedna strona, jedno wdrożenie. Celowo bez bundlera, bez npm, bez framework'a — spójnie z resztą serii `Balkon/` (każdy projekt to jeden samowystarczalny HTML).

## Następne kroki

- **Faza 3** (`biznes/` + `plan/`): business case, porównanie alternatyw, rekomendacja, plan wykonania, checklist, ryzyka, budżet. Dla wspólnoty: `biznes/PROPOZYCJA_DLA_WSPOLNOTY.md` jako dokument do przedłożenia zarządowi.
- **Faza 4** (deploy): git push, weryfikacja live URL, ewentualne dopisanie do `../index.html` (mastera serii).

Pełny playbook fazowy w `../FOTOWOLTAIKA_PLAYBOOK.md §3`.
