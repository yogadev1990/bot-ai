const axios = require("axios");
const cheerio = require("cheerio");

class DyeExtractor{
  async scrapeDye() {
  try {
    console.log("Memulai permintaan ke URL...");
    const { data } = await axios.get("https://tanaka0.work/AIO/en/DyePredictor/ColorWeapon");
    console.log("Permintaan berhasil. Data HTML diterima.");

    const $ = cheerio.load(data);
    console.log("Data HTML berhasil diproses dengan cheerio.");

    const bosses = [];
    $('table tr').each((index, row) => {
      let bossName = $(row).find('td:nth-of-type(1)').text().trim();
      let colorCode = $(row).find('td:nth-of-type(2)').text().trim();

      // Membersihkan teks bossName dan colorCode
      bossName = bossName.replace(/\(Lv.\..*?\)/g, '').trim().replace(/\s+/g, ' '); // Menghapus level monster
      colorCode = colorCode.replace(/\s+/g, ' '); // Menghapus spasi berlebih dalam kode warna

      console.log(`Baris ${index + 1}: bossName="${bossName}", colorCode="${colorCode}"`);

      if (bossName && colorCode) {
        bosses.push({ boss_name: bossName, color_code: colorCode });
      }
    });

    console.log(`Jumlah item yang ditemukan: ${bosses.length}`);

    let resultText = "";
    bosses.forEach((boss, index) => {
      resultText += `${index + 1}. Boss: ${boss.boss_name}, Color Code: ${boss.color_code}\n`;
    });

    console.log("Hasil akhir:");
    console.log(resultText || "Tidak ada data yang ditemukan.");
    return resultText;
  } catch (error) {
    console.error("Error fetching data:", error);
    return "Error fetching data.";
  }
}
}
module.exports = DyeExtractor;
