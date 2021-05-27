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

const age = prompt('What is your age?');

console.log('You are ', age, ' years old. This means within our self applied social constrictions....');
const numberAge = Number(age);
console.log(typeof numberAge);

if (numberAge < 16) {
    console.log("You can't drive! Or vote! Or Do Anything")
} else if (numberAge > 15 && numberAge < 18) {
    console.log("You can drive! But can't vote! At least you can go places.");
} else if (numberAge > 17 && numberAge < 25) {
    console.log("You can drive adn vote! But can't rent a car... At least you can go places, if you have a car.")
} else if (numberAge > 24) {
    console.log("You made it!");
    console.log(" Now you can drive,");
    console.log(" Now you can vote AND ");

    console.log(" NOW you can rent a car.!!");
    console.log("Sittin pretty.");
    console.log("Now go get your dancing shoes!");
}

// |
// age | message |
//     |
//     -- - | -- - |
//     |
//     less than 16 | "You can't drive." |
//     |
//     16 to 17 | "You can drive but not vote." |
//     |
//     18 to 24 | "You can vote but not rent a car." |
//     |
//     25 or older | "You can do pretty much anything." |