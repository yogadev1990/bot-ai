const { checkContact, saveContact, removeContact, checkDelay, saveDelayed, checkSubscription,
  saveSubscription } = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");
const Iklan = require("./IklanChizu");
const GeminiAi = require("./geminiAi");
const OpenAiLocal = require("./openAi");
const StickerWa = require("./stickerWa");

class MessageHandler {
  async process(req, res) {
    const { message, bufferImage, from, participant } = req.body;
    const isRegistered = await checkContact(from);
    const isSubscribed = await checkSubscription(from);

    const responFormatter = new ResponFormatter();
    const iklan = new Iklan();
    
    if (message.includes("http") && !isSubscribed) {
      const canSendAd = checkDelay(from); // Cek delay pengiriman

      if (canSendAd) {
        // Kirim iklan jika sudah 4 jam sejak pesan terakhir
        res.send(responFormatter.line(iklan.getIklan()).responAsText());

        // Simpan waktu pengiriman terakhir
        saveDelayed(from);
      } else {}
    }

    if (message === "/start") {
      if (!isRegistered) await saveContact(from);
      const msg = responFormatter
        .line("Bot active, happy to use it!")
        .responAsText();
      return res.send(msg);
    }

    if (message === "/stop") {
      if (isRegistered) await removeContact(from);
      res.send(
        responFormatter.line("Bot inactive, see you later!").responAsText()
      );
    }

    if (!isRegistered) return;

    if (message === "/menu") {
      const isSubscribed = checkSubscription(from);

      if (isSubscribed) {
        res.send(
          responFormatter.line("Anda memiliki akses ke menu ini.").responAsText()
        );
      } else {
        res.send(
          responFormatter
            .line("Maaf, grup Anda tidak berlangganan atau masa langganan telah habis.")
            .responAsText()
        );
      }
    }

    // Tambahkan langganan baru
    if (message === "/register") {
      const durationInDays = 30; // Misalnya, 30 hari
      saveSubscription(from, durationInDays);

      res.send(
        responFormatter
          .line(
            `Grup Anda telah berlangganan selama ${durationInDays} hari. Terima kasih!`
          )
          .responAsText()
      );
    }
    //handle sticker command
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
