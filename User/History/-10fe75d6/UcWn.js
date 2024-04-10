self.addEventListener('push', e => {
    const data = e.data.json();
    console.log(data)
    console.log('Notification Received');
    self.registration.showNotification(data.title, {
        body: data.message,
        icon: "https://media-exp1.licdn.com/dms/image/C4D0BAQGHR1zj3DR6GQ/company-logo_200_200/0/1645624110195?e=2147483647&v=beta&t=5uBaq3KXQaL-JNum8obuRfte0BjfTWvp3HOgeKNEXt8"
    });
});