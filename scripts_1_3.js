//Операторы сравнения

/* 
>
<
>=
<=
==  сравнение значений
!= или <>  не равно
*/

/*операторы сравнения возвращают только 2 значения
    true
    false */

console.log(5 > 3);  //true
console.log(5 > 7);  //false
console.log(5 != 3);  //true
console.log(5 == 3);  //false

let a = 45,
    b = 2;

console.log(a == b) //false

let c = false;
console.log(c == false) //true

console.log('text' > 5) //false
console.log(false == true) //false

console.log('A' > 'a') //false
console.log('a' > 'A') //true
//сравнение символов происходит по Unicode

console.log('Строка' > 'Строка 2') //false
console.log('Строка' > 'Строк') //true

//1 == true
//0 == false
console.log(1 == true); //true
console.log(0 == false); //true

//'', "", `` == false
console.log('' == true); //false

console.log('5', typeof '5'); //5 tring
console.log('5' > 2); //true
console.log('56' == 56); //true
console.log('07' < 10); //true

// === сравнивает значения с учетoм типа данных

console.log('56' === 56); //false
console.log('56' == 56); //true

//null, undefined

console.log(undefined < 0); //false
console.log(undefined > 0); //false
console.log(undefined == 0); //false
console.log(undefined == true); //false

console.log(null < 0); //false
console.log(null > 0); //false
console.log(null == 0); //false

console.log(null >= 0); //true
