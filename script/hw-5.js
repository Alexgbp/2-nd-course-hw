// Задание 1

let minNumber = () => {

    let firstNumber = Number(prompt("Введите первое число"));
    let secondNumber = Number(prompt("Введите второе число"));

    if(!firstNumber || !secondNumber){
        console.log("Вы ввели не числовые значения или пустую строку");
    }else if(firstNumber < secondNumber){
        return firstNumber;
    }else{
        return secondNumber;
    }
}

console.log(`Наименьшее число ${minNumber()}`);


// Задание 2

let evenAndOdd = () => {

    let number = Number(prompt("Введите число для проверки на нечтность/нечетность"));

    if(number % 2 === 0){
        return "Число четное";
    }else{
        return "Число не четное";
    }
}

console.log(evenAndOdd());


// Задание 3

let getRectangle = (number) => {

    console.log(number ** 2);
}

getRectangle(2);

let getAnotherRectangle = (number) => {

    return number ** 2;
}

console.log(getAnotherRectangle(8));


// Задание 4

let howOld = () =>{

    let userAnswwer = prompt("Сколько вам лет");

    if(userAnswwer < 0){
        alert("Вы ввели неправильное значение");
    }else if(userAnswwer <= 12){
        alert("Привет, друг!");
    }else{
        alert("Добро пожаловать!");
    }
}

howOld();


// // // Задание 5

let mult = (a, b) => {

    if(isNaN(a) || isNaN(b)){
        return "Одно или оба значения не являются числом";
    }else{
        return a * b;
    }
}

console.log(mult(2, 5));


// // Задание 6


let askNumber = () => {

    let askUser = Number(prompt("Введите число от 0 до 10"));

    if( askUser > 10){
        return "Нужно ввести число от 0 до 10";
    }else if(isNaN(askUser)){
        return "Переданный параметр не является числом";
    }else{
        let result = askUser ** 3;
        return `${askUser} в кубе равняется ${result}`;
    }
}

console.log(askNumber());


// Задание 7


function Area(){
    return  Math.PI * this.radius ** 2;
}

function Perimeter(){
    return   2 * Math.PI * this.radius;
}

let circle1 = {
     radius: 10,
     getArea: Area,
     getPerimeter: Perimeter,
}

let circle2 = {
    radius: 20,
    getArea: Area,
    getPerimeter: Perimeter,
}

console.log(circle1.getArea());
console.log(circle1.getPerimeter());

console.log(circle2.getArea());
console.log(circle2.getPerimeter());
