const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.devs = "254102074064"
global.port =process.env.PORT
global.appUrl=process.env.APP_URL||""                       // put your app url here,
global.email="drexmose@gmail.com"
global.location="Lahore,Punjab,Pakistan"
global.mongodb= process.env.MONGODB_URI|| ""
global.DATABASE_URI=process.env.DATABASE_URL
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "120363023983262391@g.us"
global.scan="https://replit.com/@SuhailTechInfo/SuhailMdPairingCode?v=1";
global.timezone= process.env.TZ || process.env.TIME_ZONE || "Kenya/Africa";
global.github=process.env.GITHUB|| "https://github.com/drexmose/Shan-md";
global.gurl= process.env.GURL   || "https://chat.whatsapp.com/D5fn3uTfgPAHL9NKNuyF0G";
global.website =process.env.GURL|| "https://chat.whatsapp.com/D5fn3uTfgPAHL9NKNuyF0G" ; 
global.THUMB_IMAGE=process.env.THUMB_IMAGE||"https://i.imgur.com/tODY8OM.jpeg" ;






global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null,254102074064";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "254102074064";

module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Shan-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/
  style:process.env.STYLE|| "2",  // put '1' & "2" here to check bot styles


  HANDLERS:process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH  || "main",
  VERSION:process.env.VERSION || "v.1.2.7",
  caption:process.env.CAPTION || "©𝐒𝐇𝐀𝐍-𝐌𝐃" ,// ```『 𝐒𝐇𝐀𝐍-𝐌𝐃 』```", //*『𝐒𝐇𝐀𝐍-𝐌𝐃 • 𝐒𝐇𝐀𝐍-𝐌𝐃』*\n youtube.com/@drexmose"),

 
  author: process.env.PACK_AUTHER || "𝐒𝐇𝐀𝐍-𝐌𝐃",
  packname: process.env.PACK_NAME || "©𝐝𝐫𝐞𝐱_𝐦𝐨𝐬𝐞⸙ ",
  botname: process.env.BOT_NAME   || "𝐒𝐇𝐀𝐍-𝐌𝐃",
  ownername:process.env.OWNER_NAME|| "𝐝𝐫𝐞𝐱_𝐦𝐨𝐬𝐞",


  sessionName:process.env.SESSION_ID|| "",
  userImages:process.env.USER_IMAGES|| "text",
  errorChat: process.env.ERROR_CHAT || "",
  warncount: process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "false",
  MsgsInLog: process.env.MSGS_IN_LOG|| "true", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  readcmds:process.env.READ_COMMANDS|| "false", 
  KOYEB_API: process.env.KOYEB_API  || "false",
readmessage:process.env.READ_MESSAGE|| "false",
 aitts_Voice_Id:process.env.AITTS_ID|| "37",
 alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'
 

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY|| "",
  read_status: process.env.AUTO_READ_STATUS || "true",
  save_status: process.env.AUTO_SAVE_STATUS || "false",


  HEROKU_API_KEY: process.env.HEROKU_API_KEY || false,
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| false,
  antilink_values:process.env.ANTILINK_VALUES|| "https://,chat.whatsapp.com",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: process.env.THEME ? process.env.THEME.toUpperCase() : "SUHAIL",

};

global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 
