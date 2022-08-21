// JS. Урок 6.2. Математические функции (Math)

console.log('Математические функции'); 

// встроенный объект Math

console.log(Math.PI); //3.141592653589793  Метод PI

console.log(Math.sqrt(9)); // 3   Метод sgrt() - вычесть квадратный корень из числа

console.log(Math.log(19)); //2.9444389791664403  Метод log() - натуральный логорифм числа

console.log(Math.pow(3, 2)); // 9  Метод pow(x,y) - возвести число в любую степень
                            // x - число y - степень возведения

console.log(Math.abs(-10)); // 10  Метод abs() - модуль числа

console.log(Math.exp(3)); // Метод exp() - вычисляет основание логорифма

console.log(Math.max(12, -10, 56, 8, 6)); // Метод max(a,b,c) - находит mах число из списка числовых значений

console.log(Math.min(-10, 3, 1, 56, -8)); // Метод min(a,b,c) - находит min число из списка числовых значений

console.log(Math.random()); // Метод random() - генерирует случайное число от 0 до 1

// 5..15
function getRandom(min, max) {
    return Math.random() * (max - min) + min;
}
console.log(getRandom(5, 15));
console.log(Math.round(getRandom(5, 15)));

console.log(Math.round(20.49)); // 20   Метод round() - округление числа до ближайшего целого
console.log(Math.round(5.09)); // 5
console.log(Math.round(12.51)); // 13

console.log(Math.ceil(5.09)); // 6  Метод ceil() - округление числа до целого большего значения

console.log(Math.floor(5.09)); // 5  Метод floor() - округление числа до целого меньшего значения
console.log(Math.floor(12.51)); // 12