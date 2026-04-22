# DATA_SOURCES.md — Starting list of authoritative sources

Use these as the starting set for Faza 1 (research). Every source cited anywhere in the project must land in `research/ZRODLA.md` with access date, even if it comes from this file. This file is a seed, not a whitelist — expand it.

## Primary Polish regulatory sources

- **URE (Urząd Regulacji Energetyki)** — `www.ure.gov.pl`
  - Current energy tariffs, net-billing rules, prosument system status
  - Look for: "prosument", "net-billing", "taryfa G11", "taryfa G12w"

- **ENEA Operator** — `www.operator.enea.pl`
  - OSD for Bydgoszcz. Prosument notification procedure, two-way meter installation
  - Confirm this is correct OSD for the specific address (spółdzielnia vs wspólnota address ranges may vary)

- **Ministerstwo Klimatu i Środowiska** — `www.gov.pl/web/klimat`
  - OZE programme updates, Mój Prąd historical context (program may be closed)

- **PSE (Polskie Sieci Elektroenergetyczne)** — `www.pse.pl`
  - National grid context, wholesale price history if needed for billing model analysis

## Primary EU regulatory sources

- **PVGIS (Joint Research Centre, European Commission)** — `re.jrc.ec.europa.eu/pvg_tools/en/`
  - Authoritative annual yield estimates for any European location
  - See `PVGIS_RECIPE.md` for canonical call for Bydgoszcz

- **EU plug-in PV regulation context** — search `europa.eu` for current status of balcony PV plug-in rules (2024/2025/2026 updates possible)

## Polish retail / product sources

Do not assume these are exhaustive or current. Verify each product page and price on access date.

- **Allegro** — `allegro.pl` — search "fotowoltaika balkonowa", "mikrofalownik balkonowy", "panel 600W"
- **Leroy Merlin** — `leroymerlin.pl` — search "panel fotowoltaiczny"
- **Castorama** — `castorama.pl`
- **Morele.net** — `morele.net`
- **Oferteo / porównywarki** — cross-check pricing
- Brand direct sites — Growatt, Deye, Hoymiles microinverters; JA Solar, Longi, Canadian Solar panels — verify Polish distribution

## Polish community / opinion sources

- **Forum muratordom** — `forum.muratordom.pl` — long-form owner discussions
- **Elektroda** — `elektroda.pl` — technical questions, wiring, OSD procedure stories
- **r/fotowoltaika** (Reddit, Polish subreddit) — recent real-world reports

## German reference market (Balkonkraftwerk)

For price and product maturity benchmark only. Do not cite German prices as Polish.

- **Verbraucherzentrale** — `www.verbraucherzentrale.de` — German consumer protection, well-researched guides
- **Balkonkraftwerk-Guide sites** (various German blogs) — for product class and typical setups
- **Heise Online, c't** — German tech press, often has rigorous Balkonkraftwerk coverage

## Technical reference

- **IEO (Instytut Energetyki Odnawialnej)** — `ieo.pl` — Polish RE think-tank, annual reports
- **SBF POLSKA PV** — `stowarzyszeniepv.pl` — industry association
- **Rynek Elektryczny** — `www.rynekelektryczny.pl` — Polish energy market news

## Forbidden sources

- Do not cite affiliate-link-farm "best 10 balcony solar kits 2026" blog posts as authoritative pricing.
- Do not cite ChatGPT, Gemini, or any LLM output as a source.
- Do not cite social media posts without checking the poster's credibility and the date.

## Access-date discipline

Every citation: `YYYY-MM-DD` access date. If a page is behind a cookie wall or paywall and you used Wayback Machine, note that. If a PDF might disappear, snapshot it to Wayback Machine proactively.
