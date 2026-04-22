# Przepisy PL — Fotowoltaika balkonowa, prosument, wspólnota

Stan na **2026-04-21**. Przepisy zmieniają się ruchem falowym — kluczowe zmiany 2026 (nowelizacja Prawa budowlanego 7.01.2026, współczynnik korekcyjny net-billing od 1.02.2026) są już w porządku prawnym. Dalsze zmiany `UNCONFIRMED` — zawsze weryfikuj bezpośrednio u źródła (URE, NFOŚiGW, BGK, ENEA Operator) zanim podejmiesz czynność zobowiązującą.

## Streszczenie (5 bullets)

- **Instalacja ≤800 W (balkonowa lub poza)**: tylko zgłoszenie do OSD (ENEA Operator dla Bydgoszczy) w trybie formularza WZ-MI, bez opłat, 30 dni przed planowanym przyłączeniem. Brak wymogu pozwolenia budowlanego ani zgłoszenia budowy. Wspólnota musi wyrazić pisemną zgodę jeśli mocujemy do części wspólnych (balustrada, elewacja, dach).
- **Instalacja 0,8–6,5 kW**: analogicznie zgłoszenie do OSD, bez rzeczoznawcy ppoż, ale zgoda wspólnoty wymagana jeśli dotyka części wspólnych.
- **Instalacja >6,5 kW**: obowiązek uzgodnienia projektu z rzeczoznawcą ds. zabezpieczeń ppoż przed rozpoczęciem prac. Typowy scenariusz dla dachowej instalacji bloku wielorodzinnego.
- **Magazyn energii ≤10 kWh** w bloku: pomieszczenie nieprzeznaczone na pobyt ludzi + autonomiczna czujka dymu. **>10 kWh**: pomieszczenie techniczne EI60 / REI60 / EI30. **30-300 kWh**: zgłoszenie budowy + rzeczoznawca ppoż + osoba z uprawnieniami. **>300 kWh**: pozwolenie na budowę.
- **Net-billing z współczynnikiem korekcyjnym 1,23 od 1 lutego 2026**: nadwyżka energii oddanej do sieci jest zapisywana na depozyt prosumencki po wartości `RCE × 1,23`. Okres rozliczenia 12 miesięcy (czasem 13, `UNCONFIRMED` — zweryfikować u URE). Bilansowanie godzinowe od lipca 2024.

---

## 1. Prosument indywidualny (Jakub jako właściciel instalacji balkonowej)

### 1.1 Status prawny

"Prosument" w rozumieniu **ustawy o odnawialnych źródłach energii (ustawa o OZE)** — odbiorca końcowy wytwarzający energię w mikroinstalacji PV ≤50 kW na własne potrzeby, z możliwością oddawania nadwyżek do sieci. Od 1 kwietnia 2022 nowi prosumenci rozliczają się w systemie **net-billing** (pieniężnym), a nie net-metering (ilościowym) — ten pierwszy obowiązuje też na wspólnotę energetyczną jeśli ją założy.

### 1.2 Net-billing — rozliczenia 2026

Podstawowe parametry ([elektro-bar.pl net-billing 2026](https://elektro-bar.pl/blog/net-billing-po-zmianach-2026-zasady-rozliczania-prosumentow/), 2026-04-21):

- **RCE** — Rynkowa Cena Energii, publikowana godzinowo przez TGE. Od 1 lipca 2024 obowiązuje bilansowanie godzinowe, nie miesięczne. Średnia 2025: 312 PLN/MWh. Prognoza 2026: 295-330 PLN/MWh. `UNCONFIRMED` — zweryfikować aktualne miesięczne zestawienia na URE.
- **Współczynnik korekcyjny 1,23** — od 1 lutego 2026 wartość energii oddanej do sieci jest mnożona przez 1,23 (premia 23%). Ma rekompensować asymetrię cen sprzedaży-zakupu. `UNCONFIRMED` — PVKalkulator cytuje, ale chciałbym bezpośrednią referencję do ustawy / rozporządzenia. Mocna flaga do weryfikacji u URE.
- **Depozyt prosumencki** — wirtualne konto, na które trafiają środki ze sprzedaży nadwyżek. Środki można wykorzystać w ciągu ~12-13 miesięcy (`UNCONFIRMED` dokładna liczba). Po wygaśnięciu okresu saldo resetuje się i traci się niewykorzystane środki.
- **Auto-konsumpcja** — klucz do opłacalności. Energia zużyta bezpośrednio w chwili wytworzenia jest warta taryfowej stawki (np. 0,75-1,00 PLN/kWh G11, `UNCONFIRMED` aktualna stawka dla Bydgoszczy). Energia sprzedana do sieci jest warta tylko RCE × 1,23 ≈ 0,36-0,41 PLN/kWh. Różnica to ~2,2x na korzyść auto-konsumpcji.

### 1.3 ENEA Operator — procedura zgłoszenia mikroinstalacji

Bydgoszcz 85-124 należy do obszaru **ENEA Operator** ([operator.enea.pl, tryb zgłoszenia](https://www.operator.enea.pl/przylaczenie-do-sieci/przylaczenie-mikroinstalacji/przylaczenie-mikroinstalacji-w-trybie-zgloszenia), 2026-04-21). Weryfikacja: mapa obszarów dystrybucji ENEA Operator obejmuje województwa kujawsko-pomorskie (w tym Bydgoszcz) — potwierdzone ze snippetu wyszukiwania. `UNCONFIRMED` formalnie — jeśli Jakub chce twardą pewność, wystarczy jeden telefon na infolinię ENEA 611 111 111.

**Dokumenty wymagane do zgłoszenia**:
- Formularz **WZ-MI** ("Zgłoszenie przyłączenia mikroinstalacji / Wniosek o określenie warunków przyłączenia")
- Schemat instalacji elektrycznej
- Parametry techniczne urządzeń (karty produktów panelu i mikroinwertera)
- Oświadczenie instalatora o kwalifikacjach (jeżeli montaż wykonuje osoba uprawniona — dla instalacji plug-and-play Schuko nie jest wymagany instalator, ale to `UNCONFIRMED` dla Polski; w Niemczech od 2024 Schuko jest dopuszczony do 800W)
- **Oświadczenie** z art. 7 ust. 8d6 ustawy z dnia 10 kwietnia 1997 r. – Prawo energetyczne
- **Certyfikat zgodności NC RfG** urządzenia (mikroinwertera) lub deklaracja zgodności
- Umowa kompleksowa (lub sprzedaży) energii elektrycznej — jeżeli jeszcze nie ma, ENEA Operator instaluje tylko licznik dwukierunkowy, umowę podpisuje się ze sprzedawcą energii

**Termin**: `nie później niż w terminie 30 dni przed dniem planowanego przyłączenia mikroinstalacji`.

**Kanały złożenia**:
- **Pocztą**: Enea Operator Sp. z o.o., Biuro Obsługi Wytwórców, ul. Polna 60, 60-803 Poznań
- **E-mail**: `kontakt@operator.enea.pl` — PDF-y, max 30 MB, skan podpisanego dokumentu (podpis tradycyjny) lub z kwalifikowanym podpisem elektronicznym

**Czas reakcji ENEA Operator**: `w terminie 30 dni od otrzymania kompletnego Zgłoszenia Enea Operator potwierdzi przyjęcie Zgłoszenia i dokona przyłączenia mikroinstalacji` (zainstaluje układ zabezpieczający i licznik dwukierunkowy).

**Koszty**: `Za przyłączenie mikroinstalacji do sieci Enea Operator nie pobiera opłat.` (cytat dosłowny ze strony operatora, 2026-04-21).

**Ograniczenie mocy**: `Moc mikroinstalacji nie może być większa niż moc przyłączeniowa obiektu`. Dla mieszkania w bloku moc przyłączeniowa to typowo **G11: ok. 12,5 kVA przy licznik 25 A** lub `G12w: ok. 14,5 kVA przy 32 A`. `UNCONFIRMED` — zależne od umowy i licznika. Dla instalacji 800W (0,8 kW) to w każdym wariancie OK.

### 1.4 Zgoda wspólnoty mieszkaniowej

Balkon jest częścią przynależną do lokalu, **ale jego konstrukcja — zwłaszcza balustrada — stanowi część wspólną nieruchomości**. Mocowanie paneli do balustrady lub poza jej zewnętrzną krawędź wymaga **pisemnej zgody wspólnoty mieszkaniowej**. Podstawa prawna: art. 29 Prawa budowlanego + ustawa o własności lokali ([pvguru.pl, 2026-04-21](https://pvguru.pl/blog/fotowoltaika-na-balkonie-w-bloku-przepisy-i-zgoda-spoldzielni-2025-kompletny-poradnik/)).

**Procedura uzyskania zgody (7 kroków, typowo 6-10 tygodni)**:

1. **Koncepcja instalacji z wizualizacją** — zdjęcie balkonu z nałożonym renderowanym panelem, spec techniczna, odpowiedź na "jak to wygląda z zewnątrz".
2. **Wniosek z danymi technicznymi** — imię i nazwisko, numer lokalu, moc PV, typ montażu, gwarancja demontażu przy remoncie elewacji, gwarancja przywrócenia stanu.
3. **Opinia techniczna** (opcjonalnie, ale pomaga) — ekspertyza konstrukcyjna balustrady, dopuszczalne obciążenie, kierunek wiatru. Dla Jakuba to i tak potrzebne z uwagi na widoczną korozję (patrz `OBSERWACJE_Z_ZDJEC.md §5`).
4. **Uchwała wspólnoty** — zebranie wspólnoty, głosowanie. Quorum: **50% + 1 głos obecnych członków** (w praktyce dla wspólnoty 40 mieszkań potrzeba ~21 głosów za).
5. **Aneks do regulaminu porządkowego** — trzy klauzule: (a) demontaż przy remoncie elewacji, (b) czystość paneli, (c) zakaz ingerencji w konstrukcję wspólną.
6. **Protokół odbioru technicznego** — po montażu.
7. **Zgłoszenie do zakładu energetycznego (OSD)** — analogiczne do §1.3.

**Terminy indykatywne** (`UNCONFIRMED` — zależne od wspólnoty):
- Analiza zarządu: 14 dni
- Zwołanie zebrania wspólnoty: 21 dni
- Podpisanie aneksu po uchwale: 7 dni
- Łącznie: ~6-8 tygodni, gdy wspólnota jest aktywna. Ma to znaczenie dla kolejności — najpierw uchwała, potem zgłoszenie do OSD.

**"Milczenie spółdzielni nie oznacza zgody"** — zgoda musi być **pisemna**. Brak = samowola budowlana = grzywna do 5000 PLN + żądanie demontażu przez zarządcę.

---

## 2. Wymagania techniczne i przeciwpożarowe

### 2.1 Balkonowa PV ≤800 W

- Zgłoszenie do OSD: tak (patrz §1.3)
- Rzeczoznawca ppoż: **nie** (próg 6,5 kW)
- Wyłącznik ppoż prądu PWP: **nie** (budynek mieszkalny, strefa ≤1000 m³ dla pojedynczego mieszkania, typowo PWP już istnieje w tablicy rozdzielczej budynku i PV nie zmienia konfiguracji — `UNCONFIRMED` dla konkretnego bloku)
- Wtyczka Schuko: w Niemczech od maja 2024 dopuszczona. W Polsce `UNCONFIRMED` formalnie — praktycznie stosowana bez protestów OSD, ale prawo mówi "musi być przyłączana przez wykwalifikowanego instalatora". Polski poradnik rekomenduje **puszkę podtynkową z wyłącznikiem** zamiast zwykłej Schuko, dla podniesienia bezpieczeństwa. Koszt dodatkowy: 50-150 PLN.

### 2.2 PV na dachu bloku (scenariusz wspólnoty, moc typowo 10-40 kW)

- Zgłoszenie do OSD: tak (ale z warunkami przyłączenia, nie zgłoszenie jak dla mikroinstalacji — zależne od klasy instalacji)
- **Rzeczoznawca ppoż**: **tak** — obowiązek od września 2020 dla instalacji >6,5 kW ([firemar.pl, 2026-04-21](https://www.firemar.pl/aktualnosci/q-a-uzgodnienie-ppoz-instalacji-pv))
- **Wyłącznik PV Stop / PWP**: **tak** dla budynków z istniejącym PWP (praktycznie wszystkie bloki). Rozłącznik izolacyjny DC na przewodach od paneli do inwertera, który odłącza się automatycznie przy uruchomieniu PWP — żeby przy pożarze straż nie dostała DC z paneli
- Uzgodnienie projektu z rzeczoznawcą ppoż przed rozpoczęciem prac
- Koszt rzeczoznawcy ppoż: 1500-4000 PLN `UNCONFIRMED` — do weryfikacji u wykonawcy

### 2.3 Magazyn energii w bloku mieszkalnym

**Nowelizacja Prawa budowlanego wchodzi w życie 7 stycznia 2026** ([prawo.pl, 2026-04-21](https://www.prawo.pl/biznes/magazyny-energii-zmiany-w-przepisach-o-warunkach-technicznych,533794.html)), wprowadza pierwsze formalne progi:

| Pojemność magazynu | Procedura | Pomieszczenie |
|---|---|---|
| ≤10 kWh | Brak formalności | Nieprzeznaczone na pobyt ludzi + autonomiczna czujka dymu (PN) |
| 10-30 kWh | Brak formalności | **Pomieszczenie techniczne wydzielone ppoż**: ściany **EI60**, stropy **REI60**, drzwi **EI30** |
| 30-300 kWh | **Zgłoszenie budowy** + dokumentacja techniczna + **uzgodnienia ppoż** + projekt osoby z uprawnieniami | Jw. + normy IEC 62933-5-2, PN-EN 62619 |
| >300 kWh | **Pozwolenie na budowę** | Jw. + pełny projekt |

Normy obowiązujące: **PN-EN 62619** (bezpieczeństwo akumulatorów przemysłowych Li-ion), **PN-HD 60364-7-712** (instalacje PV), **PN-EN IEC 62933-5-2** (bezpieczeństwo systemów magazynowania energii).

Dla wspólnoty, która chce 15-30 kWh magazyn na części wspólne (winda, klatki, oświetlenie ewakuacyjne, hydrofor, pompy), wymogi są:
- Pomieszczenie techniczne wydzielone ppoż EI60/REI60/EI30
- Autonomiczna czujka dymu
- System zarządzania energią (EMS)
- Wentylacja mechaniczna pomieszczenia (domysl z norm, `UNCONFIRMED` dokładna wymagana krotność wymian powietrza)
- Gaśnica proszkowa ABC 6 kg + odpowiednie oznakowanie piktogramami
- Brak formalnego zgłoszenia ani pozwolenia — ale **umowa z wykonawcą musi odnotować zgodność z normami**

**Realny koszt modernizacji pomieszczenia technicznego do EI60/REI60/EI30** `UNCONFIRMED`:
- Tynk ppoż na ścianach + nowe drzwi EI30 + ewentualny strop REI60: 8 000 - 25 000 PLN zależnie od stanu wyjściowego
- Wentylacja mechaniczna: 3 000 - 8 000 PLN
- Czujka dymu + gaśnica + oznakowanie: 500 - 1 500 PLN
- **Łącznie poziom 12 000 - 35 000 PLN** (zakres, do weryfikacji u wykonawcy)

To istotna pozycja w budżecie wspólnotowym — więcej niż sam magazyn energii w niektórych wariantach.

---

## 3. Prosument zbiorowy, prosument lokatorski, wspólnota energetyczna

Te modele są alternatywami dla prosumenta indywidualnego. Kluczowe dla scenariusza wspólnotowego.

### 3.1 Prosument lokatorski

Model pojawił się z nowelizacji ustawy o OZE (2022-2023). **Wspólnota mieszkaniowa** montuje instalację PV **za licznikiem części wspólnych budynku** (windy, klatki, oświetlenie zewnętrzne, hydrofor). Energia zasila części wspólne + nadwyżka do sieci = obniżenie rachunków na konto wspólnoty = niższy czynsz administracyjny dla lokatorów.

Zalety:
- Najprostszy model prawny dla wspólnoty
- Licznik części wspólnych już istnieje — nie trzeba zakładać nowego podmiotu
- Korzyść bezpośrednia: niższy czynsz

Wady:
- Korzystają tylko części wspólne, nie indywidualne mieszkania
- Moc ograniczona zużyciem części wspólnych (nie ma sensu montować 40 kWp jeśli części wspólne zużywają 6 000 kWh/rok)

### 3.2 Prosument zbiorowy

Model z ustawy o OZE od 1 kwietnia 2022. **Instalacja na części wspólnej budynku (dach) z udziałem przypisanym do poszczególnych odbiorców w budynku**. Każde mieszkanie ma swój procent produkcji przypisany do swojego licznika.

Zalety:
- Każde mieszkanie indywidualnie korzysta z części energii
- Dobrze skaluje się z mocą instalacji

Wady:
- Więcej formalności
- Trudniejsze rozliczenia
- Prawdopodobnie umowa kompleksowa z operatorem — patrz `WSPOLNOTA_SCENARIUSZ.md` dla szczegółów

### 3.3 Wspólnota energetyczna / klaster energii

Model większy: grupa budynków / obszarów ⇒ klaster do **1 MW**. Wsparcie z NFOŚiGW i Rządowego Funduszu Polski Ład. Dla pojedynczej małej wspólnoty mieszkaniowej to overkill — klaster ma sens gdy łączymy wiele wspólnot lub z osiedlem + szkołą + budynkami publicznymi. Zostawione jako referencja, nie rekomendacja.

---

## 4. Dotacje i granty

### 4.1 Dla prosumenta indywidualnego

**Mój Prąd Program Przejściowy** (kontynuacja Mój Prąd 6.0):
- Budżet: 335 mln PLN z KPO
- Nabór: **30 marca — 24 kwietnia 2026** (lub do wyczerpania budżetu) — **DEADLINE za 3 dni**
- Max 28 000 PLN na jedną inwestycję (PV + magazyn + magazyn ciepła)
- Dla PV: max **7 000 PLN**. Dla magazynu energii: max **16 000 PLN**. Dla magazynu ciepła: max **5 000 PLN**
- **Wymóg**: prosument **już posiadający PV w eksploatacji** (kontynuacja) — **nie dla nowych instalacji w trakcie zakupu**. `UNCONFIRMED` — zweryfikować dokładnie reguły naboru na mojprad.gov.pl

**Program docelowy 2026-2030** (przygotowywany przez NFOŚiGW):
- Budżet: ~1 mld PLN
- Harmonogram naboru 2026: Q1 — maj, Q2 — lipiec, Q3 — wrzesień, Q4 — listopad
- Magazyn energii: do 30% kosztów, max **800 PLN/kWh**, wymóg min 12 kWh pojemność
- Wymóg: obowiązkowa praca wyspowa (off-grid) + EMS

### 4.2 Dla wspólnoty / spółdzielni mieszkaniowej

**Grant OZE BGK** ([bgk.pl/produkty/grant-oze](https://www.bgk.pl/produkty/grant-oze/), 2026-04-21):
- **Do 30 czerwca 2026** — deadline składania wniosków
- **50% kosztów kwalifikowanych** inwestycji w OZE (PV, pompy ciepła, kolektory, magazyny energii)
- Dla właściciela/zarządcy **budynku wielorodzinnego**
- Wymogi:
  - Uchwała wspólnoty o wyborze zarządu lub o powierzeniu pełnomocnikowi uzyskania grantu
  - Dokumentacja projektowa instalacji
  - Potwierdzenie umocowania osób podpisujących
- **Kluczowe ograniczenie**: `Przedsięwzięcie nie może być rozpoczęte przed dniem złożenia wniosku o grant`. Wszelkie umowy, dostawy, prace montażowe rozpoczęte wcześniej = odrzucenie wniosku.
- BGK ma 30 dni na decyzję

**Realny timeline dla wspólnoty Jakuba** (zakładając dzisiejsza zgoda zarządu):
- 2026-04-21: start rozmów z zarządem
- 2026-05-01: zebranie wspólnoty + uchwała
- 2026-05-15: zbieranie dokumentacji (projekt, oferta wykonawcy, kosztorys)
- 2026-06-01: złożenie wniosku BGK
- 2026-07-01: decyzja BGK (jeśli wniosek kompletny)
- 2026-08-01: start prac
- 2026-11-01: zakończenie, zgłoszenie do ENEA Operator

To **bardzo napięty harmonogram**. Realnie dla wspólnoty Jakuba: albo start kampanii teraz, albo czekanie na kolejny nabór (nieuregulowany, `UNCONFIRMED` — następny Grant OZE może być w 2027 lub wcale, zależy od decyzji BGK po wyczerpaniu puli 2026).

### 4.3 Ulga termomodernizacyjna (podatek)

Osoba fizyczna będąca właścicielem lub współwłaścicielem budynku mieszkalnego może odliczyć od podstawy opodatkowania PIT **do 53 000 PLN** wydatków na PV (łącznie w ramach ulgi termomodernizacyjnej). `UNCONFIRMED` szczegóły dla 2026 — zmienił się katalog wydatków? Weryfikować w ustawie PIT art. 26h. Nie dotyczy prosumenta w bloku wielorodzinnym bez prawa własności do dachu.

---

## 5. Podatki i opłaty poza samą inwestycją

- **VAT**: 8% na instalację PV i magazyny energii w budynkach mieszkalnych do 300 m². Weryfikować przy zakupie — wykonawca podaje na fakturze.
- **Opłata przyłączeniowa OSD**: **0 PLN** dla mikroinstalacji (cytat ENEA Operator powyżej).
- **Opłata za licznik dwukierunkowy**: 0 PLN (ENEA instaluje za darmo).
- **Opłata koncesyjna URE**: **brak** dla mikroinstalacji ≤50 kW.
- **Akcyza**: brak dla energii oddanej do sieci z mikroinstalacji.

---

## 6. Konkretne dokumenty referencyjne (skróty do cytowania)

- **Ustawa OZE**: Ustawa z 20 lutego 2015 r. o odnawialnych źródłach energii (Dz.U. 2015 poz. 478 z późniejszymi zmianami). Tekst jednolity w ISAP.
- **Prawo energetyczne**: Ustawa z 10 kwietnia 1997 r. — Prawo energetyczne (Dz.U. 1997 nr 54 poz. 348 ze zmianami). Art. 7 ust. 8d6 — oświadczenie instalatora dla mikroinstalacji.
- **Prawo budowlane**: Ustawa z 7 lipca 1994 r. — Prawo budowlane. Art. 29 (zwolnienia z pozwolenia/zgłoszenia), art. 29a (mikroinstalacje). Nowelizacja z 7 stycznia 2026 — magazyny energii.
- **Rozporządzenie ws. warunków technicznych**: Rozporządzenie Ministra Infrastruktury z dnia 12 kwietnia 2002 r. w sprawie warunków technicznych, jakim powinny odpowiadać budynki i ich usytuowanie (Dz.U. 2002 nr 75 poz. 690 ze zmianami). § 183 — wyłącznik przeciwpożarowy, Dział VI — bezpieczeństwo pożarowe.
- **Ustawa o własności lokali**: Ustawa z 24 czerwca 1994 r. (Dz.U. 1994 nr 85 poz. 388 ze zmianami). Definicja części wspólnych, uchwały wspólnoty.
- **Normy techniczne**: PN-EN 62619 (akumulatory Li-ion), PN-HD 60364-7-712 (instalacje PV), PN-EN IEC 62933-5-2 (magazyny energii), PN-EN 62446 (dokumentacja PV), NC RfG (kod sieci).

Każdy dokument dostępny w ISAP (isap.sejm.gov.pl) lub w Polskim Komitecie Normalizacyjnym (PKN) — `UNCONFIRMED` czy wszystkie w wolnym dostępie.

---

## 7. UNCONFIRMED do zamknięcia w Fazie 2 lub przy podejmowaniu decyzji

- Dokładny wzór formularza WZ-MI na dziś (wersja bywa aktualizowana) — ściągnąć z operator.enea.pl przed złożeniem
- Aktualna stawka G11 dla Jakuba (PLN/kWh brutto) — z umowy z ENEA SA lub innym sprzedawcą
- Czy Jakub ma G11 czy G12w (dwustrefową) — wpływa na auto-konsumpcję
- Współczynnik korekcyjny 1,23 — referencja prawna (rozporządzenie? ustawa?) — dla pewności należy zweryfikować u URE
- Dokładna liczba miesięcy okresu rozliczenia depozytu prosumenckiego (12 czy 13)
- Moc przyłączeniowa mieszkania Jakuba (kVA) — z umowy
- Typ licznika w mieszkaniu (1-fazowy 25A czy 3-fazowy) — wpływa na max. moc mikroinstalacji
- Czy wspólnota ma obecnie PWP — zazwyczaj tak, ale to bloker dla montażu dachowej PV
- Liczba mieszkań we wspólnocie — wpływa na koszt na lokator i prawdopodobieństwo uzyskania quorum
- Czy wspólnota ma pomieszczenie techniczne spełniające EI60/REI60/EI30 — zdecyduje o koszcie adaptacji pod magazyn energii
