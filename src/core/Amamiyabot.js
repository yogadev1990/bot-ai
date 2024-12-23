const { checkDelay, saveDelayed, checkSubscription, } = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");

class Amamiyabot {
  async process(req, res) {
    console.log("incoming message", req.body);
    const {
      message,
      bufferImage,
      from,
      participant
    } = req.body;
    const isSubscribed = await checkSubscription(from);

    const responFormatter = new ResponFormatter();
    const iklan = new Iklan();

    if ('participant' in req.body) { // the message is from a group
      if (message === "/grupid") {
        res.send(responFormatter.line(`ID Grup ini adalah:
${from}
Untuk mengaktifkan bot, silakan baca panduan https://revandastore.com/katalog/11`).responAsText());
      } else if (message === "/chizu") {
        res.send(responFormatter.line(`Grup Ini Belum Berlangganan Chizu.`).responAsText());
      }
      if (isSubscribed) {
        if (message === "/chizu") {
          res.send(
            responFormatter.line(`*Chizuru-chan🌸*
      
どうも ありがとう ございます ~~
Iya tau, chizu cantik, makasih kak<3
ketik */menu* untuk membuka list command yaa.`).responAsText());
        }

        if (message === "/menu") {
          res.send(
            responFormatter
            .line(`*Amamiya-San*
		
${time} anak muda, ada perlu apa?

╔══〘 *GENERAL* 〙══
╠➥ Cari penyakit [penyakit]
╠➥ Cari obat [obat]
╠➥ AI chat [pesan]
╠➥ AI analisis (reply foto)
║
╠══〘 *KEDOKTERAN UMUM* 〙══
╠➥ Anatomi Tubuh Manusia
╠➥ Fisiologi
╠➥ Ilmu Penyakit Dalam
╠➥ Ilmu Penyakit Anak
╠➥ Ilmu Penyakit Kulit dan Kelamin
╠➥ Ilmu Penyakit Saraf
╠➥ Ilmu Penyakit Mata
╠➥ Ilmu Penyakit THT
║
╠══〘 *KEDOKTERAN GIGI* 〙══
╠➥ Anatomi Gigi
╠➥ Biologi Oral
╠➥ Ilmu Penyakit Mulut
╠➥ Lesi ulseratif
╠➥ Lesi Pigmentasi
╠➥ Lesi merah dan Putih
╠➥ OPMD
║
╚═〘 *${metadata}* 〙═`).responAsText());
        }

        if (message === "/sticker") {
          if (!bufferImage) {
            return res.send(
              responFormatter
              .line("Please send image if using command /sticker")
              .responAsText()
            );
          }

          return res.send(
            responFormatter.responSticker(await StickerWa.create(bufferImage))
          );
        }

      } else if (!isSubscribed) {
        const canSendAd = await checkDelay(from);
        if (canSendAd) {
          await saveDelayed(from);
          res.send(responFormatter.line(iklan.getIklan()).responAsText());
        } else {}
      }
    } else return;

    // try {
    //   let response;
    //   if (process.env.BOT_ACTIVE === "openai") {
    //     response = await OpenAiLocal.run(from, message);
    //   } else if (process.env.BOT_ACTIVE === "geminiai") {
    //     response = await GeminiAi.run(from, message);
    //   } else {
    //     throw new Error("Invalid BOT_ACTIVE value");
    //   }

    //   return res.send(responFormatter.line(response).responAsText());
    // } catch (error) {
    //   console.log("something went wrong in gemini ai", error);
    // }
  }
}

module.exports = Amamiyabot;