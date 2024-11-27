const { checkSubscription } = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");
const handlers = require("./tools/handlers.js");
const PREFIX = "/";

class Chizurubot {
  async process(req, res) {
    const {
      device,
      message,
      bufferImage,
      from,
      name,
      participant,
      admin,
      botadmin,
      participantCount,
      groupname,
    } = req.body;

    const responFormatter = new ResponFormatter();

    // Extract command and args
    if (!message.startsWith(PREFIX)) return;
    const [command, ...args] = message.slice(PREFIX.length).trim().split(" ");

    // Subscription Check
    const { isActive, remainingTime } = await checkSubscription(from);
    const statusVIP = isActive ? "Aktif" : "Tidak Aktif";
    const sisaLangganan = isActive ? remainingTime : "Tidak ada";

    // Context for handlers
    const context = {
      groupname,
      from,
      name,
      participantCount,
      statusVIP,
      sisaLangganan,
      bufferImage,
      args,
    };

    // Command Handler
    let response;
    switch (command) {
      case "status":
        response = await handlers.status(context);
        break;
    }

    if (isActive) {
    let response;
    switch (command) {
      case "menu":
        response = await handlers.menu();
        break;
      case "chizu":
        response = await handlers.chizu(context);
        break;
      case "sticker":
        response = await handlers.sticker(context);
        break;
      case "lvlingchar":
        response = await handlers.lvlingChar({ args });
        break;
      case "ai":
        response = await handlers.ai({ args });
        break;
      default:
        response = await handlers.default();
        break;
    }

    // Send Response
    if (response) {
      if (command === "sticker" && bufferImage) {
        res.send(responFormatter.responSticker(response)); // Send sticker
      } else {
        res.send(responFormatter.line(response).responAsText());
      }
    }
  } else {
    res.send(
      responFormatter.line(
        "Mohon maaf, layanan ini hanya untuk grup VIP. Silahkan langganan di revandastore.com"
      ).responAsText()
    );}
  };
  async processGrup(req, res) {

  }
}

module.exports = Chizurubot;