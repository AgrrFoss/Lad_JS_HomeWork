const hello : string = 'Hello, world!';
function sayHello () {
    console.log (hello);
}
sayHello();

let myName: string = 'Gregori Gregorovski';
let age: number = 29;
let isMan: boolean = true;
let noItem: undefined = undefined;
let nol : null = null;
const sym : symbol = Symbol();
const bigData: bigint = 9007199254740991n;
let objectUser:  {
    userName: string
    age: number
    isWoman: boolean
}
objectUser = {
    userName: 'Alex',
    age: 34,
    isWoman: false
}

var objectPet: {
    petName: string
    numberOfPaws: number
    isWoolen: boolean
}
objectPet = {
    petName: 'Barsik',
    numberOfPaws: 3,
    isWoolen: true
}

const objectProduct: {
    productName: string
    isLiquid: boolean
} = {
    productName: 'meet',
    isLiquid: false,
}

console.log(myName, age, isMan, noItem, objectUser, objectProduct);

objectPet = {
    petName: 'Gav',
    numberOfPaws: 4,
    isWoolen: true
}

objectUser = {
    userName: 'Anna',
    age: 18,
    isWoman: true
}

console.log('..................................')
console.log(objectUser, objectPet, objectProduct);