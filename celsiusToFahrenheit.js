// If you are dealing with temperature in your project then 
// these 2 are very helpful JavaScript functions. 
// These 2 functions will help you convert Fahrenheit to Celsius 
// and vice-versa.



const celsiusToFahrenheit = (celsius) => celsius * 9 / 5 + 32;
const fahrenheitToCelsius = (fahrenheit) => (fahrenheit - 32) * 5 / 9;

celsiusToFahrenheit(30);