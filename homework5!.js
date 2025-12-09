var services = {
"стрижка": "60.55 грн",
"гоління": "80.666666666 грн",
"фарбування": "13",
"перевірка на Null": null,
"Миття голови": "100.5 test",
"манікюр": "600 грн",


  parsePrice(value) {
    if (value !== null){
      if (value.split (" ") [1] == "грн")
      value = Number.parseFloat (value.split (" ") [0]);
      }
      return value;
  },


  price () {
    let total=0;
    for (let key in this) {
            total += this.parsePrice(this[key]);
    }
    return total;
    }
  }

console.log("Загальна вартість: ", services.price(), " грн");