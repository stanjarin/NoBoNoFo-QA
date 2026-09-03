const CACHE="nobonofo-pass5m";
const CORE=["./","./index.html","./manifest.webmanifest","./books/index.json",
"./assets/LIBRARY_BODY.png","./assets/LIBRARY_BASE.png","./assets/HST.png","./assets/CONTENTS_BASE.png","./assets/NOBO_ICON.png"];
self.addEventListener("install",e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(CORE)))});
self.addEventListener("activate",e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()))});
self.addEventListener("fetch",e=>{
 if(e.request.method!=="GET")return;
 const u=new URL(e.request.url);
 const fresh=e.request.mode==="navigate"||u.pathname.endsWith("/index.html")||u.pathname.endsWith("/manifest.webmanifest")||u.pathname.includes("/books/");
 if(fresh){e.respondWith(fetch(e.request,{cache:"no-store"}).then(r=>{const q=r.clone();caches.open(CACHE).then(c=>c.put(e.request,q));return r}).catch(()=>caches.match(e.request)));return}
 e.respondWith(caches.match(e.request).then(h=>h||fetch(e.request).then(r=>{const q=r.clone();caches.open(CACHE).then(c=>c.put(e.request,q));return r})))
});
