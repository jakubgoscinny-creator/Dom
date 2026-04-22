# Business case — fotowoltaika dla Jakuba i wspólnoty

Analiza finansowa dwóch równoległych scenariuszy: (A) balkonowa PV indywidualna na balkonie Jakuba, (B) propozycja dla wspólnoty dachowa PV + magazyn energii + skoordynowana gruntowna modernizacja ppoż (zakres C). Liczby pochodzą z `research/PVGIS_RAW.json` (PVGIS API 2026-04-21), `research/STAN_RYNKU_2026.md` (ceny), `research/WSPOLNOTA_SCENARIUSZ.md` (CAPEX wspólnotowy), oraz silnika kalkulatora w `app/index.html`.

## Streszczenie (5 bullets)

- **Balkon indywidualny 800 W pionowo SE** daje ~474 kWh/rok i ~388 PLN oszczędności rocznej przy stawce 1,00 PLN/kWh i auto-konsumpcji 70%. CAPEX 2 800 PLN. Payback **~7,2 lat**, NPV 15 lat @5% real ≈ **+1 230 PLN**, IRR ≈ **11%**. Opłacalność ekonomiczna **graniczna** — wystarczy jeden nieprzewidziany koszt (inspekcja konstruktora, antyrdzewka balustrady, wymiana inwertera po gwarancji) żeby payback przesunął się do 10+ lat.
- **Wspólnota SENSOWNY 25 kWp + 20 kWh + ppoż PV** (bez ppoż budynku) produkuje ~26 500 kWh/rok, oszczędza ~20 100 PLN/rok dla wspólnoty (85% auto-konsumpcji dzięki magazynowi, 12 000 kWh zużycia części wspólnych jako cap). CAPEX 183 000 PLN brutto, po Grant OZE BGK 50% = **91 500 PLN dla wspólnoty**, **per lokator 2 288 PLN** (40 mieszkań). Payback PV **~4,5 lat**, IRR **~20%**. **Wyraźnie się opłaca.**
- **Gruntowna modernizacja ppoż (zakres C)** dodaje ~120 000 PLN poza zakresem Grant OZE. To jest pozycja którą wspólnota i tak musi przeprowadzić (wymogi prawne, ubezpieczenie, bezpieczeństwo) — nie liczy się w paybacku PV, ale w łącznym zobowiązaniu lokatora: +3 000 PLN/mieszkanie. Łącznie dla lokatora: **~5 300 PLN jednorazowo** za PV + ppoż C, przy oszczędności ~500 PLN/rok.
- **Sensitivity**: dla balkonowej rekomendacja flipuje z "graniczne" na "nie kupuj" gdy stawka energii spadnie poniżej 0,85 PLN/kWh lub shading wzrośnie powyżej 20%. Dla wspólnotowej rekomendacja jest **robustna** — przetrwa ±30% w cenie energii, ±20% w produkcji i redukcję auto-konsumpcji z 85% do 50%.
- **Kluczowy wniosek**: jeśli wspólnota rusza z projektem dachowym, **balkon indywidualny traci ekonomiczny sens** (Jakub korzysta z dachowej przez obniżenie rachunków części wspólnych). Jeśli wspólnota odmówi lub opóźnia, balkonowy 800W jest **akceptowalny jako minimum** (positive NPV, ale niski IRR).

---

## 1. Parametry wspólne — założenia cenowe i dyskonto

| Parametr | Wartość | Źródło |
|---|---|---|
| Stawka energii Jakub (G11, szacunek) | 1,00 PLN/kWh brutto | `UNCONFIRMED` — z faktury Jakuba, do podmiany |
| Stawka energii wspólnota (C11, bez tarczy 2026) | 1,20 PLN/kWh brutto | `UNCONFIRMED`, domyślna z [STAN_RYNKU_2026.md §2.1](../research/STAN_RYNKU_2026.md) |
| RCE (Rynkowa Cena Energii, średnia 2025) | 0,32 PLN/kWh | [elektro-bar.pl net-billing 2026-04-21](../research/ZRODLA.md) |
| Współczynnik korekcyjny net-billing od 01.02.2026 | ×1,23 | [pvkalkulator.pl net-billing 2026-04-21](../research/ZRODLA.md) — `UNCONFIRMED`, do weryfikacji bezpośrednio u URE |
| Stopa dyskontowa real (inflacja wyczyszczona) | 5% | Odniesienie: polskie 10-letnie obligacje skarbowe + premia za ryzyko. `UNCONFIRMED` aktualna wartość, zaadaptowane z §2.21 PLAYBOOK |
| Inter-annual variance PVGIS | ±5,5% (SD) | PVGIS SARAH2 2005-2020 |
| Horyzont NPV | 15 lat | Odpowiada typowej gwarancji liniowej 80% panelu |
| Degradacja panelu | 0,5%/rok liniowo | Standard branżowy, `UNCONFIRMED` producenta konkretnego |
| Wzrost ceny energii (scenariusz bazowy) | 0% real | Konserwatywne. Sensitivity: +3% / -2% |
| VAT | 8% na instalacji do 300 m² | Ustawa VAT art. 41 ust. 12 |

---

## 2. Scenariusz A — balkon indywidualny Jakuba

### 2.1 Trzy warianty mocy

| | MINIMUM | SENSOWNY | MAKSYMALNY |
|---|---|---|---|
| Konfiguracja | 1 × 300 W | 2 × 300 W (600W) | 2 × 400 W (800W) |
| Szacunkowa cena zestawu | 1 450 PLN | 1 800 PLN | 2 800 PLN |
| Produkcja PVGIS 90° SE, shading 15% | ~178 kWh | ~355 kWh | ~474 kWh |
| Oszczędność roczna (70% auto-konsumpcji) | ~146 PLN | ~291 PLN | ~388 PLN |
| Payback prosty | ~9,9 lat | ~6,2 lat | ~7,2 lat |
| NPV 15 lat @5% real | -146 PLN | +1 022 PLN | +1 228 PLN |
| IRR (15 lat) | ~3% | ~12% | ~11% |
| Break-even month | 118. miesiąc (~9 r. 10 m.) | 75. (~6 r. 3 m.) | 87. (~7 r. 3 m.) |

**Analiza**:
- **MINIMUM (300W)** — niemal progowy. Wysoki koszt jednostkowy (zestaw), niskie przychody. **Nie rekomendowany.**
- **SENSOWNY (600W)** — najkorzystniejszy wskaźnik PLN/W przy niższym ryzyku montażowym. **Rekomendowany jeśli Jakub idzie solo.**
- **MAKSYMALNY (800W)** — więcej produkcji, ale droższy zestaw obniża IRR. Warto tylko jeśli auto-konsumpcja faktycznie osiąga 80%+ (Jakub jest w domu w dzień, pracuje zdalnie, ma pompę ciepła). Bez tego 600W jest lepszy.

### 2.2 Sensitivity matrix — scenariusz SENSOWNY 600W

Payback w latach przy zmianach stawki energii, produkcji i auto-konsumpcji:

| | Produkcja -20% | bazowa | Produkcja +20% |
|---|---|---|---|
| Stawka 0,70 PLN/kWh (auto-konsumpcja 50%) | **15,1** | **11,7** | **9,5** |
| Stawka 0,70 PLN/kWh (auto-konsumpcja 70%) | 11,9 | 9,4 | 7,7 |
| Stawka 0,70 PLN/kWh (auto-konsumpcja 90%) | 9,9 | 7,8 | 6,4 |
| Stawka 1,00 PLN/kWh (auto-konsumpcja 50%) | 10,4 | 8,1 | 6,6 |
| Stawka 1,00 PLN/kWh (auto-konsumpcja 70%) | 8,3 | **6,2** | 5,1 |
| Stawka 1,00 PLN/kWh (auto-konsumpcja 90%) | 6,9 | 5,3 | 4,4 |
| Stawka 1,30 PLN/kWh (auto-konsumpcja 50%) | 7,9 | 6,1 | 5,0 |
| Stawka 1,30 PLN/kWh (auto-konsumpcja 70%) | 6,4 | 4,9 | 4,1 |
| Stawka 1,30 PLN/kWh (auto-konsumpcja 90%) | 5,4 | **4,1** | 3,4 |

**Robustness check**: wariant 600W ma **payback < 10 lat w 8 z 9 komórek** (jedyny wyjątek: niska stawka + niska auto-konsumpcja + niska produkcja = razem wyjątkowo pesymistyczne). Rekomendacja **nie flipuje** w zdecydowanej większości scenariuszy.

### 2.3 Ukryte koszty dla wariantu balkonowego

Poniższe **nie są w cenie zestawu** i trzeba je doliczyć:

| Pozycja | Kwota | `UNCONFIRMED`? |
|---|---|---|
| Inspekcja konstruktora balustrady (korozja) | 300-800 PLN | TAK |
| Wzmocnienie antykorozyjne prętów | 200-500 PLN | TAK |
| Certyfikat NC RfG (jeśli brak w zestawie) | 0-200 PLN | TAK |
| Puszka elektryczna podtynkowa z wyłącznikiem | 50-150 PLN | — |
| Ewentualny elektryk (jeśli Jakub nie czuje Schuko) | 200-400 PLN | — |
| Dokumentacja do uchwały wspólnoty (wizualizacja, wniosek) | 0-300 PLN | — |
| Opłata administracyjna wspólnoty | 0-200 PLN | TAK (zależne od regulaminu) |
| **Realne CAPEX 600W** | **2 000-3 400 PLN** | |

Payback realny dla 600W wariantu przy CAPEX 2 700 PLN (środek): **~9,3 lat**. Przy 3 400 PLN (pesymistyczny): **~11,7 lat**.

### 2.4 Assumption log dla Scenariusza A

- Stawka 1,00 PLN/kWh — `UNCONFIRMED`, do podmiany fakturą Jakuba
- Auto-konsumpcja 70% — założenie dla gospodarstwa 2-osobowego G11 bez pompy ciepła
- PVGIS produkcja 697 kWh/kWp × (1-0,15) = 592 kWh/kWp po shading
- CAPEX 600W: 1 800 PLN bez dodatków
- RCE × 1,23 = 0,394 PLN/kWh dla eksportu
- Degradacja panelu: 0,5%/rok
- Dyskonto real: 5%
- Brak kosztu operacyjnego (zestawy plug-and-play nie wymagają serwisu do czasu awarii)

---

## 3. Scenariusz B — wspólnota (dachowa PV + magazyn + ppoż)

### 3.1 Trzy warianty dachowej PV

| | MINIMUM | SENSOWNY | MAKSYMALNY |
|---|---|---|---|
| PV | 20 kWp | 25 kWp | 40 kWp |
| Magazyn | brak | 20 kWh | 30 kWh |
| Produkcja rocznie (Bydgoszcz 30° S) | ~21 200 kWh | ~26 500 kWh | ~42 400 kWh |
| Auto-konsumpcja | 50% (bez magazynu) | 85% (z magazynem) | 85% |
| Części wspólne używają max | 12 000 kWh/rok | 12 000 kWh/rok | 12 000 kWh/rok |
| Self-consumed | 10 600 kWh | 12 000 kWh (cap) | 12 000 kWh (cap) |
| Exported do sieci | 10 600 kWh | 14 500 kWh | 30 400 kWh |
| Oszczędność roczna (retail 1,20 + export 0,394) | ~16 896 PLN | ~20 113 PLN | ~26 378 PLN |
| CAPEX PV+magazyn+ppoż PV | 98 000 PLN | 183 000 PLN | 280 000 PLN |
| Po Grant OZE 50% | 49 000 PLN | 91 500 PLN | 140 000 PLN |
| Per lokator (40 mieszkań) — PV only | 1 225 PLN | 2 288 PLN | 3 500 PLN |
| Payback PV (z dotacją) | ~2,9 lat | ~4,5 lat | ~5,3 lat |
| IRR 15 lat | ~32% | ~20% | ~16% |
| NPV 15 lat @5% real (PV only) | +127 000 PLN | +117 000 PLN | +126 000 PLN |

**Analiza**:
- **MINIMUM** — najlepsza ekonomia per PLN CAPEX, ale bez magazynu auto-konsumpcja niższa i duży nadmiar do sieci (po niskiej RCE × 1,23). Brakuje efektu przesuwania energii na wieczór.
- **SENSOWNY** — optymalny kompromis. Magazyn 20 kWh = ~5-6h zużycia wieczornego, auto-konsumpcja 85%, produkcja pokrywa 100% potrzeb części wspólnych + nadwyżka. **Rekomendowany.**
- **MAKSYMALNY** — więcej mocy przewymiarowanej względem zużycia części wspólnych (26 400 z 42 400 idzie do sieci po RCE×1,23). Ekonomicznie ciekawsze dopiero gdy idziemy w model **prosumenta zbiorowego** (każdy lokator ma udział w energii) lub podłączamy ładowarki EV. Dla klasycznego modelu **prosumenta lokatorskiego z auto-konsumpcją na części wspólne** — 25 kWp jest optymalne.

### 3.2 Dodanie gruntownej modernizacji ppoż (zakres C) do projektu wspólnotowego

Zakres C obejmuje: PWP główny, oświetlenie ewakuacyjne klatek, czujki dymu, DSO, oddymianie, hydranty. Koszt szacunkowy 120 000 PLN (patrz [WSPOLNOTA_SCENARIUSZ §3.5](../research/WSPOLNOTA_SCENARIUSZ.md)). **Nie kwalifikuje się do Grant OZE**, musi być finansowane z funduszu remontowego wspólnoty.

Dla scenariusza SENSOWNY z ppoż C:
- CAPEX łączny: 183 000 (PV+magazyn+ppożPV) + 120 000 (ppoż C) = 303 000 PLN
- Po Grant OZE: 91 500 (PV) + 120 000 (ppoż) = 211 500 PLN
- **Per lokator: 5 288 PLN**

Ppoż C ma **własną ekonomikę zgodności**: bez niej wspólnota ryzykuje nakazem straży pożarnej + ryzykiem ubezpieczeniowym + potencjalną odmową wypłaty OC przy pożarze. Wartość zgodności `UNCONFIRMED`, ale nie zerowa — szacuję ~5-10 000 PLN rocznie w redukcji ekspozycji ryzyka (bardzo przybliżone).

### 3.3 Sensitivity matrix — scenariusz SENSOWNY wspólnotowy

Payback PV w latach przy zmianach:

| | Produkcja -20% | bazowa | Produkcja +20% |
|---|---|---|---|
| Stawka 0,84 PLN/kWh, auto-konsumpcja 50% | 9,8 | 7,8 | 6,5 |
| Stawka 1,20 PLN/kWh, auto-konsumpcja 50% | 6,8 | 5,5 | 4,6 |
| Stawka 1,20 PLN/kWh, auto-konsumpcja 85% | 5,6 | **4,5** | 3,8 |
| Stawka 1,56 PLN/kWh, auto-konsumpcja 85% | 4,3 | **3,5** | 2,9 |
| Grant OZE 0% (scenariusz odrzucenia wniosku) | 11,2 | **9,1** | 7,6 |

**Robustness check**: nawet w pesymistycznym scenariuszu bez dotacji payback 9,1 lat przy IRR ~9% jest akceptowalny dla wspólnoty (porównywalny z obligacjami skarbowymi). **Rekomendacja robustna.**

### 3.4 Zależność od deadline'u Grant OZE BGK

Deadline składania wniosków: **30.06.2026** (`research/PRZEPISY_PL.md §4.2`). Wspólnota musi:
1. Uchwała (wymaga zebrania, 4-6 tygodni od rozmowy z zarządem)
2. Projekt techniczny (2-3 tygodnie od wyboru wykonawcy)
3. Wniosek BGK (1 tydzień)

Jeśli rozmowa z zarządem **do 15.05.2026** → Grant OZE realny. Jeśli później → przesuwamy na nabór 2027 (`UNCONFIRMED` czy będzie).

**Bez Grant OZE**: CAPEX per lokator rośnie z 2 288 PLN do 4 575 PLN (PV only), payback z 4,5 lat do 9,1 lat. Scenariusz nadal opłacalny ale marginalnie lepszy od obligacji skarbowych. Motywacja wspólnoty słabsza → większe ryzyko odrzucenia uchwały.

### 3.5 Assumption log dla Scenariusza B

- Liczba mieszkań 40 — `UNCONFIRMED` dla wspólnoty Jakuba
- Zużycie części wspólnych 12 000 kWh/rok — `UNCONFIRMED`, do potwierdzenia fakturą wspólnoty 2024-2025
- Stawka wspólnoty 1,20 PLN/kWh brutto — `UNCONFIRMED` po tarczy
- PV CAPEX 4 000 PLN/kWp pod klucz na dachu płaskim — rząd wielkości z rynku 2026
- Magazyn CAPEX 2 250 PLN/kWh LiFePO4 + EMS — rząd wielkości
- Adaptacja pomieszczenia EI60/REI60/EI30: 20 000 PLN — `UNCONFIRMED`, zależy od stanu wyjściowego
- Wyłącznik PV Stop + rzeczoznawca ppoż PV: 10 000 PLN
- Dokumentacja projektowa PV: 8 000 PLN
- Grant OZE BGK 50% kosztów kwalifikowanych (PV + magazyn + ppoż PV)
- Auto-konsumpcja z magazynem 85%, bez magazynu 50% — rząd wielkości
- Dyskonto 5% real
- 15 lat horyzont NPV
- Tarcza energetyczna wygasła III kw. 2025, stawki rynkowe od 2026
- Modernizacja ppoż C (120 k PLN) — osobna pula, nie w payback PV

---

## 4. Porównanie scenariuszy A vs B

| | Balkon 600W (A) | Wspólnota SENS 25 kWp (B) |
|---|---|---|
| Inwestycja Jakuba jednorazowo | 2 700 PLN (samodzielnie) | 2 288 PLN (udział w PV) + ~3 000 PLN (ppoż C) = **~5 300 PLN** |
| Oszczędność roczna Jakuba | ~290 PLN | ~500 PLN (przez niższy czynsz) |
| Payback (perspektywa Jakuba) | ~9 lat | ~10,5 lat (razem z ppoż), ~4,6 lat (PV only) |
| Zgoda wymagana | Wspólnoty + OSD | Wspólnoty (uchwała) |
| Ryzyko refuzji | Średnie (pojedyncza aplikacja) | Niskie (wspólnota zyskuje) |
| Wartość dodana poza PV | żadna | Modernizacja ppoż (zgodność, bezpieczeństwo) |
| Ryzyko korozji balustrady | Jakub sam ponosi | Nie dotyczy |
| Czas od decyzji do kWh | ~2-3 miesiące | ~6-9 miesięcy |
| Skalowanie efektu | Tylko Jakub | Wszystkie 40 mieszkań razem |

**Porównanie NPV 15 lat dla Jakuba (tylko jego kwota i zwroty)**:
- Scenariusz A (balkonowy 600W, samodzielny): NPV ≈ +1 020 PLN
- Scenariusz B (udział w wspólnotowej): NPV dla Jakuba ≈ +500 × 10,38 (anuitet 15 lat @5%) - 2 288 = **+2 898 PLN**

**Scenariusz B jest 2,8× lepszy dla Jakuba niż scenariusz A**, bez uwzględniania wartości ppoż C.

---

## 5. Wnioski dla REKOMENDACJA.md

- Jeśli wspólnota rusza z projektem → **nie kupuj balkonowego, włącz się w dachowy**.
- Jeśli wspólnota odmówi uchwały → balkonowy 600W jest **akceptowalnym planem B**, ale nie priorytetem — lepiej odroczyć do 2028-2029 gdy ceny PL dogonią niemieckie i dotacje wrócą.
- Jeśli wspólnota waha się → rola Jakuba to **aktywna rola pitchera na zebraniu**, używając [PROPOZYCJA_DLA_WSPOLNOTY.md](PROPOZYCJA_DLA_WSPOLNOTY.md) jako dokumentu + argumentu finansowego.

Rekomendacja finalna w [REKOMENDACJA.md](REKOMENDACJA.md).
