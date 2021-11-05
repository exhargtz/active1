let handler = function (m) {
  // this.sendContact(m.chat, '6283144570377', 'Raku Gans', m)
  conn.sendContact(m.chat, '6281218871040' , 'Owner', m)
  conn.sendContact(m.chat, '6285718844348' , 'BOTZ', m)
  conn.reply(m.chat, `Tuh Owner ku hehe`, m) 
}
handler.help = ['owner','pemilik']
handler.tags = ['info']

handler.command = /^(owner)$/i

module.exports = handler
