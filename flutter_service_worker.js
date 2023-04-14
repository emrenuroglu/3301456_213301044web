'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "0c97dfa6ded2fb3e8cd44e4df9189c4d",
"assets/Assets/bacak1.jpg": "0868f9aff0601da6f33ccd7ca2237fba",
"assets/Assets/bacak2.jpg": "99743d64b27e1a722ee49ef9f3a3f1f5",
"assets/Assets/bacak3.jpg": "902a6d6c8991b2bffe2d21598cc1e712",
"assets/Assets/bacak4.jpg": "1bd3f7584af0cf236f78dc835702a1ca",
"assets/Assets/fonts/Lobster-Regular.ttf": "c3191f3b933ae0bd46335e178744326e",
"assets/Assets/g%25C3%25B6%25C4%259F%25C3%25BCs1.jpg": "127b9c23f325556217f6a1974394db74",
"assets/Assets/g%25C3%25B6%25C4%259F%25C3%25BCs2.jpg": "a7603f105e23ed70c763798f41b28678",
"assets/Assets/g%25C3%25B6%25C4%259F%25C3%25BCs3.jpg": "c8b2573d638bcda0afc6e320ecbb0372",
"assets/Assets/g%25C3%25B6%25C4%259F%25C3%25BCs4.jpg": "ebbbda1b2c5c2ed1f94c35ea61e6b58e",
"assets/Assets/g%25C3%25B6%25C4%259F%25C3%25BCs5.jpg": "baa781b6ce8c9539469c59fb3b6b86c8",
"assets/Assets/kar%25C4%25B1n1.jpg": "14b2d96371d6fb4fcd35818c5f633681",
"assets/Assets/kar%25C4%25B1n2.jpg": "9ec88d5501a80fbd6d5233088e92b6b9",
"assets/Assets/kar%25C4%25B1n3.jpg": "5ffc8a7daf1d8cd7f248119bdf146e1b",
"assets/Assets/kar%25C4%25B1n4.jpg": "ae08d19d889ebaa4ca8b9d3a7454b916",
"assets/Assets/kar%25C4%25B1n5.jpg": "949e0f84fdf844110d16f362ecd1f7f2",
"assets/Assets/kol1.jpg": "940eb4062b515aa433ecd24ae30e4a21",
"assets/Assets/kol2.jpg": "344558dd22ffa54b522d1804de0f4250",
"assets/Assets/kol3.jpg": "f014560a9300ae94e3c16c0845310bd4",
"assets/Assets/login_logo.jpg": "cafb60de32d236f026134f10989df967",
"assets/Assets/omuz1.jpg": "4911dbbc09f2a4874307679c50bd2764",
"assets/Assets/omuz2.jpg": "be76b158871ca814be10167548559182",
"assets/Assets/omuz3.jpg": "950bfb445a82cf42eb0f58b410cfaf52",
"assets/Assets/s%25C4%25B1rt1.jpg": "59fca60174fb95def67bcd042383bbfc",
"assets/Assets/s%25C4%25B1rt2.jpg": "8252b276643f696b073b6b2581c30857",
"assets/Assets/s%25C4%25B1rt3.jpg": "844e09a9d44010d8bb5267082821abe2",
"assets/Assets/s%25C4%25B1rt4.jpg": "3f8acf7e4f315a2a9bb59aa50de51f6a",
"assets/Assets/s%25C4%25B1rt5.jpg": "0a4d8e2568a92931d4a2b40a6b05f58b",
"assets/FontManifest.json": "63f505cd42e2bd30774e673d2e2c23eb",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "b627842f64c21b5ce30bf482e46b180f",
"assets/packages/community_material_icon/fonts/materialdesignicons-webfont.ttf": "174c02fc4609e8fc4389f5d21f16a296",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "a85fcf6324d3c4d3ae3be1ae4931e9c5",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "50f4cf413d579847a12fe6aa1f74dd32",
"/": "50f4cf413d579847a12fe6aa1f74dd32",
"main.dart.js": "c9cdfd0f8f5a52f229b0a8043e228fe3",
"manifest.json": "35f9f82ea3b1bb234138f0fec3286f22",
"version.json": "4c7436abe3538c9d34510b506ef6fd45"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
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
