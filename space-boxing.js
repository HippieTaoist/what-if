// ##
// `space-boxing.js`

// Julio Cesar Chavez Mark VII is an interplanetary space boxer, who currently holds the championship belts
// for various weight categories on many different planets within our solar system.However, it is often difficult
// for him to recall what his "target weight"
// needs to be on earth in order to make the weight class on other planets.Write a program to help him keep track of this.

// It should ask him what his earth weight is, and to enter a number
// for the planet he wants to fight on.It should then compute his weight on the destination planet based on the table below:

//     |
//     # | Planet | Relative gravity |
//     |
//     -- - | -- - | -- - |
//     |
//     1 | Venus | 0.78 |
//     |
//     2 | Mars | 0.39 |
//     |
//     3 | Jupiter | 2.65 |
//     |
//     4 | Saturn | 1.17 |
//     |
//     5 | Uranus | 1.05 |
//     |
//     6 | Neptune | 1.23 |

//     So,
//     for example,
//     if Julio weighs 128 lbs.on earth, then he would weigh just under 50 lbs.on Mars, since Mars ' gravity is 0.39 times earth'
// s gravity.(128 * 0.39 is 49.92).


const prompt = require('prompt-sync')();

const weight = prompt("Type your Earth weight, please.");
const numWeight = Number(weight);

const planet = prompt('Enter your FIGHT PLANET Number.  Your Choices:    [ 1 - Venus ] [ 2 - Mars ] [ 3 - Jupiter ] [ 4 - Saturn ] [ 5 - Uranus ] [ 6 - Neptune ]');
const numPlanet = Number(planet);

if (numPlanet === 1) {
    console.log(numWeight * .78, ' is your VENUS WEIGHT')
} else if (numPlanet === 2) {
    console.log(numWeight * .39, ' is your MARS WEIGHT')
} else if (numPlanet === 3) {
    console.log(numWeight * 2.65, ' is your JUPITER WEIGHT')
} else if (numPlanet === 4) {
    console.log(numWeight * 1.17, ' is your SATURN WEIGHT')
} else if (numPlanet === 5) {
    console.log(numWeight * 1.05, ' is your URANUS WEIGHT')
} else if (numPlanet === 6) {
    console.log(numWeight * 1.23, ' is your NEPTUNE WEIGHT')
} else if (numPlanet > 6) {
    console.log('You are fighting out of this Solar System... Reel it in buddy.');