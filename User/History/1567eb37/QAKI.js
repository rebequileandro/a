importScripts("https://www.gstatic.com/firebasejs/9.13.0/firebase-app.js")
importScripts("https://www.gstatic.com/firebasejs/9.13.0/firebase-messaging.js")


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDRr6k__CyKC68oTeU1UqIiO0zD9aHhnMU",
    authDomain: "shoozatesting.firebaseapp.com",
    projectId: "shoozatesting",
    storageBucket: "shoozatesting.appspot.com",
    messagingSenderId: "25049375640",
    appId: "1:25049375640:web:60615e0223e5de7f1441ed"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging(app)

messaging.onBackgroundMessage(payload => {
    const notificationTitle = payload.notification.title;
    const notificationOption = {
        body: payload.notification.body,
        icon: "./icons/icon-144.png"
    }
    return self.ServiceWorkerRegistration.showNotification(notificationTitle, notificationOption)
})