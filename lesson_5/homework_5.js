// Преобразовать строку в массив слов. Напишите функцию stringToarray(str), которая преобразует строку в массив слов.
let stringToarray = str => { return str.split(' ')}
console.log(stringToarray('Лампочка светила пока не погасла'));

// Напишите функцию deleteСharacters(str, length), которая возвращает подстроку, состоящую из указанного количества символов.
function deleteСharacters(str, length) {
    return str.slice(0, length)
}
console.log(deleteСharacters('Длинная строка из которой вернется подстрока', 12))
// Напишите функцию insertDash(str), которая принимает строку str в качестве аргумента и вставляет тире (-) между словами. 
// При этом все символы строки необходимо перевести в верхний регистр.
function insertDash(str) {
    return str.toUpperCase().split('').join('-');
}
console.log(insertDash('какаятострока'))

// Напишите функцию, которая принимает строку в качестве аргумента и преобразует регистр первого символа строки из нижнего регистра в верхний.
let changeFirstSimbolCase = str => {
    mass = str.split('')
    let firstSimbol = mass.shift().toUpperCase()
    mass.unshift(firstSimbol)
    return mass.join('')
}
console.log(changeFirstSimbolCase('любая строка'))
// Напишите функцию capitalize(str), которая возвращает строку, в которой каждое слово начинается с заглавной буквы.
function capitalize(str) {
    massive = str.trim().split(' ')
    return massive.reduce(function(acc, item, index, arr){
        acc.push(changeFirstSimbolCase(item));
        return acc
    }, []).join(' ')
    
}

console.log(capitalize('строка, каждое слово в которой начнется с заглавной'))
// Напишите функцию changeRegister(str), которая принимает в качестве аргумента строку и и заменяет регистр каждого символа на противоположный. 
// Например, если вводится «КаЖдЫй ОхОтНиК», то на выходе должно быть «кАжДыЙ оХоТнИк».
function changeRegister(str) {
    massive = str.split('')
    return massive.map(s => {
        if (s === s.toLowerCase()){
            return s = s.toUpperCase()
        } else {
            return s = s.toLowerCase()
        }
    }).join('')
}
console.log(changeRegister('КаЖдЫй ОхОтНиК'))




// ...Напишите функцию removeChar(str), которая возвращает строку, очищенную от всех не буквенно-цифровых символов.
function removeChar (str) {
    return str.replace(/[^а-яА-Я\w\s!?]/g, '');
}
console.log(removeChar('ДАвл%3дыв.ДлыЪ(*дл№'))

// ...Напишите функцию zeros(num, len), которая дополняет нулями до указанной длины числовое значение с дополнительным знаком «+» или «-» в зависимости от передаваемого аргумента.
// zeros(num, len)

function zeros(num, len) {
    let numMass = num.toString().split('');
    if( num < 0 ) {
        numMass.shift();
        while (numMass.length < len) {
            numMass.unshift('0')
        }
        numMass.unshift('-');
        return numMass.join('');
    } else {
        while (numMass.length < len) {
            numMass.unshift('0')
        }
        numMass.unshift('+');
        return numMass.join('');
    }
}
console.log (zeros(9, 6));


// Напишите функцию comparison(str1, str2), которая сравнивает строки без учёта регистра символов.
function comparison(str1, str2) {
    let str1UpperCase = str1.split('').map(s => s.toUpperCase()).join();
    let str2UpperCase = str2.split('').map(s => s.toUpperCase()).join();
    return str1UpperCase === str2UpperCase
}
console.log(comparison('Строка 1','строка 1'))

// Напишите функцию insensitiveSearch(str1, str2), которая осуществляет поиск подстроки str2 в строке str1 без учёта регистра символов.
function insensitiveSearch(str1, str2) {
    let str1UpperCase = str1.split('').map(s => s.toUpperCase()).join();
    let str2UpperCase = str2.split('').map(s => s.toUpperCase()).join();
    return str1UpperCase.includes(str2UpperCase);

}
console.log(insensitiveSearch('строка в которой ищем', 'коо'))

// Напишите функцию initCap(str), которая преобразует стиль написания составных слов строки в CamelCase, при котором несколько слов пишутся слитно без пробелов, 
// при этом каждое слово внутри строки пишется с заглавной буквы.
function initCap(str) {
    let massWords = str.split(' ');
    return massWords.reduce((resStr, word) => {
        let newWord = word.split('').map((symbol, index) => {
            if( index === 0 ) {
                symbol = symbol.toUpperCase();
            }
            return symbol
        }).join('');
            return resStr = resStr.concat('',newWord)
    }, '');
}
console.log(initCap('преобразует стиль написания составных слов строки'))



// Напишите функцию initSnake(str), которая преобразует стиль написания составных слов строки из CamelCase в snake_case, при котором несколько слов разделяются 
// символом подчеркивания (_), причём каждое слово пишется с маленькой буквы.
function initSnake(str) {
    return str.split('').
        reduce((resStr, symbol, index ) => {
            if (index === 0) {
            return resStr = resStr.concat('', symbol.toLowerCase());
            } else if(symbol === symbol.toUpperCase()) {
            return resStr = resStr.concat('_', symbol.toLowerCase());
            } else {
            return resStr = resStr.concat('', symbol)
            }
        }, '');
}
 
console.log(initSnake('ПреобразуетСтильНаписанияИзCamelCaseВSnakeCase'))
// Напишите функцию repeatStr(str, n), которая возвращает строку повторяемую определённое количество раз.
function repeatStr(str, n) {
    return str.repeat(n)
}
console.log(repeatStr('жопа ', 5))





//... Напишите функцию path(pathname), которая возвращает имя файла (подстрока после последнего символа "\" ) из полного пути к файлу.

// Создайте функцию endsWith(), который сравнивает подстроку str1 с окончанием исходной строки str и определяет заканчивается ли строка символами подстроки.
function myEndsWith(str, str1) {
    return str.endsWith(str1)
}
console.log(`есть -ли в конце строки это слово ${myEndsWith('Строка большая', 'шая')}`)

// Напишите функцию getSubstr(str, char, pos), которая возвращает часть строки, расположенную после или до указанного символа char в зависимости от параметра pos.
function getSubstr(str, char, pos = 'before'){
    if(pos === 'after') {
        return str.slice(char);
    } else {
        return str.slice(0, char)
    }
}

console.log(getSubstr('Строка из которой будем возвращать часть', 6))


// Напишите функцию insert(str, substr, pos), которая вставляет подстроку substr в указанную позицию pos строки str. По умолчанию подстрока вставляется в начало строки.
function insert(str, substr, pos) {
    if(!pos) {
        return substr.concat('',str)
    } else {
        let startStr = str.slice(0, pos);
        let endStr = str.slice(pos);
        return startStr.concat('', substr).concat('', endStr);
    }
}
console.log(insert('строка в которую вставляем', ' строка, которую вставляем', 6))

// Напишите функцию limitStr(str, n, symb), которая обрезает строку, если она длиннее указанного количества символов n. Усеченная строка должна заканчиваться 
// троеточием «...» (если не задан параметр symb) или заданным символом symb.
function limitStr(str, n, symb='...') {
    if ( n < str.length) {
        newString = str.substring(0, n).concat('', symb);
    } else {
        newString = str;
    }
    return newString;
}

console.log(limitStr('строка, которую надо обрезать до n символов', 15, '%%%'))




// Напишите функцию count(str, stringsearch), которая возвращает количество символов stringsearch в строке str.
function count ( str, stringSearch) {
    let masStr = str.split('');
    let count = 0;
    masStr.forEach(i => i === stringSearch ? count++ : count);
    return count;
}
console.log(count('строка из символов, один из которых придется искать', 'и'))



// Напишите функцию strip(str), которая удаляет все лишние пробелы из строки str.
function strip(str) {
    return str.trim().replace(/\s{2,}/g, ' ');
}

console.log(strip('   Длинная  строка с       линшними пробелами    '))



// Напишите функцию cutString(str, n), которая удаляет лишние слова из строки str, оставив в ней n слов.
function cutString(str, n) {
    return str.split(' ').reduce((newStr, word, i) => {
        if (i < n ) {
            newStr = newStr.concat(' ', word)
        }
        return newStr
    })
}
console.log(cutString('Строка, в которой много слов, подлежи обреке', 5))

// Напишите функцию findWord(word, str), которая проверяет, существует ли в строке str слова word.
function findWord(word, str) {
    return str.includes(word)
}
console.log(`есть -ли в строке это слово ${findWord('слово', 'В строке спрятано слово и надо его найти')}`)