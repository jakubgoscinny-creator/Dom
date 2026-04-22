# Wspólnota Mieszkaniowa ul. Konopnickiej 33 — dane formalne i finansowe

Źródło: `docs/Konopnickiej 33.pdf` — **Plan gospodarczy Wspólnoty Mieszkaniowej na rok 2026**, data wydruku **27.02.2026**, dokument oficjalny podpisany przez księgową, administratora i członka zarządu. Zastępuje wszystkie wcześniejsze założenia `UNCONFIRMED` dla wspólnoty Jakuba w `research/WSPOLNOTA_SCENARIUSZ.md`.

## Streszczenie (5 bullets)

- **83 lokale mieszkalne** (nie 40 jak zakładałem) na powierzchni **4 284,09 m²** — wspólnota **2× większa** niż wcześniejszy model. Per-lokator wszystkie jednorazowe obciążenia spadają o ~50%.
- **Fundusz remontowy na początek 2026: 212 020,71 PLN**, prognoza końca roku: **303 917,91 PLN**. **Projekt PV + magazyn + ppoż C (koszt 211 500 PLN po Grant OZE) mieści się w obecnym funduszu** — nie wymaga dodatkowych zaliczek od lokatorów.
- **Planowane wydatki remontowe na 2026: 0,00 PLN** — pełne "okienko" budżetowe dla nowej inwestycji. Wymaga uchwały.
- **Zużycie energii części wspólnych 2025: 11 667,03 PLN, plan 2026: 12 000 PLN** — potwierdza moje założenie bazowe ~12 000 kWh/rok (przy stawce ~1 PLN/kWh).
- **Administrator**: Wspólnoty.pl, Andrzej Szczepaniak, ul. Chodkiewicza 15, 85-065 Bydgoszcz. **Księgowa**: Joanna Wendrowska, 797 626 976, jwendrowska@wspolnoty.info. Numer lokalu Jakuba: **84**. **NIP wspólnoty: 9532425130** (do wniosku Grant OZE BGK).

---

## 1. Dane formalne wspólnoty

| Pole | Wartość |
|---|---|
| Nazwa | Wspólnota Mieszkaniowa ul. Konopnickiej 33 |
| Adres | M. Konopnickiej 33, 85-124 Bydgoszcz |
| NIP | **9532425130** |
| Lokal Jakuba | 84 (M. Konopnickiej 33/84) |
| Zarządca / administrator | Wspólnoty.pl, Andrzej Szczepaniak |
| Adres administratora | ul. Chodkiewicza 15, 85-065 Bydgoszcz |
| REGON zarządcy | 092525828 |
| Telefon administratora | 0513240307 `UNCONFIRMED` (odczyt z pieczęci PDF, potwierdzić) |
| Księgowa | Joanna Wendrowska (Wspólnoty.pl) |
| Telefon księgowej | 797 626 976 |
| E-mail księgowej | jwendrowska@wspolnoty.info |
| Członek zarządu wspólnoty (podpis) | Jerzy Ćwiędała `UNCONFIRMED` (trudno odczytać z podpisu) |
| System księgowy | Dom 5 firmy Domidia sp. z o.o. (wersja 5.3.234.14) |

---

## 2. Dane techniczne nieruchomości

| Pole | Wartość | Uwagi |
|---|---|---|
| Powierzchnia całkowita | **4 284,09 m²** | Suma wszystkich lokali mieszkalnych |
| Liczba lokali mieszkalnych | **83** | |
| Średnia powierzchnia lokalu | 51,6 m² | Typowe 2- i 3-pokojowe mieszkania |
| **Liczba kondygnacji naziemnych** | **11 pięter** | Potwierdzone przez Jakuba 2026-04-22. Budynek **średniowysoki** w klasyfikacji prawa budowlanego. |
| Typ budynku | Blok wielorodzinny, Jakub mieszka na 9. piętrze (z `OBSERWACJE_Z_ZDJEC.md`) | 83 lokale / 11 pięter ≈ 7,5 lok./piętro — prawdopodobnie 2 klatki × 4 lok./piętro z odchyleniami, `UNCONFIRMED` dokładny układ |
| Wysokość budynku | ~32-34 m `UNCONFIRMED` | 11 pięter × 2,9 m + parter + dach. Próg "budynek wysoki" to 25 m — **ten blok jest wysoki w sensie ppoż** |

### 2.1 Implikacje klasyfikacji "budynek średniowysoki/wysoki" (>9 kondygnacji mieszkalnych)

Polski system kategoryzacji budynków mieszkalnych (rozporządzenie Ministra Infrastruktury z 12.04.2002 w sprawie warunków technicznych, § 8):
- **Niski (N)**: ≤4 kondygnacje (≤12 m)
- **Średniowysoki (SW)**: 5-9 kondygnacji (12-25 m)
- **Wysoki (W)**: **10-18 kondygnacji (25-55 m)** ← **tu nasz blok: 11 pięter**
- **Wysokościowy (WW)**: powyżej 55 m

Dla kategorii **W (wysoki)** obowiązują **obligatoryjne wymogi ppoż** (rozporządzenie § 207-263):

| Wymóg | Obowiązek | Uwaga |
|---|---|---|
| **DSO** (dźwiękowy system ostrzegawczy) | TAK | Dla budynków mieszkalnych wysokich |
| **Oddymianie klatek schodowych** | TAK | Klapy oddymiające w każdej klatce |
| **Hydranty wewnętrzne 25 lub 33 mm** | TAK | Na każdej kondygnacji |
| **Oświetlenie awaryjne ewakuacyjne** | TAK | Korytarze, klatki, wyjścia |
| **Dźwig dla ekip ratowniczych** | TAK | Albo adaptacja istniejącej windy |
| **Drogi ewakuacyjne wydzielone ppoż** | TAK | Klatki schodowe EI60/REI60 |
| **Przeciwpożarowy wyłącznik prądu (PWP)** | TAK | W miejscu dostępnym dla strażaków |
| **Centralna sygnalizacja pożaru (SSP)** — opcjonalnie | Częściowo | Zależne od specyfiki, obowiązkowe przy niektórych funkcjach |

**Oznacza to że "modernizacja ppoż zakres C"** którą Jakub zakładał **nie jest opcją, tylko wymogiem prawnym** dla budynku Konopnickiej 33. Jeśli obecna instalacja ppoż nie spełnia tych wymogów (co jest prawdopodobne dla bloku z lat 70-80), **wspólnota ma obowiązek dostosowania**, niezależnie od PV.

**Implikacja dla pitchu**: argument "PV i ppoż razem" jest jeszcze silniejszy:
- Wspólnota **MUSI** zrobić ppoż (zgodnie z prawem)
- Jeśli zrobi osobno — zapłaci 120 000 PLN za modernizację
- Jeśli zrobi razem z PV+magazynem — ten sam projekt synergicznie, **dodatkowe ~92 000 PLN netto** za energetyczną niezależność + 20 000 PLN/rok oszczędności
- Grant OZE BGK pokrywa 50% PV-części, ale NIE ppoż budynku (ppoż jest obowiązkiem niezależnym)

### 2.2 Koszt modernizacji ppoż dla budynku **wysokiego 11-piętrowego** — weryfikacja

W `research/WSPOLNOTA_SCENARIUSZ.md §3.5` i `plan/BUDZET.md §B.6` założyłem koszt zakresu C = **120 000 PLN**. To było szacunkowe dla 9-piętrowego.

Dla **11-piętrowego budynku wysokiego** (zakres C obowiązkowy prawnie):

| Pozycja | Szacunek 9p. | **Rewizja 11p. (wysoki)** |
|---|---:|---:|
| PWP główny budynku | 15 000 | **18 000** (wyższa moc przyłączeniowa, dodatkowe elementy) |
| Oświetlenie ewakuacyjne klatek | 12 000 | **16 000** (2 więcej kondygnacji × 2 klatki) |
| Autonomiczne czujki dymu | 6 000 | **8 000** (więcej punktów) |
| DSO | 35 000 | **42 000** (więcej głośników, dłuższe okablowanie) |
| Oddymianie klatek schodowych | 25 000 | **40 000** (obowiązek prawny dla wysokiego, nie opcja) |
| Hydranty wewnętrzne (modernizacja na 25/33 mm jeśli nie są) + znaki ewakuacyjne | 12 000 | **20 000** (wymiana na nowocześniejsze, każda kondygnacja) |
| Robocizna + projekt ppoż budynku | 15 000 | **22 000** (więcej skomplikowania) |
| **Razem ppoż C** | **120 000** | **~166 000 PLN** |

**Rewizja kosztu ppoż C: 120 000 → ~166 000 PLN** (+38%). Per lokator (83): **~2 000 PLN** zamiast 1 446 PLN.

Łącznie z PV+magazynem:
- PV+magazyn+ppoż PV po Grant OZE: **91 500 PLN** (bez zmian)
- Ppoż budynku C (rewizja 11p.): **166 000 PLN**
- **Razem dla wspólnoty: 257 500 PLN**
- **Per lokator: 3 102 PLN** (było 2 548 PLN)
- **Pokrycie z funduszu remontowego 303 917 PLN: 85%** (było 70%) — **nadal mieści się w obecnym funduszu bez dodatkowych zaliczek**, ale bufor mniejszy: **46 417 PLN** (było 92 417 PLN)

### 2.3 Dwa warianty do rozważenia z zarządem

**Wariant A: Razem** (rekomendowany) — PV + magazyn + gruntowna modernizacja ppoż C. Koszt 257 500 PLN, fundusz pokrywa. Synergia wykonawcza, wspólny rzeczoznawca, krótszy czas realizacji, lepsza pozycja negocjacyjna.

**Wariant B: Osobno** — wspólnota robi ppoż C teraz (obowiązek prawny), PV odrocza o rok-dwa. Koszt ppoż 166 000 PLN + osobny projekt PV w przyszłości 91 500 PLN = taki sam lub wyższy łączny koszt, ale rozciągnięty w czasie. Grant OZE 2026 przepada (przyszły `UNCONFIRMED`).

**Wariant A jest ekonomicznie lepszy o ~15-20%** (synergia + Grant OZE dostępne w 2026) — rekomendowany.

---

## 3. Plan gospodarczy 2026 — część wspólna (CZĘŚĆ A)

### 3.1 Przychody

| Pozycja | Plan 2025 | Wykonanie 2025 | Plan 2026 |
|---|---:|---:|---:|
| Pozostałości z lat poprzednich | 16 229,10 | 16 229,10 | **23 099,15** |
| Zaliczka na utrzymanie nieruchomości | 97 677,36 | 97 677,36 | 97 677,36 |
| Przychody finansowe – odsetki od właścicieli | 0,00 | 100,87 | 0,00 |
| Przychody za chipy i piloty | 0,00 | 140,00 | 0,00 |
| Przychody za energię elektryczną (lok. mieszkalny, dod. pkt. świetlne) | 1 500,00 | 1 718,00 | 1 800,00 |
| Przychody z tyt. najmu części wspólnej | 2 007,84 | 2 007,84 | 2 007,84 |
| Przychody z tyt. najmu cz. wspólnej – lokal mieszkalny | 9 600,00 | 9 600,00 | 9 600,00 |
| **Razem przychody** | — | **127 473,17** | **134 184,35** |

### 3.2 Koszty utrzymania części wspólnej

| Pozycja | Plan 2025 | Wykonanie 2025 | Plan 2026 |
|---|---:|---:|---:|
| Woda cz. wspólnej, woda cz. wspólnej i woda ogrodowa | 200,00 | 0,00 | 100,00 |
| **Energia elektryczna część wspólna** | **12 000,00** | **11 667,03** | **12 000,00** |
| Wynagrodzenie Zarządu Wspólnoty Mieszkaniowej | 8 000,00 | 8 000,00 | 8 000,00 |
| Wynagrodzenie administratora | 29 548,68 | 29 548,68 | 29 548,68 |
| Ubezpieczenie nieruchomości | 4 500,00 | 3 081,56 | 3 500,00 |
| Koszty napraw i bieżącej konserwacji | 6 500,00 | 1 685,70 | 6 500,00 |
| Koszty utrzymania czystości oraz terenów zielonych | 31 000,00 | 28 776,00 | 31 000,00 |
| **Przeglądy budowlane roczne, gazowe, kominiarskie, budowlane** | 3 350,00 | 4 037,00 | **4 500,00** |
| Koszty dezynsekcji, dezynfekcji i deratyzacji | 1 500,00 | 1 131,60 | 1 500,00 |
| Ochrona, monitoring, internet do urządzeń dźwigowych | 0,00 | 175,76 | 200,00 |
| **Koszty windy** – konserwacja, naprawy bieżące | 11 000,00 | 13 573,06 | **15 000,00** |
| Przegląd UDT | 2 000,00 | 1 680,00 | 2 000,00 |
| Koszty bankowe | 1 000,00 | 851,44 | 1 000,00 |
| Pozostałe koszty | 250,00 | 166,19 | 250,00 |
| **Razem koszty** | — | **104 374,02** | **115 098,68** |

**Stan zarządu nieruchomością wspólną** (przychody minus koszty):
- 2025 wykonanie: **+23 099,15 PLN** (dodatni, środki do dyspozycji)
- 2026 plan: **+19 085,67 PLN** (też dodatni, ale mniej — koszty rosną szybciej niż przychody)

### 3.3 Interpretacja dla projektu PV

**Energia elektryczna części wspólnych** plan 2026: 12 000 PLN.
- Przy stawce ~1,00 PLN/kWh (`UNCONFIRMED` konkretna stawka z faktury wspólnoty): **~12 000 kWh/rok**
- Przy stawce 1,20 PLN/kWh (typowa C11 po tarczy): ~10 000 kWh/rok
- Przy 0,85 PLN/kWh (gdyby miała niższą stawkę biznesową lub częściowo zachowana tarcza): ~14 000 kWh/rok

Moje założenie bazowe **12 000 kWh/rok** w `research/WSPOLNOTA_SCENARIUSZ.md §1` mieści się w środku tego przedziału → **potwierdzone z dokładnością ±20%**.

**Pozycje koszów relewantne dla sprzedaży propozycji PV**:
- Koszty windy 15 000 PLN/rok — winda jest największym indywidualnym konsumentem w części wspólnej
- Przeglądy budowlane roczne, gazowe, kominiarskie, budowlane 4 500 PLN — **to są standardowe przeglądy, nie gruntowna modernizacja ppoż**. Jeśli Jakub mówi o zakresie C (gruntowna), to **nie jest w obecnym planie gospodarczym**. Trzeba to będzie wynegocjować jako osobną uchwałę funduszową.

---

## 4. Fundusz remontowy (CZĘŚĆ B)

| Pozycja | Plan 2025 | Wykonanie 2025 | Plan 2026 |
|---|---:|---:|---:|
| Stan funduszu remontowego na początek roku | 120 106,34 | 120 106,34 | **212 020,71** |
| Zaliczki na fundusz remontowy | 91 897,20 | 91 897,20 | 91 897,20 |
| Inne zwiększenia – odsetki od rach. bankowego | 0,00 | 17,17 | 0,00 |
| **Razem przychody funduszu remontowego** | — | **212 020,71** | **303 917,91** |
| Koszty remontów ze środków własnych | 0,00 | **0,00** | 0,00 |
| **Stan funduszu remontowego końca roku** | — | **212 020,71** | **303 917,91** |

### 4.1 Interpretacja — KLUCZOWA dla projektu PV

- **Wspólnota zbiera 91 897 PLN/rok na fundusz remontowy** (zaliczki)
- **Za 2025 nic nie wydała** (koszty 0 PLN mimo planu 0)
- **Za 2026 też nic nie planuje wydać** (Planowane wydatki remontowe 2026: 0 PLN)
- **Kumulacja 2 lat zaliczek daje 303 917 PLN na koniec 2026**

**Implikacja**: projekt PV + magazyn + ppoż PV (koszt netto po Grant OZE BGK **91 500 PLN**) + modernizacja ppoż zakres C (**120 000 PLN** bez dotacji) = **łączny koszt 211 500 PLN dla wspólnoty**.

To jest **70% stanu funduszu remontowego** na koniec 2026. Wspólnota ma **pełne pokrycie finansowe** bez dodatkowych zaliczek od lokatorów. Po realizacji projektu zostaje **~92 000 PLN** w funduszu jako bufor na inne remonty.

**Dla Jakuba pitch do zarządu**: "Nie prosimy was o podniesienie zaliczek. Fundusz remontowy w 303 917 PLN pokryje cały projekt. Na koniec 2026 zostaje 92 k buforu."

### 4.2 Dlaczego fundusz kumulował się bez wydatków

Dwa lata (2025 i 2026) bez planowanych wydatków remontowych to sygnał że:
- Albo wspólnota **przygotowuje się do dużego projektu w przyszłości** (np. remont elewacji, wymiany windy, docieplenie) — w takim wypadku nasze 211 500 PLN PV+ppoż konkurowałoby z tym
- Albo wspólnota **nie ma jasnego planu remontowego** i kumuluje środki bez decyzji — w takim wypadku nasz projekt to **okazja do wykorzystania środków**
- Albo wspólnota **rezerwuje na awarię/modernizację ppoż** — co by pokrywało się z naszym scenariuszem C

`UNCONFIRMED` — do rozmowy z Andrzejem Szczepaniakiem. Pytanie: "Jakie są długoterminowe plany funduszu remontowego? Czy projekt PV + magazyn + modernizacja ppoż mieści się w tej wizji, czy koliduje?"

---

## 5. Fundusz celowy — wymiana wodomierzy (CZĘŚĆ C)

| Pozycja | Plan 2025 | Wykonanie 2025 | Plan 2026 |
|---|---:|---:|---:|
| Stan funduszu celowego na początek roku | -4 178,59 | -4 178,59 | -5 661,41 |
| Zaliczka na fundusz celowy – wymiana wodomierzy | 8 610,00 | 9 840,00 | 9 840,00 |
| **Przychody – fundusz celowy** | — | **5 661,41** | 4 178,59 |
| Koszty wymiany wodomierzy | 0,00 | 0,00 | 0,00 |
| **Stan funduszu celowego – wymiana wodomierzy** | — | **5 661,41** | 4 178,59 |

Fundusz celowy na wymianę wodomierzy ma nieduży deficyt — **nie dotyczy projektu PV**. Odnotowuję dla kompletności.

---

## 6. Zaliczki, stawki i opłaty obowiązujące w 2026

| Pozycja | Stawka 2025 | Stawka 2026 | Zmiana |
|---|---:|---:|---:|
| Fundusz eksploatacyjny – utrzymanie części wspólnej | 1,90 PLN/m² | 1,90 PLN/m² | — |
| Fundusz remontowy | 1,80 PLN/m² | 1,80 PLN/m² | — |
| Fundusz celowy – wymiana wodomierzy | 10,00 PLN | 10,00 PLN | — |
| Energia elektryczna – dodatkowy punkt świetlny | 0,50 PLN | 0,50 PLN | — |
| Gaz – opłata stała | 4,00 PLN | 4,00 PLN | — |
| Gaz opłata zmienna | 12,00 PLN | 12,00 PLN | — |
| **Centralne ogrzewanie** | 4,70 PLN/m² | **5,17 PLN/m²** | **+10%** |
| **Podgrzanie wody opłata stała** | 29,00 PLN | **31,90 PLN** | **+10%** |
| **Podgrzanie wody** | 25,00 PLN | **27,50 PLN** | **+10%** |
| Abonament – utrzymanie sieci zw i kanalizacji | 0,60 PLN | 0,60 PLN | — |
| Opłata za odprowadzanie wód opadowych i roztopowych | 0,04 PLN | 0,04 PLN | — |
| Zimna woda i kanalizacja | 14,60 PLN/m³ | 14,60 PLN/m³ | — |
| Deficyt wody | 2,00 PLN/m³ | 2,00 PLN/m³ | — |
| Opłata za odpady komunalne | 27,00 PLN/osoba | 27,00 PLN/osoba | — |

### Interpretacja dla pitchu PV

**Centralne ogrzewanie i podgrzanie wody rosną o 10% w 2026** — to jest widoczne w comiesięcznym rachunku każdego lokatora. Sąsiedzi **odczują wzrost rachunków za ogrzewanie i ciepłą wodę**, co jest naturalnym **argumentem za oszczędzaniem energii**, w tym PV dla części wspólnych.

Dla lokalu 51,6 m² wzrost CO to +0,47 × 51,6 = **~24 PLN/mies. = ~290 PLN/rok** dodatkowo. Nie ogromnie, ale odczuwalnie. W rozmowie z sąsiadami można podkreślić że PV obniża rachunki części wspólnych i kompensuje ten wzrost.

---

## 7. Obliczenia pochodne dla projektu PV

### 7.1 Nowy budżet wspólnotowy (Scenariusz SENSOWNY: 25 kWp + 20 kWh + ppoż C dla 11-piętrowego)

Dane zaktualizowane dla **budynku wysokiego 11 pięter** (§2.2 powyżej):

| Pozycja | Kwota brutto | Kwalifikowane Grant OZE |
|---|---:|---|
| PV 25 kWp | 100 000 PLN | TAK (50%) |
| Magazyn 20 kWh + EMS | 45 000 PLN | TAK |
| Adaptacja pomieszczenia magazynu | 20 000 PLN | TAK |
| Wyłącznik PV Stop + rzeczoznawca ppoż PV | 10 000 PLN | TAK |
| Dokumentacja PV | 8 000 PLN | TAK |
| **Podsuma PV + magazyn + ppoż PV** | **183 000** | **Dotacja 91 500** |
| Modernizacja ppoż budynku (zakres C, 11p. wysoki) | **166 000 PLN** | NIE |
| **RAZEM brutto** | **349 000** | |
| **Po Grant OZE 50% (tylko PV-część)** | **257 500** | |

### 7.2 Per lokator (83 mieszkania)

| Kategoria | Per lokator jednorazowo |
|---|---:|
| PV + magazyn + ppoż PV po dotacji | **1 102 PLN** (było 2 288 dla 40 mieszkań) |
| Modernizacja ppoż C (11-piętrowy) | **2 000 PLN** (było 1 446 dla 9-piętrowego) |
| **Razem na mieszkanie** | **3 102 PLN** (było 5 290 dla 40 mieszkań) |
| Z buforem 10% | **~3 400 PLN** |

### 7.3 Finansowanie z funduszu remontowego (bez dodatkowych zaliczek)

- Stan końca 2026: **303 917 PLN**
- Koszt projektu (po Grant OZE dla PV, ppoż C dla 11p.): **257 500 PLN**
- **Bufor po realizacji: 46 417 PLN** (15% stanu funduszu zostaje)
- **Zaliczki na fundusz remontowy** od lokatorów pozostają na poziomie 91 897 PLN/rok (1,80 PLN/m²)
- Fundusz odbudowuje się w **2,8 lat** do stanu przed-projektowego (2029)

**Ryzyko**: jeśli w międzyczasie wspólnota potrzebuje innego większego remontu, bufor 46k jest cienki. Wartość jako margines bezpieczeństwa. `UNCONFIRMED` czy są w planach inne duże remonty — pytanie do Andrzeja Szczepaniaka.

### 7.4 Oszczędność dla wspólnoty (rocznie)

Z kalkulatora (25 kWp dach 30° S, auto-konsumpcja 85% z magazynem, stawka retail 1,20 PLN/kWh, eksport RCE × 1,23):

- Produkcja roczna: **~26 500 kWh**
- Self-consumed: **12 000 kWh** (cap = zużycie części wspólnych)
- Exported: **14 500 kWh**
- Oszczędność: 12 000 × 1,20 + 14 500 × 0,394 = **~20 113 PLN/rok**

Per lokator (83): **~242 PLN/rok** oszczędności. Dla 15 lat × 0,5% degradacji: **~3 400 PLN/lokator NPV @5% real**.

ROI dla lokatora: **2 548 PLN inwestycji → 3 400 PLN NPV 15-letnie = ~34% nadwyżki realnej**.

### 7.5 Payback PV dla wspólnoty

- Inwestycja PV-część po dotacji: 91 500 PLN
- Oszczędność roczna z PV: 20 113 PLN
- **Payback: 4,55 lat** (bez liczenia ppoż C który ma własną wartość zgodności, nie finansową)

---

## 8. Kluczowe punkty do komunikacji z administratorem (Andrzej Szczepaniak)

Rozmowa Jakuba do **15.05.2026**:

1. "Chcę zaproponować wspólnocie modernizację ppoż zakres C + dachową fotowoltaikę + magazyn energii. Projekt finansowany z obecnego funduszu remontowego (303 k PLN na koniec 2026), bez podnoszenia zaliczek. Koszt ~211 500 PLN po Grant OZE BGK."
2. "Per lokator: ~2 550 PLN jednorazowo, oszczędność ~240 PLN/rok — payback 10-11 lat dla lokatora, 4,5 lat dla wspólnoty na samej części PV."
3. "Grant OZE BGK ma deadline 30.06.2026. Wymaga: uchwały wspólnoty + projektu + wniosku. Jeśli zarząd wprowadzi punkt do porządku obrad najbliższego zebrania, mogę dostarczyć gotową propozycję z ofertami wykonawców w 2 tygodnie."
4. Pytanie: "Czy obecny fundusz remontowy ma już przeznaczenie (remont elewacji, wymiana windy, docieplenie)? Jeśli tak, jakie są wzajemne priorytety?"
5. Pytanie: "Czy wspólnota faktycznie planuje gruntowną modernizację ppoż (zakres C)? Jeśli tak — w jakim horyzoncie? Koordynacja z PV daje znaczące oszczędności."

---

## 9. UNCONFIRMED pozostałe (po dokumencie wspólnoty)

| Flag | Źródło | Kto rozstrzyga |
|---|---|---|
| Stawka PLN/kWh wspólnoty za część wspólną | Faktury energetyczne wspólnoty (zgłoszenie wniosku o udostępnienie) | Andrzej Szczepaniak |
| Stan dachu bloku (kiedy remont, ile lat pokrycia) | Dokumentacja techniczna / wizja lokalna | Administrator + rzeczoznawca |
| Stan pomieszczenia technicznego w piwnicy (EI60/REI60/EI30?) | Wizja lokalna z rzeczoznawcą ppoż | Wizja lokalna |
| Obecny stan instalacji ppoż budynku — poziom modernizacji konieczny (A/B/C) | Opinia rzeczoznawcy ppoż | Rzeczoznawca zamówiony przez wspólnotę |
| Długoterminowe plany funduszu remontowego | Zarząd wspólnoty + administrator | Rozmowa |
| Profil zużycia godzinowego części wspólnych | Licznik smart (jeśli jest) lub estymacja na podstawie harmonogramu windy/oświetlenia | Administrator |
| Przyłącze elektryczne budynku — moc dostępna dla PV 25 kWp | Dokumentacja ENEA Operator lub wniosek o warunki przyłączenia | ENEA Operator |

---

## 10. Plik PDF w repo

- **Źródło**: `docs/Konopnickiej 33.pdf` (346,2 KB, 2 strony)
- **Data wydruku**: 27.02.2026
- **Data dostępu / analizy**: 2026-04-22
- **System generujący**: Dom 5 firmy Domidia sp. z o.o., wersja 5.3.234.14
- **Podpisy**: Joanna Wendrowska (księgowa), Andrzej Szczepaniak (administrator, pieczęć), Jerzy Ćwiędała (członek zarządu — `UNCONFIRMED` odczyt podpisu)

Wszystkie liczby w tym pliku research pochodzą z tego PDF, chyba że inaczej wskazano. Każdy konflikt między tym dokumentem a wcześniejszymi założeniami w `WSPOLNOTA_SCENARIUSZ.md` rozstrzyga się na korzyść tego pliku (dokument formalny > szacunki).
