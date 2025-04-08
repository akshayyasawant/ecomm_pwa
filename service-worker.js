const CACHE_NAME = "trendify-cache-v1";
const urlsToCache = [
  "/",
  "/index.html",
  "/about.html",
  "/prod.html",
  "/cart.html",
  "/styles.css",
  "/cart.js",
  "/manifest.json"
];

// Install
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

// Fetch
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

// Activate
self.addEventListener("activate", event => {
  const keepCaches = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.map(k => !keepCaches.includes(k) && caches.delete(k)))
    )
  );
});
