'use strict';

let start = document.getElementById('start'),//Кнопка "Рассчитать"

  PlusIncome = document.getElementsByTagName('button')[0],//Кнопки “+” 
  PlusExpenses= document.getElementsByTagName('button')[1],

  depositCheck = document.querySelector('#deposit-check'),

  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),//поля возможных доходов

  budgetDayVal = document.getElementsByClassName('budget_day-value'),//элементы по правой стороне
  expensesMonthVal = document.getElementsByClassName('expenses_month-value'),
  additionalIncomeVal = document.getElementsByClassName('additional_income-value'),
  additionalExpensesVal = document.getElementsByClassName('additional_expenses-value'),
  incomePeriodVal = document.getElementsByClassName('income_period-value'),
  targetMonthVal = document.getElementsByClassName('target_month-value'),

  salaryAmount = document.querySelector('.salary-amount'),// поля по левой стороне, кроме возможных доходов
  incomeTitle = document.querySelector('.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  expensesTitle = document.querySelector('.expenses-title'),
  expensesItems = document.querySelectorAll('.expenses-items'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select');

  let isNumber = function(n) {
    return (!isNaN(parseFloat(n)) && isFinite(n));
  };
  
  

   
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
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    expensesMonth: 0,
    start: function() {
      if(salaryAmount.value === ''){
        alert('Ошибка, поле "Месячный доход должно быть заполнено"');
        return;
      }
      appData.budget = salaryAmount.value;
      console.log("salaryAmount.value", salaryAmount.value);

      appData.getExpenses();
      appData.getExpensesMonth();
      appData.getBudget();
  },
  
    addExpensesBlock: function(){
      let cloneExpensesItems = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, PlusExpenses);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
        PlusExpenses.style.display = 'none';
      }
    },
    getExpenses: function(){
      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
          appData.expenses[itemExpenses] = cashExpenses;
        }
      });
    },
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
  
  start.addEventListener('click', appData.start);

  PlusExpenses.addEventListener('click', appData.addExpensesBlock);
  
  
  if (appData.getTargetMonth() > 0) {
    console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + 'месяца');
  } else {
    console.log('Цель не будет достигнута');
  }
  
