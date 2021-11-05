let handler = async m => m.reply(`
┏━━°❀❬ *PERATURAN BOT* ❭❀°━━┓
┃
┃> PERINGATAN :
┃• Telpon/VC = Blok Otomatis
┃ 
┃> BANNED :
┃• Spam Chat
┃• Spam Call
┃• Spam SMS
┃
┃> BANNED SEMENTARA :
┃• Laporan Request Fitur Palsu/Main-Main
┃• Laporan Bug Pada Fitur Palsu/Main-Main
┃
┃> BANNED + BLOK PERMANEN :
┃• Merusak Nama Baik Bot
┃• Meniru/Menyalin Teks² Pesan Pada Bot Tanpa Izin
┃• Spam Menu Ga Jelas
┃
┃
┗━━━━━━━━━━━━━━━━

await conn.send2Button(m.chat, handler(), 'BY NAHARA', 'OK SIP', 'yoi', 'LANCAR', 'manteps', { quoted: m })
`.trim()) // Tambah sendiri kalo mau
handler.help = ['rules'] 
handler.tags = ['info'] 
handler.command = /^(rules)$/i

module.exports = handler