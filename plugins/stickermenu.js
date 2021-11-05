let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let str = `
*│_##### [ Sticker Menu ] #####_*
│
│❏ !stiker <img> <replyimg>
│❏ !tovideo <ReplyStikerGiF>
│❏ !stikerly <pencarian> (Limit)
│❏ !stikermeme <teks atas>|<teks bawah> (Limit)
│❏ !stickfilter (caption|reply media) (Limit)
│❏ !stickmaker (caption|reply media) (Limit)
│❏ !stikerline <url> (Limit)
│❏ !stikerly <pencarian> (Limit)
│❏ !stikertelegram <url> (Limit)
│❏ !style <query|teks> (Limit)
│❏ !tahta <teks> (Limit)
│❏ !inu <teks> (Limit)
│❏ !telestick <teks>
│❏ !text3d <teks>
│❏ !text3d2 <teks>
│❏ !stiker (caption|reply media)
│❏ !stiker <url>
│❏ !stikergif (caption|reply media)
│❏ !stikergif <url>
│❏ !stikerline <url> (Limit)
│❏ !stikertelegram <url> (Limit)
│❏ !stikermeme <teks atas>|<teks bawah>
│❏ !getstiker
┣
┣ *- Error? Lapor Ajg*
└────────────┈
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['stikermenu']
handler.tags = ['jj']
handler.command = /^(stikermenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false
handler.register = true
handler.admin = false
handler.botAdmin = false
handler.fail = null

module.exports = handler