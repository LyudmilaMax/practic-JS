//////======Написати функцію, яка визначає остачу від ділення========

// const modResult = function (x, y) {
//     const result = x % y;
//     return result;
// };

// let resul = modResult(9, 2);
// console.log('Остаток від ділення', modResult(9, 2));

//////====Функція, яка показує рандомне число в певному діапазоні======

// const randomValue = function (minValue, maxValue) {
//     return Math.random() *(maxValue - minValue) + minValue;
// };

/////==== Функція, що повертає суму чисел=============

// const nameNumbers = function (numbers) {
//     console.log(numbers);

//     let totalSumNumbers = 0;

//     for (const number of numbers) {
//         totalSumNumbers += number;
//     }

//     return totalSumNumbers;
// };

// console.log(nameNumbers([10, 10, 10, 50, 20]));
// console.log(nameNumbers([2, 3, 4, 52, 63, 10]));

/////=====Функція пошука логіна в масиві=======

// const nameLogins = ['maximenko', 'goshyn', 'ivanov', 'popov'];

// const findLogin = function (logins, loginToFind) {
// for (const login of logins) {
//     if (login === loginToFind) {
//         return `Користувач з логіном ${loginToFind} знайдений`;
//     }
//     return `Користувач з логіном ${loginToFind} не знайдений`;
// }
//===запис через Тернарний оператор=====
// return logins.includes(loginToFind)
//     ? `Користувач з логіном ${loginToFind} знайдений`
//     : `Користувач з логіном ${loginToFind} не знайдений`;
//===============================================
// };

// console.log(findLogin(nameLogins, 'maximenko'));
// console.log(findLogin(nameLogins, 'goshynggg'));
// console.log(findLogin(nameLogins, 'ivanoggv'));
// console.log(findLogin(nameLogins, 'popov'));

////======= Функція, яка знаходить саме найменше число=====

// const findSmallestNumber = function (numbers) {
//     let smallesNumber = numbers[0];
//     for (const number of numbers) {
//         if (number < smallesNumber) {
//             smallesNumber = number;
//         }
//     }
//     return smallesNumber;
// };

// console.log(findSmallestNumber([9, 4, 8, 25, 50, 100, 3]));
// console.log(findSmallestNumber([45, 90, 25, 10, 47, -2]));

////======== Функція, яка змінює букви великі-маленькі навпаки

// const changeLetters = function (letters) {
//     let invertedString = '';
//     for (const letter of letters) {
//         if (letter === letter.toUpperCase()) {
//             invertedString += letter.toLowerCase();
//         } else {
//            invertedString += letter.toUpperCase();
//     }

//     }
//    return invertedString;

// }

// console.log(changeLetters('AAbbCC'));
// console.log(changeLetters('HeLlO'));

//=====Функція, яка змінює перші літери слів на великі букви====

// const nameLetters = 'максименко людмила володимирівна hello';

// function changeFirstLetters (letters){
//     let changeLetters = '';

//     for (let i = 0; i < nameLetters.length; i += 1){
//         if (i === 0 || nameLetters[i - 1] === " ") {
//             changeLetters += nameLetters[i].toUpperCase();
//         } else {
//             changeLetters += nameLetters[i].toLowerCase();
//         }
//     }

// return changeLetters;
// }

// console.log(changeFirstLetters(nameLetters));

//===== Функція, яка повертає рядок починаючи з кінця ======

// const stringForChange = '123456789gfgffee';

// function reverseToString(string) {
//     let reverseString = '';

//     for (let i = stringForChange.length - 1; i >= 0; i -= 1){
//         reverseString += stringForChange[i];
//     }
// return reverseString;
// }

// console.log(reverseToString(stringForChange));

//========Функція пошуку під яким індексом знаходиться пробіл і вивести повідомлення " пробіл є"/"пробілу немає"

//====Написати функцію, яка приймає два масива, і повертає новий масив спільних елементів цих двох масивів=====
// function sameElement(array1, array2) {

//     const newArray = [];
//     for (const element of array1) {
//         console.log(element);
//         if (array2.includes(element)) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log(sameElement([1, 2, 3, 4, 5, 6], [9, 8, 7, 6, 5, 4]));

//====Написати функцію, яка приймає два масива, і повертає новий масив різних елементів цих двох масивів=====

// function differentElement(array1, array2) {
//     const newArray = [];

//     for (const element of array1) {
//         if (!array2.includes(element)) {
//             newArray.push(element);
//         }
//     }

//     for (const element of array2) {
//         if (!array1.includes(element)) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log(differentElement([1, 2, 3, 4, 5, 6], [9, 8, 7, 6, 5, 4]));

//====Написати функцію, яка приймає два масива, і повертає новий масив спільних елементів цих двох масивів=====
// function sameElement(array1, array2) {
//     const newArray = [];
//     for (const element1 of array1) {
//         // console.log(element1);
//         for (const element2 of array2) {
//             if (element1 === element2) {
//                 newArray.push(element1);
//                 break;
//             }
//         }
//         // if (array2.includes(element)) {
//         //     newArray.push(element);
//         // }
//     }
//     return newArray;
// }

// console.log(sameElement([1, 2, 3, 4, 5, 6], [9, 8, 7, 6, 5, 4]));

//====== Написати функцію includes=======

// function userIncludes(array, valueForFind) {
//     for (const element of array) {
//         if (element === valueForFind) {
//             return true;
//         }
//     }
//     return false;
// }

// console.log(userIncludes([1, 2, 3, 4, 5], 5));
// console.log(userIncludes([1, 2, 3, 4, 5], 10));

// function sameElement(array1, array2) {
//     const newArray = [];
//     for (const element1 of array1) {
//         // console.log(element1);
//         if (userIncludes(array2, element1)) {
//             newArray.push(element1);
//         }
//     }
//     return newArray;
// }

// console.log(sameElement([1, 2, 3, 4, 5, 6], [9, 8, 7, 6, 5, 4]));

//====Написати функцію, яка приймає два масива, і повертає новий масив спільних елементів цих двох масивів=====
// function sameElement(array1, array2) {

//     const newArray = [];
//     for (const element of array1) {
//         console.log(element);
//         if (array2.includes(element)) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log(sameElement([1, 2, 3, 4, 5, 6], [9, 8, 7, 6, 5, 4]));

//====Написати функцію, яка приймає два масива, і повертає новий масив різних елементів цих двох масивів=====

// function differentElement(array1, array2) {
//     const newArray = [];

//     for (const element of array1) {
//         if (!array2.includes(element)) {
//             newArray.push(element);
//         }
//     }

//     for (const element of array2) {
//         if (!array1.includes(element)) {
//             newArray.push(element);
//         }
//     }
//     return newArray;
// }

// console.log(differentElement([1, 2, 3, 4, 5, 6], [9, 8, 7, 6, 5, 4]));

// function conparArray(array1, array2, isSameElement) {
//     const newArray = [];

//     if (isSameElement) {
//       for (const element of array1) {
//         //   console.log(element);
//           if (array2.includes(element)) {
//               newArray.push(element);
//           }
//       }
//     } else {
//         for (const element of array1) {
//             if (!array2.includes(element)) {
//                 newArray.push(element);
//             }
//         }

//         for (const element of array2) {
//             if (!array1.includes(element)) {
//                 newArray.push(element);
//             }
//         }
//     }
//     return newArray;
// }

// console.log(conparArray([1, 2, 3, 4, 5, 6], [5, 6, 7, 8, 9], true));
// console.log(conparArray([1, 2, 3, 4, 5, 6], [5, 6, 7, 8, 9], false));

//===Функція, яка порівнює два масива==========

// const array1 = [1, 2, 3, 2];
// const array2 = [1, 2, 3, 2];


// console.log(array1 === array2);

// function comparArray(array1, array2) {
//     for (const element1 of array1) {
//         let index = array2.indexOf(element1);
//         if (index >= 0) {
//             array2.splice(index, 1);
//         } else {
//             return false;
//         }
//     }

//     return array2.length === 0;
// }

// console.log(comparArray(array1, array2));


//===Функція, яка порівнює два масива 2.варіант (метод sort())==========

// console.log(array1 === array2);

// function comparArray(array1, array2, d) {
//     d = "222222";
//     array1.sort();
//     array2.sort();
//     for (let i = 0; i <= Math.max(array1.length, array2.length) - 1;i++  )
//     {
//         if (array1[i] !== array2[i])
//         {
//             return false;
//        }
//     }
//     return true;
// }

//  const array1 = [3, 2, 1];
// const array2 = [1, 2, 2, 3];
 
// console.log(array1);
// let d = "11";
// console.log(comparArray(array1, array2, d));
// console.log(d);
//  console.log(array1);

