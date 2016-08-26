var Observable = require('FuseJS/Observable');
var date = Observable(':');
var day = Observable('');
var month = Observable('');
var clickCount = 0;
var index = 0;
var weekNames = ['понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота', 'воскресенье'];
var arrayLength = weekNames.length;

function today() {
    clickCount = 15;
    index = 3;
    date.value = clickCount;
    day.value = weekNames[index];
    month.value = "Август, 2016";
}
function tomorrow() {
    clickCount = 16;
    index = 4;
    date.value = clickCount;
    day.value = weekNames[index];
    month.value = "Август, 2016"
}

function addDay() {
	clickCount += 1;
	date.value = clickCount;
	index += 1;
	day.value = weekNames[index];

}
function ad() {
	clickCount = clickCount +1;
}

function subDay() {
    clickCount -= 1;
    date.value = clickCount;
    index -= 1;
	day.value = weekNames[index];
}
function addWeek() {
    clickCount += 7;
    date.value = clickCount;
    index = index + 7;
	day.value = weekNames[index];
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
}
function subMonth() {
    clickCount += 30;
    date.value = clickCount;
    index = index -2;
	day.value = weekNames[index];
}

module.exports = {
    clickCount: clickCount,
    ad: ad,
    today: today,
    tomorrow: tomorrow,
    date: date,
    day: day,
    weekNames: weekNames,
    month: month,
    addDay: addDay,
    subDay: subDay,
    addWeek: addWeek,
    subWeek: subWeek,
    addMonth: addMonth,
    subMonth: subMonth
};
