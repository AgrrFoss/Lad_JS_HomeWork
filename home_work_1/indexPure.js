const hello = 'Hello, world!';
function sayHello() {
    console.log(hello);
}
sayHello();

console.log('..................................');
let myName = 'Gregori Gregorovski';
console.log(typeof myName);
let age = 29;
console.log(typeof age);
let isMan = true;
console.log(typeof (isMan));
let nol = null;
console.log(typeof nol);
let noItem = undefined;
console.log(typeof (noItem));
const sym = Symbol();
console.log(typeof sym);
const bigData= 9007199254740991n;
console.log(typeof bigData);
var objectUser = {
    userName: 'Alex',
    age: 34,
    isWoman: false
};

console.log(typeof objectUser);
let objectPet;
objectPet = {
    petName: 'Barsik',
    numberOfPaws: 3,
    isWoolen: true
};
const objectProduct = {
    productName: 'meet',
    isLiquid: false,
};

console.log('..................................');
console.log(myName, age, isMan, nol, noItem, sym, bigData, objectUser, objectProduct);
objectPet = {
    petName: 'Gav',
    numberOfPaws: 4,
    isWoolen: true
};
objectUser = {
    userName: 'Anna',
    age: 18,
    isWoman: true
};
// objectProduct = {
//     productName: 'масло',
//     isLiquid: true,
// };
console.log('..................................');
console.log(objectUser, objectPet, objectProduct);
