# Źródła

Zestawienie wszystkich źródeł cytowanych w warstwie research, biznes i plan. Format: URL — wydawca — tytuł — data dostępu — jednolinijkowa uwaga o przydatności. Data dostępu ujednolicona: **2026-04-21** chyba że wskazano inaczej. Niektóre odnośniki do stron sklepowych są `UNCONFIRMED` — mechanizm antybot blokował WebFetch, cytowane są fragmenty z wyszukiwarki.

## 1. Autorytatywne źródła regulacyjne

### 1.1 Polska — dystrybutor i prosument

- `https://www.operator.enea.pl/przylaczenie-do-sieci/przylaczenie-mikroinstalacji/przylaczenie-mikroinstalacji-w-trybie-zgloszenia` — ENEA Operator — "Przyłączenie mikroinstalacji w trybie zgłoszenia" — 2026-04-21 — oficjalna procedura zgłoszenia mikroinstalacji prosumenckiej, terminy, adresy, formularz WZ-MI. Cytowane w `PRZEPISY_PL.md`.
- `https://www.operator.enea.pl/przylaczenie-do-sieci/przylaczenie-mikroinstalacji` — ENEA Operator — "Przyłączenie mikroinstalacji" — 2026-04-21 — ogólna strona kategorii, odnośniki do podstron, trybu zgłoszenia i trybu z warunkami przyłączenia.
- `https://www.operator.enea.pl/uslugi-dystrybucyjne/dla-domu/pliki-do-pobrania` — ENEA Operator — "Pliki do pobrania" — 2026-04-21 — lokalizacja formularza WZ-MI (Zgłoszenie / Wniosek o określenie warunków przyłączenia mikroinstalacji). `UNCONFIRMED` — nie fetchowane bezpośrednio, referencja z `elektro-bar.pl` i `solarblog.pl`.
- `https://www.operator.enea.pl/mikroinstalacja-formularz-zgloszeniowy` — ENEA Operator — "Mikroinstalacja — formularz zgłoszeniowy" — 2026-04-21 — formularz online (jeśli dostępny).

### 1.2 Polska — dotacje

- `https://www.bgk.pl/produkty/grant-oze/` — Bank Gospodarstwa Krajowego — "Grant OZE" — 2026-04-21 — oficjalny opis programu Grant OZE dla wspólnot i spółdzielni mieszkaniowych, 50% kosztów, deadline 30 czerwca 2026, wymagana uchwała wspólnoty, procedura 30 dni na decyzję BGK. Kluczowe dla `WSPOLNOTA_SCENARIUSZ.md`.
- `https://www.gov.pl/web/nfosigw/startuje-program-dotacji-na-instalacje-fotowoltaiczne-i-magazyny-energii` — NFOŚiGW (Portal gov.pl) — "Startuje program dotacji na instalacje fotowoltaiczne i magazyny energii" — 2026-04-21 — Mój Prąd Program Przejściowy, budżet 335 mln PLN z KPO, nabór 30 marca — 24 kwietnia 2026.
- `https://www.gov.pl/web/nfosigw/konsultacje-spoleczne-programu-dofinansowania-instalacji-fotowoltaicznych-i-magazynow-energii` — NFOŚiGW — "Konsultacje społeczne programu..." — 2026-04-21 — projekt programu docelowego 2026-2030.
- `https://mojprad.gov.pl` — Ministerstwo Klimatu / NFOŚiGW — "Mój Prąd" — 2026-04-21 — strona główna programu.

### 1.3 Polska — przepisy techniczne i przeciwpożarowe

- `https://arslege.pl/warunki-techniczne-dotyczace-instalacji-elektrycznych/k218/a23331/` — ArsLege (baza aktów prawnych) — Rozporządzenie Ministra Infrastruktury w sprawie warunków technicznych, jakim powinny odpowiadać budynki i ich usytuowanie, § 183 — 2026-04-21 — wyłącznik przeciwpożarowy prądu, instalacje elektryczne.
- `https://www.prawo.pl/biznes/magazyny-energii-zmiany-w-przepisach-o-warunkach-technicznych,533794.html` — Wolters Kluwer Prawo.pl — "Magazyny energii — zmiany w przepisach o warunkach technicznych" — 2026-04-21 — nowelizacja Prawa budowlanego z dnia 7 stycznia 2026 wprowadzająca ramy dla magazynów energii elektrycznej w budynkach.
- `https://www.izolacje.com.pl/artykul/prawo-ekonomia-rynek/296320,nowe-przepisy-prawa-budowlanego-dotyczace-magazynow-energii` — Izolacje.com.pl — "Nowe przepisy Prawa budowlanego dotyczące magazynów energii" — 2026-04-21 — szczegółowa analiza progów 10 / 30 / 300 kWh i wymogów pomieszczeniowych EI60/REI60/EI30.
- `https://arslege.pl/rozporzadzenie-ministra-infrastruktury-w-sprawie-warunkow-technicznych-jakim-powinny-odpowiadac-budynki-i-ich-usytuowanie/k218/s3074/` — ArsLege — Dział VI. Bezpieczeństwo pożarowe — 2026-04-21 — ogólna sekcja bezpieczeństwa pożarowego.

### 1.4 EU / promienne

- `https://re.jrc.ec.europa.eu/api/v5_2/PVcalc` — JRC (Joint Research Centre, Komisja Europejska) — "PVGIS API v5_2 PVcalc" — 2026-04-21 — autorytatywne źródło rocznej produkcji PV dla dowolnej lokalizacji europejskiej. 4 odpytania z moimi parametrami są w `research/PVGIS_RAW.json`.
- `https://re.jrc.ec.europa.eu/pvg_tools/en/` — JRC — "PVGIS online tool" — 2026-04-21 — interaktywne narzędzie uzupełniające API, dla sanity check.

## 2. Źródła branżowe (Polska)

### 2.1 Net-billing i prosument

- `https://elektro-bar.pl/blog/net-billing-po-zmianach-2026-zasady-rozliczania-prosumentow/` — Elektro-Bar — "Net-billing po zmianach 2026 – zasady rozliczania prosumentów" — 2026-04-21 — przegląd zasad net-billingu 2026, bilansowanie godzinowe, RCE, ceny TGE (średnia 2025: 312 PLN/MWh, prognoza 2026: 295-330 PLN/MWh).
- `https://elektro-bar.pl/blog/nowelizacja-prawa-energetycznego-2026-a-fotowoltaika-kompletny-przewodnik-po-zmianach-obowiazkach-i-rozliczeniach/` — Elektro-Bar — "Nowelizacja Prawa Energetycznego 2026 a fotowoltaika" — 2026-04-21 — zmiany ustawowe wchodzące w życie.
- `https://enzeit.com/aktualnosci/godzinowy-system-rozliczen-za-energie-w-2026/` — Enzeit — "Godzinowy system rozliczeń za energię w 2026" — 2026-04-21 — szczegóły rozliczenia godzinowego.
- `https://akademia-fotowoltaiki.pl/net-billing-fotowoltaika-przyklady/` — Akademia Fotowoltaiki — "Net-billing przykład rozliczenia" — 2026-04-21 — przykłady liczbowe rozliczeń.
- `https://pvkalkulator.pl/net-billing` — PVKalkulator — "Net-billing 2026 — System Rozliczeń Prosumentów" — 2026-04-21 — referencja wskaźnika korekcyjnego 1,23 (23% premii wartości energii oddanej do sieci, obowiązuje od 1 lutego 2026). `UNCONFIRMED` — wskaźnik cytowany ze snippetu, wymaga weryfikacji bezpośrednio na URE.

### 2.2 Przepisy dla balkonowej PV

- `https://pvguru.pl/blog/fotowoltaika-na-balkonie-w-bloku-przepisy-i-zgoda-spoldzielni-2025-kompletny-poradnik/` — PV Guru — "Fotowoltaika na balkonie w bloku — przepisy i zgoda spółdzielni 2025" — 2026-04-21 — procedura uzyskania zgody wspólnoty/spółdzielni, wymagane dokumenty, quorum, art. 29 Prawa budowlanego. Cytowane w `PRZEPISY_PL.md`.
- `https://balconysolar.uk/pl/panele-fotowoltaiczne-na-balustradzie` — BalconySolar UK — "Fotowoltaika na balkonie: Kompletny przewodnik 2026" — 2026-04-21 — ogólny przewodnik dla PL/UK, limity 800W, aspekty techniczne.
- `https://balconysolar.uk/pl/zgoda-wsp-lnoty-mieszkaniowej-fotowoltaika` — BalconySolar UK — "Fotowoltaika we wspólnocie: Jak uzyskać zgodę w 2026?" — 2026-04-21.
- `https://www.elektroda.pl/rtvforum/topic4134713.html` — Elektroda — "Zgłoszenie mikroinstalacji PV 800Wp w domu jednorodzinnym" — 2026-04-21 — dyskusja użytkowników o samodzielnym zgłoszeniu do OSD.
- `https://www.elektroda.pl/rtvforum/topic4027447.html` — Elektroda — "Mini instalacja fotowoltaiczna 800 W, kilka pytań praktycznych" — 2026-04-21 — dyskusja techniczna o wyborze komponentów.
- `https://biznes.wprost.pl/twoj-portfel/11754240/fotowoltaika-na-balkonie-wymaga-zgody-bez-niej-spoldzielnia-moze-nakazac-demontaz.html` — Biznes Wprost — "Fotowoltaika na balkonie wymaga zgody" — 2026-04-21 — ilustracja konsekwencji braku zgody (samowola budowlana, grzywna do 5000 PLN).
- `https://prawomieszkaniowe.pl/baza-wiedzy/zgoda-na-montaz-urzadzen-we-wspolnocie-mieszkaniowej` — Prawo Mieszkaniowe — "Zgoda na montaż urządzeń we wspólnocie mieszkaniowej" — 2026-04-21 — aspekt prawny.
- `https://suntrack.pl/blog/fotowoltaika/fotowoltaika-balkonowa-w-bloku-jak-legalnie-zainstalowac-panele` — SunTrack — "Fotowoltaika balkonowa w bloku 2025" — 2026-04-21.

### 2.3 Wspólnota, spółdzielnia, prosument zbiorowy

- `https://top-oze.pl/fotowoltaika-w-blokach-w-2026-r-nowe-przepisy-doplaty-i-zasady-dla-wspolnot-mieszkaniowych/` — Top-OZE — "Fotowoltaika w blokach w 2026 r. Nowe przepisy, dopłaty i zasady dla wspólnot mieszkaniowych" — 2026-04-21 — kluczowe dla `WSPOLNOTA_SCENARIUSZ.md`.
- `https://www.gazetaprawna.pl/biznes/energetyka/artykuly/10923493,fotowoltaika-w-blokach-mieszkalnych-nowe-przepisy-i-doplaty-dla-wspol.html` — Gazeta Prawna — "Fotowoltaika w blokach mieszkalnych. Nowe przepisy i dopłaty dla wspólnot od 2026 roku" — 2026-04-21 — kontekst tarczy energetycznej wygasającej III kw. 2025 i wyższych stawek od 2026.
- `https://www.prawo.pl/prawo/fotowoltaika-dla-wspolnot-i-spoldzielni,520129.html` — Prawo.pl — "Z fotowoltaiki na dachu skorzysta wspólnota mieszkaniowa, a nie bezpośrednio jej członkowie" — 2026-04-21 — analiza prawna modelu prosumenta lokatorskiego.
- `https://kobo-energy.pl/fotowoltaika-w-bloku-2025-2026-mozliwosci-regulacje-koszty/` — Kobo Energy — "Fotowoltaika w bloku 2025/2026" — 2026-04-21 — przegląd modelu dla wspólnot.
- `https://aforenergy.com/pl/fotowoltaika-dla-wspolnoty-mieszkaniowej-zasady-i-instalacja/` — AforEnergy — "Fotowoltaika dla Wspólnoty Mieszkaniowej" — 2026-04-21.
- `https://3oze.pl/fotowoltaika-dla-wspolnot-i-spoldzielni-mieszkaniowych-2025/` — 3OZE — "Fotowoltaika dla wspólnot i spółdzielni mieszkaniowych 2026" — 2026-04-21.
- `https://swiatoze.pl/czy-wspolnota-mieszkaniowa-moze-zainwestowac-w-fotowoltaike/` — Świat OZE — "Czy wspólnota mieszkaniowa może zainwestować w fotowoltaikę?" — 2026-04-21.

### 2.4 Magazyny energii i PPOŻ

- `https://www.nexbe.pl/blog/magazyn-energii-w-bloku` — Nexbe — "Magazyn energii w bloku — czy można? Warunki i co zamiast 2026" — 2026-04-21.
- `https://aforenergy.com/pl/montaz-magazynu-energii-w-budynku-normy-bezpieczenstwo-pozarowe-i-wymagania-instalacyjne/` — AforEnergy — "Montaż magazynu energii w budynku — normy" — 2026-04-21 — normy PN-EN 62619, PN-HD 60364-7-712, PN-EN IEC 62933-5-2.
- `https://www.solwis.pl/wytyczne-ppoz-dla-magazynow-energii` — Solwis — "Wytyczne ppoż dla magazynów energii" — 2026-04-21.
- `https://ozenow.pl/blog/wymogi-ppoz-dla-magazynow-energii-w-domach-jednorodzinnych-kompletny-przewodnik-2025/` — OZE Now — "Wymogi PPOŻ dla magazynów energii" — 2026-04-21.
- `https://www.solwis.pl/fotowoltaika-przeciwpozarowy-wylacznik-pradu-pwp` — Solwis — "Fotowoltaika a Przeciwpożarowy Wyłącznik Prądu (PWP)" — 2026-04-21.
- `https://www.firemar.pl/aktualnosci/q-a-uzgodnienie-ppoz-instalacji-pv` — FireMar — "Q&A Uzgodnienie PPOŻ instalacji PV" — 2026-04-21 — wymóg rzeczoznawcy ppoż dla instalacji >6,5 kW.
- `https://www.firetech.waw.pl/ochrona-przeciwpozarowa/ekspertyzy-opinie-doradztwo-ppoz/instalacja-fotowoltaiczna-pv-i-bezpieczenstwo-pozarowe/` — Firetech — "Instalacja fotowoltaiczna (PV) i bezpieczeństwo pożarowe" — 2026-04-21.
- `https://globenergia.pl/przeciwpozarowy-wylacznik-pradu-jak-go-dobrac-do-instalacji-fotowoltaicznej/` — GlobEnergia — "Przeciwpożarowy wyłącznik prądu — jak go dobrać do instalacji fotowoltaicznej" — 2026-04-21.
- `https://polskapv.pl/stanowisko-sbfime-w-sprawie-projektowanych-przepisow-dot-magazynow-energii/` — SBFiME — "Stanowisko SBFiME w sprawie projektowanych przepisów dot. magazynów energii" — 2026-04-21 — głos branży.

### 2.5 Dotacje szczegóły

- `https://aforenergy.com/pl/dotacje-na-fotowoltaike-2026-dofinansowania-i-magazyn-energii/` — AforEnergy — "Dotacje na fotowoltaikę 2026" — 2026-04-21.
- `https://aforenergy.com/pl/magazyn-energii-dofinansowanie-2025-2026-kwoty-i-zasady/` — AforEnergy — "Magazyn energii dofinansowanie 2025-2026" — 2026-04-21 — min. pojemność 12 kWh, 30% kosztów, max 800 PLN/kWh.
- `https://energetycznyprojekt.pl/dotacja-na-magazyn-energii/` — Energetyczny Projekt — "Dotacja na magazyn energii — nowy program 2026-2030" — 2026-04-21.
- `https://swiatoze.pl/dofinansowanie-magazynow-energii-2026-zasady-terminy-i-warunki-dla-prosumentow/` — Świat OZE — "Dofinansowanie magazynów energii 2026" — 2026-04-21.
- `https://akademia-fotowoltaiki.pl/moj-prad/` — Akademia Fotowoltaiki — "Mój Prąd — edycja 2026" — 2026-04-21.
- `https://www.polenergia-pv.pl/artykuly/nowa-dotacja-na-magazyn-energii-2026---nawet-16-tys-zl-sprawdz-ktorzy-prosumenci-dostana-najwiecej` — Polenergia PV — "Nowa dotacja na magazyn energii 2026 — nawet 16 tys. zł" — 2026-04-21.
- `https://kaisai.com/pl/grant-oze-dla-wspolnot-mieszkaniowych-i-spoldzielni-czym-jest` — KAISAI — "Grant OZE dla wspólnot mieszkaniowych" — 2026-04-21.
- `https://inenergy.pl/blog/grant-oze-dla-wspolnot-i-spoldzielni-mieszkaniowych/` — InEnergy — "Grant OZE dla wspólnot i spółdzielni mieszkaniowych" — 2026-04-21.
- `https://sunlit.pl/grant-oze-dla-wspolnot-i-spoldzielni-mieszkaniowych/` — Sunlit — "Grant OZE dla wspólnot i spółdzielni mieszkaniowych" — 2026-04-21.

## 3. Źródła komercyjne (produkty)

`UNCONFIRMED` cen indywidualnych produktów — bezpośredni WebFetch na Leroy Merlin i Allegro zwracał HTTP 403 (mechanizm antybot). Dane cytowane ze snippetów wyszukiwania i stron zbiorczych. Jakub ma zweryfikować cenę na URL przed zakupem.

- `https://www.leroymerlin.pl/produkty/elektryka-i-oswietlenie/instalacje-elektryczne/fotowoltaika/fotowoltaika-balkonowa-p.html` — Leroy Merlin — kategoria "fotowoltaika balkonowa" — 2026-04-21.
- `https://www.leroymerlin.pl/produkty/elektryka/instalacje-elektryczne/fotowoltaika/fotowoltaika-na-balkon/` — Leroy Merlin — kategoria "fotowoltaika na balkon" — 2026-04-21.
- `https://www.leroymerlin.pl/produkty/zestaw-2-paneli-fotowoltaicznych-na-balkon-800w-wifi-87679326.html` — Leroy Merlin — "Zestaw 2 paneli fotowoltaicznych na balkon 800W WIFI" — 2026-04-21 — `UNCONFIRMED` cena, WebFetch 403.
- `https://www.leroymerlin.pl/produkty/zestaw-fotowoltaiki-na-balkon-800w-basic-plus-ecoflow-89266303.html` — Leroy Merlin — "Zestaw fotowoltaiki na balkon 800W BASIC PLUS ECOFLOW" — 2026-04-21 — `UNCONFIRMED`, WebFetch 403.
- `https://www.leroymerlin.pl/porady/pomieszczenia/balkon/fotowoltaika-na-balkon-sprawdz-ile-mozesz-zyskac.html` — Leroy Merlin — poradnik "Fotowoltaika na balkon" — 2026-04-21.
- `https://allegro.pl/listing?string=zestaw+fotowoltaiczny+balkon` — Allegro — listing kategorii — 2026-04-21.
- `https://allegro.pl/listing?string=fotowoltaika+balkonowa+600+w` — Allegro — listing 600W — 2026-04-21 — cytowana cena od 1199 PLN (UNCONFIRMED).
- `https://allegro.pl/listing?string=fotowoltaika+balkonowa+800w` — Allegro — listing 800W — 2026-04-21 — cytowana cena 2899 PLN (UNCONFIRMED).
- `https://allegro.pl/listing?string=panel+fotowoltaiczny+800w` — Allegro — listing paneli 800W — 2026-04-21.

## 4. Źródła geolokalizacyjne

- `https://www.kodypocztowe.info/85-124` — Kody Pocztowe — "Kod pocztowy 85-124 Bydgoszcz" — 2026-04-21 — ulica Marii Konopnickiej, UP Bydgoszcz 39.
- `https://mapy.e-turysta.pl/kody-pocztowe/85-124-bydgoszcz/` — e-Turysta Mapy — "Kod pocztowy 85-124 Bydgoszcz" — 2026-04-21 — lokalizacja na mapie.
- `https://mapy.e-turysta.pl/kody-pocztowe/bydgoszcz/` — e-Turysta — "Kody pocztowe Bydgoszcz" — 2026-04-21.

## 5. Benchmark niemiecki (Balkonkraftwerk)

Do porównania cenowego i dojrzałości rynku, nie do cytowania jako polski koszt.

- `https://www.adac.de/rund-ums-haus/energie/versorgung/balkonkraftwerk/` — ADAC — "Balkonkraftwerk kaufen: So lohnt sich 2026 eine Mini-PV-Anlage bis 800 Watt" — 2026-04-21 — cena 300-700 EUR, obniżki do historycznego minimum w 2025/2026.
- `https://www.energiemagazin.com/balkonkraftwerk/vereinfachte-regeln/` — EnergieMagazin — "Balkonkraftwerk Gesetz 2026: VDE Norm, Regeln & Vorschriften" — 2026-04-21 — nowe regulacje VDE koniec 2025, tolerancja Schuko do 800W.
- `https://praxis-dagmar-henkel.de/balkonkraftwerk-2026-verbraucherzentrale-erklaert-ab-wann-sich-die-investition-wirklich-rechnet/` — Verbraucherzentrale (referencja) — "Balkonkraftwerk 2026: Verbraucherzentrale erklärt, ab wann sich die Investition wirklich rechnet" — 2026-04-21 — analiza opłacalności zależna od auto-konsumpcji.
- `https://reduco.ai/blog/balkonkraftwerk-2026-regeln-kosten` — Reduco — "Balkonkraftwerk 2026: Regeln, Kosten" — 2026-04-21.
- `https://www.sunenergyxt.com/blog/2026-deutschland-balkonkraftwerk-gesetz-800w-grenze-vde-normen-vollstandig-erklart/` — SunEnergyXT — "2026 Deutschland Balkonkraftwerk Gesetz" — 2026-04-21.

## 6. Zdjęcia źródłowe balkonu

- `../../zdjęcia/INDEX.md` — lokalnie — indeks zdjęć balkonu z opisami — wygenerowany wcześniej — 2026-04-21 (data inspekcji).
- `../../zdjęcia/*.JPEG`, `*.PNG` — lokalnie — dwanaście zdjęć + folder `zachodnia_sciana/` — 2026-04-21.

## 7. Dokumenty wspólnoty mieszkaniowej (prymarne)

- `../docs/Konopnickiej 33.pdf` — **Wspólnota Mieszkaniowa ul. Konopnickiej 33** — "Plan gospodarczy Wspólnoty Mieszkaniowej na rok 2026", data wydruku 27.02.2026, 2 strony, 346,2 KB — 2026-04-22 (data analizy). **Dokument oficjalny** podpisany przez księgową (Joanna Wendrowska), administratora (Andrzej Szczepaniak, Wspólnoty.pl) i członka zarządu. Zawiera: pełne dane formalne wspólnoty (NIP 9532425130, adres, administrator), dane techniczne nieruchomości (4 284 m², 83 lokale mieszkalne), plan finansowy 2026 (przychody, koszty, fundusz remontowy 303 917 PLN na koniec 2026), stawki i opłaty. Zamyka większość `UNCONFIRMED` dla wspólnoty Jakuba. Szczegółowe streszczenie w `WSPOLNOTA_DANE_FORMALNE.md`.

## 8. Źródła ustne / potwierdzenia od użytkownika

- Jakub Gościnny — potwierdzenie 2026-04-22 — liczba kondygnacji budynku: **11 pięter** (nie 9 jak wskazywały zdjęcia "wysokie, 8-10 pięter"). Klasyfikacja prawna: budynek wysoki (W, 10-18 kondygnacji) → obligatoryjne wymogi ppoż.

## Polityka aktualizacji

Każda nowa cena, liczba, fakt dodawany do dowolnego pliku w projekcie **musi** wylądować tu z URL, datą dostępu i jednolinijkową uwagą. Źródła pokazują wiek kalkulacji — jeśli budżet sporządzony w maju wciąż powołuje się na źródło z kwietnia, akceptowalne. Jeśli w lipcu powołujemy się na kwiecień — zweryfikuj.
