import test from 'node:test';
import assert from 'node:assert/strict';
import { hashPassword, verifyPassword, signToken, verifyToken } from '../src/lib/auth.js';

test('Password hashing and verification with bcryptjs works', async () => {
  const password = 'AdminSecure2026!';
  const hashed = await hashPassword(password);

  assert.notEqual(hashed, password);
  assert.ok(hashed.startsWith('$2'));

  const isValid = await verifyPassword(password, hashed);
  assert.equal(isValid, true);

  const isInvalid = await verifyPassword('WrongPassword', hashed);
  assert.equal(isInvalid, false);
});

test('JWT signing and cryptographic verification with jose works', async () => {
  const payload = {
    sub: 'curator-001',
    email: 'admin@prevenance.io',
    role: 'admin',
  };

  const token = await signToken(payload);
  assert.equal(typeof token, 'string');
  assert.ok(token.split('.').length === 3);

  const decoded = await verifyToken(token);
  assert.ok(decoded);
  assert.equal(decoded.sub, 'curator-001');
  assert.equal(decoded.email, 'admin@prevenance.io');
  assert.equal(decoded.role, 'admin');

  // Verify invalid token returns null
  const invalidDecoded = await verifyToken('invalid.token.here');
  assert.equal(invalidDecoded, null);
});
