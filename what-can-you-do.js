// ## `what-can-you-do.js`

// Write a program that prompts the user for their age using the `prompt-sync` Node dependency.

// Then, using if statements, else if, and else statements, write code that displays a different message depending on the age given.

// | age |	message |
// | --- | --- |
// | less than 16 |	"You can't drive." |
// | 16 to 17	| "You can drive but not vote." |
// | 18 to 24	| "You can vote but not rent a car." |
// | 25 or older |	"You can do pretty much anything." |

//_____________Start Of My Code___________


// Import the prompt-sync dependency

const prompt = require('prompt-sync')();

// use prompt to gather age
const age = prompt('What is your age?');

// Log out age | change age type to number from string |
//log out type of numberAge | 
console.log('You are ', age, ' years old. This means:');
const numberAge = Number(age);
console.log(typeof numberAge);

// Test number against options to display requested result.
if (numberAge < 16) {
    console.log("You can't drive.")
} else if (numberAge > 15 && numberAge < 18) {
    console.log("You can drive but can not vote.");
} else if (numberAge > 17 && numberAge < 25) {
    console.log("You can vote but not rent a car... ")
} else if (numberAge > 24) {
    console.log("You can do pretty much anything.");
}

// ALL WORKING ABOVE THIS LINE