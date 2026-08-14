/* Dezenter Besucherzähler im Footer. Zählt pro Gerät (device-id in
   localStorage) maximal 3x, danach läuft der Seitenbesuch nicht mehr in
   die Gesamtzahl ein. Die eigentliche Deckelung passiert serverseitig
   in der Datenbank — hier nur Erzeugen der device-id und Anzeige. */
(() => {
  function getDeviceId() {
    try {
      let id = localStorage.getItem('mm-device-id');
      if (!id) {
        id = (window.crypto && crypto.randomUUID)
          ? crypto.randomUUID()
          : 'id-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2);
        localStorage.setItem('mm-device-id', id);
      }
      return id;
    } catch (e) {
      return null; // localStorage blockiert (z. B. strikter privater Modus) — Zähler wird einfach ausgeblendet
    }
  }

  function formatCount(total) {
    const lang = document.documentElement.lang === 'en' ? 'en' : 'de';
    const num = new Intl.NumberFormat(lang === 'en' ? 'en-US' : 'de-DE').format(total);
    return lang === 'en'
      ? num + (total === 1 ? ' visit' : ' visits')
      : num + ' Besuche';
  }

  async function init() {
    const el = document.querySelector('[data-visit-counter]');
    if (!el) return;
    const deviceId = getDeviceId();
    if (!deviceId) return;

    try {
      const res = await fetch('/api/visit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ deviceId }),
      });
      if (!res.ok) return;
      const data = await res.json();
      if (typeof data.total !== 'number') return;

      el.textContent = formatCount(data.total);
      el.style.opacity = '';

      // Reagiert auf DE/EN-Umschalter (i18n.js löst hierfür kein eigenes
      // Event aus, darum direkt an die vorhandenen Buttons andocken).
      document.querySelectorAll('.lang-switch .lang-opt').forEach((opt) => {
        opt.addEventListener('click', () => {
          setTimeout(() => { el.textContent = formatCount(data.total); }, 0);
        });
      });
    } catch (e) {
      // still fail: Zähler bleibt einfach leer/versteckt
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
