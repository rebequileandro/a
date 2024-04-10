export const formatNumber = (number) => {
    console.log(number)
    return new Intl.NumberFormat('de-DE').format(parseInt(number));
};