const CACHE_NAME = 'grade-analyzer-v29';

self.addEventListener('install', (e) => {
    // 立即套用更新
    self.skipWaiting();
});

self.addEventListener('activate', (e) => {
    // 啟動後立即接管控制權
    e.waitUntil(clients.claim());
});

self.addEventListener('fetch', (e) => {
    // 極簡離線策略：網路優先，失敗則略過 (因為主要是單頁運算)
    e.respondWith(
        fetch(e.request).catch(() => {
            return caches.match(e.request);
        })
    );
});
