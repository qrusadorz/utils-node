import { setTimeout } from 'timers/promises'

const sleep = async ms => await setTimeout(ms);

// 規定時間未満の連続アクセス防止
const sleepForProtection = async (duration, start) => {
    const sleepTime = start + duration - Date.now();
    if (sleepTime > 0) {
        console.log('sleep...');
        await sleep(sleepTime);
    }
    return Date.now();
};

export { sleep, sleepForProtection };
