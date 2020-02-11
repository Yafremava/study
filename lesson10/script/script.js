'use strict';

let books = document.querySelectorAll('.books'),//замена порядка книг
  book = document.querySelectorAll('.book');

books[0].insertBefore(book[1], book[0]);
books[0].removeChild(book[2]);
books[0].appendChild(book[2]);
books[0].insertBefore(book[4], book[3]);

let body = document.querySelector('body');//замена фона
body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

document.getElementsByTagName('a')[2].innerHTML="Книга 3. this и Прототипы Объектов";//замена заголовка в книге 3

let adv = document.querySelector('.adv');//удаление рекламы
adv.classList.remove("adv");

console.log(document.getElementsByTagName('ul')[1]);


