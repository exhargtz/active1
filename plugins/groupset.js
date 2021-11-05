let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Khusus Setting Group, Hanya Admin Grup",
                        "description": "©GroupSetting",
                        "buttonText": "Menu DiSini",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                                "rows": [
                                    {
                                        "title": "BUKA GROUP",
                                        "rowId": ".group open"
                                    },{
                                        "title": "TUTUP GROUP",
                                        "rowId": ".group close"
                                        
                                    },{
                                        "title": "AKTIFKAN WELCOME",
                                        "rowId": ".enable welcome"   
                                                                                
                                    },{
                                        "title": "AKTIFKAN ANTILINK GC",
                                        "rowId": ".enable antilink"         
                                                                                
                                    },{
                                        "title": "AKTIFKAN AUTO-LEVEL-UP",
                                        "rowId": ".enable autolevelup"      
                                                                                                                        
                                    },{
                                        "title": "NONAKTIFKAN ANTIDELETE",
                                        "rowId": ".disable antidelete"
                                                                                                                         
                                    },{
                                        "title": "SEGERA HADIR",
                                        "rowId": ".newupdate"                           
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})

handler.command = ['sisjsnns','matikan deletskosmsmse']
module.exports = handler