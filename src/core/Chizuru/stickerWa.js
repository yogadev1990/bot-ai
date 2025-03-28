const fs = require("fs");
const { Sticker, StickerTypes } = require("wa-sticker-formatter");

class StickerWa {
  static async create(bufferImage) {
    const tempPath = `${__dirname}/../../data/temp/test.png`;
    const pathWebp = `${__dirname}/../../../public/test.webp`;
    const stream = Buffer.from(bufferImage, "base64");
    fs.writeFileSync(tempPath, stream);
    if (fs.existsSync(pathWebp)) fs.unlinkSync(pathWebp);

    const sticker = new Sticker(tempPath, {
      pack: "Chizuru Pack",
      author: "Chizuru",
      type: StickerTypes.CROPPED,
      categories: ["🤩", "🎉"], // The sticker category
      id: "12345", // The sticker id
      quality: 100, // The quality of the output file
      background: "#000000", // The sticker background color (only for full stickers)
    });

    const converted = await sticker.toFile(pathWebp);

    // Tambahkan parameter timestamp untuk menghindari cache
    const stickerUrl = `https://chizuru.torampedia.my.id/public/test.webp?timestamp=${Date.now()}`;
    return stickerUrl;
  }
}

module.exports = StickerWa;