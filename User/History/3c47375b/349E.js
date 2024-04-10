const currency = (number) => {
    new Number(Intl.NumberFormat('de-DE').format(number));
};