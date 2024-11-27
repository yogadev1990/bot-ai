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
  
      return `*𝐂𝐡𝐢𝐳𝐮𝐫𝐮-𝐜𝐡𝐚𝐧🌸*\n\nSiap tuan, sesuai permintaan<3\n╔═════════════\n${sorted
        .map((data) => bosstemplate(data, rawlv))
        .join("\n")}\n╚══〘 *Toram Database* 〙══`;
    } catch (error) {
      console.error("Terjadi kesalahan:", error.message);
      return "Terjadi kesalahan dalam pencarian.";
    }
  },

  async lvlingBs({ args }) {
    if ((args.length < 1)) {
      return "Format salah. Gunakan /lvlingbs [tec/non].";
    } else if (args[0] === "tec") {
        return `*𝐂𝐡𝐢𝐳𝐮𝐫𝐮-𝐜𝐡𝐚𝐧🌸*
󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖
List untuk Non-Full TEC char:
- 1-10: Baju Pengelana (Armor)
- 8-18: Zirah Kulit (Armor)
- 15-35: Tapal Minotaur (Tinju)
- 35-50: Hard Knuckles (Tinju)
- 50-65: Berserker Blade (THS)
- 60-70: Folium Staff (Tongkat)/Phyto Blade (OHS)
- 70-90: Pedang Indigo (OHS)
- 85-100: Pedang Prajurit (OHS)
- 100-120: Fusee Trahison (Bowgun)/Jubah Suci (Armor)
- 120-140: Tombak Baskara (Tombak)
- 140-155: Tombak Ignis (Tombak)
- 155-165: Jubah Bulu Surgawi (Armor)
- 165-170: Bakung Lelabah merah (Katana)
- 170-175: Pedang Indigo (OHS)
- 175-185: Zirah Pepagan (Armor)
- 185-190: Busur/Pedang Vulture (Busur/THS)
- 190-195: Senjata Venena II
- 195-200: Pedang/Cakar Arachnida (OHS/Tinju)
- 200-205: Baju Kaisar Iblis (Armor)
- 205-210: Dara (Armor)
- 210-215: Ular Putih (Katana)
- 215-225: Pedang Dalam (OHS)
- 225-230: Pedang Bara Api (Katana)
- 230-240: Kostum Pengelabu (Armor)
- 240-260: Jubah Pendeta Air (Armor)
	
*Gunakan Perlengkapan DEX Untuk Meningkatkan Sedikit Difficulty*
*Gunakan Perlengkapan STR Untuk Meningkatkan Sedikit Success Rate*`;
    } else if (args[0] === "non") {
        return `*𝐂𝐡𝐢𝐳𝐮𝐫𝐮-𝐜𝐡𝐚𝐧🌸*
󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖
List untuk Full TEC CHAR:
1-10: Baju Pengelana (Armor)
10-140: Tombak Baskara (Tombak)/Baju Diomedea (Armor)
140-185: Zirah Pepagan (Armor)
185-200: Pedang/Cakar Arachnida (OHS/Tinju)
200-240: Kostum Pengelabu (Armor)
240-260: Jubah Pendeta Air (Armor)`;
    } else {
        return "Format salah. Gunakan /lvlingbs [tec/non].";
    }
  },

  async lvlingAlche() {
    return `*Chizuru-chan🌸*

List Leveling Prof Alchemist:
╔═════════════
╠➥ Lv 1-10: Revita I
╠➥ Lv 10-30: Revita II
╠➥ Lv 31-55: Revita III
╠➥ Lv 56-80: Revita IV     
╠➥ Lv 81-105: Revita V
╠➥ Lv 106-135: Revita VI
╠➥ Lv 136-240: Orichalcum 
╠➥ Lv 241+: Orichalcum Murni
╚═════════════
						
Tingkatan padu/lock & Prof minimum:
╔═════════════
╠➥ Lock 1: Prof Alche Lv 0
╠➥ Lock 2: Prof Alche Lv 50
╠➥ Lock 3: Prof Alche Lv 100
╠➥ Lock 4: Prof Alche Lv 150
╠➥ Lock 5: Prof Alche Lv 200
╚═════════════`
  },
  
  async ai({ from, args }) {
    if (!args || args.length === 0) {
      return "Tuliskan pesan Anda setelah /ai.";  // Prompt if no input is provided
    }
  
    const message = args.join(" ");  // Join arguments into a single message
    const response = await GeminiAi.run(from, message);  // Pass 'from' and the message to Gemini AI
    return response;  // Return the AI's response
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
