let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Silahkan Klik Menu Dibawah Untuk Absen",
                        "description": "©AbsenGroup",
                        "buttonText": "Menu disini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": `ABSEN`,
                                        "rowId": ".absen"
                                    },{
                                        "title": "CEK ABSEN",
                                        "rowId": ".cekabsen"                 
                                    },{
                                        "title": "HAPUS ABSEN",
                                        "rowId": ".hapusabsen"
                                        
                                    },{    
                                        "title": "MULAI ABSEN",
                                        "rowId": ".mulaiabsen"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.help = ['absen2']
handler.tags = ['abs']
handler.command = /^(absen2|hadir)$/i
handler.group = true
module.exports = handler