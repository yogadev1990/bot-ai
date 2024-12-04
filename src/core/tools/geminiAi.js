const { GoogleGenerativeAI } = require("@google/generative-ai");
const { manageMessagesCache } = require("../../lib/helpers");

class GeminiAi {
  static async run(from, message) {
    const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash",
      systemInstruction: "Kamu adalah Chizuru, bot yang dibuat oleh revanda, seorang mahasiswa semester 3 kedokteran gigi UNSRI. Kamu mengerti banyak tentang dunia kedokteran, dan siap membantu pertanyaan soal dunia kedokteran.",
  });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    const history = manageMessagesCache(from, "user", message);
    const chat = model.startChat({
      history: history,
      generationConfig: generationConfig,
    });
    const result = await chat.sendMessage(message);
    const response = await result.response;
    const text = response.text();
    manageMessagesCache(from, "model", text);
    console.log("text", text);

    return text;
  }
}

module.exports = GeminiAi;