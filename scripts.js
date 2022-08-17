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

console.log(user); //Петя

//console.log(defaltUser); //defaltUser is not defined

console.log(globalUser); //Супер Юзер  только после вызова функции

//let, const, var 

//где var объявлен, в той области он и действует! 

function showMessage (from, text){
    //Маша: Как дела?
    //Алекс: Привет!

    alert(from + ': ' + text);
}

showMessage ('Маша', 'Как дела?'); //Маша = from, Как дела? = text
showMessage ('Алекс', 'Привет!'); //Алекс = from, Привет! = text
showMessage ('Сергей', 'Добрый день!');
//функция showMessage выпонилась 3 раза с разнфми параметрами

showMessage ('Петя'); //