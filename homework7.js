let str = "Wonderful, Joyful, Happiness, Time, Task, Apple";
let arr = str.split(",");
let check = /^[^aA]{6,}$/;

arr.forEach((word) => {
if (check.test(word)) {
console.log(word.trim());
} 
});