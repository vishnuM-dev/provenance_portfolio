# Design Review — Mobile Responsiveness Fixes: ProvenanceTech Portfolio

**Design under review:** `02-design.md` (v2 — revision of prior review)  
**Requirements:** `01-requirements.md`  
**Reviewer pass:** fresh read + source verification against `c:\Users\Lenovo\git\provenance_portfolio`

---

## Findings

### 1. [NIT] Fix 1 — sparks-burst "overflow: visible" claim is imprecise

**Location:** Fix 1, paragraph beginning "The `.why-choose-sparks-burst` burst SVG…"

**Problem:** The design states "the `overflow: visible` on the SVG means it does not clip." Neither `.why-choose-sparks-burst` nor its container `.why-choose-mobile-accent-wrap` has an explicit `overflow: visible` declaration (verified in `WhyChooseUsSection.css`). The burst is visible because no ancestor sets `overflow: hidden` — not because of an explicit `overflow: visible` rule. The distinction matters if a future maintainer adds `overflow: hidden` to the accent wrap and expects the sparks to still show.

**Concrete fix:** Replace the sentence with:  
> "The `.why-choose-sparks-burst` SVG will remain visible because no ancestor of `.why-choose-mobile-accent-wrap` sets `overflow: hidden`. No overflow rule change is needed."

---

### 2. [NIT] Fix 5 — clamp added only to the 1023px rule; the 374px override is not addressed

**Location:** Fix 5, "Target" sentence.

**Problem:** `.cs-mobile-title` has a second rule inside `@media (max-width: 374px)` that overrides only `font-size: 1.05rem`. The design correctly adds the clamp to the 1023px rule (which cascades down to all narrower widths including ≤ 374px). However, an implementer reading only "the `.cs-mobile-title` rule inside `@media (max-width: 1023px)`" may be confused when they see a second `.cs-mobile-title` rule in the same file and wonder whether it also needs the clamp treatment.

**Concrete fix:** Add a note:  
> "There is also a `.cs-mobile-title { font-size: 1.05rem; }` rule inside the 374px block. Do not add the clamp there; the 1023px rule already establishes the clamp for all widths ≤ 1023px, and the 374px rule only overrides font-size, which is unrelated."

---

### 3. [NIT] Fix 2 — underline SVG wrapping behavior is unspecified for 375–479px

**Location:** Fix 2, paragraph beginning "The underline SVG…"

**Problem:** The design states the underline SVG "scales correctly when the text wraps onto two lines." With `preserveAspectRatio="none"` and `width: 104%; left: -2%`, the SVG is positioned relative to the `.hero-title-highlight-box` container. When the text wraps (the highlight phrase splits across two lines), the inline-block container's width collapses to the width of the widest wrapped line, not the full unwrapped phrase. The underline SVG then spans only that narrower width — which is correct CSS behavior and visually acceptable — but "scales correctly" overstates the case; it actually draws under only part of the phrase when wrapped. The fix itself is still correct (the SVG does not cause overflow), but the explanation is misleading.

**Concrete fix:** Replace "so it scales correctly when the text wraps onto two lines" with:  
> "When the text wraps, `.hero-title-highlight-box` (an inline-block) narrows to the widest wrapped line. The SVG therefore draws under only that portion of the phrase — visually acceptable and consistent with the requirement to eliminate overflow."

---

## Verified Assumptions

| Assumption | Verified |
|------------|---------|
| `.why-choose-mobile-accent-wrap { white-space: nowrap }` is inside `@media (max-width: 1023px)` in `WhyChooseUsSection.css` | ✅ Confirmed at line ~357 |
| The `@media (max-width: 374px)` block in `WhyChooseUsSection.css` contains `.why-choose-mobile-card`, `.why-choose-card-media-box`, `.why-choose-card-content-box`, and `.why-choose-card-arrow-btn` — and no accent-wrap override | ✅ Confirmed at lines ~679–699 |
| `globals.css` has `white-space: nowrap` on `.hero-title-highlight-box` as a base rule (~line 1194) | ✅ Confirmed at line ~1198 |
| The `@media (max-width: 374px)` block in `globals.css` sets `white-space: normal` on `.hero-title-highlight-box` | ✅ Confirmed at line ~2008 |
| No `@media (max-width: 479px)` block exists in `globals.css` | ✅ Confirmed — no match |
| The comment `/* Compact Mobile (320px – 374px) */` exists immediately before the 374px block in `globals.css` (insertion anchor for Fix 2) | ✅ Confirmed at line ~1989 |
| `.why-choose-filter-row` inside `@media (max-width: 1023px)` has `padding: 2px 2px 6px`, `overflow-x: auto`, and `scrollbar-width: none` | ✅ Confirmed at lines ~424–436 |
| `.cs-filter-row` inside `@media (max-width: 1023px)` has `padding: 2px 2px 6px`, `overflow-x: auto`, and `scrollbar-width: none` | ✅ Confirmed at lines ~704–715 |
| `.cs-mobile-title` inside `@media (max-width: 1023px)` has only the six typography declarations listed; no `overflow`, `display`, or clamp properties | ✅ Confirmed at lines ~874–881 |
| `.cs-mobile-title-col` has `flex: 1; min-width: 0` | ✅ Confirmed at lines ~869–872 |
| `ProjectCtaSection.css` `@media (max-width: 374px)` block contains exactly four rule sets as listed (services-grid, btn-group, btn-primary/secondary, trust-label) | ✅ Confirmed at lines ~1091–1112 |
| No `@media (max-width: 480px)` block exists in `ProjectCtaSection.css` | ✅ Confirmed — only 1023px and 374px blocks present |
| `@media (max-width: 960px)` in `AboutPage.css` sets `.about-hero-grid { grid-template-columns: 1fr }` | ✅ Confirmed at lines ~3016–3018 |
| `@media (max-width: 1024px)` in `ServicesPage.css` sets `.sp-hero-grid { grid-template-columns: 1fr }` | ✅ Confirmed at lines ~1274–1277 (inside the 1024px block) |
| `hero-title-underline-svg` has `preserveAspectRatio="none"` (inline SVG attribute) | ✅ Confirmed in `HeroInteractiveTitle.jsx` line ~110 |
| `hero-title-underline-svg` CSS has `width: 104%; left: -2%` | ✅ Confirmed in `globals.css` lines ~1203–1205 |
| `.why-choose-sparks-burst` is positioned `top: -14px; right: -24px` | ✅ Confirmed at lines ~367–369 in `WhyChooseUsSection.css` |

---

## Unverified / Wrong Assumptions

| Claim | Verdict |
|-------|---------|
| `.why-choose-sparks-burst` has `overflow: visible` that prevents clipping | ❌ Wrong — no explicit `overflow: visible` is set on the burst element or its container. The element shows because no ancestor sets `overflow: hidden`, not due to an explicit `overflow: visible` rule. Functionally harmless, but the justification in the design is incorrect. (Covered by Finding #1.) |

---

## Verdict

**Findings by severity:**
- HIGH: 0  
- MEDIUM: 0  
- NIT: 3

**VERDICT: APPROVED**

Zero HIGH or MEDIUM findings. All three NITs are documentation/comment precision issues that do not affect implementation correctness or introduce risk. The design is accurate about all structural claims, cascade behavior, file locations, line references, and fix mechanics. Safe to proceed to implementation.
