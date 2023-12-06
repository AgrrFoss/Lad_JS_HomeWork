// Реализуйте класс Worker (Работник), который будет иметь следующие свойства: name (имя), surname (фамилия), 
// rate (ставка за день работы), days (количество отработанных дней). Также класс должен иметь метод getSalary(),
//  который будет выводить зарплату работника. Зарплата - это произведение (умножение) ставки rate на количество отработанных дней days.
//   И метод getFullName() - имя и фамиля работника.

// Напишите новый класс Boss, этот класс наследуется от класса Worker и прошлого задания. Появляется новые свойство: workers - количество работников.
//  И зарплата считается по другому: произведение (умножение) ставки rate на количество отработанных дней и на количество работников.

// Модифицируйте класс Worker из предыдущей задачи следующим образом: для свойства rate и для свойства days сделайте и методы-сеттеры и методы-геттеры для их чтения.
class Worker {
    constructor ({name, surname, rate, days}) {
        this.name = name;
        this.surname = surname;
        this.rate = rate;
        this.days = days;
    }
    getSalary() {
        return (this.rate * this.days);
    }
    getFullName() {
        return `${this.name} ${this.surname}`
    }
}

class Boss extends Worker {
    constructor ({name, surname, rate, days, workers}) {
        super ({name, surname, rate, days})
        this.workers = workers;
    }
    getSalary() {
        return super.getSalary() * this.workers;
    }
}

const ivan = new Boss({
    name: 'ivan',
    surname: 'novikov',
    rate: 200,
    days: 25,
    workers: 3
})


// Реализуйте класс MyString, который будет иметь следующие методы: метод reverse(), который параметром принимает строку,
//  а возвращает ее в перевернутом виде, метод ucFirst(), который параметром принимает строку, а возвращает эту же строку, 
//  сделав ее первую букву заглавной и метод ucWords, который принимает строку и делает заглавной первую букву каждого слова этой строки.
class MyString {
    constructor (string) {
        this.string = string;
    }
    reverse () {
        return this.string.split('').reverse().join('');
    }
    ucFirst() {
        let newString = this.string.split('')
        newString[0] = newString[0].toUpperCase();
        return newString.join('');
    }
    ucWords() {
        let massWors = this.string.split(' ');
        return massWors.reduce((result, word) => {
            let massSymbols = word.split('')
            massSymbols[0] = massSymbols[0].toUpperCase();
            massSymbols = massSymbols.join('');
            result.push(massSymbols);
            return result;
        }, []).join(' ');
    }
}
const exampleString = new MyString('жили у бабуси 2 веселых гуся');
console.log(exampleString.ucWords())


// Реализуйте класс Validator, который будет проверять строки. К примеру, у него будет метод isEmail параметром принимает строку 
// и проверяет, является ли она корректным емейлом или нет. Если является - возвращает true, если не является - то false. Кроме того,
//  класс будет иметь следующие методы: метод isDomain для проверки домена, метод isDate для проверки даты и метод isPhone для проверки телефона.



class Validator {
    constructor (string) {
        this.string = string;
        this.date = /^(?:(?:31(\/|-|\.)(?:0?[13578]|1[02]))\1|(?:(?:29|30)(\/|-|\.)(?:0?[1,3-9]|1[0-2])\2))(?:(?:1[6-9]|[2-9]\d)?\d{2})$|^(?:29(\/|-|\.)0?2\3(?:(?:(?:1[6-9]|[2-9]\d)?(?:0[48]|[2468][048]|[13579][26])|(?:(?:16|[2468][048]|[3579][26])00))))$|^(?:0?[1-9]|1\d|2[0-8])(\/|-|\.)(?:(?:0?[1-9])|(?:1[0-2]))\4(?:(?:1[6-9]|[2-9]\d)?\d{2})$/
        this.email = /^[A-Z0-9._%+-]+@[A-Z0-9-]+.+.[A-Z]{2,4}$/i
        this.domain = /https?:\/\/(?:[-\w]+\.)?([-\w]+)\.\w+(?:\.\w+)?\/?.*/i
        this.phone = /^\+?(\d{1,3})?[- .]?\(?(?:\d{2,3})\)?[- .]?\d\d\d[- .]?\d\d\d\d$/
    }
    isDate() {
        return this.date.test(this.string)
    }
    isEmail() {
        return this.email.test(this.string)
    }
    isDomain() {
        return this.domain.test(this.string)
    }
    isPhone() {
        return this.phone.test(this.string)
    }
}
const initialString = new Validator ('23.01.2223')
console.log(initialString.isDate())

// Реализуйте класс Student (Студент), который будет наследовать от класса User, подобно тому, как это сделано в теоретической части урока.
//  Этот класс должен иметь следующие свойства: name (имя, наследуется от User), surname (фамилия, наследуется от User), year (год поступления в вуз).
//   Класс должен иметь метод getFullName() (наследуется от User), с помощью которого можно вывести одновременно имя и фамилию студента.
//    Также класс должен иметь метод getCourse(), который будет выводить текущий курс студента (от 1 до 5).
//     Курс вычисляется так: нужно от текущего года отнять год поступления в вуз. Текущий год получите самостоятельно с помощью new Date.
class User {
    constructor (name, surname) {
        this.name = name;
        this.surname = surname;
    }
    getFullName() {
        return `${this.name} ${this.surname}`
    }
}

 class Student extends User {
    constructor (name, surname, year) {
        super (name, surname)
        this.year = year;
    }
    getCourse() {
        let date = new Date()
        let course = date.getFullYear() - this.year;
        let per
        if (course === 6) {
            per = 'год'
        } else if (course > 6 && course < 9) {
            per = 'года'
        } else {
            per = 'лет'
        }
        return course >= 5 ? `${this.getFullName.call(this)} закончил учиться ${course - 5 + ' ' +per} назад` : `Учится на ${course + 1} курсе`;
    }
 }

 const student = new Student ('Ivan','Ivanov', 2018)
 console.log(student.getCourse())