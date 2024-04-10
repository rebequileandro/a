/* eslint no-restricted-globals: "off" */
import * as precaching from 'workbox-precaching'
// your own imports

if (self.__precacheManifest) {
    precaching.precacheAndRoute(self.__precacheManifest)
}

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: './wedrink_logo.png'
    });
});