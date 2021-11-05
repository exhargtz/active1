let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "「 Laporkan Masalah Anda 」",
                        "description": "Silahkan Pilih Opsi Di Bawah",
                        "buttonText": "OPSI HERE!!!",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `⚠️ Tidak Bisa Membuat Stiker?`,
                                        "description": "\nTidak Bisa Mengubah Gambar/Video Ke Stiker",
                                        "rowId": ".report Tidak Bisa Membuat Stiker"
                                          
                                                                                                                                            
                                    },{
                                        "title": "⚠️ Fitur Rusak Atau Error?",
                                        "description": "\nJelaskan Fitur Apa Yang Kamu Pakai Dan Eror",
                                        "rowId": ".bug"
                                                  
                                                                                                              
                                    },{
                                    	"title": "⚠️ Bot Delay Atau Lambat?",
                                        "description": "\nKamu Bisa Mempercepatnya Lewat Sini!",
                                        "rowId": ".ping"                                        
                                                                            
                                                                    
                                    },{
                                        "title": "⚠️ Bot Mengirim File Document?",
                                        "description": "\nJelaskan Fitur nya dan Nama Documentnya!",
                                        "rowId": ".bug"

                                                                                                                    
                                                                    
                                    },{
                                        "title": "⚠️ Masalah Lainnya?",
                                        "description": "\nSilahkan Laporkan Ke Owner ( Ketik .bug <Jelaskan> )",
                                        "rowId": ".bug"
                                                                                                                                                            
                                                                    
                                    },{
                                        "title": "⚠️ Request Fitur Baru?",
                                        "description": "\nSilahkan Ketik ( .request <Fiturnya> )!",
                                        "rowId": ".request"
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['laporkan']
handler.register = true
module.exports = handler