var Observable = require('FuseJS/Observable');
var date = Observable('15');
var day = Observable('');
var month = Observable('Сентябрь, 2016');
var clickCount = Observable('0');
var index = 0;
var weekNames = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
var arrayLength = weekNames.length;
var chooseDate = Observable(false);

function closeDate() {
    chooseDate.value = false;
}

function today() {
    clickCount = 15;
    index = 0;
    date.value = clickCount;
    day.value = weekNames[index];
    month.value = "Сентябрь, 2016";
    chooseDate.value = true;
}
function tomorrow() {
    clickCount = 16;
    index = 1;
    date.value = clickCount;
    day.value = weekNames[index];
    month.value = "Сентябрь, 2016";
    chooseDate.value = true;
}

function addDay() {
	clickCount += 1;
	date.value = clickCount;
	index = 3;
	day.value = weekNames[index];
    chooseDate.value = true;
}

function addWeek() {
    clickCount += 7;
    date.value = clickCount;
    index = index + 7;
	day.value = weekNames[index];
    chooseDate.value = true;
}
function subWeek() {
    clickCount -= 7;
    date.value = clickCount;
    index = index - 7;
	day.value = weekNames[index];
}
function addMonth() {
    clickCount += 30;
    date.value = clickCount;
    index = index + 2;
	day.value = weekNames[index];
    chooseDate.value = true;
}
function subMonth() {
    clickCount += 30;
    date.value = clickCount;
    index = index -2;
	day.value = weekNames[index];
}

module.exports = {
    clickCount: clickCount,
    today: today,
    tomorrow: tomorrow,
    date: date,
    day: day,
    weekNames: weekNames,
    month: month,
    addDay: addDay,
    addWeek: addWeek,
    subWeek: subWeek,
    addMonth: addMonth,
    subMonth: subMonth,
    chooseDate: chooseDate,
    closeDate: closeDate
};
