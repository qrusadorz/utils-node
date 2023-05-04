/**
 * 
 * @returns {string}
 */
const getRootpath = () => {
    // 現在実行中のファイルのURLを取得
    const currentFileUrl = import.meta.url;

    // URL をファイルパスに変換
    const currentFilePath = fileURLToPath(currentFileUrl);

    // ルートディレクトリのパスを取得
    const currentDir = path.dirname(currentFilePath);

    const rootpaths = currentDir.replace(/\\/g, '/').split('/');
    rootpaths.pop();	// remove utils folder
    const rootpath = rootpaths.join('/');
    // console.log('rootpath:', rootpath);
    return rootpath;
}

export { getRootpath };
