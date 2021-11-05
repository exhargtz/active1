let handler = async (m, { conn }) =>
conn.relayWAMessage(conn.prepareMessageFromContent(m.chat, {
                    "listMessage":  {
                        "title": "Kunjungi https://bit.ly/lnk5in1\nPemilik Botz 081218871040\n\n「 Selamat Datang Pengguna 」",
                        "description": "Silahkan Pilih Menu Di Bawah Kak!",
                        "buttonText": "PILIH MENU",
                        "listType": "SINGLE_SELECT",
                        "sections": [
                            {
                             "rows": [
                                    {
                                        "title": `Group Setting`,
                                        "description": "\nSetel Welcome, Anti Link Grup, Dan Lainnya",
                                        "rowId": ".groupset"
                                          
                                                                                                                                            
                                    },{
                                        "title": "Group Menu",
                                        "description": "\nKick Peserta, Add Peserta, Dan Lainnya",
                                        "rowId": ".grupmenu"
                                                  
                                                                                                              
                                    },{
                                    	"title": "All Menu",
                                        "description": "\nMelihat 1000+ Fitur Dan Penjelasannya",
                                        "rowId": ".allmenu"                                        
                                                                            
                                                                    
                                    },{
                                        "title": "Islam Menu",
                                        "description": "\nJadwalSholat, AsmaulHusna, Tahlil, DLL",
                                        "rowId": ".islammenu"
                                                                                                                    
                                                                    
                                    },{
                                        "title": "Spammer Menu",
                                        "description": "\nSpam Chat Ke nomor Tujuan, Premium Only",
                                        "rowId": ".spammermenu"
                                        
                                        
                                    },{
                                        "title": "Convert Menu ",
                                        "description": "\nMengubah Gambar Atau Lainnya",
                                        "rowId": ".convertermenu"       
                                     
                                                             
                                    },{
                                        "title": "Sticker Menu",
                                        "description": "\nPembuat Stiker, Mengubah Stiker, DLL",
                                        "rowId": ".stikermenu"                 
                                        
                                        
                                    },{
                                    	"title": "Fun Menu Beta",
                                        "description": "\nGame Menu, Kuis MTK, CakLontong, DLL",
                                        "rowId": ".funmenu1"                            
     
     
                                    },{
                                        "title": "Internet/Googling",
                                        "description": "\nGoogle Pencarian, Berita Terbaru, DLL",
                                        "rowId": ".internetmenu"
                                                                                     
     
                                    },{
                                        "title": "Tulis Buku Dengan Teks",
                                        "description": "\nMenyalin Teks Dan Menulis di Buku Polio",
                                        "rowId": ".magernulismenu"      
                                                                                     
     
                                    },{
                                        "title": "Kerang Ajaib Menu",
                                        "description": "\nSeberapa Anda Ganteng, Gay, DLL",
                                        "rowId": ".kerangmenu"
                                             
     
                                    },{
                                        "title": "Absen Menu",
                                        "description": "\nAbsensi Untuk Peserta Group",
                                        "rowId": ".absenmenu"      
                             
                                                                         
                                    },{
                                        "title": "Downloader Menu",
                                        "description": "\nDownload Video/Lagu Dari IG, YT, TT",
                                        "rowId": ".downloadermenu"
                                  
                                              
                                    },{        
                                        "title": "Edukasi Menu",
                                        "description": "\nMencari Jawaban Semua Mata Pelajaran",
                                        "rowId": ".educationmenu"
                                 
                                               
                                    },{             
                                        "title": "Editor Menu",
                                        "description": "\nEdit Profil Text, Logo, Dan Sertif",
                                        "rowId": ".editormenu"

                                                                              
                                          
                                    },{
                                        "title": "Menu Tambahan Selain Di Menu Ini",
                                        "description": "\nGogImage, PengubahSuara, Prank, DLL",
                                        "rowId": ".menutambahan" 
                                                                                                                     
                                                             
                                    },{
                                        "title": "Command Simple Menu",
                                        "description": "\nMengetahui Semua Command Menu Dalam Menu",
                                        "rowId": ".smenu"
                                    
                                                                                                                                                    
                                    },{
                                        "title": "Owner Menu",
                                        "description": "\nMenu Khusus Owner",
                                        "rowId": ".ownermenu"
                                                                                  
                                                                                                                                                        
                                    },{
                                        "title": "Laporkan Masalah BOT",
                                        "description": "\nLaporkan Masalah Ke Developer",
                                        "rowId": ".laporkan"
                                                                                                                                                                                                 
                                          
                                                                                                                                                        
                                    }
                                ]
                            }
                        ], "contextInfo": { "stanzaId": m.key.id,
"participant": m.sender,
"quotedMessage": m.message
}
                    }
                 }, {}), {waitForAck: true})
handler.command = ['menu','command']
handler.register = true
module.exports = handler