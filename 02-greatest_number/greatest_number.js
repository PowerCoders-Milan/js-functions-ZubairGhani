// define an arrow function that return the maximum between 3 random numbers
const greatestNumber = (a, b, c) => {


    // use a conditional statement inside the function to understand wich number is the greatest one


    if (a >= b && b >= c) {
        return (a);

    } else if (b >= a && b >= c) {
        return (b);

    } else {
        return (c);

    }
}



// declare 3 variables and assign random numbers to them

let a = Math.ceil(Math.random() * 10);
let b = Math.ceil(Math.random() * 10);
let c = Math.ceil(Math.random() * 10);





// call the function passing the numbers as arguments

console.log(a);
console.log(b);
console.log(c);

console.log(`${greatestNumber(a, b, c)} is the greatest number`) //call the function inside the ${...}