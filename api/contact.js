// Serverless Function (Vercel, Node.js) — Kontaktformular des Portfolios.
// Versand über die Resend-REST-API, der API-Key bleibt serverseitig in
// RESEND_API_KEY. Optional: CONTACT_FROM_EMAIL (verifizierte Absender-Adresse
// bei Resend) und CONTACT_TO_EMAIL (Empfänger, Standard siehe unten).

const DEFAULT_TO = 'meisam.projects@gmail.com';

function escapeHtml(value) {
  return value
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

module.exports = async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', 'https://portfolio-meisam.com');
  response.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  response.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (request.method === 'OPTIONS') {
    response.status(204).end();
    return;
  }
  if (request.method !== 'POST') {
    response.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY ist nicht gesetzt.');
    response.status(500).json({ error: 'Der Versand ist derzeit nicht verfügbar.' });
    return;
  }

  let body = request.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  body = body || {};

  // Honeypot: Bots füllen das versteckte Feld aus — still "erfolgreich" antworten.
  if (typeof body.website === 'string' && body.website.trim()) {
    response.status(200).json({ ok: true });
    return;
  }

  const name = typeof body.name === 'string' ? body.name.trim().slice(0, 120) : '';
  const email = typeof body.email === 'string' ? body.email.trim().slice(0, 200) : '';
  const message = typeof body.message === 'string' ? body.message.trim().slice(0, 4000) : '';

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    response.status(400).json({ error: 'Bitte eine gültige E-Mail-Adresse angeben.' });
    return;
  }
  if (message.length < 5) {
    response.status(400).json({ error: 'Bitte eine kurze Nachricht schreiben.' });
    return;
  }

  const signature = name ? `${name}\n${email}` : email;
  const subject = name ? `Portfolio-Anfrage von ${name}` : 'Portfolio-Anfrage';
  const from = `Portfolio <${process.env.CONTACT_FROM_EMAIL || 'onboarding@resend.dev'}>`;
  const to = process.env.CONTACT_TO_EMAIL || DEFAULT_TO;

  try {
    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject,
        text: `${message}\n\n—\n${signature}`,
        html: `<p>${escapeHtml(message).replace(/\n/g, '<br />')}</p><p>—<br />${escapeHtml(signature).replace(/\n/g, '<br />')}</p>`,
      }),
    });

    if (!res.ok) {
      const errText = await res.text().catch(() => '');
      console.error('Resend error', res.status, errText);
      response.status(502).json({ error: 'Nachricht konnte nicht gesendet werden.' });
      return;
    }
    response.status(200).json({ ok: true });
  } catch (err) {
    console.error('contact function error', err);
    response.status(500).json({ error: 'Nachricht konnte nicht gesendet werden.' });
  }
};
