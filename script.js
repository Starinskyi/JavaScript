// Домашнє завдання (Модуль №25. Замикання,this)

// --1--

// 1) написати об*єкт студента який буде виводити ім*я, спеціальнісь, середній бал і кількість пропущених занять
// 2) написати метод який буде виводити цю інформацію
// 3) написати три варіанти студентів
// 4) прикріпити знначення за допомогою call apply bind

// const student = {
//   name: "",
//   major: "",
//   averageGrade: 0,
//   missedClasses: 0,

//   Info: function () {
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.major}`);
//     console.log(`Середній бал: ${this.averageGrade}`);
//     console.log(`Кількість пропущених занять: ${this.missedClasses}`);
//   },
// };

// const student1 = {
//   name: "Дмитро",
//   major: "Інформатика",
//   averageGrade: 4.5,
//   missedClasses: 2,
// };

// const student2 = {
//   name: "Марія",
//   major: "Математика",
//   averageGrade: 4.0,
//   missedClasses: 1,
// };

// const student3 = {
//   name: "Олена",
//   major: "Географія",
//   averageGrade: 4.2,
//   missedClasses: 3,
// };

// const displayStudent1Info = student.Info.bind(student1);
// displayStudent1Info();
// const displayStudent2Info = student.Info.bind(student2);
// displayStudent2Info();
// const displayStudent3Info = student.Info.bind(student3);
// displayStudent3Info();

// const infoStudent = {
//   name: "",
//   major: "",
//   averageGrade: 0,
//   missedClasses: 0,

//   logInfo: function (missedClasses) {
//     console.group(`info:`);
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.major}`);
//     console.log(`Середній бал: ${this.averageGrade}`);
//     console.log(`Кількість пропущених занять: ${missedClasses}`);
//     console.groupEnd();
//   },
// };

// const student1 = {
//   name: "Дмитро",
//   major: "Інформатика",
//   averageGrade: 4.5,
//   missedClasses: 2,
// };

// const student2 = {
//   name: "Марія",
//   major: "Математика",
//   averageGrade: 4.0,
//   missedClasses: 1,
// };

// const student3 = {
//   name: "Олена",
//   major: "Географія",
//   averageGrade: 4.2,
//   missedClasses: 3,
// };

// infoStudent.logInfo.call(student1, "2");
// infoStudent.logInfo.call(student2, "1");
// infoStudent.logInfo.call(student3, "3");

// const infoStudent = {
//   name: "",
//   major: "",
//   averageGrade: 0,
//   missedClasses: 0,

//   logInfo: function (averageGrade,missedClasses) {
//     console.group(`students info:`);
//     console.log(`Ім'я: ${this.name}`);
//     console.log(`Спеціальність: ${this.major}`);
//     console.log(`Середній бал: ${averageGrade}`);
//     console.log(`Кількість пропущених занять: ${missedClasses}`);
//     console.groupEnd();
//   },
// };

//  const student1 = {
//   name: "Дмитро",
//   major: "Інформатика",
//   averageGrade: 4.5,
//   missedClasses: 2,
// };

// const student2 = {
//   name: "Марія",
//   major: "Математика",
//   averageGrade: 4.0,
//   missedClasses: 1,
// };

// const student3 = {
//   name: "Олена",
//   major: "Географія",
//   averageGrade: 4.2,
//   missedClasses: 3,
// };

// infoStudent.logInfo.apply(student1,[4.5, 2])
// infoStudent.logInfo.apply(student2,[4.0, 1])
// infoStudent.logInfo.apply(student3,[4.2, 3])

//---------------------------------------------------------------------------------------------//

// --2--

// Написати дві кнопки і закріпити на них функції
// при натисканні на кнопку html - має видати коротке визначення що це таке
// function html() {
//   console.log("За допомогою HTML ви можете створити свій власний веб-сайт.");
//   console.log(this);
// }
// document.querySelector("#html").onclick = html;
// // при натисканні на кнопку css - має видати коротке визначення що це таке
// function css() {
//   console.log("Каскадні таблиці стилів (CSS)");
//   console.log(this);
// }
// document.querySelector("#css").onclick = css;
// const button = {
//   function() {
//     console.log("визначення: ", this.items);
//   },
// };
// const css = {
//   items: "Каскадні таблиці стилів,допоможуть Вам прикрасити сторінку",
// };
// const html = {
//   items: "За допомогою HTML ви можете створити свій власний веб-сайт.",
// };

// document
//   .querySelector("#css")
//   .addEventListener("click", button.function.bind(css));
// document
//   .querySelector("#html")
//   .addEventListener("click", button.function.bind(html));

//---------------------------------------------------------------------------------------------//

// --3--

// Написати функцію магазин, яка отримує назву товару, ціну за кг і кількість товару
// функція має повертати назву товару і вартість
// перевірити на варіантах:
// 1) banana 30, 4,5
// 2) cherry 58, 1,3
// 3) orange 89. 3,4

// function Shop() {
//     let totalPrice = 0;

//     return function(product, pricePerKg, quantity) {
//         let cost = pricePerKg * quantity;
//         totalPrice += cost;
//         return product + ": ₴ " + cost;
//     }
// }

// const shop = Shop();

// console.log(shop("Apple", 2, 3)); // Apple: $6
// console.log(shop("Banana", 1.5, 2)); // Banana: $3
// console.log(shop("Cherry", 4, 1.5)); // Cherry: $6
// console.log(shop("pear", 9, 3.5)); // pear: $31.5
