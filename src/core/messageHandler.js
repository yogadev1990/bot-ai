const { checkDelay, saveDelayed, checkSubscription } = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");
const Iklan = require("./IklanChizu");
const Sender = require("../lib/sender");
// const GeminiAi = require("./geminiAi");
// const OpenAiLocal = require("./openAi");
// const StickerWa = require("./stickerWa");

class MessageHandler {
  async process(req) {
    console.log("Request Body:", req.body);
    const { text, name, groupId, from, participant, media, location } = req.body;
    const isSubscribed = await checkSubscription(groupId);
    const iklan = new Iklan();

    if (groupId !== null){

      if (text.includes("revandastore") && !isSubscribed) {
        const canSendAd = checkDelay(groupId);
        console.log("Can send ad:", canSendAd, "for group:", groupId);
        if (canSendAd) {
          saveDelayed(groupId);
          console.log("Saved delay for group:", groupId);
          Sender.send(groupId, iklan.getIklan());
        } else {
          console.log("Ad not sent, still in delay period for group:", groupId);
        }
      }      

    if (text === "/grupid") {
      Sender.send(groupId, `ID Grup ini adalah ${groupId}
Untuk mengaktifkan bot, silakan baca panduan https://revandastore.com/katalog/11`);
    }

    if (isSubscribed) {
      if (text === "/chizu") {
        Sender.send(groupId, `*Chizuru-chan🌸*
	
どうも ありがとう ございます ~~
Iya tau, chizu cantik, makasih kak ${name}<3
ketik *menu* untuk membuka list command yaa.`);
      } 
      
      if (text === "/menu") {
        Sender.send(groupId, `*Chizuru-chan🌸*
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
╚═〘 *ANTI VIRTEX ON* 〙═`);
      }

    // if (text === "/sticker") {
    //   if (!media) {
    //     return Sender.send(from, responFormatter
    //       .line("Please send image if using command /sticker")
    //       .responAsText()
    //     );
    //   }

    //   return res.send(
    //     responFormatter.responSticker(await StickerWa.create(media))
    //   );
    // }
    
  }
    if (!isSubscribed) return;
    }
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