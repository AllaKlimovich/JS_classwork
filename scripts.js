// JS. Урок 5. Пользовательские и анонимные функции. Параметры. Возврат результата выполнения. Рекурсия

console.log('ФУНКЦИИ');

// function Имя (параметры) {тело}

function hello() {
    alert('Добро пожаловать'); //code
}

//hello(); //вызываем функцию по имени

function getName() {
    var name = prompt('Как Вас зовут?');
    alert(name); //code
}

// 

function getAge() {
    var age = prompt('Сколько Вам лет?');
    alert(age); //code
}

//getAge(); getName();

//Область видимости переменных

var user = 'Иван';

function helloUser() {
    var defaltUser = 'Юзер';
    
    globalUser = 'Супер Юзер';
    
    user = 'Петя';

    var messege = 'Привет ' + user;

    alert(messege); // Привет Петя
}

console.log(user); //Иван

helloUser();

// console.log(user); //Петя

// //console.log(defaltUser); //defaltUser is not defined

// console.log(globalUser); //Супер Юзер  только после вызова функции

// //let, const, var 

// //где var объявлен, в той области он и действует! 

// function showMessage (from, text){
//     //Маша: Как дела?
//     //Алекс: Привет!

//     alert(from + ': ' + text);
// }

// showMessage ('Маша', 'Как дела?'); //Маша = from, Как дела? = text
// showMessage ('Алекс', 'Привет!'); //Алекс = from, Привет! = text
// showMessage ('Сергей', 'Добрый день!');
// //функция showMessage выпонилась 3 раза с разными параметрами

// showMessage ('Петя'); //

function createArray(length){

    length = length || 10;  // проверка: задан ли данный параметр вне функии
                            // или присваиваем 10 (по умолчанию)

 
    var array = [];

    for (var i = 1; i <= length; i++ ){
        array.push(i);
    }

    console.log(array);
}
// createArray(8);
// createArray(18);
// createArray(); // 10

function test(a, b, c){
    console.log(a, b, c);

    //arguments (скрытый по умолчанию массив - встроен в любую функцию)

    console.log(arguments)

    if (arguments.length > 3) {
       /* console.log(arguments[3]);
        console.log(arguments[4]);
        console.log(arguments[5]); */      

        for (var i = 0; i < arguments.length; i++ ){
            console.log(arguments[i]);
        }
    
    }
}

//test(5, 4, 3);
//test(2, 1, 0, 50, 45, 12);
//test();

// возврат значений (ключевое слово: return)

// function checkAge(age){
//     if (age >= 18) {
//         console.log('Добро пожаловать');

//         return true;

//     } else {
//         console.log('Доступ запрещен');

//         return false;
//     }
// }

//  checkAge(12);
//  checkAge(21);

// var result = checkAge(21);
// console.log(result);  //undefined (сама по себе функция ничего не возращает (не прописан return))
                      //true (прописан return)

// равнозначно

function checkAge(age){
        if (age >= 18) {
            return true;
        } else {
            return false;
        }
    }
    
    var result = checkAge(11);

    if (result == true) {console.log('Добро пожаловать');
    } else {console.log('Доступ запрещен');
    }   

function showMove(age) {
    if (checkAge(age) == true) {
        return "Приятного просмотра"; // можем вернуть все типы данных в JS
    } else {
        return "Фильм не для всех";
    }
}

console.log(showMove(55));
console.log(showMove(15));

function sum(a, b) {
        return (a + b);
}

var c = (sum(5, 8))  //13
console.log(c);

var sum1 = sum;  //копирование функции
console.log(sum1(5, 10)); //15

// 2 способ создания функции (через ананимную функцию, т.к нет ее имени)

var hello = function(user) {
    console.log('Привет ' + user);
};

// 1 способ создания функции (через именную, т.к у функции есть имя)

function hello2(user) {
    console.log('Привет ' + user + '!');
}

hello('Вадим');
hello2('Илья');

//пример

var hello3,
    user = prompt('Ты кто?');

if (user != '') {
    hello3 = function() {return 'Привет ' + user};
} else {
    hello3 = function() {return 'Привет Аноним'};
}

var result = hello3();
console.log(result);


//пример

function ask(question, yes, no){
    if (confirm(question)) yes()
    else no();
}

ask (
    'Вы согласны',
    function() {alert('Вы согласились');},
    function() {alert('Вы не согласны');}
);

// Функция умеет сама себя вызывать (РЕКУРСИЯ)

function printArray(array) {
    console.log(array[i]);
    i++;

    if (i < array.length) printArray(array);
}

var i = 0;

printArray([1, 89, 5, -9, 61]);