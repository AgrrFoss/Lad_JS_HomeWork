
// Написать функцию  которая будет принимать n-ое количество аргументов, в качестве результата функция будет возвращать сумму всех четных элементов. Для решения использовать цикл for (... of …).
function returnArgs (...args) {
    sumOfArgs = 0;
    for (let item of args) {
        if (item % 2 === 0) {
            sumOfArgs += item;
        }
    }
    return sumOfArgs;
}
console.log(returnArgs(1, 3, 4, 4, 5, 7));


function returnArguments () {
    sumOfArgs = 0;
    for (let item of arguments) {
        if (item % 2 === 0) {
            sumOfArgs += item;
        }
    }
    return sumOfArgs;
}
console.log(returnArguments(1, 3, 2, 4, 5, 7));

// Написать функцию  которая будет принимать два массива, и в качестве результата будет возвращать только  те значения которые есть и в первом и во втором массиве.
const compMassive1 = [3, 0, 2, 1, 8, 9]
const compMassive2 = [5, 2, 0, 3, 7, 2, 1]

function comparison (mass1, mass2) {
    return mass1.filter(e => mass2.includes(e));
}
console.log(comparison(compMassive1, compMassive2))


// Создайте объект и скопируйте данный объект с помощью: Object.assign() и spread оператора. Изменить любое свойство в копии объекта, и проверить не изменился ли исходный.

const obj1 = {par: 'value1', par2: 'value2'}
const obj2 = {...obj1}
const obj3 = Object.assign(obj1)
console.log(obj1, obj2, obj3)

obj2.par = 'Other Parametr'
obj3.newPar = 'otherValue'
console.log(obj1, obj2, obj3)


// Используя метод map() напишите код, который получает из массива строк новый массив, содержащий их длины.
const massLength = (mass) => {return mass.map(i => i.length) }
console.log(massLength(['Строка1', 'strochka42', 'gheo']));

// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов,
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
function currentSums(num) {
    let summ = 0;
    return num.reduce((newMass, item)=> {
        summ += item
        newMass.push(summ)
        return newMass
    }, [])
}
console.log(currentSums(numbers))

// Напишите код, который получает из массива чисел новый массив, содержащий пары чисел, которые в сумме должны быть равны семи: (0:7), (1:6) и т.д.
const newNumbers = [2, 4, 3, 1, 5, 6, 7, 11, 13, 17, 19];
function sumSeven (nums) {
    //Тоже рабочий вариант, но на циклах
    let curNumber = 0
    let resMass = [];
    for (let i = 0; i < nums.length; i++) {
        curNumber = nums[i];
        nums.forEach(num => {
            if (curNumber + num === 7 ){
                resMass.push(`${curNumber}:${num}`)
            }
        })
    }
    return resMass;
    
    return nums.reduce ((resMass, num, index, arr) => {
        arr.forEach (i => {
            if (i + num ===7) {
                resMass.push(`${i}:${num}`)           
            }
        })
        return resMass
    }, [])

}
console.log(sumSeven(newNumbers))

// Напишите код, создающий массив, который будет состоять из первых букв слов строки str.
console.log('Жили были дед да бабка, пили кофе с молоком'.split(' ').map(i => i[0]))

// Напишите код, создающий массив, который будет состоять из строк, состоящих из предыдущего, текущего и следующего символа строки str.
const str = 'строка'
const strFunction = (string) => {
    return string.split('').reduce((acc, symbol, index, arr) => {
        let res = []
        if(index === 0) {
            res.push(symbol, arr[index+1]);
        } else if (index < (arr.length -1)) {
            res.push(arr[index-1], symbol, arr[index+1]);
        } else {
            res.push(arr[index-1], symbol);
        }
        acc.push(res)
        return acc
    },[])
    
}
console.log(strFunction(str))

// Напишите код, преобразующий массив цифр, которые располагаются неупорядоченно, в массив цифр расположенных по убыванию их значений.
const numbersMass = [3, 5, 2, 67, 6, 9, 1, 4, 8, 12, 43]

console.log(numbersMass.sort((a, b) => {
    return b - a;
}))

// Напишите код, объединяющий три массива цифр, и располагающий цифры, в полученном массиве, в порядке убывания их значений через пробел.
let mass1 = [2, 3, 5, 76, 34];
let mass2 = [5, 2, 73];
let mass3 = [45, 2, 94, 3, 60];
console.log([...mass1, ...mass2, ...mass3].sort((a, b) => {return b - a}).join(' '))


// Дан двухмерный массив с числами, например [[1, 2, 3], [4, 5], [6]]. Найдите сумму элементов этого массива. Массив, конечно же, может быть произвольным.
const doubleMass = [[1, 5, 6], [4, 2], [9, 3, 4]];
function summDoubleMass (dMass) {
    return dMass.reduce ((sum, subMass)=>{
        for (let num of subMass) {
            sum += num
        }
        return sum;
    }, 0)
}
console.log(summDoubleMass(doubleMass))


// Дан массив с числами. Не используя метода reverse переверните его элементы в обратном порядке.
const numMass = [2, 1, 3, 4, 0, 3];

function reverseMass () {
    return numMass.reduce((revMass, element) => {
        revMass.unshift(element);
        return revMass;
    }, [])
}
console.log(reverseMass())

// Дан массив с числами. Узнайте сколько элементов с начала массива надо сложить, чтобы в сумме получилось больше 10-ти.
function massCounter (massive) {
    let summ = 0;
    return massive.reduce((counter, elem) => {
        if (summ <= 10) {
            summ += elem;
            counter++;
        }
        return counter;
    }, 0)
}
console.log(massCounter(numMass));

// Напишите функцию arrayFill, которая будет заполнять массив заданными значениями. Первым параметром функция принимает значение, которым заполнять массив, а вторым - сколько элементов должно быть в массиве. 
//Пример: arrayFill('x', 5) сделает массив ['x', 'x', 'x', 'x', 'x'].
function arrayFill (value, quantity) {
    let resArray = [];
    for (let i = 0; i < quantity; i++) {
        resArray.push(value);
    }
    return resArray;
}
console.log(arrayFill('element', 5));
*/