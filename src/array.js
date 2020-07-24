const arrayToObject = (array) => {
    // Array => Object
    const result = {};
    array.forEach(element => {
        result[element.id] = element;
    });
    return result;
};

export { arrayToObject };
