const { formatMenu } = require("./formatmenu");
const GeminiAi = require("./geminiAI");
const IPM = require("./ipm");
const axios = require("axios");

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
    const ipm = new IPM();
    const predict = await ipm.predict(imageBuffer);

    let result = "Amamiya-san\n\n";
    result += `Hasil Analisis dari gambar yang diberikan:\n`;
    result += `*Terdeteksi*: ${predict.prediksi}\n`;
    result += `*Kemungkinan*: ${predict.prob}\n`;

    return result;
  },

  async obat(args){
    if (!args) return "Tolong sertakan nama obat yang ingin dicari.";
    const result = await search(args);
    return result;
  },

  async default() {
    return "Maaf, perintah tidak ditemukan. Ketik */menu* untuk melihat daftar perintah.";
  },
};

const search = async (query) => {
  const token = "bkwAaLO5bMKLnmUeNsDwHRDUuQAA";
  const auth = { headers: { Authorization: `Bearer ${token}` } };

  try {
      const response = await axios.get(`https://api-satusehat-stg.dto.kemkes.go.id/kfa-v2/products/all?page=1&size=10&product_type=farmasi&keyword=${query}`, auth);
      const items = response.data.items.data;

      let itemDetails = `*Amamiya-San*\n`;

      items.forEach(item => {
          const itemName = item.name; // Accessing the name correctly
          const itemLink = item.kfa_code;
          const itemStat = item.dosage_form.name; // Corrected from dosageform to dosage_form
          const namadagang = item.nama_dagang;
          const dosisperunit = item.dose_per_unit; // Fixed typo: 'dosisperunit' should be 'dosis_per_unit'
          const volume = item.volume;
          const satuan = item.volume_uom_name; // Fixed typo: 'satuan' should be 'volume_uom_name'

          itemDetails += `\n*Nama Obat:* ${itemName}\n`;
          itemDetails += `*Kode Obat:* ${itemLink}\n`;
          itemDetails += `*Bentuk Sediaan:* ${itemStat}\n`;
          itemDetails += `*Banyaknya:* ${volume} ${satuan}\n`;
          itemDetails += `*Dosis per Unit:* ${dosisperunit}\n`; // Ensure to use the correct variable
          itemDetails += `*Nama dagang:* ${namadagang}\n`;
      });

      return itemDetails;
  } catch (error) {
      console.error('Error fetching item data:', error.message);
      console.error('Error stack trace:', error.stack); // Show the error stack for debugging
      return 'Terjadi kesalahan dalam pencarian item.';
  }
}
module.exports = handlers;
