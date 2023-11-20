// Что выведет функция?
function f() {
 alert(this);
}
let user = {
 g: f.bind(null),
};
user.g();
// object global




// Можем ли мы изменить this дополнительным связыванием?
function f() {
 alert(this.name);
}
f = f.bind({ name: "Вася" }).bind({ name: "Петя" });
f();
// Нет, вернется результат первого связывания. В окне выведется "Вася"



// В свойство функции записано значение. Изменится ли оно после применения bind?
function sayHi() {
 alert( this.name );
}
sayHi.test = 5;
let bound = sayHi.bind({
 name: "Вася"
});
alert( bound.test );
// нет, у bound не будет значения .test



// Вызов askPassword() в приведённом ниже коде должен проверить пароль и затем вызвать user.loginOk/loginFail в зависимости от ответа.
// Однако, его вызов приводит к ошибке. Почему?
function askPassword(ok, fail) {
 let password = prompt("Password?", '');
 if (password == "rockstar") ok();
 else fail();
}

let user = {
 name: 'Вася',

 loginOk() {
   alert(`${this.name} logged in`);
 },

 loginFail() {
   alert(`${this.name} failed to log in`);
 },

};
askPassword(user.loginOk, user.loginFail);
// loginOk  и loginFail вызываются в функции askPassword, и так как this записывается при вызове функции в значения попадает
// глобальная область видимости



// Объект user был изменён. Теперь вместо двух функций loginOk/loginFail у него есть только одна – user.login(true/false).
// Что нужно передать в вызов функции askPassword в коде ниже, чтобы она могла вызывать функцию user.login(true) 
// как ok и функцию user.login(false) как fail?

function askPassword(ok, fail) {
 let password = prompt("Password?", '');
 if (password == "rockstar") ok();
 else fail();
}

let user = {
 name: 'John',

 login(result) {
   alert( this.name + (result ? ' logged in' : ' failed to log in') );
 }
};

askPassword(user.login.call(user, true), user.login.call( user, false))
// передать методы объекта user  с нужным арументом



// Напишите в указанном месте конструкцию с методом bind() так, чтобы this внутри функции func всегда указывал на value.
// из переменной elem.
const elem = {value: ‘Привет’}

function func(surname, name) {
alert(this.value + ', ' + surname + ' ' + name);
}

func = func.bind(elem);

func('Иванов', 'Иван'); //тут должно вывести 'привет, Иванов Иван'
func('Петров', 'Петр'); //тут должно вывести 'привет, Петров Петр'




// Есть функция которая складывает три числа.Выполните каррирование.
const sum = (a, b, c) => a + b + c
function carSum (a) {
    return (b) => {
        return c => a + b + c}}




// Реализовать таймер-функцию используя замыкания. Функция принимает два  аргумента начальное значение и значение завершения. 
// Таймер движется назад.При достижении точки завершения в консоль выводится значение таймера и сообщение о завершении работы таймера.
function setTimer ( start, stop) {
    return () => {
        count = start;
        const intervalId = setInterval(() => {
            if (count > stop ) {
                console.log(count--)
            } else {
                console.log(`Точка завершения достигнута, значение таймера ${count}. Таймер завершил свою работу.`)
                clearInterval(intervalId);
            }
        }, 500);
    }
}

setTimer(10, 5)();