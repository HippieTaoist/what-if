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

const prompt = require('prompt-sync')();
const day = prompt('Pick a number any number! As long as it"s between 1 and 7')