'use strict';

let button = document.getElementById('start'),
  plusButton1 = document.getElementsByTagName('h1')[0],
  plusButton2 = document.getElementsByTagName('h1')[0],
  checkbox = document.querySelector('#deposit-check'),
  possibleIncome1 = document.querySelectorAll('.additional_income-item')[0],
  possibleIncome2 = document.querySelectorAll('.additional_income-item')[1],
  budgetDay = document.getElementsByClassName('result-total budget_day-value'),
  expensesMonth = document.getElementsByClassName('result-total expenses_month-value'),
  additionalIncome = document.getElementsByClassName('result-total additional_income-value'),
  additionalExpenses = document.getElementsByClassName('result-total additional_expenses-value'),
  incomePeriod = document.getElementsByClassName('result-total income_period-value'),
  targetMonth = document.getElementsByClassName('result-total target_month-value'),
  salaryAmount = document.querySelector('salary-amount'),
  incomeTitle = document.querySelector('income-title'),
  incomeAmount = document.querySelector('income-amount'),
  expensesTitle = document.querySelector('expenses-title'),
  additionalExpenses = document.querySelector('additional_expenses-item');


console.log(button);
console.log(plusButton1);
console.log(plusButton2);
console.log(checkbox);
console.log(possibleIncome1);
console.log(possibleIncome2);
