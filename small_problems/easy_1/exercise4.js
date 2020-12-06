/*
Build a program that asks the user to enter the length and width
of a room in meters, and then logs the area of the room to the console
 in both square meters and square feet.
*/

const readline = require('readline-sync');
const METERS_IN_FEET = 10.7639;

function prompt(message) {
  console.log(`=> ${message}`);
}

prompt("Enter the length of the room in meters:");
let roomLength = Number(readline.question());

prompt("Enter the width of the room in meters:");
let roomWidth = Number(readline.question());

let roomAreaMeters = roomLength * roomWidth;
let roomAreaFeet = roomAreaMeters * METERS_IN_FEET;

prompt(`The area of the room is ${roomAreaMeters} square meters (${roomAreaFeet.toFixed(2)} square feet).`);