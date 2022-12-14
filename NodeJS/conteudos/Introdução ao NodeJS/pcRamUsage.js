const os = require('os');

setInterval(() => {
    const { arch, platform, totalmem, freemem } = os;
    const tRam = totalmem() / 1024 / 1024;
    const fRam = freemem() / 1024 / 1024;
    const usage = ((fRam/tRam)*100).toFixed(2);
    
    const stats = {
        os: platform(),
        arch: arch(),
        totalRam: `${parseInt(tRam)} MB`,
        freeRam: `${parseInt(fRam)} MB`,
        usage: `${usage} %`
    }
    
    console.clear();
    console.table(stats);
    exports.stats = stats;
}, 1000);
