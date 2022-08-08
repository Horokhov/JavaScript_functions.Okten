// // - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
//
// function S_rectangular (a,b) {
//     let res=a*b;
//     return res;
// }
// console.log(S_rectangular(10,20));
//
// //- створити функцію яка обчислює та повертає площу кола з радіусом r
//
// function calculateRadius(radius) {
//     let res = Math.PI * Math.pow(radius,2);
//     return res;
// }
// console.log(calculateRadius(30));
//
// // - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
//
// function cylinder(r, h) {
//     let res = 2 * Math.PI * r * h;
//     return res;
// }
// console.log (cylinder(8,6));
//
// // - створити функцію яка приймає масив та виводить кожен його елемент

// let products = [
//     {
//         title: 'milk',
//         price: 22,
//         image: `https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg`
//     },
//     {
//         title: 'juice',
//         price: 27,
//         image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
//     },
//     {
//         title: 'tomato',
//         price: 47,
//         image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
//     },
//     {
//         title: 'tea',
//         price: 15,
//         image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
//     },
// ];
//
// function arrayPrinter(array) {
//     for (const product of array) {
//         console.log(product);
//     }
//     return product;
// }
//
// arrayPrinter(products);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function printer(text) {
//     document.write (`<div>${text}</div>`);
// }
//
// printer('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function printer(text) {
//     document.write (`<ul>`);
//     document.write (`<li>${text}</li>`,`<li>${text}</li>`,`<li>${text}</li>`);
//     document.write (`/<ul>`);
// }
//
// printer('Hello');

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function printer(text, loops) {
//         document.write(`<ul>`);
//     for (let i = 0; i < loops; i++) {
//         document.write(`<li>text</li>`);
//     }
//         document.write(`/<ul>`)
// }
//
// printer('Hello', 3);

//- створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// let products = ["title", 22, true]
//
//
// function arrayPrinter(array) {
//     for (const product of array) {
//         document.write(`<div>${product}</div>`);
//     }
// }
// arrayPrinter(products);

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
// let people = [
//     {
//         name: 'Max',
//         id: 22,
//         age: 12
//     },
//     {
//         name: 'Alex',
//         id: 27,
//         age: 34
//     },
//     {
//         name: 'George',
//         id: 47,
//         age: 22
//     },
//     {
//         name: 'Slava',
//         id: 15,
//         age: 45
//     },
// ];
//
// function arrayPrinter(array) {
//     for(const human of array) {
//         document.write(`<div>name:${human.name}</div>`, `<div>age:${human.age}</div>`, `<div>id:${human.id}</div>`);
//     }
// }
// arrayPrinter(people);
// - створити функцію яка повертає найменьше число з масиву

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

