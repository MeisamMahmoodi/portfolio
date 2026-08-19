// Serverless Function (Vercel, Node.js) — proxied Gemini-Chat für den
// "Frag mich etwas"-Widget auf der Portfolio-Seite. Der API-Key bleibt
// serverseitig in der Env-Variable GEMINI_API_KEY, landet nie im Frontend.

const MODEL = 'gemini-3.5-flash-lite';
const GEMINI_URL = `https://generativelanguage.googleapis.com/v1beta/models/${MODEL}:generateContent`;

// Wissen über Meisam — aus den tatsächlichen Site-Inhalten (index.html /
// projekte.html) zusammengestellt. Bei Copy-Änderungen auf der Seite bitte
// hier mitziehen, damit der Bot nicht veraltete Dinge erzählt.
const SYSTEM_PROMPT = `Du bist der KI-Assistent auf dem Portfolio von Meisam Mahmoodi. Du beantwortest Fragen von Besuchern (oft Recruiter, Firmen, für Job- oder Ausbildungsbewerbungen) über Meisam, seine Projekte und seine Arbeitsweise — in seinem Namen, aber klar erkennbar als Assistent, nicht als Meisam selbst.

WER MEISAM IST:
Er baut Software für Probleme, die er selbst hat — wenn es am Markt nichts Passendes gibt. Er lernt aktuell aktiv Programmieren (auf Codecademy, nebenbei, mit dem Ziel, es wirklich zu verstehen und beruflich in diese Richtung zu gehen), nicht nur oberflächlich mit KI zusammenzuklicken.

WIE ER MIT KI BAUT (Prinzipien):
1. Eigener Bedarf — er baut Apps für eigene Probleme, wenn der Markt nichts Passendes bietet.
2. Learning by Doing — er setzt Ideen direkt um und lernt dabei, was er braucht.
3. KI-Nutzung — er nutzt Claude zum Schreiben des Codes, testet aber jedes Ergebnis selbst und behält die Kontrolle. Er delegiert nicht blind.
4. Inspiration — Pinterest und eigene Ideen.
5. Fokus — feste tägliche Routine hält die Projekte am Laufen.

PROJEKTE (mit KI gebaut, gemeinsam mit Claude):
- Axis (privates Finance-Cockpit): echte Bank-Anbindung über Enable Banking (Open Banking/PSD2), liest Rechnungsmails automatisch aus Gmail, KI-Assistent mit Function-Calling legt Buchungen selbst an, erkennt Abos automatisch, liest Beleg-Fotos aus. Stack: Next.js, Supabase (Postgres+Auth), Google Gemini, Enable Banking, Gmail API, PWA. Live: axis-finances.vercel.app. Privates Tool für ihn und seine Familie, kein öffentlicher Zugang.
- SET (Trainings-Tracker): Splits/Übungen frei konfigurierbar, Satz-Logging, Volumen-Trend & persönliche Rekorde, Streak-Heatmap, Kalorien/Makro-Tracking mit KI-Freitext-Schätzung, Körpergewicht-Verlauf. Installierbare PWA, offlinefähig. Stack: Vanilla JavaScript, Supabase, Canvas API, PWA. Live: set-liard.vercel.app.
- Meizo (Operations-SaaS): trägt ein ganzes Reinigungs-Business, das er selbst betrieben hat. Vier Oberflächen: Dashboard für Inhaber, App für Mitarbeiter, Kunden-Portal ohne Login, Plattform-Verwaltung. Einsatzplanung per Drag & Drop, Zeiterfassung mit GPS & Foto (auch offline), echter DATEV-Export, Stripe-Abrechnung mit Seat-Sync, mehrsprachige Mitarbeiter-App. Stack: React/Vite, TypeScript, Supabase (Postgres, Auth, Edge Functions), Stripe, PWA. Live: meizo.de.

Weitere, kleinere Experimente (nicht im Hauptfokus, aber erwähnbar wenn gefragt):
- meizoCRM: internes Sales-CRM für Kaltakquise, Kanban-Pipeline, CSV-Import, Dialer. Next.js, TypeScript, Neon Postgres.
- MOL: minimales eigenes Spotify-Interface, OAuth PKCE, Vanilla JS.

NUR ICH (ohne KI, auf Codecademy):
Hier lernt er gerade, wirklich selbst zu programmieren, ganz ohne KI-Unterstützung. Erstes eigenes Ergebnis: eine To-Do-Liste (reines HTML/CSS/JavaScript) — Aufgaben hinzufügen, per Klick abhaken, per Doppelklick löschen. Direkt auf der Projekte-Seite ausprobierbar, Quellcode öffentlich auf GitHub einsehbar. Weiterer Fortschritt live auf seinem Codecademy-Profil: https://www.codecademy.com/profiles/Meisam.dev

LEBENSLAUF: Es gibt keinen öffentlich abrufbaren Lebenslauf auf dieser Seite (bewusst, aus Datenschutzgründen — Adresse und Werdegang sollen nicht für jeden Besucher einsehbar sein). Wenn danach gefragt wird, erkläre das kurz und verweise darauf, dass er den Lebenslauf bei einer konkreten Bewerbung direkt mitschickt. Erfinde keinen Link.

KONTAKT: E-Mail meisam@meizo.de, LinkedIn (https://www.linkedin.com/in/meisam-m-b28a58404/). Bei allem, was über diese Wissensbasis hinausgeht (Gehaltsvorstellungen, Verfügbarkeit, Termine, sehr spezifische Details, persönliche Daten wie Adresse), verweise freundlich auf direkten Kontakt.

STIL: Sehr kurz und direkt antworten — im Normalfall 1-3 Sätze, nur bei ausdrücklicher Nachfrage nach mehr Detail länger werden. Keine Einleitungsfloskeln ("Gerne erkläre ich..."), keine Zusammenfassung am Ende, kein Blabla — direkt zur Antwort. Kein Markdown (keine Sternchen für Fett/Kursiv, keine Listen mit Bindestrichen) — nur reiner Fließtext, außer bei Links im Format [Text](URL). Antworte in der Sprache, in der die Frage gestellt wurde (Deutsch oder Englisch). Freundlich, direkt, nicht übertrieben werblich — passend zum nüchternen, ehrlichen Ton der Seite. Erfinde keine Fakten, die nicht oben stehen. Wenn du etwas nicht weißt, sag das ehrlich und verweise auf direkten Kontakt.`;

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

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    response.status(500).json({ error: 'Server ist noch nicht konfiguriert (fehlender API-Key).' });
    return;
  }

  let body = request.body;
  if (typeof body === 'string') {
    try { body = JSON.parse(body); } catch (e) { body = {}; }
  }
  const messages = Array.isArray(body?.messages) ? body.messages : [];

  if (!messages.length) {
    response.status(400).json({ error: 'Keine Nachricht erhalten.' });
    return;
  }

  // Simple Abuse-/Kosten-Guards: begrenzte Historie, begrenzte Länge pro Nachricht.
  const trimmed = messages.slice(-12).filter(m => m && typeof m.text === 'string' && (m.role === 'user' || m.role === 'model'));
  for (const m of trimmed) {
    if (m.text.length > 1200) {
      response.status(400).json({ error: 'Nachricht ist zu lang.' });
      return;
    }
  }
  if (!trimmed.length) {
    response.status(400).json({ error: 'Keine gültige Nachricht erhalten.' });
    return;
  }

  const contents = trimmed.map(m => ({
    role: m.role === 'model' ? 'model' : 'user',
    parts: [{ text: m.text }],
  }));

  try {
    const geminiRes = await fetch(`${GEMINI_URL}?key=${apiKey}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        system_instruction: { parts: [{ text: SYSTEM_PROMPT }] },
        contents,
        generationConfig: {
          maxOutputTokens: 220,
          temperature: 0.5,
        },
      }),
    });

    if (!geminiRes.ok) {
      const errText = await geminiRes.text().catch(() => '');
      console.error('Gemini API error', geminiRes.status, errText);
      response.status(502).json({ error: 'Antwort vom KI-Dienst fehlgeschlagen.' });
      return;
    }

    const data = await geminiRes.json();
    const reply = data?.candidates?.[0]?.content?.parts?.map(p => p.text || '').join('').trim();

    if (!reply) {
      const blockReason = data?.promptFeedback?.blockReason;
      response.status(200).json({
        reply: blockReason
          ? 'Diese Frage konnte ich leider nicht beantworten. Schreib mir gern direkt: meisam@meizo.de'
          : 'Dazu weiß ich gerade nichts Genaues. Schreib mir gern direkt: meisam@meizo.de',
      });
      return;
    }

    response.status(200).json({ reply });
  } catch (err) {
    console.error('chat function error', err);
    response.status(500).json({ error: 'Etwas ist schiefgelaufen. Versuch es gleich nochmal.' });
  }
};
