self.addEventListener('install', (event) => {
    self.skipWaiting();
    console.log('Service worker installed!');
});

self.addEventListener('activate', (event) => {
    self.skipWaiting();
    console.log('Service worker activated!');
});

self.addEventListener('fetch', (event) => {
    console.log(event.request.url); // Skriv ut url:en på varje nätverksförfrågan
    if (navigator.onLine) {
        console.log('Du är online!');
    } else {
        console.log('Du är offline!');
        event.respondWith(new Response('<h1>I find your lack of internet disturbing</h1>', {
            'headers': { 'Content-Type': 'text/html'}
        }));
    }
});
