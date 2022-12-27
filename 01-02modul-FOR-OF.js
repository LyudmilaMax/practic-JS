//========
// const message = 'zxcvbnmasdfghjk';

// let result = "";
// for (let i = 0; i < message.length; i += 1)
// {

//     if (i % 2 === 0){
//         result +=message[i].toUpperCase();
//     }
//     else {
//         result +=message[i].toLowerCase();

//     }
// }
// console.log(result);

//===========Вивести унікальні символи в строку:

// const number = "111122223333444455556666777788889999";

// let resultNumber = "";

// for (let i = 0; i < number.length; i += 1) {
//     if (!resultNumber.includes(number[i]))
//     {
//     resultNumber = resultNumber + number[i];

//     }

// }
// console.log(resultNumber);


//1. Створити змінну в яку записати значення від 0 до 9. Створити циклом
//2. Проходимося циклом по кожному элементу нашої строки
// Перевіряємо, чи є елемент строки в переліку числових значений (які ми отримали на кроці 1)

// let numberString = "";

// for (let i = 0; i <= 9; i += 1){
//     numberString += i;

// }
// console.log(numberString);

// const number = "f11s5566d6677778s888999s9";
// let resultNumber = "";

// for (let i = 0; i < number.length; i += 1) {
//      if (numberString.includes(number[i]))
//      {
//      resultNumber = resultNumber + number[i];

//     }

//  }
// console.log(resultNumber);

//1. Дві змінні із заданими значеннями с1, с2 = Потрібно вивести унікальні значення в одну змінну

// const C1 = '11123456';
// const C2 = '45678999';

// let result = '';

// for (let i = 0; i < C1.length; i += 1) {
//     // console.log(C1[i]);
//     if (!C2.includes(C1[i])) {
//         if (!result.includes(C1[i])) {
//             result = result + C1[i];
//         }
//     }
// }

// for (let i = 0; i < C2.length; i += 1) {
//     if (!C1.includes(C2[i])) {
//         if (!result.includes(C2[i])) {
//             result += C2[i];
//         }
//     }
// }
// console.log(result);
//3. перевырити чи э елемент цієї строки "c1" в рядку с2. Якщо є, то додаємо цей елемент в результуючу строку.

//============ В новій строці літери записати в зворотньому порядку=========
// const element = 'abcdertsg';

// let reverseElem = '';

// for (let i = element.length - 1; i >= 0; i -= 1){

//     reverseElem += element[i];
// }
// console.log(reverseElem);

//========== Зробити перші літери слів великими буквами=============

// let name1 = 'максименко сЕргей';
// let result = '';

// for (let i = 0; i < name1.length; i += 1) {
//     if (i == 0 || name1[i-1]==" ") {
//         result += name1[i].toUpperCase();
//     } else {
//         result += name1[i].toLowerCase();
//     }
// }
// console.log(result);

// for (let i = 0; i < name1.length; i += 1) {
//     if (i == name1.length-1) {
//         result += name1[i].toUpperCase();
//     } else {
//         result += name1[i]
//     }
// }
// console.log(result);

//================= Рядок з символами і числами розбити так,
//щоб був рядок тільки з символами, і рядок з числами ==============

// const string = 'abcde0f12345';

// let newSymbol = '';
// let newNumber = '';

// for (let i = 0; i < string.length; i += 1){
//     // console.log(string[i]);
//     if (!Number.isNaN(Number(string[i]))) {
//         newNumber += string[i];
//     }
//     else
//     {
//         newSymbol += string[i];
//     }

// }
// console.log(newSymbol);
// console.log(newNumber);

//======Як циклом знайти під яким індексом знаходиться пробіл в рядку =======

// const names = 'максименко сергій';

// for (let i = 0; i < names.length; i += 1){
//     // console.log(names[i]);
//     if (names[i] === ' ') {
//         console.log(i); 
//     }
// } 


