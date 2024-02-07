'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "e7b10922a5dfd4b9f939e71078f135f8",
"assets/AssetManifest.bin.json": "15b97251a882a539a1eb5e5d8e5b583e",
"assets/AssetManifest.json": "fecb5ebc34c615fa6c185e325d7391f1",
"assets/assets/icons/buildyr.svg": "270c8fc13f4079657d614037d0959d99",
"assets/assets/icons/car-alt.svg": "5de81377641168d9ddabb939662e397d",
"assets/assets/icons/car-seat.svg": "75bd5f2d91b9a142a3732913150c98c5",
"assets/assets/icons/element-3.svg": "4e62d2213cf8d73863fb5fed41bedd31",
"assets/assets/icons/engine.svg": "14cf381dbe2517c7b4027f45ece0a318",
"assets/assets/icons/fill.svg": "937ac6cca1da36dc95e9964a61d51072",
"assets/assets/icons/gas.svg": "6b78e27f87de31278f3f18ad8ee6cd24",
"assets/assets/icons/hand.svg": "9bc11498f5ab8f09f7fd56f748de4d4d",
"assets/assets/icons/rocket.svg": "4f8d36518fd711fd89ce85c5b985eaf6",
"assets/assets/icons/row-vertical.svg": "4d32505a1b8a9d9b768cf6b057b056da",
"assets/assets/icons/running.svg": "65878d259ebcb5b63446a86a3f41e593",
"assets/assets/icons/search-car.svg": "a93b38b7aedbce67c033914582c74da1",
"assets/assets/icons/search-normal.svg": "6048ec5d8374895c56df2ec76c697b18",
"assets/assets/icons/setting-4.svg": "a9daca8ef23e1f8c05eb3011952689ac",
"assets/assets/icons/steering-wheel.svg": "26cb2b4a61cd3348dadd3477edb369c1",
"assets/assets/icons/verified.svg": "0d7dea956851e25e80e75cc994d944a9",
"assets/assets/images/doctor.png": "5e286ef0a40c95a97ba0df8774b671bf",
"assets/assets/images/imagecar.png": "b6a0c041aa828b1e66f1cbe7d3afda35",
"assets/assets/images/man.png": "fac2acdbd2d443e20975a4a4e8752920",
"assets/assets/images/porsche.png": "fc26abdfd130b8f98446e36a23be13f8",
"assets/assets/images/wolkswagen.png": "dcda6fce29cfaea28923d57ebbed644b",
"assets/FontManifest.json": "f6bcbe58134e032a51a65dbf386cf3d2",
"assets/fonts/inter/Inter-Black.ttf": "118c5868c7cc1370fcf5a1fc2f569883",
"assets/fonts/inter/Inter-Bold.ttf": "ba74cc325d5f67d0efbeda51616352db",
"assets/fonts/inter/Inter-ExtraBold.ttf": "72ac147c98056996b2a31e95a56d6e66",
"assets/fonts/inter/Inter-ExtraLight.ttf": "7a177fa21fece72dfaa5639d8f1c114a",
"assets/fonts/inter/Inter-Light.ttf": "a3fe4e0f9fdf3119c62a34b1937640dd",
"assets/fonts/inter/Inter-Medium.ttf": "cad1054327a25f42f2447d1829596bfe",
"assets/fonts/inter/Inter-Regular.ttf": "ea5879884a95551632e9eb1bba5b2128",
"assets/fonts/inter/Inter-Semibold.ttf": "465266b2b986e33ef7e395f4df87b300",
"assets/fonts/inter/Inter-Thin.ttf": "4558ff85abeab91af24c86aab81509a7",
"assets/fonts/MaterialIcons-Regular.otf": "1f21a82cc1a131f1431efd0a50bf091f",
"assets/fonts/sfpro/SF-Pro-Display-Bold.ttf": "4e99e4e132b0bd1ccd4e27596b15df8f",
"assets/fonts/sfpro/SFProDisplayRegular.ttf": "d09549c1ab4a5947a007561521e45da3",
"assets/fonts/sfpro/SFProMedium.ttf": "8296fbc23d1d42f2954c7af6698cf579",
"assets/fonts/sfpro/SFProRegular.ttf": "d704bcd64b0f4fa155e6bd7debacc6c4",
"assets/fonts/sfpro/SFProSemibold.ttf": "962956e157e4687b7c79d1dafb2b9fb0",
"assets/NOTICES": "da1b14b916adc0905dd1736c07d4529d",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "4096b5150bac93c41cbc9b45276bd90f",
"canvaskit/canvaskit.js": "eb8797020acdbdf96a12fb0405582c1b",
"canvaskit/canvaskit.wasm": "73584c1a3367e3eaf757647a8f5c5989",
"canvaskit/chromium/canvaskit.js": "0ae8bbcc58155679458a0f7a00f66873",
"canvaskit/chromium/canvaskit.wasm": "143af6ff368f9cd21c863bfa4274c406",
"canvaskit/skwasm.js": "87063acf45c5e1ab9565dcf06b0c18b8",
"canvaskit/skwasm.wasm": "2fc47c0a0c3c7af8542b601634fe9674",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "59a12ab9d00ae8f8096fffc417b6e84f",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "45859f132e0ec3b1f447762fa0cfda64",
"/": "45859f132e0ec3b1f447762fa0cfda64",
"main.dart.js": "caba260268b89bd10e7caffe58655491",
"manifest.json": "748eef23665d06d71d890000a4ad0ab7",
"version.json": "b07421f69d245996e47fbe6d359625d1"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
