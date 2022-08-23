// JS. Урок 7. Простые объекты и их свойства

console.log('Объекты');

let arr = [123, 'Строка', [1, 2, 3], { name: 'Alex'}];
console.log(arr);

let arr2 = [];
arr2['name'] = 'Alex';
arr2[0] = 123;

console.log(arr2);

/*Объект - др. словами Ассоциативный массив – это массив, в котором обращение
к значению осуществляется по ключу. При этом в качестве ключа используется не
порядковый номер (индекс), а некоторая строка, которую мы устанавливаем сами*/

let user = {};  // пустой объект
console.log(user, typeof(user));

/* объекту добавляем свойства:
    * имя св-ва - даем сами испол. латин.буквы (можно_)
    * далее ставим :
    * значение, кот. будем хранить в свойстве данного объекта (м.б. строкове, числовое, массив,
    объектб функция и т.д.)*/
user = {                 
    name: 'Alex', 
    age: 28,
    gender: 'Male'
};
console.log(user);
/*Основные операции при работе с объектами:
- создание объекта
- создание свойств объекта
- получение информации и з объекта
- удаление свойств */

console.log(user.name); //Alex    получение свойства объекта
console.log(user.age); //28

user.email = 'name@gmail.com';  // добавление свойства в объект
console.log(user);

delete user.gender; //удаление свойства 
console.log(user);

user.name = 'Alla';  // меняем свойства в объект
console.log(user);

//проверка сущ. ли в объекте user св-во name - возвр. True, False

if ('name' in user) {           // самый верный способ проверки!!!
    console.log('Свойство name существует');
} else {
    console.log('Свойство name не существует');
}

if ('gender' in user) {   
    console.log('Свойство gender существует');
} else {
    console.log('Свойство gender не существует');
}

if (user.gender === undefined) {
    console.log('Свойство gender undefined');
}

//Пример

user.phone = undefined;
console.log(user);

if (user.phone === undefined) {
    console.log('Свойство phone undefined');
}

if ('phone' in user) {   
    console.log('Свойство phone существует');
} else {
    console.log('Свойство phone не существует');
}

console.log(user);

console.log(user['name']); //альтернативный способ получения свойства объекта

//user.last-name - нельзя!
user['last-name'] = 'Ivanov';
console.log(user);

user['Отчество пользователя'] = 'Михайлович';
console.log(user);

let key = 'age';
console.log(user[key]); //28 т.к. свойству age задано значение 28

user.size = {
    top: 90,
    middle: 60,
    bottom: 60
}

console.log(user);
console.log(user.size.middle); //60
console.log(user['size']['middle']);  //60

// перебор всех свойств объекта

for (let keyName in user) { // в переменную keyName временно записыв. значение каждого ключа(свойства)
    console.log(keyName);  //code
}

for (let keyName in user) { 
    console.log(keyName + ': ' + user[keyName]); //  выводим свойства объекта user
}

//Копирование объекта (скорее будет создание ссылки на оригинальный объект)

let userClone = user;
console.log(userClone);

userClone.name = 'KRISTINA'; //добавили в userClone.name и поменялось в user.name
console.log(userClone);

console.log(user);

/* скопировать объект и сделать его независимым решается через перебор объекта user и создание новых свойств для userClon */

userClone = {}; //обнуляем (сбрасываем) объект
for (let keyName in user) {
    userClone[keyName] = user[keyName];
}
console.log(userClone);

userClone['last-name'] = 'Mama-Mia';
console.log(userClone);
console.log(user);


// JS. Урок 7.2. Методы объектов. Функции-конструкторы. Что такое "this"? (встроенные функции внутри объекта)

user1 = {                 
    name: 'Ivan', 
    email: 'name@gmail.com',
    age: 28,
    hello: function (){
        alert('Привет!');
    }
};

console.log(user1);

//если какое-то свойство объекта в качестве значания содержит функцию то это свойство называют МЕТОДОМ!!!

console.log(user1.email);
//user1.hello();

user1.bye = function (){        //добавление метода в объект
    alert('Пока!!!');
};

//user1.bye();

user1.hello = function (){
    alert('Привет! Меня зовут ' + user1.name);
}
// user1.hello();

// Пример
user1.setName = function(name){
    user1.name = name;
}

console.log(user1);
 
user1.setName('LolaLola'); 
console.log(user1);
//user1.hello();

 
// Пример (аналагично примерам выше) 
//  (this - доступ к текущему объекту (к его свойствам) к самому себе через "меня")
  
user1.hello = function (){
    alert('Привет! Меня зовут ' + this.name);
}

user1.setName = function(name){
    this.name = name;
}

user1.setName('Dmitriy');
user1.hello();

//создание объекта через функции прототипов

let User = function() {     //создаем функцию-конструктор
    this.name = 'NoName';
    this.age = 0;
    this.canWalk = false;
}; 

let userAlex = new User(),  //создаем объект на основе функции-конструктора (их может быто сколько угодно)
    userBob = new User(),
    userMike = new User();

console.log(userAlex);
console.log(userBob);
console.log(userMike);

// добавим имя

userAlex.name = 'Alex';
userBob.name = 'Bob';
userMike.name = 'Mike';

console.log(userAlex);
console.log(userBob);
console.log(userMike);


// создаем функцию-конструктор Animal

let Animal = function (name, walk){
    this.name = name;
    this.canWalk = walk;
};

let cat = new Animal('Кот', true),
    dog = new Animal('Собака', true);

console.log(cat);
console.log(dog);

cat.canTalk = 'Мяу-Мяу';
dog.canTalk = 'Гав-Гав';

console.log(cat);
console.log(dog);


// создаем функцию-конструктор Calc

let Calc = function(a, b) {  
    this.get = function (){  //метод получает у пользователя инфу по числу a,b
        this.a = +prompt('Введите число a');
        this.b = +prompt('Введите число b');
        this.oper = prompt('Введите операцию: +, -, *, /');

        this.operation();
    };

    this.operation = function(){ //метод операции 
        switch(this.oper) {
            case '+':
                this.result = this.a + this.b;
            break;
            case '-':
                this.result = this.a - this.b;
            break;
            case '*':
                this.result = this.a * this.b;
            break;
            case '/':
                this.result = this.a / this.b;
            break;
            default: this.result = 0;
        }
        this.show();
    };

    this.show = function (){ // метод результат
        alert(this.a + ' ' + this.oper + ' ' + this.b + ' ' + '=' + ' ' + this.result);
    };
};

let calc = new Calc();  // создаем объект 
calc.get(); //вызываем объект
