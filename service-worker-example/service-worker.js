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
});
