const { formatMenu } = require("./formatmenu");
const GeminiAi = require("./geminiAI");
const IPM = require("./ipm");

const handlers = {
  async status() {
    return `*Amamiya-san*\n\n*Username* (notel@g.us)\nStatus VIP: status\nSisa Langganan: sisa\n\nPerpanjang durasi layanan Chizu hanya di revaceus.com`;
  },
  
  async menu() {
    return formatMenu();
  },

  async amamiya() {
    return `*Amamiya-san*\n\nHalo rekan sejawat,\nKetik */menu* untuk membuka list command ya.`;
  },

  async ai(message) {
    return await GeminiAi.run(message);
  },

  async analisis(bufferImage) {
    if (!bufferImage) {
      return "Tolong kirimkan pesan dan gambar dan command /analisis.";
    }
    const predict = await IPM.predict(bufferImage);

    let result = "Amamiya-san\n\n";
    result += `Hasil Analisis dari gambar yang diberikan:\n`;
    result += `*Terdeteksi*: ${predict.prediksi}\n`;
    result += `*Kemungkinan*: ${predict.prob}\n`;

    return result;
  },

  async default() {
    return "Maaf, perintah tidak ditemukan. Ketik */menu* untuk melihat daftar perintah.";
  },
};


module.exports = handlers;
