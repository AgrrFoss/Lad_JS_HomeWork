/** Задание с температурой с урока
 * 
const t = -20;
console.log (t);

if (t <= -30) {
    console.log ("Оставайтесь дома!")
}
else if ( -30 < t <= -10) {
    console.log ("Сегодня холодно!")
}
else if (t > -10 && t <= 5) {
    console.log ("Не холодно")    
}
else if (t > 5 && t <= 15) {
    console.log ("Тепло")    
}
else if (t > 15 && t <= 25) {
    console.log ("Очень тепло")    
}
else if (t > 25 && t <= 35) {
    console.log ("Жарко")    
}
else {
    console.log ("Пекло")    
}

const n = 10;

for (let i = 0; i < n; i++ ) {
    console.log (`Выводим строку ${i}`)
}
*/
/**Задание сравнения пользователей с урока
 * 
  
 let user = 'admin';

switch (user) {
    case 'user':
        console.log(`Это пользователь ${user}`);
        break;
    case 'manager':
        console.log(`Это  менеджер ${user}`);
        break;
    case 'admin':
        console.log(`Это админ ${user}`);
        break;
}
*/

/** Задание 1, раота с if else */

let a = 1;
if (a == 0) {
    console.log('1. Верно')
} else {
    console.log ('1. Неверно')
}

if (a > 0) {
    console.log('2. Верно')
} else {
    console.log ('2. Неверно')
}

if (a < 0) {
    console.log('3. Верно')
} else {
    console.log ('3. Неверно')
}

if (a >= 0) {
    console.log('4. Верно')
} else {
    console.log ('4. Неверно')
}

if (a <= 0) {
    console.log('5. Верно')
} else {
    console.log ('5. Неверно')
}

if (a != 0) {
    console.log('6. Верно')
} else {
    console.log ('6. Неверно')
}

if (a == 'test') {
    console.log('7. Верно')
} else {
    console.log ('7. Неверно')
}

if (a === '1') {
    console.log('8. Верно')
} else {
    console.log ('8. Неверно')
}

/** задание 2 Работа с логическими переменными */

let test = true;

if (test == true) {
    console.log('2.1. Верно')
} else {
    console.log ('2.1. Неверно')
}

console.log (test === true ? '2.1. Верно' : '2.1. Неверно')

if (test != true) {
    console.log('2.2. Верно')
} else {
    console.log ('2.2. Неверно')
}

console.log (test != true ? '2.2. Верно' : '2.2. Неверно')

/** задание 3 Работа с && (и) и || (или) */

function checkA () {
let a = -3;
console.log ( a > 0 && a < 5 ? '3.1 Верно' : '3.1 Неверно');
}
checkA();

function checkA2 () {
    let a = 5;
    a === 0 || a === 2 ? a = a+7 : a = a/10;
    console.log(a)
}
checkA2();

let a3 = 3;
let b3 = 5;

if (a3 <= 1 && b3 >= 3) {
    console.log( a3 + b3);
} else {
    console.log(a3 - b3);
}

let a32 = 1;
let b32 = 8;

if ( a32 > 2 && a32 < 11 || b32 >= 6 && b32 < 14) {
    console.log ('3.4. Верно');
} else {
    console.log ('3.4. Неверно');
}


let num = 2;
let result = '';

switch (num) {
    case 1 : result = 'Зима';
    break
    case 2 : result = 'Весна';
    break
    case 3 : result = 'Лето';
    break
    case 4 : result = 'Осень';
    break
}
console.log(result);

/** Общие задачи */

let day = 28;

if (day <= 10) {
    console.log ('Первая декада');
} else if (day <= 20) {
    console.log ('Вторая декада');
} else {
    console.log ('Третья декада');
}

let month = 6;
let seson;
if (month === 12 || month === 1 || month === 2) {
    seson = 'Зима';
} else if (month >= 3 && month <= 5) {
    seson = 'Весна';
} else if (month >= 6 && month <= 8) {
    seson = 'Лето';
} else {
    seson = 'Осень';
};
console.log (seson);

let symbolsString = 'sjkl'
console.log(symbolsString[0] == 'a' ? 'Да' : 'Нет');


let numbersString = '756855'
console.log(numbersString[0] == '1' || numbersString[0] == '2' || numbersString[0] == '3' ? 'Да' : 'Нет');

let threeNumbers = '659'
console.log ( Number(threeNumbers[0]) + Number(threeNumbers[1]) + Number(threeNumbers[2]));

let sixNumbers = '654436';
function summNumber ( a, b , c ) {
    return Number(a) + Number(b) + Number(c);
} 
console.log(summNumber(sixNumbers[0], sixNumbers[1], sixNumbers[2]) === summNumber(sixNumbers[3], sixNumbers[4], sixNumbers[5]) ? 'Да' : 'Нет');