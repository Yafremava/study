let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n))
};

let money,
  income = 'фриланс',
  addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую"),
  deposit = confirm("Есть ли у вас депозит в банке?"),
  mission = 5000,
  period = 4;


let start = function() {
  money = prompt("Ваш месячный доход?");
  do {
    
    money = prompt("Ваш месячный доход?");   
  }
  while (!isNumber(money));
};
start();


let showTypeOf = function(data){
  console.log(typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);


//Сумма обязательных расходов,
let expenses = [];
let getExpensesMonth = function(){
  let sum = 0;

  for(let i = 0; i < 2; i++){

    expenses[i] = prompt("Введите обязательную статью расходов?");

    sum += +prompt("Во сколько это обойдется?");
    do {
    
      sum = prompt("Во сколько это обойдется?");   
    }
    while (!isNumber(sum));
    
  }
  console.log(expenses);
  return sum;
};
let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: '+ expensesAmount);


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

  