// const numbers = [1, 2, 3, 4, 5];
// let totalSum = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     console.log(numbers[i])
//     totalSum += numbers[i];
// }
//=======аналог FOR OF (якщо елемент не змінюємо)=======
// for (const number of numbers) {
//     totalSum += number;
// }

// console.log('Сума: ', totalSum);

//========== Порахувати суму парних чисел=====

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let total = 0;

// for (let i = 0; i < numbers.length; i += 1){
//     if (numbers[i] % 2 === 0) {
//         console.log('Парне число')

//         total += numbers[i];
//     }

// }
// console.log(total);
//=======аналог запису через FOR OF=====================
// for (const number of numbers) {
//     // console.log(number);
//     if (number % 2 === 0) {
//         console.log(`${number} - парне число`)
//         total += number;
//     }
// }
// console.log('total:', total);
//=======аналог запису через FOR OF із застосуванням CONTINUE======
// for (const number of numbers) {
//     // console.log(number);
//     if (number % 2 !== 0) {
//         console.log('Це потрбно пропустити', number)
//         continue;
//     }
//     console.log(`${number} - парне число`)
//     total += number;
// }
// console.log('total:', total);

//=======Пошук логіна====

// const nameLogins = ['maximenko', 'goshyn', 'ivanov', 'popov'];
// const loginToFind = 'ivanov';
// let message = '';

// for (let i = 0; i < nameLogins.length; i += 1){
//     const login = nameLogins[i];

//     if (login === loginToFind) {
//         message = `Користувач з логіном ${loginToFind} знайдений`;
//         break;
//     }
//         message = `Користувач з логіном ${loginToFind} знайдений`;

// }
// console.log(message);

//========== ТЕРНАРНИЙ ОПЕРАТОР (по пошуку логіна (див. попередню задачу))====

// const message = nameLogins.includes(loginToFind)
//     ? `Користувач з логіном ${loginToFind} знайдений`
//     : `Користувач з логіном ${loginToFind} не знайдений`;

// console.log(message);

/////// INCLUDES - повертає завжди true || false (boolean)

//=====Під яким індексом знаходиться пробіл і вивести повідомлення "пробіл є, "пробілу немає
// const names = 'максименко сергій';
// let messageIndex = '';

// for (let i = 0; i < names.length; i += 1) {
//     console.log(names[i]);

//     if (names[i] === ' ') {
//         messageIndex = `пробіл під індексом ${i}`;
//     }
// }

// if (messageIndex == '') {
//     messageIndex = 'Нет';
// }
// console.log(messageIndex);
//=============Пошук самого найменшого числа в масиві, при умові, що числа не повторюються===============

// const numbers = [10, 55, 15, 20, 42, 3];
// let smallestNumber;

// for (const number of numbers) {
//     if (number < smallestNumber || smallestNumber==undefined) {
//         smallestNumber = number;
//     }
// }
// console.log('Найменше число: ', smallestNumber);

//========Пошук найбільшого числа======
// const numbers = [10, 55, 15, 20, 42, 3];
// let biggestNumber = 0;

// for (const number of numbers) {
//     if (number > biggestNumber) {
//         biggestNumber = number;
//     }
// }
// console.log('Найбільше число: ', biggestNumber);
//============================================

// const friends = ['A', 'B', 'C', 'D'];
// let concatString = '';

// for (const friend of friends) {
//     console.log(friend);
//     concatString += friend +'-';
// }

// for (let i = 0; i < friends.length; i += 1) {
// console.log(friends[i]);
// if (i === 0) {
//  console.log(`Це перша ітерація - ${friends[i]}`);
// }
// if (i === friends.length - 1) {
//  console.log(`Це остання ітерація - ${friends[i]}`);
// }
//     console.log(friends[i]);

//     concatString += friends[i];

//     if (i !== friends.length - 1) {
//         concatString += '-';

//     }
//     console.log('Ітерація ' + i + ' ' + concatString);

// }

// console.log(concatString);

//====== метод SLICE вирізає символи =====
// const friends = ['A', 'B', 'C', 'D'];
// let concatString = '';

// for (const friend of friends) {
//     console.log(friend);
//     concatString += friend + '-';
// }

// concatString = concatString.slice(0, concatString.length - 1);

// console.log(concatString);
//==================================
//======== метод JOIN  викликається на масиві, зшиває елементи масива в строку====
// const friends = ['A', 'B', 'C', 'D'];
// const string = friends.join('-');
// console.log(string);

//====== метод SPLIT розбиває строку в масив поелементно======
// ===зробити букви протилежними маленькі букви зробити великими, а великі -маленькими
// const string = 'JavaScript';
// const letters = string.split('');
// let newString = '';
// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);
//     if (letter === letter.toLocaleLowerCase()) {
//         console.log('Ця буква в нижньому регістрі', letter);
//         newString += letter.toUpperCase();
//     } else {
//         console.log('Ця буква у верхньому регістрі', letter);
//         newString += letter.toLowerCase();
//          }
// }
// console.log(newString);
//=====можна попередню задачу записати через ТЕРНАРНИЙ ОПЕРАТОР=====
// const string = 'JavaScript';
// const letters = string.split('');
// let newString = '';
// console.log(letters);

// for (const letter of letters) {
//     console.log(letter);

//     newString +=
//         letter === letter.toLocaleLowerCase() ? letter.toUpperCase() : letter.toLowerCase();
// }
// console.log(newString);

//=======метод CONCAT - зшиває різні масиви в один, і повертає копію нового масиву.
// const array1 = [1, 2, 3];
// const array2 = [1, 2, 3];
// const newArray = array1.concat(array2);

// console.log(newArray);



