// //JS. Урок 8.3. Перемещение по элементам (узлам) HTML

// console.log(document.body);

// let body = document.body;

// console.log(body.childNodes);
// console.log(body.childNodes[1]);  //получить узел под индексом 1

// console.dir(body.childNodes[1]);  // объект, где храняться сво-ва и методы узла


// console.log(document.body.h1); //undefined
// console.log(document.body.p); //undefined

// document.body.style.backgroundColor = '#ededed'; //установить стиль фона = серый

// body.style.padding = '5%'; //установить отступы 

// for (let i = 0; i < body.childNodes.length; i++) {  //вывидется каждый узел, кот встречается в нашем документе
//     console.log(body.childNodes[i]);
// }

// console.log(body.childNodes[3]); //обратились к узлу под индексом 3

// console.log(body.childNodes[3].childNodes[1]); //<i>amet consectetur</i>

// //console.log(body.childNodes[3].childNodes[1].childNodes[0]);  // "amet consectetur"

// /*childNodes использ. не часто. ЗАПОМНИ: выводит список обсолютно всех узлов,
//  в т.ч. простых текстовых узлов text (пустая сторка)*/


// let list = body.childNodes[5];
// console.log(list);

// /*Относительно переменной list мы можем получать предыдущие элементы или следующие элементы,
// предыдущий соседний элемент (Используем сво-во previousSibling)
// или следующий соседний элемент (Используем сво-во nextSibling)*/

// console.log(list.previousSibling);  //text вернет предыдущий элемент: текстовый узел (пустая строка)
//                                     // др.словами body.childNodes[4]

// console.log(list.previousSibling.previousSibling); // др.словами body.childNodes[3]

// console.log(list.nextSibling); //text (др.словами body.childNodes[6])
// console.log(list.nextSibling.nextSibling);

// console.log(list.firstChild); //получить доступ к первому дочернему элементу list
// console.log(list.lastChild);  //получить доступ к последнему дочернему элементу list

// console.log(body.children); //HTMLCollection(4) [p, h1, ul, script] возращает список дочерних элементов HTML
//                             //без текстовых узлов (text)
// console.log(list.children);

// for (let i = 0; i < list.children.length; i++) {  //вывидется список узлов, кот встречается в нашем документе list
//     console.log(list.children[i]);
// }

// console.log(list.firstElementChild); // 1-й элемент списка
// console.log(list.lastElementChild); // последний элемент списка

// let lastListItem = list.lastElementChild;

// console.log(lastListItem.parentElement);    // ul
//                                             //вернет родительский элемент узла, в кот. находится

// console.log(lastListItem.parentElement.parentElement); //body

// console.log(body.parentElement); //HTML
// console.log(body.parentElement.parentElement); //Null (DOM не достучаться)

// console.log(body.parentElement.parentNode); //#document (DOM)

// console.log(list.previousElementSibling);
// console.log(list.nextElementSibling);

// /*Относительно переменной list мы можем получать предыдущие элементы или следующие элементы,
// предыдущий соседний элемент (Используем сво-во previousElementSibling)
// или следующий соседний элемент (Используем сво-во nextElementSibling)
// не ходят по текстовым узлам (text), а ходят HTML по узлам*/



// //JS. Урок 8.4. Поиск элементов HTML (getElement*, querySelector*)
 
// console.log('Поиск элементов');

// /* Методы поиска элемента
// .getElementById() - возвращает 1 элемент

// .getElementsByTagName()    //возвращает псевдомассив элементов
// .getElementsByClassName()   //--/--

// .querySelector()    //возвращает 1 элемент
// .querySelectorAll() //возвращает коллецию элементов
// */

// let h2 = document.getElementById('header2');    //<h2 id="header2">Header 2</h2>
// console.log(h2);

// let item5 = document.getElementById('listItem5');   //<li id="listItem5">list item5</li>
// console.log(item5);

// console.log(document.getElementById('text'));   //Null


// let listP = document.getElementsByTagName('p'); //HTMLCollection(2) [p, p]
// console.log(listP);

// let linkClass = document.getElementsByClassName('link'); //HTMLCollection(3) [li.link.link2, li.link.link3, li.link.link4]
// console.log(linkClass);

// let elements = document.getElementsByClassName('bgc-green'); //HTMLCollection [span.bgc-green]
// console.log(elements);

// console.log(document.getElementsByClassName('class')); //HTMLCollection []

// //поиск по селектору тегов
// let elements2 = document.querySelector('p');    // 1-й найденый p
// console.log(elements2);

// elements2 = document.querySelector('h2');    // 1-й найденый h2
// console.log(elements2);

// //... идентификаторов
// elements2 = document.querySelector('#listItem5');    // 1-й найденый id (обязательно #)
// console.log(elements2);

// //... классов
// elements2 = document.querySelector('.link');    // 1-й найденый class (обязательно .)
// console.log(elements2);

// elements2 = document.querySelectorAll('.link');    // NodeList(3) [li.link.link2, li.link.link3, li.link.link4] все class = "link" (обязательно .)
// console.log(elements2);

// elements2 = document.querySelectorAll('p');    // NodeList(3) [p, p, p] - все p
// console.log(elements2);

// //поиск по вложенным селекторам
// elements2 = document.querySelectorAll('h2 span em');    // ищем em, кот. лежит в span, кот лежит в h2
// console.log(elements2);

// //поиск по любым CSS селекторам, например
// elements2 = document.querySelectorAll('а[href="#hash5"]'); //найдем все ссылки с атрибутом #hash5
// console.log(elements2);

// console.log(document.querySelectorAll('*')); //псевдомассив всех селекторов

// /* на практике используют:
// .querySelector()    //возвращает 1 элемент
// .querySelectorAll() //возвращает коллецию элементов
// */

// //можем осуществлять поиск относительно найденого элемента

// let list1 = document.querySelectorAll('ul'); //доступ к спискам
// console.log(list1);

// list1 = document.querySelectorAll('ul')[0]; //доступ к самому 1 списку
// console.log(list1);

// let listA = list1.querySelectorAll('a'); // поиск по дочернему элементу
// console.log(listA);

// let sublist = list1.querySelectorAll('ul'); //поиск по дочернему элем. вложенных ul
// console.log(sublist);

// // console.log(sublist.querySelectorAll('.list')); //поиск по дочернему элем. вложенных class = "list"


//JS. Урок 8.5. Методы для работы с элементами HTML

let list11 = document.querySelectorAll('a');
console.log(list11);

for (let i = 0; i < list11.length; i++) {
   // console.log(list11[i]);

    //метод     .matches()
    //проверка элемента на соответствие к какому-то селектору
    // возвращ. true / false
    if (list11[i].matches('a[href="#hash3"]')) console.log(list11[i]);

}

// метод  .closest() - найдет ближайшего родителя селектора, кот. укажем а скобках

let hash33 = document.querySelectorAll('a[href="#hash3"]');
console.log(hash33);

//console.log(hash33.closest("li"));
//console.log(hash33.closest('ul'));
//console.log(hash33.closest('body'));

//console.log(hash33.closest('.class')); //Null

/* методы   получает получить доступ к содержимому элемента
.innerHTML
.outerHTML
.textContent
*/

let p1 = document.querySelector('#p1');
console.log(p1);

console.log(p1.innerHTML); //вернет содержимое элемента вместе со всеми тегами внутри
console.log(p1.outerHTML); //--/-- но и тег обертыш
console.log(p1.textContent); //вернет содержимое элемента без тегов внутри

p1.innerHTML = 'New content';
//p1.outerHTML = 'New content'; //покажет как текстовый узел
p1.outerHTML = '<div>New content</div>'; //