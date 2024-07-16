const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgresql://ahmad_postgresql_name_jg1l_user:FyUCcJXbVjs0JUBias8O8WthmiTAAEZI@dpg-cqb7c42ju9rs73dh9v7g-a.oregon-postgres.render.com/ahmad_postgresql_name_jg1l"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347026203640";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026203640";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_13_16_07_16_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTE5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMDYsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxNCxcbiAgICAgICAgMjIwLFxuICAgICAgICA2MSxcbiAgICAgICAgMjM2LFxuICAgICAgICAxOTksXG4gICAgICAgIDU3LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwLFxuICAgICAgICAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE5MCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDkyLFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxOSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDEyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDIyLFxuICAgICAgICA4NixcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTU5LFxuICAgICAgICA5MixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUyLFxuICAgICAgICA5OCxcbiAgICAgICAgOTgsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjIsXG4gICAgICAgIDUyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzEsXG4gICAgICAgIDUzLFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNDQsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDQ5LFxuICAgICAgICA1NCxcbiAgICAgICAgMTc1LFxuICAgICAgICA3NyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTUsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTU5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDg1LFxuICAgICAgICA1MSxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxNSxcbiAgICAgICAgMSxcbiAgICAgICAgNjIsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc1LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTQ3LFxuICAgICAgICA3MCxcbiAgICAgICAgMjM2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDk3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI1NCxcbiAgICAgICAgMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAyMTksXG4gICAgICAgIDE0MixcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTEyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg4LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1NixcbiAgICAgICAgMzAsXG4gICAgICAgIDQ2LFxuICAgICAgICA2OSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMTU4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDQ0LFxuICAgICAgICA2MixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNzAsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTQxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTM1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTU3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDEwMSxcbiAgICAgICAgNzAsXG4gICAgICAgIDI1LFxuICAgICAgICAxODEsXG4gICAgICAgIDExNixcbiAgICAgICAgMzIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA5NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwMyxcbiAgICAgICAgODAsXG4gICAgICAgIDgsXG4gICAgICAgIDE3MixcbiAgICAgICAgNTAsXG4gICAgICAgIDQxLFxuICAgICAgICA0OSxcbiAgICAgICAgOTYsXG4gICAgICAgIDIwNixcbiAgICAgICAgMjA3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTkzLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMDQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMjExLFxuICAgICAgICAxMjUsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTk2LFxuICAgICAgICAyMTQsXG4gICAgICAgIDU2LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzEsXG4gICAgICAgIDE1MSxcbiAgICAgICAgODQsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxMzksXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNDgsXG4gICAgICAgIDI0MyxcbiAgICAgICAgNjksXG4gICAgICAgIDQxLFxuICAgICAgICAxMTcsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjEsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDEzMixcbiAgICAgICAgICA5MixcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDc2LFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDc5LFxuICAgICAgICAgIDE4NCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDE1MyxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDIxMyxcbiAgICAgICAgICA2N1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDIyNCxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDE3OCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMzksXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDcwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzgsXG4gICAgICAgIDIxMixcbiAgICAgICAgNjgsXG4gICAgICAgIDgzLFxuICAgICAgICA2NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDEzNSxcbiAgICAgICAgNjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMzcsXG4gICAgICAgIDY2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDkxLFxuICAgICAgICAxMjIsXG4gICAgICAgIDk1LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMTk3LFxuICAgICAgICAyMCxcbiAgICAgICAgOCxcbiAgICAgICAgODUsXG4gICAgICAgIDg2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE4MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDM1LFxuICAgICAgICAyMzMsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODYsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTg0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTcsXG4gICAgICAgIDk0LFxuICAgICAgICAxNDMsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDk0LFxuICAgICAgICA1NixcbiAgICAgICAgMTgwLFxuICAgICAgICA3LFxuICAgICAgICAyNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjI1LFxuICAgICAgICAxNzUsXG4gICAgICAgIDE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMTQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwibE5KSlZSakNxcG9rY0xlQzl6empWaXQrWVduREp0S2NqRGpndDBrdmpqUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiR19majhwTzFTV2lpN3k0ZDVHZjc3Z1wiLFxuICBcInBob25lSWRcIjogXCJkODJlODExOC01YWEyLTRjNGQtYjA1MC0zNWZkMmFiYmM4ZTFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjMsXG4gICAgICAxMzAsXG4gICAgICAxOTAsXG4gICAgICA3MCxcbiAgICAgIDEwNyxcbiAgICAgIDQ4LFxuICAgICAgNDcsXG4gICAgICAxMzksXG4gICAgICAxMDAsXG4gICAgICAxODcsXG4gICAgICAzMSxcbiAgICAgIDEwMCxcbiAgICAgIDE3NCxcbiAgICAgIDE4OCxcbiAgICAgIDE1NixcbiAgICAgIDEwOSxcbiAgICAgIDE1MSxcbiAgICAgIDEwNixcbiAgICAgIDgyLFxuICAgICAgMzdcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTE0LFxuICAgICAgMTQwLFxuICAgICAgMjAzLFxuICAgICAgMTA4LFxuICAgICAgOTEsXG4gICAgICA4NCxcbiAgICAgIDExNyxcbiAgICAgIDIzMyxcbiAgICAgIDQ1LFxuICAgICAgNzcsXG4gICAgICAxNzAsXG4gICAgICAxOTMsXG4gICAgICAxNTUsXG4gICAgICAzNCxcbiAgICAgIDIzLFxuICAgICAgMzQsXG4gICAgICAwLFxuICAgICAgMjQ4LFxuICAgICAgNDYsXG4gICAgICA1OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI5Vlg2U1JYUVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAyNjIwMzY0MDo5NEBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRvdWJsZTAwN2pyXCIsXG4gICAgXCJsaWRcIjogXCIyNDQ5NTEwNjEzODUzOTE6OTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDSkhMdDlvQkVLN2wyYlFHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJhdi8rL3laRFRmSDZ1UitTZHBsM0V1ZGxSRFIvS0NYYkQzWEdvM0p6ZVhFPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImg1S2dMSzF2UFlmMmZ3dnhhRFV5dElLdmc2SXdRZnVFWG1KS1ZMRC8ySGxiYjU3SW1TWUJDSFZHR2t2TVc4MFovdTFjcy9pa1g3ZVYyVHFhQ2ZwU0NBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImE2NzBiUmhVcXdhelR2Zy96VG5UQ3ljZTQ1eWZlclNGbDRRcGp2aFgxNE9BMHpiTHVrMkNRRkdtT2x2elhoWDEyQSs4MGlzNUtRR2w3c0o5aDB2aENnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjYyMDM2NDA6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMzgsXG4gICAgICAgICAgNjcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODUsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDQwLFxuICAgICAgICAgIDM3LFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDE2MyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAxMTNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcyMTEzNTc5NFxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Suhail",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
