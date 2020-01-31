'use strict';
//Пошли функции
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

let showTypeOf = function(data){
  console.log(data, typeof(data));
}
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

function getExpensesMonth(a, b){
  console.log(a + b);
}
getExpensesMonth(amount1, amount2);

const getAccumulatedMonth = function(c, d){
  return c - d;
};
let accumulatedMonth = getAccumulatedMonth(money, getExpensesMonth);
console.log(getAccumulatedMonth);

function getTargetMonth(e, f){
  console.log(e / f);
}
getTargetMonth(mission, budgetMonth)

console.log('Длина строки addExpenses: '+ addExpenses.length());

console.log('Период равен ' + period + ' месяцев');

console.log('Цель заработать ' + mission + ' рублей/долларов/гривен/юани');

console.log(addExpenses.toLowerCase().split());

console.log('Бюджет на месяц: ' + budgetMonth);
console.log('Цель будет достигнута за ' + Math.ceil(mission / budgetMonth) + ' месяцев');

let budgetDay = budgetMonth / 30;
console.log('Бюджет на день: ' + Math.floor(budgetDay));

let getStatusIncome = function(){
  if(budgetDay >= 1200){
    return("У вас высокий уровень дохода :)");
  } else if(budgetDay >= 600 && budgetDay < 1200){
    return("У вас средний уровень дохода");
  } else if(budgetDay < 600 && budgetDay > 0){
    return("К сожалению у вас уровень дохода ниже среднего :(");
  } else if(budgetDay < 0){
    return("Что-то пошло не так");
  } else {
    return("Все ваши доходы идут на обязательные рассходы :| ");
  }
};
console.log(getStatusIncome());

  