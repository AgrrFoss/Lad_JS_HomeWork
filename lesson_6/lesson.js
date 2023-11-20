//Написать функцию, которая будет принимать массив чисел, содержащий целые положительные и целые отрицательные числа, 
// в качестве результата возвращать сумму четных положительных элементов переданного массива.
const mass = [3, -4, 0, 2, 43, 5, -7, 94, -4, 43, -9]
function firstFunction (massive) {
    return massive.reduce((acc, item) => {
        if ( item > 0 && item % 2 === 0) {
            acc += item
        }
        return acc
    }, 0)
}
console.log(firstFunction(mass));

function secondF (massive) {
    let summ = 0
    massive.filter((i) => i > 0 && i % 2 === 0).forEach(i => summ += i);
    return summ
}
console.log(secondF(mass));

//Написать функцию, которая будет принимать массив чисел, и будет убирать повторяющиеся значения из переданного массива, в 
//качестве результата возвращать новый массив с уникальными значениями из исходного.
function superFilter (massive) {
    return massive.reduce ((accum, item, index, array) => {
        if (!accum.includes(item)) {
            accum.push(item)
        } return accum
    }, []);
}


// console.log(superFilter(mass));

//Написать функцию  которая будет принимать два массива, и будет сравнивать их, 
//если они идентичны (элементы совпадают по значению и по индексу) то функция возвращает true, в противном случае false.

const mas1 = [1, 24, 6];
const mas2 = [12, 4, 6];
const mas3 = [-1, 7, 3, 6];

function func3 (massive1, massive2) {
    if(massive1.length !== massive2.length) {
        return false
    } return massive1.toString() === massive2.toString();
}

console.log(func3(mas1,mas2));
