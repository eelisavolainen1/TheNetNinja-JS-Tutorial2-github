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

// let likes = 10;

// likes = likes + 1;
// likes++;
// likes--;
// likes+=10;
// likes -=5;
// likes *=2;
// likes /=2;

//console.log(likes);

// NaN - not a number

// console.log(5/'hello');
// console.log(5*'hello');

//let result = 'the blog has ' + likes + ' likes';
//console.log(result);


//TEMPLATE STRINGS

const title = 'Best reads of 2019';
const author = 'Mario';
const likes = 30;

// concatenation way
// let result = 'The blog called ' + title + ' by ' + author + ' has ' + likes + ' likes';
// console.log(result);


// template string way
// let result = `The blog called ${title} by ${author} has ${likes} likes`;
// console.log(result);



// creating html templates
let html = `
    <h2>${title}</h2>
    <p>${author}</p>
    <span>This blog has ${likes} likes</span>
`;

console.log(html);


// ARRAYS

let ninjas = ['shaun', 'ryu', 'chun-li'];

// ninjas[1] = 'ken';
// console.log(ninjas[1]);

// let ages = [20,25,30,35];
// console.log(ages[2]);

// let random = ['shaun', 'crystal', 30, 20];
// console.log(random);

// console.log(ninjas.length);

// ARRAY METHODS

// let result = ninjas.join(',');

// let result = ninjas.indexOf('chun-li');

// let result = ninjas.concat(['ken','crystal']);

let result =ninjas.push('ken');
result = ninjas.pop();
console.log(result);