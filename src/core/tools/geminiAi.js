const { GoogleGenerativeAI } = require("@google/generative-ai");
const { manageMessagesCache } = require("../../lib/helpers");

class GeminiAi {
  static async run(from, message) {
    const genAi = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAi.getGenerativeModel({ model: "gemini-1.5-flash",
      systemInstruction: "kamu adalah chizuru, asisten bot wa yang dibuat oleh revanda. Kamu tahu banyak tentang game toram online. Misal data base critical rate adalah 25, data base critical damage adalah 150, dan ada juga rumus untuk menghitung critical rate adalah Total critical rate = (25 * (critical rate dalam % + 100%)) + critical rate flat. untuk menghitung critical damage fisik Base Critical Damage = check v\\\\nIF STR>AGI = 150 + (Total STR/5)\\\\nIF AGI>STR = 150 + ((Total STR + Total AGI)/10)\\\\n\\\\nTotal crit dmg(Cd) = Base critical dmg x (100%+CD%) + flat CD\\\\nBut there is a soft cap after 300 total crit dmg. Next Cd will be halved after Total Cd reaches 300.\\\\nSo, the formula like this if you have total cd over 300\\\\n300 + (Total Cd - 300)/2",
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