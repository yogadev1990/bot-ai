const tf = require("@tensorflow/tfjs-node");
const path = require("path");

class IPM {
  constructor() {
    this.model = null;
  }

  async loadModel() {
    if (!this.model) {
      const modelPath = path.resolve(__dirname, "../../data/model_ipm/model.json");
      this.model = await tf.loadGraphModel(`file://${modelPath}`);
      console.log("✅ Model berhasil dimuat.");
    }
  }

  async predict(imageBuffer) {
    if (!this.model) {
      await this.loadModel();
    }

    // Ubah gambar menjadi tensor
    const tensor = tf.node.decodeImage(imageBuffer)
      .resizeNearestNeighbor([100, 100])
      .expandDims()
      .toFloat();

    // Jalankan prediksi
    const predictions = this.model.predict(tensor);
    const probabilities = await predictions.data(); // Konversi tensor menjadi array

    // Kelas yang diprediksi
    const classNames = ["Tumor Ganas (Kanker)", "Tumor Jinak"];
    const predictedIndex = probabilities.indexOf(Math.max(...probabilities));

    return {
      prediksi: classNames[predictedIndex],
      prob: (Math.max(...probabilities) * 100).toFixed(2) + "%",
    };
  }
}

module.exports = IPM;
