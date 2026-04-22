# Porównanie alternatyw — co zamiast fotowoltaiki?

Pięć wariantów odniesienia do fotowoltaicznego scenariusza. Wszystkie wycenione z tą samą stopą dyskontową (5% real, 15 lat), z perspektywy **Jakuba jako indywidualnego inwestora**, dysponującego kwotą CAPEX ~3 000 PLN (odpowiednik balkonowej) lub ~5 300 PLN (odpowiednik udziału we wspólnotowej). Pełne założenia: [BUSINESS_CASE.md §1](BUSINESS_CASE.md).

## Streszczenie (5 bullets)

- **(A) Do nothing** — 0 CAPEX, 0 oszczędności. NPV 0 PLN. Baseline.
- **(B) Magazyn energii bez PV** — nie możliwy w bloku mieszkalnym w gospodarstwie domowym bez istniejącej PV — nie kwalifikuje się do Mój Prąd; dla G11 bez dwustrefowej taryfy magazyn samodzielny nie ma sensu ekonomicznego. **NPV: silnie ujemny.**
- **(C) Odroczenie do rooftop** — czekać na wspólnotową PV 2027-2028 lub wymianę dachu 2030+ (`UNCONFIRMED` terminy wspólnoty). NPV: 0 dzisiaj, potencjalna korzyść 2-5 lat później. **Scenariusz "czekamy na wspólnotę" się pokrywa z tym.**
- **(D) Termomodernizacja / efektywność energetyczna** — wymiana LED-ów, uszczelnienie okien, pompa ciepła. Dla mieszkania bez własnego ogrzewania elektrycznego raczej niewielki potencjał (3 000 PLN zwrot w 5-10 lat). **Sensowne dla niektórych punktów, nie wyklucza PV.**
- **(E) ETF / Obligacje skarbowe 10-letnie** — 3 000 PLN @ 6% nominalnie (obligacje skarbowe 10-letnie 2026) po 15 latach = ~7 190 PLN. Prosto, bez ryzyka, bez zaangażowania. **NPV z perspektywy Jakuba: +3 000 PLN realnie** po inflacji (3%). Dla środków których nie ma w ETF + TFI, to lepsze niż PV balkonowy 600W dla pojedynczego Jakuba.

**Wniosek**: ETF/obligacje bije balkonową PV na plecach. Dachowa PV wspólnotowa bije wszystkie alternatywy dzięki Grant OZE + skali. **Odroczenie to ścieżka dla Jakuba jeśli wspólnota odmówi natychmiast — wrócić za 2-3 lata gdy ceny spadną i wspólnota dojrzewa.**

---

## 1. Alternatywa A — Do nothing (status quo)

**Założenia**: Jakub nic nie robi, trzyma pieniądze na koncie osobistym, płaci rachunki za prąd jak dotychczas.

**CAPEX**: 0 PLN.
**Przychody/oszczędności**: 0 PLN/rok.
**NPV 15 lat**: **0 PLN** (baseline).
**IRR**: nieokreślone.

**Ryzyka**:
- Stawki energii rosną (historycznie 2-4%/rok realnie). Bez PV Jakub ponosi pełen wzrost.
- Brak zabezpieczenia przy awarii sieci (ale ten argument dotyczy tylko magazynu z inverterem hybrydowym, nie balkonowej PV)

**Kiedy to jest dobry wybór**:
- Gdy CAPEX na PV jest priorytetem dla innego, większego projektu (remont kuchni, dziecko, zmiana samochodu).
- Gdy stawki energii spadną zauważalnie (brak sygnału w 2026).
- Gdy Jakub jest najemcą (nie dotyczy — Jakub jest właścicielem).

**Werdykt**: Baseline. Wszystkie inne alternatywy oceniane przeciwko tej.

---

## 2. Alternatywa B — Magazyn energii bez PV

**Założenia**: Jakub kupuje magazyn energii plug-and-play (EcoFlow Delta Pro lub podobny, ~5 kWh @ 1 500-2 000 PLN/kWh dla tej kategorii). Ładuje go z sieci w nocy (taryfa G12w) i rozładowuje w dzień. Oszczędza na spreadzie taryf.

**Problem 1**: Jakub prawdopodobnie ma G11 (stała stawka, bez spreadu). Przełączenie na G12w wymaga wymiany licznika (~300-500 PLN) i zmiany umowy. Do potwierdzenia — `UNCONFIRMED`.

**Problem 2**: Nawet z G12w, różnica dzień/noc w PL to ~0,15-0,25 PLN/kWh. Dla magazynu 5 kWh × 365 dni × 0,20 PLN = **~365 PLN rocznie oszczędności**. CAPEX 7 500-10 000 PLN. **Payback 20+ lat.**

**Problem 3**: Program Mój Prąd dla magazynu wymaga **istniejącej PV**. Jakub jako magazyn-only nie kwalifikuje się do dotacji. Musiałby płacić pełną cenę.

**Problem 4**: Magazyn w mieszkaniu to zajęcie ~0,5 m² miejsca (szafa) i koszt ppoż (autonomiczna czujka dymu, pomieszczenie nie-pobytowe). Ograniczenie praktyczne.

**NPV 15 lat**: **-4 500 PLN** (zestaw nie zwróci się).
**IRR**: ujemna.

**Werdykt**: **Odrzucone.** Magazyn samodzielny nie ma sensu ekonomicznego bez PV. Ma sens dopiero jako dodatek do istniejącej instalacji lub w ramach wspólnotowej propozycji.

---

## 3. Alternatywa C — Odroczyć do dachowej instalacji

**Założenia**: Jakub nic nie robi w 2026. Czeka na jedną z dwóch sytuacji:
- **C1.** Wspólnota mieszkaniowa rusza z projektem dachowym (ścieżka zalecana) — Jakub dołącza przez udział.
- **C2.** Dach bloku jest remontowany (wymiana pokrycia, termomodernizacja) w okolicach 2028-2030 i przy tej okazji wspólnota dokłada PV.

**NPV scenariusza C1** — zobacz Scenariusz B w [BUSINESS_CASE.md §3](BUSINESS_CASE.md). Per lokator: **+500 PLN/rok oszczędności** × (anuitet 15 lat od momentu uruchomienia @5%) - 2 288 PLN udziału = **+2 898 PLN NPV** z perspektywy Jakuba.

**NPV scenariusza C2** — trudno oszacować bez konkretnej daty i konkretnego projektu. Jeśli 2029 i analogiczny (25 kWp + 20 kWh dla wspólnoty) z Jakubem jako lokatorem:
- Dyskonto 3 lat @5% real = 0,864
- NPV 2029 = +2 898 PLN × 0,864 = **+2 506 PLN** w wartości dzisiejszej

**Ryzyka scenariusza C**:
- Wspólnota odmówi uchwały → trzeba wracać do C2 lub do B (balkonowego)
- Grant OZE BGK może nie być dostępny w 2028+ (`UNCONFIRMED`)
- Ceny komponentów mogą wzrosnąć (mało prawdopodobne, trend spadkowy)
- Jakub może się przeprowadzić przed uruchomieniem (wtedy traci udział w projekcie wspólnoty)

**Werdykt**: **Silny konkurent dla balkonowego scenariusza A**. Dla Jakuba, jeśli wspólnota odmówi *teraz*, odłożenie o 2-3 lata jest ekonomicznie racjonalne. Nie traci zbyt wiele vs. natychmiastowy balkonowy.

---

## 4. Alternatywa D — Termomodernizacja i efektywność energetyczna

**Założenia**: Jakub wydaje 3 000 PLN na poprawę efektywności mieszkania zamiast PV:
- Wymiana wszystkich żarówek na LED najnowszej generacji (już prawdopodobnie zrobione): ~100 PLN, oszczędność ~40 PLN/rok
- Uszczelnienie okien i drzwi (blok lata 70-80 prawdopodobnie ma potrzebę): 800-1 500 PLN, oszczędność ogrzewania ~200-400 PLN/rok (ale ogrzewanie w bloku to CO z węzła, nie indywidualne → oszczędność idzie do wspólnoty, nie Jakuba)
- Zasłony termiczne, uszczelki parapetowe: 200-500 PLN, oszczędność ~50-100 PLN/rok
- Pompa ciepła (alternatywa dla CO) — nie dotyczy bloku
- Termostat + sterownik WiFi do CO jeśli ma własne: 300-800 PLN, oszczędność 5-10% CO (pozwala na obniżenie w nocy)

**Reality check**: dla typowego mieszkania w bloku wielorodzinnym z centralnym ogrzewaniem, indywidualna termomodernizacja daje **~200-400 PLN/rok** oszczędności. Dla budżetu 3 000 PLN — payback 8-15 lat (podobnie jak balkonowa PV).

**Dodatkowa korzyść niefinansowa**: komfort (cieplej zimą, chłodniej latem), mniej wilgoci, mniej pleśni. To wartościowe, ale trudne do wyrażenia w PLN.

**NPV 15 lat**: **+500 do +1 500 PLN** zależnie od zakresu i skuteczności.

**Werdykt**: **Niekonkurencyjne finansowo** z PV, ale **komplementarne**. Jakub może zrobić małe termomodernizacyjne prace (200-400 PLN) jako tanią optymalizację niezależnie od decyzji PV.

---

## 5. Alternatywa E — ETF / Polskie obligacje skarbowe

**Założenia**: Jakub inwestuje 3 000 PLN w polskie obligacje skarbowe 10-letnie (oprocentowanie 2026: ~6% nominalnie w pierwszym roku, potem indeksowane inflacją + 1-2%).

**Przypadek bazowy** (obligacje EDO 10-letnie, 2026 oprocentowanie pierwszego roku 6,00%, kolejnych = inflacja + 2%):
- Przy założonej inflacji 3% średnio: oprocentowanie ~5% w pozostałych latach
- Po 10 latach: 3 000 × (1,06 × 1,05^9) = ~5 000 PLN nominalnie
- Po 10 latach w wartości realnej (odjąć 3% inflacji/rok): 3 000 × (1,03 × 1,02^9) = ~4 289 PLN
- Realny zwrot: ~1 289 PLN za 10 lat z zerowym ryzykiem

**Rozciągnięcie do 15 lat** (reinwestycja w kolejne obligacje lub w IKE/IKZE):
- 15 lat, ~5% real średnio: 3 000 × 1,05^15 = **6 238 PLN realnie**
- Zysk realny: **+3 238 PLN NPV w wartości dzisiejszej**

**Alternatywa ETF akcyjne** (WIG20, MSCI ACWI, S&P 500):
- Historyczna średnia 7-9% real długoterminowo
- 3 000 × 1,08^15 = **9 517 PLN realnie**
- **+6 517 PLN NPV**
- Ale: ryzyko spadku 20-30% w dowolnym roku, konieczność trzymania 15 lat przez bessę

**Wada ETF**: zmienność. Jakub musi być psychicznie przygotowany na minus 30% w krótkim okresie. Dla niektórych to nieakceptowalne psychicznie.

**Werdykt**:
- Obligacje skarbowe — **Prosto, bez ryzyka, NPV +3 238 PLN dla 15 lat**. Bije balkonową PV (NPV +1 020 PLN dla 600W).
- ETF akcyjne — potencjalnie **NPV +6 500 PLN** dla 15 lat, ale z ryzykiem. Porównywalne z wspólnotową PV netto dla Jakuba (+2 900 PLN).

---

## 6. Tabela porównawcza wszystkich alternatyw

| Wariant | CAPEX | Roczny zwrot | NPV 15 lat @5% | IRR 15 lat | Ryzyko | Komentarz |
|---|---|---|---|---|---|---|
| A. Do nothing | 0 | 0 | 0 | n/a | n/a | Baseline |
| B. Magazyn sam | 7 500 | ~365 | -4 500 | ujemna | średnie | **Odrzucone** |
| C1. Czekać na wspólnotę (= Scenariusz B) | 2 288 | ~500 | **+2 898** | ~20% | niskie | Rekomendowane, jeśli wspólnota OK |
| C2. Czekać na remont dachu 2029 | 2 300 `UNCONFIRMED` | ~500 (od 2029) | **+2 506** | ~15% | średnie | Plan B jeśli wspólnota odmówi teraz |
| D. Termomodernizacja | 1 000-2 000 | 100-300 | +500 do +1 500 | ~10% | niskie | Komplementarne, nie konkurencyjne |
| E1. Obligacje EDO 10-letnie | 3 000 | real 5% | **+3 238** | ~5% | bardzo niskie | **Dominant nad balkonową PV jeśli chodzi tylko o NPV** |
| E2. ETF akcyjne (MSCI ACWI) | 3 000 | ~7-9% real | +6 517 | ~8% | wysokie | Dla długoterminowego inwestora |
| **Balkon 600W** (= Scenariusz A.Sens) | **2 700** | **291** | **+1 020** | **~12%** | **średnie** | Akceptowalne, ale nie rekomendowane |

---

## 7. Interpretacja matrycy

1. **Najlepsza rzecz do zrobienia dla Jakuba**: **włączyć się w scenariusz C1 (wspólnotowy)**. NPV +2 898 PLN i najniższe ryzyko — wspólnota ma większą skalę, dotację, ppoż synergię.

2. **Jeśli C1 niedostępne (wspólnota odmówi teraz)**: **czekać (C2)** lub **zainwestować w obligacje skarbowe (E1)**. Oba dają lepsze NPV niż balkonowa PV 600W, z niższym ryzykiem. Balkonowa PV jest **3. wyborem**, nie pierwszym.

3. **Balkon 600W ma sens tylko w konkretnych sytuacjach**:
   - Gdy Jakub ma **wysoką motywację proekologiczną** i ekonomika jest drugorzędna
   - Gdy Jakub chce **edukacyjnie zrozumieć technologię** zanim wspólnota ruszy z dachową (mieć własny monitoring, doświadczenie)
   - Gdy Jakub **nie ma dostępu do IKE/IKZE/obligacji** i szuka miejsca na 3 000 PLN z jakimkolwiek zwrotem

4. **Termomodernizacja (D)** jest komplementarna — nie wyklucza żadnego innego wariantu, tania optymalizacja w 5-10 lat.

---

## 8. Assumption log

- Stopa dyskontowa 5% real dla wszystkich scenariuszy (spójność)
- Horyzont 15 lat (gwarancja panelu, typowy cykl decyzji inwestycyjnej)
- Obligacje EDO 10-letnie: oprocentowanie 2026 6,00% pierwszy rok, potem indeksowane (`UNCONFIRMED` aktualna oferta — Ministerstwo Finansów publikuje miesięcznie)
- ETF akcyjne: założenie 7-9% real średnio długoterminowo, na podstawie historii MSCI ACWI 1970-2025
- Termomodernizacja: oszczędności 200-400 PLN/rok dla budżetu 1-2 k PLN — rząd wielkości
- Inflacja 3% średnio
- Wszystkie NPV w wartości dzisiejszej (t=0 to 2026-04-21)
