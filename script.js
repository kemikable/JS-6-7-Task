//2.6.3

let month = +prompt("Введите номер месяца:");
if (month === null || isNaN(month) || month < 1 || month > 12) {
    console.log("Введено неверное значение");
} else {
    switch (month) {
        case 1:
            console.log("Январь");
            break;
        case 2:
            console.log("Февраль");
            break;
        case 3:
            console.log("Март");
            break;
        case 4:
            console.log("Апрель");
            break;
        case 5:
            console.log("Май");
            break;
        case 6:
            console.log("Июнь");
            break;
        case 7:
            console.log("Июль");
            break;
        case 8:
            console.log("Август");
            break;
        case 9:
            console.log("Сентябрь");
            break;
        case 10:
            console.log("Октябрь");
            break;
        case 11:
            console.log("Ноябрь");
            break;
        case 12:
            console.log("Декабрь");
            break;
    }
}

//2.6.4

let date = prompt("Введите дату в формате ГГГГ.ММ.ДД:");

if (date === null || !/^\d{4}\.\d{2}\.\d{2}$/.test(date)) {
    console.log("Введено неверное значение");
} else {
    let year = date.split('.')[0];
    let month = +date.split('.')[1];
    let day = date.split('.')[2];
    console.log(`Вы ввели ${day} ${getMonthName(month)} ${year} года`);
}

function getMonthName(month) {
    switch (month) {
        case 1:
            return "января";
        case 2:
            return "февраля";
        case 3:
            return "марта";
        case 4:
            return "апреля";
        case 5:
            return "мая";
        case 6:
            return "июня";
        case 7:
            return "июля";
        case 8:
            return "августа";
        case 9:
            return "сентября";
        case 10:
            return "октября";
        case 11:
            return "ноября";
        case 12:
            return "декабря";
    }
}

///2.7.4
let rubles = 5000;
let dollars = 700;
let exchange = 75;
let convertedDollar = dollars * exchange;

console.log(rubles + convertedDollar);


//2.7.5

function NumberToText() {
    let num = prompt("Введите число от 1 до 99:");
    let ones = ["один", "два", "три", "четыре", "пять", "шесть", "семь", "восемь", "девять"];
    let tens = ["десять", "одиннадцать", "двенадцать", "тринадцать", "четырнадцать", "пятнадцать", "шестнадцать", "семнадцать", "восемнадцать", "девятнадцать"];
    let dozens = ["двадцать", "тридцать", "сорок", "пятьдесят", "шестьдесят", "семьдесят", "восемьдесят", "девяносто"];

    let result;

    if (num === null || isNaN(num) || num < 1 || num > 99) {
        result = "Некорректное число";
    } else if (num < 10) {
        result = ones[num - 1];
    } else if (num < 20) {
        result = tens[num - 10];
    } else {
        let firstDigit = Math.floor(num / 10);
        let secondDigit = num % 10;

        result = dozens[firstDigit - 2];

        if (secondDigit > 0) {
            result += " " + ones[secondDigit - 1];
        }
    }

    console.log(result);
}

NumberToText();


//bonus
// Создать массив объектов, содержащих вопросы, варианты ответов и правильный ответ
var questions = [
    {
        question: "В каком году был основан Google?",
        choices: ["1998", "2002", "2005", "2010"],
        correctAnswer: 1
    },
    {
        question: "Какое животное является символом США?",
        choices: ["Буйвол", "Орел", "Медведь", "Лев"],
        correctAnswer: 2
    },
    {
        question: "Какой материк самый большой по площади?",
        choices: ["Африка", "Антарктида", "Евразия", "Австралия"],
        correctAnswer: 3
    }
];

// Функция для вывода вопросов и вариантов ответов
function displayQuestion(questionObj) {
    var message = questionObj.question + "\n";
    for (var i = 0; i < questionObj.choices.length; i++) {
        message += (i + 1) + ": " + questionObj.choices[i] + "\n";
    }
    return message;
}

// Функция для запроса ответа у пользователя и проверки правильности
function askQuestion(questionObj) {
    var message = displayQuestion(questionObj);
    var playerAnswer = parseInt(prompt(message));
    if (playerAnswer === questionObj.correctAnswer + 1) {
        alert("Правильно!");
        return true;
    } else {
        alert("Неправильно.");
        return false;
    }
}

// Цикл для вывода каждого вопроса и запроса ответа у пользователя
for (var i = 0; i < questions.length; i++) {
    var isCorrect = askQuestion(questions[i]);
    if (!isCorrect) {
        alert("Конец игры!");
        break;
    }
}


