const staticAssets = [
  './',
  './index.html',
  './main.js',
  './manifest.json',
  'https://unpkg.com/onsenui/css/onsenui.min.css',
  'https://unpkg.com/onsenui/css/onsen-css-components.min.css',
  'https://unpkg.com/onsenui/js/onsenui.min.js'
];
self.addEventListener('install', async event => {
  console.log('install event');
	const cache = await caches.open(cacheName); 
  await cache.addAll(staticAssets); 
});

self.addEventListener('fetch', async event => {
  console.log('fetch event');
});
const cacheName = 'mycache';
