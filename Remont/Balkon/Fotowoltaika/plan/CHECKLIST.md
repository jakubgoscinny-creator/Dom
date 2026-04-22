# Checklist — do wydrukowania, do zaznaczania w trakcie

Drukowana lista kroków dla obu ścieżek. Format Markdown z checkboxami działa w GitHub, VS Code, Obsidian, a po wydruku jest po prostu lista do zaznaczania długopisem.

---

## Przed decyzją o ścieżce (wspólne, tydzień 0-1)

- [ ] Pobrać własną fakturę energetyczną (ENEA SA / inny sprzedawca) — stawka PLN/kWh brutto, taryfa, zużycie roczne
- [ ] Podstawić swoje liczby do kalkulatora w `index.html` (pola: stawka, zużycie, taryfa, auto-konsumpcja)
- [ ] Sprawdzić payback balkonowy 600W i 800W dla twoich liczb — czy <10 lat?
- [ ] Zapytać administratora wspólnoty o: liczbę mieszkań, wysokość zużycia energii części wspólnych za 2024-2025, stan dachu, stan instalacji ppoż, plany modernizacji ppoż w 2026
- [ ] Zrobić zdjęcie piwnicy technicznej / rozdzielni głównej — sprawdzić czy istnieje kandydat na pomieszczenie magazynu energii
- [ ] Zdecydować: Ścieżka A (balkonowa) czy B (wspólnotowa) — zgodnie z [REKOMENDACJA.md](../biznes/REKOMENDACJA.md)

---

## Ścieżka A — balkon indywidualny

### A.1 Due diligence (tydzień 1)

- [ ] Umówić i zrealizować inspekcję konstruktora balustrady — opinia o nośności + stanie korozji
- [ ] Odebrać pisemną opinię techniczną
- [ ] GO/NO-GO: jeśli konstruktor powie "nie obciążać" — stop, wrócić do ścieżki B lub do alternatyw (POROWNANIE_ALTERNATYW.md)
- [ ] Zlecić antyrdzewkę prętów balustrady (samodzielnie lub wykonawcy)

### A.2 Zgoda wspólnoty (tygodnie 2-7)

- [ ] Przygotować wniosek: wizualizacja balkonu z panelami (screenshot z `index.html` Three.js), specyfikacja techniczna zestawu, gwarancja demontażu przy remoncie elewacji
- [ ] Złożyć wniosek do zarządu wspólnoty (pisemnie, za potwierdzeniem odbioru)
- [ ] Poczekać na analizę zarządu (14 dni standardowo)
- [ ] Uczestniczyć w zebraniu wspólnoty — prezentacja, odpowiedzi na pytania
- [ ] Głosowanie uchwały (quorum 50%+1 obecnych)
- [ ] Podpisać aneks do regulaminu porządkowego
- [ ] Odebrać pisemną zgodę wspólnoty (NIE milczenie = zgoda; **musi być dokument**)

### A.3 Zamówienie (tydzień 7)

- [ ] Wybrać zestaw z [PRODUKTY.md](../research/PRODUKTY.md) — rekomendacja #4 lub #6
- [ ] Zweryfikować aktualną cenę na URL + potwierdzić certyfikat NC RfG
- [ ] Sprawdzić wymiary paneli — czy mieszczą się w 465 cm długości balustrady
- [ ] Zamówić zestaw
- [ ] Dokupić: puszka podtynkowa z wyłącznikiem (~150 PLN), ewentualnie wspornik odchylony
- [ ] Odebrać przesyłkę, sprawdzić stan, skompletować dokumenty

### A.4 Zgłoszenie do ENEA Operator (tydzień 8)

- [ ] Pobrać formularz WZ-MI ze strony [operator.enea.pl](https://www.operator.enea.pl/uslugi-dystrybucyjne/dla-domu/pliki-do-pobrania)
- [ ] Wypełnić formularz: dane, moc, lokalizacja
- [ ] Dołączyć: schemat instalacji (z dokumentacji producenta), parametry techniczne, certyfikat NC RfG, umowę kompleksową, oświadczenie art. 7 ust. 8d6 Prawa energetycznego
- [ ] Wysłać e-mailem `kontakt@operator.enea.pl` (PDF, max 30 MB) — **minimum 30 dni przed planowanym uruchomieniem**
- [ ] Odebrać potwierdzenie wpływu zgłoszenia

### A.5 Montaż (tydzień 9, 1 dzień)

- [ ] Poluzować siatkę dla kota w rogu (napinacze rzymskie, linki stalowe)
- [ ] Zamontować uchwyty na zewnętrznej stronie balustrady (klucz, imbus, poziomnica)
- [ ] Zawiesić panele (wymaga drugiej osoby — 9. piętro, wiatr)
- [ ] Podłączyć mikroinwerter (MC4), AC przez puszkę z wyłącznikiem do gniazda
- [ ] Przywrócić siatkę dla kota, naciągnąć napinacze
- [ ] Włączyć wyłącznik, sprawdzić w aplikacji producenta (S-Miles / ShinePhone) że produkcja rusza

### A.6 Przyłączenie i rozliczenia (tygodnie 9-12 i dalej)

- [ ] Odebrać potwierdzenie ENEA Operator o przyjęciu zgłoszenia (30 dni)
- [ ] Umówić wizytę montera licznika dwukierunkowego — ENEA bezpłatnie
- [ ] Odebrać potwierdzenie przyłączenia mikroinstalacji
- [ ] Pierwsza miesięczna faktura — sprawdzić saldo depozytu prosumenckiego
- [ ] Monitorować produkcję w aplikacji producenta co tydzień

### A.7 Rok +1 (coroczne)

- [ ] Deklaracja PIT: rozważyć ulgę termomodernizacyjną art. 26h (do weryfikacji u księgowej)
- [ ] Rewizja dokumentacji: gwarancje, certyfikaty
- [ ] Sprawdzić stan paneli i uchwytów wiosną po zimie
- [ ] Sprawdzić stan antyrdzewki balustrady

---

## Ścieżka B — wspólnotowa (dach + magazyn + ppoż)

### B.1 Przygotowanie (tygodnie 1-2, do 2026-05-05)

- [ ] Skontaktować się z administratorem wspólnoty (telefon/mail)
- [ ] Przedstawić [PROPOZYCJA_DLA_WSPOLNOTY.md](../biznes/PROPOZYCJA_DLA_WSPOLNOTY.md) — wydrukowana wersja 2-stronicowa
- [ ] Zdobyć zgodę zarządu na wprowadzenie tematu do porządku obrad najbliższego zebrania
- [ ] Uzyskać dane: liczba mieszkań, zużycie części wspólnych za 2024-2025, stan dachu, stan ppoż
- [ ] Wizja piwnicy z administratorem — ocena pomieszczenia technicznego

### B.2 Ofertowanie (tygodnie 2-4, do 2026-05-19)

- [ ] Wysłać zapytania ofertowe do 2-3 firm PV w Bydgoszczy:
  - [ ] Firma 1: Columbus Energy lub Solwis
  - [ ] Firma 2: lokalna (Google Maps "fotowoltaika Bydgoszcz")
  - [ ] Firma 3: wymiana informacji z inną wspólnotą, referencje
- [ ] Umówić wizje lokalne (wykonawcy na dachu)
- [ ] Odebrać oferty (25 kWp PV + 20 kWh magazyn + ppoż PV + dokumentacja, opcja ppoż C rozszerzona)
- [ ] Porównać oferty: cena, gwarancja, referencje wspólnot, termin, ppoż kompetencje

### B.3 Uchwała wspólnoty (tygodnie 4-5, do 2026-05-26)

- [ ] Zwołanie zebrania wspólnoty (zarząd, z wyprzedzeniem 7-14 dni)
- [ ] Przygotować materiały: oferty, propozycję, odpowiedzi na typowe kontr-argumenty
- [ ] Przeprowadzić prezentację i dyskusję
- [ ] Głosowanie uchwały: (a) PV+magazyn, (b) ppoż C z funduszu remontowego, (c) pełnomocnictwo zarządu
- [ ] Podpisać aneks do regulaminu porządkowego
- [ ] Protokół z zebrania + pisemna uchwała do archiwum wspólnoty

### B.4 Projekt i wniosek BGK (tygodnie 5-10, do 2026-06-30)

- [ ] Zakontraktować wybranego wykonawcę do wykonania projektu szczegółowego (umowa warunkowa na wypadek odmowy BGK)
- [ ] Wykonanie projektu technicznego PV + magazyn + adaptacja pomieszczenia
- [ ] Rzeczoznawca ppoż akceptuje projekt PV (obowiązek >6,5 kW)
- [ ] Kompletowanie dokumentów do BGK: uchwała, projekt, oferta, KRS, NIP, podpisy
- [ ] Założenie konta w panelu NFOŚiGW/BGK (jeśli wspólnota nie ma)
- [ ] Złożenie wniosku elektronicznie przez portal BGK — **do 30.06.2026**

### B.5 Decyzja BGK i kontraktowanie (tygodnie 10-14)

- [ ] Oczekiwać decyzji BGK (30 dni od kompletu)
- [ ] W przypadku pozytywnej: umowa o Grant OZE z BGK (podpis zarządu lub pełnomocnika)
- [ ] Umowa z wykonawcą na realizację + harmonogram
- [ ] Poinformować lokatorów o decyzji BGK i harmonogramie prac

### B.6 Realizacja (tygodnie 14-24)

- [ ] Adaptacja pomieszczenia technicznego: ściany EI60, strop REI60, drzwi EI30, czujka dymu, wentylacja
- [ ] Montaż magazynu energii + EMS
- [ ] Montaż PV na dachu: konstrukcja balastowa, panele, okablowanie DC, inwertery
- [ ] Realizacja modernizacji ppoż C: PWP główny, DSO, oświetlenie ewakuacyjne, czujki, oddymianie, hydranty
- [ ] Dokumentacja powykonawcza: schematy, protokoły pomiarów, certyfikaty

### B.7 Zgłoszenie ENEA Operator + umowa prosumenta lokatorskiego (tygodnie 22-26)

- [ ] Zgłoszenie do ENEA Operator w trybie z warunkami przyłączenia (instalacja >6,5 kW)
- [ ] Instalacja licznika dwukierunkowego części wspólnych
- [ ] Podpisanie umowy prosumenta lokatorskiego między wspólnotą a sprzedawcą energii

### B.8 Odbiory (tygodnie 26-28)

- [ ] Odbiór techniczny PV + magazynu (elektryk SEP + projektant)
- [ ] Odbiór ppoż — straż pożarna lub rzeczoznawca
- [ ] Pierwszy kWh z paneli ✓

### B.9 Rozliczenia dotacji i operacja (tygodnie 28+)

- [ ] Raport do BGK z realizacji i rzeczywistych kosztów
- [ ] Wypłata dotacji na konto wspólnoty
- [ ] Comiesięczny monitoring produkcji (EMS + aplikacja zarządu)
- [ ] Coroczny przegląd techniczny magazynu (obowiązek serwisowy)
- [ ] Aktualizacja czynszu lokatorów z uwzględnieniem oszczędności

---

## Notatki do druku (puste pola)

**Numer mieszkania Jakuba**: **84** (M. Konopnickiej 33/84, 85-124 Bydgoszcz)

**Dane wspólnoty (z planu gospodarczego 2026)**:
- Nazwa: Wspólnota Mieszkaniowa ul. Konopnickiej 33
- NIP: 9532425130
- Liczba lokali: 83
- Powierzchnia: 4 284,09 m²
- Liczba pięter: 11 (budynek wysoki, kategoria W)
- Fundusz remontowy koniec 2026 (prognoza): 303 917,91 PLN

**Dane kontaktowe administratora wspólnoty**:
- Nazwa: **Wspólnoty.pl** (Andrzej Szczepaniak)
- Adres: **ul. Chodkiewicza 15, 85-065 Bydgoszcz**
- REGON: 092525828
- Telefon: 0513240307 `UNCONFIRMED` (odczyt z pieczęci PDF)

**Dane księgowej**:
- Imię i nazwisko: **Joanna Wendrowska**
- Telefon: **797 626 976**
- E-mail: **jwendrowska@wspolnoty.info**

**Wybrany wykonawca PV**:
Firma: ___________________
Kontakt: _________________
Oferta: ____ PLN netto

**Numer wniosku BGK**: _________

**Data uchwały wspólnoty**: _________

**Data pierwszego kWh**: _________

---

*Pełny plan wykonania: [PLAN_WYKONANIA.md](PLAN_WYKONANIA.md). Budżet: [BUDZET.md](BUDZET.md). Ryzyka: [RYZYKA.md](RYZYKA.md).*
