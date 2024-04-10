export const formatNumber = (number) => {
    console.log(parseInt(number))
    return new Intl.NumberFormat('de-DE').format(parseInt(number));
};