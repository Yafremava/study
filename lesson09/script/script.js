'use strict';

let start = document.getElementById('start'),//Кнопка "Рассчитать"

  btnPlusIncome1 = document.getElementsByTagName('button')[0],//Кнопки “+” 
  btnPlusIncome2= document.getElementsByTagName('button')[1],

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
  additionalExpensesItem = document.querySelector('.additional_expenses-item'),
  targetAmount = document.querySelector('.target-amount'),
  periodSelect = document.querySelector('.period-select');

