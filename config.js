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
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "2347026203640" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347026203640";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347026203640";



//========================= [ BOT SETTINGS ] =========================\\
global.style = process.env.STYLE   || '1'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_20_40_05_29_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTI4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMzIsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjIsXG4gICAgICAgIDE1NCxcbiAgICAgICAgNzksXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY0LFxuICAgICAgICAyMDUsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI2LFxuICAgICAgICA2OCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjAwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE1LFxuICAgICAgICA3NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyMyxcbiAgICAgICAgMTg4LFxuICAgICAgICA0NixcbiAgICAgICAgMTU4LFxuICAgICAgICA2LFxuICAgICAgICAyMjAsXG4gICAgICAgIDE5LFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjMyLFxuICAgICAgICA5MCxcbiAgICAgICAgMTA0LFxuICAgICAgICA2OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NCxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDUsXG4gICAgICAgIDIwLFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTksXG4gICAgICAgIDEyN1xuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjE2LFxuICAgICAgICAyNDMsXG4gICAgICAgIDQ1LFxuICAgICAgICAyNTIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTcsXG4gICAgICAgIDY1LFxuICAgICAgICA0OCxcbiAgICAgICAgMzQsXG4gICAgICAgIDIxNCxcbiAgICAgICAgOTgsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2LFxuICAgICAgICAxNjEsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNjMsXG4gICAgICAgIDQ0LFxuICAgICAgICAxMjksXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDQyLFxuICAgICAgICAxODQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjMxLFxuICAgICAgICAxNDIsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTQsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxODcsXG4gICAgICAgIDU1LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNDYsXG4gICAgICAgIDQzLFxuICAgICAgICAwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDUzLFxuICAgICAgICAzOCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxODcsXG4gICAgICAgIDYyLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIyLFxuICAgICAgICA3OSxcbiAgICAgICAgMjksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTYsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMixcbiAgICAgICAgMTY0LFxuICAgICAgICAxOTcsXG4gICAgICAgIDExNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDAsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjUxLFxuICAgICAgICA5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAxOTEsXG4gICAgICAgIDExNyxcbiAgICAgICAgNTUsXG4gICAgICAgIDQ4LFxuICAgICAgICAxNDIsXG4gICAgICAgIDY0LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM3LFxuICAgICAgICA5MCxcbiAgICAgICAgOTksXG4gICAgICAgIDIxMixcbiAgICAgICAgMTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjEwLFxuICAgICAgICA3OSxcbiAgICAgICAgNzdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTExLFxuICAgICAgICAyMixcbiAgICAgICAgMjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMTY2LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTk3LFxuICAgICAgICAxMTUsXG4gICAgICAgIDQ0LFxuICAgICAgICAyMDcsXG4gICAgICAgIDIwOSxcbiAgICAgICAgODIsXG4gICAgICAgIDMsXG4gICAgICAgIDM0LFxuICAgICAgICA0MixcbiAgICAgICAgMjAzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjQyLFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjM4LFxuICAgICAgICAzOFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAyMTUsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxOTgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICA4MSxcbiAgICAgICAgICAyMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDIwNSxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDgzLFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDg4LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTc5LFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDQ1LFxuICAgICAgICAgIDE3NSxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE3NixcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDEwMVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE3LFxuICAgICAgICAyMjcsXG4gICAgICAgIDIxOCxcbiAgICAgICAgODgsXG4gICAgICAgIDY0LFxuICAgICAgICA2NyxcbiAgICAgICAgMjEzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjQ4LFxuICAgICAgICA3NSxcbiAgICAgICAgNjgsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTgzLFxuICAgICAgICAyMixcbiAgICAgICAgMTA5LFxuICAgICAgICA3NixcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTQsXG4gICAgICAgIDcwLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDEzMixcbiAgICAgICAgMjMxLFxuICAgICAgICAxMjcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTUwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMCxcbiAgICAgICAgMTg3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTY4LFxuICAgICAgICAyMzQsXG4gICAgICAgIDc4LFxuICAgICAgICAyNCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxMzYsXG4gICAgICAgIDU3LFxuICAgICAgICA0MyxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgOSxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NCxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNDgsXG4gICAgICAgIDEzN1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMjM5LFxuICBcImFkdlNlY3JldEtleVwiOiBcImtDWXdabW8veFNrWUxqVURoQ1JrVmo0MjNwUUhUeDVWM3M1L2RVbHRjY0k9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIkkzM19ZVFo3U2gtTWpkalhIb252X3dcIixcbiAgXCJwaG9uZUlkXCI6IFwiYmFlNzFlMDMtOGRjZS00N2IzLTgzNDktYjYyOWUxZDM4OGI5XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0MyxcbiAgICAgIDEzMyxcbiAgICAgIDExNSxcbiAgICAgIDM0LFxuICAgICAgODksXG4gICAgICAxOTAsXG4gICAgICAyNTUsXG4gICAgICAxMCxcbiAgICAgIDE4MyxcbiAgICAgIDUzLFxuICAgICAgNDQsXG4gICAgICAyMjgsXG4gICAgICAxOTcsXG4gICAgICAxNDIsXG4gICAgICAyNDYsXG4gICAgICAyMjQsXG4gICAgICAzLFxuICAgICAgNTYsXG4gICAgICAxNjEsXG4gICAgICA1NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDg5LFxuICAgICAgMjUyLFxuICAgICAgMTg1LFxuICAgICAgMjA1LFxuICAgICAgMjAyLFxuICAgICAgMzcsXG4gICAgICAyMTksXG4gICAgICA1MSxcbiAgICAgIDExMCxcbiAgICAgIDkzLFxuICAgICAgMTYxLFxuICAgICAgMTUzLFxuICAgICAgMTA1LFxuICAgICAgMjA5LFxuICAgICAgNDMsXG4gICAgICA1NixcbiAgICAgIDEyOSxcbiAgICAgIDEwNSxcbiAgICAgIDEwOFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaQ0ZLVkwzWlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAyNjIwMzY0MDozOUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIkRvdWJsZTAwN2pyXCIsXG4gICAgXCJsaWRcIjogXCIyNDQ5NTEwNjEzODUzOTE6MzlAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDTnJ6a2RFR0VKR2wzcklHR0FZZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJsUEV2aDcrMVNiMTJ6SWlJdVZ2QnhmWVhhRDQ5L2xnWTZsdTNNL2g3ZjI0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIit0blg5TytBMXg5aHU1QytNcnhzM2N4c3dvUGdyY2huY2hZbVdIdmgwV2ROdGdXU093L0ZydFRqTzl4b3J6Um9mTWJ5V3c5NWNYakY0eHhVN0xac0NnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIitPbmlkR2NJblpydzI0eVFlNXA3M3VTcUxUaVhING1OelIyb3pZK2FlUVUwb3JBQkRQbTUyaCtxREdnNG9HWjhHTTR6RmdidWx4OFNTM0NKcFRiZGh3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMjYyMDM2NDA6MzlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxOTEsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5MyxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMjQ2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA2MixcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjQsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE4MyxcbiAgICAgICAgICA1MSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMTBcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTcxNzAxNTE5NVxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.7",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "007",
  packname: process.env.PACK_NAME || "007",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "It'x Suhail",


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
