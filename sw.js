// Service Worker Sederhana untuk PWA
self.addEventListener('install', (e) => {
  console.log('[Service Worker] Terinstal');
});

self.addEventListener('fetch', (e) => {
  // Hanya meneruskan permintaan data (Pass-through)
  // Karena kita menggunakan API Google Script, kita tidak perlu cache berat di sini
});
