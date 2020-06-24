// TASK1
let number = Number(prompt("Введите значение"));
if (number === 10) {
    alert("Верно");
} else {
    alert("Неверно");
}

// TASK2
let name = prompt("Введите имя")
if (name === "John") {
    alert(`Привет ${name}`)
}

// TASK3
let minute = prompt("Введите количество минут")
if (0 <= minute && minute <= 14) {
    console.log("Первая четверть часа")
} else if (15 <= minute && minute <= 29) {
    console.log("Вторая четверть часа")
} else if (30 <= minute && minute <= 44) {
    console.log("Третья четверть часа")
} else if (45 <= minute && minute <= 59) {
    console.log("Четвёртая четверть часа")
}

// TASK4
let a = parseFloat(prompt("Введите первое число"))
let b = parseFloat(prompt("Введите второе число"))
if (a <= 1 && b >= 3) {
    console.log(a + b)
} else {
    console.log(a - b)
}

// TASK5
let num = prompt("Введите значение от 1 до 4")
let result;
switch (num) {
    case '1':
    case 'один':
        result = 'Зима';
        break;
    case '2':
    case 'два':
        result = 'Весна';
        break;
    case '3':
    case 'три':
        result = 'Лето';
        break;
    case '4':
    case 'четыре':
        result = 'Осень';
        break;
    default:
        result = 'Неизвесное значение'
}

console.log(result)

// TASK6
let login = prompt("Введите логин")
let pass = (prompt("Введите пароль"))
if (login === 'ivan' && pass === "333" || login === 'ssss' && pass === "666" || login === 'gibs' && pass === "0000") {
    console.log('Добро пожаловать!')
} else {
    console.log('Пользователь не найден')
}

// TASK7
let age = Number(prompt("Сколько вам лет?"))
let access = (age >= 21) ? 'You may enter' : 'You may not enter';
console.log(access)

// TASK8
let num1 = parseFloat(prompt("Введите первое число"))
let num2 = parseFloat(prompt("Введите второе число"))
let num3 = parseFloat(prompt("Введите третье число"))
if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Ошибка, есть одинаковые числа")
}
    else if (num1 > num2 && num1 > num3) {
    console.log(num1)
} else if (num2 > num1 && num2 > num3) {
    console.log(num2)
} else {
    console.log(num3)
}

// TASK9

num1 = parseFloat(prompt("Введите первое число"))
num2 = parseFloat(prompt("Введите второе число"))
num3 = parseFloat(prompt("Введите третье число"))
if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Ошибка, есть одинаковые числа")
} else if (num1 > num2 && num1 > num3) {
    console.log(num1)
} else if (num2 > num1 && num2 > num3) {
    console.log(num2)
} else {
    console.log(num3)
}

if (num1 === num2 || num1 === num3 || num2 === num3) {
    console.log("Ошибка, есть одинаковые числа")
} else if (num1 < num2 && num1 < num3) {
    console.log(num1)
} else if (num2 < num1 && num2 < num3) {
    console.log(num2)
} else {
    console.log(num3)
}

// TASK10
let score = Number(prompt("Введите вашу оценку от 1 до 12"))
if (score >= 10 && score <= 12) {
    console.log(5)
} else if (score >= 7 && score <= 9) {
    console.log(4)
} else if (score >= 5 && score <= 6) {
    console.log(3)
} else if (score >= 3 && score <= 5) {
    console.log(2)
} else if (score >= 1 && score <= 2) {
    console.log(1)
} else {
    console.log("Ошибка, неверная оценка")
}