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
  percentDeposit: 0,
  moneyDeposit: 0,
  mission: 50000,
  period: 3,
  budget: money,
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  asking: function(){
    if(confirm('Есть ли у вас дополнительный имточник заработка?')){
      let itemIncome;
      do {
        itemIncome = prompt('Какой у вас есть дополнительный заработок?', 'Таксую');
      }
      while(isNumber(itemIncome));

      let cashIncome;
      do {
        cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?', 10000);
      }
      while (!isNumber(cashIncome));
      appData.income[itemIncome] = cashIncome;
    }



    let addExpenses = prompt("Перечислите возможные расходы за рассчитываемый период через запятую",'Еда, жильё, магазины');
      appData.addExpenses = addExpenses.toLowerCase().split(", ");
      appData.deposit = confirm("Есть ли у вас депозит в банке?");
      console.log(addExpenses.split(/\s+/).map(word => word[0].toUpperCase() + word.substring(1)).join(' '));
    for(let i = 0; i < 2; i++){
      let itemExpenses;
      do {
        itemExpenses = prompt("Введите обязательную статью расходов?",'Кварплата');
      }
      while(isNumber(itemExpenses));
      
      let cashExpenses;
      do {
        cashExpenses = prompt("Во сколько это обойдется?", 1000);
        
      }
      while (!isNumber(cashExpenses));
      appData.expenses[itemExpenses] = cashExpenses;
    }
  },
  getExpensesMonth: function(){
    for(let key in appData.expenses){
     appData.expensesMonth += +appData.expenses[key];
    }
  },
  getBudget: function(){
    appData.budgetMonth = appData.budget - appData.expensesMonth;
    appData.budgetDay = Math.floor(appData.budgetMonth / 30);
  },
  getTargetMonth: function(){
    return appData.mission / appData.budgetMonth;
  },  
  getStatusIncome: function(){
    if(appData.budgetDay > 800){
      return("У вас высокий уровень дохода :)");

    } else if(appData.budgetDay > 300){
      return("У вас средний уровень дохода");
    } else if(appData.budgetDay > 0){
      return("К сожалению у вас уровень дохода ниже среднего :(");
    } else {
      return("Что-то пошло не так");
    } 
  },
  getInfoDeposit: function(){
    if(appData.deposit){
      do {
      appData.percentDeposit = prompt('Какой годовой процень?', '10');
      appData.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      }
      while(!isNumber(appData.percentDeposit || appData.moneyDeposit));
    }
  },
  calcSavedMoney: function(){
    return appData.budgetMonth * appData.period;
  }
};

appData.asking();
appData.getExpensesMonth();
appData.getBudget();

console.log('Расходы за месяц: ' + appData.expensesMonth);

if (appData.getTargetMonth() > 0) {
  console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + 'месяца');
} else {
  console.log('Цель не будет достигнута');
}


console.log(appData.getStatusIncome());

for(let key in appData){
  console.log("Наша программа включает в себя данные: " + key + ' : ' + appData[key]);
}
