module.exports.config = {
    name: "info",
    version: "1.0.0",
    permission: 0,
    credits: "nayan",
    prefix: true,
    description: "",
    category: "prefix",
    usages: "",
    cooldowns: 5,
    dependencies: 
	{
    "request":"",
    "fs-extra":"",
    "axios":""
  }
};
module.exports.run = async function({ api,event,args,client,Users,Threads,__GLOBAL,Currencies }) {
const axios = global.nodemodule["axios"];
const request = global.nodemodule["request"];
const fs = global.nodemodule["fs-extra"];
const time = process.uptime(),
		hours = Math.floor(time / (60 * 60)),
		minutes = Math.floor((time % (60 * 60)) / 60),
		seconds = Math.floor(time % 60);
const moment = require("moment-timezone");
var juswa = moment.tz("Asia/Dhaka").format("『D/MM/YYYY』 【hh:mm:ss】");
  
var callback = () => api.sendMessage({body:`
--------------------------------------------
𝐍𝐚𝐦𝐞       : BOSS~ASHIK
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 : পেম করলে দিতে পারি😇
𝐑𝐞𝐥𝐢𝐠𝐢𝐨𝐧   : 𝐈𝐬𝐥𝐚𝐦
𝐏𝐞𝐫𝐦𝐚𝐧𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫, 𝐃𝐡𝐚𝐤𝐚
𝐂𝐮𝐫𝐫𝐞𝐧𝐭 𝐀𝐝𝐝𝐫𝐞𝐬𝐬: 𝐓𝐚𝐫𝐚𝐤𝐚𝐧𝐝𝐢, 𝐒𝐚𝐫𝐢𝐬𝐡𝐚-𝐁𝐚𝐫𝐢, 𝐉𝐚𝐦𝐚𝐥𝐩𝐮𝐫, 𝐌𝐨𝐲𝐦𝐨𝐧𝐬𝐢𝐧𝐡, 
𝐆𝐞𝐧𝐝𝐞𝐫.   : 𝐌𝐚𝐥𝐞
𝐀𝐠𝐞           : 19+
𝐑𝐞𝐥𝐚𝐭𝐢𝐨𝐧𝐬𝐡𝐢𝐩 : 𝐒𝐢𝐧𝐠𝐥𝐞
𝐖𝐨𝐫𝐤        : 𝐒𝐭𝐮𝐝𝐞𝐧𝐭
𝐆𝐦𝐚𝐢𝐥       : bossagor745@𝐠𝐦𝐚𝐢𝐥.𝐜𝐨𝐦
𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩: wa.me/+8801647711001
𝐓𝐞𝐥𝐞𝐠𝐫𝐚𝐦  : লাগলে ইনবক্সে 😛
𝐅𝐚𝐜𝐞𝐛𝐨𝐨𝐤 𝐋𝐢𝐧𝐤 : https://www.facebook.com/profile.php?id=100095089282395&mibextid=ZbWKwL`,attachment: fs.createReadStream(__dirname + "/Joy/Messenger_creation_9825A13E-DF19-4A0E-A640-69629B148AF2.jpeg")}, event.threadID, () => 
    fs.unlinkSync(__dirname + ""));  
      return request(encodeURI(`https://graph.facebook.com/100065050393649/picture?height=720&width=720&access_token=6628568379%7Cc1e620fa708a1d5696fb991c1bde5662`)).pipe(
fs.createWriteStream(__dirname+'/cache/1.png')).on('close',() => callback());
   };
