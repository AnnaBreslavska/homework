var services = {
"стрижка": "60.55 грн",
"гоління": "80.666666666 грн",
"фарбування": "13",
"перевірка на Null": null,
"Миття голови": "100.5 test",
"манікюр": "600 грн",

  price () {
    let total=0;
    for (let key in this) {
      if (typeof this[key] !== "function" && this[key] !== null) {
        if (this[key].split (" ") [1] == "грн")
            total += Number.parseFloat (this[key].split (" ") [0]);
    }
    }
    return total.toFixed(2);

},

    maxPrice(){
    let maxPriceService=0;
    for (let key in this) {
      if (typeof this[key] !== "function" && this[key] !== null) {
        if (this[key].split (" ") [1] == "грн" && this[key].split (" ") [0]>maxPriceService)
            maxPriceService = Number.parseFloat (this[key].split (" ") [0]);
    }
    }
    return maxPriceService.toFixed(2);
},


minPrice(){
    let minPriceService=services.maxPrice();
    for (let key in this) {
      if (typeof this[key] !== "function" && this[key] !== null) {
        if (this[key].split (" ") [1] == "грн" && this[key].split (" ") [0]<minPriceService)
            minPriceService = Number.parseFloat (this[key].split (" ") [0]);
    }
    }
    return minPriceService.toFixed(2);
}
}

services['Педікюр'] = "200 грн";


console.log("Загальна вартість: ", services.price(), " грн");
console.log("Максимальна вартість послуги: ", services.maxPrice(), " грн");
console.log("Miнімальна вартість послуги: ", services.minPrice(), " грн");