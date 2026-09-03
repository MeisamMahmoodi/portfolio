/* Zweisprachige Inhalte (DE/EN) + Sprachumschalter-Logik.
   Nur Elemente mit [data-i18n] werden angefasst — alles andere (Markennamen,
   Tech-Stack-Pills, E-Mail-Adressen etc.) bleibt in beiden Sprachen identisch
   und wird nicht angerührt. */

const I18N_INDEX = {
  'nav-projekte':   { de: `Projekte ↗`, en: `Projects ↗` },
  'nav-werdegang':  { de: `Werdegang`, en: `Background` },
  'nav-alle':       { de: `Alle im Detail ↗`, en: `All in detail ↗` },

  'hero-name': {
    de: `<span class="word-wrap"><span class="word" style="--d:60ms;">Hi,</span></span>
         <span class="word-wrap"><span class="word" style="--d:110ms;">ich</span></span>
         <span class="word-wrap"><span class="word" style="--d:160ms;">bin</span></span>
         <span class="word-wrap"><span class="word" style="--d:210ms;">Meisam.</span></span>`,
    en: `<span class="word-wrap"><span class="word" style="--d:60ms;">Hi,</span></span>
         <span class="word-wrap"><span class="word" style="--d:110ms;">I'm</span></span>
         <span class="word-wrap"><span class="word" style="--d:160ms;">Meisam.</span></span>`
  },
  'hero-sub': {
    de: `Mein Weg zum Softwareentwickler.`,
    en: `My path to becoming a software developer.`
  },
  'scroll-hint': {
    de: `<span>&#8595;</span> Scrollen`,
    en: `<span>&#8595;</span> Scroll`
  },

  'projekte-eyebrow': { de: `Meine Projekte`, en: `My Projects` },
  'projekte-h2':      { de: `Was ich gebaut habe.`, en: `What I've built.` },
  'projekte-sub':     { de: `Ich designe und skizziere die Ideen — gebaut hat sie Claude.`, en: `I design and sketch out the ideas — Claude built them.` },
  'projekte-alllink': { de: `Alle Projekte im Detail ↗`, en: `All projects in detail ↗` },

  'set-tag':      { de: `Gym`, en: `Gym` },
  'set-headline': { de: `Einfacher Trainings-Tracker.`, en: `A simple workout tracker.` },
  'set-text':     { de: `Ich wollte einen eigenen Trainings-Tracker bauen — mit genau den Funktionen, die mir wichtig sind.`, en: `I wanted to build my own workout tracker — with exactly the features that matter to me.` },
  'set-cap-training':  { de: `<strong>Training</strong>Sätze mit Gewicht & Wiederholungen loggen.`, en: `<strong>Training</strong>Log sets with weight & reps.` },
  'set-cap-dashboard': { de: `<strong>Dashboard</strong>Fortschritt, Rekorde und Trainingstage im Blick.`, en: `<strong>Dashboard</strong>Progress, records and training days at a glance.` },
  'set-cap-ernaehrung':{ de: `<strong>Ernährung</strong>Mahlzeit per KI-Freitext schätzen lassen.`, en: `<strong>Nutrition</strong>Estimate meals from free text via AI.` },
  'set-cap-gewicht':   { de: `<strong>Gewicht</strong>Körpergewicht eintragen, Trend verfolgen.`, en: `<strong>Weight</strong>Log body weight, track the trend.` },

  'mol-tag':      { de: `Musik`, en: `Music` },
  'mol-headline': { de: `Musik-Player, wie ich ihn wollte.`, en: `The music player I actually wanted.` },
  'mol-text':     { de: `Ich wollte eine eigene, schlanke Oberfläche für Spotify bauen — nur Suche, Playlists und Player-Steuerung.`, en: `I wanted to build my own, minimal Spotify interface — just search, playlists, and playback controls.` },
  'mol-cap': { de: `<strong>Kompletter Durchlauf</strong>Zuletzt gehört → suchen → abspielen mit echtem Ton, Mini-Player bleibt beim Durchblättern eines Albums aktiv.`, en: `<strong>Full walkthrough</strong>Recently played → search → play with real sound, mini player stays active while browsing an album.` },

  'crm-headline':  { de: `Internes Sales-CRM für Kaltakquise.`, en: `Internal sales CRM for cold calling.` },
  'crm-text':      { de: `Ich wollte ein CRM für einen sehr konkreten Kaltakquise-Workflow bauen — Leads importieren, anrufen, Status setzen, Wiedervorlagen.`, en: `I wanted to build a CRM for a very specific cold-calling workflow — import leads, call, set status, follow-ups.` },
  'crm-livelink':  { de: `Live im Einsatz ↗`, en: `Live ↗` },
  'axis-livelink': { de: `Live im Einsatz ↗`, en: `Live ↗` },
  'crm-overlay':   { de: `Klicken zum Interagieren`, en: `Click to interact` },
  'crm-demonote':  { de: `Nachbau mit Demo-Daten, kein Backend — Login oben als Setter oder Admin, frei durchklickbar.`, en: `Rebuilt with demo data, no backend — log in above as Setter or Admin, click through freely.` },

  'meizo-headline': { de: `Operations-SaaS für Reinigungs-Betriebe.`, en: `Operations SaaS for cleaning businesses.` },
  'meizo-text':     { de: `Ich wollte zeigen, wie sich ein komplettes Operations-SaaS für ein Reinigungs-Business bauen lässt — mit Einsatzplanung, Zeiterfassung und Abrechnung.`, en: `I wanted to show how a full operations SaaS for a cleaning business could be built — with job scheduling, time tracking, and billing.` },
  'meizo-cap-einsaetze':    { de: `<strong>Einsätze</strong>Dashboard mit Live-Übersicht über Mitarbeiter und geplante Einsätze.`, en: `<strong>Jobs</strong>Dashboard with a live overview of staff and scheduled jobs.` },
  'meizo-cap-krankmeldung':{ de: `<strong>Krankmeldung</strong>Automatischer Ersatz-Dispatch — freien Mitarbeiter finden und zuweisen.`, en: `<strong>Sick leave</strong>Automatic replacement dispatch — finds and assigns an available employee.` },
  'meizo-cap-checkin':     { de: `<strong>Zeiterfassung</strong>Ein- und Auschecken per GPS in der Mitarbeiter-App.`, en: `<strong>Time tracking</strong>GPS check-in and check-out in the employee app.` },
  'meizo-cap-abrechnung':  { de: `<strong>Abrechnung</strong>Fertiger CSV-Export mit GPS-verifizierten Stunden für DATEV.`, en: `<strong>Billing</strong>Ready-made CSV export with GPS-verified hours for DATEV (German payroll).` },


  'werdegang-eyebrow': { de: `Werdegang`, en: `Background` },
  'werdegang-h2':      { de: `Das lerne ich aktuell.`, en: `What I'm learning right now.` },
  'werdegang-sub':     { de: `Ich lerne gerade programmieren — auf Codecademy, nebenbei. Weil ich später beruflich in diese Richtung will und es wirklich verstehen möchte, nicht nur oberflächlich mit KI zusammenklicken.`, en: `I'm learning to program right now — on Codecademy, alongside everything else. Because I want a career in this direction and want to actually understand it, not just assemble things superficially with AI.` },
  'werdegang-link':    { de: `Codecademy-Profil ↗`, en: `Codecademy Profile ↗` },
  'werdegang-projects-heading': { de: `Meine Lernprojekte`, en: `My learning projects` },
  'todo-badge':      { de: `Übung · Ohne KI`, en: `Exercise · No AI` },
  'todo-tagline':    { de: `Meine erste eigene App — reines HTML, CSS und JavaScript.`, en: `My first own app — plain HTML, CSS and JavaScript.` },
  'todo-meta-first': { de: `Erstes Projekt`, en: `First project` },
  'notizen-tagline':      { de: `Notizen-App mit React (useState, Vite) — Notizen hinzufügen und löschen.`, en: `Notes app built with React (useState, Vite) — add and delete notes.` },
  'notizen-meta-second':  { de: `Zweites Projekt`, en: `Second project` },
  'moviepicker-tagline':  { de: `Filmsuche mit React (useState, Vite) — Live-Suche gegen die OMDb-API, Ergebnisse anklicken für Details.`, en: `Movie search built with React (useState, Vite) — live search against the OMDb API, click a result for details.` },
  'moviepicker-meta-third': { de: `Drittes Projekt`, en: `Third project` },
  'weatherapp-tagline':    { de: `Wetter-App mit React (useState, useEffect, Vite) — Stadt eingeben, aktuelles Wetter über die OpenWeatherMap-API abrufen.`, en: `Weather app built with React (useState, useEffect, Vite) — enter a city, fetch current weather via the OpenWeatherMap API.` },
  'weatherapp-meta-fourth': { de: `Viertes Projekt`, en: `Fourth project` },
  'leadflow-badge': { de: `Eigenes Projekt · CSS mit KI`, en: `Own project · CSS with AI` },
  'leadflow-tagline': { de: `Kleines Lead-Management mit React und TypeScript: Leads anlegen, suchen, bearbeiten und löschen. Das CSS ist bewusst schlicht und mit KI entstanden — mein Fokus lag auf der Programmierlogik.`, en: `A small lead-management app built with React and TypeScript: add, search, edit and delete leads. The CSS is deliberately simple and was created with AI — my focus was on the programming logic.` },
  'leadflow-meta': { de: `Programmierung im Fokus`, en: `Programming-focused` },

  'kontakt-eyebrow': { de: `Kontakt`, en: `Contact` },

  'axis-headline': { de: `Ein Finance-Cockpit, das meine Bank &amp; mein Postfach versteht.`, en: `A finance cockpit that understands my bank &amp; inbox.` },
  'axis-text': { de: `Ich wollte auf einen Blick sehen, was reinkommt, was rausgeht und was bald fällig ist — an einem Ort. Also hab ich mir ein Cockpit gebaut, das Bank, Gmail und eine KI kombiniert.`, en: `I wanted to see at a glance what's coming in, what's going out, and what's due soon — all in one place. So I built a cockpit that combines my bank, Gmail, and an AI.` },
  'axis-cap-home':     { de: `Echter Kontostand, Konten &amp; Boxes, Transaktionen im Blick.`, en: `Real balance, accounts &amp; boxes, transactions at a glance.` },
  'axis-cap-debts':    { de: `Abos, Rechnungen und Raten mit Fortschritts-Gauge.`, en: `Subscriptions, invoices and installments with a progress gauge.` },
  'axis-cap-chat':     { de: `KI-Assistent mit Function-Calling, liest auch Belegfotos.`, en: `AI assistant with function-calling, also reads receipt photos.` },
  'axis-cap-settings': { de: `Bank &amp; Gmail verbinden, trennen, Einkommen setzen.`, en: `Connect or disconnect bank &amp; Gmail, set income.` },
  'axis-demonote': { de: `Screenshots mit frei erfundenen Kontoständen, Namen und Beträgen — keine echten Finanzdaten. Privates Tool für mich und meine Familie, kein öffentlicher Zugang.`, en: `Screenshots with entirely made-up balances, names and amounts — no real financial data. A private tool for me and my family, no public access.` }
};

const I18N_PROJEKTE = {
  'nav-back': { de: `← Startseite`, en: `← Home` },
  'nav-nurich': { de: `Nur ich`, en: `Just me` },

  'intro-eyebrow': { de: `Projekte`, en: `Projects` },
  'intro-title':   { de: `Drei Probleme, die ich mir selbst gelöst habe.`, en: `Three problems I solved for myself.` },
  'intro-sub':     { de: `Kein Auftrag, kein Kunde — jedes dieser Projekte ist entstanden, weil ich für ein eigenes Problem nichts Passendes gefunden habe. Hier die ausführliche Version mit Ausgangslage, Entscheidungen, Tech-Stack und einer Demo zum Ausprobieren.`, en: `No client, no brief — each of these projects exists because I couldn't find the right thing on the market for a problem of my own. Here's the full version: background, decisions, tech stack, and a demo to try.` },

  'group-ai-eyebrow': { de: `Kategorie`, en: `Category` },
  'group-ai-title':   { de: `Mit KI gebaut.`, en: `Built with AI.` },
  'group-ai-sub':     { de: `Ich designe, skizziere und treffe die Entscheidungen — gebaut haben sie Claude und ich gemeinsam.`, en: `I design, sketch and make the decisions — Claude and I built them together.` },

  'group-solo-eyebrow': { de: `Kategorie`, en: `Category` },
  'group-solo-title':   { de: `Eigene Lernprojekte.`, en: `My own learning projects.` },
  'group-solo-sub':     { de: `Hier lerne ich, wirklich selbst zu programmieren. Die ersten vier Übungen sind ganz ohne KI entstanden; bei LeadFlow ist nur das schlichte CSS mit KI entstanden — der Fokus lag auf meiner Programmierlogik.`, en: `This is where I'm learning to program for real. The first four exercises were made without AI; for LeadFlow, only the simple CSS was created with AI — my focus was on the programming logic.` },
  'group-solo-link':    { de: `Codecademy-Profil ↗`, en: `Codecademy Profile ↗` },
  'todo-tagline':       { de: `Meine erste eigene App — reines HTML, CSS und JavaScript.`, en: `My first own app — plain HTML, CSS and JavaScript.` },
  'todo-link-source':   { de: `To-Do — Quellcode ↗`, en: `To-Do — source code ↗` },
  'todo-badge':         { de: `Übung · Ohne KI`, en: `Exercise · No AI` },
  'todo-meta-first':    { de: `Erstes Projekt`, en: `First project` },
  'notizen-tagline':    { de: `Notizen-App mit React (useState, Vite) — Notizen hinzufügen und löschen.`, en: `Notes app built with React (useState, Vite) — add and delete notes.` },
  'notizen-link-source':{ de: `Notizen — Quellcode ↗`, en: `Notes — source code ↗` },
  'notizen-meta-second':{ de: `Zweites Projekt`, en: `Second project` },
  'moviepicker-tagline':    { de: `Filmsuche mit React (useState, Vite) — Live-Suche gegen die OMDb-API, Ergebnisse anklicken für Details.`, en: `Movie search built with React (useState, Vite) — live search against the OMDb API, click a result for details.` },
  'moviepicker-link-source':{ de: `MoviePicker — Quellcode ↗`, en: `MoviePicker — source code ↗` },
  'moviepicker-meta-third': { de: `Drittes Projekt`, en: `Third project` },
  'weatherapp-tagline':      { de: `Wetter-App mit React (useState, useEffect, Vite) — Stadt eingeben, aktuelles Wetter über die OpenWeatherMap-API abrufen.`, en: `Weather app built with React (useState, useEffect, Vite) — enter a city, fetch current weather via the OpenWeatherMap API.` },
  'weatherapp-link-source':  { de: `Wetter App — Quellcode ↗`, en: `Weather app — source code ↗` },
  'weatherapp-meta-fourth':  { de: `Viertes Projekt`, en: `Fourth project` },
  'leadflow-badge':          { de: `Eigenes Projekt · CSS mit KI`, en: `Own project · CSS with AI` },
  'leadflow-tagline':        { de: `Kleines Lead-Management mit React und TypeScript: Leads anlegen, suchen, bearbeiten und löschen. Das CSS ist bewusst schlicht und mit KI entstanden — mein Fokus lag auf der Programmierlogik.`, en: `A small lead-management app built with React and TypeScript: add, search, edit and delete leads. The CSS is deliberately simple and was created with AI — my focus was on the programming logic.` },
  'leadflow-meta':           { de: `Programmierung im Fokus`, en: `Programming-focused` },
  'leadflow-link-source':    { de: `LeadFlow — Quellcode ↗`, en: `LeadFlow — source code ↗` },
  'werdegang-projects-heading': { de: `Meine Lernprojekte ohne KI`, en: `My learning projects without AI` },

  'group-more-eyebrow': { de: `Außerdem`, en: `Also` },
  'group-more-sub':     { de: `Zwei weitere Experimente, aus der Haupt-Auswahl raus, aber noch da.`, en: `Two more experiments — outside the main selection, but still here.` },

  'set-num':     { de: `02 · Fitness`, en: `02 · Fitness` },
  'set-tagline': { de: `Ein Trainings-Tracker ohne Ballast — als installierbare App.`, en: `A workout tracker without the bloat — installable as an app.` },
  'h-ausgangslage': { de: `Ausgangslage`, en: `Background` },
  'h-loesung':      { de: `Lösung`, en: `Solution` },
  'set-ausgangslage-p': { de: `Ich wollte mein Training nach Splits loggen können — Push/Pull/Legs, eigene Übungen, Sätze mit Gewicht und Wiederholungen — und dabei sauber sehen, ob ich mich von Woche zu Woche steigere.`, en: `I wanted to be able to log my training by splits — Push/Pull/Legs, custom exercises, sets with weight and reps — and clearly see whether I'm progressing week over week.` },
  'set-loesung-p':      { de: `Eine eigene Progressive Web App — installierbar auf dem Homescreen, offlinefähig über einen Service Worker, ohne App-Store-Umweg. Splits und Übungen sind frei konfigurierbar, jeder Satz wird beim Eintippen automatisch (debounced) gespeichert. Auswertung läuft komplett über selbst gezeichnete Canvas-Charts statt einer externen Chart-Bibliothek.`, en: `My own Progressive Web App — installable on the home screen, offline-capable via a service worker, no App Store detour. Splits and exercises are freely configurable, every set is saved automatically (debounced) as you type. Analysis runs entirely on custom-drawn Canvas charts instead of an external charting library.` },
  'set-feat-1': { de: `Splits & Übungen frei anlegen, inkl. Bodyweight-Übungen`, en: `Freely create splits & exercises, including bodyweight moves` },
  'set-feat-2': { de: `Satz-Logging mit Gewicht/Wiederholungen, "letztes Training übernehmen"`, en: `Set logging with weight/reps, "copy last workout"` },
  'set-feat-3': { de: `Volumen-Trend & persönliche Rekorde pro Übung`, en: `Volume trend & personal records per exercise` },
  'set-feat-4': { de: `Streak-Heatmap der letzten vier Trainingswochen`, en: `Streak heatmap of the last four training weeks` },
  'set-feat-5': { de: `Kalorien- & Makro-Tracking, Mahlzeiten per KI-Freitext geschätzt ("4 Eier mit Ketchup" → automatisch kcal)`, en: `Calorie & macro tracking, meals estimated from free text via AI ("4 eggs with ketchup" → automatic kcal)` },
  'set-feat-6': { de: `Körpergewicht-Verlauf mit 30-Tage-Trend`, en: `Body weight history with a 30-day trend` },
  'link-live':  { de: `Live im Einsatz ↗`, en: `Live ↗` },
  'set-cap-training':  { de: `<strong>Training</strong>Sätze mit Gewicht & Wiederholungen loggen.`, en: `<strong>Training</strong>Log sets with weight & reps.` },
  'set-cap-dashboard': { de: `<strong>Dashboard</strong>Fortschritt, Rekorde und Trainingstage im Blick.`, en: `<strong>Dashboard</strong>Progress, records and training days at a glance.` },
  'set-cap-ernaehrung':{ de: `<strong>Ernährung</strong>Mahlzeit per KI-Freitext schätzen lassen.`, en: `<strong>Nutrition</strong>Estimate meals from free text via AI.` },
  'set-cap-gewicht':   { de: `<strong>Gewicht</strong>Körpergewicht eintragen, Trend verfolgen.`, en: `<strong>Weight</strong>Log body weight, track the trend.` },
  'set-demonote': { de: `Aufgenommen direkt in der App — kein gestelltes Mockup.`, en: `Recorded directly in the app — not a staged mockup.` },

  'mol-num':     { de: `04 · Musik`, en: `04 · Music` },
  'mol-tagline': { de: `Ein eigenes, minimales Interface für Spotify.`, en: `My own, minimal interface for Spotify.` },
  'mol-ausgangslage-p': { de: `Ich höre Musik meistens sehr gezielt — suchen, abspielen, weiter. Ich wollte eine Oberfläche bauen, die nur das kann: Suche, Playlists, Player-Steuerung, ohne alles drumherum.`, en: `I usually listen to music very deliberately — search, play, next. I wanted to build an interface that only does that: search, playlists, playback controls, nothing else.` },
  'mol-loesung-p':      { de: `Ein reines Frontend, das direkt gegen die Spotify Web API und das Web Playback SDK spricht. Anmeldung läuft über den OAuth-Authorization-Code-Flow mit PKCE — dadurch ist kein eigenes Backend und kein Client Secret nötig, der Login bleibt trotzdem sicher.`, en: `A pure frontend that talks directly to the Spotify Web API and the Web Playback SDK. Login runs on the OAuth authorization-code flow with PKCE — no backend or client secret needed, while login stays secure.` },
  'mol-feat-1': { de: `Sicherer Login per PKCE, ganz ohne eigenen Server`, en: `Secure login via PKCE, with no server of its own` },
  'mol-feat-2': { de: `Songsuche direkt über die Spotify-API`, en: `Song search straight through the Spotify API` },
  'mol-feat-3': { de: `Personalisierte Startseite: "Zuletzt gehört", Alben & Playlists`, en: `Personalized homepage: "Recently played", albums & playlists` },
  'mol-feat-4': { de: `Vollflächiger Player: Cover, Fortschritt, Shuffle & Repeat`, en: `Full-screen player: cover art, progress, shuffle & repeat` },
  'mol-feat-5': { de: `Mini-Player bleibt beim Weiterstöbern aktiv`, en: `Mini player stays active while you keep browsing` },
  'mol-feat-6': { de: `Kein zusätzlicher Client — läuft komplett im Browser`, en: `No extra client — runs entirely in the browser` },
  'mol-demonote1': { de: `Zum Testen der Live-Demo ist ein Spotify-Premium-Account nötig (Voraussetzung des Web Playback SDK). Ohne Premium zeigt das Video unten die volle Funktionalität mit echtem Ton.`, en: `Testing the live demo requires a Spotify Premium account (a requirement of the Web Playback SDK). Without Premium, the video below shows the full functionality with real sound.` },
  'mol-cap': { de: `<strong>Kompletter Durchlauf</strong>Zuletzt gehört → suchen → abspielen mit echtem Ton, Mini-Player bleibt beim Durchblättern eines Albums aktiv.`, en: `<strong>Full walkthrough</strong>Recently played → search → play with real sound, mini player stays active while browsing an album.` },
  'mol-demonote2': { de: `Aufgenommen direkt in der App, mit Ton — kein gestelltes Mockup.`, en: `Recorded directly in the app, with sound — not a staged mockup.` },

  'crm-num':     { de: `02 · Sales`, en: `02 · Sales` },
  'crm-tagline': { de: `Ein internes CRM für Kaltakquise-Workflows.`, en: `An internal CRM for cold-calling workflows.` },
  'crm-ausgangslage-p': { de: `Für Kaltakquise per Telefon braucht man einen sehr konkreten Workflow: Leads importieren, anrufen, Status setzen, Wiedervorlagen nicht vergessen. Ich wollte ein CRM bauen, das genau darauf zugeschnitten ist, statt eine allgemeine Lösung anzupassen.`, en: `Cold calling needs a very specific workflow: import leads, call, set status, don't forget follow-ups. I wanted to build a CRM tailored exactly to that, instead of adapting a generic solution.` },
  'crm-loesung-p':      { de: `Ein internes CRM, exakt auf diesen Ablauf zugeschnitten. Leads lassen sich per CSV importieren (mit Duplikatserkennung), die Pipeline ist ein Kanban-Board mit frei konfigurierbaren, farbcodierten Status-Spalten. Zugriff ist rollenbasiert zwischen Setter und Admin getrennt, abgesichert über eine eigene Session-Middleware.`, en: `An internal CRM built exactly for this workflow. Leads import via CSV (with duplicate detection), the pipeline is a Kanban board with freely configurable, color-coded status columns. Access is role-based between Setter and Admin, secured through custom session middleware.` },
  'crm-feat-1': { de: `Kanban-Pipeline mit Drag & Drop, auch touch-fähig`, en: `Kanban pipeline with drag & drop, touch-friendly too` },
  'crm-feat-2': { de: `Frei konfigurierbare Status-Spalten mit eigenen Farben`, en: `Freely configurable status columns with custom colors` },
  'crm-feat-3': { de: `Wiedervorlage-System für fällige Rückrufe`, en: `Follow-up system for calls that are due` },
  'crm-feat-4': { de: `CSV-Import mit automatischer Duplikatserkennung`, en: `CSV import with automatic duplicate detection` },
  'crm-feat-5': { de: `Rollenbasierter Zugriff: Setter vs. Admin`, en: `Role-based access: Setter vs. Admin` },
  'crm-feat-6': { de: `Dialer mit Warteschlangen-Modi, Tagesziel & Streak-Gamification`, en: `Dialer with queue modes, daily goals & streak gamification` },
  'crm-feat-7': { de: `Team-Dashboard mit Leaderboard, Conversion & Anrufzeiten-Analyse`, en: `Team dashboard with leaderboard, conversion & call-time analysis` },
  'crm-feat-8': { de: `E-Mail-Composer mit Live-Vorschau und direktem Gmail-Versand`, en: `Email composer with live preview and direct Gmail sending` },
  'crm-feat-9': { de: `Admin-Bereich: Nutzerverwaltung, Listen-Import, Aktivitätslog`, en: `Admin area: user management, list import, activity log` },
  'crm-link-mockup': { de: `Mockup in neuem Tab öffnen ↗`, en: `Open mockup in new tab ↗` },
  'crm-overlay': { de: `Klicken zum Interagieren`, en: `Click to interact` },
  'crm-demonote': { de: `Vollständiger Nachbau mit Demo-Daten, keine Aufnahmen — jede Seite lässt sich frei durchklicken: Dashboard, Leads, Kanban, Dialer, E-Mails und Admin-Panel (Login oben als Setter oder Admin). Kein Backend, keine echten Kundendaten — Änderungen verschwinden beim Neuladen.`, en: `A full rebuild with demo data, no recordings — every screen is fully clickable: dashboard, leads, Kanban, dialer, emails, and admin panel (log in above as Setter or Admin). No backend, no real customer data — changes disappear on reload.` },

  'meizo-num':     { de: `03 · Operations`, en: `03 · Operations` },
  'meizo-tagline': { de: `Eine SaaS-Plattform für Einsatzplanung, Zeiterfassung und Abrechnung im Reinigungs-Business.`, en: `A SaaS platform for job scheduling, time tracking, and billing in the cleaning business.` },
  'meizo-ausgangslage-p': { de: `Reinigungs-Betriebe brauchen Einsatzplanung, Zeiterfassung mit Nachweis und eine saubere Lohnabrechnung. Ich wollte eine Software bauen, die das für ein kleines Team abdeckt — inklusive echter DATEV-Anbindung.`, en: `Cleaning businesses need job scheduling, verifiable time tracking, and clean payroll. I wanted to build software that covers this for a small team — including a real DATEV integration.` },
  'meizo-loesung-p':      { de: `Eine mandantenfähige SaaS-Plattform mit vier Oberflächen in einem System: Dashboard für den Inhaber, eigene App für die Mitarbeiter, ein Kunden-Portal ohne Login und Verwaltung für den Plattform-Betreiber. Mit Stripe-Abrechnung und automatischem Seat-Sync, ausgelegt auf mehrere Firmen gleichzeitig.`, en: `A multi-tenant SaaS platform with four interfaces in one system: a dashboard for the owner, a dedicated app for employees, a login-free customer portal, and management tools for the platform operator. Built with Stripe billing and automatic seat sync, designed to support multiple companies at once.` },
  'meizo-feat-1': { de: `Live-Dashboard: Mitarbeiter, Einsätze und Krankmeldungen auf einen Blick`, en: `Live dashboard: staff, jobs and sick leave at a glance` },
  'meizo-feat-2': { de: `Einsatzplanung per Drag & Drop, automatischer Ersatz-Dispatch bei Krankmeldung`, en: `Drag-and-drop job scheduling, automatic replacement dispatch on sick leave` },
  'meizo-feat-3': { de: `Zeiterfassung mit GPS & Foto — funktioniert auch offline`, en: `Time tracking with GPS & photo — works offline too` },
  'meizo-feat-4': { de: `Echter DATEV-Export: Soll-Ist-Stunden, Bewegungsdaten, PDF & CSV`, en: `Real DATEV export: target vs. actual hours, movement data, PDF & CSV` },
  'meizo-feat-5': { de: `Kunden-Portal ohne Login: Nachweise, Checkliste, nächster Termin`, en: `Login-free customer portal: proof of service, checklist, next appointment` },
  'meizo-feat-6': { de: `Mitarbeiter-App in 7 Sprachen mit Push-Benachrichtigungen`, en: `Employee app in 7 languages with push notifications` },
  'meizo-feat-7': { de: `Controlling: Umsatz, Kosten und Marge pro Objekt`, en: `Controlling: revenue, costs and margin per site` },
  'meizo-feat-8': { de: `Plattform-Admin für mehrere Firmen gleichzeitig`, en: `Platform admin for multiple companies at once` },
  'meizo-feat-9': { de: `Stripe-Abrechnung mit automatischem Seat-Sync, installierbare PWA`, en: `Stripe billing with automatic seat sync, installable PWA` },
  'meizo-cap-einsaetze':    { de: `<strong>Einsätze</strong>Dashboard mit Live-Übersicht über Mitarbeiter und geplante Einsätze.`, en: `<strong>Jobs</strong>Dashboard with a live overview of staff and scheduled jobs.` },
  'meizo-cap-krankmeldung':{ de: `<strong>Krankmeldung</strong>Automatischer Ersatz-Dispatch — freien Mitarbeiter finden und zuweisen.`, en: `<strong>Sick leave</strong>Automatic replacement dispatch — finds and assigns an available employee.` },
  'meizo-cap-checkin':     { de: `<strong>Zeiterfassung</strong>Ein- und Auschecken per GPS in der Mitarbeiter-App.`, en: `<strong>Time tracking</strong>GPS check-in and check-out in the employee app.` },
  'meizo-cap-abrechnung':  { de: `<strong>Abrechnung</strong>Fertiger CSV-Export mit GPS-verifizierten Stunden für DATEV.`, en: `<strong>Billing</strong>Ready-made CSV export with GPS-verified hours for DATEV (German payroll).` },
  'meizo-demonote': { de: `Aufnahmen aus der echten Anwendung — Dashboard, Krankmeldung-Dispatch, Mitarbeiter-App und Abrechnung.`, en: `Footage from the real application — dashboard, sick-leave dispatch, employee app and billing.` },

  'axis-num':     { de: `01 · Finance`, en: `01 · Finance` },
  'axis-tagline': { de: `Ein privates Finance-Cockpit mit echter Bank-Anbindung und einem KI-Assistenten, der mitschreibt.`, en: `A private finance cockpit with real bank integration and an AI assistant that keeps records.` },
  'axis-ausgangslage-p': { de: `Ich wollte ausprobieren, ob sich Kontostand, laufende Abos, offene Rechnungen und Raten sinnvoll an einem Ort verbinden lassen, statt über eine Banking-App, Gmail und eine Excel-Tabelle verteilt zu sein.`, en: `I wanted to try out whether balance, running subscriptions, open invoices, and installments could meaningfully come together in one place, instead of being spread across a banking app, Gmail, and a spreadsheet.` },
  'axis-loesung-p': { de: `Eine private PWA für mich und meine Familie: echte Kontoanbindung über Enable Banking (Open Banking/PSD2, mehrere Banken und Fintechs gleichzeitig), automatisches Mitlesen von Rechnungsmails in Gmail, und ein KI-Assistent mit Function-Calling, der Buchungen nicht nur anzeigt, sondern auch anlegt, kategorisiert und bei Unsicherheit gezielt nachfragt — die Antwort merkt er sich dauerhaft pro Empfänger.`, en: `A private PWA for me and my family: real account access via Enable Banking (open banking/PSD2, multiple banks and fintechs at once), automatic reading of invoice emails in Gmail, and an AI assistant with function-calling that doesn't just display transactions but creates, categorizes, and — when unsure — asks a targeted question, remembering the answer permanently per recipient.` },
  'axis-feat-1': { de: `Echte Kontoanbindung über Enable Banking, mehrere Banken/Fintechs gleichzeitig`, en: `Real account access via Enable Banking, multiple banks/fintechs at once` },
  'axis-feat-2': { de: `Gmail-Sync liest Rechnungs- und Kaufbestätigungsmails automatisch aus`, en: `Gmail sync automatically reads invoice and purchase-confirmation emails` },
  'axis-feat-3': { de: `KI-Assistent mit Function-Calling: legt Buchungen und Debts selbst an, ändert und verschiebt sie`, en: `AI assistant with function-calling: creates, edits and moves transactions and debts itself` },
  'axis-feat-4': { de: `Beleg-Fotos werden direkt im Chat ausgelesen und automatisch eingetragen`, en: `Receipt photos are read directly in chat and logged automatically` },
  'axis-feat-5': { de: `Automatische Abo-Erkennung, mit expliziter Rückfrage bei Unsicherheit (z. B. Klarna/PayPal)`, en: `Automatic subscription detection, with an explicit follow-up question when unsure (e.g. Klarna/PayPal)` },
  'axis-feat-6': { de: `Drei Debt-Kategorien: Abos, Rechnungen mit freien Tags, Raten mit Fortschritts-Gauge`, en: `Three debt categories: subscriptions, invoices with custom tags, installments with a progress gauge` },
  'axis-feat-7': { de: `Proaktive Hinweise im Chat: Preiserhöhungen, fällige Rechnungen, ungewöhnliche Ausgaben`, en: `Proactive chat alerts: price increases, upcoming due dates, unusual spending` },
  'axis-feat-8': { de: `Täglicher Cron-Sync für Bank und Gmail, keine manuelle Aktualisierung nötig`, en: `Daily cron sync for bank and Gmail, no manual refresh needed` },
  'axis-feat-9': { de: `Installierbare PWA, Verbindungen jederzeit trennbar in den Einstellungen`, en: `Installable PWA, connections can be disconnected anytime in settings` },
  'axis-cap-home':     { de: `Echter Kontostand, Konten &amp; Boxes, Transaktionen im Blick.`, en: `Real balance, accounts &amp; boxes, transactions at a glance.` },
  'axis-cap-debts':    { de: `Abos, Rechnungen und Raten mit Fortschritts-Gauge.`, en: `Subscriptions, invoices and installments with a progress gauge.` },
  'axis-cap-chat':     { de: `KI-Assistent mit Function-Calling, liest auch Belegfotos.`, en: `AI assistant with function-calling, also reads receipt photos.` },
  'axis-cap-settings': { de: `Bank &amp; Gmail verbinden, trennen, Einkommen setzen.`, en: `Connect or disconnect bank &amp; Gmail, set income.` },
  'axis-demonote': { de: `Screenshots mit frei erfundenen Kontoständen, Namen und Beträgen — keine echten Finanzdaten. Privates Tool für mich und meine Familie, kein öffentlicher Zugang.`, en: `Screenshots with entirely made-up balances, names and amounts — no real financial data. A private tool for me and my family, no public access.` },

  'close-name': { de: `Kontakt`, en: `Contact` },
  'close-backlink': { de: `← Zurück zur Startseite`, en: `← Back to homepage` }
};

/* Wendet ein Wörterbuch auf alle [data-i18n]-Elemente an und richtet den
   DE/EN-Umschalter in der Nav ein. Merkt sich die Wahl in localStorage. */
function initI18n(dict){
  function applyLang(lang){
    document.documentElement.lang = lang;
    document.querySelectorAll('[data-i18n]').forEach(el=>{
      const entry = dict[el.getAttribute('data-i18n')];
      if(entry && entry[lang] !== undefined) el.innerHTML = entry[lang];
    });
    document.querySelectorAll('.lang-opt').forEach(o=>{
      o.classList.toggle('active', o.dataset.lang === lang);
    });
  }
  const stored = (()=>{ try{ return localStorage.getItem('site-lang'); }catch(e){ return null; } })();
  const initialLang = stored === 'en' ? 'en' : 'de';
  applyLang(initialLang);

  document.querySelectorAll('.lang-switch .lang-opt').forEach(opt=>{
    opt.addEventListener('click', ()=>{
      const lang = opt.dataset.lang;
      try{ localStorage.setItem('site-lang', lang); }catch(e){}
      applyLang(lang);
    });
  });
}
