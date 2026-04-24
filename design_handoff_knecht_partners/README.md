# Handoff: Knecht & Partners AB – Webbplats

## Overview
Detta är en hifi-design för Josef Knechts konsultwebbplats. Sidan presenterar hans tjänster inom lönehantering, HR och AI-automatisering. Den innehåller en hero med roterande 3D-glaskub, profilsektion, processbeskrivning, projektsektion och kontaktsektion.

## About the Design Files
Filerna i detta paket är **designreferenser skapade i HTML** — prototyper som visar avsedd look och beteende, inte produktionskod att kopiera direkt. Uppgiften är att **återskapa dessa HTML-designs i den befintliga kodbasen** (Next.js / React / Tailwind CSS) med etablerade mönster och bibliotek.

Den befintliga kodbasen är ett **Next.js-projekt** med:
- Tailwind CSS för styling
- Komponentstruktur i `components/sections/` och `components/ui/`
- Typsnitt: DM Serif Display (serif) + Inter (sans)
- Accentfärg: `#2EC4B6` (teal)

## Fidelity
**High-fidelity** — Pixel-perfect mockup med slutgiltiga färger, typografi, mellanrum och interaktioner. Återskapa UI:t pixel-perfekt med kodbas­ens befintliga bibliotek och mönster.

---

## Screens / Views

### 1. Navbar
- Fast position, transparent → bakgrund `rgba(11,17,32,0.85)` + backdrop-blur vid scroll
- Logo: "K"-ikon (34×34px, teal border) + "Knecht & Partners" i DM Serif
- Navlänkar: Om mig, Process, Projekt, Kontakt — aktiv länk i teal
- Ingen CTA-knapp i navbaren

### 2. Hero
- Full viewport-höjd, 2-kolumns grid (1fr 1fr), gap 4rem
- **Vänster kolumn:**
  - Label: "KNECHT & PARTNERS AB" — 0.75rem, teal, letter-spacing 0.14em
  - H1: "Lön, HR" + kursivt "& AI." — DM Serif, clamp(3rem, 5vw, 5rem), vit
  - Brödtext: 1.1rem, rgba(255,255,255,0.45), max-width 420px
  - CTA-knapp: "Kontakta mig →" — teal bakgrund, mörk text, pill-shape, länk till LinkedIn
  - Stats-rad: 3 st — `9` (Års erfarenhet), `2` (Aktiva projekt), `IT AI HR` (Unikt perspektiv)
- **Höger kolumn:**
  - Roterande 3D glasskub (CSS transform-style: preserve-3d)
  - Kuben snurrar automatiskt, sakta (0.08°/frame), utan musparallax
  - Flytande bob-animation (translateY 0→-14px, 7s loop)
  - Kubens 6 sidor visar ikoner: Lön, HR, AI, Optimering, Analys, Tillväxt, Automatisering, Säkerhet
  - Toppsida visar "K" + "Knecht & Partners"

### 3. Profilsektion (`#profile`)
- 2-kolumns grid (1fr 1.5fr), gap 4rem
- **Vänster:** Foto av Josef (aspect-ratio 4/5, border-radius 16px), badge längst ned ("Josef Knecht / Lön & HR-konsult") med blinkande teal-dot
- **Höger:**
  - Label "VEM ÄR JAG?", H2 "Josef Knecht"
  - 2 stycken brödtext + citationsruta (vänster teal-border)
  - Stats: `9` Års erfarenhet · `Lön HR` IT-Bakgrund · `AI` Fokusområde

### 4. Processsektion (`#process`)
- Label "SÅ JOBBAR JAG", H2 "Ett metodiskt helhetsgrepp"
- 2-kolumns grid (1fr 1fr)
- **Vänster:** 5 numrerade steg (01–05) i border-top lista
  1. Du berättar
  2. Analys
  3. Samarbete och dialog
  4. Tydliga resultat
  5. Uppföljning
- **Höger:** SVG-illustration med vertikal flow-linje, animerad punkt som rör sig nedåt, 4 cirklar med ikoner (förstoringsglas, dialogrutor, måltavla, bock) + etiketter

### 5. Projektsektion (`#projects`)
- Centrerad rubrik + 2-kolumns grid med projektkort
- **Kort 1 — puckhr.se:** HR-plattform med AI-integration. Taggar: Arbetsrätt, HR-stöd, AI-plattform. Länk: https://puckhr.se
- **Kort 2 — Idrottsservice Västerbotten AB:** Optimera arbetsflöden vid pensionsavgång, övergång från Excel till ERP-systemet Blikk. Taggar: Processoptimering, ERP / Blikk, Kunskapsöverföring
- Hover: translateY(-4px), teal border-glow, gradient overlay

### 6. Kontaktsektion (`#contact`)
- Centrerat glasskort (max-width 700px, padding 5rem 4rem, border-radius 28px)
- H2 "Kontakta mig"
- Klickbara kontaktrader:
  - 📞 `+46 76 138 58 58` → `tel:`-länk
  - 📧 `josef.knecht@knechtpartners.se` → `mailto:`-länk
- LinkedIn-knapp (full bredd, teal, border-radius 12px)

### 7. Footer
- Navlänkar: Om mig, Process, Projekt, Kontakt
- "K"-logotyp + "© Knecht & Partners AB. 2025"
- Org.nr: 559525-8236 · Alla rättigheter förbehållna

---

## Interactions & Behavior

| Element | Beteende |
|---|---|
| Glaskub | Roterar kontinuerligt rotateY ~0.08°/frame, rotateX -20deg, ingen musparallax |
| Kubens position | Bob upp/ner: translateY 0→-14px, 7s ease-in-out infinite |
| Scroll reveal | `.reveal` element: opacity 0→1 + translateY 30px→0, 0.75s, IntersectionObserver threshold 0.12 |
| Navbar | Transparent → frosted glass vid scrollY > 60px |
| Aktiv navlänk | Teal färg vid sektion i vy (IntersectionObserver threshold 0.4) |
| Projektkort hover | translateY(-4px), box-shadow, border-color rgba(46,196,182,0.3) |
| Profilfoto hover | scale(1.04) på bilden, teal glow bakom |
| Processrad hover | padding-left 0.5rem, text ljusare |
| Hero-animation | label → H1 → text → knapp → stats, slideUp sekventiellt med delays |

---

## Design Tokens

### Färger
| Token | Värde |
|---|---|
| `--teal` | `#2EC4B6` |
| `--teal-alt` | `#4FD1C5` |
| `--dark` | `#0B1120` |
| `--dark2` | `#0F1A2E` |
| Bakgrund | `linear-gradient(165deg, #0B1120 0%, #0F1A2E 40%, #0B1120 100%)` |
| Brödtext | `rgba(255,255,255,0.65)` |
| Sekundär text | `rgba(255,255,255,0.45)` |
| Divider | `rgba(255,255,255,0.08)` |
| Kortbakgrund | `rgba(255,255,255,0.02)` |
| Kortborder | `rgba(255,255,255,0.08)` |

### Typografi
| Roll | Familj | Storlek | Vikt |
|---|---|---|---|
| H1 Hero | DM Serif Display | clamp(3rem, 5vw, 5rem) | 400 |
| H2 | DM Serif Display | clamp(2rem, 3.5vw, 3.75rem) | 400 |
| Label | Inter | 0.72–0.75rem | 600, uppercase, letter-spacing 0.14em |
| Brödtext | Inter | 1rem–1.1rem | 400 |
| Knapp | Inter | 0.9rem | 600 |

### Spacing
- Sektionspadding: `5rem 2rem`
- Max-bredd innehåll: `1200px`
- Grid gap (hero): `4rem`
- Divider margin-bottom: `4rem`

### Border radius
- Knappar (pill): `999px`
- Kort: `20px`
- Kontaktruta: `28px`
- Bilder: `16px`
- Stat-boxar: `12px`

---

## Assets
- `assets/josef.jpg` — Profilfoto Josef Knecht (finns i handoff-mappen)
- Alla ikoner är inline SVG (stroke-based, 1.5px stroke-width)
- Inga externa bildresurser förutom Google Fonts

## Files
- `Knecht & Partners AB.html` — Komplett hifi HTML-prototyp med all CSS och JS inline
- `assets/josef.jpg` — Profilfoto
