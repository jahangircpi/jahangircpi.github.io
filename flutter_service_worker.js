'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "4a949352db1bed18029960447253bf65",
".git/config": "55a34647b63ae610e214f7ff1f2536b3",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "db4d62db2039e4bec38baa7567788284",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "e4db8c12ee125a8a085907b757359ef0",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "517f14b9239689dff8bda3022ebd9004",
".git/index": "b71b6b5337b35e7440f373f0fef614ac",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b4e9523d7bd81434d3a5cf1efd008879",
".git/logs/refs/heads/main": "f0f5a0c9866ac893bff2346772adcfc7",
".git/logs/refs/remotes/origin/main": "23e02819bb50ce87cf376b3c9a8b39a3",
".git/objects/8a/236337aa1b16a0745a2f4fbcc9087fc2984dc7": "fcc60bd5cd9d864529cee780528bf97d",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/00/48245f221eaa55b318cbc213bfe29bdeeb90ff": "6269f42f21b6c0585527a73ac41eea74",
".git/objects/05/ee033d3430c7cd7e5bf85d872d8d586bb1fbba": "44943af3270bea3eb2a2283c0e18ed0e",
".git/objects/0d/0df08f7c3e147a8ae36017cf81a96e35b73717": "106e868f28a72727fb6fb0fa71123633",
".git/objects/0d/8601125b6b65e4f266f5d8899c051d47587016": "9a7f14dd8de8dd078bedbb40057ea4e9",
".git/objects/18/81be82ae7b1de96786a0e67fc74a04780ae87b": "dc9c543909285f04afb4d66cd7fbbcd7",
".git/objects/19/289827313bfdb3e7ffe9ffac1c79f81212646c": "8d105d1fa17185fd18bd55e11e52e71f",
".git/objects/1c/1862971b81db24ddb34507c9e905a856d954ca": "08e9b88688df4084401a771d11663ac4",
".git/objects/1e/d360cfe75a58ee18a121e8257b89bcbf0f0b20": "581ae94625f2c121ed78ccad2a744160",
".git/objects/20/bd21fd8cd5b0d22e33462aa7ccb4ee2eb264fa": "24196f36bf3e13fe3e23987513621a6b",
".git/objects/24/b1f14dd348b07c9b8373758bde9ac14d16fd92": "dbf45d6c044044561758a334420e9569",
".git/objects/25/ebf119ad9d5279f3bf97cda8974b1d4fccef93": "5415f476634eed8ebbc3f38ecf3bcb98",
".git/objects/29/0bebd4666928bb96658fb3e860b11e2c31198b": "3925e5a8317495edac1f1bff391a50ff",
".git/objects/2c/8a909b2e18eac91ba9ca01c33e308465afb3e4": "d3f61293e2910aefa44ca45f5b71f55d",
".git/objects/2d/cf3542c874e33cd8ab86ceb6f0ec444228aa78": "66baad0ae5d874f09b6eee790095bc65",
".git/objects/31/24d413bd0473255e311dc6faec4008b2b94638": "633fa04f91ee24783ebdcaf625553a59",
".git/objects/35/1e7202bc7cdb9d8f496d4d6592f56cb800d86c": "c0201d3f4f2ea221c6a8c31c8b4b593d",
".git/objects/36/b9afe6d4e1a3788f7a8165c216b29afb4be88f": "c46a440d55f2f30ae51ce5e9d3deae08",
".git/objects/3e/42da627b83324e1af40474394c3e8570470e8d": "d75bd73e5d388d4a2a88469fafa8089f",
".git/objects/41/9d2673f13996fe27baeecb8c1a30c0a8dcb2a2": "e5f84afaea3667aea2fa1541fbe4c1dd",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7cb7e7eba3deb4b4d8d362bd2b082a7aec8f2d": "67104e8dcca32ee58535e168aadc230c",
".git/objects/49/d20af8a809090a5cae58a8023f6450356809fb": "70098739dc6f14504130a7e0c256381e",
".git/objects/4a/4b4a3b842f0cf29dc516f54406d45113d50798": "539aa699e5d7d232dea819839f21237d",
".git/objects/4a/88a65f5fc3bfb63beb0afb3d04d7d348f17c05": "76f055e0f05a7d03176bc0225dd1099c",
".git/objects/4e/89617a3696bd10c155ec378f4a65a9f89e9e3a": "d8056e20bae90d092b619c895129e982",
".git/objects/52/480a63b1f184ea74afb06662aa98fa98864864": "6f8b2cf71be2b4830601f9db57eded45",
".git/objects/54/68112f819da55a73b20ca4037d39b1520198f4": "e4be751108b15ebc2c7283a897680ce7",
".git/objects/59/62efb2dffef4c259bda261b128fcab4b659c34": "11e1a7683fedc73b6a0da57ee3c6a112",
".git/objects/5a/cd82a77230509e5e6d54842ceaa6a8f351cede": "7fd7143722ea56daea4d2d2852abd5b8",
".git/objects/63/fff537ec360d389e71d83710826eea3017372b": "3256b8b7c64017500397c111ccc844ed",
".git/objects/66/06bf2e7a71346973132cc92ac96217464bba84": "f9d448d01f74100560271f958cfbba1e",
".git/objects/6e/dbab6dbd3765f9a8a83317564d7b0689d47360": "fed4365a90575accf5257812dbffc447",
".git/objects/76/8651b2e249c2517c7b37bdbeea0a5d8bfbb707": "495b1c4fefa633f6afe4dc5840ebe18f",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/0ae7a0860a7198c25b0aca0c4838c0ce0cc1d6": "0d47072f07c1ef693ccb1c2999ca7905",
".git/objects/83/99d27fdaef62d4bae8f232bd103f908b260a0a": "80442b5f8b595a0eed179177770eb119",
".git/objects/83/b21e742e739bffa38798b54c08b0bb2d1972e0": "02b88c4d104aee650e8fa37501230f0c",
".git/objects/85/a1620b687f4da63450ad64124d997ba5c1fb31": "05812fc686b2e08ff456dff5ee2a0f48",
".git/objects/87/9e27ee0f9dd3f91e9205f171a6959571b636e6": "27cd48587bd50aebcd6560d7e0af5d91",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8b/ec1118084d82165eda26c4e2ad1b869aec6569": "a73bd2e94393ba3c913a323163c15a00",
".git/objects/96/b6121b2d21db3f4fc7f97c300f916f5b1b8616": "62ee5b4c7d31f4fef40a7dd0348b4e99",
".git/objects/97/b710d27236186e2f5f62d9ed2acf50f8a14c88": "64e4a655bb13f45f0eb38d3e50e580fd",
".git/objects/98/9ae8d900a77c9177fff7c82f5c9a2016db8b81": "de1cbebd77e42c40fe770ef90846e313",
".git/objects/99/b55273be9628c0b2e79b7dbed90ecaad332f8d": "0a141b78e1d8d01c34f80f560c9b582a",
".git/objects/9b/33d6d1b4192f1404159a41547f517fab1d90ca": "9c87b438671ddf139013ed75c26ffd8d",
".git/objects/9f/1103ab6a4525ac2f88184fb14d8157a85e6951": "535784757d972d759abb44b6ff7f0ca2",
".git/objects/a1/2c27721de0db38647d64db12401f4807aacdb5": "2f005488e413ff978b404d1259d64679",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a9/8ebf1b010c2ec08150f89052db0b29fc1726ac": "b7b8f9390f2480140fe8e7eb02973f41",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ad/bfb285d57b9196b564780750dd50329b600545": "bff1dcf78175c26a0979e9e13ec68046",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b8/347d068352937bfcff2c5837c43cc19628ddb2": "54387ad7c91a2e8aebc8a4c1e0a8f7f2",
".git/objects/b8/4e6cea45ebb0dff1aeb1045bb72238a4c9a34c": "2e988fcbf3875a7c340b2e053fbd45a2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/e548112fdd4adcc12f278729a3a8bbe46f7bff": "d7d938c5fc668026575835a823aeaea3",
".git/objects/be/d8040b15d82a9787ee9c4ccb5caef25da1a2f3": "cd45dc1fa0b3018c2060e1415b1ec138",
".git/objects/c0/e4e755469f210e143a393065acd7c5ba7cea37": "cde9844814502209f9189ec5f24861d6",
".git/objects/c1/ace7af5bcc0220f8dea2879c97a7b855afe550": "d303ac4f1aeb1e8064b71880831af677",
".git/objects/c3/a3d3d3283e2313751080267db96ab2f65e7d0a": "473c5069b097732ecb8993aa4ae46815",
".git/objects/c9/f0390b7312b2875b13a90879893619a79c4d4a": "7799b0c78613da146350f90abb54315d",
".git/objects/cb/ae968656d691f10103096becee08e9b02a75a5": "f282e374e6865f024c7d649f5dceb40f",
".git/objects/d1/90a1a00ff38ec84dd06e03619a99ec88a8a8e8": "92bbe61c53085f40b505a998b109a848",
".git/objects/d2/173ec6d505271e506400a09a1202f7de7b421d": "7df98d9acb2ad002b2366def4bf44675",
".git/objects/d3/50fa6106fed4604f1d34ed0229890f16506f3c": "bc998e1d96f1f5dff3df768fef5f8aa0",
".git/objects/d6/97c4edd586415c5face8d546fc23d04b2f9f29": "39db60506e415ec9bdb6d277851b33b7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/d7/b71229fe7e7ac07ea3790f570b61a8c618eca6": "9cf40d97b6c15fef36531e82c3fe7b4b",
".git/objects/d9/6cca17a0a2c5b238f2c2eabe999919bf1d4e91": "58853f485f370ea987f3abb8904ebdce",
".git/objects/dc/423e2fdea2bf734e5831e239eacd91b40d750d": "8a12edbd3294f3da87ab90e66020ed8b",
".git/objects/e0/285ef5440a7a4d1021518f20f936d0ba40ad28": "dc602ffcca5caf07ea881824c7e94edd",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/31d65a9b40a346e032a3dda01300be1b17f37f": "44107b1f03702b3ad30367991c15eaef",
".git/objects/e9/06515b5ea0b1680cd817d381211c48b421e148": "7f656041eb73b1b422cb98bbc962e975",
".git/objects/e9/9801f1a868c7bb2b91a0d88d0b126c5f6b4eb0": "586b512ff2de2fbd4346577295526d9b",
".git/objects/e9/e575d0b36ebd696294496017834c26b62e1505": "8eca52e53d59927cc7c00a13888ea67b",
".git/objects/eb/34bff38f2573311ca243882e83416aad9cb6b8": "ba3664dc11887eec0c5b60e645882a13",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/a098d69aa54e4633ae2ec2e08fc3afc44f5b8a": "aecc42ae71e73981d2b43973a83e6c47",
".git/objects/ee/d827a4ace21e0f39e3dd393b0864d3f9ec7215": "509c479f28787f779af317cebb23f940",
".git/objects/f1/b75953f7e427d7275b86ad0f68cd70dd909f03": "f7fa80f321c376e68ae3f889c07f7883",
".git/objects/f2/1e8b497b3b74a4cf6ab7a7332f5c7e1be5760e": "f2b92e71b2993379ce98ffee9ac101b9",
".git/objects/f8/13130da0227807ae1aff7bfedb44b851491f4d": "10ebaf98ae9f1249284624c50f3ee180",
".git/objects/fe/3914bcf3baf9d87a873a444cac8aaf9dcd54c1": "372add7dd6cdabc32b9333e8d66bff72",
".git/objects/fe/62618d2e2582c63f041ddfed6d43a007bb74ff": "4d3acd5f8971c1b01d90cfac8f0cbe4c",
".git/refs/heads/main": "821efa65c64d8854eda3c35364f29b37",
".git/refs/remotes/origin/main": "821efa65c64d8854eda3c35364f29b37",
"assets/AssetManifest.json": "3e8cf487d84d5aa909b1b38fa316bf4e",
"assets/assets/images/links.png": "114f2a63c9b9bc5e7d90ba2e38ce3dfd",
"assets/assets/images/logo.png": "66c0e02785b1cdab4b397313430b44fb",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/NOTICES": "ac90e960b45e409238b07f2617302bb4",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b61016dc2db5a01067499e1de9ae9994",
"/": "b61016dc2db5a01067499e1de9ae9994",
"main.dart.js": "96693c48bb876098c18f54fc9f29d80c",
"manifest.json": "d40c47d1c161f94dbcb13094d37f1f55",
"version.json": "009c9e65172e010890f7f65fde438006"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
