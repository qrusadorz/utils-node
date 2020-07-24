import iconv from 'iconv-lite';
import fetch from 'node-fetch';
import AbortController from 'abort-controller';
// for "reason: unable to verify the first certificate"
// see: https://github.com/node-fetch/node-fetch/issues/15#issuecomment-533869809
import https from "https";
const agent = new https.Agent({
    rejectUnauthorized: false
});

const fetchCore = async (url, option = {}) => {
    // set timeout after 15s
    const controller = new AbortController();
    const timeout = setTimeout(() => {
        controller.abort();
    }, option.timeout || 15000);

    try {
        const response = await fetch(url, {
            method: 'GET',
            mode: 'cors',
            cache: 'default',
            agent: option.resolveUnauthorized ? agent : undefined,
            signal: controller.signal, // for timeout
            ...option,
        });

        if (!response.ok) {
            const description = `status code:${response.status} , text:${response.statusText}`;
            throw new Error(description);
        }

        return response;

    } finally {
        clearTimeout(timeout);
    }
}

const fetchJson = async (url, option) => {
    const response = await fetchCore(url, option);
    return await response.json();
}

const fetchText = async (url, option) => {
    const response = await fetchCore(url, option);

    if (option.sjis) {
        return iconv.decode(Buffer.from(await response.arrayBuffer()), "shift_jis")
    }

    return await response.text();
}

export { fetchJson, fetchText };
