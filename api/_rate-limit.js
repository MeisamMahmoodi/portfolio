// Einfacher Rate-Limiter pro IP (gleitendes Fenster, im Speicher der Instanz).
// Schuetzt /api/chat (Gemini-Kosten), /api/contact (Mail) und /api/visit.
// Bei Serverless gilt das Limit pro Instanz; fuer harte globale Limits
// zusaetzlich Vercel Firewall > Rate Limiting aktivieren.
const buckets = new Map();

function clientIp(request) {
  const fwd = request.headers['x-forwarded-for'];
  const first = typeof fwd === 'string' ? fwd.split(',')[0] : (request.headers['x-real-ip'] || 'unknown');
  return String(first).trim();
}

function rateLimited(request, key, max, windowMs) {
  const now = Date.now();
  const id = key + ':' + clientIp(request);
  const hits = (buckets.get(id) || []).filter(t => now - t < windowMs);
  if (hits.length >= max) { buckets.set(id, hits); return true; }
  hits.push(now);
  buckets.set(id, hits);
  if (buckets.size > 5000) {
    for (const [k, v] of buckets) if (v.every(t => now - t >= windowMs)) buckets.delete(k);
  }
  return false;
}

module.exports = { rateLimited };
