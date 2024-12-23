const menus = {
    toram: [
      "/lvlchar *miniboss/boss* [lvl]",
      "/lvlbs *tec/non*",
      "/lvlalche",
      "/item [nama item]",
      "/monster [nama monster]",
      "/rumusfill",
      "/registlet [nama regist]",
      "/hargaslot [nama eq]",
      "/bahantas",
      "/bahanmq",
      "/kodelive",
      "/farm mats",
      "/dye",
      "/ailment",
      "/ninjascroll",
      "/kalkulatormq",
      "/food",
      "/kamustoram",
      "/petlvling",
      "/arrowelement",
      "/buildtoram",
      "/maintenance",
    ],
    general: [
      "/carianime [anime]",
      "/carimanga [manga]",
      "/anime *top/random/recommendations*",
      "/manga *top/random/recommendations*",
      "/ongoinganime",
      "/randomquote",
      "/ai [pesan kamu]",
      "/tiktok [link]",
      "/fb [link]",
      "/ig [link]",
      "/stikerin (beserta gambar)",
      "/reqfitur [pesan kamu]",
      "/infobot",
      "/help",
    ],
    admin: [
      "/add [08xxx]",
      "/kick [@tag member]",
      "/promote [@tag member]",
      "/demote [@tag member]",
      "/antitoxic *on/off*",
      "/antilink *on/off*",
      "/welcome msg *on/off*",
      "/outmsg *on/off*",
      "/status",
    ],
  };
  
  function formatMenu() {
    let menuText = `*𝐂𝐡𝐢𝐳𝐮𝐫𝐮-𝐜𝐡𝐚𝐧🌸*
Siap kak, ada yang bisa chizu bantu?
󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖
`;
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
  