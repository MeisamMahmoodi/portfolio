// Serverless Function (Vercel, Node.js) — zählt Seitenbesuche pro Gerät,
// gedeckelt auf max. 3 pro Gerät (device_id aus localStorage im Browser),
// und liefert die Gesamtsumme über alle Geräte zurück. Die eigentliche
// Zähl-Logik läuft in einer Postgres-Funktion (RPC) bei Supabase — hier
// nur ein dünner Proxy, damit URL/Key serverseitig bleiben.

module.exports = async (request, response) => {
  response.setHeader('Access-Control-Allow-Origin', '*');
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

  const supabaseUrl = process.env.SUPABASE_URL;
  const supabaseKey = process.env.SUPABASE_ANON_KEY;
  if (!supabaseUrl || !supabaseKey) {
    response.status(500).json({ error: 'Server ist noch nicht konfiguriert.' });
    return;
  }

  let body = request.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  const deviceId = typeof body?.deviceId === 'string' ? body.deviceId.trim() : '';

  if (deviceId.length < 8 || deviceId.length > 100) {
    response.status(400).json({ error: 'Ungültige device id.' });
    return;
  }

  try {
    const rpcRes = await fetch(`${supabaseUrl}/rest/v1/rpc/record_portfolio_visit`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        apikey: supabaseKey,
        Authorization: `Bearer ${supabaseKey}`,
      },
      body: JSON.stringify({ p_device_id: deviceId }),
    });

    if (!rpcRes.ok) {
      const errText = await rpcRes.text().catch(() => '');
      console.error('Supabase RPC error', rpcRes.status, errText);
      response.status(502).json({ error: 'Zähler nicht erreichbar.' });
      return;
    }

    const total = await rpcRes.json();
    response.status(200).json({ total: typeof total === 'number' ? total : Number(total) || 0 });
  } catch (err) {
    console.error('visit function error', err);
    response.status(500).json({ error: 'Etwas ist schiefgelaufen.' });
  }
};
