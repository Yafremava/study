'use strict';
let money = +prompt("Ваш месячный доход?", 1000),
  income = 'фриланс',
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 'кафе, косметос, шмотки'),
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 800,
  period = 4,

  expenses1 = prompt("Введите обязательную статью расходов?",'общага'),
  amount1 = +prompt("Во сколько это обойдется?"),
  expenses2 = prompt("Введите обязательную статью расходов?", 'продукты'),
  amount2 = +prompt("Во сколько это обойдется?");

let showTypeOf = function(data){
  console.log(data, typeof(data));
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//Сумма обязательных расходов
const getExpensesMonth = function(a, b){
  return a + b;
};
let expensesMonth = getExpensesMonth(amount1, amount2);
console.log(expensesMonth);

//массив
console.log(addExpenses.toLowerCase().split(", "));

//накопления
const getAccumulatedMonth = function(c, d){
  return(c - d);
};
let accumulatedMonth = getAccumulatedMonth(money, expensesMonth);
console.log(accumulatedMonth);

//количество месяцев за которые будет достингута цель
const getTargetMonth = function(e, f){
  return(Math.ceil(e / f));
};
let targetMonth = getTargetMonth(mission, accumulatedMonth);
console.log(targetMonth);

//бюджет на день
let budgetDay = accumulatedMonth / 30;
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

  