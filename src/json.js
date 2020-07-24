import fs from "fs";
import { getRootpath } from './system';
const fsPromises = fs.promises;

const callback = err => { if (err) console.error(err); };

const getFiles = async (prefix) => {
    // TODO promisesではreaddir()がundefinedを返すためSyncを使用
    return fs.readdirSync(prefix).map(file => ({ filename: file }));
}

const readBinaryFile = async (filename) => {
    try {
        const data = await fsPromises.readFile(filename, { encoding: "binary" }, callback);
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

const readTextFile = async (filename) => {
    try {
        const data = await fsPromises.readFile(filename, { encoding: "utf8" }, callback);
        return data;
    } catch (e) {
        console.log(e);
        return null;
    }
}

const readFile = async (filename) => {
    try {
        const json = await readTextFile(filename);
        return JSON.parse(json);
    } catch (e) {
        console.log(e);
        return null;
    }
}

const writeBinaryFile = async (filename, text) => {
    await mkdir(filename);
    await fsPromises.writeFile(filename, text, { encoding: "binary" }, callback);
}

const writeTextFile = async (filename, text) => {
    await mkdir(filename);
    await fsPromises.writeFile(filename, text, callback);
}

const writeFile = async (filename, json, option = {}) => {
    await writeTextFile(filename, JSON.stringify(json, option.replacer, option.space));
}

const deleteFile = async (filename) => {
    try {
        // Check if the file exists in the current directory.
        // const ret = await fs.access('C:\\Users\\z\\src\\puppeteer-10bye\\latestDev.json', fs.constants.F_OK, (err) => {
        //     console.log(`${filename} ${err ? 'does not exist' : 'exists'}`);
        // });
        // const ret = await fs.access('C:\\Users\\z\\src\\puppeteer-10bye\\latestDev.json', fs.constants.F_OK);
        // const ret = await fs.access(filename, fs.constants.F_OK);
        // console.log('ret:', ret);
        // const acces = await fsPromises.access("itemsSalesPrice.jsonxxx", fs.constants.R_OK);

        await fsPromises.unlink(filename, callback);
    } catch (e) {
        console.error('deleteFile:', e);
    }
}

const mkdir = async (path) => {
    // remove file name
    const folders = path.split('/');
    folders.pop();

    let folderPath = getRootpath();

    for (const folder of folders) {
        folderPath += "/" + folder;
        try {
            await fsPromises.access(folderPath, fs.constants.F_OK);
        } catch (e) {
            // console.log("mkdir:", folderPath);
            await fsPromises.mkdir(folderPath);
        }
        // console.log('ret:', ret);
        // const acces = await fsPromises.access("itemsSalesPrice.jsonxxx", fs.constants.R_OK);
    }
}

const rmdir = async (path) => {
    const util = require('util');
    const exec = util.promisify(require('child_process').exec);

    try {
        await fsPromises.access(path, fs.constants.F_OK);

        // Windows専用
        const { stdout, stderr } = await exec(`rmdir /s /q ${path}`);
        console.log('stdout:', stdout);
        console.error('stderr:', stderr);

    } catch (e) {
        console.error('rmdir:', e);
    }
}

export default {
    readFile, readTextFile, readBinaryFile, writeFile, writeTextFile, writeBinaryFile, deleteFile, getFiles, mkdir, rmdir
};
