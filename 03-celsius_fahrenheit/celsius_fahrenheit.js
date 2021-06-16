// define a 
function multiplyByNineFifths(number) {
    return (number * 9 / 5);
}

//return number*(9/5)

// define a 
function getFahrenheit(celsius) {
    return multiplyByNineFifths(celsius) + 32;
}

console.log(getFahrenheit(18)); // call getFahrenheit();



// do the same thing starting from Fahrenheit to Celsius
function fahrenheit(number1) {
    return(number1 * 9/5);
  
} 
function getCelsius(Fahre) {
    return fahrenheit(Fahre) -32 ;
    
}

console.log(getCelsius(18)) ;
    
