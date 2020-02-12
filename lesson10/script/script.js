'use strict';

let books = document.querySelector('.books'),//замена порядка книг
  book = books.querySelectorAll('.book');

books.insertBefore(book[1], book[0]);
books.removeChild(book[2]);
books.appendChild(book[2]);
books.insertBefore(book[4], book[3]);

//замена фона
document.body.setAttribute('style', 'background-image: url(./image/you-dont-know-js.jpg)');

book[4].querySelector('h2 a').textContent="Книга 3. this и Прототипы Объектов";//замена заголовка в книге 3

let adv = document.querySelector('.adv');//удаление рекламы
adv.remove("adv");

let li2 = book[0].querySelectorAll('li'),//замена глав
  li5 = book[5].querySelectorAll('li'),
  li6 = book[2].querySelectorAll('li'); 

console.log(book);
li2[9].append(li2[2]);
li2[3].append(li2[6]);
li2[3].append(li2[8]);

li5[1].append(li5[9]);
li5[1].append(li5[3]);
li5[3].append(li5[4]);
li5[7].append(li5[5]);

//let newElem = document.createElement('li');//вставка главы 8 в книгу 6
//newElem.textContent ='Глава 8: За пределами ES6';

/* let li8 =document.getElementsByTagName('li')[8],//замена глав в книге 2 и 5
  li9 =document.getElementsByTagName('li')[9],
  li10 =document.getElementsByTagName('li')[10],
  li11 =document.getElementsByTagName('li')[11],
  li12 =document.getElementsByTagName('li')[12],
  li13 =document.getElementsByTagName('li')[13],
  li14 =document.getElementsByTagName('li')[14],
  li15 =document.getElementsByTagName('li')[15],
  li16 =document.getElementsByTagName('li')[16],
  ul1 = document.getElementsByTagName('ul')[1],

  li38 =document.getElementsByTagName('li')[38],//книга 5
  li39 =document.getElementsByTagName('li')[39],
  li40 =document.getElementsByTagName('li')[40],
  li41 =document.getElementsByTagName('li')[41],
  li42 =document.getElementsByTagName('li')[42],
  li43 =document.getElementsByTagName('li')[43],
  li44 =document.getElementsByTagName('li')[44],
  li45 =document.getElementsByTagName('li')[45],
  li46 =document.getElementsByTagName('li')[46],
  ul4 = document.getElementsByTagName('ul')[4],

  li56 =document.getElementsByTagName('li')[56],//для главы 8
  ul5 = document.getElementsByTagName('ul')[5];

ul1.setAttribute('class', 'elements');//книга 2
li8.setAttribute('class', 'section');
li9.setAttribute('class', 'section');
li10.setAttribute('class', 'section');
li11.setAttribute('class', 'section');
li12.setAttribute('class', 'section');
li13.setAttribute('class', 'section');
li14.setAttribute('class', 'section');
li15.setAttribute('class', 'section');
li16.setAttribute('class', 'section');

ul5.setAttribute('class', 'elements');//для главы 8
li56.setAttribute('class', 'section');

ul4.setAttribute('class', 'elements');//книга 5
li38.setAttribute('class', 'section');
li39.setAttribute('class', 'section');
li40.setAttribute('class', 'section');
li41.setAttribute('class', 'section');
li42.setAttribute('class', 'section');
li43.setAttribute('class', 'section');
li44.setAttribute('class', 'section');
li45.setAttribute('class', 'section');
li46.setAttribute('class', 'section');

let  elements = document.querySelectorAll('.elements'),
  section = document.querySelectorAll('.section');

elements[0].removeChild(section[4]);//книга 2
elements[0].appendChild(section[4]);
elements[0].removeChild(section[6]);
elements[0].appendChild(section[6]);
elements[0].removeChild(section[2]);
elements[0].appendChild(section[2]);
elements[0].removeChild(section[3]);
elements[0].appendChild(section[3]);
elements[0].removeChild(section[5]);
elements[0].appendChild(section[5]);
elements[0].removeChild(section[7]);
elements[0].appendChild(section[7]);
elements[0].removeChild(section[0]);
elements[0].appendChild(section[0]);
elements[0].removeChild(section[8]);
elements[0].appendChild(section[8]);

elements[1].removeChild(section[16]);//книга 5
elements[1].appendChild(section[16]); 
elements[1].removeChild(section[10]);
elements[1].appendChild(section[10]); 
elements[1].removeChild(section[11]);
elements[1].appendChild(section[11]); 
elements[1].removeChild(section[9]);
elements[1].appendChild(section[9]); 
elements[1].removeChild(section[13]);
elements[1].appendChild(section[13]); 
elements[1].removeChild(section[14]);
elements[1].appendChild(section[14]); 
elements[1].removeChild(section[12]);
elements[1].appendChild(section[12]); 
elements[1].removeChild(section[15]);
elements[1].appendChild(section[15]); 
elements[1].removeChild(section[17]);
elements[1].appendChild(section[17]); 



let newElem = document.createElement('li');//вставка главы 8 в книгу 6
newElem.textContent ='Глава 8: За пределами ES6';
elements[2].appendChild(newElem);
elements[2].removeChild(section[18]);
elements[2].appendChild(section[18]); 


 let li = document.querySelectorAll('li');
 console.log(li); */