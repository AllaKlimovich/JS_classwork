// циклы FOR и WHILE

// цикл while - пока

let i = 0;
while (i < 3) {
    console.log(i);
    i++;
}

console.log('');

i = 5
while (i <= 16) {
    console.log(i);
    i++;
}
console.log('');
// цикл do while - делать пока

i = 10;
do{
    console.log(i);
    i++;
} while(i <= 15); // while(i = 0); - false

/*Понятие бесконечного цикла
while(true) {console.log('');} браузер зависнет! бесконечное выполнен. */
console.log('');

//цикл for
{
    for (let i = 15; i >= 5; i--) {
    console.log(i); 
    }
}
console.log('');
{
    for (let i = 11; i >= 7; i--)  console.log(i);  
    //в цикле 1 операция {} пропукаем
    
}
console.log('');
{  //пропукаем 1 параметр
    let i = 9
    for (; i > 7; i--)  {
        console.log(i);  
    }
}
console.log('');
{  //пропукаем 3 параметр
    
    for (let i = 9; i > 7; )  {
        console.log(i); 
        i--;
    }
}

//for(;;){} -браузер зависнет

console.log('');
//continue - пропускает операция не завершая цикла
{    
    for (let i = 0; i <= 8; i++)  {
        if (i == 5) continue;            
            console.log(i); 
    }
}

console.log('');
//break - завершает цикл
{    
    for (let i = 0; i <= 8; i++)  {
        console.log(i);
        
        if (i == 4) break;
    }
}

console.log('');
//вывод нечетных чисел
{    
    for (let i = 0; i <= 10; i++)  {
        if (i % 2 == 0) continue;            
            console.log(i); 
    }
}

console.log('');
//найти сумму чисел в заданном числе
{
    let a = 5;  //1+2+3+4+5 = 15
    let sum = 0;
    for (let i = 0; i <= a; i++)  {
        console.log(i); 
        sum += i;
    }
    console.log(sum);
}

console.log('');
//найти сумму чисел каждого числа из заданного числа
{
    let a = 5;  //1+2+3+4+5 = (0+1)(0+1+2)(0+1+2+3)(0+1+2+3+4)(0+1+2+3+4+5)
    let sum = 0;
    for (let i = 1; i <= a; i++)  {
        sum = 0;
        for (let y = 1; y <= i; y++) {
            sum += y       
        }
    console.log('Sum ' + i + ' = ' + sum);
}
    }
    