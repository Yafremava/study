'use strict';

let books = document.querySelector('.books'),//замена порядка книг
  book = books.querySelectorAll('.book');
books.append(book[0]);
books.append(book[4]);
books.append(book[3]);
books.append(book[5]);
books.append(book[2]);

//замена фона
document.body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

book[4].querySelector('h2 a').textContent="Книга 3. this и Прототипы Объектов";//замена заголовка в книге 3

let adv = document.querySelector('.adv');//удаление рекламы
adv.remove("adv");

let li2 = book[0].querySelectorAll('li'),//замена глав
  li5 = book[5].querySelectorAll('li'),
  li6 = book[2].querySelectorAll('li'); 

li2[9].append(li2[2]);
li2[3].append(li2[6]);
li2[3].append(li2[8]);

li5[1].append(li5[9]);
li5[1].append(li5[3]);
li5[3].append(li5[4]);
li5[7].append(li5[5]);

let newElem = document.createElement('li');//вставка главы 8 в книгу 6
newElem.textContent ='Глава 8: За пределами ES6';
book[2].append(newElem);
newElem.after(li6[9]);