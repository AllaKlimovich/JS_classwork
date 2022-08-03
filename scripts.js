//онострочный комментарий

/* многострочный
комментарий */

console.log('Привет, мир!');
console.log('Привет, мир!','Можно задавать несколько значений!', 'Будут в одну строку.',55);

console.dir('Текст любой'); //как и log толко дает больше инфы

/*alert('Уведомление: Файл scripts.js подключен'); //отдельное окошко как уведомление
alert(777);*/

/*prompt('Как тебя зовут?'); //задает вопрос пользователю
/*confirm('Тебе 18?'); //задает однозначные вопросы ДА НЕТ*/

//Переменные

/* Создание переменных
var - явл. устаревшим
let
const
*/

/*var a = 5; //инициализир.переменную а,кот. хранит значение 5
console.log(a);

var b = 6; */

let c = 20;
console.log(c);

const d = 80 //хранит не измен. величину
console.log(d);

//d = 30;

let test;
let test123;
let message = 'текст сообщения';
let _text = 5;
let $a = 15;
let _ = 50;
let $ = '0001'; //строка,кот. содержит числа

let firstName = 'Sergey'; 

let a = 1,
    b = 2,
    f = 3,
    g = 'text'; //задаем неск. переменных

console.log(message);

let h = b;
console.log(h);

let y = 0,
    p = 3,
    x = y = p; //присваивание по цепочке (происходит с права на лево)

console.log(x);
console.log(p);
console.log(y);

console.log(6-8);
console.log(a+f);

console.log(g+4);
console.log(g+' text');

//Типы Данных

//Число

let n = 123;
let r = 45.34;

console.log(n);
console.log(r);

console.log(1/0); //Infinity
console.log(-1/0);  // -Infinity

r = 'строка'
console.log(r-4); //NaN ошибка вычисления выражения
console.log(0/0); //NaN

//Строка

let str = 'строка в одинарных кавычках',
    str2 = "строка в двойных кавычках",
    str3 = `строка в обратных кавычках`;
console.log(str);
console.log(str2);
console.log(str3);

//Логический (булевый): true и false;

let checked = true;
console.log(checked);

checked = false;
console.log(checked);

//Массив

let arr = [],
    arr2 = [1, 2, 3, 65, 'Строка'];
console.log(arr, arr2);

//Объекты

let obj = {},
    obj2 = {
        name: 'Иван',
        phone: '+375 00 000 00 00'
    };
console.log(obj);
console.log(obj2);

//Функции

function f1() {
    //code
};

let f2 = function() {
    //code
};

//Значение «undefined»

let u;
console.log(u);  //undefined

r = undefined;
console.log(r);

//Значение «null» ничего

let q = null;
console.log(q);

//--------------

firstName = prompt('Как тебя зовут?');
console.log(firstName);

let confirmage = confirm('Тебе 18?');
console.log(confirmage);

//--------------

let num = 123,
    numfloat = 12.52,
    string1 = 'строка 1',
    string2 = "строка 2",
    string3 = `строка 3`,
    confirm1 = true,
    confirm2 = false,
    array1 = [1, 'строка', 0, 58],
    object1 = {name: 'Ivan'},
    func1 = function() {},
    t,    //undefined
    z = null;
    
//typeof

console.log(num, typeof num);
console.log(numfloat, typeof numfloat);
console.log(string1, typeof string1);
console.log(string2, typeof string2);
console.log(string3, typeof string3);
console.log(confirm1, typeof confirm1);
console.log(confirm2, typeof confirm2);
console.log(array1, typeof array1);
console.log(object1, typeof object1);
console.log(func1, typeof func1);
console.log(t, typeof t);
console.log(z, typeof z);