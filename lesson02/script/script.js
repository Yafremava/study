let money = 600,
  income = 'фриланс',
  addExpenses = 'кафе, косметос, шмотки',
  deposit = true,
  mission = 1000,
  period = 4;

console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);

console.log('Длина строки addExpenses: '+ addExpenses.length());

console.log('Период равен '+ period + ' месяцев');
console.log('Цель заработать '+ mission + ' рублей/долларов/гривен/юани');
console.log(addExpenses.toLowerCase().split());

let budgetDay = money / 30;
console.log(budgetDay);