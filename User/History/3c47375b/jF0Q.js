export const formatNumber = (number) => {
    return new Intl.NumberFormat('de-DE').format(parseInt(number));
};
export const formatPrice = (number, currency) => {
    currency === "€" ?
        `${new Intl.NumberFormat('de-DE').format(parseInt(number))}€` : `${currency}${new Intl.NumberFormat('de-DE').format(parseInt(number))}`
};