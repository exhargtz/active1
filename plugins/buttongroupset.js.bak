let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Menu Aktifkan Kebutuhkan Grup, Hanya Admin Yang Bisa",
                        "description": "*Menu Ini !groupset*",
                        "buttonText": "SETELAN GRUP",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `TUTUP GROUP`,
                                        "description": "\nhanya Admin Yang Bisa Mengirim Pesan",
                                        "rowId": ".group close"
                                          
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "BUKA GROUP",
                                        "description": "\nSemua Peserta Bisa Mengirim Pesan",
                                        "rowId": ".group open"
                                                                                  
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "AKTIFKAN ANTILINK GC",
                                        "description": "\nPeserta Akan diKick Jika Mengirim Link Grup",
                                        "rowId": ".enable antilink"
                                                                                                                          
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "AKTIFKAN WELCOME",
                                        "description": "\n Peserta Baru Akan di sambut oleh BOT",
                                        "rowId": ".enable welcome"
                                                                                                                          
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "AKTIFKAN AUTOLEVELUP",
                                        "description": "\nPeserta Chat Terbanyak Akan Mendapatkan XP",
                                        "rowId": ".enable autolevelup"
                                                                                                                          
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "AKTIFKAN ANTI DELETE",
                                        "description": "\nPeserta menghapus Pesan Akan Di Kirim Ulang",
                                        "rowId": ".disable delete"
                                                                                                                         
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "Menuju Nonaktifkan SetGrup",
                                        "description": "\nNonaktifkan Antilink, Welcome, Dan Lainnya.",
                                        "rowId": ".grupbuttonoff"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['groupset']
handler.register = true
module.exports = handler