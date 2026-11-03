# Implementation Plan — Mobile Responsiveness Fixes

**Design source:** `02-design.md` (v2, all review findings addressed)  
**Files modified:** 4 CSS files  
**Files verified only (no change):** `AboutPage.css`, `ServicesPage.css`

---

- [ ] 1. **Fix 1 — `.why-choose-mobile-accent-wrap` wrap at ≤ 374 px**  
      Append `white-space: normal;` to `.why-choose-mobile-accent-wrap` inside the existing `@media (max-width: 374px)` block (lines 679–698) in `WhyChooseUsSection.css`. The block currently ends after `.why-choose-card-arrow-btn { align-self: flex-end; }`. Add the new rule set after that, still inside the closing `}` of the media query.  
      Files: `src/components/WhyChooseUsSection.css`  
      Verify: `npm run build` exits 0.

- [ ] 2. **Fix 3 — `.why-choose-filter-row` right padding**  
      Inside `@media (max-width: 1023px)` in `WhyChooseUsSection.css`, change the `padding` on `.why-choose-filter-row` (line ~431) from `2px 2px 6px` to `2px 1rem 6px 2px`. Do not alter any other property in the block.  
      Files: `src/components/WhyChooseUsSection.css`  
      Verify: `npm run build` exits 0. (Depends on item 1 being in a buildable state — these are in the same file.)

- [ ] 3. **Fix 2 — `.hero-title-highlight-box` wrap at ≤ 479 px**  
      In `globals.css`, insert a new `@media (max-width: 479px)` block immediately before the comment `/* Compact Mobile (320px – 374px) */` at line 1990. The block:  
      ```css
      /* Allow hero highlight text to wrap at 375px–479px */
      @media (max-width: 479px) {
        .hero-title-highlight-box {
          white-space: normal;
        }
      }
      ```  
      Do not remove or change the existing `@media (max-width: 374px)` rule for the same class (it stays, redundantly harmless).  
      Files: `src/app/globals.css`  
      Verify: `npm run build` exits 0.

- [ ] 4. **Fix 4 — `.cs-filter-row` right padding**  
      Inside `@media (max-width: 1023px)` in `CaseStudiesSection.css`, change the `padding` on `.cs-filter-row` (line ~715) from `2px 2px 6px` to `2px 1rem 6px 2px`. `overflow-x: auto` and `scrollbar-width: none` are already present in the same block — do not touch them.  
      Files: `src/components/CaseStudiesSection.css`  
      Verify: `npm run build` exits 0.

- [ ] 5. **Fix 5 — `.cs-mobile-title` two-line clamp**  
      Inside `@media (max-width: 1023px)` in `CaseStudiesSection.css`, append four declarations to the existing `.cs-mobile-title` rule (currently at line ~874 inside the media query, containing `font-size`, `font-weight`, `color`, `letter-spacing`, `line-height`, `margin`):  
      ```css
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      ```  
      The parent `.cs-mobile-title-col` already has `flex: 1; min-width: 0` — no outer change needed. A `- webkit-box-orient` lint warning is expected and non-fatal; only a non-zero build exit code is a failure.  
      Files: `src/components/CaseStudiesSection.css`  
      Verify: `npm run build` exits 0. (Depends on item 4 — same file.)

- [ ] 6. **Fix 6 — `.cta-mobile-services-grid` 2-column breakpoint widened to 480 px**  
      In `ProjectCtaSection.css`, edit the `@media (max-width: 374px)` block (line 1091):  
      **Step 6a:** Remove only the `.cta-mobile-services-grid { grid-template-columns: repeat(2, 1fr); gap: 8px; }` sub-rule from that block. Leave `.cta-mobile-btn-group`, `.cta-mobile-btn-primary, .cta-mobile-btn-secondary`, and `.cta-mobile-trust-label` exactly as they are.  
      **Step 6b:** Insert a new `@media (max-width: 480px)` block immediately before the (now-edited) `@media (max-width: 374px)` block:  
      ```css
      /* 2-column service grid at 375px–480px (was 374px only) */
      @media (max-width: 480px) {
        .cta-mobile-services-grid {
          grid-template-columns: repeat(2, 1fr);
          gap: 8px;
        }
      }
      ```  
      This places the 480px block before the 374px block, matching the project convention of narrowest breakpoints last. The 374px block retains no grid override, so there is no cascade conflict — the 480px rule is the sole source of the 2-column layout for all widths ≤ 480px.  
      Files: `src/components/ProjectCtaSection.css`  
      Verify: `npm run build` exits 0.

- [ ] 7. **Final build verification**  
      Run `npm run build` from the repo root. Confirm zero non-zero exit code. CSS vendor-prefix warnings (e.g., `-webkit-box-orient`) are expected and acceptable. A non-zero exit code means re-read all four modified files for syntax errors introduced by the edits.  
      Files: none  
      Verify: `npm run build` exits 0 with no new errors beyond expected vendor-prefix warnings.

---

## Digest

| File | Block changed | Test covering it | Verified today |
|------|--------------|-----------------|---------------|
| `src/components/WhyChooseUsSection.css` | (1) `@media (max-width: 374px)` block (line 679): append `.why-choose-mobile-accent-wrap { white-space: normal; }` · (2) `.why-choose-filter-row` padding inside `@media (max-width: 1023px)` (line ~431): `2px 2px 6px` → `2px 1rem 6px 2px` | Browser DevTools at 360px (Fix 1); scroll filter row at ≤1023px (Fix 3) | `npm run build` — passes today (base state) |
| `src/app/globals.css` | Insert new `@media (max-width: 479px)` block for `.hero-title-highlight-box` before the `/* Compact Mobile (320px – 374px) */` comment at line 1990 | Browser DevTools at 430px (hero title wraps) | `npm run build` — passes today |
| `src/components/CaseStudiesSection.css` | (1) `.cs-filter-row` padding inside `@media (max-width: 1023px)` (line ~715): `2px 2px 6px` → `2px 1rem 6px 2px` · (2) `.cs-mobile-title` inside `@media (max-width: 1023px)` (line ~874): append 4 clamp declarations | Scroll filter row; 320px card title shows 2-line ellipsis | `npm run build` — passes today |
| `src/components/ProjectCtaSection.css` | Remove `.cta-mobile-services-grid` sub-rule from `@media (max-width: 374px)` block (line 1091); insert new `@media (max-width: 480px)` block above it | Browser DevTools at 390px → 2 columns; at 520px → 4 columns | `npm run build` — passes today |
| `src/components/AboutPage.css` | **None** — `@media (max-width: 960px)` already stacks `.about-hero-grid` to `1fr` | N/A | Confirmed: line ~3016 |
| `src/components/ServicesPage.css` | **None** — `@media (max-width: 1024px)` already stacks `.sp-hero-grid, .sp-e2e-grid` to `1fr` | N/A | Confirmed: lines ~1265–1277 |

Build command: `npm run build`  
Test command: `npm run build` (CSS-only changes; no JS unit tests apply)  
All six fixes are integration-verified at the browser level; `npm run build` is the compilation-level gate.
