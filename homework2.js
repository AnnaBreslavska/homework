var salary = 8500;
var foodExpenses = 2000;
var transportExpenses = 100;
var funExpenses = 150;
var savingsExpected = 2000;
var generalExpenses = salary - (foodExpenses + transportExpenses + funExpenses);
var savingActual = salary-generalExpenses;
var inEnoughMoney = savingActual >= savingsExpected;

console.log('💸 Моя зарплата: ' + salary + '₴');
console.log ('👛 Скільки я хочу відкладати? ' + savingsExpected + '₴');
console.log('💸 Мої витрати на місяць: ' + generalExpenses + '₴'); 
console.log('🪙  Скільки залишається після витрат: ' + savingActual + '₴'); 
console.log ('Чи вистачає грошей на заощадження? ', inEnoughMoney ? "Так ✅" : "Ні ❌");

var percentFood = (foodExpenses / salary) * 100;
var percentFoodRounded = Math.floor(percentFood);
var percentTransport = (transportExpenses / salary) *100;
var percentTransportRounded = Math.floor(percentTransport);
var percentFun = (funExpenses/salary)*100;
var percentFunRounded = Math.floor(percentFun);

console.log ('Скільки в місяць витрачаю на їжу: ' + percentFoodRounded + '%');
console.log ('Скільки в місяць витрачаю на транспорт: ' + percentTransportRounded + '%');
console.log ('Скільки в місяць витрачаю на розваги: ' + percentFunRounded + '%');


