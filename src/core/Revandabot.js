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
    } else {
              res.send(responFormatter.line(`𝐑𝐞𝐯𝐚𝐧𝐝𝐚 𝐒𝐭𝐨𝐫𝐞 - 𝐀𝐮𝐭𝐨 𝐑𝐞𝐬𝐩𝐨𝐧

Mohon izin kak, ini adalah nomor bot Revanda Store,

Untuk melakukan pembelian silahkan order di:
> https://revandastore.com

Untuk pertanyaan, bisnis dan kerjasama silahkan kontak: 
> https://wa.me/6281271481561

Atas perhatiannya, saya ucapkan Terima kasih.`).responAsText());}
    }
}

module.exports = Revandabot;