export const formatNotificationBartender = (data) => {
    let messagePush;
    data?.forEach((e) => {
        if (!messagePush) {
            messagePush = `${e.title[0].toUpperCase() + e.title.slice(1)} x${e.quantity
                }`;
        } else {
            messagePush = `${messagePush}, ${e.title[0].toUpperCase() + e.title.slice(1)
                } x${e.quantity}`;
        }
    });
    return messagePush;
}