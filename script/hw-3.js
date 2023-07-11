//Задание 1

let password = "пароль";
let userAnswer = String(prompt("Введите пароль"));
userAnswer = userAnswer.toLocaleLowerCase();

if(userAnswer === password){
    console.log("Пароль введен верно");
}else{
    console.log("Пароль введен неправильно");
}

// // Задание 2

let c = Number("Введите одно из этих чисел: 0, 10, −3, 2");

if(c > 0 && c < 10){
    console.log("Верно");
}else{
    console.log("Не верно");
}


// // Условие "Верно" отрабатывает только в 4 случае



// Задание 3


let d = 10;
let e = 102;

if(d > 100 || e > 100){
    console.log("Верно");
}else{
    console.log("Не верно");
}


// Задание 4

let a = '2';
let b = '3';
alert (parseInt(a) + parseInt(b));
alert (Number(a) + Number(b));


// Задание 5

let monthNumber = Number(prompt("Введите номер месяца от 1 до 12"))
 

switch (monthNumber) {
    case 1:
        console.log("1-й месяц принадлежит к сезону «зима»");
        break;
    case 2:
        console.log("2-й месяц принадлежит к сезону «зима»");
        break;
     case 3:
        console.log("3-й месяц принадлежит к сезону «весна»");
        break;
    case 4:
        console.log("4-й месяц принадлежит к сезону «весна»");
        break;
    case 5:
        console.log("5-й месяц принадлежит к сезону «весна»");
        break;
    case 6:
        console.log("6-й месяц принадлежит к сезону «лето»");
        break;
    case 7:
        console.log("7-й месяц принадлежит к сезону «лето»");
        break;
     case 8:
        console.log("8-й месяц принадлежит к сезону «лето»");
        break;
    case 9:
        console.log("9-й месяц принадлежит к сезону «осень»");
        break;
    case 10:
        console.log("10-й месяц принадлежит к сезону «осень»");
        break;
    case 11:
        console.log("11-й месяц принадлежит к сезону «осень»");
        break;
    case 12:
        console.log("12-й месяц принадлежит к сезону «зима»");
        break;
    default:
            console.log("Такого месяца нет");
        break;
}

 

// Задание 7

let insertNumber = Number(prompt("Пожалуйста, введите любое число"));
console.log(isNaN(insertNumber));

if( insertNumber % 2 === 0){
    console.log("Число четное")
}else{
    console.log("Число  нечетное")
}


// Задание 8 и Задание 9 обьединил, т.к такой вариант кажется логичнее 

const clientDeviceYear = 2015;
let clientOS = Number(prompt("Какая ситема на вашем телефоне: Android (введите 1), IOS (введите 0)"));
let clientAnswer  = Number(prompt("Укажите год вашего телефона?"))

if( clientOS === 0) {
    if (clientAnswer < clientDeviceYear){
        console.log("Установите облегченную версию приложения для iOS по ссылке");
    }else{
        console.log("Установите версию приложения для iOS по ссылке");
    }
} else if(clientOS === 1){
    if(clientAnswer < clientDeviceYear){
        console.log("Установите облегченную версию приложения для Android по ссылке");
    }else{
        console.log("Установите версию приложения для Android по ссылке");
    }
}


