// 2. Get a random number in a specific range
// An essential JavaScript function to generate a random number 
// between a specific range of numbers. 
// You provide a minimum and a maximum value as arguments 
// and the one-line function returns a random number from the given range.

const randomNumberInRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

console.log(randomNumberInRange(1, 10));