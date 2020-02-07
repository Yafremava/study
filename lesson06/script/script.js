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
    let question1,
      expenses1,
      addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую",'Еда, жильё');
      appData.addExpenses = addExpenses.toLowerCase().split(", ");
      appData.deposit = confirm("Есть ли у вас депозит в банке?");
      
    
    for(let i = 0; i < 2; i++){

      expenses1 = prompt("Введите обязательную статью расходов?",'Кварплата');
      do {
        question1 = +prompt("Во сколько это обойдется?", 1000);
        
      }
      while (!isNumber(question1));
      appData.expenses[expenses1] = question1;
    }
    console.log(appData.expenses);
  }
};

appData.asking();



appData.getExpensesMonth = function(){
  let sum = 0;
  for(let key in appData.expenses){
    sum += +appData.expenses[key];
    
  
  }
  appData.expensesMonth = sum;

};



appData.getBudget = function(){
  appData.budgetMonth = appData.budget - appData.expensesMonth;
  appData.budgetDay = Math.floor(appData.budgetMonth / 30);
};


appData.getTargetMonth = function(){
  let targetMonth = Math.ceil(appData.mission / appData.budgetMonth);
  if (targetMonth < 0) {
    console.log("Цель не будет достигнута");
  } else {
    console.log('Цель будет достигнута за ' + targetMonth + ' месяцев');
  }
};


appData.getStatusIncome = function(){
  if(appData.budgetDay >= 1200){
    return("У вас высокий уровень дохода :)");
  } else if(appData.budgetDay >= 600 && appData.budgetDay < 1200){
    return("У вас средний уровень дохода");
  } else if(appData.budgetDay < 600 && appData.budgetDay > 0){
    return("К сожалению у вас уровень дохода ниже среднего :(");
  } else if(appData.budgetDay < 0){
    return("Что-то пошло не так");
  } else {
    return("Все ваши доходы идут на обязательные рассходы :| ");
  }
};

appData.getExpensesMonth();
appData.getBudget();
appData.getTargetMonth();
console.log(appData.getStatusIncome());
console.log('Расходы: ' + appData.expensesMonth);

for(let key in appData){
  console.log("Наша программа включает в себя данные: " + key + ' : ' + appData[key]);
}