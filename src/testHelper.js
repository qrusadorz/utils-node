// for npm test
const getPrivateMethodsInTest = (methods) => process.env.NODE_ENV === 'test' ? methods : {};

export { getPrivateMethodsInTest };
