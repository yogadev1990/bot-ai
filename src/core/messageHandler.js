const { checkContact, saveContact, removeContact, addGroupSubscription, removeGroupSubscription, isGroupSubscribed } = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");
const GeminiAi = require("./geminiAi");
const OpenAiLocal = require("./openAi");
const StickerWa = require("./stickerWa");

class MessageHandler {
  async process(req, res) {
    const { message, bufferImage, from } = req.body;
    const isRegistered = await checkContact(from);
    const responFormatter = new ResponFormatter();

    if (message === "/start") {
      if (!isRegistered) await saveContact(from);
      const msg = responFormatter
        .line("Bot active, happy to use it!")
        .responAsText();
      return res.send(msg);
    }

    if (message === "/stop") {
      if (isRegistered) await removeContact(from);
      return res.send(
        responFormatter.line("Bot inactive, see you later!").responAsText()
      );
    }
    if (message === "Chizu") {
      return res.send(
        responFormatter.line("Ya kak? ada yang bisa chizu bantu?").responAsText()
      );
    }
    if (!isRegistered) return;

    // Command untuk menambahkan grup berlangganan
    if (message.startsWith("/subscribe")) {
      const groupId = message.split(" ")[1]; // Mengambil ID grup dari pesan
      if (!groupId) {
        return res.send(responFormatter.line("Please provide a group ID to subscribe.").responAsText());
      }
      await addGroupSubscription(groupId);
      return res.send(responFormatter.line(`Successfully subscribed to group: ${groupId}`).responAsText());
    }

    // Command untuk menghapus grup berlangganan
    if (message.startsWith("/unsubscribe")) {
      const groupId = message.split(" ")[1]; // Mengambil ID grup dari pesan
      if (!groupId) {
        return res.send(responFormatter.line("Please provide a group ID to unsubscribe.").responAsText());
      }
      await removeGroupSubscription(groupId);
      return res.send(responFormatter.line(`Successfully unsubscribed from group: ${groupId}`).responAsText());
    }

    // Command untuk memeriksa status berlangganan grup
    if (message.startsWith("/check_subscription")) {
      const groupId = message.split(" ")[1]; // Mengambil ID grup dari pesan
      if (!groupId) {
        return res.send(responFormatter.line("Please provide a group ID to check subscription status.").responAsText());
      }
      const subscribed = await isGroupSubscribed(groupId);
      const statusMessage = subscribed ? `You are subscribed to group: ${groupId}` : `You are not subscribed to group: ${groupId}`;
      return res.send(responFormatter.line(statusMessage).responAsText());
    }

    // Handle sticker command
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

    try {
      let response;
      if (process.env.BOT_ACTIVE === "openai") {
        response = await OpenAiLocal.run(from, message);
      } else if (process.env.BOT_ACTIVE === "geminiai") {
        response = await GeminiAi.run(from, message);
      } else {
        throw new Error("Invalid BOT_ACTIVE value");
      }

      return res.send(responFormatter.line(response).responAsText());
    } catch (error) {
      console.log("something went wrong in gemini ai", error);
    }
  }
}

module.exports = MessageHandler;
