class HargaSlot {
    constructor() {
      this.prices = {
        knuck: {
          title: "Senjata Knuckle",
          prime: "150m",
          piercer: "15m",
          aliases: ["knuck", "knuckles", "tinju"],
        },
        ohs: {
          title: "Senjata OHS",
          prime: "300m",
          piercer: "35m",
          aliases: ["ohs", "one handed sword", "pedang 1 tangan"],
        },
        ths: {
          title: "Senjata THS",
          prime: "180m",
          piercer: "25m",
          aliases: ["ths", "two handed sword", "pedang 2 tangan"],
        },
      };
    }
  
    async findCategory(input) {
      const categoryKey = Object.keys(this.prices).find((key) =>
        this.prices[key].aliases.includes(input)
      );
      return categoryKey ? this.prices[categoryKey] : null;
    }
  }
  
  module.exports = HargaSlot;
  