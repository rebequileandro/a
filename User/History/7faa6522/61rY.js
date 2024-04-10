export const formatNotificationBartender = (data) => {
    let messagePush;
    data?.forEach((e) => {
        if (!messagePush) {
            messagePush = `${e.nameDrink[0].toUpperCase() + e.nameDrink.slice(1)} x${e.amount
                }`;
        } else {
            messagePush = `${messagePush}, ${e.nameDrink[0].toUpperCase() + e.nameDrink.slice(1)
                } x${e.amount}`;
        }
    });
    return messagePush;
}