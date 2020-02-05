let isNumber = function(n) {
  return (!isNaN(parseFloat(n)) && isFinite(n));
};

let money,
  start = function() {
    do {
      money = prompt("Ваш месячный доход?", 10000);   
    }
    while (!isNumber(money));
  };
start();

let expenses1,
  expenses2;
let appData ={
  income: {},
  addIncome: [],
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){
    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую",'Еда, жильё');
      appData.addExpenses = addExpenses.toLowerCase().split(", ");
      appData.deposit = confirm("Есть ли у вас депозит в банке?");
    
    let question;
  
    for(let i = 0; i < 2; i++){

        expenses1 = prompt("Введите обязательную статью расходов?",'Кварплата');
      
        expenses2 = prompt("Введите обязательную статью расходов?",'Бензин');
      do {
        question = prompt("Во сколько это обойдется?", 1000);  
      }
      while (!isNumber(question));
    }
    function showProps(obj, objName) {
      let result = appData.expenses;
      for (let i in obj) {
        if (obj.hasOwnProperty(i)) {
            result += objName + "." + i + " = " + obj[i] + "\n";
        }
      }
      return result;
    }
    showProps(appData.expenses, "appData.expenses");
  }

};

appData.asking();







//Сумма обязательных расходов,

appData.getExpensesMonth = function(){
  let sum = 0, question;
  
  for(let i = 0; i < 2; i++){

    if (i === 0){
      expenses1 = prompt("Введите обязательную статью расходов?");
    } else {
      expenses2 = prompt("Введите обязательную статью расходов?");
    }
    do {
      question = prompt("Во сколько это обойдется?", 1000);  
    }
    while (!isNumber(question));
    sum += +question;
  }
  return sum;
};
let expensesAmount = appData.getExpensesMonth();
console.log('Расходы за месяц: '+ expensesAmount);




//накопления
appData.getAccumulatedMonth = function(){
  return money - expensesAmount;
};
let accumulatedMonth = appData.getAccumulatedMonth();


//количество месяцев за которые будет достингута цель

appData.getTargetMonth = function(){
  let targetMonth = Math.ceil(appData.mission / accumulatedMonth);
  if (targetMonth < 0) {
    console.log("Цель не будет достигнута");
  } else {
    console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
  }
  return targetMonth;
};
appData.getTargetMonth();

//бюджет на день
let budgetDay = Math.floor(accumulatedMonth / 30);
console.log('Бюджет на день: ' + budgetDay);



appData.getStatusIncome = function(){
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
console.log(appData.getStatusIncome());

  