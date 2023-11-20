// Сделайте функцию, которая возвращает квадрат числа. Число передается параметром.
function number1 (par) {
    return par*par
}
// console.log(number1(8));

// Сделайте функцию, которая возвращает сумму двух чисел.
let sum = (a, b) => a + b;
// console.log(sum(3, 4));

// Сделайте функцию, которая отнимает от первого числа второе и делит на третье.
function matematic (a, b, c) {
    return (a - b) / c;
}
// console.log(matematic(9, 1, 2));

// Сделайте функцию, которая принимает параметром число от 1 до 7, а возвращает день недели на русском языке.
function dayOfWeek (num) {
    switch (num) {
        case 1: return 'Понедельник'
            break
        case 2: return 'Вторник'
            break
        case 3: return 'Среда'
            break
        case 4: return 'Четверг'
            break
        case 5: return 'Пятница'
            break
        case 6: return 'Суббота'
            break
        case 7: return 'Воскресенье'
            break
        default: return 'Проверь введенную цифру'
    }
}
// console.log(dayOfWeek(2));


// Сделайте функцию, которая параметрами принимает 2 числа. Если эти числа равны - пусть функция вернет true, а если не равны - false.
function equality (a, b) {
    if (a === b) {
        return true
    } else {
        return false
    }
}
// console.log(equality( 3, 2))

// Сделайте функцию, которая параметрами принимает 2 числа. Если их сумма больше 10 - пусть вернет true, а если нет то - false.
function checkSum (a, b) {
    let sum = a + b;
    if (sum > 10) {
        return true
    } else {
        return false
    }
}
// console.log(checkSum( 13, 2))

// Сделайте функцию, которая параметром принимает число и проверяет - отрицательное оно или нет. Если отрицательное - пусть функция вернет true, а если нет - false.
let checkMinus = a => a < 0 ? true : false;
function checkMinus (a) {
    if (a < 0) {
        return true
    } else {
        return false
    }
}
console.log(checkMinus(5));

// Сделайте функцию isNumberInRange, которая параметром принимает число и проверяет, что оно больше нуля и меньше 10. Если это так - пусть функция возвращает true, если не так - false.
let isNumberInRange = (a) => a > 0 && a < 10 ? true : false;
// console.log (isNumberInRange(20));

// Дан массив с числами. Запишите в новый массив только те числа, которые больше нуля и меньше 10-ти. Для этого используйте вспомогательную функцию isNumberInRange из предыдущей задачи.
function sort (mass) {
    let newMass = [];
    mass.forEach((i) => {
        if (isNumberInRange(i)) {
            newMass.push(i)
        }
    });
    return newMass;
}
// console.log(sort ([1, 23, 4, 45, 65, 3, 2]))

// Сделайте функцию getDigitsSum (digit - это цифра), которая параметром принимает целое число и возвращает сумму его цифр.
function getDigitsSum (num) {
    let arrayDigits = Array.from(String(num));
    let summ = 0
    arrayDigits.forEach((i) => {
        summ += Number(i);
    })
    return summ;
}

// console.log(getDigitsSum (151))

// Найдите все года от 1 до 2020, сумма цифр которых равна 13. Для этого используйте вспомогательную функцию getDigitsSum из предыдущей задачи.
function findYears13 () {
    let arrYear13 = [];
    for (let i = 0; i <= 2020; i++) {
        if (getDigitsSum(i) === 13) {
            arrYear13.push(i)
        }
    }
    return arrYear13
}
// console.log(findYears13())

//  Сделайте функцию isEven() (even - это четный), которая параметром принимает целое число и проверяет: четное оно или нет. Если четное - пусть функция возвращает true, если нечетное - false.
function isEven (num) {
    return num % 2 === 0 ? true : false
}
// console.log(isEven(674));

//  Дан массив с целыми числами. Создайте из него новый массив, где останутся лежать только четные из этих чисел. Для этого используйте вспомогательную функцию isEven из предыдущей задачи.
function findEven (mass) {
    let evenArr = []
    mass.forEach (i => {
        if (isEven(i)) {
            evenArr.push (i);
        }
    })
    return evenArr;
}

// console.log(findEven([34, 32, 17, 8, 71, 45, 56]));

// Сделайте функцию getDivisors, которая параметром принимает число и возвращает массив его делителей (чисел, на которое делится данное число).

function getDivisors (num) {
    let masDivisors = []
    for (let i=1; i<=num; i++) {
        if( num % i === 0) {
            masDivisors.push(i)
        }
    }
    return masDivisors;
}
console.log(getDivisors(25))

// Дано число. Сложите его цифры. Если сумма получилась более 9-ти, опять сложите его цифры. И так, пока сумма не станет однозначным числом (9 и менее).

function summ9 (num) {
    let i = getDigitsSum(num);
    while (i > 9) {
        i = getDigitsSum(i)
    }
    return i
}
console.log(summ9(639), summ9(1986));

// Напишите стрелочную функцию, которая будет возвращать true если строка является палиндромом и false в противном случае.
let isPalindrom = str => {
    massStr = Array.from(str);
    reversMassstr = structuredClone(massStr).reverse();
    console.log(massStr, reversMassstr)

    return massStr.toString() == reversMassstr.toString() ? true : false;
}
console.log(isPalindrom('jklos'), isPalindrom('змзмз'))