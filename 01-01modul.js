

// const age = typeof typeof typeof 25;
// const age1 = 'number';
// const name = typeof 'Lyudmila';


// console.log(age);

// alert();

// МЕТОД CONFIRM
//виведення на екран вікна "Так" / "Ні".
//повертає значення boolean
// const shouldRenew = window.confirm('Чи будуете підтверджквати?');
// console.log(shouldRenew);


//МЕТОД PROMPT
//завжди повертає строку

// let quantity = prompt('Введіть число');
// quantity = Number(quantity);
// console.log(quantity);

//NUMBER() - конвертує строку в число

//======================================

//методи для роботи з числами:

//1.parseInt - покаже тільки ціле число 50, запинається на першому символі
// let elem = '50dd';
// const result = Number.parseInt(elem);
// console.log(result);

//2.parseFloat - покаже все число включно із крапкою 200.74, запинається на першому символі
// let elem = '200.74px';
// const result = Number.parseFloat(elem);
// console.log(result);

//3.toFixed - визивається на самому числі. виконує заокруглення числа
// const salary = 1300.924;
// console.log(salary.toFixed(2));


//Функція пошуку рандомного числа в певному діапазоні:
// function randomNumber(minValue, maxValue, roundValue) {
//     return Number((Math.random() * (maxValue - minValue) + minValue).toFixed(roundValue));
// }
// console.log(randomNumber(10, 30, 4))

//====================================
//Методи для роботи строк:

// toLoweCase

// slice() - повертає строку починаючи із заданого індекса. В дужках передається індекс
// const string = 'Доброго вечора, ми з України';
// const msg = string[0].toUpperCase() + string.slice(1).toLowerCase();
// console.log(msg);

//includes() - повертає boolean

//=====================================

//ОПЕРАТОРИ ПОРІВНЯННЯ

// const x1 = 10;
// const x2 = 30;
// const number = 5;

// const result = number >= x1 || number <= x2;

// console.log(result);

// const salary = 1700;

// if (salary <= 500) {
//     console.log('Рівень 1');
// }
//  if (salary > 500 && salary <= 1500) {
//     console.log('Рівень 2');
// }
// if (salary >1500 && salary <= 3000) {
//     console.log('Рівень 3');
// }

