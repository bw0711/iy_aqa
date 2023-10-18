async function delayAndLog(message, milliseconds) {
    await new Promise(resolve => setTimeout(resolve, milliseconds));
    console.log(message);
};

delayAndLog("Start", 1000)
    .then(() => delayAndLog("This is a 1-second delay", 1000))
    .then(() => delayAndLog("This is a 2-second delay", 2000))
    .then(() => delayAndLog("Done", 0));