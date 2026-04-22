# Budżet — pełne PLN rozpisanie obu ścieżek

> **AKTUALIZACJA 2026-04-22 (Faza 5 post-dokument wspólnoty)**: Po otrzymaniu planu gospodarczego (`docs/Konopnickiej 33.pdf`) — wspólnota ma **83 lokale (nie 40), 11 pięter (nie 9 → budynek wysoki, kategoria W)**. Koszt ppoż C rewizja **120 000 → 166 000 PLN** (obowiązek prawny DSO + oddymianie dla budynku wysokiego). Per lokator **3 102 PLN** (nie 5 290). Finansowanie z funduszu remontowego 303 917 PLN na koniec 2026 — **bez podnoszenia zaliczek**. Szczegółowe liczby w `research/WSPOLNOTA_DANE_FORMALNE.md §7`.

Dwie ścieżki z pełnymi pozycjami. Wszystkie kwoty brutto chyba że wskazano inaczej. VAT 8% dla instalacji w budynkach mieszkalnych do 300 m² (ustawa VAT art. 41 ust. 12). Dane z `research/PRODUKTY.md`, `research/WSPOLNOTA_SCENARIUSZ.md`, `biznes/BUSINESS_CASE.md`.

## Streszczenie

- **Ścieżka A (balkon Jakuba indywidualnie)**: **3 050-4 700 PLN jednorazowo**. Sanity check vs. STAN_RYNKU_2026.md: PLN/Wp wynosi 3,81-5,88 vs. typowe 3,13-3,75 PLN/W dla zestawów 800W. Zakres górny odzwierciedla dodatki (inspekcja, antyrdzewka).
- **Ścieżka B (wspólnota, PV + magazyn + ppoż C)**: **303 000 PLN brutto**, po Grant OZE 50% **211 500 PLN**. Na lokator (83 mieszkania): **5 290 PLN jednorazowo** lub **~150 PLN/mies. przez 3 lata** przez fundusz remontowy.
- **Rezerwa**: **10% dodatkowo** na obie ścieżki jako bufor na nieprzewidziane (typowa praktyka w budownictwie).

---

## Ścieżka A — balkon indywidualny

### A.1 Zestaw PV 800W (Hoymiles HMS-800W-2T + 2×400W monokrystaliczny)

| Pozycja | Kwota brutto | Źródło ceny | Notatka |
|---|---|---|---|
| 2 × panel monokrystaliczny 400W (np. Jinko Tiger Neo, Longi Hi-MO) | 1 200 PLN | [PRODUKTY.md #4/#6](../research/PRODUKTY.md) | `UNCONFIRMED` — snippet Allegro 2026-04-21 |
| Mikroinwerter Hoymiles HMS-800W-2T z Wi-Fi | 1 200 PLN | [PRODUKTY.md #4](../research/PRODUKTY.md) | `UNCONFIRMED` |
| Uchwyty montażowe do balustrady (J-hook + kątownik) | 200 PLN | Szacunek rynkowy | `UNCONFIRMED` |
| Kabel AC 10m + wtyczka Schuko | 100 PLN | Szacunek | `UNCONFIRMED` |
| Kable DC + konektory MC4 | 80 PLN | W zestawie typowo | — |
| Dokumentacja + deklaracja zgodności NC RfG | 0 PLN | W zestawie | — |
| **Razem zestaw** | **2 780 PLN** | | Rząd wielkości [STAN_RYNKU §1.2](../research/STAN_RYNKU_2026.md) |

### A.2 Dodatkowe pozycje Ścieżki A

| Pozycja | Kwota min. | Kwota max. | `UNCONFIRMED`? |
|---|---|---|---|
| Inspekcja konstruktora balustrady (opinia techniczna o nośności + korozji) | 300 PLN | 800 PLN | TAK — zależne od lokalnego wykonawcy |
| Antyrdzewka prętów balustrady (farba epoksydowa + robocizna) | 50 PLN | 500 PLN | TAK |
| Puszka elektryczna podtynkowa z wyłącznikiem ppoż | 80 PLN | 200 PLN | — |
| Elektryk SEP (opcjonalnie, dla hardwired) | 0 PLN | 400 PLN | — |
| Dokumentacja dla wspólnoty (wizualizacja, wniosek) | 0 PLN | 100 PLN | — |
| Opłata administracyjna wspólnoty (jeśli regulamin ją ma) | 0 PLN | 200 PLN | TAK |
| **Razem dodatkowe** | **430 PLN** | **2 200 PLN** | |

### A.3 Podsumowanie Ścieżki A

| Scenariusz | Cena łączna |
|---|---|
| Minimum (wszystko OK, Jakub samodzielny montaż plug-and-play) | **3 210 PLN** |
| Realistic (typowe dodatki) | **3 700 PLN** |
| Pesimistic (konstruktor droższy, antyrdzewka wymaga wykonawcy, elektryk dla hardwired) | **4 980 PLN** |
| **Z buforem 10%** | **3 530 - 5 480 PLN** |

**PLN/Wp**: 4,01-6,24 PLN/Wp. Vs. rynkowy benchmark 3,13-3,75 — wariant Jakuba jest **o 20-80% droższy niż typowy** z powodu dodatków (korozja balustrady, wymogi wspólnoty). To istotny sygnał że ekonomika balkonowa indywidualna nie jest łatwa.

### A.4 Kalkulacja roczna kosztów operacyjnych (przez 15 lat)

| Pozycja | Rok 1-10 | Rok 11-15 |
|---|---|---|
| Ubezpieczenie OC rozszerzone o PV | 50-100 PLN/rok | 50-100 PLN/rok |
| Serwis inwertera (poza gwarancją) | 0 | 300-800 PLN jednorazowo |
| Czyszczenie paneli (deszcz + ręczne raz/rok) | 0 | 0 |
| **Suma OPEX 15 lat** | **750-1 500 PLN** | **300-800 PLN** |

---

## Ścieżka B — wspólnotowa (PV 25 kWp + magazyn 20 kWh + ppoż C)

### B.1 PV na dachu bloku

| Pozycja | Kwota brutto | Źródło |
|---|---|---|
| Moduły: 58 × Jinko Tiger Neo 430W TOPCon | 37 700 PLN | ~650 PLN/szt., `UNCONFIRMED` — rząd wielkości rynku hurtowego 2026 |
| Inwertery stringowe: 2 × Growatt MID 15KTL3-X | 20 000 PLN | ~10 000 PLN/szt., `UNCONFIRMED` |
| Konstrukcja balastowa (stopy + balast betonowy) | 10 500 PLN | ~150 PLN/moduł × 58 + transport |
| Okablowanie DC + AC + rozdzielnia podlicznikowa | 8 000 PLN | Szacunek |
| Wyłącznik PV Stop (DC Disconnect) + okablowanie ppoż PV | 4 000 PLN | — |
| **Razem moduły + inwerter + konstrukcja + okablowanie** | **80 200 PLN** | |

### B.2 Magazyn energii LiFePO4 20 kWh

| Pozycja | Kwota brutto | Notatka |
|---|---|---|
| Bateria LiFePO4 20 kWh modułowa | 36 000 PLN | ~1 800 PLN/kWh, niższy koniec premiów klasy 2026 `UNCONFIRMED` |
| BMS + EMS (system zarządzania) | 6 000 PLN | W zestawie z niektórymi producentami |
| Szafa / rama montażowa | 2 000 PLN | — |
| Okablowanie DC/AC do magazynu | 1 000 PLN | — |
| **Razem magazyn** | **45 000 PLN** | ~2 250 PLN/kWh complete, zgodne z rynkiem |

### B.3 Adaptacja pomieszczenia technicznego

| Pozycja | Kwota brutto | `UNCONFIRMED`? |
|---|---|---|
| Ściany EI60 (tynk ppoż lub płyty GK ppoż) | 6 000 PLN | TAK — zależne od stanu wyjściowego |
| Strop REI60 (jeśli modernizacja) | 4 000 PLN | TAK |
| Drzwi EI30 | 2 500 PLN | — |
| Wentylacja mechaniczna z filtrami | 4 500 PLN | — |
| Autonomiczna czujka dymu + gaśnica ABC 6 kg + oznakowanie | 1 500 PLN | — |
| Instalacja elektryczna pomieszczenia + oświetlenie LED | 1 500 PLN | — |
| **Razem adaptacja** | **20 000 PLN** | Zakres B-C typowego pomieszczenia |

### B.4 Dokumentacja i uzgodnienia

| Pozycja | Kwota brutto |
|---|---|
| Projekt wykonawczy PV (uprawnienia instalacyjne + certyfikat PV) | 5 000 PLN |
| Rzeczoznawca ppoż — uzgodnienie PV (wymagane >6,5 kW) | 3 000 PLN |
| Dokumentacja powykonawcza + odbiór techniczny | 2 000 PLN |
| Zgłoszenie mikroinstalacji do ENEA Operator | 0 PLN (bezpłatne) |
| Umowa prosumenta lokatorskiego | 0 PLN |
| Usługa consultingowa Grant OZE (opcjonalnie) | 2 000 PLN |
| **Razem dokumentacja** | **12 000 PLN** |

### B.5 Robocizna

| Pozycja | Kwota brutto |
|---|---|
| Montaż PV na dachu (58 paneli + konstrukcja + okablowanie) | 10 000 PLN |
| Instalacja magazynu energii + EMS | 3 500 PLN |
| Montaż wyłącznika PV Stop + rozdzielnia | 1 500 PLN |
| **Razem robocizna PV** | **15 000 PLN** |

### B.6 Modernizacja ppoż budynku — zakres C dla budynku wysokiego 11p. (OBOWIĄZEK PRAWNY, bez Grant OZE)

**Budynek 11-piętrowy Konopnickiej 33 = kategoria W (wysoki) wg rozporządzenia o warunkach technicznych § 8**. Zakres C wymogów prawnych (nie "opcjonalna modernizacja"):

| Pozycja | Kwota brutto | Obowiązek prawny |
|---|---|---|
| PWP (Przeciwpożarowy Wyłącznik Prądu) główny budynku | 18 000 PLN | TAK |
| Oświetlenie ewakuacyjne klatek (autonomiczne LED) | 16 000 PLN | TAK dla wysokich |
| Autonomiczne czujki dymu w częściach wspólnych (~30 szt. × 200 PLN + montaż) | 8 000 PLN | TAK |
| **DSO (Dźwiękowy System Ostrzegawczy)** — 11 pięter, głośniki + centrala | 42 000 PLN | **TAK dla budynków wysokich** |
| **Oddymianie klatek schodowych** — klapy oddymiające | 40 000 PLN | **TAK dla wysokich § 245** |
| Hydranty wewnętrzne 25/33 mm na każdej kondygnacji + znaki ewakuacyjne | 20 000 PLN | TAK |
| Robocizna + projekt ppoż budynku (rzeczoznawca ppoż, projekt dla kategorii W) | 22 000 PLN | — |
| **Razem ppoż C dla 11p.** | **166 000 PLN** | |

**To nie jest "opcjonalna modernizacja" — to jest obowiązek prawny** wynikający z rozporządzenia Ministra Infrastruktury z 12.04.2002 w sprawie warunków technicznych budynków i ich usytuowania, §§ 207-263 dla kategorii W. Jeśli obecna instalacja ppoż bloku nie spełnia tych wymogów (co jest prawdopodobne dla bloku z lat 70-80), wspólnota **ma obowiązek dostosowania**, niezależnie od projektu PV.

### B.7 Podsumowanie Ścieżki B

| Kategoria | Brutto | Grant OZE 50% | Po dotacji |
|---|---|---|---|
| PV 25 kWp (B.1) | 80 200 | 40 100 | 40 100 |
| Magazyn 20 kWh (B.2) | 45 000 | 22 500 | 22 500 |
| Adaptacja pomieszczenia (B.3) | 20 000 | 10 000 | 10 000 |
| Dokumentacja PV (B.4) | 12 000 | 6 000 | 6 000 |
| Robocizna PV (B.5) | 15 000 | 7 500 | 7 500 |
| **Podsuma PV + magazyn + ppoż PV** | **172 200** | **86 100** | **86 100** |
| Ppoż budynku (B.6) — poza grantem, OBOWIĄZEK PRAWNY dla 11p. | 166 000 | 0 | 166 000 |
| **RAZEM** | **338 200** | **86 100** | **252 100** |
| **Z buforem 10%** | **372 020** | **94 710** | **277 310** |

**Drobne uwagi**:
- Kwota 86 100 PLN dotacji to realna szacunkowa. W [BUSINESS_CASE §3.1](../biznes/BUSINESS_CASE.md) i [WSPOLNOTA_SCENARIUSZ §3.5](../research/WSPOLNOTA_SCENARIUSZ.md) używałem zaokrąglenia 91 500 PLN (50% z 183 000). Różnica wynika z różnic w detalowaniu B.1-B.5 — 172 200 vs. 183 000. Użyj węższego rzędu w pitchu dla wspólnoty (86-92 k), bez pretensji do precyzji przed realnym ofertowaniem.
- Ppoż budynku 166 000 PLN jest **rewizją dla kategorii W (wysoki, 11 pięter)** zgodnie z `research/WSPOLNOTA_DANE_FORMALNE.md §2.2`. Dokładny kosztorys pojawi się po wizji rzeczoznawcy ppoż z uprawnieniami do budynków wysokich.

### B.8 Per lokator (83 mieszkania, potwierdzone z planu gospodarczego 2026)

| Kategoria | Kwota na mieszkanie |
|---|---|
| PV + magazyn + adaptacja + dokumentacja + robocizna (po dotacji 50% Grant OZE) | 1 037 PLN |
| Ppoż budynku C dla budynku wysokiego 11p. (obowiązek prawny) | 2 000 PLN |
| **Razem na mieszkanie** | **3 037 PLN** |
| Z buforem 10% | **3 341 PLN** |

**Finansowanie z funduszu remontowego — BEZ dodatkowych zaliczek**:
- Stan funduszu remontowego na koniec 2026: 303 917 PLN (plan gospodarczy 2026)
- Koszt projektu z buforem: 277 310 PLN (91% stanu funduszu)
- Bufor po realizacji: ~26 000 PLN
- Obecne zaliczki 1,80 PLN/m² × 12 mies. = **91 897 PLN/rok** — bez zmian
- Odbudowa funduszu do stanu pre-projektowego: ~3 lata (2029)

### B.9 Kalkulacja roczna kosztów operacyjnych wspólnoty (przez 15 lat)

| Pozycja | Rok 1-5 | Rok 6-10 | Rok 11-15 |
|---|---|---|---|
| Przegląd techniczny PV (coroczny, firma) | 1 500 | 1 500 | 1 500 |
| Przegląd magazynu + EMS | 800 | 800 | 800 |
| Przegląd ppoż (coroczny, obowiązkowy) | 2 000 | 2 000 | 2 000 |
| Serwis hydrantów i DSO | 1 500 | 1 500 | 1 500 |
| Ubezpieczenie rozszerzone | 500 | 500 | 500 |
| Wymiana bezpieczników / drobne serwisy | 500 | 800 | 1 500 |
| Fundusz na wymianę inwertera (prorata) | 1 000 | 1 500 | 2 000 |
| **Suma OPEX rocznie** | **7 800** | **8 600** | **9 800** |

Roczne przychody/oszczędności wspólnoty ~20 000 PLN z PV. Netto po kosztach operacyjnych: ~11 000-12 000 PLN rocznego benefitu + wartość modernizacji ppoż (zgodność prawna, bezpieczeństwo, ubezpieczenie).

---

## Porównanie per Jakub

| | Ścieżka A (balkon) | Ścieżka B (wspólnotowa, udział) |
|---|---|---|
| Jednorazowy koszt Jakuba | 3 200-5 000 PLN | 5 150-5 700 PLN |
| Roczna oszczędność Jakuba | ~290 PLN (własny prąd) | ~500 PLN (niższy czynsz) |
| Payback | 7-10 lat | 10-11 lat (z ppoż), 4-5 lat (PV only) |
| Wartość dodana | Tylko PV | PV + bezpieczeństwo ppoż + wartość nieruchomości |
| NPV 15 lat dla Jakuba | +1 020 PLN | +2 900 PLN (PV only) |
| Ryzyka | Korozja balustrady, odmowa wspólnoty, wiatr | Odmowa wspólnoty, BGK odrzuca wniosek |

**Netto dla Jakuba Ścieżka B jest lepsza**, nawet bez liczenia wartości modernizacji ppoż. Szczegóły w [REKOMENDACJA.md](../biznes/REKOMENDACJA.md).

---

## Finansowanie

### Ścieżka A

- **Źródło**: środki własne Jakuba (z konta oszczędnościowego lub TFI)
- **Alternatywy**: kredyt gotówkowy (niepolecane — koszt kredytu zniszczy payback)
- **Ulga PIT** (rozważyć): art. 26h ustawy PIT — ulga termomodernizacyjna do 53 000 PLN, ale `UNCONFIRMED` czy obejmuje balkonowa PV w bloku wielorodzinnym bez prawa do dachu. Pytanie do księgowej.

### Ścieżka B

- **Źródło wspólnoty**: fundusz remontowy + zaliczkowa dopłata lokatorów + Grant OZE BGK
- **Alternatywy**: kredyt komercyjny wspólnoty (niektóre banki oferują specjalnie pod projekt OZE, oprocentowanie 6-8% nominalnie)
- **Grant OZE BGK 50% kosztów kwalifikowanych** — kluczowe. Deadline 30.06.2026.
- **Dotacje unijne FEnIKS / KPO** — dla większych projektów (`UNCONFIRMED` czy wspólnota Jakuba kwalifikuje się).

---

## Rezerwa

**10% budżetu każdej ścieżki** jako bufor na:
- Nieprzewidziane wymogi techniczne (np. wymiana kabla ze względu na większy przekrój)
- Opóźnienia cenowe dostawców
- Dodatkowe ekspertyzy (konstruktor, rzeczoznawca)
- Drobne naprawy podczas realizacji

Rezerwa nie wpływa na budżet startowy — uruchamiana tylko w razie potrzeby. Jeśli nie została wykorzystana, wraca do funduszu wspólnoty (B) lub do Jakuba (A).

---

*Źródła cen: [research/PRODUKTY.md](../research/PRODUKTY.md), [research/STAN_RYNKU_2026.md](../research/STAN_RYNKU_2026.md), [research/WSPOLNOTA_SCENARIUSZ.md](../research/WSPOLNOTA_SCENARIUSZ.md). Data dostępu źródeł: 2026-04-21. Wszystkie pozycje oznaczone `UNCONFIRMED` wymagają potwierdzenia oferty lokalnego wykonawcy przed podpisaniem umowy.*
