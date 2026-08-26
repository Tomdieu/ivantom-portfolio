// no-op service worker — prevents 404 for /sw.js requests
// If you later add PWA support, replace with actual service worker logic.
self.addEventListener('install', () => self.skipWaiting());
self.addEventListener('activate', () => self.clients.claim());
