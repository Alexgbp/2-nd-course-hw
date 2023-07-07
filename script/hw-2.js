//  Задание 1
 
 let a = 10;
 alert(a);
 a = 20;
 alert(a);

 // Задание 2

 const year = 2007;
 alert(`Год выпуска первого Iphone - ${year}`);


 // Задание 3

 const nameOfCreator = "Брендан Эйх";
 alert(`Создатель языка JavaScript - ${nameOfCreator}`);

 
 // Задание 4

 let firstNum = 10;
 let secondNum = 2;
 let sum = firstNum + secondNum;
 alert(sum);
 sum = firstNum - secondNum;
 alert(sum);
 sum = firstNum * secondNum;
 alert(sum);
 sum = firstNum / secondNum;
 alert(sum);



 // Задание 5

 let numOne = 2;
 let NumSecond = 5;
 let result = numOne ** NumSecond;
 alert(result);


 // Задание 6
 // В данном задании переменные именуются не  "a"/"b" , т.к переменная "a" уже созданна в первом задании.Что бы переменные имели какую ту логичность в названии я не решил назвать их "one/second".
 
 let one = 9;
 let second = 2;
 let resultOfNumbers = one % second;
 alert(resultOfNumbers);


  // Задание 7

  let num = 1;
  num += 5;
  num -= 3;
  num *= 7;
  num /= 3;
  num ++;
  num --;
  alert(num);



  //Задание 8

  let age = prompt("Сколько вам лет?");
  alert(`Ваш возраст ${age} !`);


  //Задание 9

  let user = {
    name: "Alex",
    age: 31,
    isAdmin: false
  }

  user["city of residence"] = "Moskow";
  user.age = 30;
  delete user["city of residence"];
  let info = prompt("Какую информацию хотите узнать о пользователе?", "name");
  alert(user[info]);

  
  //Задание 10

let useName = prompt("Ваше имя ?")
alert(`Привет, ${useName} !`)