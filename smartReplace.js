const download = require("download");
async function replaceWithSecrets(content, Secrets) {
    if (!Secrets || !Secrets) return content;
    const replacements = [];
    await init_notify(Secrets, content, replacements);
        if (Secrets.QQREAD_COOKIE) {
            replacements.push({ key: "$.getdata(qqreadurlKey)", value: JSON.stringify(Secrets.QQREAD_COOKIE.split("\n")[0]) });
            replacements.push({ key: "$.getdata(qqreadheaderKey)", value: JSON.stringify(Secrets.QQREAD_COOKIE.split("\n")[1]) });
            replacements.push({ key: "$.getdata(qqreadtimeurlKey)", value: JSON.stringify(Secrets.QQREAD_COOKIE.split("\n")[2]) });
            replacements.push({ key: "$.getdata(qqreadtimeheaderKey)", value: JSON.stringify(Secrets.QQREAD_COOKIE.split("\n")[3]) });
            //replacements.push({ key: "qqreadsign();", value: "{qqreadsign(); qqreadsign2();}" });
            //replacements.push({ key: "11&&sign.data.videoDoneFlag==0", value: "99" });
        }
        if (Secrets.QQREAD_COOKIE2) {
            replacements.push({ key: "$.getdata(qqreadurlKey)", value: JSON.stringify(Secrets.QQREAD_COOKIE2.split("\n")[0]) });
            replacements.push({ key: "$.getdata(qqreadheaderKey)", value: JSON.stringify(Secrets.QQREAD_COOKIE2.split("\n")[1]) });
            replacements.push({ key: "$.getdata(qqreadtimeurlKey)", value: JSON.stringify(Secrets.QQREAD_COOKIE2.split("\n")[2]) });
            replacements.push({ key: "$.getdata(qqreadtimeheaderKey)", value: JSON.stringify(Secrets.QQREAD_COOKIE2.split("\n")[3]) });
            //replacements.push({ key: "qqreadsign();", value: "{qqreadsign(); qqreadsign2();}" });
            //replacements.push({ key: "11&&sign.data.videoDoneFlag==0", value: "99" });
        }

        await downloader(content);//检查所需额外js

    return batchReplace(content, replacements);
}
function batchReplace(content, replacements) {
    for (var i = 0; i < replacements.length; i++) {
        content = content.replace(replacements[i].key, replacements[i].value);
    }
    return content;
}

async function init_notify(Secrets, content, replacements) {
    if (!Secrets.PUSH_KEY && !Secrets.BARK_PUSH && !Secrets.TG_BOT_TOKEN) {
        if (content.indexOf("require('./sendNotify')") > 0) {
            replacements.push({
                key: "require('./sendNotify')",
                value:
                    "{sendNotify:function(){},serverNotify:function(){},BarkNotify:function(){},tgBotNotify:function(){}}",
            });
        }
    }
}
async function downloader(content) {
    if (content.indexOf("jdFruitShareCodes") > 0) {
        await download_jdFruit();
    }
}

async function download_notify() {
    await download("https://github.com/lxk0301/jd_scripts/raw/master/sendNotify.js", "./", {
        filename: "sendNotify.js",
    });
    console.log("下载通知代码完毕");
}

module.exports = {
    replaceWithSecrets,
};
