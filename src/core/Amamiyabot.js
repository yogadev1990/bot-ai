const { checkSubscription } = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");
const handlers2 = require("./tools/handlers2.js");
const PREFIX = "/";

class Amamiyabot {
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
      device,
      groupname,
      from,
      name,
      participantCount,
      statusVIP,
      sisaLangganan,
      bufferImage,
      admin,
      botadmin,
      args,
    };

    // Command Handler
    let response;
    if (command === "status") {
      response = await handlers.status(context);
    } else if (isActive) {
        switch (command) {
          case "add":
            response = await handlers2.add(context);
            break;
          case "kick":
            response = await handlers2.kick(context);
            break;
          case "promote":
            response = await handlers2.promote(context);
            break;
          case "demote":
            response = await handlers2.demote(context);
            break;
          case "antitoxic":
            response = await handlers2.antiToxic(context);
            break;
          case "antilink":
            response = await handlers2.antiLink(context);
            break;
          case "welcomemsg":
            response = await handlers2.welcomeMsg(context);
            break;
          case "outmsg":
            response = await handlers2.outMsg(context);
            break;
          default:
            response = await handlers2.default();
            break;
          case "menu":
            response = await handlers2.menu();
            break;
          case "chizu":
            response = await handlers2.chizu(context);
            break;
          case "carianime":
            response = await handlers2.cariAnime({ args });
            break;
          case "carimanga":
            response = await handlers2.cariManga({ args });
            break;
          case "anime":
            response = await handlers2.anime({ args });
            break;
          case "manga":
            response = await handlers2.manga({ args });
            break;
          case "ongoinganime":
            response = await handlers2.ongoingAnime();
            break;
          case "randomquote":
            response = await handlers2.randomQuote();
            break;
          case "reqfitur":
            response = await handlers2.reqFitur(context);
            break;
          case "infobot":
            response = await handlers2.infoBot();
            break;
          case "help":
            response = await handlers2.help();
            break;
          case "ai":
            response = await handlers2.ai(context);
            break;
          case "sticker":
            response = await handlers2.sticker(context);
            break;
          case "tiktok":
            response = await handlers2.tiktok({ args });
            break;
          case "fb":
            response = await handlers2.fb({ args });
            break;
          case "ig":
            response = await handlers2.ig({ args });
            break;  
        }
    } else {
      res.send(
        responFormatter
          .line("Mohon maaf, layanan ini hanya untuk grup VIP. Silahkan langganan di revandastore.com")
          .responAsText()
      );
    }
    
    if (response) {
      if (command === "sticker" && bufferImage) {
        res.send(responFormatter.responSticker(response)); // Kirim stiker
      } else {
        res.send(responFormatter.line(response).responAsText()); // Kirim teks
      }
    }    
  };}

  module.exports = new Amamiyabot();