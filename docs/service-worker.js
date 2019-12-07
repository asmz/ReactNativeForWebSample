self.addEventListener('install', event => {
  console.log('installed.');
});

self.addEventListener('activate', event => {
  console.log('activated');
});

self.addEventListener('fetch', event => {
  console.log('fetched.');
});
