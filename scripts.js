// Условные операторы

//Тернарные операторы: ? и :

/*let age = prompt('Ваш возраст?', 18);
let access = (age > 18) ? true : false;

console.log(access);

(age > 18) ? console.log('Доступ разрешен') : console.log('Доступ запрещен');

let message = (age < 3) ? 'Привет, малыш!' :
              (age < 18) ? 'Привет!' :
              (age < 100) ? 'Здравствуйте!' : 'Какой необычный возраст';
console.log(message);*/

let hour =9;
(hour < 10 || hour > 18) ? console.log('Офис до 10 или после 18 закрыт')
                         : console.log('Офис открыт');

let minute = 30;
(hour == 12 && minute == 30) ? console.log('Время 12:30')  
                            : console.log('Другое время');

//Условный оператор if  else

let year = prompt('Вкаком году появилась спецификация ...?')

if (year != 2011) console.log('Неправильно!');

if (year == 2011) {
    console.log('Да...');
    console.log('Правильно!');
}

if (true) {
    // этот код выполниться в любом случае
}
//аналогично

if (1) { //  преобразуется в true
    // этот код выполниться в любом случае
}

if (false) {
    // этот код не выполниться 
}
// аналогично

if (0) { // преобразуется в false
    // этот код не выполниться
}

// Условные: if ... else

let valentinesDay = prompt('Какого числа День св. Валентина');

if (valentinesDay == 14) {
    console.log('Да, это верно');
} else {
    console.log('Неправильно');
}

// if ... else if ... else

let summerDay = prompt('Месяц середины лета (число)?');
if (summerDay < 7) {
    console.log('Слишком рано');
} else if (summerDay > 7) {
    console.log('Слишком поздно');
} else {
    console.log('Да, это июль');
}

/*
if () {
    //code
} else if () {
    //code
} else if () {
    //code
} ... {
    ...
} else {
    //code
}
*/

/*Постановка условий через оператор switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

let a = 13 + 3;
switch (a) {
    case 3:
        console.log('Значение 3. Маловато');    
    break;
    
    case 4: 
        console.log('Значение 4. В точку');
    break;

    case 5: 
        console.log('Значение 5. Перебор');
    break;

    case 6: 
        console.log('Значение 6. Совсем не то...');
    break;

    default:
        console.log('Я таких значений не знаю');
}

/* Аналогично 
if (a == 3){
    //code
} else if (a == 4){
    //code
} else if (a == 5){
    //code
} else if (f == 6){
    //code
} else {
    //code
}
*/

//выполняется одно действие для разных условиях

let b = 10+3;

switch (b) {
    case 3:
    case 4:
    case 5:
        console.log('Значение ' + b + ' подходит');
        // может быть неск. code    
    break;

    case 6:
        console.log('Значение 6. Перебор!');    
    break;

    default:
        console.log('Может, в другой раз');
}

//забыли break

let c = 5;

switch (c) {
    case 4:
        console.log('Значение 4 подходит');
    case 5:
        console.log('Значение 5 подходит');    
    case 6:
        console.log('Значение 6 подходит');
    default:
        console.log('Интересное значение');
}