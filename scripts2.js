// JS. Урок 6.3. Работа с датой и временем

let dataNow = new Date(); // Объект new Date() - получение текущей даты и времени в международном формате
console.log(dataNow);

console.log(dataNow.getFullYear());  //год
console.log(dataNow.getMonth()); //месяц
console.log(dataNow.getDay());  //день (номер дня недели)
console.log(dataNow.getDate()); //день (календарный)
console.log(dataNow.getHours()); //час
console.log(dataNow.getMinutes()); //минуты
console.log(dataNow.getSeconds());  //секунды
console.log(dataNow.getMilliseconds());  //милисекунды

//меняем(устанавливаем) дату и время

dataNow.setDate(1);
dataNow.setMonth(11) //декабрь

dataNow.setHours(00);
dataNow.setMinutes(00);

console.log(dataNow);

// установить формат даты и времени Метод toLocaleString()

console.log(dataNow.toLocaleString('ru'));

let opt = {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  hour: 'numeric',
  minute: 'numeric',
  weekday: 'long'
};
console.log(dataNow.toLocaleString('ru', opt));