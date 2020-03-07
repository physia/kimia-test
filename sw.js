self.addEventListener('install', function (e) {
    e.waitUntil(
        caches.open('data-store').then(function (cache) {
            return cache.addAll([
                '/',
                '/index.html',
                '/index.js',
                '/dist/css/physia.css',
                '/dist/css/widgets.css',
                '/images/physia.png',
                //'/images/fox2.jpg',
                //'/images/fox3.jpg',
                //'/images/fox4.jpg'
            ]);
        })
    );
});

self.addEventListener('fetch', function (e) {
    console.log(e.request.url);
    e.respondWith(
        caches.match(e.request).then(function (response) {
            return response || fetch(e.request);
        })
    );
});