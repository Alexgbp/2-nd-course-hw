// Задание 1

const people = [
  { name: 'Глеб', age: 29 },
  { name: 'Анна', age: 17 },
  { name: 'Олег', age: 7 },
  { name: 'Оксана', age: 47 }
];

people.sort((a, b) => {
   if(a.age > b.age){
    return 1
   }else{
    return - 1
   }
})
console.log(people);




// Задание 2

function isPositive(number) {
  return number > 0;
}

function isMale(person) {
  return person.gender === 'male';
}

function filter(array, ruleFunction) {
  return array.map(function(item) {
    if (ruleFunction(item)) {
      return item;
    }
  }).filter(function(item) {
    return item !== undefined;
  });
}

console.log(filter([3, -4, 1, 9], isPositive)); 
const peopleOne = [
   {name: 'Глеб', gender: 'male'},
   {name: 'Анна', gender: 'female'},
   {name: 'Олег', gender: 'male'},
   {name: 'Оксана', gender: 'female'}
];

console.log(filter(peopleOne, isMale)); 



// Задание 3



function showCurrentDate(){


  let interval = setInterval(() => {
    let currenDate = new Date();
   console.log(`Текущая дата: ${currenDate}`);

   setTimeout(() => {
    console.log("30 секунд прошло");
    clearInterval(interval)
  }, 30000);
  
  },3000)
}

showCurrentDate();


// Задание 4


function delayForSecond(callback) {
  setTimeout(callback, 1000);
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})



// Задание 5


function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { cb(); }
  }, 1000)
}

function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
  sayHi('Глеб');
});