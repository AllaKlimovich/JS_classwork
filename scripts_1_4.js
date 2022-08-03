//Логические операторы

/*
    || - или (тянется к true)
    && - и (true если оба элем-та истина, иначе false)
    ! - не
*/


// || -или

let result = 3 || 2;
console.log(result); //3

result = false || 5;
console.log(result); //5

console.log(true || true); //true
console.log(false || true); //true
console.log(true || false); //true
console.log(false || false); //false

console.log(1 || 0); //1
console.log(true || 'Не важно что'); //true
console.log(null || 1); //1
console.log(undefined || 0); //0

let undef,
    zero = 0,
    emptyStr = '',
    msg = 'Привет!';

result = undef || zero || emptyStr || msg || 0;
console.log(result); //Привет!



// && - и, true, false

console.log(true && true); //true
console.log(false && true); //false
console.log(true && false); //false
console.log(false && false); //false

console.log(1 && 0); //0 (если первый элемент true, то возвращаем второй элемент)
console.log(7 && 5); //5

console.log(0 && 50); //0 (если первый элемент fals, то он и возвращается)
console.log(false && 'string'); //false

// ! - не

let value = 0;
console.log(!value); //true

value = 56;
console.log(!value); //false

console.log(!7); //false
console.log(!""); //true
console.log(!0); //true