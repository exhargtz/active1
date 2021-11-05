let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

  let pp = './src/avatar_contact.png'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  try {
    pp = await conn.getProfilePicture(who)
  } catch (e) {

  } finally {
    let about = (await conn.getStatus(who).catch(console.error) || {}).status || ''
    let { name, limit, exp, banned, lastclaim, registered, regTime, age, level } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)
    let username = conn.getName(who)
    let str = `
┏━━°❀❬ KERANG AJAIB MENU ❭❀°━━┓
┃
┣➥ *${usedPrefix}howgay siapa?*
┣➥ *${usedPrefix}howpintar siapa?*
┣➥ *${usedPrefix}howcantik siapa?*
┣➥ *${usedPrefix}howganteng siapa?*
┣➥ *${usedPrefix}howgabut siapa?*
┣➥ *${usedPrefix}howgila siapa?*
┣➥ *${usedPrefix}howlesbi siapa?*
┣➥ *${usedPrefix}howstress siapa?*
┣➥ *${usedPrefix}howbucin siapa?*
┣➥ *${usedPrefix}howjones siapa?*
┣➥ *${usedPrefix}howsadboy siapa?*
┣➥ *${usedPrefix}apakah <teks>?*
┣➥ *${usedPrefix}apakah <pertanyaan>*
┣➥ *${usedPrefix}artimimpi [mimpi]*
┣➥ *${usedPrefix}benarkah <teks>?*
┣➥ *${usedPrefix}bisakah <teks>?*
┣➥ *${usedPrefix}bisakah <pertanyaan>*
┣➥ *${usedPrefix}howgay siapa?*
┣➥ *${usedPrefix}howpintar siapa?*
┣➥ *${usedPrefix}howcantik siapa?*
┣➥ *${usedPrefix}howganteng siapa?*
┣➥ *${usedPrefix}howgabut siapa?*
┣➥ *${usedPrefix}howgila siapa?*
┣➥ *${usedPrefix}howlesbi siapa?*
┣➥ *${usedPrefix}howstress siapa?*
┣➥ *${usedPrefix}howbucin siapa?*
┣➥ *${usedPrefix}howjones siapa?*
┣➥ *${usedPrefix}howsadboy siapa?*
┣➥ *${usedPrefix}kapan <text>?*
┣➥ *${usedPrefix}kapankah <text>?*
┣➥ *${usedPrefix}kapan <pertanyaan>*
┣➥ *${usedPrefix}kapankah <pertanyaan>*
┣➥ *${usedPrefix}siapa <text>?*
┣➥ *${usedPrefix}siapakah <text>?*
┣➥ *${usedPrefix}siapa <pertanyaan>?*
┣➥ *${usedPrefix}siapakah <pertanyaan>?*
┣➥ *${usedPrefix}siapa <teks>?*
┣➥ *${usedPrefix}siapakah <teks>?*
┃ 
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['kerangmenu']
handler.tags = ['jj']
handler.command = /^(kerangmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

