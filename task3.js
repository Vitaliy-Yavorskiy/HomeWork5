// Завдання 3

// Написати розв’язок нижче описаного завдання за допомогою function declaration:
// Потрібно створити функцію, яка повертає максимальний переданий їй числовий параметр.
// Кількість параметрів у функції може бути від 2х і більше.
// Забороняється використовувати Math.max().
// Приклад роботи:
// max(5,-2) – має повернути 5.
// max(5,-2, 30, 6) – має повернути 30


let num1 = +prompt('first value');
let num2 = +prompt('second value');
let num3 = +prompt('third value');
let num4 = +prompt('fourth value');

function maxNumber(num1, num2, num3, num4)

if(num1 > num2 && num1 > num3 && num1 > num4){
    console.log("Найбільше число num1")
}else if (num2 > num1 && num2 > num3 && num2 > num4){
    console.log("Найбільше число num2")
}else if (num3 > num1 && num3 > num2 && num3 > num4){
    console.log("Найбільше число num3")
}else if (num4 > num1 && num4 > num2 && num4 > num3){
    console.log("Найбільше число num4")
}