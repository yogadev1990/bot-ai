const menus = {
    general: [
      "/ai [pesan kamu]",
      "/analisis [penyakit] (Gambar)",
      "/diagnosis [gejala]",
    ],
    pdu: [
      "/anatomi1",
      "/anatomi2",
      "/biokimia",
      "/biologi",
      "/farmakologi",
      "/fisiologi1",
      "/fisiologi2",
      "/histologi1",
      "/histologi2",
      "/mikrobiologi",
      "/kardiovaskular",
      "/respirasi",
      "/gastrointestinal",
      "/neurologi",
      "/urogenital",
      "/endokrin",
      "/lokomotor",
      "/dermatologi",
      "/oftalmologi",
      "/psikiatri",
      "/pediatri",
    ],
    kgu: [
      "/anatgi1",
      "/anatgi2",
      "/histodent",
      "/embriodent",
      "/fisiodent",
      "/biomat1",
      "/biomat2",
      "/ipm",
      "/rkg",
      "/konservasi",
      "/prostodent",
      "/ortodent",
      "/bedahmulut",
    ],
    psikologi: [
      "Coming soon...",
    ],
    farmasi: [
      "/obat [nama obat]",
    ],
    perawat: [
      "/comingsoon",
    ],
  };
  
  function formatMenu() {
    let menuText = `*𝐀𝐦𝐚𝐦𝐢𝐲𝐚-𝐒𝐞𝐧𝐬𝐞𝐢*
Halo rekan sejawat, ada yang bisa dibantu?
󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖󠇖
`;
    menuText += "╔══〘 *GENERAL MENU* 〙══\n";
    menuText += menus.general.map((item) => `╠ ${item}`).join("\n");
    menuText += "\n║\n";
  
    menuText += "╠══〘 *KEDOKTERAN UMUM* 〙══\n";
    menuText += menus.pdu.map((item) => `╠ ${item}`).join("\n");
    menuText += "\n║\n";

    menuText += "╠══〘 *KEDOKTERAN GIGI* 〙══\n";
    menuText += menus.kgu.map((item) => `╠ ${item}`).join("\n");
    menuText += "\n║\n";

    menuText += "╠══〘 *PSIKOLOGI* 〙══\n";
    menuText += menus.psikologi.map((item) => `╠ ${item}`).join("\n");
    menuText += "\n║\n";

    menuText += "╠══〘 *FARMASI* 〙══\n";
    menuText += menus.farmasi.map((item) => `╠ ${item}`).join("\n");
    // menuText += "\n║\n";
  
    // menuText += "╠══〘 *KEPERAWATAN* 〙══\n";
    // menuText += menus.perawat.map((item) => `╠ ${item}`).join("\n");
    menuText += "\n╚═〘 𝐀𝐦𝐚𝐦𝐢𝐲𝐚-𝐒𝐞𝐧𝐬𝐞𝐢 〙═";
  
    return menuText;
  }
  
  module.exports = { formatMenu };
  