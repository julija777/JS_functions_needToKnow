// Check if the provided day is a weekday
// Using this function, you will be able to check 
//if the date that you pass as the argument, 
//is either a weekday or weekend day.

const isWeekday = (date) => date.getDay() % 6 !== 0;

console.log(isWeekday(new Date(2019, 0, 1))); // true
console.log(isWeekday(new Date(2019, 0, 7))); // false