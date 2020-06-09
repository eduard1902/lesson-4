'use strict';

let money = +prompt('Ваш месячный доход?');  
let income = 20; 
let addExpenses = prompt('Перечислите возможные расходы за рассчитываемый период через запятую');
let deposit = confirm('Есть ли у вас депозит в банке?'); 
let mission = 100000; //любое число (Какую сумму хотите накопить)
let period =  0;

let showTypeOf = function(data) {
    console.log(data, typeof(data));
};

showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


let expenses = prompt('Введите обязательную статью расходов');
let amount1 = +prompt('Во сколько это обойдется?');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount2 = +prompt('Во сколько это обойдется?');


// вызвов суммы обяз. расходов
let getExpensesMonth = function (a, b) {
    const sum = a + b;
    return sum;
};
let budgetMonth = getExpensesMonth(amount1, amount2);
console.log('Расходы за месяц ' + budgetMonth + ' рублей');

console.log(addExpenses.toLowerCase().split(' '));

//остаток
function getAccumulatedMonth(c, d) {
    const dif = c - d;
    return dif;
};
getAccumulatedMonth(money, budgetMonth);
// присвоение имени переменной
let accumulatedMonth = getAccumulatedMonth(money, budgetMonth);

// за какой перио будет достигнута цель
const getTargetMonth = function () {
    period = Math.ceil(mission / accumulatedMonth);
};
getTargetMonth();

let budgetDay = Math.floor(accumulatedMonth / 30);

// console.log('Период равен ' + period + ' месяцев');
// console.log('Цель заработать ' + mission + ' рублей');

console.log('Цель будет достигнута за: ' + period + ' месяцев');

console.log('Бюджет на день ' + budgetDay + ' рублей');

let getStatusIncome = function () {
    if (budgetDay > 1200) {
        console.log('У вас высокий уровень дохода');
    } else if (600 < budgetDay){ 
        console.log('У вас средний уровень дохода');
    } else if (0 < budgetDay) {
        console.log('У вас средний уровень дохода');
    } else if (0 > budgetDay) {
        console.log('Что то пошло не так');
    }
};

getStatusIncome();
