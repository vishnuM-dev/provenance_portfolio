import test from 'node:test';
import assert from 'node:assert/strict';
import { generateAssetId, generateCertificateCode, formatCurrency, formatDate } from '../src/lib/utils.js';

test('generateAssetId generates a valid PRV formatted identifier', () => {
  const id = generateAssetId();
  assert.match(id, /^PRV-\d{4}-[A-Z0-9]{4}\d{3}$/);
});

test('generateCertificateCode generates a CERT- formatted token', () => {
  const code = generateCertificateCode();
  assert.match(code, /^CERT-[A-Z0-9]{4}-[A-Z0-9]{4}-[A-Z0-9]{4}$/);
});

test('formatCurrency formats valid numeric values into USD strings', () => {
  const formatted = formatCurrency(4500000);
  assert.equal(formatted, '$4,500,000');
  assert.equal(formatCurrency(null), 'Confidential');
  assert.equal(formatCurrency(undefined), 'Confidential');
});

test('formatDate safely formats date strings', () => {
  const formatted = formatDate('1324-06-15');
  assert.ok(formatted.includes('1324'));
  assert.equal(formatDate(null), 'Undated');
});
