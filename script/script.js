
//Задание 8

let getMonths  = () => {
    let num = +prompt("Введите число от 1 до 12");

    if(num == 0 || num >= 13){
        console.log("Такого месяца нет");
    }else if( num == 12 || num <= 2){
        console.log("Зима");
    }else if( num >= 3 && num <= 5 ){
        console.log("Весна");
    }else if( num >= 6 && num <= 8 ){
        console.log("Лето");
    }else{
        console.log("Осень");
    }
}



// Задание 11


 let array = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
 let result = array.sort(() => Math.random() - 0.5);


function rememberWords(){

    alert(`Посмотрите на список фруктов, запомните порядок и нажмите "Ok" чтобы продолжить: ${result}`);

    let firstQuest = prompt("Введите название первого фрукта из списка?");
    let secondQuest = prompt("Введите название последнего фрукта из списка?");
    
    if (!firstQuest || !secondQuest) {
        alert("Вы ничего не ввели");
      } else if (firstQuest.toLowerCase() === result[0].toLowerCase() && secondQuest.toLowerCase() === result[result.length - 1].toLowerCase()) {
        alert("Поздравляю, Вы угадали!");
      } else if (firstQuest.toLowerCase() === result[0].toLowerCase() || secondQuest.toLowerCase() === result[result.length - 1].toLowerCase()) {
        alert("Вы были близки к победе!");
      } else {
        alert("Вы ответили не верно");
      }
    }

