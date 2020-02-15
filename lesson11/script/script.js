'use strict';

let start = document.getElementById('start'),//Кнопка "Рассчитать"
  PlusIncome = document.getElementsByTagName('button')[0],//Кнопки “+” 
  PlusExpenses= document.getElementsByTagName('button')[1],
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),//поля возможных доходов
  depositCheck = document.querySelector('#deposit-check'),
  budgetDayValue = document.getElementsByClassName('budget_day-value'),
  budgetMonthValue = document.getElementsByClassName('budget_month-value'),
  expensesMonthValue = document.getElementsByClassName('expenses_month-value'),
  accumulatedMonthValue = document.getElementsByClassName('accumulated_month-value'),
  additionalIncomeValue = document.getElementsByClassName('additional_income-value'),
  additionalExpensesValue = document.getElementsByClassName('additional_expenses-value'),
  incomePeriodValue = document.getElementsByClassName('income_period-value'),
  targetMonthValue = document.getElementsByClassName('target_month-value'),

  salaryAmount = document.querySelector('.salary-amount'),// поля по левой стороне, кроме возможных доходов
  incomeTitle = document.querySelector('.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  expensesTitle = document.querySelector('.expenses-title'),
  expensesItems = document.querySelectorAll('.expenses-items'),
  incomeItem = document.querySelectorAll('.income-items'),
  additionalExpenses = document.querySelector('.additional_expenses'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item');
  let isNumber = function(n) {
    return (!isNaN(parseFloat(n)) && isFinite(n));
  };
  
  

   
  let appData ={
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
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

      appData.getExpenses();
      appData.getIncome();
      appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget();
      appData.showResult();
      
  },
    showResult: function(){
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = appData.budgetDay;
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcPeriod();
    },
    addExpensesBlock: function(){
      let cloneExpensesItems = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, PlusExpenses);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
        PlusExpenses.style.display = 'none';
      }
    },
    addIncomeBlock: function(){
      let cloneIncomeItems = incomeItem[0].cloneNode(true);
      incomeItem[0].parentNode.insertBefore(cloneIncomeItems, PlusIncome);
      incomeItem = document.querySelectorAll('.income-items');
      if(incomeItem.length === 3){
        PlusIncome.style.display = 'none';
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
    getIncome: function(){
      /* if(confirm('Есть ли у вас дополнительный имточник заработка?')){
        let itemIncome= prompt('Какой у вас есть дополнительный заработок?');
        let cashIncome = prompt('Сколько в месяц вы на этом зарабатываете?');
        appData.income[itemIncome] = cashIncome;
      }
      for(let key in appData.income){
        appData.incomeMonth += +appData.income[key];
      } */
      incomeItem.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
          appData.income[itemIncome] = cashIncome;
        }
      });
    },
    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
          appData.addExpenses.push(item);
        }
      });
    },
    getAddIncome: function(){
      additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
          appData.addIncome.push(itemValue);
        }
      });
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
      return targetAmount.value / appData.budgetMonth;
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
    calcPeriod: function(){
      return appData.budgetMonth * periodSelect.value;
    }
  };
  
  start.addEventListener('click', appData.start);

  PlusExpenses.addEventListener('click', appData.addExpensesBlock);
  PlusIncome.addEventListener('click', appData.addIncomeBlock);
  
  if (appData.getTargetMonth() > 0) {
    console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + 'месяца');
  } else {
    console.log('Цель не будет достигнута');
  }
  
