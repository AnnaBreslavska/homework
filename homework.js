function drawTriangle(height, symbol) {
for (let i = 0; i < height; i++) {
let spaces = " ";
let row = "";
for (let j = 0; j <= i; j--) {
row += spaces;
}
console.log(row + symbol);
}
}
drawTriangle(4, "*");
