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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_07_02_08_04_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDQsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTM3LFxuICAgICAgICAyNDcsXG4gICAgICAgIDMyLFxuICAgICAgICAxMjksXG4gICAgICAgIDc0LFxuICAgICAgICAxOTQsXG4gICAgICAgIDM3LFxuICAgICAgICAxODcsXG4gICAgICAgIDYsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMjYsXG4gICAgICAgIDkzLFxuICAgICAgICAyMjMsXG4gICAgICAgIDMwLFxuICAgICAgICA1OCxcbiAgICAgICAgNjIsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE1MixcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQsXG4gICAgICAgIDIxMixcbiAgICAgICAgOSxcbiAgICAgICAgNDgsXG4gICAgICAgIDExNixcbiAgICAgICAgNyxcbiAgICAgICAgOTksXG4gICAgICAgIDEyMixcbiAgICAgICAgMTc2LFxuICAgICAgICAyMTYsXG4gICAgICAgIDcsXG4gICAgICAgIDExNSxcbiAgICAgICAgNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMzMsXG4gICAgICAgIDAsXG4gICAgICAgIDExNyxcbiAgICAgICAgODMsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTE5LFxuICAgICAgICA3NyxcbiAgICAgICAgMjI1LFxuICAgICAgICA4MSxcbiAgICAgICAgNjdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2LFxuICAgICAgICA2MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDMxLFxuICAgICAgICAyMzgsXG4gICAgICAgIDQ2LFxuICAgICAgICA3MCxcbiAgICAgICAgMjYsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY2LFxuICAgICAgICA0NyxcbiAgICAgICAgMjUwLFxuICAgICAgICAyNTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjQsXG4gICAgICAgIDQ0LFxuICAgICAgICAyNTMsXG4gICAgICAgIDEzOCxcbiAgICAgICAgNjgsXG4gICAgICAgIDksXG4gICAgICAgIDQ2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMSxcbiAgICAgICAgMjA5LFxuICAgICAgICA0MyxcbiAgICAgICAgMzMsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjksXG4gICAgICAgIDMyLFxuICAgICAgICA4N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzNyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDM1LFxuICAgICAgICAwLFxuICAgICAgICAyMTYsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4MCxcbiAgICAgICAgODYsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTY5LFxuICAgICAgICA3MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI5LFxuICAgICAgICAzMSxcbiAgICAgICAgOTgsXG4gICAgICAgIDIxMixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjUsXG4gICAgICAgIDExNixcbiAgICAgICAgMjE0LFxuICAgICAgICAxMDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICAyMDIsXG4gICAgICAgIDY5LFxuICAgICAgICA3MixcbiAgICAgICAgMTA2LFxuICAgICAgICAyMTIsXG4gICAgICAgIDQxLFxuICAgICAgICAxLFxuICAgICAgICAxNTMsXG4gICAgICAgIDg2LFxuICAgICAgICAxNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgODMsXG4gICAgICAgIDI1MixcbiAgICAgICAgMjYsXG4gICAgICAgIDYsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNTYsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTE0LFxuICAgICAgICA3NixcbiAgICAgICAgNDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTQ0LFxuICAgICAgICAxMSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMTksXG4gICAgICAgIDc5LFxuICAgICAgICA5NixcbiAgICAgICAgODhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzEsXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDMwLFxuICAgICAgICA0MyxcbiAgICAgICAgMixcbiAgICAgICAgOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMzUsXG4gICAgICAgIDE1OCxcbiAgICAgICAgMTYzLFxuICAgICAgICA0NCxcbiAgICAgICAgMjAsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTU1LFxuICAgICAgICA3MSxcbiAgICAgICAgMixcbiAgICAgICAgMjU1LFxuICAgICAgICAyNyxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDMsXG4gICAgICAgIDEyLFxuICAgICAgICAyMjYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTQsXG4gICAgICAgIDMxLFxuICAgICAgICAxNSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICAxMjIsXG4gICAgICAgICAgMjE2LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMTYsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICA0MixcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgNzBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDg3LFxuICAgICAgICAgIDM1LFxuICAgICAgICAgIDI0NyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAyMjcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDIyNixcbiAgICAgICAgICA4OCxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2NCxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjU0LFxuICAgICAgICAgIDIzMCxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDExMFxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEwMSxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEwMSxcbiAgICAgICAgODIsXG4gICAgICAgIDIxNyxcbiAgICAgICAgOTIsXG4gICAgICAgIDk4LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIzNixcbiAgICAgICAgMTIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgODksXG4gICAgICAgIDE4NixcbiAgICAgICAgODMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTkyLFxuICAgICAgICA5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDYxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzcsXG4gICAgICAgIDg2LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMTAsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTUxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOTQsXG4gICAgICAgIDExNCxcbiAgICAgICAgNjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE1MixcbiAgICAgICAgMjI0LFxuICAgICAgICAxMDEsXG4gICAgICAgIDQzLFxuICAgICAgICAyMDEsXG4gICAgICAgIDgzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDYwLFxuICAgICAgICAxNyxcbiAgICAgICAgNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTgxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyNTQsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEzOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogODIsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRTRITnVZYVV4SUExK0c3bTVYZG5rMTZvdUZHL0UveTREeEVKdU1IWEJUUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI2MjAzNjQwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCIzRjg2NDk2Q0M1MDBBNjIwNTlDMkU2ODM2QTYwQjI5N1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MjI3NTQ5NDJcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYUE1T19jcXZROVNQclJIdXVBVDMxd1wiLFxuICBcInBob25lSWRcIjogXCJmMjY4OWMxMy0zNDc2LTQ0ZGEtYjhkMC04MTc1NWZlODk3OGVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjI4LFxuICAgICAgMTg5LFxuICAgICAgMTU5LFxuICAgICAgODEsXG4gICAgICAxMjIsXG4gICAgICA5NyxcbiAgICAgIDEwNyxcbiAgICAgIDE4NCxcbiAgICAgIDE5NixcbiAgICAgIDEyNCxcbiAgICAgIDY2LFxuICAgICAgMjcsXG4gICAgICAxMjQsXG4gICAgICAxNjQsXG4gICAgICAyMDIsXG4gICAgICAxNjIsXG4gICAgICAyMTcsXG4gICAgICAxNixcbiAgICAgIDcwLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDczLFxuICAgICAgMTAzLFxuICAgICAgODMsXG4gICAgICAyMTEsXG4gICAgICAxNzEsXG4gICAgICAyMzgsXG4gICAgICAxNDYsXG4gICAgICAyMzcsXG4gICAgICAzNCxcbiAgICAgIDExMyxcbiAgICAgIDgxLFxuICAgICAgMTAsXG4gICAgICAyNDcsXG4gICAgICAxNjAsXG4gICAgICA5NyxcbiAgICAgIDEyMixcbiAgICAgIDE2MCxcbiAgICAgIDE0MCxcbiAgICAgIDc2LFxuICAgICAgOThcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiRTdQNzZHQUdcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDcwMjYyMDM2NDA6MTlAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCLwnZGr8J2RtvCdkbzwnZGp8J2Rs/CdkawwMDfwnZGx8J2RuVwiLFxuICAgIFwibGlkXCI6IFwiMjQ0OTUxMDYxMzg1MzkxOjE5QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0p2THQ5b0JFUFRPdkxVR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiYXYvKy95WkRUZkg2dVIrU2RwbDNFdWRsUkRSL0tDWGJEM1hHbzNKemVYRT1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJuUkg0Vy9TNFVuK0NLclpTaEgvNzBzQ3FpUnoyYzA5N0pzZ1FyRlVrNVAxY1BoRVNYQ0FPTm11TGx4VStXbUIzT3hSVzk3TE5LVjBUOVNZUzY5QldBUT09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJFK2JwdGRJQU5DVjVhYXhrb05Na0JNSHlmb2V1WmRwM3Y3TTFrZ1d3c2FJWFlIS00xL28rd25rL2hncmNBVWVYd1l2QnBjaVRGdVVQcWhxbndQdjRpdz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ3MDI2MjAzNjQwOjE5QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICAyNTQsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDM4LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTg1LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTUzLFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICAyMzEsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDY4LFxuICAgICAgICAgIDUyLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNjMsXG4gICAgICAgICAgMTE0LFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTEzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjI3NTQ5MzUsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFMdUhcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUx1SC5qc29uIjogIntcImtleURhdGFcIjpcImJzcjEvaWM3dkxjMFhObDVTQzJBeXBBc0tUT3ZocXVjbk8xTkV2VUZocG89XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6NDU4MDg5ODgyLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


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
  KOYEB_API : process.env.KOYEB_API  || "ip8lu350v4ss0kepg23r4bq7moyfa5n5c1fks4u0m0w6pqsrx5dgas1j575lm2wn",

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
