'use strict';
//Пошли функции
let money,
  income = 'фриланс',
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую", 'кафе, косметос, шмотки'),
  deposit = Boolean(confirm("Есть ли у вас депозит в банке?")),
  mission = 800,
  period = 4;

let start = function() {
  money = prompt("Ваш месячный доход?");

  while (isNaN(money) || money === '' || money === null) {
    money = prompt("Ваш месячный доход?")
  }
};

start();

let showTypeOf = function(item){
  console.log(typeof item);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//Сумма обязательных расходов
let expenses1, expenses2;
let getExpensesMonth = function(){
  let sum = 0;

  for(let i = 0; i < 2; i++){

    if (i === 0){
      expenses1 = prompt("Введите обязательную статью расходов?",'общага');
    } else if (i === 1){
      expenses2 = prompt("Введите обязательную статью расходов?", 'продукты'),
    };
    sum += +prompt("Во сколько это обойдется?");
  }
  console.log(sum);
  return sum;
};

let expensesAmount = getExpensesMonth();

console.log('Расходы за месяц: '+ expensesAmount);

//массив
console.log(addExpenses.toLowerCase().split(", "));

//накопления
const getAccumulatedMonth = function(c, d){
  return(c - d);
};
let accumulatedMonth = getAccumulatedMonth(money, expensesAmount);
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

  