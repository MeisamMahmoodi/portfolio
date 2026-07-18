/* =========================================================================
   MOL – Portfolio-Demo-Version
   Kein echter Spotify-Login, keine echten Streams. Simuliert die komplette
   Oberfläche mit lokalen Demo-Tracks und einem synthetischen Ton statt
   echter Audiodateien, damit alles ohne Account klickbar/testbar ist.
   Nichts wird gespeichert – ein Reload setzt alles zurück.
   ========================================================================= */
(function () {
  "use strict";

  function cover(hex) {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="80" height="80"><rect width="80" height="80" fill="${hex}"/></svg>`;
    return "data:image/svg+xml;base64," + btoa(svg);
  }

  const TRACKS = [
    { id: "t1", name: "Midnight Drive", artists: [{ name: "Nova Kid" }], color: "#2b3a67", freq: 220 },
    { id: "t2", name: "Glass Horizon", artists: [{ name: "Wolfheart" }], color: "#67302b", freq: 246.94 },
    { id: "t3", name: "Paper Planes (Slowed)", artists: [{ name: "Ari Solace" }], color: "#2b6741", freq: 261.63 },
    { id: "t4", name: "Static & Neon", artists: [{ name: "Kilo Grey" }], color: "#4a2b67", freq: 293.66 },
    { id: "t5", name: "Low Tide", artists: [{ name: "Nova Kid" }], color: "#67612b", freq: 329.63 },
    { id: "t6", name: "Echoes in June", artists: [{ name: "Sable Moon" }], color: "#2b5f67", freq: 349.23 },
    { id: "t7", name: "Concrete Bloom", artists: [{ name: "Wolfheart" }], color: "#67432b", freq: 392.0 },
    { id: "t8", name: "Afterglow", artists: [{ name: "Ari Solace" }], color: "#5a2b67", freq: 440.0 }
  ].map((t) => ({ ...t, album: { images: [{ url: cover(t.color) }] } }));

  const PLAYLISTS = [
    { id: "p1", name: "Late Night Coding", tracks: [TRACKS[0], TRACKS[3], TRACKS[5], TRACKS[6]] },
    { id: "p2", name: "Gym Pump", tracks: [TRACKS[3], TRACKS[4], TRACKS[6], TRACKS[7]] },
    { id: "p3", name: "Chill Sunday", tracks: [TRACKS[1], TRACKS[2], TRACKS[5], TRACKS[7]] }
  ];

  let queue = TRACKS;
  let currentIndex = -1;
  let isPlaying = false;

  let audioCtx = null, osc = null, gainNode = null;
  function ensureAudioCtx() {
    if (!audioCtx) {
      audioCtx = new (window.AudioContext || window.webkitAudioContext)();
      gainNode = audioCtx.createGain();
      gainNode.gain.value = 0.5 * 0.15;
      gainNode.connect(audioCtx.destination);
    }
    return audioCtx;
  }

  function stopTone() {
    if (osc) { try { osc.stop(); } catch (e) {} osc.disconnect(); osc = null; }
  }

  function playTone(freq) {
    try {
      ensureAudioCtx();
      if (audioCtx.state === "suspended") audioCtx.resume();
      stopTone();
      osc = audioCtx.createOscillator();
      osc.type = "sine";
      osc.frequency.value = freq;
      osc.connect(gainNode);
      osc.start();
    } catch (e) {
      console.warn("Audio nicht verfügbar:", e.message);
    }
  }

  function renderTrackList(container, tracks, onClick) {
    container.innerHTML = "";
    tracks.forEach((track) => {
      const li = document.createElement("li");
      li.className = "track-item";
      li.innerHTML = `
        <img src="${track.album.images[0].url}" alt="" />
        <div class="meta">
          <div class="title">${track.name}</div>
          <div class="subtitle">${track.artists.map((a) => a.name).join(", ")}</div>
        </div>
      `;
      li.addEventListener("click", () => onClick(track));
      container.appendChild(li);
    });
  }

  function renderPlaylists() {
    const container = document.getElementById("playlists");
    container.innerHTML = "";
    PLAYLISTS.forEach((pl) => {
      const li = document.createElement("li");
      li.className = "track-item";
      li.innerHTML = `
        <img src="${pl.tracks[0].album.images[0].url}" alt="" />
        <div class="meta">
          <div class="title">${pl.name}</div>
          <div class="subtitle">${pl.tracks.length} Songs</div>
        </div>
      `;
      li.addEventListener("click", () => {
        queue = pl.tracks;
        renderTrackList(document.getElementById("playlist-tracks"), pl.tracks, playTrack);
      });
      container.appendChild(li);
    });
  }

  function updateNowPlaying(track) {
    document.getElementById("track-name").textContent = track.name;
    document.getElementById("track-artist").textContent = track.artists.map((a) => a.name).join(", ");
    document.getElementById("track-cover").src = track.album.images[0].url;
    document.getElementById("play-pause-btn").textContent = isPlaying ? "⏸" : "▶️";
    document.getElementById("player-bar").classList.remove("hidden");
  }

  function playTrack(track) {
    const idx = queue.findIndex((t) => t.id === track.id);
    currentIndex = idx >= 0 ? idx : 0;
    isPlaying = true;
    playTone(track.freq);
    updateNowPlaying(track);
  }

  function togglePlay() {
    if (currentIndex < 0) { playTrack(queue[0]); return; }
    isPlaying = !isPlaying;
    if (isPlaying) playTone(queue[currentIndex].freq); else stopTone();
    updateNowPlaying(queue[currentIndex]);
  }

  function step(dir) {
    if (!queue.length) return;
    if (currentIndex < 0) currentIndex = 0;
    currentIndex = (currentIndex + dir + queue.length) % queue.length;
    isPlaying = true;
    playTone(queue[currentIndex].freq);
    updateNowPlaying(queue[currentIndex]);
  }

  function doSearch() {
    const q = document.getElementById("search-input").value.trim().toLowerCase();
    const results = q
      ? TRACKS.filter((t) => t.name.toLowerCase().includes(q) || t.artists[0].name.toLowerCase().includes(q))
      : TRACKS;
    queue = results.length ? results : TRACKS;
    renderTrackList(document.getElementById("search-results"), results.length ? results : TRACKS, playTrack);
  }

  function showAppView() {
    document.getElementById("login-view").classList.add("hidden");
    document.getElementById("app-view").classList.remove("hidden");
    const userInfo = document.getElementById("user-info");
    userInfo.classList.remove("hidden");
    document.getElementById("user-name").textContent = "Demo-Account";
    document.getElementById("user-avatar").src = cover("#1db954");
    renderPlaylists();
    renderTrackList(document.getElementById("search-results"), TRACKS, playTrack);
  }

  function wireUpControls() {
    document.getElementById("login-btn").addEventListener("click", showAppView);
    document.getElementById("logout-btn").addEventListener("click", () => {
      stopTone();
      isPlaying = false;
      currentIndex = -1;
      document.getElementById("app-view").classList.add("hidden");
      document.getElementById("login-view").classList.remove("hidden");
      document.getElementById("user-info").classList.add("hidden");
      document.getElementById("player-bar").classList.add("hidden");
    });
    document.getElementById("search-btn").addEventListener("click", doSearch);
    document.getElementById("search-input").addEventListener("keydown", (e) => {
      if (e.key === "Enter") doSearch();
    });
    document.getElementById("play-pause-btn").addEventListener("click", togglePlay);
    document.getElementById("next-btn").addEventListener("click", () => step(1));
    document.getElementById("prev-btn").addEventListener("click", () => step(-1));
    document.getElementById("volume-slider").addEventListener("input", (e) => {
      if (gainNode) gainNode.gain.value = (Number(e.target.value) / 100) * 0.15;
    });
  }

  document.addEventListener("DOMContentLoaded", () => {
    wireUpControls();
    showAppView();
  });
})();
