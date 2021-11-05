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
┌─── ⳹°❀❬ MENU TAMBAHAN ❭❀°.
-⚠️ Gunakan Ini Di Private Jika Terlewat!
-⚡ All 200+ Menu Di Sini!
┣
┣ 1.Pengubah Suara VN
┣➥ ${usedPrefix}bass
┣➥ ${usedPrefix}blown
┣➥ ${usedPrefix}deep
┣➥ ${usedPrefix}earrape
┣➥ ${usedPrefix}fast
┣➥ ${usedPrefix}fat
┣➥ ${usedPrefix}nightcore
┣➥ ${usedPrefix}reverse
┣➥ ${usedPrefix}robot
┣➥ ${usedPrefix}slow
┣➥ ${usedPrefix}smooth
┣➥ ${usedPrefix}tupai
┣➥ ${usedPrefix}bass
┣➥ ${usedPrefix}tovn
┣➥ ${usedPrefix}tupai
┣➥ ${usedPrefix}bass [vn]
┣➥ ${usedPrefix}blown [vn]
┣➥ ${usedPrefix}deep [vn]
┣➥ ${usedPrefix}earrape [vn]
┣➥ ${usedPrefix}fast [vn]
┣➥ ${usedPrefix}fat [vn]
┣➥ ${usedPrefix}nightcore [vn]
┣➥ ${usedPrefix}reverse [vn]
┣➥ ${usedPrefix}robot [vn]
┣➥ ${usedPrefix}slow [vn]
┣➥ ${usedPrefix}smooth [vn]
┣➥ ${usedPrefix}tupai [vn]
┣➥ ${usedPrefix}berat (Limit)
┣➥ ${usedPrefix}fast (reply audio) (Limit)
┣➥ ${usedPrefix}getvn <query>
┣➥ ${usedPrefix}kodebahasa
┣➥ ${usedPrefix}listvn
┣➥ ${usedPrefix}reverse (reply audio) (Limit)
┣➥ ${usedPrefix}slow (reply audio) (Limit)
┣➥ ${usedPrefix}tts <lang> <teks>
┣➥ ${usedPrefix}vngemas (reply audio) (Limit)
┣
┣ 2.Google Image <Query>
┣➥ ${usedPrefix}circle (reply) (Limit)
┣➥ ${usedPrefix}ppcouple
┣➥ ${usedPrefix}ppcp
┣➥ ${usedPrefix}cowok
┣➥ ${usedPrefix}cup1 <teks> (Limit)
┣➥ ${usedPrefix}darkjokes
┣➥ ${usedPrefix}estetik 
┣➥ ${usedPrefix}glasses  (Limit)
┣➥ ${usedPrefix}image <query> (Limit)
┣➥ ${usedPrefix}pinterest <query> (Limit)
┣➥ ${usedPrefix}jahy  (Limit)
┣➥ ${usedPrefix}kpop <query>
┣➥ ${usedPrefix}makanan
┣➥ ${usedPrefix}manga  (Limit)
┣➥ ${usedPrefix}marvellogo <text|text>
┣➥ ${usedPrefix}mem
┣➥ ${usedPrefix}pinterest <query> (Limit)
┣➥ ${usedPrefix}pinterest2 <query> (Limit)
┣➥ ${usedPrefix}quotesimg <teks> (Limit)
┣➥ ${usedPrefix}splaybutton <teks>
┣➥ ${usedPrefix}summer <teks> (Limit)
┣➥ ${usedPrefix}trash (reply) (Limit)
┣➥ ${usedPrefix}wallpaper  (Limit)
┣➥ ${usedPrefix}wallpaperq <query> (Limit)
┣➥ ${usedPrefix}wpcyberspace
┣➥ ${usedPrefix}wpteknologi
┣➥ ${usedPrefix}wpprogramming
┣➥ ${usedPrefix}wpmuslim
┣➥ ${usedPrefix}wppegunungan
┣➥ ${usedPrefix}wpmobile  (Limit)
┣➥ ${usedPrefix}wpnsfwmobile  (Limit)
┣➥ ${usedPrefix}zettairyouiki  (Limit)
┣➥ ${usedPrefix}zettairyouiki  (Limit)
┣
╭─❏「 Maker Menu 」
┣➥ ${usedPrefix}gay
┣➥ ${usedPrefix}trigger
┣➥ ${usedPrefix}ytcomment <comment>
┣➥ ${usedPrefix}ytcomment <comment>
╰────❏
┣
╭─❏「 Anonymous Chat 」
┣➥ ${usedPrefix}start
┣➥ ${usedPrefix}leave
┣➥ ${usedPrefix}next
╰────❏
┣
╭─❏「 Convert 」
┣➥ ${usedPrefix}toptt (reply) (Limit)
┣➥ ${usedPrefix}tovn (reply) (Limit)
┣➥ ${usedPrefix}togif (Limit)
┣➥ ${usedPrefix}topdf (reply) (Limit)
┣➥ ${usedPrefix}vibration (reply audio) (Limit)
╰────❏
┣
╭─❏「 Random Menu 」
┣➥ ${usedPrefix}bacot
┣➥ ${usedPrefix}bucin
┣➥ ${usedPrefix}ceritahorror
┣➥ ${usedPrefix}fakta
┣➥ ${usedPrefix}faktaunik
┣➥ ${usedPrefix}galau
┣➥ ${usedPrefix}gombal
┣➥ ${usedPrefix}hug
┣➥ ${usedPrefix}katailham
┣➥ ${usedPrefix}murothal
┣➥ ${usedPrefix}kisahnabi <nama> (Limit)
┣➥ ${usedPrefix}pantun
┣➥ ${usedPrefix}puisi
┣➥ ${usedPrefix}syair
┣➥ ${usedPrefix}quotes
┣➥ ${usedPrefix}katabijak
┣➥ ${usedPrefix}quran
┣➥ ${usedPrefix}renungan
┣➥ ${usedPrefix}sholawat
┣➥ ${usedPrefix}tahlil
┣➥ ${usedPrefix}sindiran
┣➥ ${usedPrefix}up2urp
╰────❏
┣
╭─❏「 Search 」
┣➥ ${usedPrefix}apkpure <query> (Limit)
┣➥ ${usedPrefix}playstore <query> (Limit)
┣➥ ${usedPrefix}resep <masakan> (Limit)
┣➥ ${usedPrefix}shopee <query> (Limit)
╰────❏
┣
╭─❏「 Apk Menu 」
┣➥ ${usedPrefix}apk (kata kunci)
┣➥ ${usedPrefix}apkdl (link apkpure)
╰────❏
┣
╭─❏「 News Menu 」
┣➥ ${usedPrefix}berita
┣➥ ${usedPrefix}news
┣➥ ${usedPrefix}infobmkg (Limit)
┣➥ ${usedPrefix}infogempa (Limit)
╰────❏
┣
╭─❏「 Spammer Menu 」
┣➥ ${usedPrefix}danacinta <no hp> (Limit)
┣➥ ${usedPrefix}olx <no hp> (Limit)
┣➥ ${usedPrefix}pizzahut <no hp> (Limit)
┣➥ ${usedPrefix}spam <nomor|pesan>
┣➥ ${usedPrefix}spamwa <nomor|pesan>
┣➥ ${usedPrefix}spamcall <no hp> (Limit)
┣➥ ${usedPrefix}spamchat <teks> (Limit)
┣➥ ${usedPrefix}spamgmail <@email|pesan> (Limit)
┣➥ ${usedPrefix}spam <nomor|pesan>
┣➥ ${usedPrefix}spamwa <nomor|pesan>
┣➥ ${usedPrefix}spamsms <no hp> (Limit)
╰────❏
┣
┣⚠️ Lainnya Ada di All Menu!
┣
┣ EROR? Lapor !bug <Alasan>
└────────────┈ ⳹ ❋ཻུ۪۪⸙
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['menutambahan']
handler.tags = ['jj']
handler.command = /^(menutambahan)$/i
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