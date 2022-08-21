// JS. Урок 6. Работа со строками

console.log('Работа со строками');

let a = 'Строка',
    b = "Строка",
    c = new String('Строка'), //очень редко (выводит как объект)
    d = String ('Строка'); //редко (как преобразов. к строке)

console.log(a, b, c, d); 

console.log(c.valueOf()); //очень редко

console.log(a[1], a[3], a[0]); //  т о С

a[0] = 'M'; // не поменяет С на М
console.log(a);

// метод поиска подстроки в сущ. строке indexOf 
// (вернет начальную позицию подстроки в строке)

let str = 'Hello World!';

console.log(str.indexOf('Привет')); // -1 (подстрака в строке не найдена)
console.log(str.indexOf('Hello')); //0 (начальная позиция подстроки в строке)
console.log(str.indexOf('World')); //6
console.log(str.indexOf('d')); //10

console.log(str.indexOf('o')); //4
console.log(str.indexOf('o', 6)); // 2-й параметр - начальная позиция, с которой будет вестись поиск
                                  // 7

//Методы взятия подстроки

/* substring(start, [end]) 
start - стартовая позиция, с кот. будет выстись поиск
end - (необяз. параметр) конеч. позиция, до кот. будет вестись поиск, не включая конечн. позицию*/

console.log(str.substring(5)); //' World!'
console.log(str.substring(5, 8)); //' Wo' 

/* substr(start, [length])
length - длинна (какое количество символов надо взять из-под строки, включая последний символ) */ 

console.log(str.substr(5)); //' World!'
console.log(str.substr(6, 4)); //'Worl' 

/* slice(start, [end]) - аналогичен substring(start, [end])*/

console.log(str.slice(5)); //' World!'
console.log(str.slice(5, 8)); //' Wo' 

// процесс соединения строк -  конкатенация

let str1 = 'Привет',
    str2 = 'МИР',
    str3 = '!';

console.log(str1 + ' ' + str2 + str3);

//concat

console.log(''.concat(str1,' ',str2,str3)); //в текущую строку ' ' добавить str1, str2,str3
console.log(str1.concat(' ',str2,str3)); // в str1 добавляем пробел,str2,str3

// сравнение строк

console.log('а' > 'Я'); // true
console.log('А' > 'Я'); // false
console.log('А' > 'я'); // false

// получение кода символа - метод charCodeAt()

console.log('а'.charCodeAt()); // 1072
console.log('Я'.charCodeAt()); // 1071

// получение символа ро коду - метод String.fromCharCode()

console.log(String.fromCharCode(1071)); // Я

// Лайфхак: Получить список всех кирилических символов

for (let i = 1040; i <= 1103; i++) {
    console.log(String.fromCharCode(i));
}

