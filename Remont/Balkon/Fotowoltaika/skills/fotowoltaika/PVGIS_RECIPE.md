# PVGIS_RECIPE.md — Canonical PVGIS lookup for Bydgoszcz balcony PV

PVGIS is the JRC (European Commission) authoritative solar yield database. Use it instead of estimating from memory, sales brochures, or LLM priors.

## Target location

- **City**: Bydgoszcz, Poland
- **Approximate coordinates**: 53.1235°N, 18.0084°E
  - **Verify before use**. Bydgoszcz city center; for a more precise estimate for this specific balcony, ask Jakub for postcode or street, then look up coordinates via OpenStreetMap (do not guess).
- **Elevation**: ~60 m a.s.l. (PVGIS can auto-derive from SRTM; do not override unless necessary)

## Primary method: PVGIS web tool (interactive)

1. Go to `https://re.jrc.ec.europa.eu/pvg_tools/en/`
2. Enter coordinates.
3. Select "Grid-connected PV" tab.
4. Parameters:
   - PV technology: Crystalline silicon (assume monocrystalline for modern balcony kits — confirm from PRODUKTY.md once shortlist is fixed)
   - Installed peak PV power: 1 kWp (normalize, scale results later)
   - System loss: 14% (PVGIS default; justify in `research/PVGIS_RAW.md` if overridden)
   - Mounting position: Building-integrated (for balustrada-mounted) or Free-standing (for angled on a frame) — run both if unclear
   - Slope (tilt): vertical balustrade mounting ≈ 90° tilt. Angled-out frame ≈ 20-30° from vertical = 60-70° tilt from horizontal. **Run for 90° (vertical), 60° (moderate angle), and 30° (near-optimal) for comparison.**
   - Azimuth: 0° = south. Jakub's balcony orientation is `UNCONFIRMED` — must be determined before first calculation. Once known, run the single azimuth value; before it's known, run for -45° (SE), 0° (S), +45° (SW) as a sensitivity band.
5. Click "Visualize results".
6. Save the result panel as screenshot + copy the monthly table as CSV into `research/PVGIS_RAW.csv`.
7. Note access date at the top of the CSV.

## Programmatic method: PVGIS REST API

Endpoint: `https://re.jrc.ec.europa.eu/api/v5_2/PVcalc`

Example call (Bydgoszcz approx, 1 kWp, vertical south-facing):
```
https://re.jrc.ec.europa.eu/api/v5_2/PVcalc?lat=53.1235&lon=18.0084&peakpower=1&loss=14&angle=90&aspect=0&outputformat=json
```

Parameters:
- `lat`, `lon`: decimal degrees
- `peakpower`: kWp (use 1 for normalized output)
- `loss`: system loss % (default 14)
- `angle`: tilt from horizontal in degrees (90 = vertical)
- `aspect`: azimuth; 0 = south, -90 = east, 90 = west (PVGIS convention)
- `outputformat`: `json` or `csv`

Store the raw response in `research/PVGIS_RAW.json` with a header comment containing the URL, timestamp, and parameters used.

## What to extract

From the response, pull:
- `outputs.totals.fixed.E_y` — annual energy production in kWh per kWp
- `outputs.totals.fixed.E_m` — monthly energy production array
- `outputs.totals.fixed.H(i)_y` — annual in-plane irradiation
- `outputs.totals.fixed.SD_y` — standard deviation (inter-annual variability)

Scale to actual panel power:
```
annual_kWh = (E_y per kWp) × (panel_Wp / 1000)
```

Apply shading factor from calculator UI as a post-PVGIS multiplier:
```
annual_kWh_with_shading = annual_kWh × (1 - shading_factor)
```

Shading factor is user-entered and represents local obstructions not captured by the horizon (adjacent building, balustrada itself blocking part of panel, trees). Document this in `app/README.md` as an approximation.

## Fallback if PVGIS is down or unreachable

If PVGIS API is unreachable for >10 minutes, use this fallback table (built from public PVGIS runs for Polish cities; cross-check against one published source and cite in `research/ZRODLA.md` before using):

For Bydgoszcz region, 1 kWp, 14% loss, various tilt/azimuth:

| Tilt | Azimuth | Annual kWh/kWp | Notes |
|------|---------|----------------|-------|
| 30°  | 0° (S)  | ~1060          | Near-optimal, rooftop reference |
| 60°  | 0° (S)  | ~970           | Moderate angled mount |
| 90°  | 0° (S)  | ~780           | Fully vertical balustrada |
| 90°  | -45° (SE) | ~700         | Vertical SE-facing |
| 90°  | +45° (SW) | ~700         | Vertical SW-facing |
| 90°  | -90° (E) or +90° (W) | ~570 | Vertical E or W-facing |

**These fallback numbers must be replaced with actual PVGIS calls before any business case is written.** They are a temporary stand-in to keep the app functional if the API is down during development.

## Verification check

Sanity check: the calculator's annual production number for vertical south-facing 600W in Bydgoszcz should land around 450-500 kWh/year before shading. If your model gives 900 kWh or 200 kWh, something is wrong — do not proceed until resolved.
