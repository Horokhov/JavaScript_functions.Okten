// - Знайти та вивести довижину наступних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let values = ['hello world', 'lorem ipsum', 'javascript is cool'];
// for (const value of values) {
//     console.log(value.length);
// }

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

// let values = ['hello world', 'lorem ipsum', 'javascript is cool'];
//
// for (const value of values) {
//     console.log(value.toUpperCase());
// }

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

// let values=['HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'];
//
// for (const value of values) {
//     console.log(value.toLowerCase());
// }

// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

// let str = ' dirty             string   '
// console.log(str.replaceAll(' ','' ));


// - Напишіть функцію stringToArray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

// let str = 'Ревуть воли як ясла повні';
// let split= str.split(' ');
// console.log(split);
///////////////////////////////////////////////////////////////////////////////
// let str = 'Ревуть воли як ясла повні';
// let arr = stringToArray(str)
// function stringToArray(str) {
//     if(str.isArray) {
//         console.log(str);
//     } else {
//         let split=str.split(' ');
//         console.log(split);
//     }
// }
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

// let values = [10,8,-7,55,987,-1011,0,1050,0]
// let map=values.map(value=>value.toString());
// console.log(map);

// створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого,
// або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

    let nums = [11,21,3];
 function sortNums(direction) {
     direction.sort((value1,value2)=>value1[2]-value2[1]);
     console.log(direction)
 }
 sortNums(nums);