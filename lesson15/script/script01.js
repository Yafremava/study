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
  


  class AppData {
    constructor(){
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
    }
    showResult(){
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
    }
    start() {
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
    }
    reset(){
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
    } 
    addExpensesBlock(){
      let cloneExpensesItems = expensesItems[0].cloneNode(true);
      expensesItems[0].parentNode.insertBefore(cloneExpensesItems, expensesPlus);
      expensesItems = document.querySelectorAll('.expenses-items');
      if(expensesItems.length === 3){
        expensesPlus.style.display = 'none';
      } 
    }
    getExpenses(){
      const _this = this;
      expensesItems.forEach(function(item){
        let itemExpenses = item.querySelector('.expenses-title').value;
        let cashExpenses = item.querySelector('.expenses-amount').value;
        if(itemExpenses !== '' && cashExpenses !== ''){
          _this.expenses[itemExpenses] = cashExpenses;
        }
      });
    }
    getAddExpenses(){
      const _this = this;
      let addExpenses = additionalExpensesItem.value.split(',');
      addExpenses.forEach(function(item){
        item = item.trim();
        if(item !== ''){
          _this.addExpenses.push(item);
        }
      });
    }
    addIncomeBlock(){
      let cloneIncomeItems = incomeItem[0].cloneNode(true);
      incomeItem[0].parentNode.insertBefore(cloneIncomeItems, incomePlus);
      incomeItem = document.querySelectorAll('.income-items');
      if(incomeItem.length === 3){
        incomePlus.style.display = 'none';
      }
    }
    getIncome(){
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
    }
    getAddIncome(){
      const _this = this;
      additionalIncomeItem.forEach(function(item){
        let itemValue = item.value.trim();
        if(itemValue !== ''){
          _this.addIncome.push(itemValue);
        }
      });
    }
    getExpensesMonth(){
      for(let key in this.expenses){
        this.expensesMonth += +this.expenses[key];
      }
      
    }
    getBudget(){
      this.budgetMonth = this.budget + this.incomeMonth - this.expensesMonth;
      this.budgetDay = Math.floor(this.budgetMonth / 30);
      
    }
    getTargetMonth(){
      return targetAmount.value / this.budgetMonth;
    }
    getStatusIncome(){  
      if(this.budgetDay > 800){
        return("У вас высокий уровень дохода :)");
  
      } else if(this.budgetDay > 300){
       return("У вас средний уровень дохода");
      } else if(this.budgetDay > 0){
        return("К сожалению у вас уровень дохода ниже среднего :(");
      } else {
        return("Что-то пошло не так");
      } 
    }
    getInfoDeposit(){
      if(this.deposit){
        do { 
          this.percentDeposit = prompt('Какой годовой процень?', '10');
          this.moneyDeposit = prompt('Какая сумма заложена?', 10000);
        }
        while(!isNumber(this.percentDeposit || this.moneyDeposit));
      }  
    }
    calcPeriod(){
      return this.budgetMonth * periodSelect.value;
    }
    periodChange(){
      periodAmount.innerHTML = periodSelect.value;
    }
    eventsListeners(){
      const _this = this;
      start.addEventListener('click', _this.start.bind(_this));

      cancel.addEventListener('click', _this.reset.bind(_this));
      expensesPlus.addEventListener('click', _this.addExpensesBlock.bind(_this));
      incomePlus.addEventListener('click', _this.addIncomeBlock.bind(_this));
 
      periodSelect.addEventListener('input', _this.periodChange);
    }
  }
  
  const appData = new AppData();
  console.log(appData);
  appData.eventsListeners();