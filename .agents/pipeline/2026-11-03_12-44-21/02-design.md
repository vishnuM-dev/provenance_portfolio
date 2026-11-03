# Technical Design — Mobile Responsiveness Fixes: ProvenanceTech Portfolio

**Based on:** `01-requirements.md` (FR-1 through FR-10)  
**Audit source:** `.agents/tasks/mobile-overflow-audit.md`  
**Revision:** v2 — addresses all findings from `03-design-review.md` and `design-review.json`

---

## Overview

Six CSS files require targeted edits confined to `@media (max-width: ...)` blocks at ≤ 480 px. Two files (AboutPage.css, ServicesPage.css) require verification only — both already contain single-column overrides for their hero grids at ≥ 960 px and ≥ 1024 px respectively, so no code changes are needed. The total change surface is small: six in-place property changes or block insertions, all scoped to mobile-only media queries. No base styles, animations, colours, or desktop/tablet layouts are touched. No new libraries. After applying all edits, `npm run build` confirms zero errors.

The technology stack is fixed: plain CSS only, in the existing project's component CSS files and `globals.css`. No CSS preprocessors, no PostCSS plugins beyond what already runs, no utility frameworks.

---

## Confirmed Current State

| FR | File | Class / Selector | Current rule | Current mobile override |
|----|------|-----------------|--------------|------------------------|
| FR-1 | `WhyChooseUsSection.css` | `.why-choose-mobile-accent-wrap` | `white-space: nowrap` inside `@media (max-width: 1023px)` | `@media (max-width: 374px)` block exists but contains only `.why-choose-mobile-card`, `.why-choose-card-media-box`, `.why-choose-card-content-box`, and `.why-choose-card-arrow-btn` — **no** accent-wrap override |
| FR-2 | `globals.css` | `.hero-title-highlight-box` | `white-space: nowrap` (base rule, line ~1194) | `@media (max-width: 374px)` sets `white-space: normal` — **no** 479px/480px rule |
| FR-3 | `WhyChooseUsSection.css` | `.why-choose-filter-row` | `padding: 2px 2px 6px` inside `@media (max-width: 1023px)` | `overflow-x: auto` and `scrollbar-width: none` already present in same block |
| FR-4 | `CaseStudiesSection.css` | `.cs-filter-row` | `padding: 2px 2px 6px` inside `@media (max-width: 1023px)` | `overflow-x: auto` and `scrollbar-width: none` already present in same block |
| FR-5 | `CaseStudiesSection.css` | `.cs-mobile-title` | `font-size: 1.1rem; font-weight: 800; color: #141518; letter-spacing: -0.02em; line-height: 1.2; margin: 0 0 3px 0` inside `@media (max-width: 1023px)` | No overflow/clamp properties present |
| FR-6 | `ProjectCtaSection.css` | `.cta-mobile-services-grid` | `grid-template-columns: repeat(4, 1fr)` inside `@media (max-width: 1023px)` | `@media (max-width: 374px)` sets `repeat(2, 1fr)`. That same 374px block also contains `.cta-mobile-btn-group`, `.cta-mobile-btn-primary/secondary`, and `.cta-mobile-trust-label` — **all three must be retained**. No 480px rule exists for this class. |
| FR-7 | `AboutPage.css` | `.about-hero-grid` | 2-column desktop grid | `@media (max-width: 960px)` already sets `grid-template-columns: 1fr` — **no additional rule needed** |
| FR-8 | `ServicesPage.css` | `.sp-hero-grid` | 2-column desktop grid | `@media (max-width: 1024px)` already sets `grid-template-columns: 1fr` (alongside `.sp-e2e-grid`) — **no additional rule needed** |

---

## Fix 1 — `.why-choose-mobile-accent-wrap` wrap at ≤ 374 px

**File:** `src/components/WhyChooseUsSection.css`  
**Target:** The existing `@media (max-width: 374px)` block at the bottom of the file (which currently overrides `.why-choose-mobile-card`, `.why-choose-card-media-box`, `.why-choose-card-content-box`, and `.why-choose-card-arrow-btn`).

Append this rule to that block:

```css
.why-choose-mobile-accent-wrap {
  white-space: normal;
}
```

This allows the "ProvenanceTech?" accent word to wrap at 320–374 px, where the title column is only ~171 px wide — too narrow for the 14-character word at 32 px font.

The `.why-choose-sparks-burst` burst SVG (positioned `top: -14px; right: -24px` relative to the accent wrap) is designed for a single inline line. It does not break layout when the text wraps — it remains positioned relative to the accent wrap container's top-right corner and the `overflow: visible` on the SVG means it does not clip. No hide is needed.

The `white-space: nowrap` base rule (inside `@media (max-width: 1023px)`) is not modified; the 374px override cleanly wins via cascade.

---

## Fix 2 — `.hero-title-highlight-box` wrap at ≤ 479 px

**File:** `src/app/globals.css`  
**Target:** Insert a new `@media (max-width: 479px)` block immediately before the comment `/* Compact Mobile (320px – 374px) */` (which introduces the existing 374px block near line 1990).

479 px is used (not 480 px) to avoid conflating this rule with the CTA grid breakpoint in Fix 6. The 1 px difference is visually imperceptible and keeps the two rules conceptually independent — an implementer reading the source sees that the highlight-box break and the services-grid break are unrelated features with independent thresholds.

```css
/* Allow hero highlight text to wrap at 375px–479px */
@media (max-width: 479px) {
  .hero-title-highlight-box {
    white-space: normal;
  }
}
```

The underline SVG (`.hero-title-underline-svg`) uses `preserveAspectRatio="none"` via its inline attributes and CSS `width: 104%; left: -2%`, so it scales correctly when the text wraps onto two lines. No SVG changes needed.

The existing `@media (max-width: 374px)` block already sets `white-space: normal` on `.hero-title-highlight-box`. After adding the 479px block, the 374px rule is redundant but harmless — do not remove it.

Prerequisite (confirmed): `globals.css` has no existing `max-width: 479px` block. The nearest existing blocks are at 480px (lines ~847, ~961, ~2509), none of which touch `.hero-title-highlight-box`.

---

## Fix 3 — `.why-choose-filter-row` right padding

**File:** `src/components/WhyChooseUsSection.css`  
**Target:** The `padding` declaration on `.why-choose-filter-row` inside `@media (max-width: 1023px)`.

Change:
```css
padding: 2px 2px 6px;
```
To:
```css
padding: 2px 1rem 6px 2px;
```

This adds ~16 px of scrollable space to the right of the last filter pill, giving it breathing room against the container edge.

Prerequisite (verified): `.why-choose-filter-row` already has `overflow-x: auto` and `scrollbar-width: none` in the same media query block. The right-padding increase extends the scrollable content area beyond the visible container edge, which is what makes the last pill reachable. Without `overflow-x: auto`, the padding alone would not help.

No other padding values change. The top (2px), bottom (6px), and left (2px) values are preserved exactly.

---

## Fix 4 — `.cs-filter-row` right padding

**File:** `src/components/CaseStudiesSection.css`  
**Target:** The `padding` declaration on `.cs-filter-row` inside `@media (max-width: 1023px)`.

Same change as Fix 3: `padding: 2px 2px 6px` → `padding: 2px 1rem 6px 2px`.

Prerequisite (verified): `.cs-filter-row` already has `overflow-x: auto` and `scrollbar-width: none` in the same media query block. Same mechanism as Fix 3.

---

## Fix 5 — `.cs-mobile-title` two-line clamp

**File:** `src/components/CaseStudiesSection.css`  
**Target:** The `.cs-mobile-title` rule inside `@media (max-width: 1023px)`.

Append these four declarations to the existing `.cs-mobile-title` rule:

```css
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
```

This shows at most two lines of the title and hides overflow with a browser-native ellipsis on the second line. Two lines (not one) matches the audit's recommendation and preserves readability of longer project names like "Custom ERP System".

The parent `.cs-mobile-title-col` already has `flex: 1; min-width: 0`, so there is no outer flex-overflow concern. The clamp only affects internal text display within the title element.

`-webkit-box-orient: vertical` is a legacy vendor prefix. The project's build pipeline (Next.js with built-in PostCSS/autoprefixer) may emit a CSS linting warning for this declaration. That warning is non-fatal — only a non-zero `npm run build` exit code constitutes a failure.

---

## Fix 6 — `.cta-mobile-services-grid` 2-column breakpoint widened to 480 px

**File:** `src/components/ProjectCtaSection.css`

The `@media (max-width: 374px)` block currently contains four rule sets:

1. `.cta-mobile-services-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }` — the grid override to move
2. `.cta-mobile-btn-group { flex-direction: column; align-items: stretch; }` — retain
3. `.cta-mobile-btn-primary, .cta-mobile-btn-secondary { max-width: 100%; width: 100%; }` — retain
4. `.cta-mobile-trust-label { font-size: 0.68rem; }` — retain

**Step 1:** Remove `grid-template-columns: repeat(2, 1fr)` and `gap: 8px` from the 374px block (or remove the entire `.cta-mobile-services-grid { }` sub-rule from that block). Leave the other three rule sets in the 374px block exactly as they are.

**Step 2:** Insert a new `@media (max-width: 480px)` block before the existing `@media (max-width: 374px)` block:

```css
/* 2-column service grid at 375px–480px (was 374px only) */
@media (max-width: 480px) {
  .cta-mobile-services-grid {
    grid-template-columns: repeat(2, 1fr);
    gap: 8px;
  }
}
```

Place the 480px block before the 374px block to follow the project convention of narrowest breakpoints last. After removing the grid override from the 374px block, no cascade conflict exists for the grid property — the 480px rule is the sole source of the 2-column layout for all widths ≤ 480px. The `repeat(4, 1fr)` default (inside `@media (max-width: 1023px)`) applies at 481–1023px, which is the correct behaviour.

---

## Fix 7 — `.about-hero-grid` verification (no code change)

**File:** `src/components/AboutPage.css`  
`@media (max-width: 960px)` sets `.about-hero-grid { grid-template-columns: 1fr; }` — confirmed at line ~3016. This breakpoint fires before any mobile viewport is reached (320–768px all trigger it). **No additional rule is required.**

---

## Fix 8 — `.sp-hero-grid` verification (no code change)

**File:** `src/components/ServicesPage.css`  
`@media (max-width: 1024px)` sets `.sp-hero-grid, .sp-e2e-grid { grid-template-columns: 1fr; }` — confirmed at lines ~1265–1277. This breakpoint fires before any mobile viewport is reached. **No additional rule is required.**

---

## Error Handling

| Operation | Failure condition | Recovery / outcome |
|-----------|------------------|--------------------|
| In-place property edit (Fixes 1–5) | Typo in class name or property value | `npm run build` still passes (CSS syntax error would cause a build failure; a wrong class name would silently not apply) — verify in browser at 320px |
| Block removal + insertion (Fix 6) | Grid override accidentally left in 374px block | At 374px the grid receives `repeat(2, 1fr)` from two rules — identical value, no visual regression. However the 374px block would be inconsistent; verify during review |
| Build verification | Non-zero exit code | All six CSS files must be re-read to find any syntax error introduced by the edit. Use the exact code snippets in this design to avoid typos |
| CSS vendor-prefix warnings | `-webkit-box-orient` lint warning (Fix 5) | Non-fatal. Only a non-zero exit code is a build failure. CSS vendor-prefix warnings are expected and acceptable — the `display: -webkit-box` / `-webkit-line-clamp` pattern is widely supported and used throughout the industry |

Input validation: all changes are CSS-only with no runtime inputs. No validation rules apply.

---

## Edge Cases

1. **320px exactly:** At 320px, the `@media (max-width: 374px)` block fires and sets `white-space: normal` on `.why-choose-mobile-accent-wrap` (Fix 1) and on `.hero-title-highlight-box` (via the existing rule, redundantly). Both fixes operate correctly at 320px.

2. **375px–479px for the hero title:** Fix 2 covers this gap. The `@media (max-width: 374px)` rule was already there for ≤374px; Fix 2 extends coverage to 479px.

3. **480px exactly for the services grid:** The `@media (max-width: 480px)` block fires (inclusive). At 481px the 4-column grid applies. This is the intended boundary.

4. **Filter row with no overflow pills:** At viewports where all filter pills fit without scrolling, the right padding adds ~16px of visual whitespace after the last pill. This is visually harmless (the pills are left-aligned, not justified).

5. **cs-mobile-title with short text (e.g., "Portfolio" — 9 chars):** The 2-line clamp has no visible effect; single-line text renders normally.

6. **Landscape orientation at 768px:** All fixes use `max-width` breakpoints, so landscape-orientation screens at exactly 768px wide receive the mobile treatment. This is consistent with the project's existing pattern (all other mobile overrides use `max-width: 1023px` or narrower).

---

## Files to Modify

| File | Change |
|------|--------|
| `src/components/WhyChooseUsSection.css` | Append `white-space: normal` to `.why-choose-mobile-accent-wrap` in the `@media (max-width: 374px)` block; change padding on `.why-choose-filter-row` |
| `src/app/globals.css` | Insert new `@media (max-width: 479px)` block for `.hero-title-highlight-box` |
| `src/components/CaseStudiesSection.css` | Change padding on `.cs-filter-row`; append clamp to `.cs-mobile-title` |
| `src/components/ProjectCtaSection.css` | Remove grid override from `@media (max-width: 374px)` block; insert new `@media (max-width: 480px)` block above it |
| `src/components/AboutPage.css` | None — existing `@media (max-width: 960px)` rule is sufficient |
| `src/components/ServicesPage.css` | None — existing `@media (max-width: 1024px)` rule is sufficient |

---

## Testability

Each fix can be unit-tested by resizing the browser DevTools viewport:

- **Fix 1:** Resize to 360px → "ProvenanceTech?" wraps to a second line in the Why Choose section hero
- **Fix 2:** Resize to 430px → "Grow Your Business." wraps in the hero title
- **Fix 3:** Scroll the Why Choose filter row to the end → last pill has ~1rem gap before the container edge
- **Fix 4:** Scroll the Case Studies filter row to the end → last pill has ~1rem gap
- **Fix 5:** At 320px, a card with a long title shows exactly 2 lines with ellipsis
- **Fix 6:** At 390px → services grid is 2 columns; at 520px → 4 columns

All fixes are integration-testable at a browser level only (no JS unit tests needed — these are pure CSS layout rules). The production build (`npm run build`) acts as the compilation-level check.

---

## Responses to Design Review Findings

| Finding | Resolution |
|---------|-----------|
| **#1 (design-review.json) / #1 (03-design-review.md) [MEDIUM] — FR-2 479px vs 480px not justified** | **Addressed.** Fix 2 now includes an explicit sentence: "479 px is used (not 480 px) to avoid conflating this rule with the CTA grid breakpoint in Fix 6; the 1 px difference is visually imperceptible and keeps the two rules conceptually independent." |
| **#2 (design-review.json) / #2 (03-design-review.md) [HIGH] — FR-6 cascade ordering rationale self-contradictory** | **Addressed.** Fix 6 now states: "Place the 480px block before the 374px block to follow the project convention of narrowest breakpoints last. After removing the grid override from the 374px block, no cascade conflict exists for the grid property — the 480px rule is the sole source of the 2-column layout for all widths ≤ 480px." The incorrect prior reasoning ("so the 374px block can still override other things without accidentally re-introducing the 4-column grid") has been removed. |
| **#3 (design-review.json) / #3 (03-design-review.md) [MEDIUM] — FR-6 Confirmed Current State table omits 374px block contents** | **Addressed.** The Confirmed Current State table now explicitly lists all four rule sets in the `@media (max-width: 374px)` block of ProjectCtaSection.css, with a note that only the grid override is removed and the other three must be retained. |
| **#4 (design-review.json) / #4 (03-design-review.md) [MEDIUM] — FR-3/FR-4 do not confirm overflow-x: auto prerequisite** | **Addressed.** Both Fix 3 and Fix 4 now include a "Prerequisite (verified)" paragraph confirming `overflow-x: auto` and `scrollbar-width: none` are already present, and explaining why the padding fix depends on the scroll container being established. |
| **#5 (design-review.json) / #5 (03-design-review.md) [NIT] — FR-2 insertion anchor not named** | **Addressed.** Fix 2 now states: "Insert a new block immediately before the comment `/* Compact Mobile (320px – 374px) */`." |
| **#6 (design-review.json) / #6 (03-design-review.md) [NIT] — FR-1 374px block contents incompletely described** | **Addressed.** Fix 1 now names all four rule sets in the 374px block explicitly. |
| **#7 (design-review.json) / #7 (03-design-review.md) [NIT] — Build verification missing vendor-prefix warning treatment** | **Addressed.** The Error Handling table now explicitly states: "CSS vendor-prefix warnings (e.g., `-webkit-box-orient`) are expected and non-fatal. Only a non-zero exit code constitutes a failure." |
