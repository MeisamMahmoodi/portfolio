/* Zweisprachige Inhalte (DE/EN) + Sprachumschalter-Logik.
   Nur Elemente mit [data-i18n] werden angefasst — alles andere (Markennamen,
   Tech-Stack-Pills, E-Mail-Adressen etc.) bleibt in beiden Sprachen identisch
   und wird nicht angerührt. */

const I18N_INDEX = {
  'nav-projekte':   { de: `Projekte`, en: `Projects` },
  'nav-prinzipien': { de: `Prinzipien`, en: `Principles` },
  'nav-angebot':    { de: `Angebot`, en: `Services` },
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
    de: `Fehlt mir eine App, bau ich sie mir selbst. Ein paar Beispiele davon findest du hier.`,
    en: `If an app doesn't exist, I build it myself. Here are a few examples.`
  },
  'scroll-hint': {
    de: `<span>&#8595;</span> Scrollen`,
    en: `<span>&#8595;</span> Scroll`
  },

  'projekte-eyebrow': { de: `Meine Projekte`, en: `My Projects` },
  'projekte-h2':      { de: `Was ich gebaut habe.`, en: `What I've built.` },
  'projekte-alllink': { de: `Alle Projekte im Detail ↗`, en: `All projects in detail ↗` },

  'set-tag':      { de: `Gym`, en: `Gym` },
  'set-headline': { de: `Einfacher Trainings-Tracker.`, en: `A simple workout tracker.` },
  'set-text':     { de: `Keine Trainings-App hat genau das gemacht, was ich wollte. Also hab ich sie selbst gebaut.`, en: `No workout app did exactly what I wanted. So I built my own.` },
  'set-cap-training':  { de: `<strong>Training</strong>Sätze mit Gewicht & Wiederholungen loggen.`, en: `<strong>Training</strong>Log sets with weight & reps.` },
  'set-cap-dashboard': { de: `<strong>Dashboard</strong>Fortschritt, Rekorde und Trainingstage im Blick.`, en: `<strong>Dashboard</strong>Progress, records and training days at a glance.` },
  'set-cap-ernaehrung':{ de: `<strong>Ernährung</strong>Mahlzeit per KI-Freitext schätzen lassen.`, en: `<strong>Nutrition</strong>Estimate meals from free text via AI.` },
  'set-cap-gewicht':   { de: `<strong>Gewicht</strong>Körpergewicht eintragen, Trend verfolgen.`, en: `<strong>Weight</strong>Log body weight, track the trend.` },

  'mol-tag':      { de: `Musik`, en: `Music` },
  'mol-headline': { de: `Musik-Player, wie ich ihn wollte.`, en: `The music player I actually wanted.` },
  'mol-text':     { de: `Kein Musik-Player hat sich richtig angefühlt, also hab ich mir meinen eigenen gebaut.`, en: `No music player felt right, so I built my own.` },
  'mol-cap': { de: `<strong>Kompletter Durchlauf</strong>Zuletzt gehört → suchen → abspielen mit echtem Ton, Mini-Player bleibt beim Durchblättern eines Albums aktiv.`, en: `<strong>Full walkthrough</strong>Recently played → search → play with real sound, mini player stays active while browsing an album.` },

  'crm-headline':  { de: `Sales Pipeline für Meizo.`, en: `Sales pipeline for Meizo.` },
  'crm-text':      { de: `Für unsere Kaltakquise gab's kein CRM, das zum Ablauf passte. Also hab ich eins gebaut.`, en: `No CRM fit our cold-calling workflow. So I built one.` },
  'crm-livelink':  { de: `Live im Einsatz ↗`, en: `Live ↗` },
  'crm-overlay':   { de: `Klicken zum Interagieren`, en: `Click to interact` },
  'crm-demonote':  { de: `Nachbau mit Demo-Daten, kein Backend — Login oben als Setter oder Admin, frei durchklickbar.`, en: `Rebuilt with demo data, no backend — log in above as Setter or Admin, click through freely.` },

  'meizo-headline': { de: `Software für ein ganzes Reinigungs-Business.`, en: `Software running an entire cleaning business.` },
  'meizo-text':     { de: `Ich hab selbst ein Reinigungs-Business betrieben und nie die passende Software dafür gefunden. Also hab ich sie gebaut, mittlerweile mit eigenem Stripe-Billing für mehrere Firmen.`, en: `I ran a cleaning business myself and never found the right software for it. So I built it — now with its own Stripe billing for multiple companies.` },
  'meizo-cap-einsaetze':    { de: `<strong>Einsätze</strong>Dashboard mit Live-Übersicht über Mitarbeiter und geplante Einsätze.`, en: `<strong>Jobs</strong>Dashboard with a live overview of staff and scheduled jobs.` },
  'meizo-cap-krankmeldung':{ de: `<strong>Krankmeldung</strong>Automatischer Ersatz-Dispatch — freien Mitarbeiter finden und zuweisen.`, en: `<strong>Sick leave</strong>Automatic replacement dispatch — finds and assigns an available employee.` },
  'meizo-cap-checkin':     { de: `<strong>Zeiterfassung</strong>Ein- und Auschecken per GPS in der Mitarbeiter-App.`, en: `<strong>Time tracking</strong>GPS check-in and check-out in the employee app.` },
  'meizo-cap-abrechnung':  { de: `<strong>Abrechnung</strong>Fertiger CSV-Export mit GPS-verifizierten Stunden für DATEV.`, en: `<strong>Billing</strong>Ready-made CSV export with GPS-verified hours for DATEV (German payroll).` },

  'prinzipien-eyebrow': { de: `Prinzipien`, en: `Principles` },
  'prinzipien-h2':      { de: `Wie ich baue.`, en: `How I build.` },
  'p1-h3': { de: `Eigenbedarf`, en: `Built for myself` },
  'p1-p':  { de: `Ich will meine Kalorien tracken oder mein Training loggen. Dann schau ich mir an, was es gibt: meistens kostenpflichtig, überladen oder ohne die eine Funktion, die ich brauche. Also baue ich mir meine eigene App.`, en: `I want to track my calories or log my training. So I look at what's out there: usually paid, bloated, or missing the one feature I actually need. So I build my own app.` },
  'p2-h3': { de: `Erst machen, dann können`, en: `Learn by building` },
  'p2-p':  { de: `Ich hab keinen Plan, ich hab Lust. Was ich nicht kann, lerne ich, während ich's baue.`, en: `I don't have a plan, I have motivation. Whatever I can't do yet, I learn while building it.` },
  'p3-h3': { de: `Mit KI arbeiten`, en: `Working with AI` },
  'p3-p':  { de: `Ich schreibe nicht jede Zeile Code von Hand. Ich nutze KI, um schneller von der Idee zum Prototypen zu kommen.`, en: `I don't write every line of code by hand. I use AI to get from idea to prototype faster.` },
  'p4-h3': { de: `Ideen kombinieren`, en: `Combining ideas` },
  'p4-p':  { de: `Ich kopiere keine Lösungen. Ich nehme, was mir bei Pinterest oder in anderen Apps gefällt, und baue daraus etwas, das für mich funktioniert.`, en: `I don't copy solutions. I take what I like from Pinterest or other apps and build something out of it that works for me.` },
  'p5-h3': { de: `Disziplin`, en: `Discipline` },
  'p5-p':  { de: `Ob Trading oder Coden: Emotionen raus, Daten rein. Sonst wird es nichts.`, en: `Trading or coding, same rule: emotions out, data in. Otherwise it doesn't work.` },

  'angebot-eyebrow': { de: `Zusammenarbeit`, en: `Work with me` },
  'angebot-h2':      { de: `Das baue ich auch für andere.`, en: `I build this for others too.` },
  'angebot-sub':     { de: `Die Projekte oben sind für mich selbst entstanden. Aus demselben Antrieb baue ich auch für andere:`, en: `The projects above were built for myself. I build for others out of the same drive:` },
  'o2-h3': { de: `Automatisierungen`, en: `Automations` },
  'o2-p':  { de: `Wiederkehrende Arbeit rausnehmen: Scripts und KI-Workflows statt Copy-Paste.`, en: `Taking recurring work off your plate: scripts and AI workflows instead of copy-paste.` },
  'o3-h3': { de: `Datenbanken & Backends`, en: `Databases & Backends` },
  'o3-p':  { de: `Saubere Datenmodelle, Auth, APIs. Das Fundament, auf dem alles andere steht.`, en: `Clean data models, auth, APIs. The foundation everything else stands on.` },
  'o4-h3': { de: `SaaS & Plattformen`, en: `SaaS & Platforms` },
  'o4-p':  { de: `Mandantenfähige Software mit Billing, wie Meizo. Von einem Nutzer bis zu vielen Firmen.`, en: `Multi-tenant software with billing, like Meizo. From one user to many companies.` },
  'o1-p':  { de: `Web- und mobile Anwendungen, von der ersten Idee bis zur installierbaren PWA.`, en: `Web and mobile applications, from first idea to installable PWA.` },
  'angebot-note': { de: `Preise bespreche ich individuell je nach Umfang. Passt dein Vorhaben nicht genau in die Liste oben, schreib mir trotzdem:`, en: `Pricing is discussed individually based on scope. If your project doesn't fit exactly into the list above, reach out anyway:` }
};

const I18N_PROJEKTE = {
  'nav-back': { de: `← Startseite`, en: `← Home` },

  'intro-eyebrow': { de: `Projekte`, en: `Projects` },
  'intro-title':   { de: `Vier Probleme, die ich mir selbst gelöst habe.`, en: `Four problems I solved for myself.` },
  'intro-sub':     { de: `Kein Auftrag, kein Kunde — jedes dieser Projekte ist entstanden, weil ich für ein eigenes Problem nichts Passendes gefunden habe. Hier die ausführliche Version mit Ausgangslage, Entscheidungen, Tech-Stack und einer Demo zum Ausprobieren.`, en: `No client, no brief — each of these projects exists because I couldn't find the right thing on the market for a problem of my own. Here's the full version: background, decisions, tech stack, and a demo to try.` },

  'set-num':     { de: `01 · Fitness`, en: `01 · Fitness` },
  'set-tagline': { de: `Ein Trainings-Tracker ohne Ballast — als installierbare App.`, en: `A workout tracker without the bloat — installable as an app.` },
  'h-ausgangslage': { de: `Ausgangslage`, en: `Background` },
  'h-loesung':      { de: `Lösung`, en: `Solution` },
  'set-ausgangslage-p': { de: `Ich wollte mein Training nach Splits loggen — Push/Pull/Legs, eigene Übungen, Sätze mit Gewicht und Wiederholungen. Die meisten Gym-Apps, die ich probiert habe, waren entweder Abo-pflichtig, vollgestopft mit Social-Features, die ich nie nutze, oder haben genau die eine Sache nicht gemacht, die ich brauchte: sauber zeigen, ob ich mich von Woche zu Woche steigere.`, en: `I wanted to log my training by splits — Push/Pull/Legs, custom exercises, sets with weight and reps. Most gym apps I tried were either subscription-only, packed with social features I never use, or missed the one thing I actually needed: cleanly showing whether I'm progressing week over week.` },
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

  'mol-num':     { de: `02 · Musik`, en: `02 · Music` },
  'mol-tagline': { de: `Ein eigenes, minimales Interface für Spotify.`, en: `My own, minimal interface for Spotify.` },
  'mol-ausgangslage-p': { de: `Ich höre Musik meistens sehr gezielt — suchen, abspielen, weiter. Die offiziellen Spotify-Clients sind für genau diesen Flow überladen. Ich wollte eine Oberfläche, die nur das kann: Suche, Playlists, Player-Steuerung, ohne alles drumherum.`, en: `I usually listen to music very deliberately — search, play, next. The official Spotify clients are overloaded for exactly that flow. I wanted an interface that only does that: search, playlists, playback controls, nothing else.` },
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

  'crm-num':     { de: `03 · Sales`, en: `03 · Sales` },
  'crm-tagline': { de: `Das Rückgrat des Vertriebsteams bei Meizo.`, en: `The backbone of Meizo's sales team.` },
  'crm-ausgangslage-p': { de: `Für Kaltakquise per Telefon braucht man einen sehr konkreten Workflow: Leads importieren, anrufen, Status setzen, Wiedervorlagen nicht vergessen. Fertige CRMs waren entweder zu teuer für ein kleines Team oder zu allgemein gebaut — die typischen Telesales-Abläufe wie Wiedervorlage-Termine oder freie Pipeline-Stufen mussten wir uns dort mühsam zusammenbauen.`, en: `Cold calling needs a very specific workflow: import leads, call, set status, don't forget follow-ups. Off-the-shelf CRMs were either too expensive for a small team or too generic — typical telesales flows like follow-up dates or flexible pipeline stages had to be hacked together there.` },
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

  'meizo-num':     { de: `04 · Operations`, en: `04 · Operations` },
  'meizo-tagline': { de: `Die Software, die ein ganzes Reinigungs-Business trägt.`, en: `The software running an entire cleaning business.` },
  'meizo-ausgangslage-p': { de: `Ich habe selbst ein Reinigungs-Business betrieben und dafür Einsatzplanung, Zeiterfassung mit Nachweis und eine saubere Lohnabrechnung gebraucht. Was am Markt existierte, war entweder generische Baustellen-Software ohne DATEV-Anbindung und Kundennachweis, oder schlicht zu teuer für den Zuschnitt eines kleinen Teams.`, en: `I ran a cleaning business myself and needed job scheduling, verifiable time tracking, and clean payroll. What existed on the market was either generic construction-site software without DATEV integration and customer proof, or simply too expensive for a small team.` },
  'meizo-loesung-p':      { de: `Eine mandantenfähige SaaS-Plattform mit vier Oberflächen in einem System: Dashboard für den Inhaber, eigene App für die Mitarbeiter, ein Kunden-Portal ohne Login und Verwaltung für mich als Plattform-Betreiber. Inzwischen längst nicht mehr nur für den eigenen Betrieb — mit Stripe-Abrechnung, automatischem Seat-Sync und Platz für weitere Firmen.`, en: `A multi-tenant SaaS platform with four interfaces in one system: a dashboard for the owner, a dedicated app for employees, a login-free customer portal, and management tools for me as the platform operator. It's long outgrown just my own business — now with Stripe billing, automatic seat sync, and room for more companies.` },
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

  'close-name': { de: `Das will ich auch.`, en: `I want that too.` },
  'close-foot': { de: `Schreib mir kurz, worum es geht — ich melde mich schnell zurück.`, en: `Send me a quick note about what it's about — I'll get back to you fast.` },
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
