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
┌─── ⳹°❀❬ MAGER NULIS YAA.. ❭❀°.
┣
┣➥ *${usedPrefix}magernulis <teks> (Limit)
┣➥ *${usedPrefix}nulis <teks> (Limit)
┣➥ *${usedPrefix}nulis3 <teks> (Limit)
┣➥ *${usedPrefix}nulis4 <teks> (Limit)it)
┣➥ *${usedPrefix}quotemaker2 <teks | wm> (Limit)
┣➥ *${usedPrefix}tahta2<teks>
┣
┣ EROR? Lapor !bug <Alasan>
└────────────┈ ⳹ ❋ཻུ۪۪⸙
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['magernulismenu']
handler.tags = ['jj']
handler.command = /^(magernulismenu)$/i
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