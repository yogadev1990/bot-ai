const { GoogleGenerativeAI } = require("@google/generative-ai");

class GeminiAi {
  static async send(message) {
    const apiKey = process.env.GEMINI_API_KEY;
    const genAI = new GoogleGenerativeAI(apiKey);

    const model = genAI.getGenerativeModel({
      model: "gemini-1.5-flash",
    });

    const generationConfig = {
      temperature: 1,
      topP: 0.95,
      topK: 40,
      maxOutputTokens: 8192,
      responseMimeType: "text/plain",
    };

    // Prepare chat history
    const parts = [
      {text: "bahasa indonesia"},
      {text: "input: base critical rate toram online"},
      {text: "output: +25"},
      {text: "input: base critical damage toram online"},
      {text: "output: +150"},
      {text: "input: rumus penghitungan critical rate toram online"},
      {text: "output: Total critical rate = (25 * (total critical rate dalam % + 100%)) + critical rate flat"},
      {text: "input: rumus perhitungan base critical damage toram"},
      {text: "output: Base Critical Damage = check v\\nIF STR>AGI = 150 + (Total STR/5)\\nIF AGI>STR = 150 + ((Total STR + Total AGI)/10)\\n\\nTotal crit dmg(Cd) = Base critical dmg x (100%+CD%) + flat CD\\nBut there is a soft cap after 300 total crit dmg. Next Cd will be halved after Total Cd reaches 300.\\nSo, the formula like this if you have total cd over 300\\n300 + (Total Cd - 300)/2"},
      {text: "input: hitung total critical rate toram jika aku punya 20% critical rate dan flat critical rate sebesar 60"},
      {text: "output: Total critical rate = (25 * (20% + 100%)) + 60\n\nTotal critical rate = (25 * 120%) + 60\n\nTotal critical rate = 30 + 60\n\nTotal critical rate = 90"},
      {text: "input: hitung total critical rate toram jika aku punya 5% critical rate dan flat critical rate sebesar 90"},
      {text: "output: Total critical rate = (25 * (5% + 100%)) + 90\n\nTotal critical rate = (25 * 105%) + 90\n\nTotal critical rate = 26.25 + 90\n\nTotal critical rate = 116.25"},
      {text: "input: hitung critical damage aku jika aku memiliki agi 247 str 500 cd flat 44 dan cd%22"},
      {text: "output: Karena STR > AGI, rumusnya adalah:\n\nBase Critical Damage = 150 + (Total STR / 5) \nBase Critical Damage = 150 + (500 / 5)\nBase Critical Damage = 150 + 100\nBase Critical Damage = 250\n\nTotal Critical Damage = Base Critical Damage x (100% + CD%) + flat CD\nTotal Critical Damage = 250 x (100% + 22%) + 44\nTotal Critical Damage = 250 x 122% + 44\nTotal Critical Damage = 305 + 44\nTotal Critical Damage = 349\n\nKarena Total Critical Damage (349)  > 300, maka ada soft cap.  Rumus setelah soft cap adalah:\n\nTotal Critical Damage = 300 + (Total Critical Damage - 300) / 2\nTotal Critical Damage = 300 + (349 - 300) / 2\nTotal Critical Damage = 300 + 49 / 2\nTotal Critical Damage = 300 + 24.5\nTotal Critical Damage = 324.5\n\nJadi, total critical damage Anda adalah **324.5**.  Perlu diingat bahwa damage di Toram Online biasanya dibulatkan ke bawah."},
      {text: `input: ${message}`},  // User input dynamically passed
    ];

    const result = await model.generateContent({
      contents: [{ role: "user", parts }],
      generationConfig,
    });

    return result.response.text();  // Return the text response
  }
}

module.exports = GeminiAi;