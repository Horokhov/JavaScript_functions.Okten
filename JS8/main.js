// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//     function User(id, name, surname , email, phone) {
//         this.id = id;
//         this.name = name;
//         this.surname = surname;
//         this.email = email;
//         this.phone = phone
//     }
//     let mass = [new User(35,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(2,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(10,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(15,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(56,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(20,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(111,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(221,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(664,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//         new User(110,'Mark', 'Ari', 'mark@gmail.com',3804184214218),
//     ]
//     console.log (mass);
// // - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter).
//
// let result=mass.filter (pair=>!(pair.id % 2));
// console.log(result);
//
// // - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//
// let sorting = mass.sort(function (a, b){return a.id - b.id});
// console.log(sorting);

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

//     class Client {
//         constructor(id, name, surname , email, phone, order) {
//             this.id=id;
//             this.name=name;
//             this.surname=surname;
//             this.email=email;
//             this.phone=phone;
//             this.order=[...order];
//         }
//     }
//
//     let data= [new Client(324, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, ['milk', 'sugar', 'bread']),
//         new Client(22, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, ['milk', 'sugar']),
//         new Client(314, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, ['milk', 'sugar', 'bread', 'rice']),
//         new Client(354, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, ['milk']),
//         new Client(364, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, ['milk', 'sugar', 'bread', 'pickles']),
//         new Client(347, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, ['milk', 'sugar']),
//         new Client(349, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, []),
//         new Client(341, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, []),
//         new Client(134, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, ['milk', 'sugar', 'bread', 'oats', 'sausages']),
//         new Client(634, 'Max', 'Horokhov', 'max@gmail.com', 3802183912, ['milk', 'sugar'])]
//     console.log(data)
//
// // - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
// let sorting = data.sort ((function (a, b){return a.order.length - b.order.length}));
// console.log(sorting);

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель,' +
// ' виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

//function Cars(model, manufacturer, release_date, max_speed, engine_volume) {
        //this.model=model;
        //this.manufacturer=manufacturer;
        //this.release_date=release_date;
        //this.max_speed=max_speed;
        //this.engine_volume=engine_volume;
        //this.drive = function (drive) {console.log(`driving with speed(${this.max_speed})`)}
        //this.info = function (info) {console.log(`Model-${this.model}`,`Manufacturer-${this.manufacturer}`,
            //`Release_date-${this.release_date}`,`Max_speed-${this.max_speed}`),`Engine_volume-${this.engine_volume}`};
        //this.newSpeed=newSpeed;
        //this.increaseMaxSpeed = function () {console.log(this.max_speed+this.newSpeed)};
        //this.newValue=newValue;
        //this.changeYear  = function () {console.log(this.newValue)};
        //this.addDriver = function(driver){Cars.push(driver)};
// }
// //newSpeed=100
//newValue=2017
//let car=new Cars('Lanos','BMW', 2006, 20000, 35);
// car.drive.apply(car);
// car.info.apply(car);
// car.increaseMaxSpeed.apply(car);
// car.changeYear.apply(car);
//console.log(car)

// - (Те саме, тільки через клас)

    class Class {
        constructor(model, manufacturer, release_date, max_speed, engine_volume) {
            this.model = model;
            this.manufacturer = manufacturer;
            this.release_date = release_date;
            this.max_speed = max_speed;
            this.engine_volume = engine_volume;
        }
        drive = function (drive) {console.log(`driving with speed(${this.max_speed})`);};
        info = function (info) {console.log(`Model-${this.model}`,`Manufacturer-${this.manufacturer}`,
            `Release_date-${this.release_date}`,`Max_speed-${this.max_speed}`,`Engine_volume-${this.engine_volume}`)};
        newSpeed=100;
        newValue=2017
        increaseMaxSpeed = function () {console.log(this.max_speed+this.newSpeed)};
        changeYear  = function () {console.log(this.newValue)};
        addDriver = function(driver){Class.push()};
    }
let car=new Class('Lanos','BMW', 2006, 20000, 35);
car.drive.apply(car);
car.info.apply(car);
car.increaseMaxSpeed.apply(car);
car.changeYear.apply(car);
console.log(car);