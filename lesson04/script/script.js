'use strict';
let money = +prompt("Ваш месячный доход?", 1000),
  income = 'фриланс',
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 'кафе, косметос, шмотки'),
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 800,
  period = 4,

  expenses1 = prompt("Введите обязательную статью расходов?",'общага'),
  costs1 = +prompt("Во сколько это обойдется?"),
  expenses2 = prompt("Введите обязательную статью расходов?", 'продукты'),
  costs2 = +prompt("Во сколько это обойдется?");

let showTypeOf = function(data){
  console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//Сумма обязательных расходов
let getExpensesMonth = function(){
  return costs1 + costs2;
};
console.log('Расходы за месяц ' + getExpensesMonth());

//массив
console.log(addExpenses.toLowerCase().split(", "));

//накопления
let getAccumulatedMonth = function(){
  return money - getExpensesMonth();
};
let accumulatedMonth = getAccumulatedMonth();


//количество месяцев за которые будет достингута цель
let getTargetMonth = function(){
  return mission / accumulatedMonth;
};
let targetMonth = Math.ceil(getTargetMonth());
console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');

//бюджет на день
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);

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

  