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
┌─── ⳹°❀❬ GAME MENU ❭❀°
┣➥ *.angka <0-9>*
┣➥ *.asahotak*
┣➥ *.caklontong*
┣➥ *.cantikcek (Limit)*
┣➥ *.cari <query>*
┣➥ *.casino <jumlah>*
┣➥ *.dadu*
┣➥ *.dadu2*
┣➥ *.dare*
┣➥ *.family100*
┣➥ *.gantengcek (Limit)*
┣➥ *.gaycek (Limit)*
┣➥ *.iqtest*
┣➥ *.kuis*
┣➥ *.math <mode>*
┣➥ *.math2*
┣➥ *.slot <angka>*
┣➥ *.siapakahaku*
┣➥ *.slot  (Limit)*
┣➥ *.suit*
┣➥ *.tictactoe*
┣➥ *.susunkata*
┣➥ *.tebakanime*
┣➥ *.tebakbendera*
┣➥ *.tebakgambar*
┣➥ *.tebakkata*
┣➥ *.tebakkimia*
┣➥ *.tebaklagu (Limit)*
┣➥ *.tebaktebakan*
┣➥ *.tekateki*
┣➥ *.tololcek (Limit)*
┣➥ *.truth*
┣➥ *.twister*
┣➥ *.jodoh <nama>|<nama doi> (Limit)*
┣➥ *.jumpscare*
┣➥ *.paling <teks>*
┣➥ *.simi <teks>*
┣➥ *.simsimi <teks>*
┣➥ *.simih <teks>*
┣➥ *.tod*
└────────────┈ ⳹ ❋ཻུ۪۪⸙
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['funmenu1']
handler.tags = ['jj']
handler.command = /^(funmenu1)$/i
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