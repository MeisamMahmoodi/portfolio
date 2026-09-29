/* Zweisprachige Inhalte (DE/EN) + Sprachumschalter-Logik.
   Nur Elemente mit [data-i18n] werden angefasst — alles andere (Markennamen,
   Tech-Stack-Pills, E-Mail-Adressen etc.) bleibt in beiden Sprachen identisch
   und wird nicht angerührt. */

const I18N_INDEX = {
  'nav-projekte': { de: `Projekte`, en: `Projects` },
  'kontakt-eyebrow': { de: `Kontakt`, en: `Contact` },
  'about-eyebrow': { de: `Über mich`, en: `About me` },
  'about-title': { de: `Ich baue digitale Produkte, die live gehen.`, en: `I build digital products that go live.` },
  'about-p1': { de: `Ich bin Meisam. Von der ersten Planung bis zur fertigen Umsetzung baue ich digitale Produkte — Apps, Plattformen, Websites und SaaS-Systeme.`, en: `I'm Meisam. From the first plan to the finished build, I create digital products — apps, platforms, websites and SaaS systems.` },
  'about-p2': { de: `Alles aus einer Hand: Konzept, Entwicklung, Veröffentlichung und der laufende Betrieb.`, en: `Everything from one hand: concept, development, release and ongoing operation.` },
  'cta-title': { de: `Projekt in Planung? Schreib mir.`, en: `Project in the works? Write to me.` },
  'cta-sub': { de: `Beschreib kurz, was du vorhast. Ich melde mich mit einer ehrlichen Einschätzung.`, en: `Briefly describe what you have in mind. I'll get back to you with an honest assessment.` },
  'form-name': { de: `Name`, en: `Name` },
  'form-email': { de: `E-Mail`, en: `Email` },
  'form-message': { de: `Nachricht`, en: `Message` },
  'form-send': { de: `Nachricht senden`, en: `Send message` },
  'footer-mail': { de: `E-Mail`, en: `Email` },
  'footer-projects': { de: `Projekte`, en: `Projects` },


  'intro-eyebrow': { de: `Projekte`, en: `Projects` },
  'intro-title':   { de: `Laufende Projekte.`, en: `Current projects.` },
  'intro-sub':     { de: `Woran ich gerade arbeite.`, en: `What I'm working on right now.` },

  'h-ausgangslage': { de: `Ausgangslage`, en: `Background` },
  'h-loesung':      { de: `Lösung`, en: `Solution` },
  'link-live':  { de: `Live im Einsatz ↗`, en: `Live ↗` },

  'meizo-num':     { de: `05 · Operations`, en: `05 · Operations` },
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

  'civ-num': { de: `03 · Kundenprojekt`, en: `03 · Client project` },
  'civ-tagline': { de: `Die Website eines Bauingenieurbüros — live, mit Kontaktformular, Projektseiten und SEO.`, en: `The website of a civil engineering firm — live, with contact forms, project pages and SEO.` },
  'civ-ausgangslage-p': { de: `Die CivilCMC-Bauservice GmbH aus Grünwald begleitet Bauprojekte von der Planung bis zur Bauüberwachung. Für die Firma habe ich die Website neu aufgebaut: Leistungen, Referenzen und Kontakt sollten klar auffindbar sein.`, en: `CivilCMC-Bauservice GmbH from Grünwald supports construction projects from planning through site supervision. I rebuilt the company's website so that services, references and contact details are easy to find.` },
  'civ-loesung-p': { de: `Eine eigens entwickelte Next.js-Website mit Leistungs- und Projektseiten, Formularen mit echtem E-Mail-Versand und Rechtstexten. Dazu kommen die Landingpage für die App CivilLink und private Rundgang-Seiten, über die Kunden ihren 3D-Rundgang per persönlichem Link ansehen.`, en: `A custom-built Next.js website with service and project pages, forms that send real emails, and legal pages. It also includes the landing page for the CivilLink app and private tour pages where clients view their 3D tour through a personal link.` },
  'civ-feat-1': { de: `Leistungsseiten für Bauausführung, Bauüberwachung, Projektmanagement und Engineering-Consulting`, en: `Service pages for construction execution, site supervision, project management and engineering consulting` },
  'civ-feat-2': { de: `Projekt-Übersicht mit 13 Referenzprojekten, Detailseiten und Referenz-Logos der Kunden`, en: `Project overview with 13 reference projects, detail pages and client reference logos` },
  'civ-feat-3': { de: `Kontakt- und Rückruf-Formular mit echtem E-Mail-Versand statt mailto-Link`, en: `Contact and callback forms that send real emails instead of a mailto link` },
  'civ-feat-4': { de: `SEO für die lokale Suche: strukturierte Daten, Meta-Tags, Sitemap und robots`, en: `SEO for local search: structured data, meta tags, sitemap and robots` },
  'civ-feat-5': { de: `CivilLink-Landingpage mit App-Store-Anbindung, Gebühren-Transparenz und FAQ`, en: `CivilLink landing page with App Store link, fee transparency and FAQ` },
  'civ-feat-6': { de: `Datenschutzerklärung für die App und https-Weiterleitung für das Stripe-Connect-Onboarding`, en: `Privacy policy for the app and an https redirect for Stripe Connect onboarding` },
  'civ-feat-7': { de: `Private Rundgang-Seiten: persönlicher Link je Kunde, eingebetteter 3D-Rundgang, nicht indexiert`, en: `Private tour pages: personal link per client, embedded 3D tour, not indexed` },
  'civ-feat-8': { de: `Impressum, Datenschutz und Kontaktseite mit Google-Maps-Einbindung`, en: `Legal notice, privacy policy and a contact page with Google Maps` },
  'civ-feat-9': { de: `Responsives Layout, auf Mobilgeräten geprüft und nachgebessert`, en: `Responsive layout, tested and refined on mobile devices` },
  'civ-cap-home': { de: `Hero mit Leistungsübersicht und direktem Kontakt.`, en: `Hero with services overview and direct contact.` },
  'civ-cap-projects': { de: `Übersicht der Referenzprojekte.`, en: `Overview of reference projects.` },
  'civ-cap-detail': { de: `Detailseite mit Standort, Projekttyp und Leistungen.`, en: `Detail page with location, project type and services.` },
  'civ-cap-civillink': { de: `Landingpage für die App mit App-Store-Anbindung.`, en: `Landing page for the app with App Store link.` },
  'civ-demonote': { de: `Screenshots der Live-Website civilcmc.com — Auftragsarbeit für die CivilCMC-Bauservice GmbH.`, en: `Screenshots of the live website civilcmc.com — commissioned work for CivilCMC-Bauservice GmbH.` },

  'cl-num': { de: `01 · Eigenes Produkt · live`, en: `01 · Own product · live` },
  'cl-link-store': { de: `Im App Store ↗`, en: `On the App Store ↗` },
  'cl-link-web': { de: `Zur Webseite ↗`, en: `Website ↗` },
  'cl-tagline': { de: `Eine iOS-App für Aufträge am Bau — allein entwickelt, im App Store und mit ersten Nutzern.`, en: `An iOS app for construction jobs — built solo, on the App Store and with first users.` },
  'cl-ausgangslage-p': { de: `Aufträge am Bau laufen oft über Anrufe, E-Mails und Empfehlungen: Angebote sind schwer zu vergleichen, Absprachen verstreut. CivilLink bringt Ausschreibung, Angebote, Chat und Zahlung an einen Ort.`, en: `Construction jobs often run through calls, emails and word of mouth: offers are hard to compare and agreements are scattered. CivilLink brings job posting, offers, chat and payment into one place.` },
  'cl-loesung-p': { de: `Eine App für Auftraggeber und Fachbetriebe: Auftrag mit Fotos, Ort und Budget beschreiben, Angebote vergleichen, im Chat klären und über Stripe bezahlen. Konzept, Entwicklung und Veröffentlichung im App Store habe ich allein umgesetzt, in Partnerschaft mit CivilCMC.`, en: `An app for clients and contractors: describe a job with photos, location and budget, compare offers, clarify details in chat and pay via Stripe. I handled concept, development and App Store release on my own, in partnership with CivilCMC.` },
  'cl-feat-1': { de: `Aufträge ausschreiben mit Beschreibung, Fotos, Standort und Budgetrahmen`, en: `Post jobs with description, photos, location and budget range` },
  'cl-feat-2': { de: `Angebote vergleichen: Preis, Dauer, Bewertungen und Nachricht auf einen Blick`, en: `Compare offers: price, duration, reviews and message at a glance` },
  'cl-feat-3': { de: `Direkter Chat zwischen Auftraggeber und Fachbetrieb`, en: `Direct chat between client and contractor` },
  'cl-feat-4': { de: `Sichere Zahlung über Stripe — Freigabe erst, wenn der Auftrag abgeschlossen ist`, en: `Secure payment via Stripe — released only once the job is marked complete` },
  'cl-feat-5': { de: `Auszahlung an Fachbetriebe über Stripe Connect`, en: `Payouts to contractors via Stripe Connect` },
  'cl-feat-6': { de: `Bewertungen aus abgeschlossenen Aufträgen`, en: `Reviews from completed jobs` },
  'cl-feat-7': { de: `Melden und Blockieren von Inhalten und Nutzern, jede Meldung wird geprüft`, en: `Report and block content and users, every report is reviewed` },
  'cl-feat-8': { de: `Profile mit Gewerk, Stärken und Sprachen; Aufträge aus der Region entdecken`, en: `Profiles with trade, strengths and languages; discover jobs nearby` },
  'cl-feat-9': { de: `Für Fachbetriebe kostenlos: keine Provision, keine Grundgebühr`, en: `Free for contractors: no commission, no base fee` },
  'cl-cap-feed': { de: `Auftrag beschreiben und veröffentlichen.`, en: `Describe and publish a job.` },
  'cl-cap-job': { de: `Details mit Fotos und Budget.`, en: `Details with photos and budget.` },
  'cl-cap-offers': { de: `Angebote von Fachkräften vergleichen.`, en: `Compare offers from professionals.` },
  'cl-cap-chat': { de: `Direkt mit dem Fachbetrieb schreiben.`, en: `Chat directly with the contractor.` },
  'cl-demonote': { de: `App-Store-Screenshots. Aktuell 5+ Nutzer, Android folgt.`, en: `App Store screenshots. Currently 5+ users, Android to follow.` },

  'grp2-eyebrow': { de: `Referenzen`, en: `References` },
  'grp2-title': { de: `Umgesetzte Projekte.`, en: `Completed projects.` },
  'grp2-sub': { de: `Ausgangslage, Entscheidungen, Tech-Stack und Einblicke in die laufende Anwendung.`, en: `Background, decisions, tech stack and a look inside the running application.` },
  'max-num': { de: `02 · In Entwicklung`, en: `02 · In development` },
  'max-tagline': { de: `Your Second Mind: ein KI-System, das Mails, Chats, Sprache, Rechnungen und Dateien versteht, verknüpft und daraus Aktionen macht.`, en: `Your Second Mind: an AI system that understands and connects emails, chats, voice, invoices and files — and turns them into actions.` },
  'max-ausgangslage-p': { de: `Informationen liegen verstreut in Mails, Chats, Notizen, Dateien und Kalendern. Wichtiges geht unter, Rechnungen und Fristen werden vergessen, der Kontext zu Personen und Projekten fehlt.`, en: `Information is scattered across emails, chats, notes, files and calendars. Important things get lost, invoices and deadlines are forgotten, and context about people and projects is missing.` },
  'max-loesung-p': { de: `MAX ist ein Workspace mit KI im Kern. Alles, was hereinkommt — Mail, Chat, Voice, Rechnung, Datei, Meeting, Screenshot — wird verstanden, verknüpft und gespeichert und kann anschließend Aktionen auslösen. Kein Sammelsurium einzelner Funktionen, sondern ein System, das die gesamte Arbeitsumgebung verbindet.`, en: `MAX is a workspace with AI at its core. Everything that comes in — email, chat, voice, invoice, file, meeting, screenshot — is understood, connected and stored, and can then trigger actions. Not a collection of separate features, but one system that connects the entire work environment.` },
  'max-feat-1': { de: `KI-Kern: Assistent, Command Center per Text oder Sprache, persönliches Gedächtnis, Knowledge Graph und Daily Briefing`, en: `AI core: assistant, command center via text or voice, personal memory, knowledge graph and daily briefing` },
  'max-feat-2': { de: `Kommunikation: Mails, Chats, Todos, Kalender, Notizen und Dateien in einer Universal Inbox mit globaler Suche`, en: `Communication: emails, chats, todos, calendar, notes and files in one universal inbox with global search` },
  'max-feat-3': { de: `Capture: Voice Notes mit Transkription, Meeting Memory, Screenshot-Analyse und Quick Capture`, en: `Capture: voice notes with transcription, meeting memory, screenshot analysis and quick capture` },
  'max-feat-4': { de: `Finance & Tax: Rechnungs- und Fälligkeitserkennung, Vorsteuer, absetzbare Ausgaben, DATEV-Export`, en: `Finance & tax: invoice and due-date detection, input VAT, deductible expenses, DATEV export` },
  'max-feat-5': { de: `Projekte: Dateien, Mails, Chats, Meetings und Todos automatisch im Projektkontext verbunden`, en: `Projects: files, emails, chats, meetings and todos automatically connected in project context` },
  'max-feat-6': { de: `Website-Integration: Projekte und Inhalte direkt auf die Unternehmenswebsite veröffentlichen, mit Live-Vorschau und Freigabe`, en: `Website integration: publish projects and content directly to the company website, with live preview and approval` },
  'max-feat-7': { de: `Plattform: Desktop-Workspace und Mobile App „Pocket Mind“, synchron`, en: `Platform: desktop workspace and the mobile app “Pocket Mind”, kept in sync` },
  'max-feat-8': { de: `Prinzip: Capture → Understand → Connect → Remember → Act`, en: `Principle: Capture → Understand → Connect → Remember → Act` },
  'max-pill-1': { de: `Desktop-Workspace`, en: `Desktop workspace` },
  'max-pill-2': { de: `Mobile App`, en: `Mobile app` },
  'max-pill-3': { de: `KI-Assistent`, en: `AI assistant` },
  'max-note': { de: `Design-Entwurf des Workspace. Das Produkt befindet sich in Entwicklung.`, en: `Design concept of the workspace. The product is in development.` },

  'axis-num':     { de: `04 · Finance`, en: `04 · Finance` },
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
  'axis-demonote': { de: `Screenshots mit frei erfundenen Kontoständen, Namen und Beträgen — keine echten Finanzdaten. Privates Tool für mich und meine Familie, kein öffentlicher Zugang.`, en: `Screenshots with entirely made-up balances, names and amounts — no real financial data. A private tool for me and my family, no public access.` }
};

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
