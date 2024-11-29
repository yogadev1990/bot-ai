const axios = require("axios");
const cheerio = require("cheerio");

class fillstat{
    async fillStat(message, type = 'Weapon') {
        const statRegex = /([A-Z]+%?)\s+(-?\d+)/ig;
        const potRegex = new RegExp(`${type === 'Weapon' ? 'Weapon' : 'Armor'} pot: (\\d+)`, 'i');
        const statTranslate = {
            "A%": "ATK+%25", "A": "ATK", "M%": "MATK+%25", "M": "MATK",
            "S%": "STR+%25", "S": "STR", "D%": "DEX+%25", "D": "DEX",
            "I%": "INT+%25", "I": "INT", "V%": "VIT+%25", "V": "VIT",
            "AG%": "AGI+%25", "AG": "AGI", "CD%": "Critical+Damage+%25", "CD": "Critical+Damage",
            "CR%": "Critical+Rate+%25", "CR": "Critical+Rate", "DEF": "DEF", "MDEF": "MDEF",
            "DEF%": "DEF+%25", "MDEF%": "MDEF+%25", "ACC": "Accuracy", "DODGE": "Dodge",
            "ACC%": "Accuracy+%25", "DODGE%": "Dodge+%25", "MRES%": "Kekebalan+Sihir+%25", 
            "PRES%": "Kekebalan+Fisik+%25",
            // Tambahkan terjemahan lain sesuai kebutuhan
        };
    
        const extractedStats = [];
        const negativeStats = [];
        let potValue = null;
    
        // Ekstraksi pot
        const potMatch = message.match(potRegex);
        if (potMatch) potValue = parseInt(potMatch[1]);
    
        // Ekstraksi stat
        let match;
        while ((match = statRegex.exec(message)) !== null) {
            const shortName = match[1];
            const value = parseInt(match[2]);
            const statName = statTranslate[shortName] || shortName;
    
            if (value < 0) {
                negativeStats.push({ stat: statName, value: "MAX" });
            } else {
                extractedStats.push({ stat: statName, value: value });
            }
        }
    
        // Pastikan panjang array sesuai kebutuhan
        while (extractedStats.length < 7) extractedStats.push({ stat: "", value: "MAX" });
        while (negativeStats.length < 7) negativeStats.push({ stat: "", value: "MAX" });
    
        // Bangun data untuk POST
        const properType = type === 'Weapon' ? 'BukiProper' : 'BouguProper';
        const data = buildData(extractedStats, negativeStats, potValue, type);
    
        const config = {
            method: 'post',
            maxBodyLength: Infinity,
            url: `https://tanaka0.work/id/${properType}`,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Cookie': 'JSESSIONID=08D6228281542B6C3B8431F4F8361804' // Ganti dengan ID sebenarnya
            },
            data: data
        };
    
        try {
            const response = await axios.request(config);
            return processResponse(response.data, type);
        } catch (error) {
            console.error('Error:', error);
            return null;
        }
    }
    
    async buildData(positiveStats, negativeStats, potValue, type) {
        const paramLevel = 290; // Ubah jika ada logika berbeda
        let data = `properBui=${type}&paramLevel=${paramLevel}`;
    
        positiveStats.forEach((stat, index) => {
            data += `&plusProperList%5B${index}%5D.properName=${stat.stat}&plusProperList%5B${index}%5D.properLvHyoji=${stat.value}`;
        });
    
        negativeStats.forEach((stat, index) => {
            data += `&minusProperList%5B${index}%5D.properName=${stat.stat}&minusProperList%5B${index}%5D.properLvHyoji=MAX`;
        });
    
        data += `&shokiSenzai=${potValue}&kisoSenzai=15&jukurendo=0&rikaiKinzoku=10&rikaiNunoti=10&rikaiKemono=10&rikaiMokuzai=10&rikaiYakuhin=10&rikaiMaso=10&sendData=Submit`;
    
        return data;
    }
    
    async processResponse(responseHtml, type) {
        const $ = cheerio.load(responseHtml);
    
        const stat = $('#main > div:nth-of-type(2)').clone();
        stat.find('h3, a, font, b').remove();
        const formattedStat = stat.text().trim()
            .replace(/(\w+\s*%?)\s*(Lv\.(-?\d+))/g, (match, p1, p2, p3) => {
                const sign = parseInt(p3) >= 0 ? '+' : '';
                return `${p1} ${sign}${p3}`;
            })
            .replace(/\s+/g, ' ')
            .replace(/\s*,\s*/g, ', ');
    
        const steps = $('#main div:nth-of-type(4)').text().trim()
            .replace(/Steps\b/, '')
            .trim()
            .replace(/\s+/g, ' ')
            .replace(/(\d+\.\s+)/g, '\n$1');
    
        return `*Chizuru-chan🌸*
Jenis: ${type}
Level Karakter: 290
    
Stat akhir: 
${formattedStat}
    
${steps}`;}    
}
module.exports = fillstat;