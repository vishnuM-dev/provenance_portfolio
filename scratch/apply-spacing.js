import fs from 'fs';
import path from 'path';

// Helper to replace text in a file
function updateFile(relPath, transformFn) {
  const fullPath = path.resolve(relPath);
  const content = fs.readFileSync(fullPath, 'utf8');
  const updated = transformFn(content);
  if (content === updated) {
    console.warn(`[NO CHANGE] ${relPath}`);
  } else {
    fs.writeFileSync(fullPath, updated, 'utf8');
    console.log(`[UPDATED] ${relPath}`);
  }
}

// 1. src/app/page.js
updateFile('src/app/page.js', (c) => {
  let s = c;
  // Reduce flex gap from 4.5rem to 2.25rem
  s = s.replace(
    "display: 'flex', flexDirection: 'column', gap: '4.5rem'",
    "display: 'flex', flexDirection: 'column', gap: '2.25rem'"
  );
  // Reduce Why Choose Us padding & header margin
  s = s.replace(
    "<div style={{ padding: '1.25rem 0' }}>\n          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>",
    "<div style={{ padding: '0.25rem 0' }}>\n          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 1.5rem' }}>"
  );
  // In case of CRLF
  s = s.replace(
    "<div style={{ padding: '1.25rem 0' }}>\r\n          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 3rem' }}>",
    "<div style={{ padding: '0.25rem 0' }}>\r\n          <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 1.5rem' }}>"
  );
  // Reduce 5-Step Process header margin
  s = s.replace(
    "margin: '0 auto 3rem'",
    "margin: '0 auto 1.5rem'"
  );
  return s;
});

// 2. src/components/WhatWeBuildSection.jsx
updateFile('src/components/WhatWeBuildSection.jsx', (c) => {
  return c.replace(
    "style={{ padding: '0.75rem 0 3rem' }}",
    "style={{ padding: '0.5rem 0 1rem' }}"
  );
});

// 3. src/components/WhatWeBuildSection.css
updateFile('src/components/WhatWeBuildSection.css', (c) => {
  let s = c;
  s = s.replace(
    ".wwb-journey-container {\n  position: relative;\n  width: 100%;\n  padding: 3.5rem 0 2rem;",
    ".wwb-journey-container {\n  position: relative;\n  width: 100%;\n  padding: 1rem 0 1rem;"
  );
  s = s.replace(
    ".wwb-journey-container {\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 3.5rem 0 2rem;",
    ".wwb-journey-container {\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 1rem 0 1rem;"
  );
  s = s.replace(
    ".wwb-journey-container {\n    padding: 2rem 0 1rem;",
    ".wwb-journey-container {\n    padding: 1rem 0 0.75rem;"
  );
  s = s.replace(
    ".wwb-journey-container {\r\n    padding: 2rem 0 1rem;",
    ".wwb-journey-container {\r\n    padding: 1rem 0 0.75rem;"
  );
  return s;
});

// 4. src/components/CaseStudiesSection.css
updateFile('src/components/CaseStudiesSection.css', (c) => {
  let s = c;
  s = s.replace(
    ".cs-section {\n  padding: 2.75rem 0 3.25rem;",
    ".cs-section {\n  padding: 1.25rem 0 1.5rem;"
  );
  s = s.replace(
    ".cs-section {\r\n  padding: 2.75rem 0 3.25rem;",
    ".cs-section {\r\n  padding: 1.25rem 0 1.5rem;"
  );
  s = s.replace(
    ".cs-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 2rem;",
    ".cs-header {\n  display: flex;\n  justify-content: space-between;\n  align-items: flex-end;\n  margin-bottom: 1.5rem;"
  );
  s = s.replace(
    ".cs-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  margin-bottom: 2rem;",
    ".cs-header {\r\n  display: flex;\r\n  justify-content: space-between;\r\n  align-items: flex-end;\r\n  margin-bottom: 1.5rem;"
  );
  return s;
});

// 5. src/components/TechnologiesSection.css
updateFile('src/components/TechnologiesSection.css', (c) => {
  let s = c;
  s = s.replace(
    ".tech-showcase-section {\n  position: relative;\n  width: 100%;\n  padding: 2.5rem 0 3.5rem;",
    ".tech-showcase-section {\n  position: relative;\n  width: 100%;\n  padding: 1.25rem 0 1.5rem;"
  );
  s = s.replace(
    ".tech-showcase-section {\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 2.5rem 0 3.5rem;",
    ".tech-showcase-section {\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 1.25rem 0 1.5rem;"
  );
  s = s.replace(
    ".tech-showcase-header {\n  text-align: center;\n  max-width: 1040px;\n  margin: 0 auto 2.25rem;",
    ".tech-showcase-header {\n  text-align: center;\n  max-width: 1040px;\n  margin: 0 auto 1.5rem;"
  );
  s = s.replace(
    ".tech-showcase-header {\r\n  text-align: center;\r\n  max-width: 1040px;\r\n  margin: 0 auto 2.25rem;",
    ".tech-showcase-header {\r\n  text-align: center;\r\n  max-width: 1040px;\r\n  margin: 0 auto 1.5rem;"
  );
  return s;
});

// 6. src/components/ProjectCtaSection.css
updateFile('src/components/ProjectCtaSection.css', (c) => {
  let s = c;
  s = s.replace(
    ".cta-project-section {\n  position: relative;\n  width: 100%;\n  padding: 1.5rem 0 2rem;",
    ".cta-project-section {\n  position: relative;\n  width: 100%;\n  padding: 0.75rem 0 1.25rem;"
  );
  s = s.replace(
    ".cta-project-section {\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 1.5rem 0 2rem;",
    ".cta-project-section {\r\n  position: relative;\r\n  width: 100%;\r\n  padding: 0.75rem 0 1.25rem;"
  );
  s = s.replace(
    "margin: 0 auto 2.25rem;\n  width: 100%;",
    "margin: 0 auto 1.5rem;\n  width: 100%;"
  );
  s = s.replace(
    "margin: 0 auto 2.25rem;\r\n  width: 100%;",
    "margin: 0 auto 1.5rem;\r\n  width: 100%;"
  );
  return s;
});

// 7. src/components/AboutPage.css
updateFile('src/components/AboutPage.css', (c) => {
  let s = c;
  s = s.replace(
    "padding-bottom: 3rem;",
    "padding-bottom: 1.5rem;"
  );
  s = s.replace(
    ".about-hero-section {\n  position: relative;\n  padding: 3.5rem 0 4.5rem;",
    ".about-hero-section {\n  position: relative;\n  padding: 2.25rem 0 1.75rem;"
  );
  s = s.replace(
    ".about-hero-section {\r\n  position: relative;\r\n  padding: 3.5rem 0 4.5rem;",
    ".about-hero-section {\r\n  position: relative;\r\n  padding: 2.25rem 0 1.75rem;"
  );
  s = s.replace(
    ".about-section-header {\n  text-align: center;\n  max-width: 680px;\n  margin: 0 auto 3rem;",
    ".about-section-header {\n  text-align: center;\n  max-width: 680px;\n  margin: 0 auto 1.5rem;"
  );
  s = s.replace(
    ".about-section-header {\r\n  text-align: center;\r\n  max-width: 680px;\r\n  margin: 0 auto 3rem;",
    ".about-section-header {\r\n  text-align: center;\r\n  max-width: 680px;\r\n  margin: 0 auto 1.5rem;"
  );
  s = s.replace(
    "margin-bottom: 5.5rem;",
    "margin-bottom: 2.5rem;"
  );
  // Replace the remaining 5.5rem occurrences in AboutPage.css
  s = s.replaceAll("margin-bottom: 5.5rem;", "margin-bottom: 2.5rem;");
  s = s.replace(
    ".about-cta-card {\n  background: linear-gradient(135deg, #fffbf7 0%, #fef3e8 45%, #fce7d2 100%);\n  border-radius: 30px;\n  border: 1px solid #ebd9c8;\n  box-shadow: 0 16px 42px rgba(45, 35, 27, 0.05);\n  padding: 3.5rem 3.5rem 3rem;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 2rem;",
    ".about-cta-card {\n  background: linear-gradient(135deg, #fffbf7 0%, #fef3e8 45%, #fce7d2 100%);\n  border-radius: 30px;\n  border: 1px solid #ebd9c8;\n  box-shadow: 0 16px 42px rgba(45, 35, 27, 0.05);\n  padding: 2.25rem 2.5rem 2rem;\n  position: relative;\n  overflow: hidden;\n  margin-bottom: 1.5rem;"
  );
  s = s.replace(
    ".about-cta-card {\r\n  background: linear-gradient(135deg, #fffbf7 0%, #fef3e8 45%, #fce7d2 100%);\r\n  border-radius: 30px;\r\n  border: 1px solid #ebd9c8;\r\n  box-shadow: 0 16px 42px rgba(45, 35, 27, 0.05);\r\n  padding: 3.5rem 3.5rem 3rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-bottom: 2rem;",
    ".about-cta-card {\r\n  background: linear-gradient(135deg, #fffbf7 0%, #fef3e8 45%, #fce7d2 100%);\r\n  border-radius: 30px;\r\n  border: 1px solid #ebd9c8;\r\n  box-shadow: 0 16px 42px rgba(45, 35, 27, 0.05);\r\n  padding: 2.25rem 2.5rem 2rem;\r\n  position: relative;\r\n  overflow: hidden;\r\n  margin-bottom: 1.5rem;"
  );
  return s;
});

// 8. src/components/ServicesPage.css
updateFile('src/components/ServicesPage.css', (c) => {
  let s = c;
  s = s.replace(
    ".services-hero-section {\n  position: relative;\n  padding: 3.5rem 0 4.5rem;",
    ".services-hero-section {\n  position: relative;\n  padding: 2.25rem 0 1.75rem;"
  );
  s = s.replace(
    ".services-hero-section {\r\n  position: relative;\r\n  padding: 3.5rem 0 4.5rem;",
    ".services-hero-section {\r\n  position: relative;\r\n  padding: 2.25rem 0 1.75rem;"
  );
  s = s.replace(
    ".services-grid-section {\n  position: relative;\n  padding: 4.5rem 0 5rem;",
    ".services-grid-section {\n  position: relative;\n  padding: 1.5rem 0 2rem;"
  );
  s = s.replace(
    ".services-grid-section {\r\n  position: relative;\r\n  padding: 4.5rem 0 5rem;",
    ".services-grid-section {\r\n  position: relative;\r\n  padding: 1.5rem 0 2rem;"
  );
  s = s.replace(
    ".services-grid-header {\n  text-align: center;\n  max-width: 760px;\n  margin: 0 auto 3.5rem;",
    ".services-grid-header {\n  text-align: center;\n  max-width: 760px;\n  margin: 0 auto 1.75rem;"
  );
  s = s.replace(
    ".services-grid-header {\r\n  text-align: center;\r\n  max-width: 760px;\r\n  margin: 0 auto 3.5rem;",
    ".services-grid-header {\r\n  text-align: center;\r\n  max-width: 760px;\r\n  margin: 0 auto 1.75rem;"
  );
  s = s.replace(
    ".services-comparison-section {\n  position: relative;\n  padding: 4.5rem 0 5rem;",
    ".services-comparison-section {\n  position: relative;\n  padding: 1.75rem 0 2rem;"
  );
  s = s.replace(
    ".services-comparison-section {\r\n  position: relative;\r\n  padding: 4.5rem 0 5rem;",
    ".services-comparison-section {\r\n  position: relative;\r\n  padding: 1.75rem 0 2rem;"
  );
  s = s.replace(
    ".services-faq-section {\n  position: relative;\n  padding: 4.5rem 0 5rem;",
    ".services-faq-section {\n  position: relative;\n  padding: 1.75rem 0 2rem;"
  );
  s = s.replace(
    ".services-faq-section {\r\n  position: relative;\r\n  padding: 4.5rem 0 5rem;",
    ".services-faq-section {\r\n  position: relative;\r\n  padding: 1.75rem 0 2rem;"
  );
  s = s.replace(
    ".services-cta-section {\n  position: relative;\n  padding: 2rem 0 4rem;",
    ".services-cta-section {\n  position: relative;\n  padding: 1rem 0 2rem;"
  );
  s = s.replace(
    ".services-cta-section {\r\n  position: relative;\r\n  padding: 2rem 0 4rem;",
    ".services-cta-section {\r\n  position: relative;\r\n  padding: 1rem 0 2rem;"
  );
  return s;
});

// 9. src/app/portfolio/page.jsx
updateFile('src/app/portfolio/page.jsx', (c) => {
  let s = c;
  // Replace section paddings from 2.25rem 0 to 1.25rem 0
  s = s.replaceAll("padding: '2.25rem 0'", "padding: '1.25rem 0'");
  s = s.replace(
    "padding: '2.5rem 0 1.5rem', scrollMarginTop: '80px'",
    "padding: '1.5rem 0 1.25rem', scrollMarginTop: '80px'"
  );
  return s;
});

// 10. src/components/CaseStudyDetailView.css
updateFile('src/components/CaseStudyDetailView.css', (c) => {
  let s = c;
  s = s.replace(
    "padding: 1.5rem 0 5rem;",
    "padding: 1.25rem 0 2.25rem;"
  );
  s = s.replace(
    ".csd-section-metrics {\n  margin-bottom: 4rem;",
    ".csd-section-metrics {\n  margin-bottom: 2.25rem;"
  );
  s = s.replace(
    ".csd-section-metrics {\r\n  margin-bottom: 4rem;",
    ".csd-section-metrics {\r\n  margin-bottom: 2.25rem;"
  );
  s = s.replaceAll("margin-bottom: 4.5rem;", "margin-bottom: 2.25rem;");
  return s;
});

// 11. src/app/technologies/page.jsx
updateFile('src/app/technologies/page.jsx', (c) => {
  let s = c;
  s = s.replace(
    "paddingTop: '2.5rem', paddingBottom: '5rem'",
    "paddingTop: '1.5rem', paddingBottom: '2.25rem'"
  );
  s = s.replace(
    "padding: '2.5rem 0 1rem'",
    "padding: '1.25rem 0 0.5rem'"
  );
  s = s.replace(
    "margin: '0 auto 2rem'",
    "margin: '0 auto 1.25rem'"
  );
  s = s.replace(
    "marginTop: '1.5rem'",
    "marginTop: '1rem'"
  );
  return s;
});

// 12. src/app/verify/page.jsx
updateFile('src/app/verify/page.jsx', (c) => {
  return c.replace(
    "padding: '3.5rem 1.5rem 5rem'",
    "padding: '2rem 1.5rem 2.25rem'"
  );
});

// 13. src/components/BlogPage.css
updateFile('src/components/BlogPage.css', (c) => {
  return c.replace(
    ".blog-newsletter-section {\n  background: #ffffff;\n  border-radius: 28px;\n  border: 1px solid #ebd9c8;\n  padding: 4rem 1.5rem;",
    ".blog-newsletter-section {\n  background: #ffffff;\n  border-radius: 28px;\n  border: 1px solid #ebd9c8;\n  padding: 2.25rem 1.5rem;"
  ).replace(
    ".blog-newsletter-section {\r\n  background: #ffffff;\r\n  border-radius: 28px;\r\n  border: 1px solid #ebd9c8;\r\n  padding: 4rem 1.5rem;",
    ".blog-newsletter-section {\r\n  background: #ffffff;\r\n  border-radius: 28px;\r\n  border: 1px solid #ebd9c8;\r\n  padding: 2.25rem 1.5rem;"
  );
});

// 14. src/app/globals.css
updateFile('src/app/globals.css', (c) => {
  let s = c;
  // Reduce section header margin
  s = s.replace(
    ".section-header {\n  text-align: center;\n  max-width: 760px;\n  margin: 0 auto 3.5rem;",
    ".section-header {\n  text-align: center;\n  max-width: 760px;\n  margin: 0 auto 1.75rem;"
  );
  s = s.replace(
    ".section-header {\r\n  text-align: center;\r\n  max-width: 760px;\r\n  margin: 0 auto 3.5rem;",
    ".section-header {\r\n  text-align: center;\r\n  max-width: 760px;\r\n  margin: 0 auto 1.75rem;"
  );
  s = s.replace(
    ".section-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.38rem 1.15rem;\n  border-radius: var(--radius-full);\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid rgba(220, 195, 170, 0.65);\n  color: var(--primary);\n  font-size: 0.825rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  margin-bottom: 1.25rem;",
    ".section-badge {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.45rem;\n  padding: 0.38rem 1.15rem;\n  border-radius: var(--radius-full);\n  background: rgba(255, 255, 255, 0.92);\n  border: 1px solid rgba(220, 195, 170, 0.65);\n  color: var(--primary);\n  font-size: 0.825rem;\n  font-weight: 700;\n  letter-spacing: 0.04em;\n  margin-bottom: 0.75rem;"
  );
  s = s.replace(
    ".section-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.45rem;\r\n  padding: 0.38rem 1.15rem;\r\n  border-radius: var(--radius-full);\r\n  background: rgba(255, 255, 255, 0.92);\r\n  border: 1px solid rgba(220, 195, 170, 0.65);\r\n  color: var(--primary);\r\n  font-size: 0.825rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.04em;\r\n  margin-bottom: 1.25rem;",
    ".section-badge {\r\n  display: inline-flex;\r\n  align-items: center;\r\n  gap: 0.45rem;\r\n  padding: 0.38rem 1.15rem;\r\n  border-radius: var(--radius-full);\r\n  background: rgba(255, 255, 255, 0.92);\r\n  border: 1px solid rgba(220, 195, 170, 0.65);\r\n  color: var(--primary);\r\n  font-size: 0.825rem;\r\n  font-weight: 700;\r\n  letter-spacing: 0.04em;\r\n  margin-bottom: 0.75rem;"
  );
  s = s.replace(
    ".hero-section-new {\n  position: relative;\n  padding: 3.25rem 0 0.5rem;",
    ".hero-section-new {\n  position: relative;\n  padding: 2.5rem 0 0.5rem;"
  );
  s = s.replace(
    ".hero-section-new {\r\n  position: relative;\r\n  padding: 3.25rem 0 0.5rem;",
    ".hero-section-new {\r\n  position: relative;\r\n  padding: 2.5rem 0 0.5rem;"
  );
  return s;
});

// 15. src/components/Footer.jsx
updateFile('src/components/Footer.jsx', (c) => {
  let s = c;
  s = s.replace(
    "padding: '3.25rem 0 2rem',\n        marginTop: '1.5rem',",
    "padding: '2.5rem 0 2rem',\n        marginTop: '0.75rem',"
  );
  s = s.replace(
    "padding: '3.25rem 0 2rem',\r\n        marginTop: '1.5rem',",
    "padding: '2.5rem 0 2rem',\r\n        marginTop: '0.75rem',"
  );
  return s;
});

console.log('Finished applying spacing adjustments.');
