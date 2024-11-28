const axios = require("axios");
const cheerio = require("cheerio");

class DyeExtractor {
  constructor() {
    this.url = "https://tanaka0.work/AIO/en/DyePredictor/ColorWeapon";
  }

  // Fungsi untuk mengumpulkan data dye
  static async scrapeDye() {
    try {
      const { data } = await axios.get(this.url);
      const $ = cheerio.load(data);

      const bosses = [];
      $('li').each((index, element) => {
        const bossName = $(element).find('span.boss-name').text();
        const colorCode = $(element).find('span.color-code').text();
        if (bossName && colorCode) {
          bosses.push({ boss_name: bossName, color_code: colorCode });
        }
      });

      // Mengembalikan data dalam bentuk teks
      let resultText = "";
      bosses.forEach((boss, index) => {
        resultText += `${index + 1}. Boss: ${boss.boss_name}, Color Code: ${boss.color_code}\n`;
      });

      return resultText; // Mengembalikan hasil sebagai teks
    } catch (error) {
      console.error("Error fetching data:", error);
      return "Error fetching data.";
    }
  }
}

module.exports = DyeExtractor;