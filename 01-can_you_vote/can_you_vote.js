// define a function that will check if I can vote or not
const canIVote = age => {
    // define a variable legalAge
const legalAge = 18;


    // create if else statement that console.log() if you can vote or not
    if (age >= legalAge) {
        console.log(" you can vote")
        
    } else {
        console.log("you are too young");
    }
}

// define a variable for your age
let myAge = 30;
// call the function and see if you can vote

canIVote(myAge)
