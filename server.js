const express = require("express");
const bodyParser = require("body-parser");
const MessageHandler = require("./src/core/messageHandler");
const ResponFormatter = require("./src/lib/responFormatter");
const { saveSubscription } = require("./src/lib/helpers");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 3000;
const handlerMessage = new MessageHandler();

//create src/data/contacts.json if not exist
const fs = require("fs");
const pathcontact = `${__dirname}/src/data/contacts.json`;
if (!fs.existsSync(pathcontact)) {
  fs.writeFileSync(pathcontact, "[]");
}

app.use(bodyParser.json({ limit: "50mb" }));

app.get("/", (req, res) => {
  res.send("Ngapain kesini?");
});
app.post("/bot", handlerMessage.process);
app.post("/addsubs", async (req, res) => {
  const { from, duration } = req.body;
  const responFormatter = new ResponFormatter();

  if (!from || !duration) {
    return res.status(400).json({ message: "Parameter 'from' dan 'duration' wajib diisi." });
  }

  try {
    const durationInDays = parseInt(duration, 10);
    if (isNaN(durationInDays) || durationInDays <= 0) {
      return res.status(400).json({ message: "Durasi harus berupa angka positif." });
    }
    
    await saveSubscription(from, durationInDays);
    return res.send(responFormatter.line(`Langganan untuk grup ini telah ditambahkan selama ${durationInDays} hari.`).responAsText());
  } catch (error) {
    console.error("Error menambahkan langganan:", error);
    return res.status(500).json({ message: "Terjadi kesalahan saat menambahkan langganan." });
  }
});

//url static
app.use(express.static("public"));
app.use("/images", express.static("images"));

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});
