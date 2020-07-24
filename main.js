import { arrayToObject } from "./src/array"
import { objectToArray } from "./src/object"
import { sleep, sleepForProtection } from "./src/sleep"
import { fetchJson, fetchText } from "./src/fetch"
import {
	readFile, readTextFile, readBinaryFile, writeFile, writeTextFile, writeBinaryFile, deleteFile, getFiles, mkdir, rmdir
} from './src/json'
import { getPrivateMethodsInTest } from "./src/testHelper"

// ESM syntax is supported.
export {
	arrayToObject,
	objectToArray,
	sleep, sleepForProtection,
	fetchJson, fetchText,
	readFile, readTextFile, readBinaryFile, writeFile, writeTextFile, writeBinaryFile, deleteFile, getFiles, mkdir, rmdir,
	getPrivateMethodsInTest,
}
