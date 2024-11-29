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
          case ("weapon" || "armor"):
            const parsedMessage = parseFillStatMessage(message);
            if (parsedMessage) {
              response = `Tipe: ${parsedMessage.type}\nPot: ${parsedMessage.potValue}\nStats:\n` +
                parsedMessage.stats
                  .map(({ stat, value }) => `- ${stat}: ${value}`)
                  .join("\n");
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

  }
  
}

function parseFillStatMessage(message) {
  const potRegex = /\/(weapon|armor) pot:\s*(\d+)/i;
  const statRegex = /^([A-Z]+%?)\s+(-?\d+)/gm;

  const potMatch = message.match(potRegex);
  const stats = [...message.matchAll(statRegex)];

  if (!potMatch || stats.length < 3) return null;

  const type = potMatch[1]; // weapon atau armor
  const potValue = parseInt(potMatch[2], 10); // Nilai pot

  const parsedStats = stats.map(([, stat, value]) => ({
    stat,
    value: parseInt(value, 10),
  }));

  return { type, potValue, stats: parsedStats };
}

module.exports = Chizurubot;