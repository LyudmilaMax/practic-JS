// class Car {

//     static AAA = 'AAA';
//     static logInfo(carObj) {
//         console.log('Car.logInfo -> carObj', carObj);
//     }

//     #model = 'test';
//     constructor({brand, price} = {}) {
//         console.log('виконується конструктор');
//         console.log(this);

//         this.brand = brand;
//         this.price = price;

//     }

//     changePrice(newPrice) {
//         this.price = newPrice;
//     }

//     updateBrand(newBrand) {
//         this.brand = newBrand;
//     }
// }

// console.dir(Car);

// const carInstance = new Car({
//     brand: 'AUDI',
//     price: 20000,
// });

// Car.logInfo(carInstance);
// console.log(Object.getPrototypeOf(carInstance));
// console.log(carInstance);

// let parent = {
//     name:"parent",
//     get() {
//         console.log("name : " + this.name);
//     }
// }

// let parent1 = Object.create(parent);
// parent1.dop = "11";

// let parent2 = Object.assign(parent1);
// //let parent2 = parent1;
// parent2.dop = "ff";
// parent2.dop2 = 'ss';
// parent1.dddd = "ssssssssssss";
// console.log(parent2);
// console.log(parent1);

// console.log(parent2==parent1);

//     let  counter1 = 0;

// class User {
//     static counter = 0;
//     static addUser() {
//         this.counter += 1;
//     }
//     bNotStatic = 0;

//     #age;
//     constructor(name, age) {
//         this.name = name;
//         this.#age = age;
//         counter1 += 1;
//          User.addUser();
//         //User.counter += 1;

//     }

//     get age() {
//         return this.#age;
//     }

//     addYear(year) {
//         if (year > -0) {
//             this.#age += year;
//         }
//     }
// }

// let user1 = new User('Max', 18);
// let user2 = new User('Max', 18);

// user1.bNotStatic = 10;
// user2.bNotStatic = 15;

// console.log(User.counter);
// console.log(counter1);

// class Student {

//     static countStudentsChangeFirstNme(students) {
//         return students.filter(student => {
//             return student.getOldFirstName().length !== 0
//         }).length;
//     }

//     #firstName;
//     #lastName;
//     #fatherName;
//     #year;

//     #oldFirsNames = [];
//     constructor({ firstName, lastName, fatherName, year } = {}) {
//         this.#firstName = firstName;
//         this.#lastName = lastName;
//         this.#fatherName = fatherName;
//         this.#year = year;
//     }

//     get firstName() {
//         return this.#firstName;
//     }

//     changeFirstName(newFirstName) {
//         this.#oldFirsNames.push(this.#firstName);
//         this.#firstName = newFirstName;
//     }

//     getOldFirstName() {
//         return [...this.#oldFirsNames];
//     }

//     getFullName() {
//         return `${this.#firstName} ${this.#lastName} ${this.#fatherName}`;
//     }

//     getShortName() {
//         return `${this.#firstName} ${this.#lastName[0]}.${this.#fatherName[0]}.`;
//     }

//     #getAge() {
//         return new Date().getFullYear() - this.#year;
//     }

//     get age() {
//         return this.#getAge();
//     }
// }

// console.log(new Date().getFullYear());

// const paramStudent1 = {
//     firstName: 'Goshyn',
//     lastName: 'Lyuda',
//     fatherName: 'Volodymyrivna',
//     year: 1988,
// };


// const paramStudent2 = {
//     firstName: 'Maximenko',
//     lastName: 'Sergey',
//     fatherName: 'Mykolayovych',
//     year: 1983,
// };

// let students = [
//     new Student(paramStudent1),
//     new Student(paramStudent2),
// ];

// console.table(students);
// students[0].changeFirstName('Ivanova');
// students[0].changeFirstName('Petrova');

// students[0].changeFirstName('Petrovasssssss');


// console.log(students[0].ge);


// for (const student of students) {
//     console.log(student.getShortName() + ' ' + student.age); 
// }
// console.log(Student.countStudentsChangeFirstNme(students));
