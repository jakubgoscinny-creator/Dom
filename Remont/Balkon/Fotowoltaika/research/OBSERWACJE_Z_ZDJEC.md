# Obserwacje z inspekcji zdjęć balkonu

Źródło: `../../zdjęcia/` + `zachodnia_sciana/` + `INDEX.md`. Data dostępu: 2026-04-21. Dwanaście zdjęć głównych plus folder pomocniczy. Zdjęcia zostały wykonane w marcu 2026 (dokładne daty w EXIF nie były weryfikowane — dostęp do serwisu EXIF `UNCONFIRMED`).

## Streszczenie dla PV (maks 5 punktów)

- Balkon faktycznie ma kształt lekko trapezowy: 465 cm długości, 107 cm przy ścianie, 99 cm przy balustradzie, wysokość balustrady 80 cm, grubość płyty 17 cm. Orientacja SE (E/S) potwierdzona przez użytkownika.
- **Nawis piętra wyżej (daszek balkonu)** rzuca cień na górną krawędź zewnętrznej strefy balkonu w godzinach okołopołudniowych latem. Dla paneli pionowych na balustradzie wpływ pomijalny (panel wisi poniżej poziomu daszka), ale wariant z odchyleniem ≥30° od pionu zaczyna łapać cień górnej krawędzi → praktyczny argument za montażem pionowym.
- **Widoczna korozja (rdza) u stopy balustrady** w miejscach spawów pionowych prętów z poziomą ramą podstawy — `UNCONFIRMED` głębokość, ale wizualnie znacząca. To bloker montażowy — balustrada wymaga inspekcji konstrukcyjnej przed obciążeniem panelami PV + przeglądu antykorozyjnego. Pozycja dodana do budżetu i ryzyk.
- **Siatka zabezpieczająca dla kota zamontowana na całej otwartej powierzchni balkonu** (linki stalowe pionowe z napinaczami rzymskimi, siatka o oczku ~4 cm). Mocowanie paneli po zewnętrznej stronie balustrady (poza siatką) jest w pełni kompatybilne — siatka zostaje. Wariant paneli wewnątrz między prętami balustrady odpada.
- **Zacienienie dalekie** (od sąsiednich budynków) praktycznie nieistotne na 9. piętrze: szkoła z płaskim dachem i boisko są niskie i odległe, wieżowiec w tle po prawej stronie kadru jest dalej niż kilkaset metrów. Zdjęcia w słoneczny dzień (IMG_9094, IMG_9095) potwierdzają pełne nasłonecznienie balkonu.

---

## 1. Wymiary i geometria

Źródło wymiarów: zdjęcie `67B010A6-6E4D-4691-BDC8-4AAED2114975.PNG` (rzut z góry z naniesionymi wymiarami na podłodze betonowej).

| Wymiar | Wartość | Uwaga |
|--------|---------|-------|
| Długość balkonu | 465 cm | Równolegle do ściany budynku |
| Szerokość przy ścianie | 107 cm | Tylna część |
| Szerokość przy balustradzie | 99 cm | Przednia część — balkon lekko zwęża się ku zewnątrz |
| Wysokość balustrady | 80 cm | Od poziomu płyty do górnej krawędzi balustrady |
| Grubość/wyskok płyty | 17 cm | Widoczna krawędź od zewnątrz |

Pole balustrady dostępne do montażu (od zewnątrz): ~4,65 m × 0,8 m = **~3,7 m²**. W praktyce pola użytkowego mniej — minus miejsce na uchwyty na końcach, minus ewentualne odejście od sąsiedniego balkonu/ściany.

## 2. Orientacja

Użytkownik potwierdził: **SE (E/S)**. W konwencji PVGIS `aspect = -45°`.

`UNCONFIRMED` (niekrytyczne): dokładna dewiacja od czystego SE w granicach ±15° — do weryfikacji aplikacją kompasu na iPhone podczas wizyty. W PVGIS sensitivity band -30° / -45° / -60° daje spread kilku procent w rocznej produkcji — nie zmienia rekomendacji.

## 3. Daszek (nawis piętra wyżej)

Widoczny na IMG_8874, IMG_8877, IMG_8878. To standardowy nawis mieszkania nad — pełny dach balkonu wystający na głębokość płyty balkonowej.

Implikacje:
- **Panel pionowy (90°) na balustradzie**: bez wpływu. Panel jest pod poziomem balustrady (80 cm wysokości) i nawis nie sięga tak nisko.
- **Panel odchylony (60° od poziomu = 30° od pionu)**: górna krawędź panela może wchodzić w cień nawisu w godz. 11-14 latem. Strata produkcji szacunkowo 5-10% `UNCONFIRMED` — wymaga dokładnego modelowania w Three.js.
- **Panel leżący 30° od poziomu** (tj. prawie dachowy): niemożliwy do montażu bez ramy wystającej POZA daszek, co z kolei generuje obciążenie wiatrowe i wizualnie narusza zgodność z sąsiednimi balkonami — prawie na pewno negatywna opinia wspólnoty.

Praktyczny wniosek: wariant **pionowy (90°)** traktujemy jako domyślny. Wariant odchylony 60° można rozważać w drugim przejściu, z uwzględnieniem realnego zacienienia nawisem. PVGIS nie uwzględnia geometrii nawisu balkonu — trzeba to doliczyć jako post-PVGIS multiplier.

## 4. Ściana boczna

Na zdjęciach IMG_8874, IMG_8877, IMG_8878 widać że balkon jest zamknięty z jednej strony **litą kremową ścianą** (tzw. ścianka dzieląca od sąsiedniego balkonu lub ściana szczytowa). Druga strona (przy drzwiach balkonowych) — również zamknięta ścianą budynku.

Implikacja: balkon jest otwarty wyłącznie przodem (SE) i ma ograniczony dostęp światła z **E** (wschodnie słońce rano) i **S** (przez róg). Bocznej ściany przy zachodzie nie dotyczy, bo balkon patrzy na SE — popołudniowe słońce z SW/W i tak uderza tylko pod ostrym kątem w pionowy panel SE.

`UNCONFIRMED` (do potwierdzenia przez Jakuba): po której stronie (patrząc z wewnątrz na zewnątrz) jest boczna ściana — lewo czy prawo. Ma znaczenie dla szacunku porannego vs popołudniowego shading, choć różnica praktyczna dla SE-facing to i tak <5%.

## 5. Balustrada — konstrukcja i stan

Źródła: INDEX.md, IMG_8874, IMG_8877, IMG_9134 (detal rdzy).

Konstrukcja: metalowa rama (kolor ciemnobrązowy/bordowy), pionowe pręty stalowe, od strony wewnętrznej wstawione **płyciny w kolorze pomarańczowo-brązowym** (prawdopodobnie HPL lub blacha lakierowana). Górna krawędź — prostokątna rama nośna.

Stan:
- **Korozja widoczna przy podstawach pionowych prętów** (IMG_9134) — ruda rdza na stopach i wokół spawów z ramą poziomą. Głębokość korozji `UNCONFIRMED` bez młotka inspekcyjnego.
- Górna rama wydaje się w dobrym stanie wizualnym (IMG_9135).
- Płyciny kolorystyczne nie wykazują pęknięć ani wyraźnych ubytków.

Implikacja dla PV:
- Panel standardowy (≈ 15 kg / 400 W) mocowany zaciskami "J-hook" lub kątownikami na zewnętrznej stronie balustrady **obciąża moment gięty** poziomy górnej ramy. Skorodowane pręty pionowe są **strefą największego naprężenia** przy wietrze (panel jak żagiel). Bez przeglądu konstrukcyjnego — nie dawać zgody na pełne obciążenie.
- Alternatywa: montaż do samej **górnej poziomej ramy** (jeśli wykazuje wystarczającą nośność) + do **ściany budynku** jako punkt kotwiczący — ale ściana boczna nie jest na całej długości balkonu, więc ta opcja dotyczy tylko jednego panelu przy końcu ze ścianą.

Rekomendacja do planu: pozycja **"Inspekcja konstrukcyjna balustrady + ewentualne wzmocnienie antykorozyjne"** → `plan/BUDZET.md` i `plan/PLAN_WYKONANIA.md` jako zadanie przed zamówieniem paneli. `UNCONFIRMED` koszt — szacunek 300-800 PLN za wizytę konstruktora + farba epoksydowa, do weryfikacji u wykonawcy.

## 6. Siatka zabezpieczająca dla kota

Źródła: IMG_9094, IMG_9095, IMG_9134 (dolne mocowanie do balustrady klipsami), IMG_9135 (górne mocowanie — linka stalowa z napinaczem rzymskim do sufitu i ściany).

Parametry:
- Oczko ~4 cm (szacunek z proporcji zdjęcia `UNCONFIRMED`)
- Linka stalowa pionowa co ~50 cm, napinana śrubami rzymskimi na górze
- Siatka rozciąga się od balustrady do sufitu balkonu na **całej otwartej powierzchni** (przód + jedna strona otwarta, druga zamknięta ścianą)
- Montaż profesjonalny — punkty kotwiczenia w betonowym suficie i w ścianie

Implikacje dla PV:
- **Panele montowane na zewnętrznej stronie balustrady są POZA siatką** → siatka nie rzuca istotnego cienia na panel (stoi po stronie wewnętrznej).
- Oczko 4 cm + linka 2-3 mm = znikome zacienienie (<1%, `UNCONFIRMED`).
- Siatka nie musi być demontowana na stałe — wystarczy chwilowe poluzowanie napinaczy w rogu do wyciągnięcia narzędzia na zewnątrz przy montażu.
- **Wariant paneli wewnątrz balkonu (między prętami balustrady lub oparte o balustradę od środka) odpada** — kolidują z siatką i blokują wejście/wyjście kota.

## 7. Zacienienie od otoczenia

Zdjęcie kluczowe: `IMG_8875.JPEG` (panorama z balkonu) + `IMG_9094.JPEG` (pełne słońce).

Co widać przy SE od balkonu:
- **Bezpośrednio naprzeciw**: szkoła z płaskim dachem (3-4 kondygnacje) i boisko sportowe — poniżej linii 9. piętra, brak cienia.
- **Lewy kadr (E)**: niska zabudowa osiedlowa, wyższe bloki w tle kilkaset metrów dalej.
- **Prawy kadr (S/SW)**: wieżowiec w dali (8-10 pięter, daleko), niższe bloki bliżej.
- **Horyzont**: otwarty, widać panoramę miasta.

Wnioski:
- Dla słońca wschodzącego (E, 6-8 rano latem): brak istotnego cienia.
- Dla słońca południowego (S, 11-13): brak cienia dalekiego, ale **jest cień bliski z nawisu balkonu** — patrz pkt 3.
- Dla słońca popołudniowego (SW/W): balkon SE już sam odwraca się od tego kierunku — strata geometryczna, nie cień.

Sugerowany domyślny **shading_factor w kalkulatorze: 10-15%** dla wariantu pionowego, **20-25%** dla wariantu odchylonego (wejście w cień nawisu). `UNCONFIRMED` dokładne wartości do kalibracji po zbudowaniu modelu 3D cienia.

## 8. Obecne wyposażenie balkonu

Dla kontekstu planu montażu (co trzeba przesunąć):
- 2 krzesła ratanowe składane
- 1 stolik ratanowy składany
- 1 parasol ogrodowy czarny ze stojakiem
- 1 mata/dywanik podłogowy

Nic nie blokuje montażu na balustradzie od zewnątrz. Wewnętrzna strefa balkonu zostaje wolna dla życia.

## 9. Stan podłogi i powierzchni

Podłoga betonowa szara, wyraźnie zanieczyszczona (ptasie odchody, zacieki) — patrz IMG_8874, IMG_8877, IMG_8878. Wymaga umycia przed pracami montażowymi, ale to raczej temat ogólnej pielęgnacji balkonu niż PV.

## 10. Widok fotograficzny — folder `zachodnia_sciana/`

Folder `../zdjęcia/zachodnia_sciana/` zawiera materiały z innego projektu (ławka bambusowa, warianty kolorystyczne, composite). **Nie dotyczy fotowoltaiki** — pozostawiam bez inspekcji merytorycznej dla tego researchu.

---

## UNCONFIRMED flagi (do zamknięcia w czasie Fazy 1 lub wizyty)

| Flag | Kto rozstrzyga | Jak |
|------|-----------------|-----|
| Dokładna dewiacja orientacji od czystego SE (±15°) | Jakub | Aplikacja kompas na iPhone, stojąc na balkonie |
| Głębokość korozji pionowych prętów balustrady | Konstruktor / ślusarz | Przegląd fizyczny, młotek, ewent. grubościomierz magnetyczny |
| Nośność balustrady dla paneli PV | Konstruktor + ew. deklaracja producenta budynku | Opinia techniczna, ewent. test obciążeniowy |
| Oczko i średnica linek siatki dla kota (dokładnie) | Jakub | Pomiar bezpośredni |
| Po której stronie balkonu jest ściana boczna | Jakub | Jedno zdanie w następnej wiadomości |
| Czy jakieś elementy z sąsiednich balkonów wystają ponad linię balustrady (np. donice, anteny) i mogą rzucać cień | Jakub + fotka | Spojrzenie w lewo/prawo stojąc na balkonie |

---

## Wnioski dla warstwy kalkulatora (app/)

1. Domyślny tilt: **90°** (pionowy). W UI suwak 60°-90°, z ostrzeżeniem że <90° wymaga ramki konstrukcyjnej i zgody wspólnoty na wystającą konstrukcję.
2. Domyślny aspect: **-45° SE**. Suwak -60° do -30° dla sensitivity.
3. Domyślny shading: **15%** (pionowy) / **25%** (odchylony). Suwak 0-50% z help textem cytującym obserwacje z tego pliku.
4. Pokazać w UI badge: "Balustrada zgłoszona do inspekcji konstrukcyjnej" z linkiem do RYZYKA.md. Dopóki ta pozycja nie zostanie zamknięta, rekomendacja w REKOMENDACJA.md ma dopisek "pod warunkiem pozytywnej opinii konstruktora".
5. W Three.js: narysować daszek (nawis piętra wyżej) jako osobny box, żeby można było zobaczyć cień o dowolnej godzinie dnia. To pozwoli użytkownikowi samemu skalibrować shading.

## Wnioski dla warstwy biznesowej (biznes/)

1. CAPEX musi obejmować: inspekcję konstrukcyjną balustrady (300-800 PLN, `UNCONFIRMED`) + ewentualne wzmocnienie antykorozyjne prętów (200-500 PLN, `UNCONFIRMED`).
2. Scenariusz "maksymalny" (800W lub 2×400W) jest fizycznie możliwy na 465 cm balustrady, ale tylko w orientacji poziomej paneli (typowe wymiary 100-170 cm długości).
3. Scenariusz z odchyleniem 60° jest teoretycznie +32% produkcji, ale praktycznie prawie na pewno odrzucony przez wspólnotę (wystająca konstrukcja) i niezalecany na 9. piętrze (wiatr). Traktujemy jako ciekawostkę, nie rekomendację.

## Wnioski dla warstwy planu (plan/)

1. W PLAN_WYKONANIA.md: **pierwszy krok po decyzji zakupowej = inspekcja balustrady**, nie zamówienie paneli. Jeśli inspekcja wykaże że balustrada nie utrzyma paneli — cały plan do renegocjacji (wzmocnienie vs. rezygnacja).
2. W CHECKLIST.md: poluzować siatkę dla kota w rogu przed montażem, przywrócić po.
3. W RYZYKA.md: wysokie ryzyko "wspólnota odrzuci wystającą konstrukcję" dla wariantów odchylonych; średnie ryzyko "korozja balustrady wykluczy obciążenie" dla wszystkich wariantów.
