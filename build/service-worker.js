"use strict";var precacheConfig=[["/index.html","61705c37fd4114727bb37b041bc29c4b"],["/static/css/main.921ce39a.css","e016265817677dc34ba7d31b6733890a"],["/static/js/main.4c718e8e.js","c2e2727706a0ca44eb57c8e794026eef"],["/static/media/band.570b2266.JPG","570b22667e997bb32d70f77d38dd6716"],["/static/media/bandpg1.b08b7333.jpg","b08b73338b382f3ec6e200322bb7d2ad"],["/static/media/contactbg1.b4b5d766.jpg","b4b5d766285b4213503f48e4d4764b29"],["/static/media/eli.3eef17f6.JPG","3eef17f6c16a8ab893ccfcd52587a857"],["/static/media/icon.d4de5e95.jpg","d4de5e95225c3713d1909a70535b5307"],["/static/media/idan.4d0dc6b0.JPG","4d0dc6b05312f569082127eeb3713db2"],["/static/media/nik.92d8b8ed.JPG","92d8b8ed3e071c29c1ca176154ac935f"],["/static/media/raanan.001f1bcf.JPG","001f1bcfe3900c898214fc9cf493a3b9"],["/static/media/releasespg1.2e76f714.jpg","2e76f714a7472de19c9ab1dd911cdf42"],["/static/media/thanksbg1.7c8b9af1.jpg","7c8b9af11a1a4f31088b80f4a1f12b35"],["/static/media/yosef.0a9e5394.JPG","0a9e5394d1b0df0f0f6a566e9e03d75a"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,t){var n=new URL(e);return"/"===n.pathname.slice(-1)&&(n.pathname+=t),n.toString()},cleanResponse=function(t){return t.redirected?("body"in t?Promise.resolve(t.body):t.blob()).then(function(e){return new Response(e,{headers:t.headers,status:t.status,statusText:t.statusText})}):Promise.resolve(t)},createCacheKey=function(e,t,n,a){var r=new URL(e);return a&&r.pathname.match(a)||(r.search+=(r.search?"&":"")+encodeURIComponent(t)+"="+encodeURIComponent(n)),r.toString()},isPathWhitelisted=function(e,t){if(0===e.length)return!0;var n=new URL(t).pathname;return e.some(function(e){return n.match(e)})},stripIgnoredUrlParameters=function(e,n){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(t){return n.every(function(e){return!e.test(t[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var t=e[0],n=e[1],a=new URL(t,self.location),r=createCacheKey(a,hashParamName,n,/\.\w{8}\./);return[a.toString(),r]}));function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(a){return setOfCachedUrls(a).then(function(n){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!n.has(t)){var e=new Request(t,{credentials:"same-origin"});return fetch(e).then(function(e){if(!e.ok)throw new Error("Request for "+t+" returned a response with status "+e.status);return cleanResponse(e).then(function(e){return a.put(t,e)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var n=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(t){return t.keys().then(function(e){return Promise.all(e.map(function(e){if(!n.has(e.url))return t.delete(e)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(t){if("GET"===t.request.method){var e,n=stripIgnoredUrlParameters(t.request.url,ignoreUrlParametersMatching),a="index.html";(e=urlsToCacheKeys.has(n))||(n=addDirectoryIndex(n,a),e=urlsToCacheKeys.has(n));var r="/index.html";!e&&"navigate"===t.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],t.request.url)&&(n=new URL(r,self.location).toString(),e=urlsToCacheKeys.has(n)),e&&t.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(n)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(e){return console.warn('Couldn\'t serve response for "%s" from cache: %O',t.request.url,e),fetch(t.request)}))}});