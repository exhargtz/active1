//Jangan Di Ubah Developernya Kalo Mau Tambahin Kamu ubah Saja, Yang Youtube Nya Hapus Menjadi Nama Kamu
//Yang Mengubah Keliatan Di PC Datanya Ntar Saya Hapus!
//Jangan Di Ubah Yaa!
//Ubah Follow IG Gw Trus Izin Ke IG

let PhoneNumber = require('awesome-phonenumber')
let levelling = require('../lib/levelling')

let handler = async (m, { conn, usedPrefix }) => {

    let str = `
┏━━❬  *DEVELOPER BOT*  ❭━━┓
┣➥ *Developer Muhamad Nahara*
┣➥ *DeveloperPC : Fernazer, Nurutomo*
┣➥ *Youtube, Ig? bit.ly/3kSGPYC*
┣
┣➥ *VERSION BOT : 9.30*
┣➥ *Baileys Chrome Firefox*
┣➥ *Average Ping : 500KB/S*
┣➥ *Average ON : 20 Jam*
┣
┗━━━━━━━━━━━━━━━━
`.trim()
    let mentionedJid = [who]
    conn.sendFile(m.chat, pp, 'lp.jpg', str, m, false, { contextInfo: { mentionedJid }})
  }
}
handler.help = ['dvel8181']
handler.tags = ['jj']
handler.command = /^(dvel8181)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler



