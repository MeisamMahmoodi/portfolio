/* "Frag mich etwas" — schwebender KI-Chat-Assistent, der auf dieser Seite
   basierend antwortet. Läuft komplett client-seitig gegen /api/chat (der
   eigentliche Gemini-Call passiert serverseitig, Key bleibt geheim).
   Selbstständiges Script, injiziert eigenes CSS + Markup — einfach auf
   beiden Seiten (index.html, projekte.html) per <script> einbinden. */
(() => {
  const STRINGS = {
    de: {
      launcher: 'Frag mich etwas',
      title: 'Frag mich etwas',
      subtitle: 'KI-Assistent · antwortet basierend auf diesem Portfolio',
      placeholder: 'Frag etwas zu Meisam oder seinen Projekten…',
      send: 'Senden',
      close: 'Schließen',
      greeting: 'Hi! Ich kenne Meisams Projekte, Arbeitsweise und Werdegang — frag mich einfach.',
      suggestions: [
        'Was hat er gebaut?',
        'Wie arbeitet er mit KI?',
        'Wie erreiche ich ihn?',
      ],
      error: 'Etwas ist schiefgelaufen. Versuch es gleich nochmal oder schreib direkt: meisam@meizo.de',
      thinking: '…',
    },
    en: {
      launcher: 'Ask me anything',
      title: 'Ask me anything',
      subtitle: 'AI assistant · answers based on this portfolio',
      placeholder: 'Ask something about Meisam or his projects…',
      send: 'Send',
      close: 'Close',
      greeting: "Hi! I know Meisam's projects, his approach and background — just ask.",
      suggestions: [
        'What has he built?',
        'How does he work with AI?',
        'How can I reach him?',
      ],
      error: 'Something went wrong. Try again in a moment, or write directly: meisam@meizo.de',
      thinking: '…',
    },
  };

  function currentLang() {
    try {
      if (document.documentElement.lang === 'en') return 'en';
      if (localStorage.getItem('site-lang') === 'en') return 'en';
    } catch (e) {}
    return 'de';
  }

  const css = `
  .cw-launcher{
    position:fixed;right:1.8rem;bottom:1.8rem;z-index:120;
    display:flex;align-items:center;gap:10px;
    background:#0a0a0a;color:#f4f2ec;border:none;border-radius:99px;
    padding:0.85rem 1.3rem 0.85rem 1rem;cursor:pointer;
    box-shadow:0 10px 30px -8px rgba(0,0,0,0.5);
    font-family:'Helvetica Neue',Arial,sans-serif;
    transition:transform .3s cubic-bezier(0.16,1,0.3,1), box-shadow .3s;
  }
  .cw-launcher:hover{transform:translateY(-2px);box-shadow:0 16px 36px -8px rgba(0,0,0,0.55);}
  .cw-launcher svg{flex-shrink:0;}
  .cw-launcher span{font-size:12.5px;font-weight:700;letter-spacing:0.02em;white-space:nowrap;}
  .cw-launcher .cw-dot{
    position:absolute;top:-2px;right:-2px;width:9px;height:9px;border-radius:50%;
    background:#d69a3c;border:2px solid #f4f2ec;
  }
  @media (max-width:640px){
    .cw-launcher span{display:none;}
    .cw-launcher{padding:0.9rem;}
  }

  .cw-panel{
    position:fixed;right:1.8rem;bottom:1.8rem;z-index:121;
    width:min(380px, calc(100vw - 2.4rem));
    height:min(560px, calc(100vh - 3.6rem));
    background:#f4f2ec;color:#0a0a0a;border-radius:18px;
    box-shadow:0 24px 60px -12px rgba(0,0,0,0.5);
    display:flex;flex-direction:column;overflow:hidden;
    font-family:'Helvetica Neue',Arial,sans-serif;
    opacity:0;transform:translateY(16px) scale(0.98);pointer-events:none;
    transition:opacity .28s cubic-bezier(0.16,1,0.3,1), transform .28s cubic-bezier(0.16,1,0.3,1);
  }
  .cw-panel.is-open{opacity:1;transform:translateY(0) scale(1);pointer-events:auto;}

  .cw-head{
    background:#0a0a0a;color:#f4f2ec;padding:1.1rem 1.2rem;
    display:flex;align-items:flex-start;justify-content:space-between;gap:0.6rem;
    flex-shrink:0;
  }
  .cw-head-title{font-size:14px;font-weight:700;}
  .cw-head-sub{font-size:10.5px;opacity:0.55;margin-top:3px;letter-spacing:0.02em;}
  .cw-close{
    background:none;border:none;color:#f4f2ec;opacity:0.6;cursor:pointer;
    font-size:18px;line-height:1;padding:2px;flex-shrink:0;
    transition:opacity .2s;
  }
  .cw-close:hover{opacity:1;}

  .cw-body{flex:1;overflow-y:auto;padding:1.1rem 1.1rem 0.6rem;display:flex;flex-direction:column;gap:0.7rem;}
  .cw-msg{font-size:13px;line-height:1.55;max-width:86%;padding:0.65rem 0.85rem;border-radius:12px;white-space:pre-wrap;word-wrap:break-word;}
  .cw-msg.user{align-self:flex-end;background:#0a0a0a;color:#f4f2ec;border-bottom-right-radius:3px;}
  .cw-msg.bot{align-self:flex-start;background:rgba(10,10,10,0.06);color:#0a0a0a;border-bottom-left-radius:3px;}
  .cw-msg.bot a{color:#0a0a0a;text-decoration:underline;}
  .cw-msg.typing{display:flex;align-items:center;gap:4px;padding:0.75rem 0.9rem;}
  .cw-msg.typing span{width:5px;height:5px;border-radius:50%;background:rgba(10,10,10,0.4);animation:cwBlink 1.2s ease-in-out infinite;}
  .cw-msg.typing span:nth-child(2){animation-delay:.15s;}
  .cw-msg.typing span:nth-child(3){animation-delay:.3s;}
  @keyframes cwBlink{0%,80%,100%{opacity:0.25;}40%{opacity:1;}}

  .cw-suggestions{display:flex;flex-wrap:wrap;gap:6px;padding:0 1.1rem 0.8rem;flex-shrink:0;}
  .cw-suggestion{
    font-size:11px;padding:0.5rem 0.75rem;border-radius:99px;
    border:1px solid rgba(10,10,10,0.18);background:none;color:#0a0a0a;
    cursor:pointer;opacity:0.75;transition:opacity .2s, border-color .2s;
  }
  .cw-suggestion:hover{opacity:1;border-color:#d69a3c;}

  .cw-inputrow{display:flex;gap:0.6rem;padding:0.9rem 1.1rem;border-top:1px solid rgba(10,10,10,0.1);flex-shrink:0;}
  .cw-input{
    flex:1;resize:none;border:1px solid rgba(10,10,10,0.16);border-radius:10px;
    padding:0.6rem 0.75rem;font-size:13px;font-family:inherit;background:#fff;color:#0a0a0a;
    max-height:88px;line-height:1.4;
  }
  .cw-input:focus{outline:none;border-color:#d69a3c;}
  .cw-send{
    background:#d69a3c;color:#191305;border:none;border-radius:10px;
    padding:0 1rem;font-size:12px;font-weight:700;cursor:pointer;flex-shrink:0;
    transition:opacity .2s;
  }
  .cw-send:disabled{opacity:0.45;cursor:default;}
  `;

  function injectStyles() {
    const style = document.createElement('style');
    style.textContent = css;
    document.head.appendChild(style);
  }

  function escapeHtml(str) {
    const d = document.createElement('div');
    d.textContent = str;
    return d.innerHTML;
  }

  // sehr simples Markdown-light: nur Links [text](url) und Zeilenumbrüche.
  function formatBotText(text) {
    let safe = escapeHtml(text);
    safe = safe.replace(/\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');
    safe = safe.replace(/(meisam@meizo\.de)/g, '<a href="mailto:$1">$1</a>');
    return safe;
  }

  function buildWidget() {
    let lang = currentLang();
    let t = STRINGS[lang];

    const launcher = document.createElement('button');
    launcher.className = 'cw-launcher';
    launcher.type = 'button';
    launcher.setAttribute('aria-label', t.launcher);
    launcher.innerHTML = `
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 2.5l1.9 4.9 4.9 1.9-4.9 1.9L12 16 10.1 11.2 5.2 9.3l4.9-1.9L12 2.5z" fill="#d69a3c"/>
        <path d="M19 14l.95 2.45L22.4 17.4l-2.45.95L19 20.8l-.95-2.45L15.6 17.4l2.45-.95L19 14z" fill="#f4f2ec" opacity="0.85"/>
      </svg>
      <span>${t.launcher}</span>
    `;

    const panel = document.createElement('div');
    panel.className = 'cw-panel';
    panel.innerHTML = `
      <div class="cw-head">
        <div>
          <div class="cw-head-title">${t.title}</div>
          <div class="cw-head-sub">${t.subtitle}</div>
        </div>
        <button class="cw-close" type="button" aria-label="${t.close}">&times;</button>
      </div>
      <div class="cw-body"></div>
      <div class="cw-suggestions"></div>
      <div class="cw-inputrow">
        <textarea class="cw-input" rows="1" placeholder="${t.placeholder}"></textarea>
        <button class="cw-send" type="button">${t.send}</button>
      </div>
    `;

    document.body.appendChild(launcher);
    document.body.appendChild(panel);

    const body = panel.querySelector('.cw-body');
    const suggestionsEl = panel.querySelector('.cw-suggestions');
    const input = panel.querySelector('.cw-input');
    const sendBtn = panel.querySelector('.cw-send');
    const closeBtn = panel.querySelector('.cw-close');
    const launcherLabel = launcher.querySelector('span');
    const titleEl = panel.querySelector('.cw-head-title');
    const subEl = panel.querySelector('.cw-head-sub');

    const history = []; // {role:'user'|'model', text}
    let sending = false;
    let opened = false;
    let greetingEl = null;

    function addMessage(role, text, opts) {
      const el = document.createElement('div');
      el.className = 'cw-msg ' + (role === 'user' ? 'user' : 'bot');
      if (role === 'user') {
        el.textContent = text;
      } else {
        el.innerHTML = formatBotText(text);
      }
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
      return el;
    }

    function addTyping() {
      const el = document.createElement('div');
      el.className = 'cw-msg bot typing';
      el.innerHTML = '<span></span><span></span><span></span>';
      body.appendChild(el);
      body.scrollTop = body.scrollHeight;
      return el;
    }

    function renderSuggestions() {
      suggestionsEl.innerHTML = '';
      t.suggestions.forEach(s => {
        const b = document.createElement('button');
        b.className = 'cw-suggestion';
        b.type = 'button';
        b.textContent = s;
        b.addEventListener('click', () => {
          suggestionsEl.style.display = 'none';
          sendMessage(s);
        });
        suggestionsEl.appendChild(b);
      });
    }

    function applyLang(newLang) {
      if (newLang !== 'en') newLang = 'de';
      if (newLang === lang) return;
      lang = newLang;
      t = STRINGS[lang];

      launcher.setAttribute('aria-label', t.launcher);
      if (launcherLabel) launcherLabel.textContent = t.launcher;
      titleEl.textContent = t.title;
      subEl.textContent = t.subtitle;
      closeBtn.setAttribute('aria-label', t.close);
      input.setAttribute('placeholder', t.placeholder);
      sendBtn.textContent = t.send;
      if (greetingEl) greetingEl.innerHTML = formatBotText(t.greeting);
      if (!history.length) renderSuggestions();
    }

    async function sendMessage(text) {
      const trimmedText = text.trim();
      if (!trimmedText || sending) return;
      sending = true;
      sendBtn.disabled = true;
      suggestionsEl.style.display = 'none';

      addMessage('user', trimmedText);
      history.push({ role: 'user', text: trimmedText });
      input.value = '';
      input.style.height = 'auto';

      const typingEl = addTyping();

      try {
        const res = await fetch('/api/chat', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ messages: history }),
        });
        const data = await res.json().catch(() => ({}));
        typingEl.remove();

        if (!res.ok || !data.reply) {
          addMessage('bot', data.error || t.error);
        } else {
          addMessage('bot', data.reply);
          history.push({ role: 'model', text: data.reply });
        }
      } catch (e) {
        typingEl.remove();
        addMessage('bot', t.error);
      } finally {
        sending = false;
        sendBtn.disabled = false;
      }
    }

    function openPanel() {
      panel.classList.add('is-open');
      launcher.style.display = 'none';
      if (!opened) {
        opened = true;
        greetingEl = addMessage('bot', t.greeting);
        renderSuggestions();
      }
      setTimeout(() => input.focus(), 260);
    }

    function closePanel() {
      panel.classList.remove('is-open');
      launcher.style.display = 'flex';
    }

    launcher.addEventListener('click', openPanel);
    closeBtn.addEventListener('click', closePanel);

    sendBtn.addEventListener('click', () => sendMessage(input.value));
    input.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        sendMessage(input.value);
      }
    });
    input.addEventListener('input', () => {
      input.style.height = 'auto';
      input.style.height = Math.min(input.scrollHeight, 88) + 'px';
    });

    // Reagiert live auf den DE/EN-Umschalter in der Nav (i18n.js löst dafür
    // kein eigenes Event aus, darum direkt an die vorhandenen Buttons andocken).
    document.querySelectorAll('.lang-switch .lang-opt').forEach((opt) => {
      opt.addEventListener('click', () => applyLang(opt.dataset.lang));
    });
  }

  function init() {
    injectStyles();
    buildWidget();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
