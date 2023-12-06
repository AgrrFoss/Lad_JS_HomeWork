// Создание To Do List, необходимо средствами JS создать страницу на которой будут элементы:
// header содержащий заголовок страницы
// контейнер с контентом страницы
// поле ввода input
// список элементов (число элементов > 1)
// кнопка добавления To Do
let body = document.getElementsByTagName('body')[0];
let title = document.createElement('h1');
title.innerHTML = 'Текст заголовка'
body.appendChild(title);
let container = document.createElement('div')
body.appendChild(container);
let input = document.createElement('input');
input.setAttribute('type', 'text')
container.appendChild(input);
let list = document.createElement('ul')
container.appendChild(list);
let button = document.createElement('button');
button.innerHTML = 'Тыкай'
container.appendChild(button);


// Используя наработки первого задания, добавить возможность добавления
//  To Do в список с помощью поля ввода input и кнопки создания нового To Do.
function handler () {
    let newLi = document.createElement('li');
    newLi.innerHTML = input.value;
    list.appendChild(newLi);
    
}
button.addEventListener('click', handler)
console.log(body)