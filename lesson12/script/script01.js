'use strict';

let start = document.getElementById('start'),//Кнопка "Рассчитать"
  cancel = document.querySelector('#cancel'),
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
      budgetMonthValue.value = this.budgetMonth;
      budgetDayValue.value = Math.floor(this.budgetDay);
      expensesMonthValue.value = this.expensesMonth;
      additionalExpensesValue.value = this.addExpenses.join(', ');
      additionalIncomeValue.value = this.addIncome.join(', ');
      targetMonthValue.value = Math.ceil(this.getTargetMonth());
      incomePeriodValue.value = this.calcPeriod();
      periodSelect.addEventListener('input', function(){
        incomePeriodValue.value = appData.calcPeriod();
      });
     
    },
    start : function() {
      if(salaryAmount.value === ''){
        return;
      }
      this.budget = +salaryAmount.value;
      this.getExpenses();
      this.getIncome();
      this.getExpensesMonth();
      this.getAddExpenses();
      this.getAddIncome();
      this.getBudget();
      this.periodChange();
      this.showResult();
    },
    reset: function(){
      //Вот что мне сюда написать, сам потом будешь орать что я ничего не делаю
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
          this.expenses[itemExpenses] = cashExpenses;
        }
      });
    },
    getAddExpenses: function(){
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
          this.addExpenses.push(item);
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
          this.income[itemIncome] = cashIncome;
        }
      });
      for(let key in this.income){
        this.incomeMonth += +this.income[key];
      }
      
    },
    getAddIncome: function(){
      additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
          this.addIncome.push(itemValue);
        }
      });
      
    },
    getExpensesMonth: function(){
      for(let key in this.expenses){
       this.expensesMonth += +this.expenses[key];
      }
      
    },
    getBudget: function(){
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
      
    },
    getTargetMonth: function(){
      return targetAmount.value / this.budgetMonth;
    },
    getStatusIncome: function(){
      
  
      if(this.budgetDay > 800){
        return("У вас высокий уровень дохода :)");
  
      } else if(this.budgetDay > 300){
        return("У вас средний уровень дохода");
      } else if(this.budgetDay > 0){
        return("К сожалению у вас уровень дохода ниже среднего :(");
      } else {
        return("Что-то пошло не так");
      } 
    },
    getInfoDeposit: function(){
      if(this.deposit){
        do {
        this.percentDeposit = prompt('Какой годовой процень?', '10');
        this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
        while(!isNumber(this.percentDeposit || this.moneyDeposit));
      }
      
    },
    calcPeriod: function(){
      return this.budgetMonth * periodSelect.value;
    },
    periodChange: function(){
      periodAmount.innerHTML = periodSelect.value;
      
    }
  };
  start.addEventListener('click', appData.start.bind(appData));
  start.addEventListener('click', function(){
    start.style.display = 'none';
    budgetDayValue.disabled = true;
    budgetMonthValue.disabled = true;
    expensesMonthValue.disabled = true;
    additionalExpensesValue.disabled = true;
    additionalIncomeValue.disabled = true;
    incomePeriodValue.disabled = true;
    targetMonthValue.disabled = true;
    cancel.style.display ='inline';
  });
  cancel.addEventListener('click', appData.reset);
  expensesPlus.addEventListener('click', appData.addExpensesBlock);
  incomePlus.addEventListener('click', appData.addIncomeBlock);
 
  periodSelect.addEventListener('input', appData.periodChange);
  let startBind = appData.start.bind(appData);
  startBind();
   
  /* for (let key in appData) {
    if (typeof appData[key] === 'function') {
      appData[key] = appData[key].bind(appData);
    }
  } */
  //appData.start();  
  /* if (appData.getTargetMonth() > 0) {
    console.log("Цель будет достигнута за " + Math.ceil(appData.getTargetMonth()) + 'месяца');
  } else {
    console.log('Цель не будет достигнута');
  } */
  
