const getRootpath = () => {
    // TODO __dirnameを利用するからガード不要かも？
    // do not have process.mainModule, when npm test
    if (!process.mainModule) return;

    // const rootpaths = process.mainModule.filename.replace(/\\/g, '/').split('/');    // 実行コマンドのパスになるためNG
    // rootpaths.pop();	// remove file name
    const rootpaths = __dirname.replace(/\\/g, '/').split('/');
    rootpaths.pop();	// remove utils folder
    const rootpath = rootpaths.join('/');
    // console.log('rootpath:', rootpath);
    return rootpath;
}

export { getRootpath };
