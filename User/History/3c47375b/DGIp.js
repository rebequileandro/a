const currency = (number) => {
    return new Number(Intl.NumberFormat('de-DE').format(number));
};