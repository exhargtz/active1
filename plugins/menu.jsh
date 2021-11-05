let { performance } = require('perf_hooks')
let util = require('util')
let fetch = require('node-fetch');
let { MessageType, mentionedJid } = require('@adiwajshing/baileys')
let levelling = require('../lib/levelling')
const moment = require('moment-timezone')
let PhoneNumber = require('awesome-phonenumber')
let fs = require ('fs')
let path = require('path')

let handler  = async (m, { conn, usedPrefix: _p, command }) => {

  let old = performance.now()
  await conn.fakeReply(m.chat, '*[❗]Mohon Tunggu 5 Detik...*', '0@s.whatsapp.net', `*Subscribe Fernazer*\n\n*Sedang Load Database*`)
    let RendyGans = './src/avatar_contact.png'
  let pp = 'https://i.ibb.co/9ZJhP60/avatar-contact.jpg'
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender

  try {
    RendyGans = await conn.getProfilePicture(conn.user.jid)
    pp = await conn.getProfilePicture(m.sender)
  } catch (e) {

  } finally {
    let package = JSON.parse(fs.readFileSync(path.join(__dirname, '../package.json')))

    let { exp, limit, level, role, age, money, registered, healt, coin, tigame } = global.DATABASE.data.users[m.sender]
    let { min, xp, max } = levelling.xpRange(level, global.multiplier)

    let name = registered ? global.DATABASE.data.users[m.sender].name : conn.getName(m.sender)

    let d = new Date
    let locale = 'id'
    let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()
    let bulan = ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'][Math.floor(((d * 2) + gmt) / 846000) % 12]
    let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]
    let battery = ['100','99','98','97','96','95','94','93','92','91','90','89','88','87','86','85','84','83','82','81','80','79','78','77','76','75','74','73','72','71','70','69','68','67','66','65','64','63','62','61','60','59','58','57','56','55','54','53','52','51','50','49','48','47','46','45','44','43','42','41','40','39','38','37','36','35','34','33','32','31','30','29','28','27','26','25','24','23','22','21','20','19','18','17','16','15','14','13','12','11','10','9','8','7','6','5','4','3','2','1'][Math.floor(((d * 1) + gmt) / 8460) % 100]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    const jam = moment.tz('Asia/Jakarta').format('HH')

 var ucapanWaktu = 'Selamat Pagi 🌄'



				if (jam >= '03' && jam <= '10') {

				ucapanWaktu = 'Selamat Pagi 🌄'

				} else if (jam >= '10' && jam <= '13') {

				ucapanWaktu = 'Selamat Siang ☀️'

				} else if (jam >= '13' && jam <= '18') {

				ucapanWaktu = 'Selamat Sore 🌅'

				} else if (jam >= '18' && jam <= '23') {

				ucapanWaktu = 'Selamat Malam 🌙'

				} else {

				ucapanWaktu = 'Selamat Malam 🌙'
				
				}

				const bars = global.DATABASE.data.chats[m.sender]
  var zerobars = '[▒▒▒▒▒▒▒▒▒]'

         if (bars >= '0' && bars <= '5') {
                zerobars = '[▒▒▒▒▒▒▒▒▒▒]'
         } else if (bars >= '5' && bars <= '10') {
				zerobars = '[█▒▒▒▒▒▒▒▒▒]'
		 } else if (bars >= '10' && bars <= '20') {
				zerobars = '[██▒▒▒▒▒▒▒▒]'
		} else if (bars >= '20' && bars <= '30') {
				zerobars = '[███▒▒▒▒▒▒▒]'
		} else if (bars >= '30' && bars <= '40') {
				zerobars = '[████▒▒▒▒▒▒]'
		} else if (bars >= '40' && bars <= '50') {
				zerobars = '[█████▒▒▒▒▒]'
		} else if (bars >= '50' && bars <= '60') {
				zerobars = '[██████▒▒▒▒]' 
		} else if (bars >= '60' && bars <= '70') {
				zerobars = '[███████▒▒▒]'
		} else if (bars >= '70' && bars <= '80') {
				zerobars = '[████████▒▒]'
		} else if (bars >= '80' && bars <= '90') {
				zerobars = '[█████████▒]'
		} else if (bars >= '90' && bars <= '100') {
				zerobars = '[██████████]'
		} else { 
				zerobars = '[██████████]'
		} 
    const levelRole = 'Newbie ㋡'
        if (levelRole <= 2) {
            role = 'Newbie ㋡'
        } else if (levelRole <= 4) {
            role = 'Beginner Grade 1 ⚊¹'
        } else if (levelRole <= 6) {
            role = 'Beginner Grade 2 ⚊²'
        } else if (levelRole <= 8) {
            role = 'Beginner Grade 3 ⚊³'
        } else if (levelRole <= 10) {
            role = 'Beginner Grade 4 ⚊⁴'
        } else if (levelRole <= 12) {
            role = 'Private Grade 1 ⚌¹'
        } else if (levelRole <= 14) {
            role = 'Private Grade 2 ⚌²'
        } else if (levelRole <= 16) {
            role = 'Private Grade 3 ⚌³'
        } else if (levelRole <= 18) {
            role = 'Private Grade 4 ⚌⁴'
        } else if (levelRole <= 20) {
            role = 'Private Grade 5 ⚌⁵'
        } else if (levelRole <= 22) {
            role = 'Corporal Grade 1 ☰¹'
        } else if (levelRole <= 24) {
            role = 'Corporal Grade 2 ☰²'
        } else if (levelRole <= 26) {
            role = 'Corporal Grade 3 ☰³'
        } else if (levelRole <= 28) {
            role = 'Corporal Grade 4 ☰⁴'
        } else if (levelRole <= 30) {
            role = 'Corporal Grade 5 ☰⁵'
        } else if (levelRole <= 32) {
            role = 'Sergeant Grade 1 ≣¹'
        } else if (levelRole <= 34) {
            role = 'Sergeant Grade 2 ≣²'
        } else if (levelRole <= 36) {
            role = 'Sergeant Grade 3 ≣³'
        } else if (levelRole <= 38) {
            role = 'Sergeant Grade 4 ≣⁴'
        } else if (levelRole <= 40) {
            role = 'Sergeant Grade 5 ≣⁵'
        } else if (levelRole <= 42) {
            role = 'Staff Grade 1 ﹀¹'
        } else if (levelRole <= 44) {
            role = 'Staff Grade 2 ﹀²'
        } else if (levelRole <= 46) {
            role = 'Staff Grade 3 ﹀³'
        } else if (levelRole <= 48) {
            role = 'Staff Grade 4 ﹀⁴'
        } else if (levelRole <= 50) {
            role = 'Staff Grade 5 ﹀⁵'
        } else if (levelRole <= 52) {
            role = 'Sergeant Grade 1 ︾¹'
        } else if (levelRole <= 54) {
            role = 'Sergeant Grade 2 ︾²'
        } else if (levelRole <= 56) {
            role = 'Sergeant Grade 3 ︾³'
        } else if (levelRole <= 58) {
            role = 'Sergeant Grade 4 ︾⁴'
        } else if (levelRole <= 60) {
            role = 'Sergeant Grade 5 ︾⁵'
        } else if (levelRole <= 62) {
            role = '2nd Lt. Grade 1 ♢¹ '
        } else if (levelRole <= 64) {
            role = '2nd Lt. Grade 2 ♢²'
        } else if (levelRole <= 66) {
            role = '2nd Lt. Grade 3 ♢³'
        } else if (levelRole <= 68) {
            role = '2nd Lt. Grade 4 ♢⁴'
        } else if (levelRole <= 70) {
            role = '2nd Lt. Grade 5 ♢⁵'
        } else if (levelRole <= 72) {
            role = '1st Lt. Grade 1 ♢♢¹'
        } else if (levelRole <= 74) {
            role = '1st Lt. Grade 2 ♢♢²'
        } else if (levelRole <= 76) {
            role = '1st Lt. Grade 3 ♢♢³'
        } else if (levelRole <= 78) {
            role = '1st Lt. Grade 4 ♢♢⁴'
        } else if (levelRole <= 80) {
            role = '1st Lt. Grade 5 ♢♢⁵'
        } else if (levelRole <= 82) {
            role = 'Major Grade 1 ✷¹'
        } else if (levelRole <= 84) {
            role = 'Major Grade 2 ✷²'
        } else if (levelRole <= 86) {
            role = 'Major Grade 3 ✷³'
        } else if (levelRole <= 88) {
            role = 'Major Grade 4 ✷⁴'
        } else if (levelRole <= 90) {
            role = 'Major Grade 5 ✷⁵'
        } else if (levelRole <= 92) {
            role = 'Colonel Grade 1 ✷✷¹'
        } else if (levelRole <= 94) {
            role = 'Colonel Grade 2 ✷✷²'
        } else if (levelRole <= 96) {
            role = 'Colonel Grade 3 ✷✷³'
        } else if (levelRole <= 98) {
            role = 'Colonel Grade 4 ✷✷⁴'
        } else if (levelRole <= 100) {
            role = 'Colonel Grade 5 ✷✷⁵'
        } else if (levelRole <= 102) {
            role = 'Brigadier Early ✰'
        } else if (levelRole <= 104) {
            role = 'Brigadier Silver ✩'
        } else if (levelRole <= 106) {
            role = 'Brigadier gold ✯'
        } else if (levelRole <= 108) {
            role = 'Brigadier Platinum ✬'
        } else if (levelRole <= 110) {
            role = 'Brigadier Diamond ✪'
        } else if (levelRole <= 112) {
            role = 'Major General Early ✰'
        } else if (levelRole <= 114) {
            role = 'Major General Silver ✩'
        } else if (levelRole <= 116) {
            role = 'Major General gold ✯'
        } else if (levelRole <= 118) {
            role = 'Major General Platinum ✬'
        } else if (levelRole <= 120) {
            role = 'Major General Diamond ✪'
        } else if (levelRole <= 122) {
            role = 'Lt. General Early ✰'
        } else if (levelRole <= 124) {
            role = 'Lt. General Silver ✩'
        } else if (levelRole <= 126) {
            role = 'Lt. General gold ✯'
        } else if (levelRole <= 128) {
            role = 'Lt. General Platinum ✬'
        } else if (levelRole <= 130) {
            role = 'Lt. General Diamond ✪'
        } else if (levelRole <= 132) {
            role = 'General Early ✰'
        } else if (levelRole <= 134) {
            role = 'General Silver ✩'
        } else if (levelRole <= 136) {
            role = 'General gold ✯'
        } else if (levelRole <= 138) {
            role = 'General Platinum ✬'
        } else if (levelRole <= 140) {
            role = 'General Diamond ✪'
        } else if (levelRole <= 142) {
            role = 'Commander Early ★'
        } else if (levelRole <= 144) {
            role = 'Commander Intermediate ⍣'
        } else if (levelRole <= 146) {
            role = 'Commander Elite ≛'
        } else if (levelRole <= 148) {
            role = 'The Commander Hero ⍟'
        } else if (levelRole <= 152) {
            role = 'Legends 忍'
        } else if (levelRole <= 154) {
            role = 'Legends 忍'
        } else if (levelRole <= 156) {
            role = 'Legends 忍'
        } else if (levelRole <= 158) {
            role = 'Legends 忍'
        } else if (levelRole <= 160) {
            role = 'Legends 忍'
        } else if (levelRole <= 162) {
            role = 'Legends 忍'
        } else if (levelRole <= 164) {
            role = 'Legends 忍'
        } else if (levelRole <= 166) {
            role = 'Legends 忍'
        } else if (levelRole <= 168) {
            role = 'Legends 忍'
        } else if (levelRole <= 170) {
            role = 'Legends 忍'
        } else if (levelRole <= 172) {
            role = 'Legends 忍'
        } else if (levelRole <= 174) {
            role = 'Legends 忍'
        } else if (levelRole <= 176) {
            role = 'Legends 忍'
        } else if (levelRole <= 178) {
            role = 'Legends 忍'
        } else if (levelRole <= 180) {
            role = 'Legends 忍'
        } else if (levelRole <= 182) {
            role = 'Legends 忍'
        } else if (levelRole <= 184) {
            role = 'Legends 忍'
        } else if (levelRole <= 186) {
            role = 'Legends 忍'
        } else if (levelRole <= 188) {
            role = 'Legends 忍'
        } else if (levelRole <= 190) {
            role = 'Legends 忍'
        } else if (levelRole <= 192) {
            role = 'Legends 忍'
        } else if (levelRole <= 194) {
            role = 'Legends 忍'
        } else if (levelRole <= 196) {
            role = 'Legends 忍'
        } else if (levelRole <= 198) {
            role = 'Legends 忍'
        } else if (levelRole <= 200) {
            role = 'Legends 忍'
        } else if (levelRole <= 500) {
   	         role = 'Legends 忍'
   	    } else if (levelRole <= 1000) {
   	         role = 'GrandMaster숒 × Legends숒'
		} 
    const dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
const wita = moment.tz('Asia/Makassar').format("HH:mm:ss")
            const wit = moment.tz('Asia/Jayapura').format("HH:mm:ss")
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let uptime = clockString(_uptime)
    let totalreg = Object.keys(global.DATABASE._data.users).length
    let totalgc = Object.keys(global.DATABASE._data.chats).length
    let totalft = Object.keys(global.DATABASE._data.stats).length
    let totalsend = global.DATABASE.data.stats['menu.js'].total
    let tags = {
      'main': 'Start Bot',
      'daftar': 'Daftar',
      'abs': 'Absensi Menu', 
      'vote': 'Vote Menu',
      'xp': 'Exp & Limit',
      'expression': 'Expris',
      'rpg': 'Adventure Menu', 
      'tutor': 'Tutorial ',
      'hadiah': 'Hadiah',
      'dewasa': '18+ Menu',
      'sange': 'Sangean',
      'database': 'Database',
      'group': 'Group Menu',
      'anime': 'Anime Menu',
      'wibu': 'Ih Wibu',
      'panik': 'Prank Menu',
      'cs': 'Custom Sticker',
      'sticker': 'Creator Menu',
      'creator': 'cretor',
      'editor': 'Editod Menu',
      'game': 'Fun Menu',
      'fun': 'Fun Menu',
      'image': 'Image Menu',
      'videomaker': 'Video Menu',
      'video': 'Video Menu',
      'maker': 'Maker Menu',
      'anony': 'Anonymous Chat',
      'audio': 'Audio Menu', 
      'sound': 'Sound Menu',
      'convert': 'Convert',
      'quotes': 'Random Menu',
      'quran': 'Quran',
      'islam': 'Islam Menu',
      'primbon': 'Primbon Menu',
      'belajar': 'Education Menu',
      'music': 'Music Menu',
      'simi': 'Simsimi Menu',
      'kerang': 'Kerang Menu',
      'downloader': 'Downloader Menu',
      'internet': 'Internet',
      'nulis': 'Mager Ah',
      'search': 'Search',
      'apk': 'Apk Menu',
      'news': 'News Menu',
      'spam': 'Spammer Menu',
      'virus': 'Virus ganas',
      'tools': 'Tools Menu',
      'jadibot': 'Bot Numpang',
      'premium': 'Premium & VIP Menu',
      'owner': 'Owner Menu',
      'host': 'Host Menu',
      'about': 'About info',
      'advanced': 'Advanced',
      'info': 'Information',          
      '': 'No Caterogi',
      'thnks': 'THANKS TO',
    }
    for (let plugin of Object.values(global.plugins))
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!tag in  tags) tags[tag] = tag
    let help = Object.values(global.plugins).map(plugin => {
      return {
        help: plugin.help,
        tags: plugin.tags,
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit
      }
    })
    let groups = {}
    for (let tag in tags) {
      groups[tag] = []
      for (let menu of help)
        if (menu.tags && menu.tags.includes(tag))
          if (menu.help) groups[tag].push(menu)
    }
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || `
             
╭─❏「 DEVELOPER INFO 」
│
│❏ *Nama* : ${conn.getName(conn.user.jid)}
│❏ *Owner* : Rafli Maulan
│❏ *Limit* :  *%limit Limit*
│❏ *Tanggl Lahir* : 1 April 2002
│❏ *Battrey* : ${battery}%
│❏ *Total Hit* : %totalsend ᴘᴇsᴀɴ
│❏ *User* : %totalreg ɴᴏᴍᴏʀ
│❏ *Group* : %totalgc 
│❏ *No Owner* : wa.me/6281328139682
│
╰────❏

╭─❏「 USER INFO 」
│
│ ${ucapanWaktu} %name
│❏ *Nama* : %name
│❏ *Api Whatsap* : wa.me/${who.split`@`[0]}
│❏ *Exp* : %exp XP
│❏ *Exp To Levl Up* : %xp4levelup
│❏ *Money* : ${money} 
│❏ *Rank* : ${role} 
│❏ *Limit* :  %limit
│❏ *Level* : %level
│❏ *Level Bars* : ${zerobars}
│
╰────❏

╭─❏「 WAKTU/TIME 」
│
│❏ *Hari* : %week
│❏ *Weton* : %weton
│❏ *Tanggal* : %date
│❏ *Tanggl Islam* : ${dateIslamic}
│❏ *Wit* : ${wit} WIT
│❏ *Wita* :  ${wita} WITA
│❏ *Wib* : %time WIB
│❏ *Run Time* : %uptime
│
╰────❏

╭─❏「 CUSTOMER SERVICE 」
│
│❏ *Request : .request*
│❏ *Bug : .bug / .report*
│❏ *Masukan / Request Palsu tidak Akan*
│❏ *Di Tanggapi Oleh Bot*
│
╰────❏

╭─❏「 Source Info 」
│❏ *Github* : *Github* : https://github.com/Fernazer
│❏ *Yutub* : Yutube* : https://youtube.com/channel/UCB9T1d_LG16EHf350BZIIYw
│❏ *Grup* : https://chat.whatsapp.com/CAKETl3LJdELqHTqOJtH4S
╰────❏

⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕ 
        Fernazer
%readmore`
    let header = conn.menu.header || '╭─❏「 %category 」'
    let body   = conn.menu.body   || '│❏ %cmd%islimit'
    let footer = conn.menu.footer || '╰────❏\n'
    let after  = conn.menu.after  || (conn.user.jid == global.conn.user.jid ? '' : `*Bot Ini Cuma Numpang*\n`) + `\n*FERNAZER BOT*\n\`\`\`\Creator By : Rafli Maulan\`\`\`\n\n▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║\n▌│█║▌║▌║║▌║▌║█│▌▌│█║▌║▌║`
    let _text  = before + '\n'
    for (let tag in groups) {
      _text += header.replace(/%category/g, tags[tag]) + '\n'
      for (let menu of groups[tag]) {
        for (let help of menu.help)
          _text += body.replace(/%cmd/g, menu.prefix ? help : '%p' + help).replace(/%islimit/g, menu.limit ? ' (Limit)' : '')  + '\n'
      }
      _text += footer + '\n'
    }
    _text += after
    text =  typeof conn.menu == 'string' ? conn.menu : typeof conn.menu == 'object' ? _text : ''
    let replace = {
      '%': '%',
      p: _p, uptime,
      npmname: package.name,
      npmdesc: package.description,
      version: package.version,
      exp: exp - min,
      maxexp: xp,
      totalexp: exp,
      xp4levelup: max - exp,
      github: package.homepage ? package.homepage.url || package.homepage : '[unknown github url]',
      level, limit, name, weton, week, date, time, battery, totalreg, totalgc, totalft, totalsend,
      readmore: readMore
    }
    text = text.replace(new RegExp(`%(${Object.keys(replace).join`|`})`, 'g'), (_, name) => replace[name])
    
conn.sendFile(m.chat, RendyGans, 'pp.jpg', text.trim(), {
      key: { 
        remoteJid: 'status@broadcast', 
        participant: '0@s.whatsapp.net', 
        fromMe: false 
      }, 
	message: {
			          "productMessage": {
				          "product": {
					          "productImage":{
						          "mimetype": "image/jpeg",
						          "jpegThumbnail": fs.readFileSync(`./src/logo.jpeg`)
					            },
					          "title": `CREATED FERNAZER`,
					          "description": `🔋 = ${conn.battery ? `${conn.battery.value}% ${conn.battery.live ? '🔌 Dicas...' : '⚡ Gak Dicas'}` : 'Mendeteksi'}`,
					         "currencyCode": "IDR",
					          "priceAmount1000": "990000000",
					          "retailerId": "Self Bot",
					          "productImageCount": 1
				             },
				             "businessOwnerJid": `0@s.whatsapp.net`
		                   }
	                    }
						
	}, m, { 
     thumbnail: Buffer.alloc(0), 
      contextInfo: {
		forwardingScore: 508, isForwarded: true, mentionedJid: [m.sender]} } )
  }
}
handler.help = ['allmenu']
handler.tags = ['main']
handler.command = /^(allmenu)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null
handler.exp = 5
handler.register = true

module.exports = handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = Math.floor(ms / 3600000)
  let m = Math.floor(ms / 60000) % 60
  let s = Math.floor(ms / 1000) % 60
  console.log({ms,h,m,s})
  return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')
}
