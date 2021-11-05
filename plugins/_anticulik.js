let handler = m => handler.all = async function (m, { isAdmin, isBotAdmin }) {
  if (m.mtype == 'groupInviteMessage') {
idnya = await this.reply(m.chat, `「 Donasi • Pulsa 」

• *Gopay:* 6281218871040
• *Telkomsel:* 6281218871040
• *Indosat:* 6281218871040

Donasi semampunya untuk mendukung bot ini tetap hidup untuk kalian^_^
Kalau gak mampu yang di atas bisa juga *follow ig* https://instagram.com/exhar_ft_

Kontak pemilik saya⬇️⬇️
`, m)
this.sendContact(m.chat, '6281218871040', 'Pemilik Bot', idnya)
  }
  return true
}

module.exports = handler