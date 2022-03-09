let age = 25;
let year = 2022;

// log things to console
console.log(age, year);

age = 30;
console.log(age);

const points = 100;
// points = 50; cannot do this, can't revalue the const variable
console.log(points);

var score = 75;
console.log(score);

// strings
console.log('hello, world');

let email = 'mario@email.co.fi'
console.log(email);

// string concatenation
let firstName = 'Brandon';
let lastName = 'Sanderson';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

//getting characters
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());
//let result = fullName.toLowerCase();
//console.log(result);

let index = email.indexOf('@');
console.log(index);

// COMMON STRING METHODS

// let email = 'mario@email.co.fi';  --> THIS VAR IS ALREADY DECLARED UPPER

// let emailResult = email.lastIndexOf('o');
// console.log(emailResult);

// let result = email.slice(0, 5);

// let result = email.substr(4,10);

// let result = email.replace('m', 'w');

// let result = email.replace('l', 'w');

// console.log(result);

// NUMBERS

let radius = 10;
const pi = 3.14;

// console.log(radius, pi);

// MATH OPERATORS +, -, *, /, **, %

console.log(10/2);

// let result = radius % 3;
// let result = pi * radius**2;

// ORDER OF OPERATION - B I D M A S (BRACKETS, INDICES, DIVISION, MULTIPLICATION, ADDITION, SUBTRACTION)

// let result = 5 * (10-3)**2;

// console.log(result);

let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;
// likes+=10;
// likes -=5;
// likes *=2;
// likes /=2;

console.log(likes);

// NaN - not a number

console.log(5/'hello');
console.log(5*'hello');