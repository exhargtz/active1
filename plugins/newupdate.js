let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
   
  } catch (e) {

  } finally {
    let str = `
*SEGERA HADIR, NEXT UPDATE*

- ANTILINK NOMOR (=)
- ANTILINK BITLY
- ANTILINK YOUTUBE
- ANTILINK TELEGRAM

- MENAMBAH PILIHAN MENU (=)
- MENGURANGI BUG

TANDA (=) YANG AKAN KITA LUNCURKAN DI NEXT UPDATE

`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['newupdate']
handler.tags = ['jj']
handler.command = /^(newupdate)$/i
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