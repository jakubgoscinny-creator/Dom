# Plan wykonania — od decyzji do pierwszego kWh

> **AKTUALIZACJA 2026-04-22**: Po planie gospodarczym wspólnoty (`docs/Konopnickiej 33.pdf`): 83 lokale, 11 pięter (budynek wysoki — ppoż C obligatoryjny), fundusz remontowy 303 917 PLN dostępny bez dodatkowych zaliczek. Kontakt administratora: Andrzej Szczepaniak, Wspólnoty.pl, ul. Chodkiewicza 15, 85-065 Bydgoszcz. Księgowa: Joanna Wendrowska, 797 626 976.

Dwie ścieżki, zgodnie z [biznes/REKOMENDACJA.md](../biznes/REKOMENDACJA.md). Ścieżka A (balkonowa indywidualna) jest fallback'em na wypadek odmowy wspólnoty. Ścieżka B (wspólnotowa) jest rekomendowana.

## Streszczenie (5 bullets)

- **Ścieżka A (balkon indywidualny)**: 8-10 tygodni od decyzji do pierwszego kWh. Dominują: opinia konstruktora balustrady (1 tydz.), zgoda wspólnoty (4-6 tyg.), zgłoszenie do OSD (30 dni), realizacja (1 tyg.).
- **Ścieżka B (wspólnotowa)**: 30-36 tygodni od decyzji do pierwszego kWh, z deadline'm Grant OZE BGK wymuszającym aktywność do końca czerwca 2026. Dominują: ofertowanie (2 tyg.), uchwała wspólnoty (2-3 tyg.), projekt + wniosek BGK (3-4 tyg.), decyzja BGK (do 30 dni), realizacja (6-10 tyg.), zgłoszenie OSD (30 dni).
- **Kluczowe zależności Ścieżki B**: projekt musi być gotowy przed złożeniem wniosku BGK (nie można rozpocząć prac przed decyzją dotacyjną, inaczej BGK odrzuci). Zgłoszenie do ENEA Operator robi dopiero po realizacji.
- **Kluczowe zależności Ścieżki A**: inspekcja konstruktora balustrady to pierwsza rzecz po decyzji — blokuje zamówienie paneli. Zgoda wspólnoty musi być **pisemna** (milczenie to nie zgoda).
- **Identyfikacja ról wymagających uprawnień**: SEP dla hardwired'a Schuko (opcjonalne dla plug-and-play, rekomendowane dla bezpieczeństwa), rzeczoznawca ppoż dla >6,5 kW instalacji (tylko Ścieżka B), konstruktor dla oceny balustrady (Ścieżka A).

---

## Ścieżka A — balkon indywidualny (jeśli wspólnota odmówi dachowej)

### Faza A.1 — Due diligence (tydzień 1)

- A.1.1 **Ściągnąć fakturę energetyczną**: z ENEA SA (lub innego sprzedawcy) za ostatnie 12 miesięcy. Ustalić stawkę PLN/kWh brutto, taryfę (G11 vs G12w), roczne zużycie. Kto: Jakub. Koszt: 0.
- A.1.2 **Podstawić liczby do kalkulatora** w `index.html`. Ustalić czy payback <10 lat dla 600W. Kto: Jakub. Koszt: 0.
- A.1.3 **Inspekcja balustrady przez konstruktora** — umówić wizję. Cel: opinia techniczna o nośności + antyrdzewka stref korozji. Kto: Jakub kontaktuje, konstruktor wykonuje. Koszt: 300-800 PLN (`UNCONFIRMED`). Czas: 2-5 dni.
- A.1.4 **GO/NO-GO**: jeśli stawka + inspekcja dają payback <10 lat i konstruktor akceptuje obciążenie — idź dalej. Jeśli nie — przerwij ścieżkę A, rozważ Ścieżkę B lub odroczenie.

### Faza A.2 — Zgoda wspólnoty (tygodnie 2-7)

- A.2.1 **Przygotować wniosek z wizualizacją**: zdjęcie balkonu + rendering z 2 panelami PV na zewnętrznej stronie balustrady, specyfikacja zestawu, gwarancja demontażu. Kto: Jakub. Czas: 2-3 dni. Koszt: 0 (można użyć screenshotu z `index.html` Three.js).
- A.2.2 **Kontakt z zarządem wspólnoty**: złożenie wniosku. Czas reakcji: 14 dni na analizę. Kto: Jakub.
- A.2.3 **Zebranie wspólnoty**: głosowanie uchwały. Quorum 50%+1 obecnych. Może być zdalne (przez obieg listy do podpisów) lub fizyczne zebranie. Czas od wniosku do uchwały: typowo 3-4 tygodnie.
- A.2.4 **Podpisanie aneksu do regulaminu porządkowego** z klauzulami: (a) demontaż przy remoncie elewacji, (b) czystość paneli, (c) zakaz ingerencji w konstrukcję wspólną. Kto: Jakub + zarząd. Czas: 1 tydzień po uchwale.
- A.2.5 **Odbiór pisemnej zgody**. `"Milczenie spółdzielni nie oznacza zgody"` — musi być dokument z podpisem zarządu.

### Faza A.3 — Zamówienie i dostawa (tygodnie 7-8)

- A.3.1 **Wybór zestawu**: 800W z [PRODUKTY.md](../research/PRODUKTY.md) pozycje #4 lub #6 (Hoymiles HMS-800W-2T lub Growatt NEO 2000M-X). Weryfikacja aktualnej ceny na URL + certyfikat NC RfG. Kto: Jakub. Koszt: ~2 800 PLN.
- A.3.2 **Zamówienie dodatkowych akcesoriów**: puszka podtynkowa z wyłącznikiem (150 PLN), ewentualnie wspornik odchylony jeśli Jakub zdecydowany na tilt 0-30° od pionu (`UNCONFIRMED` czy wybieramy pionowo). Kto: Jakub. Koszt: 150-600 PLN.
- A.3.3 **Antykorozyjne zabezpieczenie pretów balustrady** przed montażem paneli. Wykonanie przez Jakuba (farba epoksydowa ~50-150 PLN) lub profesjonalne (~200-500 PLN). Kto: Jakub lub zakontraktowany lokalny wykonawca.

### Faza A.4 — Zgłoszenie do ENEA Operator (tydzień 8)

- A.4.1 **Pobranie formularza WZ-MI** ze strony operator.enea.pl. Kto: Jakub.
- A.4.2 **Wypełnienie formularza** + schemat instalacji (z dokumentacji producenta) + parametry techniczne + deklaracja zgodności NC RfG + umowa kompleksowa (już istnieje). Czas: 1-2 h.
- A.4.3 **Wysyłka**: e-mail `kontakt@operator.enea.pl` z PDF (skan podpisu), max 30 MB. Lub pocztą na ENEA Operator Sp. z o.o., Biuro Obsługi Wytwórców, ul. Polna 60, 60-803 Poznań.
- A.4.4 **Termin zgłoszenia**: **minimum 30 dni przed planowanym uruchomieniem**. Jakub wysyła zgłoszenie zaraz po zamówieniu zestawu.

### Faza A.5 — Montaż (tydzień 9, 1 dzień)

- A.5.1 **Poluzowanie siatki dla kota** w rogu — demontaż 2-3 linek stalowych w obszarze montażu paneli.
- A.5.2 **Montaż uchwytów** na zewnętrznej stronie balustrady (dolna i górna rama poziomego) — narzędzia: klucz, imbus, poziomnica.
- A.5.3 **Zawieszenie paneli** (2 sztuki po ~15 kg każdy) na uchwytach. Wymaga **drugiej osoby** lub taśm asekuracyjnych (9. piętro + wiatr).
- A.5.4 **Podłączenie mikroinwertera** do paneli (wtyczki MC4), podpięcie AC przez puszkę podtynkową z wyłącznikiem do gniazda domowego. Jeśli hardwired — wymaga **elektryka SEP**.
- A.5.5 **Przywrócenie siatki dla kota** w rogu, naciągnięcie napinaczy rzymskich.
- A.5.6 **Pierwsze uruchomienie**: włączyć wyłącznik, sprawdzić aplikacją producenta (S-Miles dla Hoymiles, ShinePhone dla Growatt) że produkcja rusza.

### Faza A.6 — Przyłączenie ENEA Operator (tygodnie 9-12)

- A.6.1 **ENEA Operator potwierdza odbiór zgłoszenia** — w ciągu 30 dni od kompletnego wniosku.
- A.6.2 **Instalacja licznika dwukierunkowego** — ENEA Operator przyjeżdża, wymienia licznik. Koszt: 0 (bezpłatne).
- A.6.3 **Potwierdzenie przyłączenia**: dokument od ENEA Operator że mikroinstalacja jest zgłoszona i licznik działa dwukierunkowo.

### Faza A.7 — Rozliczenia (od 1. miesiąca produkcji)

- A.7.1 **Comiesięczne faktury od sprzedawcy** (ENEA SA lub inny) zawierają saldo depozytu prosumenckiego — kontrola czy rozliczenie działa.
- A.7.2 **Aplikacja monitorująca** Hoymiles/Growatt pokazuje produkcję godzinową → Jakub weryfikuje rozliczenie RCE × 1,23 dla eksportu.
- A.7.3 **Roczna deklaracja podatkowa** — ulga termomodernizacyjna art. 26h ustawy PIT, odliczenie do 53 000 PLN wydatków. `UNCONFIRMED` dla 2026 i dla mieszkań w bloku — zweryfikować u księgowej.

### Łączny timeline Ścieżki A

**8-10 tygodni od decyzji do pierwszego kWh produkcji.** Koszty jednorazowe: ~2 700-3 400 PLN + inspekcja konstruktora 300-800 PLN + antyrdzewka 50-500 PLN = **3 050-4 700 PLN**.

---

## Ścieżka B — wspólnotowa (PV + magazyn + ppoż)

### Faza B.1 — Przygotowanie (tygodnie 1-2, do 2026-05-05)

- B.1.1 **Rozmowa Jakuba z administratorem Andrzejem Szczepaniakiem** (Wspólnoty.pl, ul. Chodkiewicza 15, 85-065 Bydgoszcz) lub przez księgową Joannę Wendrowską (797 626 976, jwendrowska@wspolnoty.info): przedstawić [PROPOZYCJA_DLA_WSPOLNOTY.md](../biznes/PROPOZYCJA_DLA_WSPOLNOTY.md). Cel: wprowadzenie do porządku obrad najbliższego zebrania. Kto: Jakub.
- B.1.2 **Potwierdzenie danych z planu gospodarczego** — 83 mieszkania, 4 284 m², fundusz remontowy 303 917 PLN na koniec 2026, plan wydatków 2026 = 0. Większość już zamknięta z `WSPOLNOTA_DANE_FORMALNE.md`, ale warto zweryfikować: stan instalacji ppoż (zakres A/B/C), długoterminowe plany funduszu remontowego, stan dachu, faktura energetyczna części wspólnych (stawka PLN/kWh). Kto: administrator, na wniosek Jakuba.
- B.1.3 **Wizja piwnicy technicznej** — czy istnieje kandydat na pomieszczenie magazynu EI60/REI60/EI30 (rozdzielnia główna, pompownia, suszarnia). Kto: Jakub + administrator.
- B.1.4 **Potwierdzenie ENEA Operator dla kodu 85-124** (już wstępnie zweryfikowane `UNCONFIRMED` z PRZEPISY_PL — potwierdzić telefonem na infolinię 611 111 111 lub online). Kto: Jakub, 5 minut.

### Faza B.2 — Ofertowanie (tygodnie 2-4, do 2026-05-19)

- B.2.1 **Zapytanie ofertowe do 2-3 firm PV** w Bydgoszczy i okolicach. Kandydaci: Columbus Energy (duża, sprawdzona), Solwis (ekipa PPOŻ własna), lokalni dostawcy (kwerenda Google Maps). Kto: zarząd lub Jakub w imieniu zarządu.
- B.2.2 **Wizje lokalne wykonawców na dachu**: ocena stanu dachu, powierzchni, ewentualnych kominów/lukarn. Czas: 1 dzień wizji per wykonawca.
- B.2.3 **Zebranie ofert**: każda powinna zawierać specyfikację 25 kWp PV + 20 kWh magazyn + wyłącznik PV Stop + rzeczoznawcę ppoż PV + dokumentację. Plus opcja **rozszerzenia** o modernizację ppoż budynku zakres C.
- B.2.4 **Porównanie ofert**: cena, referencje wspólnot, gwarancja, termin realizacji, kompetencje ppoż.

### Faza B.3 — Uchwała wspólnoty (tygodnie 4-5, do 2026-05-26)

- B.3.1 **Zebranie wspólnoty**: prezentacja propozycji (Jakub lub zarząd), dyskusja, głosowanie.
- B.3.2 **Uchwała**: trzy elementy — (a) zgoda na PV+magazyn, (b) zgoda na modernizację ppoż C z funduszu remontowego, (c) pełnomocnictwo zarządu do Grant OZE + umowy z wykonawcą.
- B.3.3 **Aneks do regulaminu porządkowego**: klauzule o obsłudze PV, terminie modernizacji ppoż.
- B.3.4 **Protokół z zebrania** + pisemne potwierdzenie uchwały.

### Faza B.4 — Projekt i wniosek BGK (tygodnie 5-10, do 2026-06-30)

- B.4.1 **Wybrany wykonawca wykonuje projekt szczegółowy** na bazie wizji lokalnej. Zawiera: plan rozmieszczenia paneli, dokumentację ppoż PV, specyfikację magazynu, adaptację pomieszczenia technicznego.
- B.4.2 **Rzeczoznawca ppoż akceptuje projekt** (wymóg dla PV >6,5 kW). Kto: rzeczoznawca wybrany przez wykonawcę lub niezależny.
- B.4.3 **Kompilacja dokumentów do BGK**: uchwała wspólnoty, projekt, oferta wykonawcy, KRS zarządcy, NIP wspólnoty, potwierdzenia tożsamości podpisujących.
- B.4.4 **Założenie konta w panelu NFOŚiGW/BGK** (jeśli wspólnota nie ma).
- B.4.5 **Złożenie wniosku elektronicznie przez portal BGK** do 30.06.2026. Kto: zarząd lub pełnomocnik.

### Faza B.5 — Decyzja BGK i kontraktowanie (tygodnie 10-14)

- B.5.1 **BGK ocenia wniosek** — 30 dni na decyzję od kompletu dokumentów.
- B.5.2 **Umowa z BGK** w przypadku pozytywnej decyzji: zawarcie umowy o Grant OZE, warunki dotacji, harmonogram.
- B.5.3 **Umowa z wykonawcą** na realizację zgodnie z projektem i terminem.

### Faza B.6 — Realizacja (tygodnie 14-24)

- B.6.1 **Modernizacja pomieszczenia technicznego** EI60/REI60/EI30 (2-3 tygodnie).
- B.6.2 **Instalacja magazynu energii** + EMS (1 tydzień).
- B.6.3 **Montaż PV na dachu**: konstrukcja balastowa, panele 4×10 pod 30° S, okablowanie DC, inwertery (2-3 tygodnie).
- B.6.4 **Modernizacja ppoż budynku zakres C**: PWP główny, DSO, oświetlenie ewakuacyjne klatek, czujki dymu części wspólnych, oddymianie, hydranty (równolegle do PV przez dedykowaną ekipę, 4-6 tygodni).
- B.6.5 **Dokumentacja powykonawcza**: schematy elektryczne, protokoły pomiarów, certyfikaty zgodności.

### Faza B.7 — Zgłoszenie do ENEA Operator (tygodnie 22-26)

Analogiczne do Ścieżki A, ale dla większej instalacji:
- B.7.1 **Tryb z określeniem warunków przyłączenia** (nie tryb zgłoszenia — instalacja jest >6,5 kW, potencjalnie wymaga innej procedury).
- B.7.2 **Licznik dwukierunkowy** dla części wspólnych bloku.
- B.7.3 **Umowa prosumenta lokatorskiego** między wspólnotą a ENEA SA (lub innym sprzedawcą).

### Faza B.8 — Odbiory i uruchomienie (tygodnie 26-28)

- B.8.1 **Odbiór techniczny** PV + magazynu + ppoż.
- B.8.2 **Odbiór straży pożarnej** dla zakresu C — jeśli wymagany.
- B.8.3 **Pierwszy kWh z paneli** — typowo styczeń/luty 2027.

### Faza B.9 — Rozliczenie dotacji i operacja (tygodnie 28+)

- B.9.1 **Raport do BGK** z realizacji i kosztów faktycznych.
- B.9.2 **Wypłata dotacji** — zwrot połowy kosztów kwalifikowanych.
- B.9.3 **Comiesięczny monitoring** produkcji przez EMS + aplikację zarządu.
- B.9.4 **Coroczny przegląd techniczny** magazynu i instalacji (obowiązek serwisowy).

### Łączny timeline Ścieżki B

**30-36 tygodni od decyzji do pierwszego kWh.** Uruchomienie ~styczeń/luty 2027. Koszty jednorazowe dla wspólnoty: **211 500 PLN brutto** (po Grant OZE), **~5 290 PLN/lokator**.

---

## Role wymagające uprawnień

| Rola | Ścieżka | Wymagane uprawnienia | Kto wykonuje |
|---|---|---|---|
| Elektryk SEP | A (jeśli hardwired), B | SEP do 1 kV + uprawnienia PV | Zakontraktowany |
| Rzeczoznawca ppoż | B (obowiązek >6,5 kW) | Wpis na listę MSWiA | Zakontraktowany |
| Konstruktor | A (dla inspekcji balustrady) | Uprawnienia budowlane w specjalności konstrukcyjno-budowlanej | Zakontraktowany |
| Projektant PV | B | Uprawnienia budowlane w specjalności instalacyjnej + certyfikat PV | Wykonawca |
| **Jakub** | A (plug-and-play Schuko) | Brak | Samodzielnie ZE ŚWIADOMOŚCIĄ RYZYKA |

**Kluczowe**: Jakub **nie musi mieć SEP** dla plug-and-play. Ale jeśli chce **hardwired** (bezpieczniejsze, zgodne z rekomendacją niemieckiego VDE), to wymaga elektryka SEP.

---

## Zależności zewnętrzne

- **Deadline Grant OZE BGK 30.06.2026** — krytyczny dla Ścieżki B
- **Aktywność zarządu wspólnoty** — kluczowy dla Ścieżki B, ważny dla A (zgoda)
- **Dostępność firm PV w Bydgoszczy** — mało prawdopodobne bottleneck
- **ENEA Operator responsywność** — 30 dni zagwarantowane w procedurze
- **Pogoda** dla montażu na dachu — wiosna/lato najlepsze, zima problematyczna dla balastowych konstrukcji

---

Pełny budżet: [plan/BUDZET.md](BUDZET.md). Checkboxy drukowalne: [plan/CHECKLIST.md](CHECKLIST.md). Matryca ryzyk: [plan/RYZYKA.md](RYZYKA.md).
