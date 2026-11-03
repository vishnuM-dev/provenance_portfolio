# Requirements — Mobile Responsiveness Fixes: ProvenanceTech Portfolio

**Source of truth:** `.agents/tasks/mobile-overflow-audit.md` (read-only audit, no code was modified)  
**Target scope:** Mobile viewports ≤ 768 px (primary: 320 px – 480 px)  
**Constraint:** No changes to desktop (≥ 769 px) or tablet layouts; no colour, typography, or structural redesign; no new libraries or dependencies.

---

## Summary

The read-only audit identified ten numbered recommendations and several supporting detailed findings across nine CSS files. This task is to implement every listed fix, verify the two "action needed" items (`.about-hero-grid` and `.sp-hero-grid` responsive rules), read the portions of `AboutPage.css` and `ServicesPage.css` that were truncated during the audit, and run `npm run build` to confirm the production build passes with zero errors. Desktop and tablet layouts must be unaffected by every change.

---

## Functional Requirements

### FR-1 — `.why-choose-mobile-accent-wrap` white-space override

**File:** `src/app/globals.css` (or `src/components/WhyChooseUsSection.css`, whichever declares the rule)  
At viewports ≤ 374 px, set `white-space: normal` on `.why-choose-mobile-accent-wrap`.  
The existing `white-space: nowrap` rule must remain untouched for viewports ≥ 375 px.  
**Rationale (audit §9):** At 320 px the 14-character word "ProvenanceTech?" at 32 px font overflows the ~171 px title column because it cannot wrap.

### FR-2 — `.hero-title-highlight-box` white-space override

**File:** `src/app/globals.css`  
At viewports ≤ 479 px, set `white-space: normal` on `.hero-title-highlight-box`.  
The existing `max-width: 374px` override already handles 320–374 px. The new rule closes the 375–479 px gap.  
The underline SVG uses `preserveAspectRatio="none"` and `width: 104%; left: -2%` and will scale correctly after wrapping.  
**Rationale (audit §1):** "Grow Your Business." at ~25.5 px font is 350–380 px wide inside a ~335 px hero column at 375 px.

### FR-3 — `.why-choose-filter-row` right padding

**File:** `src/components/WhyChooseUsSection.css`  
Change the padding declaration on `.why-choose-filter-row` so that the right side is `1rem` instead of `2px`.  
Suggested value: `padding: 2px 1rem 6px 2px;`  
All other padding values must be preserved.  
**Rationale (audit §10, Recommendation #5):** The 2 px right padding clips the last filter pill flush against the scroll container edge on all mobile widths.

### FR-4 — `.cs-filter-row` right padding

**File:** `src/components/CaseStudiesSection.css`  
Apply the identical fix as FR-3 to `.cs-filter-row`: right padding increased to `1rem`.  
**Rationale (audit §10, Recommendation #6):** Same clipping issue as `why-choose-filter-row`.

### FR-5 — `.cs-mobile-title` overflow truncation

**File:** `src/components/CaseStudiesSection.css`  
Add a two-line clamp to `.cs-mobile-title`:

```css
display: -webkit-box;
-webkit-line-clamp: 2;
-webkit-box-orient: vertical;
overflow: hidden;
```

An alternative of `overflow: hidden; text-overflow: ellipsis; white-space: nowrap;` (single-line) is acceptable only if the design context makes a single line appropriate; the audit recommends two lines.  
**Rationale (audit §8, Recommendation #7):** At 320 px the info-wrap column is ~134 px. A long title such as "Custom ERP System" (18 chars at 1.1 rem) would be silently clipped without any visual indicator to the user.

### FR-6 — `.cta-mobile-services-grid` 2-column breakpoint

**File:** `src/components/ProjectCtaSection.css`  
Move the `grid-template-columns: repeat(2, 1fr)` override for `.cta-mobile-services-grid` from its current `@media (max-width: 374px)` media query to `@media (max-width: 480px)`.  
The `repeat(4, 1fr)` default must continue to apply at widths > 480 px.  
**Rationale (audit §13, Recommendation #8):** At 375–480 px each cell in the 4-column grid is only ~69–83 px wide; icon labels like "Online Consultation" wrap to 3 cramped lines.

### FR-7 — `.about-hero-grid` single-column verification

**File:** `src/components/AboutPage.css`  
Verify that a `grid-template-columns: 1fr` override is present for `.about-hero-grid` at a breakpoint ≤ 767 px.  

**Finding from full file read:** `@media (max-width: 960px)` already sets `.about-hero-grid { grid-template-columns: 1fr; }`. This fires before any mobile viewport is reached. **No additional rule is required.**  
**Assumption:** The 960 px breakpoint is the intended collapse point and is correct. The audit's concern arose because the file was truncated; the rule does exist.

### FR-8 — `.sp-hero-grid` single-column verification

**File:** `src/components/ServicesPage.css`  
Verify that a `grid-template-columns: 1fr` override is present for `.sp-hero-grid` at a breakpoint ≤ 767 px.  

**Finding from full file read:** `@media (max-width: 1024px)` already sets `.sp-hero-grid { grid-template-columns: 1fr; }`. This fires before any mobile viewport is reached. **No additional rule is required.**  
**Assumption:** The 1024 px breakpoint is the intended collapse point and is correct.

### FR-9 — Additional findings from Detailed Findings not already in the top-10 list

The following items from the detailed findings section require no code changes based on the full file reads, but must be confirmed during implementation:

| Finding | File | Status |
|---------|------|--------|
| §2 — `.brand-text-block white-space: nowrap` at 320 px | `globals.css` | Audit notes "barely OK"; confirm layout does not collide at exactly 320 px. No fix required unless a collision is found. |
| §3 — `overflow-x: clip` on `html, body` breaking `position: sticky` in Safari ≤ 15 | `globals.css` | Audit rates as medium risk. Existing `overflow-x: clip` on `body` is the risk vector. No change required unless the Navbar sticky is confirmed broken in a target browser. Document as a known risk. |
| §14 — `.footer-contact-value white-space: nowrap` | `Footer.css` | Desktop footer only (hidden at < 1024 px). Mobile footer already has correct truncation. **No fix needed.** |
| §15 — PortfolioHero pills negative offset | `PortfolioHero.css` | Clipped by `overflow-x: clip` on the section. **No fix needed.** |
| §17 — `.about-val-card--growth { right: -2% }` | `AboutPage.css` | Clipped by `overflow-x: clip` on `about-hero-section`. **No fix needed.** |

### FR-10 — Build verification

After all CSS changes, run `npm run build` from the project root (`c:\Users\Lenovo\git\provenance_portfolio`) in non-interactive mode and confirm zero build errors. The build output must include no TypeScript or CSS compilation failures.

---

## Non-Functional Requirements

- **NFR-1 — Desktop/tablet layout integrity:** Every change must be scoped to a `@media (max-width: ...)` rule at ≤ 768 px (or lower). No base styles may be modified. Run a before/after visual check at 1280 px and 768 px to confirm no regression.
- **NFR-2 — No new libraries:** All fixes use plain CSS only.
- **NFR-3 — No `overflow-x: hidden` shortcuts:** Fixes address the root cause of each overflow. No new global overflow clipping may be introduced.
- **NFR-4 — Colour and animation preservation:** No colour values, animation keyframes, transitions, or decorative SVG elements may be altered.
- **NFR-5 — Specificity hygiene:** New rules must not use `!important` unless the existing declaration already uses it. Rules must be placed within appropriate existing media query blocks or appended in a clearly labelled mobile patch block.

---

## Acceptance Criteria

1. At 320 px, the text "ProvenanceTech?" in `.why-choose-mobile-accent-wrap` wraps to a second line without overflowing its parent column.
2. At 375 px and 430 px, the hero highlight text "Grow Your Business." wraps without overflowing the hero column width.
3. On all viewports 320–768 px, scrolling the Why Choose Us filter row to the end reveals the last filter pill with at least ~1 rem of visible space to its right before the container edge.
4. On all viewports 320–768 px, scrolling the Case Studies filter row to the end reveals the last filter pill with at least ~1 rem of visible space to its right before the container edge.
5. At 320 px, long case study card titles are clamped to two visible lines with an overflow indicator; no text bleeds outside the info-wrap column.
6. At 375 px and 430 px, the CTA mobile services grid renders as 2 columns (not 4), with labels readable without extreme wrapping.
7. At 320 px, the CTA mobile services grid renders as 2 columns (existing behaviour preserved).
8. At 960 px and below, `.about-hero-grid` renders as a single column (verified from full file read; no code change needed).
9. At 1024 px and below, `.sp-hero-grid` renders as a single column (verified from full file read; no code change needed).
10. `npm run build` completes with exit code 0 and no errors.
11. At 1280 px, no visible change to desktop layout exists on any page compared to the pre-fix state.
12. At 768 px (tablet), no visible change to tablet layout exists on any page compared to the pre-fix state.

---

## Out of Scope

- Redesigning any desktop or tablet layout.
- Changing the colour palette, typography scale, animation keyframes, or decorative SVG illustrations.
- Fixing the `overflow-x: clip` on `body` Safari sticky issue (FR-9 documents this as a known risk; fixing it requires browser testing that is out of scope for a CSS-only patch pipeline).
- Adding any new UI components, pages, or routes.
- Addressing the navbar brand-text collision at 320 px (audit §2 rates this as a risk, not a confirmed issue; no overflow was measured).
- Fixing the `WhatWeBuildSection.css` items (audit §4–§7 all confirmed as no-issue at target mobile viewports).
- Changes to `TechnologiesSection.css`, `ContactPage.css`, `BlogPage.css`, or any file the audit confirmed has no mobile overflow.
- Installing, updating, or removing any npm package.

---

## Assumptions

1. The `.why-choose-mobile-accent-wrap` rule with `white-space: nowrap` exists in `WhyChooseUsSection.css`; if it is duplicated in `globals.css`, the fix must be applied to whichever file takes precedence (or both, to be safe). Implementation should locate the declaration before writing the fix.
2. The existing `@media (max-width: 374px)` block for `.hero-title-highlight-box` in `globals.css` applies `white-space: normal`; the new fix adds a broader `max-width: 479px` override without removing the 374 px rule (the 374 px rule may be redundant afterward but is harmless).
3. The `.cta-mobile-services-grid` currently has exactly one `@media (max-width: 374px)` override for the 2-column layout; moving it to `max-width: 480px` means widths 375–480 px switch from 4-column to 2-column (a visible change on those viewports only, which is the intended improvement).
4. "No fix needed" conclusions for FR-7 and FR-8 are based on reading the full CSS files. If the implementation agent discovers the breakpoints behave differently in the browser, it should add an explicit `@media (max-width: 767px)` rule as the audit originally suggested.
