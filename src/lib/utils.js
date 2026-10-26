/**
 * Utility functions for Prevenance platform
 */

export function generateAssetId() {
  const year = new Date().getFullYear();
  const randomPart = Math.random().toString(36).substring(2, 6).toUpperCase();
  const seq = Math.floor(100 + Math.random() * 900);
  return `PRV-${year}-${randomPart}${seq}`;
}

export function generateCertificateCode() {
  const part1 = Math.random().toString(36).substring(2, 6).toUpperCase();
  const part2 = Math.random().toString(36).substring(2, 6).toUpperCase();
  const part3 = Math.random().toString(36).substring(2, 6).toUpperCase();
  return `CERT-${part1}-${part2}-${part3}`;
}

export function generateEventId() {
  return `evt_${Date.now()}_${Math.random().toString(36).substring(2, 7)}`;
}

export function formatDate(dateString) {
  if (!dateString) return 'Undated';
  try {
    const d = new Date(dateString);
    if (isNaN(d.getTime())) return dateString;
    return d.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  } catch {
    return dateString;
  }
}

export function formatCurrency(amount) {
  if (amount === undefined || amount === null || isNaN(amount)) return 'Confidential';
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumFractionDigits: 0
  }).format(amount);
}
