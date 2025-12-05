let count = Math.floor(Math.random() * 10) + 1;
checkProbabilityTheory(count);
function checkProbabilityTheory(count) {
    console.log("🎱  Цього разу чисел:" + count);
    let qtyEven = 0;
    let qtyOdd = 0;
    for (let i = 0; i < count; i++) {
        let rnd = Math.floor(Math.random() * 901) + 100;
        console.log("Рандомне число: " + rnd);

        if (rnd % 2 === 0) {
            console.log(rnd + " - парне");
            qtyEven++;
        }
        else {
            console.log(rnd + " - не парне");
            qtyOdd++;
        }
    }
    console.log("✌️  Серед них парних: " + qtyEven);
    console.log("☝️  Серед них не парних: " + qtyOdd);
    console.log("Відсоток парних: " + (qtyEven / count * 100).toFixed(1) + " %");
    console.log("Відсоток не парних: " + (qtyOdd / count * 100).toFixed(1) + " %");
};