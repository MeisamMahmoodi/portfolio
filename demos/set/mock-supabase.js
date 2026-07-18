/* ============================================================================
   Lokaler Mock des Supabase-JS-Clients für die Portfolio-Demo.
   Kein Netzwerk, kein echtes Backend, kein Login nötig.
   Alle Daten leben nur im Speicher (JS-Variable) und sind bei jedem
   Neuladen der Seite wieder auf den Ausgangszustand zurückgesetzt.
   Die echte app.js läuft unverändert gegen dieses API-kompatible Mock.
   ============================================================================ */
(function () {
  "use strict";

  function uid(prefix) {
    return prefix + "-" + Math.random().toString(36).slice(2, 10);
  }

  function todayStr() {
    return new Date().toISOString().slice(0, 10);
  }

  function seed() {
    const u = "demo-user";
    const splitPush = uid("split");
    const splitPull = uid("split");
    const exBench = uid("ex");
    const exShoulder = uid("ex");
    const exPullup = uid("ex");
    const exRow = uid("ex");
    const today = todayStr();

    return {
      splits: [
        { id: splitPush, user_id: u, name: "Push", position: 0, archived: false },
        { id: splitPull, user_id: u, name: "Pull", position: 1, archived: false }
      ],
      exercises: [
        { id: exBench, user_id: u, split_id: splitPush, name: "Bankdrücken", bodyweight: false, position: 0, archived: false },
        { id: exShoulder, user_id: u, split_id: splitPush, name: "Schulterdrücken", bodyweight: false, position: 1, archived: false },
        { id: exPullup, user_id: u, split_id: splitPull, name: "Klimmzüge", bodyweight: true, position: 0, archived: false },
        { id: exRow, user_id: u, split_id: splitPull, name: "Rudern", bodyweight: false, position: 1, archived: false }
      ],
      sessions: [],
      session_exercise_data: [],
      protein_entries: [
        { id: uid("pe"), user_id: u, date: today, amount: 35, entry_time: "08:30", created_at: new Date().toISOString() },
        { id: uid("pe"), user_id: u, date: today, amount: 40, entry_time: "12:15", created_at: new Date().toISOString() }
      ],
      bodyweight_entries: [
        { id: uid("bw"), user_id: u, date: today, value: 82.4 }
      ],
      user_settings: [
        { id: uid("us"), user_id: u, protein_goal: 150 }
      ]
    };
  }

  const DB = seed();
  const DEMO_USER = { id: "demo-user", email: "demo@meizo.de" };

  class Query {
    constructor(table, op, payload, opts) {
      this.table = table;
      this.op = op;
      this.payload = payload;
      this.opts = opts || {};
      this.filters = [];
      this._order = null;
      this._single = false;
    }
    eq(field, val) { this.filters.push([field, val]); return this; }
    order() { return this; }
    select() { return this; }
    single() { this._single = true; return this; }
    maybeSingle() { this._single = true; return this; }
    _match(row) { return this.filters.every(([f, v]) => row[f] === v); }
    _run() {
      const arr = (DB[this.table] = DB[this.table] || []);
      if (this.op === "select") {
        let rows = arr.filter((r) => this._match(r));
        if (this._single) return rows[0] || null;
        return rows.slice();
      }
      if (this.op === "insert") {
        const rowsIn = Array.isArray(this.payload) ? this.payload : [this.payload];
        const created = rowsIn.map((r) => ({ id: uid("row"), created_at: new Date().toISOString(), ...r }));
        arr.push(...created);
        return this._single ? created[0] : created;
      }
      if (this.op === "update") {
        const matched = arr.filter((r) => this._match(r));
        matched.forEach((r) => Object.assign(r, this.payload));
        return this._single ? matched[0] : matched;
      }
      if (this.op === "upsert") {
        const conflictKeys = (this.opts.onConflict || "").split(",").map((s) => s.trim()).filter(Boolean);
        const rowsIn = Array.isArray(this.payload) ? this.payload : [this.payload];
        const results = rowsIn.map((payloadRow) => {
          let existing = null;
          if (conflictKeys.length) {
            existing = arr.find((r) => conflictKeys.every((k) => r[k] === payloadRow[k]));
          }
          if (existing) { Object.assign(existing, payloadRow); return existing; }
          const created = { id: uid("row"), created_at: new Date().toISOString(), ...payloadRow };
          arr.push(created);
          return created;
        });
        return this._single ? results[0] : results;
      }
      if (this.op === "delete") {
        const matched = arr.filter((r) => this._match(r));
        DB[this.table] = arr.filter((r) => !this._match(r));
        return matched;
      }
      return null;
    }
    then(resolve) {
      let data = null, error = null;
      try { data = this._run(); } catch (e) { error = { message: e.message }; }
      resolve({ data, error });
    }
  }

  function from(table) {
    return {
      select: () => new Query(table, "select"),
      insert: (payload) => new Query(table, "insert", payload),
      update: (payload) => new Query(table, "update", payload),
      upsert: (payload, opts) => new Query(table, "upsert", payload, opts),
      delete: () => new Query(table, "delete")
    };
  }

  const authListeners = [];
  const auth = {
    async getSession() {
      return { data: { session: { user: DEMO_USER } } };
    },
    async signInWithPassword() {
      return { data: { user: DEMO_USER, session: { user: DEMO_USER } }, error: null };
    },
    async signUp() {
      return { data: { user: DEMO_USER, session: { user: DEMO_USER } }, error: null };
    },
    async signOut() {
      authListeners.forEach((fn) => fn("SIGNED_OUT", null));
      return { error: null };
    },
    onAuthStateChange(fn) {
      authListeners.push(fn);
      return { data: { subscription: { unsubscribe() {} } } };
    }
  };

  window.supabase = { createClient: () => ({ auth, from }) };
})();
