// ## `weekday.js`

const PromptSync = require("prompt-sync");

// Write a program that prompts the user for a number, then displays the appropriate day of the week according to the table below.

// | number | day |
// | --- | --- |
// | 1 | Monday |
// | 2 | Tuesday |
// | 3 | Wednesday |
// | 4 | Thursday |
// | 5 | Friday |
// | 6 | Saturday |
// | 7 | Sunday |
// | anything else | "error" |


// Get number from user and apply it to 'day'
const prompt = require('prompt-sync')();
const day = prompt('Pick a number any number! As long as it"s between 1 and 7     ');

//turn day into a number
const numDay = Number(day);

//Return the day of the week based on the number given.
if (numDay === 1) {
    console.log('1 | Monday')

} else if (numDay === 2) {
    console.log('2 | Tuesaday')

} else if (numDay === 3) {
    console.log('3 | Wednesday')

} else if (numDay === 4) {
    console.log('4 | Thursday')

} else if (numDay === 5) {
    console.log('5 | Friday')

} else if (numDay === 6) {
    console.log('6 | Saturday')

} else if (numDay === 7) {
    console.log('7 | Sunday')

} else if (numDay > 7) {
    console.log('error')

};

// ALL CODE WORKING ABOVE THIS LINE