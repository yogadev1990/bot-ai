const { GoogleGenerativeAI } = require("@google/generative-ai");
const { manageMessagesCache } = require("../../lib/helpers");

class GeminiAi {
  static async run(from, message) {
    try {
      const genAi = new GoogleGenerativeAI(process.env.GEMINI_KEY);
      const model = genAi.getGenerativeModel({ 
        model: "tunedModels/toram-online-model-2bpud9rs9i1b" 
      });
      // Step 1: Manage user input in cache
      const history = manageMessagesCache(from, "user", message);

      // Step 2: Start chat and generate response
      const chat = model.startChat({
        history: history,
        generationConfig: generationConfig,
      });

      const result = await chat.sendMessage(message);
      const text = result.response.text();

      // Step 3: Cache the AI response
      manageMessagesCache(from, "model", text);

      console.log("text", text);
      return text;
    } catch (error) {
      console.error("Error in GeminiAi.run:", error);

      // Return a meaningful error message
      return `Terjadi kesalahan saat memproses permintaan Anda. ${error.message}`;
    }
  }
}

module.exports = GeminiAi;
