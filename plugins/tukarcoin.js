const tukarcoin = 1
let handler = async (m, { conn, command, args }) => {
  let count = command.replace(/^tukarcoin/i, '')
  count = count ? /all/i.test(count) ? Math.floor(global.DATABASE.data.users[m.sender].tukarcoin / tukarcoin) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
  count = Math.max(1, count)
  if (global.DATABASE.data.users[m.sender].tukarcoin >= tukarcoin * count) {
    global.DATABASE.data.users[m.sender].tukarcoin -= tukarcoin * count
    global.DATABASE.data.users[m.sender].tukarcoin += count
    conn.reply(m.chat, `-Rp.${tukarcoin * count}\n+ ${tukarcoin} Money`, m)
  } else conn.reply(m.chat, `Coin tidak mencukupi untuk menukar ${tukarcoin} Money`, m)
}
handler.help = ['tukarcoin <Jumlah>', 'tukarcoin <jumlah>', 'tukarall']
handler.tags = ['rpg']
handler.command = /^tukarcoin([0-9]+)|tukarcoin|tukarall$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 0

module.exports = handler

