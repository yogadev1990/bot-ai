const { checkSubscription } = require("../lib/helpers");
const ResponFormatter = require("../lib/responFormatter");
const {formatMenu} = require("./tools/formatmenu");
const GeminiAi = require("./tools/geminiAi");
const StickerWa = require("./tools/stickerWa");

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
      groupname} = req.body;
    const { isActive, remainingTime } = await checkSubscription(from);
    const statusVIP = isActive ? "Aktif" : "Tidak Aktif";
    const sisaLangganan = isActive ? remainingTime : "Tidak ada";
    const menu = formatMenu();
    const responFormatter = new ResponFormatter();

const status = `*𝐂𝐡𝐢𝐳𝐮𝐫𝐮-𝐜𝐡𝐚𝐧🌸*

*${groupname}* (${from}@g.us)
Status VIP: ${statusVIP}
Sisa Langganan: ${sisaLangganan}
Jumlah Member: ${participantCount}

Perpanjang durasi layanan Chizu hanya di revandastore.com`;
const chizu = `*𝐂𝐡𝐢𝐳𝐮𝐫𝐮-𝐜𝐡𝐚𝐧🌸*
      
どうも ありがとう ございます ~~
Iya tau, chizu cantik, makasih kak ${name}<3
ketik */menu* untuk membuka list command yaa.`;
    if ('participant' in req.body) { // the message is from a group
      if (message === "/status") {
        res.send(responFormatter.line(status).responAsText());
      }
      if (isActive) {
        if (message === "/chizu") {
          res.send(
            responFormatter.line(chizu).responAsText());
        }
        if (message === "/menu") {
          res.send(
            responFormatter
            .line(menu).responAsText());
        }
        if (message === "/lvling char") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/lvling bs") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/lvling alche") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/cari item") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/cari monster") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/racik rumus fill") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/cari registlet") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/harga slot") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/bahan tas") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/bahan mq") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/kode live") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/info farm mats") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/info dye") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/info ailment") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/ninja scroll") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/kalkulator quest") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/buff food") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/kamus besar toram") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/pet lvling") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/arrow elemental") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/build toram") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/mt terbaru") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/cari anime") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/cari manga") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/anime *top/random/recommendations*") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/manga *top/random/recommendations*") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/on going anime") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/random anime quotes") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/AI chat") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/tiktok dl") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/fb dl") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/ig dl") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
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
        if (message === "/req fitur") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/info bot") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/help") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/add") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/kick") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/promote") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/demote") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/anti toxic") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/anti link") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/welcome msg") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
        if (message === "/out msg") {
          res.send(
            responFormatter
            .line("Masih dalam tahap pengembangan").responAsText());
        }
      } else if (!isActive) {
        if (message === "/chizu") {
          res.send(responFormatter.line(`Grup ini belum berlangganan Bot Chizuru`).responAsText());
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
  };
  async processGrup(req, res) {

  };
};

module.exports = Chizurubot;