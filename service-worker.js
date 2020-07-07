/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "9c024acf2201ca9d3adfc2bc443bb792"
  },
  {
    "url": "about/index.html",
    "revision": "5f68694f057928ea780f01c4d1ab5193"
  },
  {
    "url": "assets/css/0.styles.0e3572c7.css",
    "revision": "5f1b5da1d6c11a07ea2d10ae7f330570"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.882074b5.js",
    "revision": "3a4b6c5b98913154affa7d8cbeca89c2"
  },
  {
    "url": "assets/js/11.0ee5cb97.js",
    "revision": "0e88e6a75d75c1e815ab8cc97cf17c45"
  },
  {
    "url": "assets/js/12.8ad07b71.js",
    "revision": "bb21dab608128a63df1bde2b106bba44"
  },
  {
    "url": "assets/js/2.26fe35b8.js",
    "revision": "c984dd595043b6aac5743e4dd8e41e8e"
  },
  {
    "url": "assets/js/3.f65781cc.js",
    "revision": "4751dc60a65d48c5c383b8495680324c"
  },
  {
    "url": "assets/js/4.d8ecabe1.js",
    "revision": "94cd7ae6ad4fd4aa27938c30e20e52d2"
  },
  {
    "url": "assets/js/5.e47ddb0a.js",
    "revision": "d6bd18e2d134a2aa3f7b737577f98248"
  },
  {
    "url": "assets/js/6.d8b20aeb.js",
    "revision": "7237211c49d60c381c9d4169c5ed589c"
  },
  {
    "url": "assets/js/7.4a2cbf28.js",
    "revision": "b8c4702ef86e6795090778c385422b36"
  },
  {
    "url": "assets/js/8.fd32f62d.js",
    "revision": "82c930394cfb3a7acf1364e5c62d6d46"
  },
  {
    "url": "assets/js/9.0ee2c1f7.js",
    "revision": "beb4d26e89fe3889ccb76e069dc9234a"
  },
  {
    "url": "assets/js/app.50b51c9a.js",
    "revision": "2617ecf15ea58143e037eaffc88aa89f"
  },
  {
    "url": "bory.jpeg",
    "revision": "5902b512c23c6906625d8d2de3b08716"
  },
  {
    "url": "file/index.html",
    "revision": "2d0c3883d58ebe10296bf612456407fe"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "bb10a0306e4fe28f8b0bee8b3bfed836"
  },
  {
    "url": "markdown/index.html",
    "revision": "b05059e92edc90d8d2a3506e38fbf001"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
