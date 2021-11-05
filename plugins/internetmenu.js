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
┌─── ⳹°❀❬ INTERNET MENU ❭❀°.
┣
┣➥ *${usedPrefix}berita*
┣➥ *${usedPrefix}news*
┣➥ *${usedPrefix}bitly*
┣➥ *${usedPrefix}cektanggal*
┣➥ *${usedPrefix}chord <judul lagu> (Limit)*
┣➥ *${usedPrefix}covid <negara>*
┣➥ *${usedPrefix}darkjokes*
┣➥ *${usedPrefix}fetch <url>*
┣➥ *${usedPrefix}get <url>*
┣➥ *${usedPrefix}ffstalk <id ff>*
┣➥ *${usedPrefix}gimage <query>*
┣➥ *${usedPrefix}image <query>*
┣➥ *${usedPrefix}google <pencarian>*
┣➥ *${usedPrefix}googlef <pencarian>*
┣➥ *${usedPrefix}image [gambar] | [jumlah]*
┣➥ *${usedPrefix}heroml <nama> (Limit)*
┣➥ *${usedPrefix}epep <id>*
┣➥ *${usedPrefix}igstalk <username> (Limit)*
┣➥ *${usedPrefix}jadwaltv*
┣➥ *${usedPrefix}jumpscare*
┣➥ *${usedPrefix}kanji <kanji>*
┣➥ *${usedPrefix}katabijak <opsi>*
┣➥ *${usedPrefix}kbbi <teks>*
┣➥ *${usedPrefix} [title] [artist]*
┣➥ *${usedPrefix} [title] [artist]*
┣➥ *${usedPrefix}lirik <Apa>*
┣➥ *${usedPrefix}meme*
┣➥ *${usedPrefix}mlstalk <id ml>*
┣➥ *${usedPrefix}server <type> <ip> <port>*
┣➥ *${usedPrefix}ss <url> (Limit)*
┣➥ *${usedPrefix}ssf <url> (Limit)*
┣➥ *${usedPrefix}subreddit <query>*
┣➥ *${usedPrefix}twitstalk <@user> (Limit)*
┣➥ *${usedPrefix}stalktwit <@user> (Limit)*
┣➥ *${usedPrefix}wallpaperq <query> (Limit)*
┣➥ *${usedPrefix}wiki <nama> (Limit)*
┣➥ *${usedPrefix}wikipedia*
┣➥ *${usedPrefix}ytsearch <query> (Limit)*
┣
┣ EROR? Lapor !bug <Alasan>
└────────────┈ ⳹ ❋ཻུ۪۪⸙
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['internetmenu']
handler.tags = ['jj']
handler.command = /^(internetmenu)$/i
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