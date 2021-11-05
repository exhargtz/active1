const { createHash } = require('crypto')
let Reg = /(.*)([.|])([0-9]*)$/i
let handler = async function (m, { text, usedPrefix }) {
  let user = global.DATABASE._data.users[m.sender]
  if (user.registered === true) throw `Anda sudah terdaftar!`
  if (!Reg.test(text)) throw `Format salah!\nContoh: *${usedPrefix}daftar Nahara|15*`
  let [_, name, splitter, age] = text.match(Reg)
  let totalreg = Object.keys(global.DATABASE._data.users).length
  if (!name) throw 'Nama tidak boleh kosong!'
  if (!age) throw 'Umur tidak boleh kosong!'
  user.name = name
  user.age = parseInt(age)
  user.regTime = + new Date
  user.registered = true
  let sn = createHash('md5').update(m.sender).digest('hex')
  m.reply(`
*YES KAMU BERHASIL DAFTAR!*
*Total User Menambah* ${totalreg} + 1

╭─「 *SUCCES REGISTRATION* 」
│
│• Nama : ${name}
│• Umur : ${age}thn
│
│• *Jangan Lupa Baca Rules Bot*
│• *Mau Gunain Bot? Ketik* .menu
│• *Bot Eror? Silahkan Ketik !bug <alasan>*
╰────

`.trim())
}
handler.help = ['daftar <nama|umur>','register <nama|umur>']
handler.tags = ['start']
handler.command = /^daftar|register$/i

module.exports = handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
}
