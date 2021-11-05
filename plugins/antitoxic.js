let fs = require('fs')
let handler = async (m) => {
let stc = fs.readFileSync('./sticker/Sante.webp')
conn.fakeReply(m.chat, stc, '0@s.whatsapp.net', '*JANGAN TOXIC WOY*', 'status@broadcast')
}
handler.customPrefix = /anjing|memek|kontol|ngentod|goblok|ngentot|bangsat|anjing|memek|tololkontol|/i
handler.command = new RegExp

module.exports = handler
