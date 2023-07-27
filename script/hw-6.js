// // // Задание 1

// let array = [1, 5, 4, 10, 0, 3];

// for(let i = 0; i < array.length; i++){
//   console.log(array[i]);
//   if(array[i] >= 10){
//     break;
//   }
// };
// console.log("Цикл прерван");


// // Задание 4

// let arr = [1, 5, 4, 10, 0, 3];

// arr = arr.indexOf(4);
// console.log(`Индекс числа 4 в массиве = ${arr}`);



// // Задание 3


//  let arrOne = [1, 3, 5, 10, 20];

//  arrOne = arrOne.join(" ");
//  console.log(arrOne);


// //  Задание 4


// let newArray = [];

// for(let i = 0; i < 3; i++){
//   newArray[i] = [];
//   for(let j = 0; j < 3; j++){
//     newArray[i][j] =  1;
//   }
// }
// console.log(newArray);



// // Задание 5


// let arrTwo = [1, 1, 1];

// arrTwo.push(2, 2, 2);
// console.log(arrTwo);


// // Задание 6


//  let arrThree = [9, 8, 7, 'a', 6, 5];

// arrThree.sort().pop();
// console.log(arrThree);



// // Задание 7


// let arrFour = [9, 8, 7, 6, 5];

// function quiz(){
//   let askUser = +prompt("Угадай число от 0 до 10");
//   if(isNaN(askUser)){
//     alert("Это не число");
//   }else if(arrFour.includes(askUser)){
//     alert("Угадал");
//   }else{
//     alert("Не угадал");
//   }
// }
// quiz();



// // Задание 8


// let string = 'abcdef';

//   let arrayString = string.split("");
//   arrayString = arrayString.reverse();
//   arrayString = arrayString.join("");
//   console.log(arrayString);



// // Задание 9


//  let arrFive = [
//   [1, 2, 3],
//   [4, 5, 6],
// ];

// arrFive = arrFive.flat();
// console.log(arrFive);


// // Задание 10


// let arrSix = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// for (let i = 0; i < arrSix.length; i++) {
//   if (i === arrSix.length - 1) {
//     console.log(arrSix[i]);
//     break;
//   }
//   console.log(arrSix[i] + arrSix[i + 1]);
// }


// // Задание 11


// let arrSeven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

//   function result(arrSeven){
//      return arrSeven.map((elem) => elem ** 2);
  
//   }
//   console.log(result(arrSeven));


//   // Задание 12

//   let arrEight = ['слово', '', 'слог', 'длинное предложение', 'буква'];

//   function getLengthWords(arrEight) {
//     return arrEight.map(item => item.length);
//   }
//   console.log(getLengthWords(arrEight));



//   // Задание 13


//   function filterPositive(arrNine) {
//     return arrNine.filter(item => item < 0);
//   }
  
//   console.log(filterPositive([-1, 0, 5, -10, 56]));
//   console.log(filterPositive([-25, 25, 0, -1000, -2]));


  









