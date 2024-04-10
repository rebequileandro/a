/* eslint-disable no-restricted-globals */
import { clientsClaim } from 'workbox-core';
import { ExpirationPlugin } from 'workbox-expiration';
import { precacheAndRoute, createHandlerBoundToURL } from 'workbox-precaching';
import { registerRoute } from 'workbox-routing';
import { StaleWhileRevalidate } from 'workbox-strategies';
import badge from './assets/shooza.png';
import shooza from './assets/wedrinkapp.png';
import confirm from './assets/notifications/confirm.svg'
import inPreparation from './assets/notifications/in_preparation.svg'
import getReady from './assets/notifications/get_ready.svg'
import ready from './assets/notifications/ready.svg'
import ORDER_STATUS from './models/order-stages.model';



clientsClaim();
precacheAndRoute(self.__WB_MANIFEST);

const fileExtensionRegexp = new RegExp('/[^/?]+\\.[^/]+$');
registerRoute(
  // Return false to exempt requests from being fulfilled by index.html.
  ({ request, url }) => {
    // If this isn't a navigation, skip.
    if (request.mode !== 'navigate') {
      return false;
    } // If this is a URL that starts with /\_, skip.
    if (url.pathname.startsWith('/_')) {
      return false;
    } // If this looks like a URL for a resource, because it contains // a file extension, skip.
    if (url.pathname.match(fileExtensionRegexp)) {
      return false;
    } // Return true to signal that we want to use the handler.
    return true;
  },
  createHandlerBoundToURL(process.env.PUBLIC_URL + '/index.html')
);

registerRoute(
  // Add in any other file extensions or routing criteria as needed.
  ({ url }) =>
    url.origin === self.location.origin && url.pathname.endsWith('.png'), // Customize this strategy as needed, e.g., by changing to CacheFirst.
  new StaleWhileRevalidate({
    cacheName: 'images',
    plugins: [
      // Ensure that once this runtime cache reaches a maximum size the
      // least-recently used images are removed.
      new ExpirationPlugin({ maxEntries: 50 })
    ]
  })
);

// ---- events ---- //
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

// ---- push notifications ---- //
self.addEventListener('push', (e) => {
  const data = e.data.json();
  self.registration.showNotification(data.title, {
    body: data.message,
    badge: badge,
    icon: data.orderStage === ORDER_STATUS.ORDER_CONFIRMED ? confirm : data.orderStage === ORDER_STATUS.IN_PREPARATION ? inPreparation : data.orderStage === ORDER_STATUS.GET_READY ? getReady : data.orderStage === ORDER_STATUS.ORDER_READY ? ready :
      shooza,
    actions: data.idOrder
      ? [
        { action: `order,${data.idOrder}`, title: 'Ver mi orden' },
        { action: 'marketplace', title: 'Ir a marketplace' }
      ]
      : []
  });
});

self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  const action = event.action?.split(',');
  if (action[0] === 'order') {
    self.clients.openWindow(`https://app.shooza.co/order/${action[1]}`);
  } else {
    event.waitUntil(
      self.clients.openWindow('https://app.shooza.co/marketplace')
    );
  }
});