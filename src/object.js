/**
 * 
 * @param {object} object 
 * @param {string} keyName 
 * @returns {Array<object>}
 */
const objectToArray = (object, keyName = 'key') => {
    // Object => Array
    const items = Object.keys(object).map(key => ({ [keyName]: key, ...object[key] }));
    return items;
};

export { objectToArray };