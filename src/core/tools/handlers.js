const { formatMenu } = require("./formatmenu");
const StickerWa = require("./stickerWa");
const GeminiAi = require("./geminiAi");
const axios = require("axios");
const token = "17|2bjIThBL1nVrE8fDjPTygHbp8GtTyuTO8NMdmsmx";
const auth = { headers: { Authorization: `Bearer ${token}` } };

const handlers = {
  async status({ groupname, from, statusVIP, sisaLangganan, participantCount }) {
    return `*𝐂𝐡𝐢𝐳𝐮𝐫𝐮-𝐜𝐡𝐚𝐧🌸*\n\n*${groupname}* (${from}@g.us)\nStatus VIP: ${statusVIP}\nSisa Langganan: ${sisaLangganan}\nJumlah Member: ${participantCount}\n\nPerpanjang durasi layanan Chizu hanya di revandastore.com`;
  },
  
  async menu() {
    return formatMenu();
  },

  async chizu({ name }) {
    return `*𝐂𝐡𝐢𝐳𝐮𝐫𝐮-𝐜𝐡𝐚𝐧🌸*\n\nどうも ありがとう ございます ~~\nIya tau, chizu cantik, makasih kak ${name}<3\nKetik */menu* untuk membuka list command yaa.`;
  },

  async sticker({ bufferImage }) {
    if (!bufferImage) {
      return "Please send an image with the command /sticker.";
    }
    const sticker = await StickerWa.create(bufferImage);
    return sticker; // Return sticker object for further processing
  },

  async lvlingChar({ args }) {
    if (args.length < 2) {
      return "Format salah. Gunakan /lvlingchar [miniboss/boss] [lvl].";
    }
  
    const type = args[0].toLowerCase();
    const rawlv = parseInt(args[1], 10);
    let typem = "";
  
    if (type === "boss") typem = "3";
    else if (type === "miniboss") typem = "2";
    else return "Tipe harus 'boss' atau 'miniboss'.";
  
    if (isNaN(rawlv)) {
      return "Level harus berupa angka.";
    }
  
    try {
      const response = await axios.get(
        `https://toram-id.com/api/v1/monsters/${typem}?level=${rawlv}&bonusexp=0&between=9`,
        auth
      );
      const users = response.data.data.slice(0, 10);
      const sorted = users.sort((a, b) => b.xp - a.xp);
  
      if (sorted.length === 0) {
        return "Tidak ada hasil untuk pencarian ini.";
      }
  
      return `*Chizuru-chan🌸*\n\nSiap tuan, sesuai permintaan<3\n╔═════════════\n${sorted
        .map((data) => bosstemplate(data, rawlv))
        .join("\n")}\n╚══〘 *Toram Database* 〙══`;
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      return "Terjadi kesalahan dalam pencarian.";
    }
  },

  async ai({ args }) {
    if (!args) {
      return "Tuliskan pesan anda setelah /ai.";
    }
    const response = await GeminiAi.send(args.join(" "));
    return response;
  },

  async default() {
    return "Masih dalam tahap pengembangan.";
  },
};

function bonusexp(xp, PlayerLv, BossLv) {
    if (BossLv <= PlayerLv + 5 && PlayerLv - 5 <= BossLv) return xp * 11;
    if (BossLv <= PlayerLv + 6 && PlayerLv - 6 <= BossLv) return xp * 10;
    if (BossLv <= PlayerLv + 7 && PlayerLv - 7 <= BossLv) return xp * 9;
    if (BossLv <= PlayerLv + 8 && PlayerLv - 8 <= BossLv) return xp * 7;
    if (BossLv <= PlayerLv + 9 && PlayerLv - 9 <= BossLv) return xp * 3;
    return xp;
  };  
  // Template format untuk setiap boss
  function bosstemplate(RawData, rawlv) {
    return `╠➥ *${RawData.name}*\n║ Level: ${RawData.level}\n║ EXP: ${bonusexp(
RawData.xp,
rawlv,
RawData.level)}\n║ HP: ${RawData.hp}\n║ 📌 ${RawData.map.name}`;
  };

module.exports = handlers;
