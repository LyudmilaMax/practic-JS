//=====Виконати рефакторинг коду за допомогою стрілочних функцій

// const each = (array, callback) => {
//     const newArr = [];
//     for (const el of array) {
//         newArr.push(callback(el));
//     }
//     return newArr;
// }

//====МЕТОД forEach - перебираючий метод масива. Існує тільки на масиві. Його не можна перервати, перебираэ масив повныстю.====

// const logItems = items => items.forEach(item => console.log(item));
// for (const item of items) {
//     console.log(item);
// }

// const result2 = items.forEach(function (item, index, array) {console.log(item)});
// console.log(logItems([1,2,3,4,5]))

//===== МЕТОД MAP поелементно перебирає масив і повертає новий масив такої ж самої довжини, оригінал не змінює

// const users = [
//     { name: 'Lyuda', age: 34, city: 'Kyiv' },
//     { name: 'Olya', age: 25, city: 'Lviv' },
//     { name: 'Ira', age: 40, city: 'Rivne' },
//     { name: 'Tanya', age: 10, city: 'Kovel' },
// ];

// const newUser = users.map(user => ({
//     ...user,
//     age: user.age + 1,
// }));

// console.log(newUser);

//const newUser2 = users.map(user => user.age >= 15 ? { ...user, age: user.age + 1, } : user);
//====2 варіант тернарника
// const newUser2 = users.map(user => ( { ...user, age: user.age + (user.age >= 15 ? 1 : 0)  } ));

// if (user.age >= 15) {
//     return {
//         ...user,
//         age: user.age + 1,
//     };
// } else {
//     return user;
// }
// });

// console.log(newUser2);

//====МЕТОД FILTER --- поелементно перебирає масив. Повертає новий масив (з елементами або пустий). Повертає у новий масив елементи які задовільнили певну умову колбек функцї

// const users = [
//     { name: 'Lyuda1', age: 34, city: 'Kyiv' },
//     { name: 'Olya', age: 25, city: 'Lviv' },
//     { name: 'Ira', age: 40, city: 'Rivne' },
//     { name: 'Tanya', age: 10, city: 'Kovel' },
// ];

// const newUsers = users.filter(user => user.age >= 18);

// console.log(newUsers);

//===МЕТОД FIND - -----знаходить один унікальний елемент в колекції. Повертає елемент масиву, який підійшов під залану умову. Якщо умова не виконаэться, то поверне undefind

//===МЕТОД EVERY - -----поелементно перебирає оригінальний масив, повертає true, якщо всі елементи масиву задовільняють умову
// const userAge = users.every(user => user.age >= 11);

// console.log(userAge);

//===МЕТОД SOME - ---поелементно перебирає оригінальний масив, повертає true, якщо хоча б один елемент масиву задовільняє умову
// const userAge = users.filter(user => user.age >= 11).length !==0;

// console.log(userAge);

//==== МЕТОД REDUCE-- ----універсальний метод. поелементно перебирає елементи масива
//приймає колбекфункцію, яка в свою чергу має два параметра, та початкове значення (напр. 0), з чого наш акумулятор має рахувати

// const numbers = [5, 10, 15, 20];
// const total = numbers.reduce((totalSum, number) => {
//     return totalSum + number;
// }, 0);

// console.log(total);

// const users = [
//     { name: 'Lyuda1', age: 34, city: 'Kyiv' },
//     { name: 'Olya', age: 25, city: 'Lviv' },
//     { name: 'Ira', age: 40, city: 'Rivne' },
//     { name: 'Tanya', age: 10, city: 'Kovel' },
// ];

// const totalAge = users.reduce((total, user) => {
//     return total + user.age;
// }, 0)

// console.log(totalAge);

// const salary = {
//     mango: 50,
//     poly: 100,
//     kiwi: 50,
// }

// const totalSalary = Object.values(salary).reduce((total, value) =>  total +value, 0,)
// console.log(totalSalary);

//=======приклад з reduce

// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 1, tags: ['html', 'css'] },
//     { id: '002', likes: 10, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 15, tags: ['css', 'react'] },
//     { id: '004', likes: 8, tags: ['js', 'nodejs', 'react'] },
// ];

// const allTags = tweets.reduce((tags, tweet) => {
//     return [...tags, ...tweet.tags];
//     // tags.push(...tweet.tags);
//     // return tags;
// }, []);

// console.log(allTags);

// const tagsStats = allTags.reduce((acc, tag) => {
//     console.log(tag);
//     return
// },

// {});

//===МЕТОД SORT===== змінює оригінальний масив/ Сортує по зростанню (від меншого до більшого). Приводить елементи до строки і сортує по Unicode.
// Може приймати колбекфункцію, яка приймає два параметра (поточний елемент і наступний елемент)

// const numbers = [1, 5, 8, 2, 3];
// numbers.sort();

// console.log(numbers);

/////////////
// const tweets = [
//     { id: '000', likes: 5, tags: ['js', 'nodejs'] },
//     { id: '001', likes: 1, tags: ['html', 'css'] },
//     { id: '002', likes: 10, tags: ['html', 'js', 'nodejs'] },
//     { id: '003', likes: 15, tags: ['css', 'react'] },
//     { id: '004', likes: 8, tags: ['js', 'nodejs', 'react'] },
// ];

// const sortedByBestLikes = [...tweets].sort((prevLikes, nextLikes) => {
//     return prevLikes.likes - nextLikes.likes;
// });

// console.table(sortedByBestLikes);

//=====МЕТОД FLAT======== розгладжує масив до вказаної глибини. За замовчуванням глибина 1.

// const array = [1, 2, [4, [5]], [6, [8, 9, 10, [20]]]]

// console.log(array.flat(3));

// //====МЕТОД FlatMAP

// console.log(_)

// const objC = { z: 5 };

// const objB = Object.create(objC);

// console.log(objC);
// console.log(objB.hasOwnProperty('o'));

// const a = {
//     name: 'AUDI',
//     year: 2015,
// };
// const b = {
//     name: 'BMW',
//     year: 2020,
// };

// const c = {
//     name: 'NISSAN',
//     year: 2010,
// };



// cars.push(a, b, c);

// cole.onslog(cars)


// const Car = function (name, year) {
//     this.name = name;
//     this.year = year;
// };

// const myCar = new Car('MAZDA', 2018);
// const myCar2 = new Car('NISSAN', 2020);
// const myCar3 = new Car('AUDI', 2015);

// const cars = [myCar, myCar2, myCar3];

// console.log(cars);

