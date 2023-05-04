// // Set options as a parameter, environment variable, or rc file.
// // eslint-disable-next-line no-global-assign
// require = require("esm")(module/* , options */)
// module.exports = require("./main.js")

import { arrayToObject } from "./src/array.js"
import { objectToArray } from "./src/object.js"
import { sleep, sleepForProtection } from "./src/sleep.js"
import { fetchJson, fetchText } from "./src/fetch.js"
import localStorage from './src/json.js'
import { getPrivateMethodsInTest } from "./src/testHelper.js"

// ESM syntax is supported.
export {
	arrayToObject,
	objectToArray,
	sleep, sleepForProtection,
	fetchJson, fetchText,
	localStorage,
	getPrivateMethodsInTest,
}
