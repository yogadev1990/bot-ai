const { fromURL } = require("cheerio");
const axios = require("axios");
const { checkSubscription } = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");
const handlers = require("./Chizuru/handlers.js");
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

    if (!message.startsWith(PREFIX)) return;
    const [command, ...args] = message.slice(PREFIX.length).trim().split(" ");

    const { isActive, remainingTime, groupSettings} = await checkSubscription(from);
    const statusVIP = isActive ? "Aktif" : "Tidak Aktif";

    const context = {
      device,
      groupname,
      from,
      name,
      participantCount,
      statusVIP,
      remainingTime,
      bufferImage,
      admin,
      botadmin,
      args,
      groupSettings,
    };

    // Command Handler
    let response;
    if (command === "status") {
      response = await handlers.status(context);
    } else if (isActive) {
        switch (command) {
          case "add":
            response = await handlers.add(context);
            break;
          case "kick":
            response = await handlers.kick(context);
            break;
          case "promote":
            response = await handlers.promote(context);
            break;
          case "demote":
            response = await handlers.demote(context);
            break;
          case "antitoxic":
            response = await handlers.antiToxic(context);
            break;
          case "antilink":
            response = await handlers.antiLink(context);
            break;
          case "welcomemsg":
            response = await handlers.welcomeMsg(context);
            break;
          case "outmsg":
            response = await handlers.outMsg(context);
            break;
          default:
            response = await handlers.default();
            break;
          case "menu":
            response = await handlers.menu();
            break;
          case "chizu":
            response = await handlers.chizu(context);
            break;
          case "lvlchar":
            response = await handlers.lvlingChar({ args });
            break;
          case "lvlbs":
            response = await handlers.lvlingBs({ args });
            break;
          case "lvlalche":
            response = await handlers.lvlingAlche();
            break;
          case "item":
            response = await handlers.cariItem({ args });
            break;
          case "monster":
            response = await handlers.cariMonster({ args });
            break;
          case "rumusfill":
            response = await handlers.racikRumus();
            break;
          case "registlet":
            response = await handlers.cariRegistlet({ args });
            break;
          case "hargaslot":
            response = await handlers.hargaSlot({ args });
            break;
          case "bahantas":
            response = await handlers.bahanTas();
            break;
          case "bahanmq":
            response = await handlers.bahanMQ();
            break;
          case "kodelive":
            response = await handlers.kodeLive();
            break;
          case "farmmats":
            response = await handlers.infoFarmMats();
            break;
          case "dye":
            response = await handlers.infoDye();
            break;
          case "ailment":
            response = await handlers.infoAilment();
            break;
          case "ninjascroll":
            response = await handlers.ninjaScroll();
            break;
          case "kalkulatormq":
            response = await handlers.kalkulatorQuest();
            break;
          case "food":
            response = await handlers.buffFood();
            break;
          case "kamustoram":
            response = await handlers.kamusToram();
            break;
          case "petlvling":
            response = await handlers.petLvling();
            break;
          case "arrowelement":
            response = await handlers.arrowElemental();
            break;
          case "buildtoram":
            response = await handlers.buildToram();
            break;
          case "maintenance":
            response = await handlers.mtTerbaru();
            break;
          case "carianime":
            response = await handlers.cariAnime({ args });
            break;
          case "carimanga":
            response = await handlers.cariManga({ args });
            break;
          case "anime":
            response = await handlers.anime({ args });
            break;
          case "manga":
            response = await handlers.manga({ args });
            break;
          case "ongoinganime":
            response = await handlers.ongoingAnime();
            break;
          case "randomquote":
            response = await handlers.randomQuote();
            break;
          case "reqfitur":
            response = await handlers.reqFitur(context);
            break;
          case "infobot":
            response = await handlers.infoBot();
            break;
          case "help":
            response = await handlers.help();
            break;
          case "ai":
            response = await handlers.ai(context);
            break;
          case "sticker":
            response = await handlers.sticker(context);
            break;
          case "tiktok":
            response = await handlers.tiktok({ args });
            break;
          case "fb":
            response = await handlers.fb({ args });
            break;
          case "ig":
            response = await handlers.ig({ args });
            break;
          case "weapon":
          case "armor":
            const parsedMessage = parseFillStatMessage(message);
              if (parsedMessage) {
                response = await handlers.fillstats(parsedMessage);
              } else {
                response = `Pesan tidak sesuai pola ${command}.`;
              }
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
  };
  async processGrup(req, res) {
    const {
      groupId,
      participants,
      action,
      groupname,
      participantsCount,
    } = req.body;

    if (!groupId || !participants || !action) {
      return res.status(400).json({ message: "Parameter wajib diisi. Data yang didapat:" + JSON.stringify(req.body) });
    }

    const responFormatter = new ResponFormatter();
    const from = groupId.replace("@c.us", "").replace("@s.whatsapp.net", "").replace("@g.us", "");
    const { isActive, groupSettings } = await checkSubscription(from).catch((error) => {
      console.error("Error checking subscription:", error);
      res.status(500).send("Internal server error");
      return {};
    });
  
    const context = {
      from,
      participants,
      action,
      groupname,
      participantsCount,
    };
  
    if (isActive) {
      let response;
      if (action === "add" && groupSettings.welcome === true) {
        response = await handlers.welcome(context);
      } else if (action === "remove" && groupSettings.out === true) {
        response = await handlers.out(context);
      }
  
      axios.post(`${process.env.WA_BOT_URL}/send-message`, {
          api_key: process.env.WA_BOT_API_KEY,
          sender: process.env.WA_BOT_API_DEVICE,
          number: groupId,
          message: responFormatter.line(response),
      });
      
    } else {
      res.status(200).send("No active subscription for this group."); // Respons default
    }
  }  
  
}

function parseFillStatMessage(message) {
  const potRegex = /\/(weapon|armor) pot:\s*(\d+)/i;
  const statRegex = /([A-Z]+%?)\s+(-?\d+)/ig;

  const potMatch = message.match(potRegex);
  const stats = [...message.matchAll(statRegex)];

  if (!potMatch || stats.length < 3) return null;

  const type = potMatch[1]; // weapon atau armor
  const potValue = parseInt(potMatch[2], 10); // Nilai pot

  const parsedStats = stats.map(([, stat, value]) => ({
    stat, // Ubah stat menjadi uppercase
    value: parseInt(value, 10),
  }));

  return { type, potValue, stats: parsedStats };
}

module.exports = Chizurubot;