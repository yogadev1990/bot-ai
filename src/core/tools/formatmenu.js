const menus = {
    toram: [
      "/lvling char *miniboss/boss* [lvl]",
      "/lvling bs *tec/non*",
      "/lvling alche",
      "/cari item [item]",
      "/cari monster [monster]",
      "/racik rumus fill",
      "/cari registlet [regist]",
      "/harga slot [eq]",
      "/bahan tas",
      "/bahan mq",
      "/kode live",
      "/info farm mats",
      "/info dye",
      "/info ailment",
      "/ninja scroll",
      "/kalkulator quest",
      "/buff food",
      "/kamus besar toram",
      "/pet lvling",
      "/arrow elemental",
      "/build toram",
      "/mt terbaru",
    ],
    general: [
      "/cari anime [anime]",
      "/cari manga [manga]",
      "/anime *top/random/recommendations*",
      "/manga *top/random/recommendations*",
      "/on going anime",
      "/random anime quotes",
      "/AI chat [pesan]",
      "/tiktok dl [link]",
      "/fb dl [link]",
      "/ig dl [link]",
      "/stikerin (reply foto)",
      "/req fitur [pesan]",
      "/info bot",
      "/help",
    ],
    admin: [
      "/add [@628xx]",
      "/kick [@tag member]",
      "/promote [@tag member]",
      "/demote [@tag member]",
      "/anti toxic *on/off*",
      "/anti link *on/off*",
      "/welcome msg *on/off*",
      "/out msg *on/off*",
      "/grup status",
    ],
  };
  
  function formatMenu() {
    let menuText = `*Chizuru-chan🌸*
  Iyaa kak, ada yang bisa chizu bantu?\n\n`;
  
    menuText += "╔══〘 *TORAM MENU* 〙══\n";
    menuText += menus.toram.map((item) => `╠ ${item}`).join("\n");
    menuText += "\n║\n";
  
    menuText += "╠══〘 *GENERAL MENU* 〙══\n";
    menuText += menus.general.map((item) => `╠ ${item}`).join("\n");
    menuText += "\n║\n";
  
    menuText += "╠══〘 *ADMIN MENU* 〙══\n";
    menuText += menus.admin.map((item) => `╠ ${item}`).join("\n");
    menuText += "\n╚═〘 *ANTI VIRTEX ON* 〙═";
  
    return menuText;
  }
  
  module.exports = { formatMenu };
  