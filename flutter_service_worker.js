'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "23c68a0992e4dcdef4e13a3db9115e68",
".git/config": "1da2d04acfac15c0de707775a76aea92",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "fd77f074c9c3f4f7457eaaea036b4477",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "3f196159f231d255439106a5fcb17451",
".git/logs/refs/heads/main": "05b6e3c8cd281e7e76c889b046ea5822",
".git/logs/refs/remotes/origin/main": "2c94fbe2d8055052bf7c64fee4be671b",
".git/objects/04/e5efc15dc0c60ea2ffcc37c5bf25e96689f44d": "978222f47488835b92838c74cb5c684c",
".git/objects/08/74f0c17b7842b1a51075895ce51cc579d954ec": "13552253475ecdea704d3e70d0695856",
".git/objects/08/7ed875d610eecc04f94eeede2dccee688a85ad": "dfd1e5467b7283e81b13ead52cc9358c",
".git/objects/0d/846c8d4e47a645a373889c8b2c499152924140": "7f8f3bbf2e35701a64b33210abfe6443",
".git/objects/0e/e3590f4d74c3a4e4621a8d048d01f13436ec7a": "25939fd9f3cb53628d90cf3f4f9a026a",
".git/objects/12/cba9a40a41265042de9593f39372bdb161b6fc": "919cec6eaa3c6fe6d4ec26bc5e000df4",
".git/objects/17/0b5d19154c9bb60a7d02e5e26d42298bd37b17": "605f152ba7d67733efedf9c4ddf02676",
".git/objects/17/93d68effff0cf1f0136fc65f7c9c8ba6d0dac3": "2f2f68cc38360c318dcc505279dd3758",
".git/objects/1a/dfd4b6c31aec7eea4911e4c904aaf56ea1edea": "ad8ae6918603e5009d8e8052f3095d8a",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/24/5e5cdedad433dbdd05a5ce2f98d930c8854963": "6f82324b9ee81baa7e5936d007e68a7d",
".git/objects/27/525d887c6d7e68b9fc88b01c42b391e07d2efc": "b5b4a4e712d8840338a86ddfabee8fd4",
".git/objects/2b/e39c7fd3da441ddac9bea54fd12621dd39960a": "24031b20667d22ca8dba4debe8b9eab5",
".git/objects/2c/5bcf73b6ed73898c74301ae5440ce38fd05931": "5229400aa72f5d5936d774cc3423cc7c",
".git/objects/34/c47293bc1f6b4abe63739ffe3395727156d0ae": "ade7ab7b058d2539492ee7adc244ceb5",
".git/objects/3a/7795ce82e55d8f9c99e7beaa0c85141f8d2835": "8a5558c663d87709cb2353c1b35642f0",
".git/objects/3c/ebbab128a9e094fba7ab561c8ba3c0d0f42166": "72931012b4cc8fe16b1eb194b2e9d182",
".git/objects/43/e946e398d96aee466fa0aabb625f0889c3a4bd": "ac34520dee747f675e6e0a15c0bbd2be",
".git/objects/44/d58b4b20647f9f0753b3c9bcaf68ddb442b181": "ff48cb7d78408246440a7f76ee001f39",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/46/bc64d040240d4d0415de2baae55b8d08c45daa": "219aa42e91a03ae742df953e7330de1d",
".git/objects/48/33fcf9ba677d3df448c90e63368e50f8bfc8d6": "a5b926fccf641f8e2a09e52478c0d37a",
".git/objects/4d/6d26937a58168fb4139fd9636ca0c8c623e78a": "087142b14b0dbc23711b33f4e879c828",
".git/objects/4f/d0e51f345ee398d4c56c9a2a36514cfdc54f3e": "d8e976b7b97437231f01681fc40815a3",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/5d/fb9ba214947dbd7e4c8e7c70ca6ee88af8538a": "a809f5cfe31e905739a5cbb9d4efdf35",
".git/objects/60/9a70e447f85bdfb9a433f42c2edde5ea0f4cb7": "ea9a05b8897f1893e5db23e12b0c0fea",
".git/objects/62/7f4ee0b9f33a561535c34d0d948d436f67a533": "1bbae8beda95b9354c3bc3a761bd7011",
".git/objects/69/b12d8db20265c18802b20245f4728b895eb21e": "4167b157f33c4ebb9c69b2dd244409ae",
".git/objects/70/3728a291edc6bc2dea34bba9d9940e57c71dc4": "361df95264e81d2a7873c6516fe28c86",
".git/objects/72/cb0320bbaa868683f5bc811fa836ee3c9791f9": "85a22a1cac86d077a3381ce94acc7d78",
".git/objects/73/559cce60887c4baadce6e9ceba1c4d20f0d04d": "d1a0dcfd6fbfee5bc3b3ab38de2c4b91",
".git/objects/7a/7f71916e63a737a580669942a1558841d54f95": "ffe7f0fe1ff377526491edc6032d8689",
".git/objects/7a/f1b65179fd0a64a8a33ca200178f9ee8908847": "7fc3bc06de132a8a825877e78dd250f8",
".git/objects/7f/3802e1a2879b8f2ea8450621f3171f5f979bb6": "624dbf4de7d6d2e8005ace1bee0505ca",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/93/ed34c35f9fc4c89c6552647ab2295ea681890b": "b0f958a8185c807299c8ada426b77489",
".git/objects/94/b52e13bf7919ae4ea7235d78019b592dde8611": "b79fa5ca1cdbf72f253763797850f314",
".git/objects/9c/a0bb6cbceb591d110b08045d438cfe688cb21b": "02e6708c3313a258d209ce7661902818",
".git/objects/9d/3ff98f51d258fb69966a7f9d285168961a43c9": "9c6d7cca358ccbc89d778eb498038e86",
".git/objects/a9/91f51138ffe059d588003dc7936aff059a0428": "b73a35563fa129bd884d8b5c53ee9231",
".git/objects/ad/2f90b78480aeb6608226d9db4ecbd3ec06aaeb": "4add97a99941aa0e9eed0f2173416ade",
".git/objects/b5/331d885ae6e7977d42e9fa487b393b2d8f53f5": "9fc5dd8c9fbc5c0fe56fb8d89adad80b",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/8cb00dd5231f1a55de0205c16445926a696526": "be8592f9341c9b01b70890c8614c6cf7",
".git/objects/bb/3085876799532613a08c7ebe43f24f0cc46864": "1b6aa21800d948d5513c15e54d131215",
".git/objects/cc/fab74c1f56c330985060e2247607eaedb3c7d7": "ad5b6117df489509af208438785f208b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/e0/9c00bf620faed2ec36023ced1de37ffb8934fc": "e3747bede85cb3aa4c16c21fea446e55",
".git/objects/e1/99b98fb0224bb31199ece908ae868b45dd9ee1": "70bee79f5f37a43a4b0a02d7406f0173",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/a59e48cf462114c8eed9e3ac6fff24c8aa3d5e": "39a96ae0b1b09e3579c13f7a462e56ad",
".git/objects/f3/d33209ee7ed7140f4ae5d1c0ebf527d099758a": "82d0e3e6a063e7c22055cfc99318deab",
".git/objects/ff/e19a61eedc6668d7eebe6623451e3a74961522": "ccc9967fde99cae4e1cec8dd267ed57b",
".git/refs/heads/main": "613efaf656b2045306ad078cdcc0fdca",
".git/refs/remotes/origin/main": "613efaf656b2045306ad078cdcc0fdca",
"assets/AssetManifest.bin": "39c6563de762dda90577e7ef2e534315",
"assets/AssetManifest.bin.json": "8bd15c16a13dca32f110cf97a0296c4d",
"assets/AssetManifest.json": "524e91319cf627efa918a09f1d05f554",
"assets/assets/images/girl.png": "6790e5a48f94d2bf31d2774caadbbe2a",
"assets/assets/images/pfp.jpg": "540dcc421c75400c7c9130ac54c52ce1",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "3111f7f981f20134b0114128d69cca13",
"assets/NOTICES": "4d01b71bf545181f9aab731d063052cb",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/packages/media_kit/assets/web/hls1.4.10.js": "1e36f4683b03af6692ad2542810f28bc",
"assets/packages/wakelock_plus/assets/no_sleep.js": "7748a45cd593f33280669b29c2c8919a",
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
"index.html": "97ad3f17650fdd3fbfe6b7ec83cbd928",
"/": "97ad3f17650fdd3fbfe6b7ec83cbd928",
"main.dart.js": "5722d2b6405c8d1303909c10cd13a5ef",
"manifest.json": "7961f5b8f6bc9de8599e2f7239da6bcb",
"README.md": "3cafb089f2cd6a881262e073b4098cd4",
"version.json": "3ad8e6109b3df848f0b92cc3d80bbeee"};
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
