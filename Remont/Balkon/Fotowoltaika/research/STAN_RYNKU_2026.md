# Stan rynku 2026 — fotowoltaika balkonowa i dachowa wspólnotowa

Polski rynek fotowoltaiki balkonowej jest w **dogonianiu niemieckiego Balkonkraftwerk**, który od maja 2024 operuje w nowym reżimie 800W / brak rejestracji u operatora / plug-and-play Schuko. Polska ma dziś instalacje balkonowe 300-800 W dostępne w masowej dystrybucji (Leroy Merlin, Allegro, Castorama), ale ceny są **o 30-70% wyższe niż w Niemczech**, a procedura wymaga zgłoszenia do OSD + pisemnej zgody wspólnoty/spółdzielni. Równocześnie rośnie segment **wspólnotowy / spółdzielczy** — kontynuacja wzrostu aktywności po nowelizacji ustawy o OZE 2022 i nowych przepisach o magazynach energii ze stycznia 2026.

## Streszczenie (5 bullets)

- Rynek PL balkonowej PV: żywy, z kilkoma dziesiątkami zestawów dostępnych w internecie (Leroy Merlin, Allegro, sklepy branżowe), ale **średnia cena zestawu 800W = 2 000-3 000 PLN** vs. niemieckie 300-700 EUR (≈ 1 400-3 300 PLN). Spread cenowy w PL duży: od 1 200 PLN (najtańsze) do 4 500 PLN (średnia klasa z markową elektroniką).
- Dystrybutorzy domowo-majsterkowi (Leroy Merlin, Castorama) wchodzą w segment — to sygnał mainstreamizacji, ale nadal niszowe versus niemiecki rynek, gdzie balkonowa PV to produkt supermarketowy (Lidl, Aldi, Kaufland mają własne brandy).
- Benchmark niemiecki: od maja 2024 limit mocy wyjściowej mikroinwertera **800 W**, brak zgłoszenia do operatora, tylko wpis do Marktstammdatenregister, Schuko dopuszczony. To referencja, która pomoże ocenić kierunek, w którym zmierza Polska.
- **Nowe dla wspólnot od 2026**: Grant OZE BGK (50% kosztów, deadline 30 czerwca 2026), nowelizacja Prawa budowlanego w sprawie magazynów energii od 7 stycznia 2026 (progi 10/30/300 kWh), wygaśnięcie tarczy energetycznej III kwartał 2025 = **wyższe stawki na części wspólne od 2026** ⇒ rosnąca atrakcyjność wspólnotowej PV na dach.
- Technologia: praktyczny standard 2026 to **moduły monokrystaliczne PERC** (czasem TOPCon) 400-435 W, mikroinwerter plug-and-play (Hoymiles HMS, Growatt NEO 2000M-X, Deye SUN-M80, EcoFlow PowerStream), Wi-Fi + aplikacja do monitorowania. Gwarancje panel 25-30 lat na 80% mocy, mikroinwerter 10-12 lat.

---

## 1. Rynek polski balkonowej PV — stan 2026-04-21

### 1.1 Wolumen i dostępność

Szacunkowo kilkaset tysięcy `UNCONFIRMED` domowych mikroinstalacji PV (wszystkie typy, w tym dachowe rodzinnych) w Polsce, w tym balkonowe są małym ułamkiem — ale rosną. Brak oficjalnej statystyki dla balkonowych — URE i OSD raportują mikroinstalacje łącznie. `UNCONFIRMED` — potencjalnie można wyciągnąć z URE rapotrów rocznych sektor energetyczny, ale poza zakresem tego researchu.

Kanały dystrybucji (hierarchia dostępności):
1. **Leroy Merlin** — 10-20 zestawów online + stacjonarnie; marki: Ecoflow, własny brand LM, Jinko (z rebrandingiem)
2. **Castorama** — mniej pozycji, ale rosnąco; produkty białoetykietowe i zestawy z mikroinwerterem
3. **Allegro** — największy wybór: od 1199 PLN (600W, UNCONFIRMED cena) do 4500 PLN, setki pozycji, sprzedawcy indywidualni i dystrybutorzy hurtowi
4. **Amazon.pl** — kilka pozycji, ceny zwykle wyższe niż Allegro o 15-30%
5. **Sklepy fotowoltaiki branżowej** (solwis, kobo-energy, polenergia-pv, columbus-energy) — głównie dla większych instalacji dachowych, balkonowe rzadziej w ofercie, ale ceny konkurencyjne i jakość wyższa
6. **Morele.net, Oferteo** — porównywarki, kompilacja ofert innych sklepów
7. **Direct od producenta** (Hoymiles, Growatt, Deye) — sprzedaż do dystrybutorów, nie do klienta detalicznego

### 1.2 Ceny balkonowych PV 2026 (z bieżących źródeł)

`UNCONFIRMED` ceny poniżej — WebFetch do Leroy Merlin i Allegro zwracał 403 (antybot), więc ceny cytowane ze snippetów wyszukiwania z 2026-04-21 lub stron zbiorczych. Jakub powinien zweryfikować na stronie sprzedawcy w dniu zakupu.

| Kategoria | Moc | Cena od | Cena do | Średnia |
|-----------|-----|---------|---------|---------|
| Tanie (wyłącznie panel + inwerter, bez akcesoriów) | 600 W | 1 199 PLN | 1 800 PLN | ~1 450 PLN |
| Średnia klasa — 2× panel 400-420 W + markowy mikroinwerter | 800 W | 1 800 PLN | 3 000 PLN | ~2 400 PLN |
| Premium — Ecoflow, Growatt, EcoFlow z Wi-Fi + aplikacją | 800 W | 2 500 PLN | 4 500 PLN | ~3 200 PLN |
| Z magazynem energii plug-and-play (Ecoflow Delta czy podobne) | 800 W + 1-2 kWh | 4 500 PLN | 12 000 PLN | ~7 500 PLN |

Źródła:
- Allegro 600W: od 1 199 PLN ([listing Allegro](https://allegro.pl/listing?string=fotowoltaika+balkonowa+600+w), 2026-04-21, cena UNCONFIRMED)
- Allegro 800W: od 2 899 PLN ([listing Allegro](https://allegro.pl/listing?string=fotowoltaika+balkonowa+800w), 2026-04-21, cena UNCONFIRMED)
- Średnia 800W zestawu: 2 480 PLN ([snippet z WebSearch 2026-04-21](https://www.leroymerlin.pl/produkty/fotowoltaika-na-balkon/))
- Referencja 1500-3000 PLN zakres typowy ([balconysolar.uk, 2026-04-21](https://balconysolar.uk/pl/panele-fotowoltaiczne-na-balustradzie))

### 1.3 Trendy cenowe

Ceny w Polsce **spadają** wraz z rosnącą konkurencją i dojrzewaniem rynku. W 2023 roku typowy zestaw 600W kosztował 2 500-3 500 PLN. W 2026 to 1 500-2 500 PLN. To redukcja ~30-40% w 3 lata.

Mimo to Polska jest **droższa niż Niemcy o 30-70%**. Niemiecki zestaw 800W za 300-700 EUR = 1 300-3 000 PLN. Polski zestaw o tej samej mocy: 2 000-3 000 PLN. Ten spread wyjaśnia się:
- Mniejsze wolumeny w PL
- Mniejsza liczba konkurujących dostawców
- Import z Azji przez pośredników niemieckich lub austriackich
- Podatek VAT 8% w PL (vs 0% dla balkonowej PV w Niemczech do mocy 800W — ulga podatkowa od 2023)

### 1.4 Komponenty 2026 — standard rynkowy

**Moduły**:
- Standard: monokrystaliczny PERC, 400-435 W (czasem 445 W), wymiary typowo 172×113 cm (duży) lub 166×99 cm (średni). Dla balkonu 465 cm długości mieszczą się **2 panele poziome** (duże) lub **3 panele (średnie)**.
- Sprawność ogniw: 20-22%
- Gwarancja: 25 lat (liniowa, ~88% po 25 latach), 12 lat produktowa
- Producenci: Jinko, Longi, JA Solar, Canadian Solar, Trina. Wszyscy chińscy — europejscy (np. Meyer Burger) rzadko w segmencie balkonowym z powodu ceny.

**Mikroinwertery**:
- Standard: plug-and-play, moc wyjściowa 600-800 W (zgodnie z limitem), 1-4 wejścia MPPT
- Modele obecne w PL (2026-04-21):
  - **Hoymiles HMS-800W-2T** — klasyczny, Wi-Fi, aplikacja S-Miles
  - **Growatt NEO 2000M-X** — nowy, 2 MPPT
  - **Deye SUN-M80G3** / **SUN-M80G4** — azjatycki, szeroka kompatybilność
  - **Envertech EVT-800** — segment low-end
  - **EcoFlow PowerStream** — premium z magazynem
- Gwarancja: 10-12 lat produktowa, rzadko dłuższa
- Sprawność: 95-97% (europejska EU-eff)

**Wtyczka**: Schuko (zwykła) dominuje. Polski standard rekomenduje dodanie puszki podtynkowej z wyłącznikiem. Wieldi zestawy premium idą w kierunku **Wieland** (niemiecka wtyczka dedykowana dla balkonowej PV, bezpieczna pod kątem dotyku).

**Akcesoria montażowe**:
- Uchwyty do balustrady (J-hook, łączniki rurowe, klucze pionowe) — 100-300 PLN
- Kabel AC (plug-in do gniazda lub hardwired) — 50-150 PLN
- Ewentualna ramka odchylona (do wariantu 60°-30° tilt) — 200-600 PLN dodatkowo

### 1.5 Porównanie z niemieckim rynkiem Balkonkraftwerk

| Parametr | Niemcy (2026) | Polska (2026) |
|----------|---------------|---------------|
| Limit mocy wyjściowej | 800 W (z maja 2024, wcześniej 600 W) | 800 W (EU standard) |
| Zgłoszenie do OSD | **Nie** (tylko Marktstammdatenregister) | **Tak** (WZ-MI do ENEA Operator) |
| Schuko plug-and-play | **Dopuszczony** (VDE update koniec 2025) | Praktycznie stosowany, formalnie wymaga instalatora `UNCONFIRMED` |
| VAT | **0%** dla ≤800 W (od 2023) | 8% |
| Zgoda wspólnoty / Miteigentümergemeinschaft | Tak dla części wspólnych | Tak |
| Typowa cena zestawu | 300-700 EUR (≈ 1 300-3 000 PLN) | 1 500-4 500 PLN |
| Dostępność w supermarketach | Lidl, Aldi, Kaufland, Obi | Leroy Merlin, Castorama |
| Dojrzałość rynku | Mainstream (miliony instalacji) | Wzrostowy segment |

**Wniosek**: polski rynek idzie w kierunku niemieckiego z opóźnieniem ~2-3 lat. VAT 0% w PL byłby kolejnym krokiem, ale `UNCONFIRMED` czy jest w planach.

---

## 2. Rynek PL dachowej wspólnotowej PV — stan 2026-04-21

### 2.1 Kontekst ekonomiczny

**Tarcza energetyczna wygasa III kwartał 2025.** Od 2026 wspólnoty i spółdzielnie mieszkaniowe płacą **pełne stawki rynkowe** za energię zużywaną w częściach wspólnych — windy, oświetlenie klatek, hydrofor, wentylacja, oświetlenie terenu. To tłumaczy wzmożone zainteresowanie wspólnot fotowoltaiką w 2026 ([gazetaprawna.pl 2026-04-21](https://www.gazetaprawna.pl/biznes/energetyka/artykuly/10923493,fotowoltaika-w-blokach-mieszkalnych-nowe-przepisy-i-doplaty-dla-wspol.html)).

Typowe zużycie części wspólnych dla bloku wielorodzinnego 40 mieszkań `UNCONFIRMED`:
- Winda: 3 000-6 000 kWh/rok
- Oświetlenie klatek (LED, czujki ruchu): 1 500-3 000 kWh/rok
- Hydrofor, pompy: 1 500-4 000 kWh/rok
- Wentylacja, automatyka: 500-1 500 kWh/rok
- Oświetlenie zewnętrzne (parking, klatki wejściowe): 2 000-4 000 kWh/rok
- **Razem: 8 500 - 18 500 kWh/rok**, typowy `~12 000 kWh/rok`

Przy stawce bez tarczy ~1,00 PLN/kWh brutto (`UNCONFIRMED` — aktualna stawka zależy od taryfy B23 lub C11 dla wspólnoty) = **12 000 PLN rocznie na rachunki wspólnoty za części wspólne**.

### 2.2 Potencjał dachowej PV na bloku wielorodzinnym

**Dach bloku 40-mieszkaniowego** typowo:
- Powierzchnia dachu płaskiego / pochyłego: 300-500 m² `UNCONFIRMED` — zależne od bryły
- Dostępna pod PV (po odjęciu kominów, lukarn, wyjść): 60-70% = ~200-350 m²
- Typowy układ PV na dachu płaskim: ekspansja ~6 m²/kWp przy układzie 10-15° stopy + waga balastu
- **Potencjał ~30-50 kWp** na typowym dachu bloku (40 mieszkań)

Roczna produkcja (przy orientacji optymalnej, PVGIS Bydgoszcz, 30° tilt, 0° aspect = S):
- 1 kWp ≈ 1 060 kWh/rok (z tabeli fallback PVGIS_RECIPE.md, `UNCONFIRMED` — potrzebny faktyczny PVGIS call dla aktualnego dachu)
- 30 kWp ≈ 31 800 kWh/rok
- 50 kWp ≈ 53 000 kWh/rok

Przy zużyciu części wspólnych 12 000 kWh/rok **auto-konsumpcja** pokrywa to z nawiązką. Nadmiar sprzedawany do sieci (RCE × 1,23 ≈ 0,35-0,40 PLN/kWh) daje dodatkowy przychód, ale zasadą jest optymalizacja na auto-konsumpcję (wyższa wartość).

### 2.3 Koszty dachowej PV 2026 (rząd wielkości)

`UNCONFIRMED` — ceny różnią się znacznie w zależności od wykonawcy, skali, dostępności dachu:

| Pozycja | Koszt jednostkowy | Dla 30 kWp |
|---------|-------------------|------------|
| Moduły (np. Jinko 430W × 70 szt.) | 600 PLN/szt. | 42 000 PLN |
| Inwertery (2× 15 kW lub 3× 10 kW) | ~10 000 PLN/szt. | 20-30 000 PLN |
| Konstrukcja (balast, wsporniki) | ~150 PLN/moduł | 10 500 PLN |
| Okablowanie DC, AC, rozdzielnica | ~8 000 PLN | 8 000 PLN |
| Wyłącznik PV Stop | 2 000-4 000 PLN | 3 000 PLN |
| Robocizna montażu | ~400 PLN/kWp | 12 000 PLN |
| Dokumentacja projektowa + odbiór | 3 000-6 000 PLN | 5 000 PLN |
| **Rzeczoznawca ppoż** (wymóg >6,5 kW) | 1 500-4 000 PLN | 3 000 PLN |
| **RAZEM** | | **~100 000 - 130 000 PLN** |

Z **Grantem OZE BGK 50% = ~50 000-65 000 PLN do pokrycia przez wspólnotę**.

Dla 40 mieszkań: **1 250-1 625 PLN/lokator** jednorazowo, amortyzowane w czynszu.

### 2.4 Magazyn energii dla wspólnoty

Dodatkowy komponent, opcjonalny:
- Pojemność typowa: 15-30 kWh (dla wspólnoty 40 mieszkań i zużycia 12 000 kWh/rok części wspólnych)
- Cena: 1 500-2 500 PLN/kWh pojemności (Li-ion) `UNCONFIRMED`
- Dla 20 kWh: ~40 000 PLN netto
- **Plus koszt adaptacji pomieszczenia technicznego do EI60/REI60/EI30: 12 000-35 000 PLN** `UNCONFIRMED` (patrz `PRZEPISY_PL.md §2.3`)
- **Plus rzeczoznawca ppoż** (jeśli wchodzi zgłoszenie budowy >30 kWh): 2 000 PLN `UNCONFIRMED`
- **Razem: ~55 000-80 000 PLN dla magazynu 20 kWh w bloku**

Z Grantu OZE BGK 50% = 27 500-40 000 PLN do pokrycia przez wspólnotę.

Czy to się opłaca? Analiza w `biznes/BUSINESS_CASE.md` po Fazie 3. Szybka intuicja: przy zużyciu części wspólnych 12 000 kWh/rok, magazyn 20 kWh pozwoli przesunąć produkcję dzienną na noc (oświetlenie klatek, dżętnia wentylacja nocna). Wartość tego `UNCONFIRMED` — trzeba sprawdzić profil zużycia godzinowego części wspólnych.

---

## 3. Dojrzałość ekosystemu wykonawców

### 3.1 Dla balkonowej PV

**Jakub może samodzielnie** (plug-and-play Schuko) lub z pomocą **elektryka SEP** (dla wariantu hardwired lub jeśli zgoda wspólnoty wymaga certyfikowanej realizacji). W PL wielu instalatorów fotowoltaicznych ma ofertę dla balkonowej — wycena typowo:
- Montaż "pod klucz" (wizja + zamocowanie + uruchomienie): 300-800 PLN `UNCONFIRMED`
- Dla wariantu z wspornikiem odchylonym: +200-500 PLN

### 3.2 Dla dachowej wspólnotowej PV

Ekosystem wykonawców w Bydgoszczy i okolicach: wg snippets znaleziono kilkunastu dostawców regionalnych (`UNCONFIRMED` — pełna weryfikacja poza zakresem tego researchu; trzeba zrobić oddzielną kwerendę "firma fotowoltaiczna Bydgoszcz" + referencje wspólnot). Ogólnopolskie firmy:
- **Columbus Energy** — duża, zajmuje się małymi i większymi instalacjami
- **Polenergia PV** — premium, integracje z magazynami
- **Solwis** — fokus na PV, własna ekipa PPOŻ
- **Kobo Energy** — mid-tier, ma doświadczenie z wspólnotami
- **InEnergy** — wyspecjalizowani w Grant OZE

W Bydgoszczy — trzeba sprawdzić oferty lokalne, z referencjami od wspólnot z tej samej okolicy. Dobra kwerenda po Fazie 2.

---

## 4. Sygnały ryzyka rynkowego

`UNCONFIRMED` — to są sygnały, nie pewne fakty:

- **Zmiana regulacji dotujących** — program Mój Prąd jest cyklicznie wznawiany z różnymi warunkami. Kolejne nabory mogą mieć mniej korzystne stawki.
- **Możliwa zmiana współczynnika korekcyjnego net-billing** — obecnie 1,23, ale to decyzja URE/Ministerstwa, która może ulec zmianie pod wpływem sytuacji na rynku energii.
- **Ceny rynkowe energii (RCE)** — mocno zmienne. Spadek RCE obniża wartość nadwyżki oddanej do sieci.
- **Cła importowe na panele chińskie** — UE rozważała wprowadzenie, `UNCONFIRMED` aktualny stan. Wprowadzenie podniosłoby ceny 15-30%.
- **Zmiana cen energii dla gospodarstw domowych** — jeśli Rząd przywróci tarczę, auto-konsumpcja straci wartość. Obecnie tarcza wygasła dla części wspólnych, ale dla gospodarstw może nadal obowiązywać limit cenowy `UNCONFIRMED`.

## 5. Rekomendacje badawcze do Fazy 2

Co jeszcze trzeba zweryfikować zanim policzymy business case:
1. Aktualna stawka Jakuba PLN/kWh (z faktury / umowy) — wpływa na payback dla balkonowej
2. Czy ma G11 czy G12w — wpływa na auto-konsumpcję
3. Roczne zużycie energii (z faktury rocznej, lub suma 12 miesięcznych)
4. Liczba mieszkań we wspólnocie, zarządca aktywny?
5. Czy wspólnota ma sensowne pomieszczenie techniczne dla potencjalnego magazynu
6. Stan dachu bloku — czy wymaga remontu zanim się postawi PV (dach < 10 lat = gotowy; dach > 20 lat = wymaga remontu)

Te pytania są zebrane w checkpoint'cie Fazy 1 → do Jakuba.
