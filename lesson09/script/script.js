'use strict';

let button = document.getElementById('start'),//Кнопку "Рассчитать"

  plusButton1 = document.getElementsByTagName('h1')[0],
  plusButton2 = document.getElementsByTagName('h1')[0],

  checkbox = document.querySelector('#deposit-check'),

  possibleIncome1 = document.querySelectorAll('.additional_income-item')[0],//поля возможных доходов
  possibleIncome2 = document.querySelectorAll('.additional_income-item')[1],

  budgetDay = document.getElementsByClassName('result-total budget_day-value'),//элементы по правой стороне
  expensesMonth = document.getElementsByClassName('result-total expenses_month-value'),
  additionalIncome = document.getElementsByClassName('result-total additional_income-value'),
  additionalExpenses = document.getElementsByClassName('result-total additional_expenses-value'),
  incomePeriod = document.getElementsByClassName('result-total income_period-value'),
  targetMonth = document.getElementsByClassName('result-total target_month-value'),

  salaryAmount = document.querySelector('.salary-amount'),// поля по левой стороне, кроме возможных доходов
  incomeTitle = document.querySelector('.income-title'),
  incomeAmount = document.querySelector('.income-amount'),
  esTexpensitle = document.querySelector('.expenses-title'),
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select');

console.log(budgetDay);