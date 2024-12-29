const { checkDelay, saveDelayed } = require("../lib/helpers.js");
const ResponFormatter = require("../lib/responFormatter.js");
const Iklan = require("./Revanda/Iklan.js");

class Revandabot {
  async process(req, res) {
    const { from } = req.body;
    const responFormatter = new ResponFormatter();
    const iklan = new Iklan();

    if ('participant' in req.body) {
      const canSendAd = await checkDelay(from);
      if (canSendAd) {
        await saveDelayed(from);
        res.send(responFormatter.line(iklan.getIklan()).responAsText());
      } else return;
    } else return;
  }
}

module.exports = Revandabot;