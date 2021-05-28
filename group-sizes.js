// ## `group-sizes.js`

// Lets say we have a class of students that we want to separate into groups of three. Inevitably, if there are leftover students, we may need to have some groups of two. A group of one is not something that we want.

// **Example 1:** if we have a class size of 15, we would create 5 groups of 3 and 0 groups of 2 
// **Example 2:** if we have a class size of 16, we would create 4 groups of 3 and 2 groups of 2
// **Example 3:** if we have a class size of 17, we would create 5 groups of 3 and 1 group of 2

// Write a program that prompts the user for a class size, then logs out the number of groups of 3 the number of groups of 2 that the class would be divided into.
const prompt = require('prompt-sync')();

//get class size from user
const classSize = prompt("What is your class size? ");

//change type from sting to number
const numClassSize = Number(classSize);

//apply amount of group size 3's you can have
const groupSize3 = numClassSize / 3;

//transfer remainder to be tested as a whole number
const wholeRemain = numClassSize - (Math.floor(groupSize3) * 3)

//Tests size of class outputs defined by group numbers.
if (wholeRemain === 2) {
    console.log(Math.floor(groupSize3), " groups of 3")
    console.log("One Group of 2")
} else if (wholeRemain === 1) {
    console.log(Math.floor(groupSize3), ' groups of 3')
    console.log("2 Groups of 2")

} else if (wholeRemain === 0) {
    console.log(Math.floor(groupSize3), ' groups of 3')
    console.log("0 Groups of 2")
}