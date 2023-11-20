// Имеется массив простых чисел: numbers = [2, 3, 5, 7, 11, 13, 17, 19]. Использую метод reduce() напишите функцию currentSums(numbers), которая возвращает новый массив из такого же числа элементов,
// в котором на каждой позиции будет находиться сумма элементов массива numbers до этой позиции включительно.
const numbers = [2, 3, 5, 7, 11, 13, 17, 19];
// console.log(currentSums(numbers))
// console.log(`это функция стрелочная ${func1(numbers)}`);
// function currentSums(num) {
//     let summ = 0;
//     return num.reduce((newMass, item)=> {
//         summ += item
//         newMass.push(summ)
//         return newMass
//     }, [])
// }

//let count = 0;
//numbers.forEach(i => count++);
numbers.reduce((count, element, index, arr) => {
    return count++
}, 0)

console.log(numbers.reduce((count, element, index, arr) => {
    return count+=element
}, 0));
