const ResponFormatter = require("../lib/responFormatter");
const handlers = require("./Amamiya/handlers");
const PREFIX = ">";

class Amamiyabot {
  async process(req, res) {
    const {
      message,
      bufferImage,
      from,
    } = req.body;

    const responFormatter = new ResponFormatter();
    const [command, ...args] = message.slice(PREFIX.length).trim().split(" ");

    let response;
    if (command === "status") {
      response = await handlers.status();
    } else if (command === "menu") {
      response = await handlers.menu();
    } else if (command === "amamiya") {
      response = await handlers.amamiya();
    } else if (command === "ai") {
      response = await handlers.ai(message);
    } else if (command === "analisis") {
      response = await handlers.analisis(bufferImage);
    } else {
      response = await handlers.default();
    }

    if (response) {
      return res.send(responFormatter.line(response).responAsText());
    } else {
      return;
    }
  }
}

module.exports = Amamiyabot;