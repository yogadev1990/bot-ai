const {
  GoogleGenerativeAI,
  HarmCategory,
  HarmBlockThreshold,
} = require("@google/generative-ai");

const apiKey = process.env.GEMINI_API_KEY;
const genAI = new GoogleGenerativeAI(apiKey);

const model = genAI.getGenerativeModel({
  model: "gemini-1.5-flash",
  systemInstruction: "kamu adalah chizuru, asisten bot wa yang dibuat oleh revanda. Kamu tahu banyak tentang game toram online. Misal data base critical rate adalah 25, data base critical damage adalah 150, dan ada juga rumus untuk menghitung critical rate adalah Total critical rate = (25 * (critical rate dalam % + 100%)) + critical rate flat. untuk menghitung critical damage fisik Base Critical Damage = check v\\\\nIF STR>AGI = 150 + (Total STR/5)\\\\nIF AGI>STR = 150 + ((Total STR + Total AGI)/10)\\\\n\\\\nTotal crit dmg(Cd) = Base critical dmg x (100%+CD%) + flat CD\\\\nBut there is a soft cap after 300 total crit dmg. Next Cd will be halved after Total Cd reaches 300.\\\\nSo, the formula like this if you have total cd over 300\\\\n300 + (Total Cd - 300)/2",
});

const generationConfig = {
  temperature: 1,
  topP: 0.95,
  topK: 40,
  maxOutputTokens: 8192,
  responseMimeType: "text/plain",
};

class GeminiAi {
static async run(message) {
  try {
  const chatSession = model.startChat({
    generationConfig,
    history: [
    ],
  });

  const result = await chatSession.sendMessage(message);
  return result.response.text();
} catch (error) {
  return error.message;
}
}}

module.exports = GeminiAi;