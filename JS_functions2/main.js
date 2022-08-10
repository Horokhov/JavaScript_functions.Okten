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

// let nums = [11,21,3];
// nums.sort(function(a, b){return a-b});
// console.log(nums)
// nums.sort(function(a, b){return b-a});
// console.log(nums)

// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

// let coursesAndDurationArray = [
//     {title: 'JavaScript Complex', monthDuration: 5},
//     {title: 'Java Complex', monthDuration: 6},
//     {title: 'Python Complex', monthDuration: 6},
//     {title: 'QA Complex', monthDuration: 4},
//     {title: 'FullStack', monthDuration: 7},
//     {title: 'Frontend', monthDuration: 4}
// ];
//
// // coursesAndDurationArray.sort((par1, par2)=>par2.monthDuration - par1.monthDuration);
// // console.log(coursesAndDurationArray);
// let course= coursesAndDurationArray.filter (value => value.monthDuration > 5)
// console.log(course);

// описати колоду карт
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
// {
//     cardSuit: '', // 'spade', 'diamond','heart', 'clubs'
//         value: '', // '6'-'10', 'ace','jack','queen','king','joker'
//     color:'', // 'red','black'
// }

let suits = ["spades", "diamonds", "clubs", "hearts"];
let values = ["6", "7", "8", "9", "10", "J", "Q", "K","A","Joker"];

function getDeck()
{
    let deck = new Array();

    for(let i = 0; i < suits.length; i++)
    {
        for(let x = 0; x < values.length; x++)
        {
            let card = {Value: values[x], Suit: suits[i]};
            deck.push(card);
        }
    }

    return deck;
}
console.log(getDeck());

