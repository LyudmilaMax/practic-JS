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