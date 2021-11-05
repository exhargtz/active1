let handler  = async (m, { conn, usedPrefix: _p }) => {
let info = `*# SEWA BOT NAHARA STORE*
*- 5K = Seminggu*
*- 10K = Permanent*
*- 15K = Perma+Premium*

#AntiLink ada, Stiker Menu Ada.
#AntiVirtex 1-4 Saja. 
#Fitur Selamat Datang Ada!

Bot RDP 24JAM ONLINE

*Sistem? TF-LinkJoin-DONE*
*Via = Gopay, Dana, Pulsa*
@Minat? wa.me/6281218871040

*- Penting❗❗❗*
Bot Sudah Ke Banned, atau Owner Sudah Tidak Membuka Sewaan Lagi Tenang Saja di sini Bergaransi. 
⚠️Bergaransi SC BOT + Tutor.`

conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '*BOT TERVERIFIKASI*', 'status@broadcast')
}
handler.help = ['iklan'] 
handler.tags = ['info'] 
handler.command = /^(iklan)$/i

module.exports = handler