// ##
// `fizzbuzz.js`

// This is a classic interview question.Write a program that asks the user
// for a number.If the number is divisible by 3, the program logs "fizz".If the number is divisible by 5, log "buzz".If the number is divisible by 3 and 5, log "fizzbuzz".






// ifx i divisalbe by 5 then  modol operator(%) should equal 0 when divdied by5 (same goes for 3)

//next check if divisable by 3 && 5 

const prompt = require('prompt-sync')();

//get class size from user
const bizzFuzz = prompt("Enter the number you have in you head... RIGHT NOW! GO!");

const numBizzFuzz = Number(bizzFuzz)
if (((numBizzFuzz % 3 === 0) && (numBizzFuzz % 5 == 0))) {
    console.log("fizzbuzz")
} else if (numBizzFuzz % 3 === 0) {
    console.log('fizz')
} else if (numBizzFuzz % 5 === 0) {
    console.log('buzz')
} else {
    console.log("This number is not divisible by 3 or 5. What now... ")
};

// code runs smooth and as planned about this line