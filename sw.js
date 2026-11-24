// Permet d'ouvrir l'application sans réseau (sur le terrain).
// Les données ne passent jamais par ici : elles vont directement vers l'API GitHub.
const CACHE = "inventaire-berry-v3";
const SHELL = ["./", "index.html", "jszip.min.js", "manifest.webmanifest", "icon-180.png", "icon-192.png", "icon-512.png", "icon-512-maskable.png", "icon.svg", "favicon-32.png"];

self.addEventListener("install", e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting()));
});
self.addEventListener("activate", e => {
  e.waitUntil(caches.keys().then(ks => Promise.all(ks.filter(k => k !== CACHE).map(k => caches.delete(k)))).then(() => self.clients.claim()));
});
self.addEventListener("fetch", e => {
  const url = new URL(e.request.url);
  if (e.request.method !== "GET" || url.origin !== self.location.origin) return; // API GitHub, polices : réseau direct
  const isPage = e.request.mode === "navigate" || url.pathname.endsWith("/") || url.pathname.endsWith("index.html");
  if (isPage) {
    // réseau d'abord (pour recevoir les mises à jour), sinon la copie locale
    e.respondWith(fetch(e.request).then(r => { const c = r.clone(); caches.open(CACHE).then(k => k.put("index.html", c)); return r; })
      .catch(() => caches.match("index.html")));
  } else {
    e.respondWith(caches.match(e.request).then(r => r || fetch(e.request).then(n => { const c = n.clone(); caches.open(CACHE).then(k => k.put(e.request, c)); return n; })));
  }
});
