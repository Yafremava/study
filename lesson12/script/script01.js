'use strict';

let start = document.getElementById('start'),//Кнопка "Рассчитать"
  incomePlus = document.getElementsByTagName('button')[0],//Кнопки “+” 
  expensesPlus= document.getElementsByTagName('button')[1],
  additionalIncomeItem = document.querySelectorAll('.additional_income-item'),//поля возможных доходов
  depositCheck = document.querySelector('#deposit-check'),
  budgetDayValue = document.querySelector('.budget_day-value'),
  budgetMonthValue = document.querySelector('.budget_month-value'),
  expensesMonthValue = document.querySelector('.expenses_month-value'),
  accumulatedMonthValue = document.querySelector('.accumulated_month-value'),
  additionalIncomeValue = document.querySelector('.additional_income-value'),
  additionalExpensesValue = document.querySelector('.additional_expenses-value'),
  incomePeriodValue = document.querySelector('.income_period-value'),
  targetMonthValue = document.querySelector('.target_month-value'),

  salaryAmount = document.querySelector('.salary-amount'),// поля по левой стороне, кроме возможных доходов
  incomeTitle = document.querySelector('.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  expensesTitle = document.querySelector('.expenses-title'),
  expensesItems = document.querySelectorAll('.expenses-items'),
  incomeItem = document.querySelectorAll('.income-items'),
  additionalExpenses = document.querySelector('.additional_expenses'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  periodAmount = document.querySelector('.period-amount');
  
  let isNumber = function(n) {
    return (!isNaN(parseFloat(n)) && isFinite(n));
  };
  
  
  
  let appData ={
    budget: 0,
    budgetDay: 0,
    budgetMonth: 0,
    income: {},
    incomeMonth: 0,
    addIncome: [],
    expenses: {},
    expensesMonth: 0,
    addExpenses: [],
    deposit: false,
    percentDeposit: 0,
    moneyDeposit: 0,
    showResult: function(){
      budgetMonthValue.value = appData.budgetMonth;
      budgetDayValue.value = Math.floor(appData.budgetDay);
      expensesMonthValue.value = appData.expensesMonth;
      additionalExpensesValue.value = appData.addExpenses.join(', ');
      additionalIncomeValue.value = appData.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(appData.getTargetMonth());
      incomePeriodValue.value = appData.calcPeriod();
    },
    start : function() {
      if(salaryAmount.value === ''){
        return;
      }
      appData.budget = +salaryAmount.value;

      appData.getExpenses();
      appData.getIncome();
      appData.getExpensesMonth();
      appData.getAddExpenses();
      appData.getAddIncome();
      appData.getBudget();
      appData.periodChange();
      appData.showResult();
      console.log(this);
    },
    
    addExpensesBlock: function(){
      let cloneExpensesItems = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
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
    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
          appData.addExpenses.push(item);
        }
      });
    },
    addIncomeBlock: function(){
      let cloneIncomeItems = incomeItem[0].cloneNode(true);
      incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
      incomeItem = document.querySelectorAll('.income-items');
      if(incomeItem.length === 3){
        incomePlus.style.display = 'none';
      }
    }, 
    getIncome: function(){
      incomeItem.forEach(function(item){
        let itemIncome = item.querySelector('.income-title').value;
        let cashIncome = item.querySelector('.income-amount').value;
        if(itemIncome !== '' && cashIncome !== ''){
          appData.income[itemIncome] = cashIncome;
        }
      });
      for(let key in appData.income){
        appData.incomeMonth += +appData.income[key];
      }

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
      appData.budgetMonth = appData.budget + appData.incomeMonth - appData.expensesMonth;
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
    },
    periodChange: function(){
      periodAmount.innerHTML = periodSelect.value;
      //incomePeriodValue.innerHTML = periodSelect.value;
    }
  };
  start.addEventListener('click', appData.start);
  
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
  incomePlus.addEventListener('click', appData.addIncomeBlock);
 
  periodSelect.addEventListener('change', appData.periodChange);
  //periodSelect.addEventListener('input', appData.periodChange);
  
  
  /* if (appData.getTargetMonth() > 0) {
    console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + 'месяца');
  } else {
    console.log('Цель не будет достигнута');
  } */
  
