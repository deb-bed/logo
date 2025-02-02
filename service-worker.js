self.addEventListener('install', event => {
    console.log('Service Worker zainstalowany.');
    event.waitUntil(
        caches.open('pwa-cache-v1').then(cache => {
            return cache.addAll([
                'index.html',
                'style.css',
                'manifest.json',
                'https://i.imgur.com/2lzBgV2.jpg',
                'https://i.imgur.com/RZI5BVR.jpeg'
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request)
            .then(response => response || fetch(event.request))
    );
});
