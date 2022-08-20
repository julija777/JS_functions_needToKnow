// Find the number of gap days between two dates
// The next function is a very useful one-liner when you 
//are working with Calendar/Dates in JavaScript. 
//Find the gap days between 2 given dates using the following code.

const dayDifference = (date1, date2) => Math.ceil(Math.abs(date1.getTime() - date2.getTime()) / (1000 * 3600 * 24));

dayDifference(new Date(2012, 1, 20), new Date(2012, 1, 21)); // 1