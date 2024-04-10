export const formatNumber = (number) => {
    return new Number(Intl.NumberFormat('de-DE').format(number));
};