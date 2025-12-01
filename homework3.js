let result = paw(3, 3);
function paw(x, y) {
    console.log("Число яке підносимо до ступеня: " + x);
    console.log("Число до якого підносимо: " + y);
    let i = 0;
    let result = 1;
    do {
        result = result * x;
        i++;
    }
    while (i < y);
    return result;
}
console.log("Рузультат піднесення до ступеня: " + result);