// function sayHi() {
//     console.log('Hello, this is my first function!');
// }

// console.log(sayHi());

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFree) {
//     const message = `You ordered droids worth ${orderedQuantity*pricePerDroid+deliveryFree} credits. Delivery (${deliveryFree} credits) is included in total price.`;
//     return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// console.log(makeOrderMessage(4, 300, 100));

// function isAdult(age) {
//     const passed = age >= 18;
//     return passed;
// }

// console.log(isAdult(10));

// function isValidPassword(password) {
//     const SAVED_PASSWORD = 'kiwirul3z';
//     let isMatch = SAVED_PASSWORD === password;
//     return isMatch;
// }

// console.log(isValidPassword('kiwirul3z'));

//======Ключ об'єкта======
// const obj = {
//     name: 'Lyuda',
//     age: 34,
// }

// obj.lastName = 'Maksymenko';

// console.log(obj);

// const keys = Object.keys(obj)
// console.log(keys);
// for (const key of keys) {
//     console.log(`${key} : ${obj[key]}`);
// }

//=====метод Object.values=======
//Є об'єкт де зберігаються зарплати нашої команди. Напиши код для підсумування всіх зарплат та
// збережіть результат у змінній sum.Якщо об'єкт порожній, то має вийти нуль.
// const salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
// };
// let sum = 0;

// const values = Object.values(salaries);

// for (const value of values) {
//     console.log(value);
//     sum += value;
// }
// console.log(sum);

//===Масив об'єктів
//===Напишіть функцію, яка приймає масив об'єктів та рядок з назвою каменю.
//Функція рахує та повертає загальну вартість каміння з таким ім'ям, ціною та кількістю об'єкта
// const stones = [
//     {
//         name: 'Смарагд',
//         price: 1300,
//         quantity: 4,
//     },
//     {
//         name: 'Діаманд',
//         price: 2700,
//         quantity: 3,
//     },
//     {
//         name: 'Сапфір',
//         price: 400,
//         quantity: 7,
//     },
//     {
//         name: 'Аквамарин',
//         price: 200,
//         quantity: 2,
//     },
// ];

// function calcTotalPrice(stones, stoneName) {
//     for (const stone of stones) {
//         if (stone.name === stoneName) {
//             return stone.price * stone.quantity;
//         }
//     }
// }

// const result = calcTotalPrice(stones, 'Сапфір');
// console.log(result);
