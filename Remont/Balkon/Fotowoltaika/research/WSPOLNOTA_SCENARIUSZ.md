# Wspólnota mieszkaniowa — scenariusz dachowej PV + magazyn energii (research)

**Uwaga**: to jest plik research, nie pitch. Formalną propozycję do przedłożenia zarządowi wspólnoty (oddzielny dokument) zbuduje się w Fazie 3 w `biznes/PROPOZYCJA_DLA_WSPOLNOTY.md`. Tu zbieramy fakty, liczby, ograniczenia — bazę do tego pitchu.

Scope wprowadzony w sesji 2026-04-21 przez Jakuba w odpowiedzi na pierwszy checkpoint: "dodaj do scopu propozycje dla wspolnoty na wlasne magazyny energii i fotowoltaike" + "bedziemy musieli poprawic instalacje pozarnicza".

> **AKTUALIZACJA 2026-04-22**: Po otrzymaniu planu gospodarczego wspólnoty (`docs/Konopnickiej 33.pdf`, szczegółowo w `WSPOLNOTA_DANE_FORMALNE.md`), wiele `UNCONFIRMED` w tym pliku zamknięto. **83 lokale** (nie 40), **11 pięter** (nie 9), **fundusz remontowy 303 917 PLN** na koniec 2026, **koszt ppoż C dla 11-piętrowego 166 000 PLN** (nie 120 000 — budynek wysoki, obligatoryjne DSO + oddymianie). **Per lokator 3 102 PLN** (zamiast 5 290). Pozostałe sekcje tego pliku zawierają wcześniejsze kalkulacje dla 40 mieszkań — rozstrzygające liczby w `WSPOLNOTA_DANE_FORMALNE.md §7`.

## Streszczenie (5 bullets)

- Scenariusz wspólnotowy ma **znacząco lepszą ekonomikę** niż indywidualna balkonowa PV na 9. piętrze SE: dach bloku oferuje orientację optymalną (S, 30° tilt) bez nawisu = **1 060 kWh/kWp/rok** vs **697 kWh/kWp/rok** dla mojego balkonu pionowo SE. To 52% więcej na każdym wat mocy zainstalowanej.
- **Grant OZE BGK 50%** (deadline 30 czerwca 2026) czyni inwestycję dla wspólnoty atrakcyjną jeśli uda się zmieścić w harmonogram: uchwała + dokumentacja + wniosek BGK przed końcem czerwca. Kluczowy realny deadline: **maj 2026**.
- **Nowelizacja Prawa budowlanego od 7.01.2026 dla magazynów energii** ustanowiła progi 10/30/300 kWh, z których **magazyn 20 kWh dla wspólnoty** wpada w pole "pomieszczenie techniczne EI60/REI60/EI30 bez zgłoszenia budowy" — to najtańsza klasa formalności, ale wymaga pomieszczenia spełniającego wymogi (`UNCONFIRMED` czy wspólnota Jakuba je ma).
- **"Poprawa instalacji pożarniczej"** zauważona przez Jakuba to może być równocześnie argument i wyzwanie: jeśli wspólnota i tak musi modernizować ppoż, można to zsynchronizować z PV (wyłącznik PV Stop + pomieszczenie magazynu) i rozłożyć koszt. Jeśli modernizacja ppoż jest niezależna, dodaje do budżetu łącznego.
- **Reality check**: wspólnotowa PV + magazyn + adaptacja ppoż może kosztować **150 000-200 000 PLN brutto** przed dotacją, **75 000-100 000 PLN po Grant OZE**. Dla wspólnoty 83 mieszkań (potwierdzone w `WSPOLNOTA_DANE_FORMALNE.md §2`) to **~2 000-2 500 PLN na lokator** jednorazowo, z oszczędnością roczną **~10 000-15 000 PLN** po stronie wspólnoty = **prosty payback 6-10 lat** dla wspólnoty. Czy to warto vs indywidualna balkonowa — zależy od profilu Jakuba (patrz `biznes/`).

---

## 1. Problem dla wspólnoty w 2026

**Tarcza energetyczna wygasła z końcem III kwartału 2025.** ([gazetaprawna.pl 2026-04-21](https://www.gazetaprawna.pl/biznes/energetyka/artykuly/10923493,fotowoltaika-w-blokach-mieszkalnych-nowe-przepisy-i-doplaty-dla-wspol.html))

Konsekwencje dla wspólnot mieszkaniowych:
- Stawka za energię dla części wspólnych skoczyła do pełnej rynkowej — zależnie od taryfy C11 (komercyjna jednofazowa) lub B23 (średnia moc) to ~0,90-1,20 PLN/kWh brutto `UNCONFIRMED` — potrzebna faktura wspólnoty
- Tydzień 83 mieszkań (potwierdzone w `WSPOLNOTA_DANE_FORMALNE.md §2`) zużywa w częściach wspólnych 8 000 - 18 000 kWh/rok = **8 000-20 000 PLN rachunku rocznego** po tarczy vs **4 000-10 000 PLN** podczas tarczy
- Wzrost rachunku o ~100% jest realny i widoczny dla lokatorów — to **naturalny moment polityczny do wdrożenia uchwały o PV**, kiedy sąsiedzi dostają wyższe rachunki i szukają rozwiązania

**Drugi problem**: od 2026 nowe regulacje magazynów energii (7.01.2026) ustanawiają jasne ramy, ale też wymagają **dostosowania pomieszczeń technicznych** — jeśli wspólnota ma tylko prowizoryczną piwnicę techniczną, trzeba ją zmodernizować do EI60/REI60/EI30.

**Trzeci problem** (niezależnie od PV): **instalacja pożarnicza bloku** może wymagać modernizacji — wyłącznik przeciwpożarowy prądu (PWP), oświetlenie ewakuacyjne klatek, czujki dymu w częściach wspólnych, oznakowanie ewakuacyjne. Jakub zauważył to jako punkt do rozważenia. Jeśli i tak trzeba, można skoordynować z PV i rozłożyć koszt rzeczoznawcy ppoż. `UNCONFIRMED` zakres wymaganej modernizacji — potrzebna opinia rzeczoznawcy.

---

## 2. Propozycja dwuczęściowa: PV na dachu + magazyn

### 2.1 PV na dachu (moc docelowa)

**Orientacja optymalna** — zakładamy że dach bloku Jakuba jest **płaski** (typowy dla bloków z lat 70-80 w Bydgoszczy), więc wszystkie moduły można zorientować swobodnie. Optymalnie: **S (0°), tilt 30°**. Produkcja roczna z PVGIS dla Bydgoszczy w tej konfiguracji: **~1 060 kWh/kWp/rok** `UNCONFIRMED` — z tabeli fallback PVGIS_RECIPE.md, potrzebny właściwy PVGIS call (dodaj do `research/PVGIS_RAW.json` w następnej iteracji).

**Rekomendowana moc instalacji**: zacznijmy od **20-30 kWp** jako baseline:
- Zużycie części wspólnych 8-18 MWh/rok (8 000-18 000 kWh)
- Instalacja 25 kWp × 1 060 = **26 500 kWh/rok** produkcji
- Bilans roczny: produkcja ≈ zużycie części wspólnych + niewielka nadwyżka do sieci
- **Ważne**: bilansowanie godzinowe RCE means że letni nadmiar (12:00-14:00) jest wart mniej niż import zimowy (17:00-20:00) ⇒ nie chcemy przewymiarować, chcemy się zbliżyć do auto-konsumpcji

Jeśli wspólnota zgodzi się na **dachowy system 40-50 kWp** z pełnym pokryciem dachu — to wchodzi w pole "prosument zbiorowy" (energia przypisana do poszczególnych lokatorów indywidualnych) vs "prosument lokatorski" (dla części wspólnych). To strategiczna decyzja o modelu biznesowym — patrz `PRZEPISY_PL.md §3.1-§3.2`.

**Rekomendacja wstępna**: model **prosument lokatorski 25-30 kWp** dla części wspólnych — najprostszy prawnie, bezpośrednia korzyść dla wspólnoty (niższy czynsz). Model zbiorowy (każdy lokator ma swój udział) jest bardziej elastyczny ale trudniejszy formalnie; rozważymy jako wariant alternatywny.

### 2.2 Magazyn energii (pojemność docelowa)

Cel: przesunąć produkcję dzienną (12:00-14:00 szczyt słońca) na wieczorny pobór (oświetlenie klatek, pompa wody). W bloku wielorodzinnym wieczór to **17:00-23:00** szczyt zużycia w częściach wspólnych.

**Pojemność 15-25 kWh** Li-ion (LiFePO4 rekomendowany ze względu na bezpieczeństwo i żywotność):
- 20 kWh = pokrycie 5-6h wieczornego zużycia części wspólnych (~3,5 kW średnio nocą)
- Cykl dzienny: ładuj w południe, rozładuj wieczorem
- Liczba cykli żywotności LiFePO4: 6 000 cykli = ~15 lat przy jednym cyklu dziennie
- **Koszt Li-ion 2026**: 1 500-2 500 PLN/kWh `UNCONFIRMED` = **30 000-50 000 PLN dla 20 kWh**

### 2.3 Adaptacja pomieszczenia technicznego

**Obowiązek od 7 stycznia 2026** (Prawo budowlane nowelizacja): magazyn 10-30 kWh w bloku wymaga pomieszczenia:
- Ściany **EI60** — minimum 60 min odporności ogniowej
- Stropy **REI60** — jw.
- Drzwi **EI30** — 30 min odporności
- Autonomiczna czujka dymu wg PN
- Bez formalnego zgłoszenia, ale zgodność z normami musi być odnotowana w umowie z wykonawcą

Typowe pomieszczenia w bloku wielorodzinnym kandydujące na magazyn:
- **Piwnica techniczna** (obok rozdzielni głównej) — często ma już betonowe ściany, potencjalnie EI60 lub łatwa adaptacja
- **Pomieszczenie hydroforowe** — jeśli istnieje osobne, to prawdopodobnie ma już podstawowe wymogi
- **Pomieszczenie wentylatorowni** — mniej prawdopodobne, już zajęte urządzeniami
- **Suszarnia piwniczna** — historycznie, często nieużywana, może być adaptowana

`UNCONFIRMED` — wspólnota Jakuba ma jakie pomieszczenie? Potrzebne **pytanie do zarządcy** (opcjonalnie inspekcja piwnicy przez Jakuba + rzeczoznawcę).

**Koszt adaptacji** `UNCONFIRMED` — zakres zależny od stanu wyjściowego:
- Stan A (pomieszczenie już spełnia wymogi — rzadko): 1 000-3 000 PLN (tylko czujka + dokumentacja)
- Stan B (podstawowe wymogi, tynk ppoż + drzwi EI30): 8 000-15 000 PLN
- Stan C (pełna adaptacja: ściany, strop, drzwi, wentylacja mechaniczna): 15 000-35 000 PLN
- Stan D (trzeba zbudować nowe pomieszczenie od zera): 30 000-80 000 PLN — w tym wypadku projekt całego pomieszczenia z wentylacją

**Realny rząd wielkości dla typowego bloku z lat 70-80**: **Stan B-C, 10 000-25 000 PLN**.

### 2.4 Modernizacja instalacji przeciwpożarowej

Jakub wskazał: "będziemy musieli poprawić instalację pożarniczą". To wymaga decyzji:
- **A. Modernizacja ograniczona do wymogów PV** — wyłącznik PV Stop + dokumentacja ppoż dla PV >6,5 kW + adaptacja pomieszczenia magazynu. Koszt: 3 000-10 000 PLN extra. Pokryte w kosztach PV/magazynu powyżej.
- **B. Modernizacja szeroka ppoż w bloku** — wyłącznik PWP główny budynku, oświetlenie ewakuacyjne klatek, czujki dymu w częściach wspólnych, oznakowanie ewakuacyjne zgodne z normami. Koszt: 15 000-50 000 PLN `UNCONFIRMED` — zależne od stanu wyjściowego i liczby kondygnacji.
- **C. Gruntowna modernizacja** — w tym modernizacja systemów oddymiania, DSO (dźwiękowy system ostrzegawczy), hydranty. Koszt: 50 000-150 000 PLN. Zwykle nie wymagane dla bloku mieszkalnego ≤12 kondygnacji.

**Rekomendacja**: jeśli wspólnota i tak planuje B (szeroka modernizacja ppoż), skoordynować z projektem PV — wykonawca może obsłużyć oba projekty jako pakiet z jednym rzeczoznawcą, redukcja kosztu łącznego ~20-30%. Jakub weryfikuje z zarządem jaki zakres jest wymagany.

---

## 3. Budżet wspólnotowy (zakres wielkości)

`UNCONFIRMED` wszystkie liczby — to są rzędy wielkości, zbierające dane z `STAN_RYNKU_2026.md` i snippetów. Do wykonawcy wspólnota musi zapytać o konkretny kosztorys przed uchwałą.

### 3.1 Scenariusz **MINIMUM**: PV 20 kWp + modernizacja ppoż A

| Pozycja | Koszt netto | Po VAT 8% | Notatki |
|---------|-------------|-----------|---------|
| PV 20 kWp (moduły + inwerter + konstrukcja) | 70 000 | 75 600 | ~3 500 PLN/kWp |
| Okablowanie + rozdzielnica | 6 000 | 6 480 |  |
| Wyłącznik PV Stop | 2 500 | 2 700 |  |
| Dokumentacja projektowa | 4 000 | 4 320 |  |
| Rzeczoznawca ppoż | 2 500 | 2 700 |  |
| Robocizna | 8 000 | 8 640 |  |
| **Razem brutto** | | **100 440** |  |
| **Po Grant OZE 50%** | | **~50 000** |  |
| **Na lokator (83 mieszkań (potwierdzone w `WSPOLNOTA_DANE_FORMALNE.md §2`))** | | **~1 250 PLN** | Jednorazowo |

Oszczędność roczna: ~12 000 PLN (częściowa auto-konsumpcja, nadmiar do sieci)
Payback: **~4,2 lat** dla całej wspólnoty, **~8 lat** dla pojedynczego lokatora (amortyzacja udziału)

### 3.2 Scenariusz **SENSOWNY**: PV 25 kWp + magazyn 20 kWh + modernizacja ppoż A

| Pozycja | Koszt brutto | Notatki |
|---------|--------------|---------|
| PV 25 kWp | 105 000 | Jak wyżej, skalowane |
| Magazyn 20 kWh LiFePO4 | 45 000 |  |
| Adaptacja pomieszczenia technicznego | 20 000 | Stan B-C |
| Dokumentacja + projektowanie | 8 000 | Osoba z uprawnieniami dla magazynu |
| Rzeczoznawca ppoż | 3 500 | Dla kompletu PV + magazyn |
| Robocizna łączna | 15 000 |  |
| **Razem brutto** | **~196 500** |  |
| **Po Grant OZE 50%** | **~100 000** |  |
| **Na lokator (83 mieszkań (potwierdzone w `WSPOLNOTA_DANE_FORMALNE.md §2`))** | **~2 500 PLN** |  |

Oszczędność roczna: ~14 000-16 000 PLN (wyższa dzięki magazynowi = więcej auto-konsumpcji)
Payback: **~7 lat** dla wspólnoty

### 3.3 Scenariusz **MAKSYMALNY**: PV 40 kWp + magazyn 30 kWh + modernizacja ppoż B

| Pozycja | Koszt brutto | Notatki |
|---------|--------------|---------|
| PV 40 kWp | 160 000 |  |
| Magazyn 30 kWh LiFePO4 | 65 000 |  |
| Adaptacja + wentylacja + czujki | 35 000 | Pełna EI60/REI60/EI30 + wentylacja |
| Modernizacja ppoż szeroka | 30 000 | PWP, oświetlenie ewakuacyjne, czujki |
| Dokumentacja + rzeczoznawca (wspólny) | 12 000 |  |
| Robocizna łączna | 25 000 |  |
| **Razem brutto** | **~327 000** |  |
| **Po Grant OZE 50% (PV + magazyn)** | **~235 000** | Modernizacja ppoż poza grantem (`UNCONFIRMED` — do sprawdzenia regulamin BGK) |
| **Na lokator (83 mieszkań (potwierdzone w `WSPOLNOTA_DANE_FORMALNE.md §2`))** | **~5 900 PLN** |  |

Oszczędność roczna: ~20 000 PLN (duża auto-konsumpcja, model prosumenta zbiorowego z udziałem lokatorów)
Payback: **~11 lat** dla wspólnoty

### 3.4 Ocena scenariuszy

- **MINIMUM** jest najbezpieczniejszy i najprostszy. Nie pokrywa zużycia części wspólnych w 100%, ale redukuje rachunek o ~60-70%. Payback <5 lat = dobry.
- **SENSOWNY** dodaje magazyn i zwiększa auto-konsumpcję. Pomieszczenie techniczne musi być dostępne. Payback 7 lat. **Prawdopodobnie najlepszy kompromis dla wspólnoty 83-mieszkaniowej.**
- **MAKSYMALNY** obejmuje modernizację ppoż, której wspólnota i tak może potrzebować (Jakub!). Synergia jest, ale koszt łączny duży. Payback 11 lat — akceptowalny tylko jeśli wspólnota wartościuje oddzielnie "komfort i bezpieczeństwo ppoż" (który ma własny koszt utracony).

### 3.5 Scenariusz rzeczywisty dla wspólnoty Jakuba (decyzje 2026-04-21, ppoż zakres C)

Jakub w checkpoint'cie Fazy 1 potwierdził że wspólnota planuje **gruntowną modernizację ppoż (C)** — obejmującą PWP główny budynku, oświetlenie ewakuacyjne klatek, autonomiczne czujki dymu w częściach wspólnych, oznakowanie ewakuacyjne, DSO (dźwiękowy system ostrzegawczy), system oddymiania (jeśli wymagany dla wysokości budynku), modernizację hydrantów. To plan niezależny od PV — wspólnota i tak musi to zrobić zgodnie z przepisami ppoż (okresowe przeglądy, aktualizacje normy, potencjalny nakaz straży pożarnej).

**Synergia z projektem PV + magazyn**:
- **Wspólny rzeczoznawca ppoż** — jeden projekt modernizacji łączący ppoż budynkową + ppoż instalacji PV (wyłącznik PV Stop, pomieszczenie magazynu energii). Oszczędność: ~20-30% na honorarium rzeczoznawcy vs. dwa osobne projekty.
- **Wspólny wykonawca** — firmy ppoż często mają doświadczenie z instalacjami PV (wyłącznik PV Stop to element instalacji ppoż), można negocjować pakietową cenę.
- **Wspólne zgłoszenia i odbiory** — jeden protokół, jedno postępowanie administracyjne (jeśli wymagane).
- **Wspólna obsługa Grantu OZE** — regulamin BGK `UNCONFIRMED` w kwestii czy modernizacja ppoż budynku (bez PV) jest kosztem kwalifikowanym. Najprawdopodobniej: **część ppoż bezpośrednio związana z PV** (wyłącznik PV Stop, adaptacja pomieszczenia magazynu) = kwalifikowana. **Część ppoż niezwiązana z PV** (PWP główny, DSO, oddymianie) = niekwalifikowana, finansowana osobno przez wspólnotę.

**Zaktualizowany budżet z ppoż C**:

| Blok kosztowy | Koszt brutto | Kwalifikowane do Grantu OZE |
|---------------|--------------|------------------------------|
| PV 25-30 kWp (SENSOWNY wariant PV) | 125 000 | **TAK — 50%** |
| Magazyn 20 kWh + EMS | 45 000 | **TAK — 50%** |
| Adaptacja pomieszczenia magazynu (EI60/REI60/EI30) | 20 000 | `UNCONFIRMED` — prawdopodobnie TAK jako integralny koszt magazynu |
| Rzeczoznawca ppoż wspólny (PV + budynek) | 5 000 | **Częściowo** (PV część: ~2 500 PLN) |
| Wyłącznik PV Stop + okablowanie ppoż PV | 4 000 | **TAK** |
| Dokumentacja PV projektowa | 8 000 | **TAK** |
| **Podsuma PV + magazyn + ppoż PV** | **207 000** | **~103 500 PLN dotacja** |
| PWP główny budynku | 15 000 | NIE |
| Oświetlenie ewakuacyjne klatek (autonomiczne, LED) | 12 000 | NIE |
| Autonomiczne czujki dymu części wspólnych | 6 000 | NIE |
| DSO (dźwiękowy system ostrzegawczy) | 35 000 | NIE |
| Modernizacja oddymiania | 25 000 | NIE `UNCONFIRMED` czy wymagane |
| Modernizacja hydrantów + znaki ewakuacyjne | 12 000 | NIE |
| Robocizna ppoż + projekt dla ppoż budynku | 15 000 | NIE |
| **Podsuma ppoż budynku** | **120 000** | **0** |
| **RAZEM brutto** | **327 000** | |
| **Po Grant OZE 50% (tylko PV+magazyn+ppoż PV)** | **223 500** | |
| **Na lokator (83 mieszkań (potwierdzone w `WSPOLNOTA_DANE_FORMALNE.md §2`))** | **~5 600 PLN** | |

Koszt na lokator: **~5 600 PLN jednorazowo**. Rozłożone w czynszu/funduszu remontowym na 3-5 lat to **~95-155 PLN miesięcznie dodatkowo na mieszkanie** (do negocjacji z zarządem).

**Roczna oszczędność dla wspólnoty** (PV + magazyn, ppoż nie generuje oszczędności bezpośredniej): ~18 000-22 000 PLN.

**Payback PV+magazyn**: ~10 lat dla wspólnoty po dotacji, ~6 lat jeśli pomijamy adaptację pomieszczenia i ppoż PV (tylko „czysty" zysk PV). Modernizacja ppoż budynku ma **własną wartość** (zgodność z przepisami, ograniczenie ryzyka, komfort, potencjalnie wymagane przez ubezpieczenie OC) — **nie liczy się w payback'u PV**, bo byłaby i tak konieczna.

### 3.6 Strategia narracyjna dla zarządu (ppoż C + PV)

Ważny zabieg komunikacyjny: **nie prezentować PV jako projektu osobnego**, tylko jako **element modernizacji infrastruktury bloku 2026** wraz z ppoż. Wspólnota i tak wyda 120 000 PLN na ppoż — jeśli dołoży PV + magazyn, dostanie:
- Niższe rachunki za prąd (oszczędność ~20 000 PLN/rok)
- Grant OZE 50% (~100 000 PLN z budżetu państwowego)
- Gotową infrastrukturę dla przyszłych modernizacji (np. ładowarki EV, elektromobilność)
- Wyższą wartość nieruchomości `UNCONFIRMED`

**Pierwszy pitch**: "modernizacja ppoż jest konieczna i kosztuje 120 000 PLN. Za dodatkowe 85 000 PLN po dotacji — o 70% więcej, nie o 170% — dostajemy też PV, magazyn energii, i obniżamy rachunki za prąd. Payback tego dodatku: ~7 lat."

To **psychologicznie łatwiejsze dla wspólnoty** niż dwa osobne projekty.

---

## 4. Harmonogram realizacji (zgodnie z Grant OZE BGK deadline)

Deadline naboru BGK: **30 czerwca 2026**. Za ~10 tygodni od dziś (2026-04-21).

**Krytyczna ścieżka** (wszystko musi się zdarzyć przed złożeniem wniosku):

| Tydzień | Działanie | Kto |
|---------|-----------|-----|
| 1-2 (do 2026-05-05) | Spotkanie z zarządem, wstępna prezentacja Jakuba | Jakub → zarząd |
| 2-3 (do 2026-05-12) | Ofertowanie u 2-3 wykonawców (Columbus, lokalny, Solwis) | Zarząd + Jakub |
| 3-4 (do 2026-05-19) | Wycena + opinia techniczna + dokumentacja projektowa | Wybrany wykonawca |
| 4-5 (do 2026-05-26) | Zebranie wspólnoty, uchwała, aneks do regulaminu | Zarząd + cała wspólnota |
| 5-6 (do 2026-06-02) | Pełnomocnictwo do składania wniosku BGK | Zarząd |
| 6-7 (do 2026-06-09) | Zebranie dokumentów: uchwała, projekt, oferta, KRS zarządcy, NIP wspólnoty, potwierdzenia tożsamości | Zarząd |
| 7-10 (do 2026-06-30) | Złożenie wniosku BGK | Zarząd |
| 8-11 (do 2026-07-30) | Decyzja BGK (30 dni od kompletnego wniosku) | BGK |
| 12-20 (sierpień-wrzesień) | Realizacja instalacji | Wykonawca |
| 20-22 (październik 2026) | Zgłoszenie do ENEA Operator, licznik dwukierunkowy | Wykonawca |
| 22-24 (listopad 2026) | Odbiór, uruchomienie, pierwszy kWh | Wszyscy |

**Ryzyka harmonogramu**:
- Wspólnota może nie zwołać zebrania na czas (typowy wolniejszy tryb decyzji)
- Wykonawca może nie wydolić projektowania w 2 tygodnie
- BGK może kwestionować kompletność wniosku → opóźnienie

**Mitigacja**: zacząć **teraz** (pierwszy tydzień). Jeśli wspólnota nie jest w stanie decyzji w 4 tygodniach = odpuszczamy Grant OZE na 2026 i celujemy w 2027 nabór (`UNCONFIRMED` czy będzie).

---

## 5. Strategia dla zarządu wspólnoty (do wykorzystania w Fazie 3 pitchu)

Kolejność argumentów:
1. **Rachunki rosną 100%** od III kwartału 2025 — pokazać faktury wspólnoty za 2024 i 2025
2. **Grant OZE BGK pokrywa 50%** — szansa 1:1 na sfinansowanie inwestycji z budżetu państwowego
3. **Deadline 30 czerwca 2026** — okno się zamyka, trzeba decyzji za ~4-6 tygodni
4. **Payback 5-7 lat** — lokator w bloku 40-mieszkaniowym inwestuje 1 250-2 500 PLN i odzyskuje w obniżonym czynszu w ~7 latach
5. **Wartość nieruchomości** — blok z instalacją PV jest atrakcyjniejszy dla kupujących (`UNCONFIRMED` badanie rynku — do weryfikacji)
6. **Synergia z modernizacją ppoż** — jeśli wspólnota musi modernizować ppoż niezależnie, można połączyć
7. **Referencje** — pokazać 2-3 realizacje wspólnot w okolicy (do zebrania po Fazie 1)

Kontr-argumenty które padną i jak je adresować:
- *"A co jak dach przecieknie?"* — Wykonawca daje gwarancję na konstrukcję, mocowania bez penetracji pokrycia (balast). Moduły nośne można zdjąć na remont dachu. Odpowiedź gotowa w `biznes/PROPOZYCJA_DLA_WSPOLNOTY.md`.
- *"A co jak panele zostaną ukradzione?"* — Ubezpieczenie wspólnoty + mocowania wymagające narzędzi + 9. piętro = niska atrakcyjność dla złodziei.
- *"Nie chcę płacić za czyjeś panele"* — Prosument lokatorski zasila części wspólne, obniża czynsz wszystkich. Każdy lokator korzysta proporcjonalnie do swojego udziału w kosztach wspólnych.
- *"A jak nowy zarząd nie będzie chciał tego obsługiwać?"* — Aneks do regulaminu formalizuje obowiązki.

---

## 6. Ograniczenia modelowania

Liczby w §3 są **rzędem wielkości**, nie kosztorysem. Prawdziwe ceny przyjdą z ofert wykonawców na konkretny dach konkretnego bloku. Aby ten research był użyteczny:

- Zużycie części wspólnych: `UNCONFIRMED` dla konkretnej wspólnoty. Jakub musi poprosić zarząd o **fakturę energetyczną wspólnoty za 2024-2025**.
- Powierzchnia dachu dostępna dla PV: `UNCONFIRMED`. Wizja lokalna wykonawcy, zdjęcia satelitarne Google Earth jako wstępne przybliżenie.
- Liczba mieszkań: `UNCONFIRMED`. Jakub wie. (Pytanie w checkpoint'cie)
- Stan pomieszczenia technicznego: `UNCONFIRMED`. Jakub może sprawdzić (piwnica techniczna, rozdzielnia główna, hydroforowania).
- Obecny stan instalacji ppoż: `UNCONFIRMED`. Zarząd powinien mieć protokoły okresowe. Opinia rzeczoznawcy może być potrzebna.

---

## 7. Decyzje strategiczne do podjęcia (w checkpoint'cie Fazy 1)

1. **Czy przechodzimy przez Fazę 2-3 z obydwoma scenariuszami (balkonowy indywidualny + wspólnotowy dachowy) równolegle**, czy tylko jeden — ten który Jakub uzna za bardziej realny?
2. **Którym zarządem/kiedy Jakub planuje pierwszą rozmowę** z zarządem wspólnoty? Od tej daty dzieli 10 tygodni do deadline'u BGK — jeśli rozmowa z zarządem nastąpi po 15 maja 2026, Grant OZE 2026 jest praktycznie niemożliwy.
3. **Jaki jest zakres "poprawy instalacji pożarniczej"** o którym wspomniał Jakub? To A (wąskie, ramach PV), B (szerokie, cały budynek) czy C (gruntowne)? Od tego zależy `BUDZET.md` wspólnotowy.
