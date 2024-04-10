const sliceObject = (object, from, to) => {
    const sliced = Object.keys(object).slice(from, to).reduce((result, key) => {
        result[key] = object[key];

        return result;
    }, {});
    return sliced
}

const result = sliceObject({
    0: 'zero',
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four'
}, 0, 3)