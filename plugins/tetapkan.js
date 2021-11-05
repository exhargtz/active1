let { performance } = require('perf_hooks')

let handler = async (m, { conn }) => {

   let old = performance.now()
   let neww = performance.now()
   let speed = `${neww - old}`
   let finish = `Berhasil Menetapkan Jaringan, Hingga beberapa detik!`

     conn.reply(m.chat, finish, m)
}
handler.help = ['tetapkan']
handler.tags = ['info']
handler.command = /^tetapkan/i
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
