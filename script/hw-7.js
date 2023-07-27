// Задание 1

let string = "hello";

let result = string.toUpperCase()
console.log(result);


// Задание 2

function searchStart(arr, str){
    arr.filter((elem) => {
        if(elem.toLowerCase().includes(str.toLowerCase())){
            console.log(elem);
        }
    })
}


searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко');
searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'); 
searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино');



// Задание 3

let number =  32.58884;

 let floor = Math.floor(number);
 console.log(floor);

 let round = Math.round(number);
 console.log(round);

 let ceil = Math.ceil(number);
 console.log(ceil);



 // Задание 4

 let  arrayNumbers = [52, 53, 49, 77, 21, 32];

 let max = Math.max(... arrayNumbers);
 console.log(max);

 let min = Math.min(... arrayNumbers);
 console.log(min);


 // Задание 5


 let randomValue = (val) => {
    return Math.floor(Math.random() * (val + 1));
 }
 console.log(randomValue(10));



 // Задание 6

 let getRandomArrNumbers= (val) => {
    let newArray = [];
    let lengthOfArray = Math.floor(val / 2);

    for( let i = 0; i < lengthOfArray; i++){
        newArray.push(Math.floor(Math.random() * (val + 1)))
    }
    return newArray; 
 }
 console.log(getRandomArrNumbers(7));
 console.log(getRandomArrNumbers(12));




 // Задание 7


 function getRandomValues(a ,b){
    return Math.round(Math.random() * (b - a ) + a);
 }
 console.log(getRandomValues(1, 10));


  // Задание 8


  let currentDate = new Date();
  console.log(currentDate);


  // Задание 9

   currentDate.setDate(currentDate.getDate() + 73);
   console.log(currentDate);


//    Задание 10


    let newDate = new Date();
    console.log(newDate);

    let option = {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
    }

    console.log(newDate.toLocaleDateString("ru-RU", option));


    // Задание 11 расположенно в файле script.js



    

