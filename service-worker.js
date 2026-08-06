const CACHE_NAME = "learning-os-v1";

const APP_SHELL = [
    "./",
    "./index.html",
    "./manifest.json"
];


// Install
self.addEventListener("install", event => {

    event.waitUntil(
        caches.open(CACHE_NAME)
        .then(cache => {
            return cache.addAll(APP_SHELL);
        })
    );

    self.skipWaiting();

});


// Activate
self.addEventListener("activate", event => {

    event.waitUntil(

        caches.keys()
        .then(keys => {

            return Promise.all(

                keys.map(key => {

                    if (key !== CACHE_NAME) {
                        return caches.delete(key);
                    }

                })

            );

        })

    );

    self.clients.claim();

});


// Fetch Handler
self.addEventListener("fetch", event => {

    const request = event.request;


    // Do not aggressively cache reviewerData.js
    // because reviewers may be updated frequently
    if (
        request.url.includes("reviewerData.js")
    ) {

        event.respondWith(

            fetch(request)
            .catch(() => {

                return caches.match(request);

            })

        );

        return;

    }


    event.respondWith(

        caches.match(request)

        .then(response => {

            if(response){
                return response;
            }


            return fetch(request)

            .then(networkResponse => {


                if(
                    !networkResponse ||
                    networkResponse.status !== 200 ||
                    networkResponse.type !== "basic"
                ){

                    return networkResponse;

                }


                const clonedResponse =
                    networkResponse.clone();


                caches.open(CACHE_NAME)

                .then(cache => {

                    cache.put(
                        request,
                        clonedResponse
                    );

                });


                return networkResponse;


            });


        })

    );

});