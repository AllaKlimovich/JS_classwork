// JS. Урок 6.4. Регулярные выражения

//Регулярные выражения помогают вести поиск по спецю шаблону в какой-либо строке

let str = 'Я люблю JavaScript';
console.log(str);

// Метод search(//)

console.log(str.search(/лю/)); //2
console.log(str.search(/лy/)); //-1

// Флаги
/*
g - глобальный поиск с отработкой всех совпадений
i - поик без учета регистра
m - многострочный поиск

все флаги можно использовать одновременно
*/

console.log(str.search(/лю/gi)); 

// Метод match - поиск всех совпадений (возращает массив из совпадений)

console.log(str.match(/лю/gi));
console.log(str.match(/лю/).index); // информация о позициях совпадений (индекс первого вхождения)

// Метод replace('','') - поиск одних символов и замена на др.

console.log('12-53-86'.replace('-', ':')); // 12:53-86 - заменяет только первое совпадение
console.log('12-53-86'.replace(/-/g, ':')); // 12:53:86 - заменяет совпадение во всей строке

let str2 = 'Иван Иванов';
console.log(str2);

console.log(str2.replace(/(Иван) (Иванов)/,'$2 $1')); // () -группа, $1 - номер группы

console.log(str2.replace(/(Иван) (Иванов)/,'Великий $&')); // & - все найденные совпадения по группам
console.log(str2.replace(/(Иван) (Иванов)/,'Великий $2 $1'));

// Метод test - проверка по наличию совпадений (возращает True или False)

console.log(/лю/ig.test(str)); // true
console.log(/лy/ig.test(str)); // false

let email = "info@myitshool.by"; // - строка, по которой будем осущ. поиск

let regexp = /[a-z]@[a-z].[a-z]/ig; // - регулярное выражение

//info@myitshool.by
console.log(regexp.test(email)); // true  (строка соответствует нашему регул. выражению)

email = 'i336nfo@myitshool.by';
console.log(regexp.test(email)); // false  (строка не соответствует нашему регул. выражению)

email = '336info@myitshool.by';
regexp = /[0-9a-z]@[a-z].[a-z]/ig;
console.log(regexp.test(email)); // true