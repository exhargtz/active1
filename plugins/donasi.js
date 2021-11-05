let handler = async m => m.reply(`
┏━━°❀❬ *DONASI* ❭❀°━━┓
┣
┣➥ *Dana:* 085718844348
┣➥ *Gopay:* 081218871040
┃ 
┃ Seiklasnya Jika Mau Donasi Ya, Ga Maksa Kok!
┗━━━━━━━━━━━━━━━━
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^ddork)$/i

module.exports = handler
