// Домашня робота (Модуль №21)

//***1***
// Робота зі змінними
// Оголосіть дві змінні: name та city.
// Присвойте значення "Іван" змінній name.
// Скопіюйте значення зі змінної name в city.
// Виведіть значення змінної city, використовуючи функцію console.log (яка
// повинна показати “Іван”).

// let name = "Іван";
// let city = "Kyiv";
// city = name;
// console.log(name);
//---------------------------------------------------------------------------------------------//

//****2***
//Який буде результат виконання скрипта?
//let name = "Olga";
//console.log(`привіт ${1}`); // привіт 1
//console.log(`привіт ${"name"}`); // привіт name
//console.log(`привіт ${name}`); // привіт Olga

//---------------------------------------------------------------------------------------------//

//***3***
//Видобути число зі змінних

// let a = "5";
// let b = "13cvb";
// let c = "12.9sxdcfgv";

// console.log(Number(a));
// console.log(Number.parseInt(b));
// console.log(Number.parseFloat(c));

// вивести в консоль тип

// console.log(typeof Number(a));
// console.log(typeof Number.parseInt("b"));
// console.log(typeof Number.parseFloat("c"));

//---------------------------------------------------------------------------------------------//

//***4***
//Зробіть, щоб 0.1 + 0.2 = 0.3

// console.log((0.1 * 10 + 0.2 * 10) / 10);

//---------------------------------------------------------------------------------------------//

//***5**
//Поверніть найбільше число з набору 20, 10, 50, 40

// console.log(Math.max(20, 10, 50, 40));

//---------------------------------------------------------------------------------------------//
//***6**
//Поверніть випадкове число в діапазоні від 2 до 4

// let random_number = Math.floor(Math.random() * (4 - 2 + 1)) + 2;
// console.log(random_number);
// //або ж так
// console.log(Math.random(4 - 2 + 1) + 2);

//---------------------------------------------------------------------------------------------//

//***7**
//дізнатись довжину message
// const message = "Welcome to Bahamas!";
// console.log(message.length);// 19
//або ж так
// console.log("Welcome to Bahamas!".length);// 19

//---------------------------------------------------------------------------------------------//

//***8**
//вивести в консоль message великими літерами
// const message = "message";
// console.log(message.toUpperCase());

//---------------------------------------------------------------------------------------------//

//***9**
// створити пустий об*єкт
// додати туди ім*я, вік і місто
// вивести результат в консоль
// видалити місто
// додати буль з ключем: like flowers
// вивести результат в консоль

// let user = {};
// user.name = "Alex";
// user.age = 34;
// user.city = "Budapest";
// console.log(user);

// delete user.city;
// user["like flowers"] = true;
// console.log(user);

//---------------------------------------------------------------------------------------------//

//***10**
// За допомогою циклу “for…in” вивести в консоль ключі і значення об*єкта

// let user = {};
// user.name = "Alex";
// user.age = 34;
// user.city = "Budapest";
// delete user.city;
// user["like flowers"] = true;

// for (let key in user) {
//     console.log(key);
//     console.log(user[key]);
// }

//---------------------------------------------------------------------------------------------//

//Домашнє завдання (Модуль №22).

// -- 1 --
//Якщо змінна більше нуля - виведіть true, менше - false
//Перевірте це на варіантах 1, 0, -3.

// const test = 1;
// if (test > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// } //true

// const test = 0;
// if (test > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// }  //false

// const test = -3;
// if (test > 0) {
//   console.log(true);
// } else {
//   console.log(false);
// } //false

//---------------------------------------------------------------------------------------------//

// -- 2 --
// Якщо змінна ="test" - виведіть true,
//Перевірте це на варіантах:  'test',"qwerty",true

// const test = "test";
// if (test === "test") {
//   console.log(true);
// } else {
//   console.log(false);
// }; //true

// const test = "test";
// if (test === "qwerty") {
//   console.log(true);
// } else {
//   console.log(false);
// };  //false

// const test = "test";
// if (test === true) {
//   console.log(true);
// } else {
//   console.log(false);
// }; //false

//---------------------------------------------------------------------------------------------//

// -- 3 --
// Якщо змінна більше 10 - відніміть 5,менше - додайте 5, результат виведіть в консоль
//Перевірте це на варіантах 1, 10, 13.

// const number = 1;
// if (number > 10) {
//   const test = number - 5;
//   console.log(test);
// } else {
//   const test = number + 5;
//   console.log(test);
// }  //6

// const number = 10;
// if (number > 10) {
//   const test = number - 5;
//   console.log(test);
// } else {
//   const test = number + 5;
//   console.log(test);
// };  //15

// const number = 13;
// if (number > 10) {
//   const test = number - 5;
//   console.log(test);
// } else {
//   const test = number + 5;
//   console.log(test);
// };  //8

//---------------------------------------------------------------------------------------------//
// -- 4 --
//Зробіть сервіс який отримує число від 1 до 12
// виведіть місяць який дорівнює числу

// const num = parseInt(prompt("Введіть число"));
// let cost;

// switch (num) {
//   case 1:
//     cost = "Січень";
//     break;
//   case 2:
//     cost = "Лютий";
//     break;
//   case 3:
//     cost = "Березень";
//     break;
//   case 4:
//     cost = "Квітень";
//     break;
//   case 5:
//     cost = "Травень";
//     break;
//   case 6:
//     cost = "Червень";
//     break;
//   case 7:
//     cost = "Липень";
//     break;
//   case 8:
//     cost = "Серпень";
//     break;
//   case 9:
//     cost = "Вересень";
//     break;
//   case 10:
//     cost = "Жовтень";
//     break;
//   case 11:
//     cost = "Листопад";
//     break;
//   case 12:
//     cost = "Грудень";
//     break;
// }
// console.log(cost);

//---------------------------------------------------------------------------------------------//

// -- 5 --
//Зробіть сервіс який отримує тризначне число
//Поверніть користувачу сумму цих чисел

// const number = parseInt(prompt("Введіть трицифрове число"));

// if (number >= 100 && number <= 999 && Number.isInteger(number)) {
//   const num1 = Math.floor(number / 100); //
//   const num2 = Math.floor((number / 10) % 10);
//   const num3 = number % 10;

//   const sumOfNumbers = num1 + num2 + num3;
//   console.log(sumOfNumbers);
// } else {
//   console.log("Будь ласка, введіть тільки трицифрове ціле число.");
// }
