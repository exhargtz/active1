const { MessageType } = require('@adiwajshing/baileys')

let handler = async(m, { conn, text }) => {
let [number, pesan] = text.split `|`

    if (!number) return conn.reply(m.chat, 'Silahkan masukan nomor yang akan dispam', m)
    if (!pesan) return conn.reply(m.chat, 'Silahkan masukan pesannya', m)
    if (text > 500) return conn.reply(m.chat, 'Teks Kepanjangan!', m)
    if (text.startsWith('+')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)
    if (text.startsWith('@')) return conn.reply(m.chat, '[!] Tolong masukan Nomor dengan awalaan 62', m)

    let korban = `${number}`
    var nomor = m.sender
    let spam1 = `*「 ⚠️WARN 」*\n\n*Dari : Developer Nahara*\n*Pesan : ${pesan}*`

    conn.sendMessage(korban + '@s.whatsapp.net', spam1, MessageType.text)

    let logs = `[!] Berhasil mengirim`
    conn.reply(m.chat, logs, m)
}
handler.help = ['chatdev <nomor|pesan>']
handler.tags = ['premium', 'spam']
handler.command = /^(chatdev)$/i
handler.owner = false
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.limit = false

module.exports = handler


