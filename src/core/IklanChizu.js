class Iklan {
    constructor(pesanArray = []) {
      this.pesanArray = pesanArray.length ? pesanArray : [
        `Pesan default 1`,
        `Pesan default 2`
      ];
      this.cachedIklan = null;
    }
  
    generateIklan() {
      const waktu = new Date();
      const waktuJakarta = new Date(waktu.toLocaleString('en-US', { timeZone: 'Asia/Jakarta' }));
      const hari = waktuJakarta.toLocaleDateString('id-ID', { weekday: 'long', timeZone: 'Asia/Jakarta' });
      const jam = waktuJakarta.getHours().toString().padStart(2, '0');
      const menit = waktuJakarta.getMinutes().toString().padStart(2, '0');
      const pesanAcak = this.pesanArray[Math.floor(Math.random() * this.pesanArray.length)];
  
      return `🎮 *Revanda Store* 🎮
  
  ${pesanAcak}
  
  ╔ ${hari}, ${jam}:${menit} WIB
  ╚〘 Revanda Store 〙`;
    }
  
    getIklan() {
      if (!this.cachedIklan) {
        this.cachedIklan = this.generateIklan();
      }
      return this.cachedIklan;
    }
  }
  module.exports = Iklan;