const wedrink = require('../src/assets/wedrink_logo.png')

self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: wedrink,
        vibrate: [100, 50, 100],
    });
});