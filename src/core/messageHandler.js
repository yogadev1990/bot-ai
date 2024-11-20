const {
  checkDelay,
  saveDelayed,
  checkSubscription,
} = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");
const Iklan = require("./IklanChizu");
const GeminiAi = require("./geminiAi");
const OpenAiLocal = require("./openAi");
const StickerWa = require("./stickerWa");

class MessageHandler {
  async process(req, res) {
    console.log("incoming message", req.body);
    const { message, bufferImage, from, participant } = req.body;
    const isSubscribed = await checkSubscription(from);

    const responFormatter = new ResponFormatter();
    const iklan = new Iklan();

    if ('participant' in req.body && !isSubscribed) {
      const canSendAd = checkDelay(from);

      if (canSendAd) {
        res.send(responFormatter.line(iklan.getIklan()).responAsText());
        saveDelayed(from);
      } else {}
    }

    if (message === "/grupid") {
      res.send(responFormatter.line(`ID Grup ini adalah ${from}
Untuk mengaktifkan bot, silakan baca panduan https://revandastore.com/katalog/11`).responAsText()
      );
    }
    if (isSubscribed) {
      if (message === "/chizu") {
        res.send(
          responFormatter.line(`*Chizuru-chan🌸*
	
どうも ありがとう ございます ~~
Iya tau, chizu cantik, makasih kak<3
ketik *menu* untuk membuka list command yaa.`).responAsText());
      } 
      
      if (message === "/menu") {
        res.send(
          responFormatter
          .line(`*Chizuru-chan🌸*
Iyaa kak, ada yang bisa chizu bantu?

╔══〘 *TORAM MENU* 〙══
╠ /lvling char *miniboss/boss* [lvl]
╠ /lvling bs *tec/non*
╠ /lvling alche
╠ /cari item [item]
╠ /cari monster [monster]
╠ /racik rumus fill 
╠ /cari registlet [regist] 
╠ /harga slot [eq]
╠ /bahan tas
╠ /bahan mq
╠ /kode live
╠ /info farm mats
╠ /info dye
╠ /info ailment 
╠ /ninja scroll
╠ /kalkulator quest
╠ /buff food
╠ /kamus besar toram
╠ /pet lvling
╠ /arrow elemental
╠ /build toram
╠ /mt terbaru
║
╠══〘 *GENERAL MENU* 〙══
╠ /cari anime [anime]
╠ /cari manga [manga]
╠ /anime *top/random/recommendations*
╠ /manga *top/random/recommendations*
╠ /on going anime
╠ /random anime quotes
╠ /AI chat [pesan]
╠ /tiktok dl [link]
╠ /fb dl [link]
╠ /ig dl [link]
╠ /stikerin (reply foto)
╠ /req fitur [pesan]
╠ /info bot
╠ /help
║
╠══〘 *ADMIN MENU* 〙══
╠ /add [@628xx]
╠ /kick [@tag member]
╠ /promote [@tag member]
╠ /demote [@tag member]
╠ /anti toxic *on/off*
╠ /anti link *on/off*
╠ /welcome msg *on/off*
╠ /out msg *on/off*
╠ /grup status
║
╚═〘 *ANTI VIRTEX ON* 〙═`).responAsText());
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
    
  }
    if (!isSubscribed) return;

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

module.exports = MessageHandler;