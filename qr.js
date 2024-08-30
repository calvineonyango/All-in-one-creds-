const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: Maher_Zubair,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("maher-zubair-baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function SIGMA_MD_QR_CODE() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_Maher_Zubair = Maher_Zubair({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_Maher_Zubair.ev.on('creds.update', saveCreds)
			Qr_Code_By_Maher_Zubair.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				       await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: `


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
|| 𝐉𝐎𝐈𝐍 𝐌𝐘 𝐖𝐇𝐀𝐓𝐒𝐀𝐏𝐏𝐆𝐑𝐎𝐎𝐏➦ https://chat.whatsapp.com/GoVVE2PJW9kGu7RAmlgfqQ
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
             const classic = await  Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { document: data, mimetype: `application/json`, fileName: `creds.json` })
               Qr_Code_By_Maher_Zubair.groupAcceptInvite("DHGaGemwhxFKNXYkKCI9kV");
		Qr_Code_By_Maher_Zubair.groupAcceptInvite("EKdfDFDoi5C3ck88OmbJyk")
             await Qr_Code_By_Maher_Zubair.sendMessage(Qr_Code_By_Maher_Zubair.user.id, { text: `⚠️Do not share this file with anybody⚠️\n
┌─❖
│ 𝛸-𝐹𝛩𝑅𝐶𝛯-𝛭𝐷 𝛻2
└┬❖  
┌┤✑  Thanks for using 𝛸-𝐹𝛩𝑅𝐶𝛯-𝛭𝐷 𝛻2
│└────────────┈ ⳹        
│©2024-2030 𝛸-𝐹𝛩𝑅𝐶𝛯-𝛭𝐷 𝛻2
└─────────────────┈ ⳹\n\n ` }, {quoted: classic });
 

					await delay(100);
					await Qr_Code_By_Maher_Zubair.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					SIGMA_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await SIGMA_MD_QR_CODE()
});
module.exports = router
