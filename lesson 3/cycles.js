/** Циклы While и for */

console.log('вывести с помощью While числа от 1 до 100');
let n = 1
while (n <= 100 ) {
    console.log (n);
    n++;
}

console.log('вывести с помощью for числа от 1 до 100');

for( let i = 1; i <= 100; i++) {
    console.log(i);
}


console.log('вывести с помощью While числа от 11 до 33');

let m = 11
while (m <= 33 ) {
    console.log (m);
    m++;
}
console.log('вывести с помощью for числа от 11 до 33');

for( let i = 11; i <= 33; i++) {
    console.log(i);
}

console.log('Четные числа в промежутке 1 - 100');

for ( let i = 2; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(i)
    };
}

let summ = 0
for (let i =1; i <= 100; i++) {
    summ = summ + i;
}
console.log(` сумма чисел 1 - 100 = ${summ}`);

let mass = [1, 2, 3, 8, 5];

for ( let i = 0; i < mass.length; i++ ) {
    console.log(mass[i])
}

let result =0;
for (let i = 0; i < mass.length; i++) {
    result = result + mass[i];
}
console.log(`result = ${result}`);


/** Задачи общие */

let massive = [2, -5, -9, -2, 0, 4];

for (let i = 0; i < massive.length; i++) {
    if (massive[i] > 3 && massive[i] < 10) {
        console.log(massive[i]);
    }
}

let summPositive = 0;
for (let i = 0; i < massive.length; i++) {
    if (massive[i] > 0 ) {
        summPositive += massive[i];
    }
}
console.log(summPositive);

let massWithFour = [1, 2, 5, 4, 9, 13, 10];
for (let i = 0; i < massWithFour.length; i++) {
    if (massWithFour[i] == 4 ) {
       console.log('Есть');
       break
    }
}

let massThousands = [10, 20, 30, 50, 235, 3000];

for (let i = 0; i < massThousands.length; i++) {
    let firstSymbol = String(massThousands[i])[0];
    if (firstSymbol == 1 || firstSymbol == 2 || firstSymbol == 5) {
        console.log(massThousands[i]);
    }
}

let mass5 = [1, 2, 3, 4, 5, 6, 7, 8, 9];

let stringForMass5 = '-';

for (let i=0; i < mass5.length; i++) {
    stringForMass5 += `${mass5[i]}-`
    continue
}
console.log (`Вместо массива получим строку разделенную тире ${stringForMass5}`)

let nubmerN = 1200;
let num = 0;

while (nubmerN >= 50) {
    nubmerN = nubmerN / 2;
    num++;
}

console.log(`Результат ${num} делений = ${nubmerN}`);