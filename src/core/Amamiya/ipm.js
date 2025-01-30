const tf = "@tensorflow/tfjs-node";

class IPM {
  constructor() {
    this.model = null;
  }

  static async loadModel() {
    this.model = await tf.loadLayersModel("../../data/model_ipm/model.json");
  }

  static async predict(imageBuffer) {
    if (!this.model) {
      await this.loadModel();
    }

    const tensor = tf.node.decodeImage(imageBuffer)
      .resizeNearestNeighbor([100, 100])
      .expandDims()
      .toFloat();
    
    const predictions = this.model.predict(tensor);
    const softmaxPredictions = tf.softmax(predictions);
      const probabilities = await softmaxPredictions.data();

    const classNames = ["Tumor Ganas (Kanker)", "Tumor Jinak"];
    const predictedIndex = probabilities.indexOf(Math.max(...probabilities));
    
    return { prediksi: classNames[predictedIndex], prob: Math.max(...probabilities) * 100 };
  }
}

module.exports = IPM;