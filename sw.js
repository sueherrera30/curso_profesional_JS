self.addEventListener('install', event => {
    event.waitUntil(precache())
})

self.addEventListener('install', event => {
    event.waitUntil(precache())
})

// usar del api del dom : caches.

async function precache(){
    // asemos una instancia de cache, como recibie promesa, hacemos función asincrona.
    const cache = await caches.open("v1")
    return cache.addAll([
        '/',
        './index.html',
        './assets/index.css',
        './assets/index.js',
        './assets/ejercicio.mp4',
        './assets/MediaPlayer.js',
        './assets/plugins/autoPause.js',
        './assets/plugins/autoPlay.js',
    ])      
}


// en nav ver si se guardo v1,