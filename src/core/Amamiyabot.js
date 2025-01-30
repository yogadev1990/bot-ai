const ResponFormatter = require("../lib/responFormatter");
const handlers = require("./Amamiya/handlers");
const PREFIX = ">";

class Amamiyabot {
  async process(req, res) {
    const {
      message,
      bufferImage,
      from,
      participant,
    } = req.body;

    const responFormatter = new ResponFormatter();
    const [command, ...args] = message.slice(PREFIX.length).trim().split(" ");

    let response;
    if (!("participant" in req.body)) {
      switch (command) {
        case "status":
          response = await handlers.status();
          break;
        case "menu":
          response = await handlers.menu();
          break;
        case "amamiya":
          response = await handlers.amamiya();
          break;
        case "ai":
          response = await handlers.ai(message);
          break;
        case "analisis":
          response = await handlers.analisis(bufferImage);
          break;
        default:
          response = await handlers.default();
        break;
      }
    }

    if (response) {
      return res.send(responFormatter.line(response).responAsText());
    }
  }
}

module.exports = Amamiyabot;