# Matryca ryzyk — prawdopodobieństwo × wpływ × mitygacja

Skala: prawdopodobieństwo **L** (low, <20%), **M** (medium, 20-60%), **H** (high, >60%). Wpływ podobnie. Ryzyka o kombinacji **H×H** lub **M×H** wymagają aktywnej mitygacji, nie tylko obserwacji.

## Streszczenie priorytetowe

- **H×H (ryzyko krytyczne, wymaga aktywnego działania)**:
  - R-B-1: Nie złożymy wniosku BGK przed 30.06.2026 → Grant OZE dla wspólnoty przepada (dla scenariusza B)
  - R-A-3: Wspólnota odmawia uchwały (dla scenariusza A — zablokuje projekt)
- **M×H (ryzyko wysokie, wymaga planu B)**:
  - R-A-2: Korozja balustrady dyskwalifikuje montaż — konstruktor odmawia zgody na obciążenie
  - R-B-3: BGK odrzuca wniosek z powodów formalnych
  - R-Z-1: Zmiana regulacji net-billing (współczynnik 1,23 obniżony albo zlikwidowany)
- **H×M (częste, umiarkowany wpływ)**:
  - R-A-1: Opóźnienie uchwały wspólnoty o 2-4 tygodnie vs. plan
  - R-B-2: Wykonawca PV nie wyrabia harmonogramu
- **L×H (rzadkie, ale katastrofalne)**:
  - R-O-1: Pożar magazynu energii w pomieszczeniu technicznym
  - R-O-2: Awaria PV w czasie silnej burzy — uszkodzenie sąsiednich balkonów (A) lub dachu (B)

---

## Ścieżka A — balkon indywidualny

### R-A-1 — Opóźnienie uchwały wspólnoty

- **Prawd.**: H — typowe dla wspólnot, które nie mają regularnych zebrań
- **Wpływ**: M — opóźnia montaż o 2-6 tygodni, ale nie zabija projektu
- **Mitygacja**: (1) Złożyć wniosek w pełnej formie przygotowawczej — z wizualizacją, specyfikacją, gwarancją demontażu. (2) Zaproponować zdalne głosowanie (obieg listy do podpisów), szybsze niż zebranie fizyczne. (3) Spotkać się wstępnie z kluczowymi lokatorami zanim formalnie wniosek trafi do zarządu — unikać niespodzianek na zebraniu.
- **Plan B**: Jeśli opóźnienie >3 miesiące — przesuwać zamówienie, nie kumulować kosztów.

### R-A-2 — Korozja balustrady dyskwalifikuje

- **Prawd.**: M — z obserwacji na zdjęciach korozja jest widoczna, ale głębokość `UNCONFIRMED`
- **Wpływ**: H — zablokuje montaż paneli na balustradzie
- **Mitygacja**: (1) Inspekcja konstruktora JAKO PIERWSZY KROK, przed jakimkolwiek zamówieniem. (2) Profilaktyczna antyrdzewka nawet jeśli nośność jest OK. (3) Alternatywa: panele na **stojaku wewnątrz balkonu** (wariant niekolidujący z balustradą) — mniejszy uzysk produkcji ze względu na cień od balustrady i mniejszą powierzchnię, ale bezpieczniejszy konstrukcyjnie.
- **Plan B**: Rezygnacja z balkonowej PV, przejście do Ścieżki B lub odroczenie do remontu balustrady przez wspólnotę.

### R-A-3 — Wspólnota odmawia uchwały o PV na balustradzie

- **Prawd.**: H — wspólnoty często są konserwatywne, panele PV to wizualna ingerencja w elewację
- **Wpływ**: H — całkowity blocker dla Ścieżki A (bez zgody to samowola budowlana, 5 000 PLN grzywny + demontaż)
- **Mitygacja**: (1) Pokazać wizualizację 3D pokazującą że panele na zewnętrznej stronie balustrady pionowo są **praktycznie niewidoczne od strony ulicy** (tylny widok balkonu). (2) Zaoferować: (a) demontaż przy remoncie elewacji na koszt Jakuba, (b) czystość, (c) odpowiedzialność za szkody. (3) Powołać się na trend (niemiecki Balkonkraftwerk, inne bloki w Bydgoszczy z PV).
- **Plan B**: Przejście do Ścieżki B (wspólnotowa) — jeśli wspólnota odmawia indywidualnej balkonowej, może być bardziej otwarta na wspólnotową (ma korzyść).

### R-A-4 — Uszkodzenie paneli wiatrem na 9. piętrze

- **Prawd.**: L — panele pionowo na balustradzie mają niski profil wiatrowy
- **Wpływ**: H — uszkodzenie panela + potencjalne uszkodzenie sąsiedniego balkonu lub chodnika pod
- **Mitygacja**: (1) Mocowania z obliczeniami nośności (wykonawca z uprawnieniami). (2) Ubezpieczenie OC mieszkania + rozszerzenie o instalację PV (~50-100 PLN/rok). (3) Kontrola wzrokowa wiosną po zimie. (4) Uniknąć wariantu odchylonego (60° od pionu) — znacznie większe obciążenie wiatrowe.
- **Plan B**: W razie uszkodzenia — natychmiastowy demontaż, wymiana z gwarancji lub z ubezpieczenia.

### R-A-5 — Kradzież paneli

- **Prawd.**: L — 9. piętro, brak łatwego dostępu, niska wartość rezydualna kradzionych paneli
- **Wpływ**: M — wartość ~1 500-2 000 PLN, ubezpieczenie pokryje większość
- **Mitygacja**: Ubezpieczenie OC + majątkowe rozszerzone na PV.

### R-A-6 — Niska produkcja vs. kalkulacja (cień, pogoda, degradacja)

- **Prawd.**: M — PVGIS podaje średnioroczną ±5,5% SD, ale lokalny cień od sąsiednich balkonów/drzew może być większy niż założone 15% shading
- **Wpływ**: M — oszczędność rocznej spada z 380 PLN na 250-300 PLN, payback idzie z 7,2 do 9-10 lat
- **Mitygacja**: (1) Obserwacja cienia przez kilka tygodni po montażu — czy pasuje do kalkulatorowego 15%. (2) Zapisać produkcję z aplikacji producenta i porównać z PVGIS raz w kwartał. (3) Akceptacja że payback jest widełką, nie jednym numerem.

---

## Ścieżka B — wspólnotowa

### R-B-1 — Nie złożymy wniosku BGK do 30.06.2026

- **Prawd.**: H — wspólnoty typowo nie działają w 10-tygodniowym tempie
- **Wpływ**: H — Grant OZE BGK 2026 przepada, projekt idzie w następnym naborze (`UNCONFIRMED` kiedy, jeśli w ogóle)
- **Mitygacja**: (1) Spotkanie z zarządem **do 2026-05-05**. (2) Wspierać zarząd w przygotowaniu materiałów (oferty wykonawców, treść uchwały). (3) Być obecnym na zebraniu wspólnoty jako pitcher pro-PV. (4) Zaproponować zdalne głosowanie jeśli zebranie się opóźnia. (5) Alternatywa prawna: jeśli część lokatorów to "szybcy" a inni "wolni" — głosowanie warunkowe (uchwała zawiera klauzulę "ważna pod warunkiem uzyskania dotacji BGK do X data").
- **Plan B**: Jeśli BGK odpadnie, wspólnota nadal może realizować projekt bez dotacji — CAPEX per lokator rośnie z 2 288 PLN do 4 575 PLN, payback z 4,5 lat do 9,1 lat. Nadal opłacalne, ale motywacja słabsza → większe ryzyko odrzucenia uchwały. Alternatywnie: czekać na nabór 2027.

### R-B-2 — Wykonawca PV nie wyrabia harmonogramu

- **Prawd.**: H — opóźnienia 2-6 tygodni są normą dla firm PV w szczycie sezonu (wiosna-lato)
- **Wpływ**: M — nie zabija projektu, ale przesuwa pierwszy kWh z stycznia 2027 na marzec-kwiecień 2027
- **Mitygacja**: (1) Umowa z karami za opóźnienie (3-5% wartości kontraktu per miesiąc). (2) Wybór wykonawcy na podstawie referencji, nie tylko ceny. (3) Kontraktowanie przed szczytem sezonu (luty-marzec 2026) aby mieć okno realizacji wrzesień-październik.

### R-B-3 — BGK odrzuca wniosek

- **Prawd.**: M — typowe powody: niekompletne dokumenty, rozpoczęcie prac przed decyzją, błędy formalne w uchwale
- **Wpływ**: H — Grant OZE przepada, realizacja bez dotacji znacznie osłabia business case
- **Mitygacja**: (1) Konsultacja wniosku z doświadczoną firmą (Kaisai, InEnergy, Solwis — specjalizują się w Grant OZE). (2) Sprawdzenie kompletności listy dokumentów (bgk.pl/produkty/grant-oze). (3) **Nie rozpoczynać żadnych prac przed decyzją BGK** — nawet zamówienia komponentów. (4) Poprawka wniosku po odrzuceniu — jeśli BGK daje feedback, złożyć ponownie w kolejnym naborze.

### R-B-4 — Sąsiedzi głosują przeciw uchwale

- **Prawd.**: M — 50%+1 głos jest wymagany, zawsze jest kilku przeciwników zmian
- **Wpływ**: H — uchwała nie przechodzi, projekt pada
- **Mitygacja**: (1) Wcześniejsze rozmowy z sąsiadami — odpowiedzi na obawy (hałas, zanieczyszczenie, wartość mieszkań). (2) Pokazanie konkretnych liczb oszczędności rocznej dla wspólnoty. (3) Prezentacja synergii z ppoż (ppoż i tak zadziała, PV dokłada korzyść). (4) Dobra wizualizacja — zrzut z 3D sceny dachowej pokazujący jak panele wyglądają z dołu (prawie niewidoczne).

### R-B-5 — Dach bloku wymaga remontu

- **Prawd.**: M — bloki z lat 70-80 mają dachy po 30-50 latach
- **Wpływ**: H — jeśli remont jest konieczny w perspektywie 5-10 lat, montaż PV teraz wymagałby demontażu
- **Mitygacja**: (1) Sprawdzić historię remontów dachu w dokumentacji wspólnoty. (2) Jeśli dach po 40+ latach bez remontu — **zsynchronizować projekty** (remont dachu + PV razem, oszczędność konstrukcji dachu PV). (3) Mocowania balastowe (niepenetrujące pokrycia) — panele demontowalne na 1-2 dni na czas naprawy lokalnej.

### R-B-6 — Magazyn energii w awarii / po gwarancji

- **Prawd.**: M — LiFePO4 ma gwarancję 10 lat, awarie EMS częstsze niż cel samego ogniwa
- **Wpływ**: M — koszt wymiany 20 kWh po 10 latach to ~30-45 k PLN (wtedy prawdopodobnie taniej)
- **Mitygacja**: (1) Serwis coroczny (obowiązek, 500-1 500 PLN). (2) Fundusz serwisowy — 5% budżetu magazynu odłożone na wymianę/naprawę. (3) Monitoring EMS — alert przy spadku pojemności >20%.

### R-B-7 — Modernizacja ppoż niezgodna z oczekiwaniami straży pożarnej

- **Prawd.**: L — firma ppoż wybrana prawidłowo nie powinna generować niezgodności
- **Wpływ**: H — nakaz straży pożarnej = dodatkowe koszty + opóźnienie odbioru
- **Mitygacja**: (1) Wybór rzeczoznawcy ppoż z certyfikatem MSWiA. (2) Konsultacja z lokalną komendą PSP (Bydgoszcz) przed projektem. (3) Odbiór etapowy — nie czekać do końca z weryfikacją.

---

## Ryzyka ogólne (O) — dla obu ścieżek

### R-O-1 — Pożar magazynu energii (Ścieżka B)

- **Prawd.**: L — LiFePO4 jest znacznie bezpieczniejszy niż klasyczny Li-ion, termiczny runaway mało prawdopodobny
- **Wpływ**: H — katastrofalne ryzyko wizerunkowe dla wspólnoty + poważne szkody
- **Mitygacja**: (1) Pomieszczenie EI60/REI60/EI30 (obowiązkowe od 01.2026). (2) Autonomiczna czujka dymu + gaśnica. (3) LiFePO4 (nie NCM/NCA). (4) Regularny serwis. (5) Ubezpieczenie OC wspólnoty rozszerzone.

### R-O-2 — Uszkodzenie instalacji podczas burzy / wichury

- **Prawd.**: L-M w horyzoncie 15 lat
- **Wpływ**: H dla A (uszkodzenie sąsiedniego balkonu), M dla B (uszkodzenie paneli na dachu)
- **Mitygacja**: (1) Mocowania z certyfikatem odporności wiatrowej. (2) Ubezpieczenie. (3) Inspekcja po każdej burzy wysokiej kategorii.

### R-O-3 — Zmiany regulacyjne (net-billing, dotacje, VAT)

- **Prawd.**: M — URE i ministerstwo klimatu zmieniają przepisy regularnie
- **Wpływ**: M — może zmienić ekonomikę o 10-20%
- **Mitygacja**: (1) Trzymać się net-billingu jako obowiązującego (ryzyko wzrostu premii, obniżki mniejsze). (2) Korzystać z Grant OZE gdy dostępne (ryzyko zniknięcia wyższe niż wzrost stawek). (3) Nie zakładać dużych zmian regulacyjnych w horyzoncie 2-3 lat.

### R-O-4 — Spadek cen energii (RCE)

- **Prawd.**: L-M — zależne od rynku gazu, OZE
- **Wpływ**: M — obniża wartość eksportu (mniej ważne dla wysokiej auto-konsumpcji)
- **Mitygacja**: Zoptymalizować projekt pod auto-konsumpcję (magazyn w wspólnotowej, dom w dzień dla indywidualnej).

### R-O-5 — Awaria inwertera / mikroinwertera po gwarancji

- **Prawd.**: M — typowy MTBF 10-15 lat dla klasy balkonowej
- **Wpływ**: M — koszt wymiany 300-800 PLN dla mikroinwertera, 2-5 k PLN dla inwertera stringowego wspólnoty
- **Mitygacja**: (1) Wybór produktu z dobrą gwarancją (Growatt, Hoymiles — 12 lat). (2) Rezerwa serwisowa w budżecie.

---

## Ryzyka horyzontowe (długoterminowe)

- **Rozwój technologii**: panele 2030 mogą być 30% wydajniejsze. Obecna inwestycja nie jest "na całe życie", tylko 15-20 lat. To OK.
- **Zmiany klimatu**: więcej gorących dni = wyższa produkcja PV, ale też wyższe temperatury paneli = niższa sprawność chwilowo. Netto neutralne.
- **Mobilność elektryczna**: ładowarki EV staną się standardem w blokach. Wspólnotowa PV + magazyn to infrastruktura dla ładowarek — **dodatkowa wartość** w perspektywie 5-10 lat.

---

## Monitoring ryzyk — kto i kiedy

- **Jakub (balkonowa)**: miesięczny przegląd produkcji + wizualny stan paneli wiosną
- **Zarząd wspólnoty (wspólnotowa)**: raport kwartalny, inspekcja roczna, serwis magazynu coroczny
- **Zarząd wspólnoty (ppoż)**: przegląd zgodnie z wymogami prawnymi (zazwyczaj rocznie + po każdej modernizacji)

Aktualizacja tej matryki po każdej fazie projektu — w `CONTINUITY.md` notka o nowych / zmienionych ryzykach.
