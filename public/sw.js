const CACHE_NAME = 'rotatle-v0.0.6';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './styles/main.css',
  './manifest.json',
  'https://fonts.googleapis.com/css2?family=Roboto+Slab:wght@700;800&family=Work+Sans:wght@400;600&display=swap'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE).catch(err => {
        console.warn('[SW] Cache addAll warning:', err);
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request)
        .then(response => {
          if (
            response &&
            response.status === 200 &&
            response.type === 'basic'
          ) {
            const responseToCache = response.clone();
            caches.open(CACHE_NAME).then(cache => {
              cache.put(event.request, responseToCache);
            });
          }
          return response;
        })
        .catch(() => {
          return caches.match('./index.html');
        });
    })
  );
});
