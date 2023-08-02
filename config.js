module.exports = {
  prefix: "?", // Your Bot Prefix
  client_id: "1135834067368149143", // Your Application Client ID
  redirect_uri: process.env.redirect, // Your Application Redirect Url
  oauth_link: process.env.authlink, // Your Application Auth Link (guild.joins + identify)
  owners: ["1125797410690564187"],
  bot_link: "https://discord.com/api/oauth2/authorize?client_id=1135665819846713384&permissions=8&scope=bot%20applications.commands",

  emojis: {
    "check": "✅",
    "arrow": "✨",
    "user": "🍭",
    "user_invite": "🤖",
    "info": "ℹ",
    "load": "📩",
    "error": "🔴",
    "success": "🟢",
    "yes": "✔",
    "link": "🔗"
  },
  webhook: {
    "avatarURL": "https://cdn.discordapp.com/attachments/1131974573320044565/1135840505138262086/uovat2zZ.jpg",
    "URL": "https://discord.com/api/webhooks/1131974625291665501/QKTDCxC3Ezh71XuGeZ4VHe2mtyK0n4K31OpSZXnzG52P1G1EoCeEILTXXWc6HOSGhtbB",
    "webhookNAME": "Keriz Logger"
  }
} 
