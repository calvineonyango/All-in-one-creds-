const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const express = require('express');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
    default: Maher_Zubair,
    useMultiFileAuthState,
    delay,
    makeCacheableSignalKeyStore,
    Browsers
} = require("maher-zubair-baileys");

function removeFile(FilePath){
    if(!fs.existsSync(FilePath)) return false;
    fs.rmSync(FilePath, { recursive: true, force: true })
 };
router.get('/', async (req, res) => {
    const id = makeid();
    let num = req.query.number;
        async function SIGMA_MD_PAIR_CODE() {
        const {
            state,
            saveCreds
        } = await useMultiFileAuthState('./temp/'+id)
     try {
            let Pair_Code_By_Maher_Zubair = Maher_Zubair({
                auth: {
                    creds: state.creds,
                    keys: makeCacheableSignalKeyStore(state.keys, pino({level: "fatal"}).child({level: "fatal"})),
                },
                printQRInTerminal: false,
                logger: pino({level: "fatal"}).child({level: "fatal"}),
                browser: ["Chrome (Linux)", "", ""]
             });
             if(!Pair_Code_By_Maher_Zubair.authState.creds.registered) {
                await delay(1500);
                        num = num.replace(/[^0-9]/g,'');
                            const code = await Pair_Code_By_Maher_Zubair.requestPairingCode(num)
                 if(!res.headersSent){
                 await res.send({code});
                     }
                 }
            Pair_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
            Pair_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
                const {
                    connection,
                    lastDisconnect
                } = s;
                if (connection == "open") {
                await delay(5000);
                let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
                await delay(800);
                await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: `🕷️🕷️🕷️🕷️
*𝐒𝐞𝐬𝐬𝐢𝐨𝐧 𝐜𝐨𝐧𝐧𝐞𝐜𝐭𝐞𝐝*
*𝐄𝐧𝐣𝐨𝐲❤️*
*By _©Cobutech 🥷🥷🥷_*
_____________________________
╔══════════════════════════◇
║『 YOU'VE CHOSEN COBU-TECH  』
║ You've Completed the First Step
║ to Deploy a Whatsapp Bot.
╚═══════════════════════════╝
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
|| 𝐎𝐖𝐍𝐄𝐑 ➦ https://wa.me/254796281776
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
|| 𝐉𝐎𝐈𝐍 𝐌𝐘 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏 𝐂𝐇𝐀𝐍𝐍𝐄𝐋➦ https://whatsapp.com/channel/0029Vadx3PxJ3juvWsDlrN11
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
|| 𝐉𝐎𝐈𝐍 𝐌𝐘 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏𝐆𝐑𝐎𝐎𝐏➦ https://chat.whatsapp.com/GoVVE2PJW9kGu7RAmlgfq
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
||𝐑𝐄𝐏𝐎➦ https://github.com/calvineonyango/COBU-TECH-FACTORY-
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
|| 𝐘𝐎𝐔𝐓𝐔𝐁𝐄➦ https://www.youtube.com/@calvineobumdtech
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
|| 𝐈𝐍𝐒𝐓𝐀𝐆𝐑𝐀𝐌➦ https://instagram.com/caelvineobumd
▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
> ╔═══════════════════════════════╗
> 𝐏𝐎𝐖𝐄𝐑𝐄𝐃➦ 𝐁𝐘 𝐂𝐀𝐋𝐕𝐈𝐍𝐄 𝐎𝐁𝐎𝐔𝐎𝐑𝐎≈≈𝐓𝐄𝐂𝐇
> ╚═══════════════════════════════╝
*Don't Forget To Give Star ⭐ To My Repo*
 ▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬▬
` });
            await delay(1000 * 2) 
             const classic = await  Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { document: data, mimetype: `application/json`, fileName: `creds.json` })
               Pair_Code_By_Maher_Zubair.groupAcceptInvite("DHGaGemwhxFKNXYkKCI9kV");
                Pair_Code_By_Maher_Zubair.groupAcceptInvite("EKdfDFDoi5C3ck88OmbJyk")
             await Pair_Code_By_Maher_Zubair.sendMessage(Pair_Code_By_Maher_Zubair.user.id, { text: `💝𝙏𝙝𝙞𝙨 𝙘𝙤𝙙𝙚 𝙤𝙣𝙡𝙮 𝙬𝙤𝙧𝙠𝙨 𝙛𝙤𝙧 𝙢𝙮 𝙥𝙧𝙤𝙟𝙚𝙘𝙩 𝙗𝙚 𝙬𝙖𝙧𝙣𝙚𝙙💝\n
┌─❖
│🕷️🕷️🕷️🕷️🕷️🕷️
└┬❖  
┌┤✑   𝑰 𝑨𝑴 𝑪𝑹𝑨𝑻𝑬𝑫 𝑩𝒀 𝑪𝑶𝑩𝑼_𝑻𝑬𝑪𝑯
│└────────────┈ ⳹        
│©2023-2024 V2𝐂𝚯𝚩𝐔-𝚻𝚵𝐂𝚮
└─────────────────┈ ⳹\n\n ` }, {quoted: classic });

        await delay(100);
        await Pair_Code_By_Maher_Zubair.ws.close();
        return await removeFile('./temp/'+id);
            } else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
                    await delay(10000);
                    SIGMA_MD_PAIR_CODE();
                }
            });
        } catch (err) {
            console.log("service restated");
            await removeFile('./temp/'+id);
         if(!res.headersSent){
            await res.send({code:"Service Unavailable"});
         }
        }
    }
    return await SIGMA_MD_PAIR_CODE()
});
module.exports = router
