// Преобразование типов данных

// в строку 1-й способ: String

let num = 45;
console.log(num, typeof num);

let strnum = String(num);
console.log(strnum, typeof strnum);

strnum = String(45.89);
console.log(strnum, typeof strnum);

console.log(String(null), typeof String(null));
console.log(String(undefined), typeof String(undefined));

// в строку 2-й способ: + ''

strnum = num + '';
console.log(strnum, typeof strnum);

let test = true + 'text';
console.log(test, typeof test);

test = undefined + 'text';
console.log(test, typeof test);

// в число: Number()

let string = '000456',
    numstring = Number(string);
console.log(numstring, typeof numstring);

string = '00089.123',
numstring = Number(string);
console.log(numstring, typeof numstring);

string = '00f089.1a2c3',
numstring = Number(string);
console.log(numstring, typeof numstring); //NaN 'number'

//parseInt() - преобразовать к целому числу
//parseFloat() - хотим число с плав. точкой

string = '00а089.123',
numstring = parseInt(string);
console.log(numstring, typeof numstring);

string = '00089.123',
numstring = parseInt(string);
console.log(numstring, typeof numstring);

string = '123g4523',
numstring = parseInt(string);
console.log(numstring, typeof numstring);

string = '00089.1l23',
numstring = parseFloat(string);
console.log(numstring, typeof numstring);

//null, undefined

console.log(null >= 0); //true
console.log(null > 0); //false
console.log(null == 0); //false

console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined < 0); //false

// isFinite()
// isNaN() - является ли значение не числом

console.log(isFinite('string')); //false
console.log(isFinite(563)); //true
console.log(isFinite(23.5)); //true

console.log(isFinite(Infinity)); //false
console.log(isFinite(NaN)); //false

console.log(isNaN('string')); //true
console.log(isNaN(563)); //false

console.log(!isNaN(563)); //true