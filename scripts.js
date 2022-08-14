// JS. Урок 4. Массивы и их методы

console.log('Массивы');

//способ создания массива через []

let arr = [];  //пустой массив
console.log(arr);

let fructs = ['яблоко' , 'груша' , 'слива'];  //со строковыми элементами

console.log(fructs);

console.log(fructs[1]);
console.log(fructs[0]);
console.log(fructs[2]);

fructs[1] = 'дыня';
console.log(fructs);

fructs[3] = 'алыча';
console.log(fructs);

fructs[10] = 'арбуз';
console.log(fructs);

//ключевые индексы: 0,1,2,3...
//асоциативные ключи: именные (other)

fructs['other'] = 'мармелад';
console.log(fructs);

console.log(fructs['other']);

console.log(fructs.length); //длина массива

//length - хранит индекс последнего элемента!!!

let fructs2 = ['яблоко' , 'груша' , 'слива'];
console.log(fructs2);

fructs2[fructs2.length] = 'шоколад'; //когда не знаем длину массива и указыв. в конец массива
console.log(fructs2);

let massiv = [1,2,,,,,8,10]; //элементов = 4, length = 8
console.log(massiv);

massiv.length = 3;  //обрезали массив до 3
console.log(massiv);

massiv.length = 0;  //удалили массив
console.log(massiv);


//способ создания массива через new Array

let mas1 = new Array();   //пустой
console.log(mas1);

let mas2 = new Array('строка', 123, 0, true);   // не пустой
console.log(mas2);

let masMix = [
    456,
    -658,
    'Строка',
    false,
    {name: 'Иван'},  //объект
    [1, 2, 3]
];
console.log(masMix);

//многомерные массивы (матрицы)

let matr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matr);
console.log(matr[1]); //[4, 5, 6]
console.log(matr[1][1]); // 5

console.log('Методы массивов');

let fructs5 = ['яблоко' , 'груша' , 'слива'];
console.log(fructs5);

// push - добавление в конец массива

fructs5.push('ананас');
console.log(fructs5);

// unshift - добавление в начало массива

fructs5.unshift('апельсин');
console.log(fructs5);

// pop -    удаление в конце массива

fructs5.pop();
console.log(fructs5);

// shift - удаление в начале массива

fructs5.shift();
console.log(fructs5);

//pop и shift

let popElem = fructs5.pop(),
    shiftElem = fructs5.shift();

console.log(fructs5);

console.log(popElem);  //слива
console.log(shiftElem);  //яблоко

// push и unshift

fructs5.push('ананас', 'мандарин'); // несколько элементов
console.log(fructs5);

fructs5.unshift('вишня', 'огурец'); 
console.log(fructs5);

// splice   - умеет добавлять, удалять и заменять элементы в массиве

let text = ['Я', 'изучаю', 'JavaScript'];
console.log(text);

text.splice(1, 1); // первая число(1) - сколько элементов удаляем, второе число(1) - с какого начинаем
//text.splice(1, 2);
console.log(text);

text.splice(1, 0, 'изучаю'); // с первого индекса (1), ничего не удаляя (0) вставим 'изучаю'
console.log(text);

text.splice(2, 0, 'сложный', 'язык'); // со 2-го индекса (2), ничего не удаляя (0) вставим 'сложный язык' элемент 2-го индекса (JavaScript) сместиться в конец
console.log(text);

text.splice(2, 2); // со 2-го индекса (2), удаляем (2) элемента 'сложный язык'
console.log(text);

// slice - копирует участки массива в др. массив

let text1 = ['Почему', 'надо', 'учить', 'JavaScript'];
let text11 = text1.slice(1,3);  // начинаем с 1-го индекса и заканчивая 3-им (не включая его) - т.е. только 2 - надо учить
console.log(text1);
console.log(text11); // надо учить

let text12 = text1.slice(1); // начинаем с 1-го и до конца
console.log(text12);

let text13 = text1.slice(); // весь
console.log(text13);

//или

let text14 = text1; // весь
console.log(text14);

// split - превращает строку в массив

let names = 'Маша, Петя, Иван, Марина';
let nameArr = names.split(',');  // разделителем будет ,
console.log(nameArr);

nameArr = names.split(',', 2);  // разделителем будет , а его длина - 2 элемента
console.log(nameArr); //Маша, Петя

let names1 = 'Маша';
console.log(names1.split(''));  //массив: [М, а, ш, а]

// join - превращает массив в строку

let arrNames = ['Маша', ' Петя', ' Иван', ' Марина'];
let stararrNames = arrNames.join('; ');  // разделителем будет ;_
console.log(stararrNames);

console.log(new Array(10).join('ля '));  // лайфхак повторить строку несколько раз

// sort - сортирует значения как строки

let arrNums = [3, 1, -5, 23, 15, 8];
console.log(arrNums);

arrNums.sort();
console.log(arrNums); //-5, 1, 15, 23, 3, 8

arrNums.sort(function(a, b){
    return a - b;    //все значения массива преобразуются к числам
});
console.log(arrNums); //-5, 1, 3, 8, 15, 23

// reverse - меняет порядок значений в массиве на обратный

arrNums.reverse();
console.log(arrNums);

// concat - метод объединения или копирования массивов

let arrNums2 = [1, 2, 3, 4, 5, 6],
    arrNums3 = [6, 7, 8, 9],
    arrNums4 = [10, 11, 12, 13, 14];

let arrNums5 = arrNums2.concat(arrNums3, arrNums4);
console.log(arrNums5);

// indexOf и lastIndexO -  позволяют осуществить поиск значений в массиве (если элемент не найден - возращает -1)

// indexOf - возвращает индекс первого вхождения элемента в массив (поиск с лева на право)

let newArrNames = ['Маша', 'Петя', 'Иван', 'Марина', 'Петя'];
console.log(newArrNames);

console.log(newArrNames.indexOf('Петя'));  // 1

// lastIndexOf - возвращает индекс последнего вхождения элемента в массив (поиск с права на лево)

console.log(newArrNames.lastIndexOf('Петя'));  // 4

console.log(newArrNames.lastIndexOf('Катя'));  // -1


// JS. Урок 4.2. Перебор значений массивов с помощью простых циклов


let newFructs = ['яблоко' , 'груша' , 'апельсин'];
console.log(newFructs);
console.log(newFructs.length);  //3


for (let i = 0; i < newFructs.length; i++) {  //перебираем с лева на право
    console.log(newFructs[i]);
    //document.write(newFructs[i]);
}

for (let i = newFructs.length-1; i >= 0; i--) {  //перебираем с права на лево
    console.log(newFructs[i]);
}

//while - используется очень редко (сложнее считается)

let i = 0;
while (i < newFructs.length) {
    console.log(newFructs[i]);
    i++;
}

// заполнение массива числами

let frr = [];

/*for (let i = 8; i < 20; i++) {  //заполнить массив от 8 элемента до 20 эл. значениями
    frr[i] = i;
}
console.log(frr);*/

for (let i = 8; i <= 20; i++) {  //заполнить массив числами от 8 до 20 
    frr.push(i);
}
console.log(frr);