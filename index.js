
// let x = 15;
// let y = 10;

// function foo(a, y) {
//   x = 99
//   console.log (x);
// }

// foo(x, y)
// console.log ('x', x);

// class Car {
//   // Change code below this line
// connstructor(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }


//   // Change code above this line
// }

// const audi = new Car("Audi", "Q3", 36000);
// console.log(audi);

// const bmw = new Car("BMW", "X5", 58900);
// console.log(bmw);

// const nissan = new Car("Nissan","Murano", 31700);
// console.log(nissan);
// const tweets = [
//   { id: "000", likes: 5, tags: ["js", "nodejs"] },
//   { id: "001", likes: 2, tags: ["html", "css"] },
//   { id: "002", likes: 17, tags: ["html", "js", "nodejs"] },
//   { id: "003", likes: 8, tags: ["css", "react"] },
//   { id: "004", likes: 0, tags: ["js", "nodejs", "react"] },
// ];


// let arrayTags =tweets.reduce((tagsAll, tweet) => {
//   tagsAll.push(...tweet.tags);
//   return tagsAll;
// }
//   , []);

// const funcGetTags = tweetsParam => {
//   return tweetsParam.reduce ((tagsAll, tweet) => {
//   tagsAll.push(...tweet.tags);
//   return tagsAll;
// }
//   , []);
// }

// function funcGetTags1(tweetsParam)
// {
//   return tweetsParam.reduce((tagsAll, tweet) =>
//   {
//     tagsAll.push(...tweet.tags);
//     return tagsAll;
//   }
//   , []);
// }
// console.log(funcGetTags(tweets));

// let arrayTags = funcGetTags(tweets);

// let objectTags = arrayTags.reduce((objectTagsParam, tag) => {
//   if (objectTagsParam.hasOwnProperty(tag)) {
 
//     objectTagsParam[tag] += 1;
//   } else {
//     objectTagsParam[tag] = 1;
//   }
  
//   return objectTagsParam;

// }, {});



// // for (const tweet of tweets) {

// //     arrayTags.push(...tweet.tags);

// // }


// // let objectTags = {};

// // console.log(objectTags);
// // for (const tag of arrayTags) {
// //   if (objectTags.hasOwnProperty(tag)) {
// //     objectTags[tag] += 1;
// //   } else {
// //     objectTags[tag] = 1;
// //   }
  
// // }
// console.log(objectTags);

// Винесемо callback-функцію окремо, а в reducе передамо посилання на неї.
// Це стандартна практика, якщо callback-функція досить велика.

// Якщо в об'єкті-акумуляторі acc відсутня своя властивість з ключем tag,
// то створюємо її і записуємо їй значення 0.
// В іншому випадку збільшуємо значення на 1.

// Початкове значення акумулятора - це порожній об'єкт {}

// const players = {
//   mango: 1270,
//   poly: 468,
//   ajax: 710,
//   kiwi: 244
// };
// const playtimes = Object.values(players); // [1270, 468, 710, 244]
// // Change code below this line

// const totalPlayTime = playtimes.reduce((total, value) => {
//   return total + value;}, 0);

// // Change code above this line
// const averagePlayTime = totalPlayTime / playtimes.length;

// console.log(totalPlayTime);
 
// const firstArray = [26, 94, 36, 18];
// const secondArray = [17, 61, 23];
// const thirdArray = [17, 26, 94, 61, 36, 23, 18];
// // Change code below this line

// const eachElementInFirstIsEven = firstArray.every(value => value % 2 === 0);
// const eachElementInFirstIsOdd = firstArray.every(value => value % 2 !== 0);

// const eachElementInSecondIsEven = secondArray.every(value => value % 2 === 0);
// const eachElementInSecondIsOdd = secondArray.every(value => value % 2 !== 0);

// const eachElementInThirdIsEven = thirdArray.every(value => value % 2 === 0);
// const eachElementInThirdIsOdd = thirdArray.every(value => value % 2 !== 0);

// console.log(eachElementInFirstIsEven);
// console.log(eachElementInFirstIsOdd);
// console.log(eachElementInSecondIsEven);
// console.log(eachElementInSecondIsOdd);
// console.log(eachElementInThirdIsEven);
// console.log(eachElementInThirdIsOdd);

// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     rating: 8.38,
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     rating: 8.51,
//   },
//   {
//     title: "The Dream of a Ridiculous Man",
//     author: "Fyodor Dostoevsky",
//     rating: 7.75,
//   },
//   { title: "Redder Than Blood", author: "Tanith Lee", rating: 7.94 },
//   { title: "Enemy of God", author: "Bernard Cornwell", rating: 8.67 },
// ];

// const MIN_RATING = 8;
// const AUTHOR = "Bernard Cornwell";
// // Change code below this line

// const topRatedBooks = books.filter(book => book.rating >= MIN_RATING);
// const booksByAuthor = books.filter(book => book.author === AUTHOR);

// console.log(topRatedBooks);
// console.log(booksByAuthor);


// Створення масиву унікальних значень методом filter


// const books = [
//   {
//     title: "The Last Kingdom",
//     author: "Bernard Cornwell",
//     genres: ["adventure", "history"],
//   },
//   {
//     title: "Beside Still Waters",
//     author: "Robert Sheckley",
//     genres: ["fiction", "mysticism"],
//   },
//   {
//     title: "Redder Than Blood",
//     author: "Tanith Lee",
//     genres: ["horror", "mysticism", "adventure"],
//   },
// ];
// // Change code below this line
// const allGenres = books.flatMap(book => book.genres);
// const uniqueGenres = allGenres.filter((genre, index, array) => array.indexOf(genre) === index
// );

// console.log(allGenres);
// console.log(uniqueGenres);
//--------------------------------------------

// метод Filter:

// // Масив парних і непарних чисел
// const numbers = [17, 24, 82, 61, 36, 18, 47, 52, 73];
// // Change code below this line

// const evenNumbers = numbers.filter(number => (number % 2 == 0));
// const oddNumbers = numbers.filter(number => (number % 2 != 0));

// console.log(evenNumbers);
// console.log(oddNumbers);





// const filter = function (array, test) {
//   const filteredArray = [];
// for (const el of array) {
//   console.log(el);
//   const passed = (test(el));

//   if (passed) {
//     filteredArray.push(el);
//   }
//   }
//   return filteredArray;
// };

//1. потрыбн передати функцыю
//2. функція отримує елемент масивую
//3. якщо елемент масиву задовідьняє якусь умову (елемент масиву має бути >=3), то буде тру, якщо не задовільняє, то буде фолс

// const callback1 = function (value) {
//   return value >= 3;
// }

// const result1 = filter([1, 2, 3, 4, 5,], callback1);

// console.log(result1);


// const callback2 = function (value) {
//   return value <= 4;
// } 
// const result2 = filter([1, 2, 3, 4, 5, 6, 7, 8], callback2);
// console.log(result2);


// const fruits = [
//   { name: 'apples', quantity: '200', isFresh: true },
//   { name: 'grapes', quantity: '150', isFresh: false },
//   { name: 'bananas', quantity: '100', isFresh: true },
// ];

// const getFruitsWithQuantity = function (fruit) { 
//   return fruit.quantity >= 120;
// }

// const result3 = filter(fruits, getFruitsWithQuantity);

// console.log(result3);

//Приклад, записуємо функцію у колбек (це функція відкладеного виклику)
// const fnA = function (message, callback) {
//   console.log(message)

//   console.log(callback);
//   callback();
// };


// const fnB = function () {
//   console.log("Це лог при виклику fnB");
// };

// fnA("Hello everybody", fnB);

//1.оголосили функцію fnB. ЇЇ передали як аргумент в fnA/
//2. В параметр callback записалась силка на функцію fnB. І відбуввся потім виклик цієї функції. (callback();)




//====Функції-колбек===== приклад:
//1 варіант (звичайний запис)

// console.log(getSumByMinAndMaxValueInArray([5, 3, 7, 10]));
// console.log(getDifByMinAndMaxValueInArray([5, 3, 7, 10]));
// console.log(getMultiByMinAndMaxValueInArray([5, 3, 7, 10]));

//console.log(getActionByMinAndMaxValueInArray([5, 3, 7, 10], '*' ));

// function getSumByMinAndMaxValueInArray(array) {
//   let result  =  0 ;
//   let minValue = Math.min(...array);
//   let maxValue = Math.max(...array);
//   result = minValue + maxValue;

//   return result;
// }

// function getDifByMinAndMaxValueInArray(array) {
//   let result =  0 ;
//   let minValue = Math.min(...array);
//   let maxValue = Math.max(...array);
//   result = maxValue - minValue;

//   return result;
// }

// function getMultiByMinAndMaxValueInArray(array) {
//   let result =  0 ;
//   let minValue = Math.min(...array);
//   let maxValue = Math.max(...array);
//   result = maxValue * minValue;

//   return result;
// }


// 2 варіант!!! колбек-функція

// console.log(getActionOptByMinAndMaxValueInArray([5, 3, 7, 10], getText));

// function getSum(minValue, maxValue)
// {
//   return minValue + maxValue;
// }

// function getText(minValue, maxValue)
// {
//   return `Миниманое значение:${minValue} Максимальное значение:${maxValue} и общая сумма ${getSum(minValue,maxValue)} `;
// }

// function getActionOptByMinAndMaxValueInArray(array, actionMinAndMax) {
//   let result =  0 ;
//   let minValue = Math.min(...array);
//   let maxValue = Math.max(...array);
 
//   result = actionMinAndMax(minValue, maxValue);

//   return result;
// }

// 3 варіант - жоливий запис, але не дуже

// function getActionByMinAndMaxValueInArray(array, tip) {
//   let result =  0 ;
//   let minValue = Math.min(...array);
//   let maxValue = Math.max(...array);
 
//   if (tip == "+")
//   {
//      result = maxValue + minValue;  
//   }
//   else if (tip == "-")
//   {
//      result = maxValue - minValue;  
//   }
  
//   else if (tip == "*")
//   {
//      result = maxValue * minValue;  
//   }

//   return result; 
// }

//====================







// console.log(addOverNum(10, [15, 20, 5]));

// function addOverNum(maxNumber, args) {
//   let total = 0;

//   for (const arg of args) {
//     if (arg > maxNumber) {
//       total += arg;
//     }
    
//   }

//   return total;
//   // Change code above this line
// }

// console.log(Calculate("+", 2,2,1,1));

// function Calculate(tip,...array)
// {

//   let total = tip == "+" ?  0 : 1;
//   for (const item of array) {
//     if (tip == "+")
//     {
//         total += item; 
//     }
//     else
//     {
//        total *= item;
//     }
     
//   }
//   return total;
// }

//let a = "11";

//let b = a+"__";

//a = "22";


//console.log(a);
//console.log(b);

//const temps = [14, -4, 25, 8, 11];

// Це точна, але незалежна копія масиву temps
//const copyOfTemps = temps;
//const copyOfTemps = [...temps];
//temps.push(222);

//console.log(copyOfTemps); // [14, -4, 25, 8, 11]

// console.log(add(12, 4, 11, 48));
// function add(...args) {
//   let totalAmountArgs = 0;

//   for (const value of args) {
//     totalAmountArgs += value;
//   }
//   return totalAmountArgs;
// }



// let paramObj = {text : "csc",fff : "dsds"}

// console.log(makeTask(paramObj));

// function makeTask(data) {

//   let newObject =  {
//     text : data.text
//   };


//   return newObject
//    };

// let d = makeTask({});
// console.log(d);

// function makeTask(data) {




//   const completed = false;
//   const category = "General";
//   const priority = "Normal";
//   // Change code below this line
//   let newObject = {
//     completed,
//     category ,
//     priority,
    
//   };
  

//     if (data.category != undefined) {
//     newObject.category = data.category;
//   };

//     if (data.priority != undefined) {
//     newObject.priority = data.priority;
//   };

//   if (data.text != undefined) {
//     newObject.text = data.text;
//   };

  

//   return newObject;
  // Change code above this line
// }




// const products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];

//  console.log(calculateTotalPrice("Radar"));

// function calculateTotalPrice(productName)
//   {
//     // Change code below this line
//   let totalAmount = 0;
//   for (const product of products)
//   {
//     if (product.name == productName)
//     {
//       let value = product.price * product.quantity;
//       totalAmount += value;
//     }
//   }

//     return totalAmount;
//     // Change code above this line
 
//   }

// let products = [
//   { name: "Radar", price: 1300, quantity: 4 },
//   { name: "Scanner", price: 2700, quantity: 3 },
//   { name: "Droid", price: 400, quantity: 7 },
//   { name: "Grip", price: 1200, quantity: 9 },
// ];
// console.log(getAllPropValues("name"));

// function getAllPropValues(propName) {
//   // Change code below this line
//   let resultArray = [];

//   for (const product of products)
//   {
//     let productKeys = Object.keys(product);
    
//     if (productKeys.includes(propName))
//     {
//         let value = product[propName];
//         resultArray.push(value);
//     }
    


    //      let value = product[propName];
    // resultArray.push(value);
    
    
     
  
//   }
  
//   return resultArray;
//   // Change code above this line
// }


// function getAllPropValues2(propName) {
//   // Change code below this line
//   let resultArray = [];

//    let productKeys = Object.keys(products[0]);
    
//     if (!productKeys.includes(propName))
//     {
//       return resultArray;
//    }
  
//   for (const product of products)
//   {
//     let productKeys = Object.keys(product);
    

//         let value = product[propName];
//         resultArray.push(value);

    


//     //      let value = product[propName];
//     // resultArray.push(value);
    
    
     
  
//   }
  
//   return resultArray;
//   // Change code above this line
// }

// function getAllPropValues1(propName) {
//   // Change code below this line

//   let resultArray = [];

 
//   for (const product of products) {
    
//     let value;
//     if (propName == "name")
//     {
//       value = product.name;
//     }
//     else if (propName == "price")
//     {
//       value = product.price;
//     }
//     else if (propName == "quantity")
//     {
//        value = product.quantity;

//     }

//     if (value != undefined)
//     {
//       resultArray.push(value);
//     }

 
//   }
//   return resultArray; 
  

//   // Change code above this line
// }


// const a = { x: 2, y: 5, c: 0 };
// const b = { x: 0, y: 20, c: 3 };

// const c = {
//   ...a,
  
//   ...b,
// }

// const defaultSettings = {
//   theme: "light",
//   shownotifications: true,
//   hideSidebar: false,
// };

// const userSettings = {
//   shownotifications: false,
//   hideSidebar: true,
// };

// const finalSettings = {
//   ...defaultSettings, ...userSettings
// }

// console.log(finalSettings);

// console.log(getEvenNumbers(2, 10));
// function getEvenNumbers(start, end) {
//    // Change code below this line
//   let evenNumbers = [];
//   for (i = start; i <= end; i += 1)
//   {
//     if (i % 2 === 0)
//     {
//       evenNumbers.push(i);
//     }
       
//   }

//   return evenNumbers;
//     // Change code above this line
//   }


// console.log(getCommonElements([1, 2, 3, 4, 5, 6], [2, 3, 4, 9]));
// function getCommonElements(array1, array2) {
//   // Change code below this line
//   let newArray = [];
  

//   for (const value of array1)
//   {
//     if (!array2.includes(value))
//     {
//       newArray.push(value);
//     }
//   }

//   for (const value of array2)
//   {
//     if (!array1.includes(value))
//     {
//       newArray.push(value);
//     }
//   }

//   return newArray;
//  // Change code above this line
// }
    
//   }
// console.log(filterArray([2,3,10,3,7,5],4));
// function filterArray(numbers, value)
// {
//   let resultValues = [];

//    // Change code below this line
//   for (const i of numbers)
//   {
    
//     if (i > value)
//     {
//       resultValues.push(i);
//     } 
//   }
//   return resultValues;
//   }

  // for (i = 0; i < numbers.length; i += 1)
  // {
  //   if (numbers[i] > value)
  //   {
  //     resultValues.push(numbers[i]); 
  //   }
  // }
  // return totalSum;

  // Change code above this line
// }


// console.log(createArrayOfNumbers(4, 7));

// function createArrayOfNumbers(min, max)
// {
//    const numbers = [];
//    // Change code below this line
//    for (i = min; i <= max; i += 1)
//    {
//      numbers.push(i);
//    }   
//    // Change code above this line
//    return numbers;
// }


//Знайти в рядку найменше слово або найбільше слово"

// let text = "1234 abcd 6789 3d LLL";

// console.log(findLongestWord(text));


// function findLongestWord(string) {
//   // Change code below this line
//   const arrayWords = string.split(" ");
//   let minWord ="";
//   for (i = 0; i < arrayWords.length; i += 1)
//   {
//      let currentWord = arrayWords[i];
//      if (currentWord.length < minWord.length || minWord =="")
//      {
//         minWord = currentWord;
//      }
//   }
//   return minWord;


//   // Change code above this line
// }

// =========найменше значення===========

// function findLongestWord(string) {
//   // Change code below this line
//   const arrayWords = string.split(" ");
//   let minWord = arrayWords[0];
//   for (i = 1; i < arrayWords.length; i += 1) {
//     let currentWord = arrayWords[i];
//     if (currentWord.length < minWord.length) {
//       minWord = currentWord;
//     }
//   }
//   return minWord;
// }



// console.log(splitMessage("ЦASD ІЦDASІDSDІD2121І3433", "І"));


// function splitMessage(message, delimiter) {
//   let words;
//   let newWords=[];
//   let ii;

//   // Change code below this line
//   words = message.split(delimiter);
//   for (i = 0; i < words.length - 1; i += 1){
    
//    newWords.push(words[i].slice(0, 2));

//   }
//   ii = 7;
//   // Change code above this line
//   return ii;
// }


// let ss = getExtremeElements("123");
// console.log(ss);

// function getExtremeElements( message) {

  
//   return message.indexOf(3);

//  }  
  
  
//   return resultArray;
//   // Change code above this line
// }



//  let  rrr= getExtremeElements(["apple", "alur", "pear", "arange"]);
//  console.log(rrr);


// function getExtremeElements(array) {
//   // Change code below this line
//   // let resultArray = [array[0], array[array.length-1]];
  
//   let resultArray = [];
    
//   for (i = 0; i < array.length; i += 1) {
//     valueAr = array[i];
   
//     if (valueAr.charAt(0) == "a") {
//       resultArray.push(array[i]);

//     }
//   }
//   return resultArray;
// }
  
//   return resultArray;
//   // Change code above this line
// }

//====================================

// const fruits = ["apple", "plum", "pear", "orange"];

// // Change code below this line
// const firstElement = fruits[0];
// const secondElement = fruits[1];
// const lastElement = fruits[fruits.length-1];

// console.log(firstElement);
// console.log(secondElement);
// console.log(lastElement);

// const friends = ["Mango", "Kiwi", "Polly", "Ajax"];

// for (const friend of friends) {
//   console.log(friend);
// }

// const min = 6;
// const max = 13; 
// let total = 0;

// const option = 0;
// let message = "";

// switch (option) {
//   case 1:
//     message = "забрати товар в офісі";
//     break;
  
//   case 2:
//     message = "Курьєр доставить вам заказ";
//     break;
  
//    case 3:
//     message = "Посилка буде відправлена сьогодні";
//     break;
  
//   default:
//    message = "Менеджер передзвонить"; 
  
// }

// console.log(message);

// console.log(price);

// let FullName = "Максименко С.М.";

// console.log();

// let startIndexSerch = FullName.indexOf(" ")+1;

// //let FirstName = FullName.slice(startIndexSerch, startIndexSerch + 1);
// let FirstName = FullName.charAt(startIndexSerch);
// console.log(FirstName);



// const ss = isAdult();
// console.log(ss);

// function isAdult(age) {
//   // Change code below this line
//   const passed = age >= 18;
    
//       // Change code above this line
//     return passed;
    

// }

// function makeTransaction(pricePerDroid, orderedQuantity, customerCredits) {
//   let message;
//   // Change code below this line
// const totalPrice = pricePerDroid*orderedQuantity-customerCredits;

//   if (totalPrice > customerCredits) {
//     message = "Insufficient funds!";
//   } else {
//     message = "You ordered <число> droids, you have <число> credits left";
//   }
//   // Change code above this line
//   return message;
// }


// const message = "ABCDEFddd";

// console.log(message.slice(1,-2));


//const maxLength = 16;

//  let result;
  // Change code below this line
//if (message.length <= maxLength) {
//  result = message;
//}
  // } else {
  //   result = message.slice(0, maxLength)+"...";
  // }
//console.log(result);


// result = (message.length <= maxLength) ? message : message.slice(0, maxLength)+"...";