let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Menu Menonaktifkan Kebutuhan Grup, Hanya Admin Yang Bisa",
                        "description": "*Menu Ini !grupsetoff*",
                        "buttonText": "PILIH MENU DISINI!",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `NONAKTIFKAN ANTILINK`,
                                        "description": "\nPeserta bisa Mengirim Link Grup",
                                        "rowId": ".disable antilink"
                                                                                                                          
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "NONAKTIFKAN WELCOME",
                                        "description": "\nPeserta Baru/Keluar tidak Akan Di Sambut",
                                        "rowId": ".disable welcome"
                                                                                                                          
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "NONAKTIFKAN LEVEL-UP",
                                        "description": "\nPeserta Tidak Akan Naik Level",
                                        "rowId": ".disable autolevelup"
                                                                                                                          
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "NONAKTIFKAN ANTIDELETE",
                                        "description": "\nPeserta Bisa Menghapus Pesan",
                                        "rowId": ".enable delete"
                                                                                                                         
                                                                                                                                                                                                                                                                                                                
                                    },{
                                        "title": "Menuju Aktifkan SetGrup",
                                        "description": "\nAktifkan Antilink, Welcome, Dan Lainnya.",
                                        "rowId": ".groupset"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['grupbuttonoff','/grupbuttonoff']
handler.register = true
module.exports = handler