let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*≡ BOT BUGGC V 1.0*
┌───⊷ *FEATURES* ⊶
│» */buggc* 〈bug normal〉
│» */buggcx* 〈bug hard〉
│
│» *Anda Pesan Bug? Hanya 2K/Bug*
│» *Bug Ini Bisa Menembus WaMod*
│» *Mau Coba? Hub Owner!!!*
└──────────────
✆ Bot Buggc Only Exhar_ft Project

*≡ INFO*
» SUBSCRIBE : Nahara Alduha
» Donasi : https://saweria.co/naharduha
» BBGC : wa.me/6285161967158
» Versi BOT BUGGC : 0.1`

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', 'BUG IS READY TO DEPLOY', 'status@broadcast')
}
handler.help = ['iklanbug'] 
handler.tags = ['info'] 
handler.command = /^(iklanbug)$/i

module.exports = handler