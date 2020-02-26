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
  


  const AppData = function(){
    this.budget = 0;
    this.budgetDay = 0;
    this.budgetMonth = 0;
    this.income = {};
    this.incomeMonth = 0;
    this.addIncome = [];
    this.expenses = {};
    this.expensesMonth = 0;
    this.addExpenses = [];
    this.deposit = false;
    this.percentDeposit = 0;
    this.moneyDeposit = 0;
  };
  


  AppData.prototype.showResult = function(){
    const _this = this;
    budgetMonthValue.value = this.budgetMonth;
    budgetDayValue.value = Math.floor(this.budgetDay);
    expensesMonthValue.value = this.expensesMonth;
    additionalExpensesValue.value = this.addExpenses.join(', ');
    additionalIncomeValue.value = this.addIncome.join(', ');
    targetMonthValue.value = Math.ceil(this.getTargetMonth());
    incomePeriodValue.value = this.calcPeriod();
    periodSelect.addEventListener('input', function(){
      incomePeriodValue.value = _this.calcPeriod();
    }); 
  };
  AppData.prototype.start = function() {
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
    let inputs = document.querySelectorAll('input[type=text]');
    inputs.forEach(function(item){
      item.disabled = true;
    });
    incomePlus.disabled = true;//кнопки '+'
    expensesPlus.disabled = true;
    depositCheck.disabled =true;
    start.style.display = 'none';
    cancel.style.display ='inline';
  };
  AppData.prototype.reset = function(){
      let inputs = document.querySelectorAll('input[type=text]');
      inputs.forEach(function(item){
       item.value = "";
      });
      periodAmount.textContent = "1";
      periodSelect.value = "1";
      this.budget = 0;
      this.budgetDay = 0;
      this.budgetMonth = 0;
      this.income = {};
      this.incomeMonth = 0;
      this.addIncome = [];
      this.expenses = {};
      this.expensesMonth = 0;
      this.addExpenses = [];
      inputs.forEach(function(item){
        item.disabled = false;
      }); 
      incomePlus.disabled = false;
      expensesPlus.disabled = false;
      depositCheck.disabled = false;
      start.style.display = 'inline';
      cancel.style.display ='none'; 
  }; 
  AppData.prototype.addExpensesBlock = function(){
      let cloneExpensesItems = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
      }
      
  };
  AppData.prototype.getExpenses = function(){
    const _this = this;
    expensesItems.forEach(function(item){
      let itemExpenses = item.querySelector('.expenses-title').value;
      let cashExpenses = item.querySelector('.expenses-amount').value;
      if(itemExpenses !== '' && cashExpenses !== ''){
        _this.expenses[itemExpenses] = cashExpenses;
      }
    });
  };
  AppData.prototype.getAddExpenses = function(){
    const _this = this;
    let addExpenses = additionalExpensesItem.value.split(',');
    addExpenses.forEach(function(item){
      item = item.trim();
      if(item !== ''){
        _this.addExpenses.push(item);
      }
    });
  };
  AppData.prototype.addIncomeBlock = function(){
      let cloneIncomeItems = incomeItem[0].cloneNode(true);
      incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
      incomeItem = document.querySelectorAll('.income-items');
      if(incomeItem.length === 3){
        incomePlus.style.display = 'none';
      }
  };
  AppData.prototype.getIncome = function(){
    const _this = this;
    incomeItem.forEach(function(item){
      let itemIncome = item.querySelector('.income-title').value;
      let cashIncome = item.querySelector('.income-amount').value;
      if(itemIncome !== '' && cashIncome !== ''){
        _this.income[itemIncome] = cashIncome;
      }
    });
    for(let key in this.income){
      this.incomeMonth += +this.income[key];
    }
      
  };
  AppData.prototype.getAddIncome = function(){
    const _this = this;
    additionalIncomeItem.forEach(function(item){
      let itemValue = item.value.trim();
      if(itemValue !== ''){
        _this.addIncome.push(itemValue);
      }
    });
  };
  AppData.prototype.getExpensesMonth = function(){
    for(let key in this.expenses){
      this.expensesMonth += +this.expenses[key];
    }
      
  };
  AppData.prototype.getBudget = function(){
    this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
    this.budgetDay = Math.floor(this.budgetMonth / 30);
      
  };
  AppData.prototype.getTargetMonth = function(){
    return targetAmount.value / this.budgetMonth;
  };
  AppData.prototype.getStatusIncome = function(){
      
  
    if(this.budgetDay > 800){
      return("У вас высокий уровень дохода :)");
  
    } else if(this.budgetDay > 300){
      return("У вас средний уровень дохода");
    } else if(this.budgetDay > 0){
      return("К сожалению у вас уровень дохода ниже среднего :(");
    } else {
      return("Что-то пошло не так");
    } 
  };
  AppData.prototype.getInfoDeposit = function(){
    if(this.deposit){
      do {
      this.percentDeposit = prompt('Какой годовой процень?', '10');
      this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
      }
      while(!isNumber(this.percentDeposit || this.moneyDeposit));
    }  
  };
  AppData.prototype.calcPeriod = function(){
    return this.budgetMonth * periodSelect.value;
  };
  AppData.prototype.periodChange = function(){
    periodAmount.innerHTML = periodSelect.value;
      
  };
  AppData.prototype.eventsListeners = function(){
    const _this = this;
    start.addEventListener('click', _this.start.bind(_this));

    cancel.addEventListener('click', _this.reset);
    expensesPlus.addEventListener('click', _this.addExpensesBlock);
    incomePlus.addEventListener('click', _this.addIncomeBlock);
 
    periodSelect.addEventListener('input', _this.periodChange);
  };
  
  const appData = new AppData();
  console.log(appData);
  AppData.prototype.eventsListeners();