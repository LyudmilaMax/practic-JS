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

// const myName = 'name';

// console.log(obj);
// console.log(obj.name);
// console.log(obj['name']);
// console.log(obj[myName]);

//======Масив являється об'єктом, наприклад:==========
// const a = [1, 2, 3];
// a.hello = 'привіт';

// console.log(a);

//===Функція теж є обєктом, наприклад:=======
// function hello () {
//     console.log('hello');
// };

// hello.today = 'Monday';

// console.dir(hello);

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

//=====МЕТОДИ ОБ'ЄКТА:

// const playlist = {
//     name: 'Мій плейліст',
//     rating: 5,
//     tracks: ['трек-1', 'трек-2', 'трек-3'],
//     // trackCount: 3,

//     changeName(newName) {
//         console.log('this у changeName: ', this);

//         this.name = newName;
//     },

//     addTrack(track) {
//         this.tracks.push(track);
//     },

//     updateRating(newRating) {
//         this.rating = newRating;
//     },

//     getTrackCount() {
//         return this.tracks.length;
//     },
// };

// playlist.changeName('Нова назва');

// playlist.addTrack('новий трек');

// playlist.updateRating(4);

// console.log(playlist);

//=====Отримати значення властивості name і age в новому масиві:

// const users = [
//     { name: 'Lyuda', age: 34, city: 'Kyiv' },
//     { name: 'Olya', age: 25, city: 'Kyiv' },
//     { name: 'Ira', age: 40, city: 'Kyiv' },
//     { name: 'Tanya', age: 10, city: 'Kyiv' },
// ];

// function getAllUsers (allUsers) {

//     const newArrayUsers = [];
//     const allAge = [];

//     for (const user of allUsers) {
//         console.log(user.name);
//         newArrayUsers.push(user.name.toUpperCase());
//         allAge.push(user.age);
//     }

//     console.log(newArrayUsers);
//     console.log(allAge);
// }
// console.log(getAllUsers(users));

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

// const a = { a: 1, b: 2 };

// const b = { a: 0, b: 2, c:5 };

// const c = Object.assign(a, b);

// console.log(a===c)

// console.log(a[0]);
// console.log(b[0]);
// console.log(a[0] === b[0]);

//====ОПЕРАЦІЯ REST - збір/ Забираємо якусь інформацію в локальні змінні деструктуризації, а все інше записуєш в змінну через збір rest===========

// const user = {
//     name: 'Maximenko Lyudmila',
//     age: 34,
//     location: {
//         city: 'Kyiv',
//         street: 'Chavdar',
//     }
// }

// const { name, age, ...restLocation } = user;

// console.log(name, age);
// console.log(restLocation);

//--================Створюємо корзинку товарів:

// const cart = {
//     items: [],
//     // Функція getItems  повертає масив товарів
//     getItems() {
//         return this.items;
//     },
//     //Додаємо товари в масив
//     add(product) {
// console.table(this.items); 
//         for (const item of this.items) {
            
//             if (item.name === product.name) {
//                 item.quantity += 1;
//                 return;
//             }
//         }
//         const newProduct = {
//             ...product,
//             quantity: 1,
//         }
//         this.items.push(newProduct);
//     },

//     // ====Видаляємо з корзини продукти
//     remove(productName) {
//         for (let i = 0; i < this.items.length; i += 1) {
//             const item = this.items[i];

//             if (productName === item.name) {
//                 console.log('Знайшли такий продукт', productName);
//                 console.log(i);

//                 this.items.splice(i, 1);
//             }
//         }

//         //Застосуємо деструктуризацію
//         //     const { items } = this;
//         //     for (let i = 0; i < items.length; i += 1) {
//         //         const {name} = items[i];

//         //         if (productName === name) {
//         //             console.log('Знайшли такий продукт', productName)
//         //             console.log(i)

//         //             items.splice(i, 1);
//         //         }
//         //   }
//     },

//     //==== Очищаємо повністю корзину
//     clear() {
//         this.items = [];
//     },

//     //====Рахує загальну суму всіх продуктів в корзині
//     countTotalPrice() {
//     //     console.log(this.items);
//     //    let total = 0;

//     //     for (const item of this.items) {
//     //         total += item.price;
//     //     }

//     //     return total;
//     // },

//      //Застосуємо деструктуризацію   
//         const { items } = this;

//         let total = 0;

//         for (const {price, quantity} of items) {
//             total += price * quantity;
//         }

//         return total;
//     },

//     increaseQuantity(productName) {},
//     decreaseQuantity(productName) {},
// };

// console.log(cart.getItems());

// cart.add({ name: 'mango', price: 50 });
// cart.add({ name: 'lemon', price: 60 });
// cart.add({ name: 'banan', price: 60 });
// cart.add({ name: 'kiwi', price: 100 });
// cart.add({ name: 'banan', price: 60 });
// cart.add({ name: 'kiwi', price: 100 });
// cart.add({ name: 'banan', price: 60 });
// cart.add({ name: 'kiwi', price: 100 });

// console.table(cart.getItems());

// console.log('Total: ', cart.countTotalPrice());

// cart.remove('kiwi');
// console.table(cart.getItems());

// cart.clear();
// console.log('Total: ', cart.countTotalPrice());
// console.log(cart.getItems());
