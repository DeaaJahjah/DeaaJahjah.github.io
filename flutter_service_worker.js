'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "bfdd15c31dc2b9c14393ff9c7fcc49a6",
".git/config": "86d93dceef3231b2179a98fff4ad02bf",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "3f83707d3800c57c754af03a2a89b8d2",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "bffaefbc0737798b97a006c9fddebe92",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f4e889c91cdf68ee803a03ab976a2c14",
".git/logs/refs/heads/main": "48171b415d41a13f6ac273ffa3803032",
".git/logs/refs/remotes/origin/main": "3b171aa7e01a21f365497b1c5872764e",
".git/objects/01/bcca7d1c23955f7aeda6a269b1b7f540802096": "635a6822e2a56f7f333d54c66b0234db",
".git/objects/09/274f09e93699214776f9b09918442cc309f371": "d1516a5285c218dbb1dafaf9012c4b82",
".git/objects/0b/55e9b6803652940048709e4fda52b0ee83a4b4": "1d11cceeca1fabf4dd8f5caedced5461",
".git/objects/1b/da3c45df0fd3912b2715e193a1211d4b5a728d": "271df97b2dffe9c72fd10dfc25be24ca",
".git/objects/1b/fb6c0fc394f5cff86c3c76df62e9b4cd46e953": "c4a56a3ccf2ed733dca65571a3f17e2a",
".git/objects/24/f12d05e438cb11701a8ec28cc616f3a1d76e52": "b0ea8b18522659c00ad1252465cb7f07",
".git/objects/2a/585a02fb20ecb5bcd35940dee6d5a14a5cc264": "a3f2129eac149c768c85c6f63ae64bb8",
".git/objects/30/6dac5ed8d40c1a67b51105b2c459a386061bc3": "0a17491a92c8dee602194b7eabdb73a1",
".git/objects/35/2ea109977f84ed2f47cbe8a6ce069292c101e6": "8c37eb26260796bf9b8e22c7f93d2645",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/40/b97f549c151cc71c7e5f86b16e085f4675e570": "6e16a6661e08faaba84195ddacb48cc6",
".git/objects/45/c37d78f1855e9eed33af275703e1da0f0385fc": "b1571778969d7967d7588d7ba105cb0d",
".git/objects/4c/a2a7c226d2c3e26f0b9dde74214486d0baa896": "734657b1f27c72d07dd9e52a25c020c1",
".git/objects/53/7807567919e88db2866b7825339c57e94c24d8": "970aec5149a3dbe9370a9dc982cdd022",
".git/objects/54/633722cac77d22e411bab5bfb3216992f3fef4": "c01b91d046789f36c1ccbcf9531834ab",
".git/objects/56/bfdec47d065d69b90c222451033a6eb600ae39": "0d324ab5254345a7b138886f8056c0a1",
".git/objects/57/021e6ba316407cc7f26ea7bc500db201f039fe": "ffc7101ad1261e3cd860fe8b831b318f",
".git/objects/57/255a096501d0cc5400bd609909caebd5e234da": "347a42e6f3bbc71fbad0b59352b7cd06",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/63/27952995656ced598260a173f407eea44953b4": "7471fa7aac24eabe193d97882923d5c5",
".git/objects/63/7465891dce44783d3dcc8aea7b65d38f04a678": "e7d07038877cc7d2011b1f5351d366ec",
".git/objects/6e/ae18b69f42628bb86f4232a7f65f93b4ce3675": "124140a316b01b68fb294ef6a3fa5fa9",
".git/objects/80/c9f543c9dc2f8fc8490396e38e9f3469ebfeef": "1a184f93dbb0c0a7d3feb857a90dbb94",
".git/objects/83/0e3d19e7f2ff19bbb4b955e3a38e3328837e12": "4412f19a8aebd49e1c2fb821b641e232",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/96/5f268e91b7f468ea4ded85a8f2abcddfe1f5a9": "6cde620475753acf951a3fbb6b42aca1",
".git/objects/9e/e19f051c7a6c85e19fde8cbcc36a90a862d674": "194b3e4d0ef2d699e61ccef1789ddf76",
".git/objects/a8/234e78324011301c932efde8dd789fba10495a": "5ad9ca983e505191e13f526cf3be6ade",
".git/objects/ab/41c68776bbbb7157e0bdeecbdec9d2c8273c13": "496d1c3647239d5f05561cbe4ac0be00",
".git/objects/ab/71f6eb3c6fb8dd337524b0dddb17e202f793cc": "5f61caabf4ed0b0c99e26e0debc854df",
".git/objects/ae/c3fe86ef44cb159c3d6cb09c80442a77581542": "9a5e23645342838b4014d78439d0e0b4",
".git/objects/b3/d8c34f7930aee35b50617c781b502f50a688d5": "cd58f4cbcb0971a79e6c81e470ce841a",
".git/objects/b5/3ae859ef4eb105eb656723f986cb7b735615a8": "ff4757834da49ce320d8f0476b3bd636",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bb/10b6b7861c1524883bd859eb3dfce8aeb24da1": "e22d08f6a337023ae3bbf6cdccc7dbbc",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bf/5191502c67a1686639e5070a4f98934771ca96": "2465b18c7261c9a9ceccd9a90955412d",
".git/objects/c3/3f0d83ffde20616341fb0d20b10246746a2f08": "53148ce2bf18218e732245379f770b88",
".git/objects/c9/f04029e30fcb91a9b62fdf695ffb9939bef265": "d488130010f9bdaaddb229253516e673",
".git/objects/ca/5d875be709be28dfc8329a64048024ab0bac3b": "40ed62abf2056b1d6b0691dfe2c53bbc",
".git/objects/ca/eb095a830ec98685068315497bfa8343fa95d8": "46400bac3c10b8437bdf8c472322d098",
".git/objects/cd/edf8b06f0cf513dacd0537e91103f4abe7933d": "d762a4b05e08055c1416de6da4bd0ecf",
".git/objects/cf/50a50a93f708f6f63b408f2597390c7c98966c": "4bc9049f92f702e86f7190898bbb71bc",
".git/objects/d1/d0967f5d910945780724999c837ce5911da8c1": "4483e8397b64a93ebde9616bf7b0735a",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d5/b54bd4a898b373f82bb1fa52b9580e7a976e3e": "943e27e1d359e2bc22daf20c70287c19",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/2c11112c7cb4e2ce754bc41470f9b829a2d00a": "d7280a766a5d6033f187d874a92b5ad6",
".git/objects/d8/7533a67873f864a17a77a8c7297af632040cb4": "c010c3b466b618edb0cd640a5db0629c",
".git/objects/dd/50226fa592396fbb364b5baecec705cbe11168": "b1aefbf366af96b320ba82e96026d07c",
".git/objects/de/d270a4a1c1e30036a7acf41394f7980bfe6c67": "b610f436dcd3316cca994c3443f18226",
".git/objects/df/7d2dcb89ab89da87467c0e1059b38c8d8f9296": "a44162ff357b024e4638ab18a9bb01c7",
".git/objects/e0/e2dc888cfeaa9b7ecd53ffa85d911afd6d9542": "c7b32bac78b7336526d41c986eaa0b1a",
".git/objects/e6/b745f90f2a4d1ee873fc396496c110db8ff0f3": "2933b2b2ca80c66b96cf80cd73d4cd16",
".git/objects/e8/55dc987b0db3ccd24a8869a087233a0e124f27": "9b242467f4dfe05ce7d2727a68a1ea66",
".git/objects/e9/75cb51650cf7330a71c3e6b01d82789ea144f6": "c3cd441666c8434ced74a357bbe8f3f9",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f0/2f2f7a5131dee23ae2329609cc0d0e7286a768": "7e4d3ab1badb672b18b389919fef5a32",
".git/objects/f7/0b725c656a5f3e359684bad0ca5c1fca617ea0": "15cb52530a5ac0f0fc5e698d68e70839",
".git/objects/fa/48d9d141e693fbf115a174043fc2a1d1ac280a": "2769a636657035a8faedffd0c40b7492",
".git/objects/fb/168d85801ebf8fb800cd5fa5597c5aa3ff8782": "4dd4fab03d0956ca2e20d4cebd3d3f03",
".git/objects/fc/de1bb3df8c330568f07ef326d43d8ae3562897": "6e5bf2450330342c243afc3723b9c27e",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/5af8f877ea0fc48ba6aef654dbbe7b56dab3cf": "ef7570885cce4829423aefa92f92ae9a",
".git/refs/heads/main": "bf0344fb51aea24f310c89ead1b80538",
".git/refs/remotes/origin/main": "bf0344fb51aea24f310c89ead1b80538",
"assets/AssetManifest.bin": "f5b7bccd7e73f5f632ee4f81f8767911",
"assets/AssetManifest.json": "2eb082f0b259d8d9c565b8e9eaea3961",
"assets/assets/fonts/TitilliumWeb-Bold.ttf": "d49a8ee8f1baee082909ab2e7c4062d1",
"assets/assets/fonts/TitilliumWeb-Regular.ttf": "57e937e4eef39e324bd4f26745053687",
"assets/assets/images/1.png": "428c2042c47add712beebbcef67d9b71",
"assets/assets/images/10.png": "6ce00d861807472fb1dd04a834917118",
"assets/assets/images/2.png": "11df31284dedc5b3e9585ad9c68977be",
"assets/assets/images/3.png": "16bd51c952499c32be25a406493434fc",
"assets/assets/images/4.png": "411b55fe9bd81b31d40c7fce51b7fe56",
"assets/assets/images/5.png": "bb4c8c7eac0eb45f8d339d21bafeb4e5",
"assets/assets/images/6.png": "b9ded32add3cdf2194e9da5d3a107227",
"assets/assets/images/7.png": "f206ec50791b489cf0295cd3019bd45b",
"assets/assets/images/8.png": "47157ea26de6d0b1f8b95019f1453361",
"assets/assets/images/9.png": "f0e3068de9b29435cf3ab820412f67da",
"assets/assets/images/back.png": "dedd5a9d9f7a535818f5880758848d56",
"assets/assets/images/demo.png": "88edd3b56e564cb1c9be9bdf20cb305e",
"assets/assets/images/main.png": "09843bc0c8e514d8bc6f99417e493fe7",
"assets/assets/images/show_more.png": "5c6422efb7470d7e6e0cac24766273f4",
"assets/assets/images/t.png": "bab3987820edaebb0964639af51cbe0c",
"assets/assets/images/tringle.svg": "a1c639720444947f2d22bd2c6b6e71ed",
"assets/assets/images/tt.svg": "3a1282159f99142f536a574c6f4bc664",
"assets/FontManifest.json": "77c54a9cb6151673e8dbd5cfae65e2c6",
"assets/fonts/MaterialIcons-Regular.otf": "b7ee4f0996c98d38dc16bf1f0f510c0b",
"assets/NOTICES": "ec2f004ac4afba932d05e23ad352b685",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"canvaskit/canvaskit.js": "bbf39143dfd758d8d847453b120c8ebb",
"canvaskit/canvaskit.wasm": "42df12e09ecc0d5a4a34a69d7ee44314",
"canvaskit/chromium/canvaskit.js": "96ae916cd2d1b7320fff853ee22aebb0",
"canvaskit/chromium/canvaskit.wasm": "be0e3b33510f5b7b0cc76cc4d3e50048",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "1a074e8452fe5e0d02b112e22cdcf455",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "6b515e434cea20006b3ef1726d2c8894",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "86cfde4d5420b66eeb141bfdea4c14e9",
"/": "86cfde4d5420b66eeb141bfdea4c14e9",
"main.dart.js": "2b60487b94464652c11b5aeb78849788",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
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
