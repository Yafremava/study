'use strict';

let money = Number(prompt("Ваш месячный доход?", 1000)),
  income = 'фриланс',
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 'кафе, косметос, шмотки'),
  deposit = Boolean(confirm("Есть ли у вас депозит в банке?")),
  mission = 800,
  period = 4,

  expenses1 = prompt("Введите обязательную статью расходов?",'общага'),
  amount1 =Number(prompt("Во сколько это обойдется?")),
  expenses2 = prompt("Введите обязательную статью расходов?", 'продукты'),
  amount2 =Number(prompt("Во сколько это обойдется?")),
  budgetMonth = money - amount1 - amount2;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log('Длина строки addExpenses: '+ addExpenses.length());

console.log('Период равен ' + period + ' месяцев');

console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

console.log(addExpenses.toLowerCase().split());

console.log('Бюджет на месяц: ' + budgetMonth);
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');

let budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ' + Math.floor(budgetDay));


if(budgetDay >= 1200){
  console.log("У вас высокий уровень дохода :) ");
} else if(budgetDay >= 600 && budgetDay < 1200){
  console.log("У вас средний уровень дохода");
} else if(budgetDay < 600 && budgetDay > 0){
  console.log("К сожалению у вас уровень дохода ниже среднего :(");
} else if(budgetDay < 0){
  console.log("Что-то пошло не так");
} else {
  console.log("Все ваши доходы идут на обязательные рассходы :| ");
};