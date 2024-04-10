export const formatNotificationBartender = (data) => {
    let messagePush;
    data?.forEach((e) => {
        if (!messagePush) {
            messagePush = `${e.title[0].toUpperCase() + e.title.slice(1)} x${e.amount
                }`;
        } else {
            messagePush = `${messagePush}, ${e.title[0].toUpperCase() + e.title.slice(1)
                } x${e.amount}`;
        }
    });
    return messagePush;
}