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