let handler = async (m, { conn, text }) => {
    let name = m.fromMe ? conn.user : conn.contacts[m.sender]

  conn.reply(m.chat, `
Kak Nahara Ada Yang Manggil😊
`.trim(), m)
    let mentionedJid = [m.sender]
}
handler.customPrefix = /@Nahara alduha/i
handler.command = new RegExp

module.exports = handler