
//Задание 8

let getMonths  = () => {
    let num = prompt("Введите число от 1 до 12");

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
