import test from 'node:test';
import assert from 'node:assert/strict';
import { createInquiry, getInquiries } from '../src/lib/dynamodb.js';

test('createInquiry stores consultation request and generates unique id', async () => {
  const result = await createInquiry({
    name: 'Lord Alistair Vance',
    email: 'a.vance@heritage-vault.org',
    organization: 'Royal Heritage Foundation',
    assetCategory: 'Antiquities',
    message: 'Requesting non-destructive XRF spectrometry audit for 14th-century astrolabe.',
  });

  assert.ok(result.id);
  assert.ok(result.id.startsWith('inq_'));
  assert.equal(result.name, 'Lord Alistair Vance');
  assert.equal(result.assetCategory, 'Antiquities');
  assert.ok(result.createdAt);

  const list = await getInquiries();
  assert.ok(Array.isArray(list));
  const found = list.find(i => i.id === result.id);
  assert.ok(found);
  assert.equal(found.organization, 'Royal Heritage Foundation');
});
